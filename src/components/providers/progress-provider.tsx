'use client';

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from 'react';

import { QUESTIONS } from '@/lib/data';
import type { IQuestion, QuestionStatus, ITopic } from '@/types';

const STORAGE_KEY = 'fip-progress';
const LISTENERS = new Set<() => void>();

type StatusMap = Record<string, QuestionStatus>;

interface IProgressContextValue {
    getStatus: (questionId: string, fallback: QuestionStatus) => QuestionStatus;
    setStatus: (questionId: string, status: QuestionStatus) => void;
    markCompleted: (questionId: string) => void;
    markInProgress: (questionId: string) => void;
    resetAllProgress: () => void;
    resetTopicProgress: (topicId: string) => void;
    getQuestion: (question: IQuestion) => IQuestion;
    getTopicProgress: (topicId: string) => {
        total: number;
        completed: number;
        inProgress: number;
        remaining: number;
    };
    getGlobalProgress: () => {
        total: number;
        completed: number;
        percent: number;
    };
    enrichTopic: (topic: ITopic) => ITopic;
}

const ProgressContext = createContext<IProgressContextValue | null>(null);

const buildBaseStatuses = (): StatusMap => {
    const seeded: StatusMap = {};
    for (const question of QUESTIONS) {
        seeded[question.id] = question.status;
    }
    return seeded;
};

/** Cached for getServerSnapshot — must be a stable reference. */
const SERVER_STATUSES: StatusMap = buildBaseStatuses();

let clientSnapshot: StatusMap = SERVER_STATUSES;

const emit = () => {
    LISTENERS.forEach((listener) => listener());
};

const readStoredStatuses = (): StatusMap => {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return {};
        }
        return JSON.parse(raw) as StatusMap;
    } catch {
        return {};
    }
};

const getServerSnapshot = (): StatusMap => {
    return SERVER_STATUSES;
};

const getClientSnapshot = (): StatusMap => {
    return clientSnapshot;
};

const hydrateClientSnapshot = (): StatusMap => {
    const next = { ...SERVER_STATUSES, ...readStoredStatuses() };
    clientSnapshot = next;
    return next;
};

const writeStatuses = (next: StatusMap) => {
    clientSnapshot = next;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    emit();
};

const subscribe = (listener: () => void) => {
    LISTENERS.add(listener);

    // Hydrate from localStorage once on first client subscription.
    if (clientSnapshot === SERVER_STATUSES) {
        hydrateClientSnapshot();
        // Notify after hydrate so UI picks up stored progress.
        queueMicrotask(() => emit());
    }

    return () => LISTENERS.delete(listener);
};

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const statuses = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

    const getStatus = useCallback(
        (questionId: string, fallback: QuestionStatus) => statuses[questionId] ?? fallback,
        [statuses],
    );

    const setStatus = useCallback((questionId: string, status: QuestionStatus) => {
        const next = { ...clientSnapshot, [questionId]: status };
        writeStatuses(next);
    }, []);

    const markCompleted = useCallback((questionId: string) => setStatus(questionId, 'completed'), [setStatus]);

    const markInProgress = useCallback((questionId: string) => setStatus(questionId, 'in-progress'), [setStatus]);

    const resetAllProgress = useCallback(() => {
        const next: StatusMap = {};
        for (const question of QUESTIONS) {
            next[question.id] = 'not-started';
        }
        writeStatuses(next);
    }, []);

    const resetTopicProgress = useCallback((topicId: string) => {
        const next = { ...clientSnapshot };
        for (const question of QUESTIONS) {
            if (question.topicId === topicId) {
                next[question.id] = 'not-started';
            }
        }
        writeStatuses(next);
    }, []);

    const getQuestion = useCallback(
        (question: IQuestion): IQuestion => ({
            ...question,
            status: getStatus(question.id, question.status),
        }),
        [getStatus],
    );

    const getTopicProgress = useCallback(
        (topicId: string) => {
            const questions = QUESTIONS.filter((item) => item.topicId === topicId).map(getQuestion);
            const completed = questions.filter((item) => item.status === 'completed').length;
            const inProgress = questions.filter((item) => item.status === 'in-progress').length;
            return {
                total: questions.length,
                completed,
                inProgress,
                remaining: questions.length - completed,
            };
        },
        [getQuestion],
    );

    const getGlobalProgress = useCallback(() => {
        const total = QUESTIONS.length;
        const completed = QUESTIONS.filter(
            (question) => getStatus(question.id, question.status) === 'completed',
        ).length;
        return {
            total,
            completed,
            percent: total === 0 ? 0 : Math.round((completed / total) * 100),
        };
    }, [getStatus]);

    const enrichTopic = useCallback(
        (topic: ITopic): ITopic => {
            const progress = getTopicProgress(topic.id);
            return {
                ...topic,
                questionCount: progress.total,
                completedCount: progress.completed,
            };
        },
        [getTopicProgress],
    );

    const value = useMemo(
        () => ({
            getStatus,
            setStatus,
            markCompleted,
            markInProgress,
            resetAllProgress,
            resetTopicProgress,
            getQuestion,
            getTopicProgress,
            getGlobalProgress,
            enrichTopic,
        }),
        [
            getStatus,
            setStatus,
            markCompleted,
            markInProgress,
            resetAllProgress,
            resetTopicProgress,
            getQuestion,
            getTopicProgress,
            getGlobalProgress,
            enrichTopic,
        ],
    );

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within ProgressProvider');
    }
    return context;
};
