'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';

import { AnswerContent } from '@/components/AnswerContent';
import { Breadcrumb } from '@/components/Breadcrumb';
import { useProgress } from '@/components/providers/progress-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAdjacentQuestionIds } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { IQuestion, ITopic } from '@/types';

const DIFFICULTY_CLASS: Record<string, string> = {
    Beginner:
        'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    Intermediate:
        'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
    Advanced: 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300',
};

type SectionId = 'simple' | 'senior' | 'example' | 'project' | 'interview' | 'speaking' | 'story';

const SECTION_ORDER: {
    id: SectionId;
    key: keyof Pick<
        IQuestion,
        | 'simpleExplanation'
        | 'seniorExplanation'
        | 'simpleExample'
        | 'realProjectExample'
        | 'interviewAnswer'
        | 'speakingPractice'
        | 'conceptAsStory'
    >;
}[] = [
    { id: 'simple', key: 'simpleExplanation' },
    { id: 'senior', key: 'seniorExplanation' },
    { id: 'example', key: 'simpleExample' },
    { id: 'project', key: 'realProjectExample' },
    { id: 'interview', key: 'interviewAnswer' },
    { id: 'speaking', key: 'speakingPractice' },
    { id: 'story', key: 'conceptAsStory' },
];

const getAvailableSections = (question: IQuestion): SectionId[] => {
    return SECTION_ORDER.filter(({ key }) => (question[key]?.length ?? 0) > 0).map(({ id }) => id);
};

/** Opens the first available section by default (also covers the single-section case). */
const getDefaultOpenSection = (question: IQuestion): SectionId | null => {
    return getAvailableSections(question)[0] ?? null;
};

interface IQuestionDetailProps {
    topic: ITopic;
    question: IQuestion;
}

