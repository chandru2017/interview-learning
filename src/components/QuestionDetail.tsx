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
    Beginner: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    Intermediate: 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300',
    Advanced: 'border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300',
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
                    <h1 className="text-[1.75rem] leading-snug font-semibold tracking-tight text-foreground sm:text-3xl">
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
                className="mt-10 flex items-center justify-between gap-3 border-t border-border/70 pt-6"
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
        <Card
            className={cn(
                'card-premium overflow-hidden rounded-2xl ring-0 transition-all duration-300',
                open && 'border-primary/20 shadow-md',
            )}
        >
            <CardHeader className="gap-0 p-0">
                <button
                    type="button"
                    id={headerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => onToggle(id)}
                    className={cn(
                        'flex w-full cursor-pointer items-start justify-between gap-4 px-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    )}
                >
                    <div className="min-w-0">
                        <CardTitle>
                            <h2 className="text-lg font-medium tracking-tight text-foreground">{title}</h2>
                        </CardTitle>
                        <CardDescription className="mt-1.5 hidden text-[14px] leading-relaxed">
                            {description}
                        </CardDescription>
                    </div>
                    <ChevronDown
                        className={cn(
                            'mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200',
                            open && 'rotate-180 text-primary',
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
                    className="animate-in fade-in-0 slide-in-from-top-1 border-t border-border/60 pt-5 pb-6 text-[15.5px] leading-7 text-foreground/90 duration-200"
                >
                    {children}
                </CardContent>
            ) : null}
        </Card>
    );
};
