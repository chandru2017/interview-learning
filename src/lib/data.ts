import type { IQuestion, ITopic, ITopicSectionGroup, TopicSection } from '@/types';

import { QUESTIONS } from '@/lib/questions';

export { QUESTIONS };

export const TOPICS: ITopic[] = [
    {
        id: 'about-experience',
        name: 'About Experience',
        section: 'ABOUT',
        icon: 'BookOpen',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'html-css-ui',
        name: 'HTML / CSS / UI',
        section: 'CORE',
        icon: 'Palette',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        section: 'CORE',
        icon: 'Zap',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        section: 'CORE',
        icon: 'FileCode',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'react',
        name: 'React',
        section: 'FRAMEWORKS',
        icon: 'Atom',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        section: 'FRAMEWORKS',
        icon: 'Layers',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'browser-web-api',
        name: 'Browser & Web APIs',
        section: 'WEB PLATFORM',
        icon: 'Globe',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'frontend-performance',
        name: 'Frontend Performance',
        section: 'QUALITY',
        icon: 'Gauge',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'accessibility',
        name: 'Accessibility',
        section: 'QUALITY',
        icon: 'Accessibility',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'seo',
        name: 'SEO',
        section: 'QUALITY',
        icon: 'Search',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'frontend-architecture',
        name: 'Frontend Architecture',
        section: 'ARCHITECTURE',
        icon: 'Network',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'security',
        name: 'Security',
        section: 'ARCHITECTURE',
        icon: 'Shield',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'git-cicd',
        name: 'Git & CI/CD',
        section: 'ENGINEERING',
        icon: 'GitBranch',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'leadership',
        name: 'Leadership',
        section: 'ENGINEERING',
        icon: 'Users',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'top-30',
        name: 'Top 30 Questions',
        section: 'FINAL REVISION',
        icon: 'Star',
        questionCount: 0,
        completedCount: 0,
    },
];

const SECTION_ORDER: TopicSection[] = [
    'ABOUT',
    'CORE',
    'FRAMEWORKS',
    'WEB PLATFORM',
    'QUALITY',
    'ARCHITECTURE',
    'ENGINEERING',
    'FINAL REVISION',
];

export const getTopicById = (topicId: string): ITopic | undefined => {
    return TOPICS.find((topic) => topic.id === topicId);
};

export const getQuestionsByTopic = (topicId: string): IQuestion[] => {
    return QUESTIONS.filter((question) => question.topicId === topicId);
};

export const getQuestionById = (topicId: string, questionId: string): IQuestion | undefined => {
    return QUESTIONS.find((question) => question.topicId === topicId && question.id === questionId);
};

export const getAdjacentQuestionIds = (
    topicId: string,
    questionId: string,
): { previousId: string | null; nextId: string | null } => {
    const questions = getQuestionsByTopic(topicId);
    const index = questions.findIndex((question) => question.id === questionId);

    if (index === -1) {
        return { previousId: null, nextId: null };
    }

    return {
        previousId: index > 0 ? questions[index - 1].id : null,
        nextId: index < questions.length - 1 ? questions[index + 1].id : null,
    };
};

export const searchQuestions = (query: string): IQuestion[] => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return [];
    }

    return QUESTIONS.filter((question) => {
        const topic = getTopicById(question.topicId);
        return (
            question.title.toLowerCase().includes(normalized) ||
            topic?.name.toLowerCase().includes(normalized) ||
            question.difficulty.toLowerCase().includes(normalized)
        );
    }).slice(0, 8);
};

export const getTopicSections = (): ITopicSectionGroup[] => {
    return SECTION_ORDER.map((section) => ({
        section,
        topics: TOPICS.filter((topic) => topic.section === section).map((topic) => {
            const questions = getQuestionsByTopic(topic.id);
            return {
                ...topic,
                questionCount: questions.length,
                completedCount: questions.filter((item) => item.status === 'completed').length,
            };
        }),
    })).filter((group) => group.topics.length > 0);
};

export const getTopicsWithCounts = (): ITopic[] => {
    return TOPICS.map((topic) => {
        const questions = getQuestionsByTopic(topic.id);
        return {
            ...topic,
            questionCount: questions.length,
            completedCount: questions.filter((item) => item.status === 'completed').length,
        };
    });
};

export const getGlobalProgressFromBase = (): {
    total: number;
    completed: number;
    percent: number;
} => {
    const total = QUESTIONS.length;
    const completed = QUESTIONS.filter((question) => question.status === 'completed').length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, percent };
};