export const QuestionDetail = ({ topic, question: baseQuestion }: IQuestionDetailProps) => {
    const { getQuestion, markCompleted, markInProgress } = useProgress();
    const question = getQuestion(baseQuestion);
    const markedRef = useRef(false);
    const { previousId, nextId } = getAdjacentQuestionIds(topic.id, question.id);
    const [openSection, setOpenSection] = useState<SectionId | null>(() => getDefaultOpenSection(question));
    const [sectionQuestionId, setSectionQuestionId] = useState(question.id);

    if (question.id !== sectionQuestionId) {
        setSectionQuestionId(question.id);
        setOpenSection(getDefaultOpenSection(question));
    }

    useEffect(() => {
        if (markedRef.current) {
            return;
        }
        markedRef.current = true;
        if (question.status === 'not-started') {
            queueMicrotask(() => markInProgress(question.id));
        }
    }, [question.id, question.status, markInProgress]);

    const statusLabel =
        question.status === 'completed'
            ? 'Completed'
            : question.status === 'in-progress'
              ? 'In Progress'
              : 'Not Started';

    const toggleSection = (id: SectionId) => {
        setOpenSection((current) => (current === id ? null : id));
    };

    return (
        <div className="mx-auto w-full max-w-4xl">
            <Breadcrumb items={[{ label: topic.name, href: `/${topic.id}` }, { label: question.title }]} />

            <div className="mb-5">
                <Button variant="ghost" size="sm" asChild className="-ml-2 text-[15px]">
                    <Link href={`/${topic.id}`}>
                        <ArrowLeft className="size-4" aria-hidden="true" />
                        Back to {topic.name}
                    </Link>
                </Button>
            </div>

            <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <h1 className="text-[1.75rem] leading-snug font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                        {question.title}
                    </h1>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="outline" className={cn('text-xs', DIFFICULTY_CLASS[question.difficulty])}>
                            {question.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                            {statusLabel}
                        </Badge>
                    </div>
                </div>
                <Button
                    type="button"
                    className="shrink-0 text-[15px]"
                    onClick={() => markCompleted(question.id)}
                    disabled={question.status === 'completed'}
                    aria-label={
                        question.status === 'completed' ? 'Question already completed' : 'Mark question as completed'
                    }
                >
                    <Check className="size-4" aria-hidden="true" />
                    {question.status === 'completed' ? 'Completed' : 'Mark as completed'}
                </Button>
            </header>

            <div className="flex flex-col gap-5">
                {question.simpleExplanation.length > 0 && (
                    <Section
                        id="simple"
                        title="Simple Explanation"
                        description="Beginner-friendly overview"
                        open={openSection === 'simple'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.simpleExplanation} />
                    </Section>
                )}

                {question.seniorExplanation.length > 0 && (
                    <Section
                        id="senior"
                        title="Senior-Level Explanation"
                        description="Nuanced, interview-depth perspective"
                        open={openSection === 'senior'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.seniorExplanation} />
                    </Section>
                )}

                {question.simpleExample.length > 0 && (
                    <Section
                        id="example"
                        title="Simple Example"
                        description="Minimal code snippet"
                        open={openSection === 'example'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.simpleExample} />
                    </Section>
                )}

                {question.realProjectExample.length > 0 && (
                    <Section
                        id="project"
                        title="Real Project Example"
                        description="How this shows up in production"
                        open={openSection === 'project'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.realProjectExample} />
                    </Section>
                )}

                {question?.conceptAsStory?.length && question.conceptAsStory.length > 0 && (
                    <Section
                        id="story"
                        title="Concept as Story"
                        description="How this shows up in production"
                        open={openSection === 'story'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.conceptAsStory} />
                    </Section>
                )}

                {question.interviewAnswer.length > 0 && (
                    <Section
                        id="interview"
                        title="Interview Answer"
                        description="Polished, interview-ready response"
                        open={openSection === 'interview'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.interviewAnswer} />
                    </Section>
                )}

                {question?.speakingPractice?.length && question.speakingPractice.length > 0 && (
                    <Section
                        id="speaking"
                        title="Speaking Practice"
                        description="How this shows up in production"
                        open={openSection === 'speaking'}
                        onToggle={toggleSection}
                    >
                        <AnswerContent content={question.speakingPractice} />
                    </Section>
                )}
            </div>

            <nav
                aria-label="Question pagination"
                className="mt-10 flex items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800"
            >
                {previousId ? (
                    <Button variant="outline" asChild className="text-[15px]">
                        <Link href={`/${topic.id}/${previousId}`}>
                            <ArrowLeft className="size-4" aria-hidden="true" />
                            Previous
                        </Link>
                    </Button>
                ) : (
                    <span />
                )}
                {nextId ? (
                    <Button variant="outline" asChild className="text-[15px]">
                        <Link href={`/${topic.id}/${nextId}`}>
                            Next
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                    </Button>
                ) : (
                    <span />
                )}
            </nav>
        </div>
    );
};

interface ISectionProps {
    id: SectionId;
    title: string;
    description: string;
    open: boolean;
    onToggle: (id: SectionId) => void;
    children: ReactNode;
}

const Section = ({ id, title, description, open, onToggle, children }: ISectionProps) => {
    const panelId = useId();
    const headerId = useId();

    return (
        <Card className="shadow-none transition-colors duration-200 ring-1 ring-slate-200/80 dark:ring-slate-800">
            <CardHeader className="gap-0 p-0">
                <button
                    type="button"
                    id={headerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => onToggle(id)}
                    className="flex cursor-pointer w-full items-start justify-between gap-4 rounded-xl px-6 text-left transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
                >
                    <div className="min-w-0 ">
                        <CardTitle>
                            <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                                {title}
                            </h2>
                        </CardTitle>
                        <CardDescription className="mt-1.5 text-[14px] leading-relaxed hidden">
                            {description}
                        </CardDescription>
                    </div>
                    <ChevronDown
                        className={cn(
                            'mt-1 size-5 shrink-0 text-slate-500 transition-transform duration-200',
                            open && 'rotate-180',
                        )}
                        aria-hidden="true"
                    />
                </button>
            </CardHeader>
            {open ? (
                <CardContent
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pt-0 text-[15.5px] leading-7 text-slate-700 dark:text-slate-300"
                >
                    {children}
                </CardContent>
            ) : null}
        </Card>
    );
};
