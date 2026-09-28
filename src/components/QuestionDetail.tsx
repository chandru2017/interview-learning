'use client';

import Link from 'next/link';
import { useEffect, useRef, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

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

interface IQuestionDetailProps {
    topic: ITopic;
    question: IQuestion;
}

export const QuestionDetail = ({ topic, question: baseQuestion }: IQuestionDetailProps) => {
    const { getQuestion, markCompleted, markInProgress } = useProgress();
    const question = getQuestion(baseQuestion);
    const markedRef = useRef(false);
    const { previousId, nextId } = getAdjacentQuestionIds(topic.id, question.id);

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

    return (
        <div className="mx-auto w-full max-w-3xl">
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
                <Section title="1. Simple Explanation" description="Beginner-friendly overview">
                    <p>{question.simpleExplanation}</p>
                </Section>

                <Section title="2. Senior-Level Explanation" description="Nuanced, interview-depth perspective">
                    <p>{question.seniorExplanation}</p>
                </Section>

                <Section title="3. Simple Example" description="Minimal code snippet">
                    <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-[14px] leading-relaxed text-slate-100">
                        <code>{question.simpleExample}</code>
                    </pre>
                </Section>

                <Section title="4. Real Project Example" description="How this shows up in production">
                    <p>{question.realProjectExample}</p>
                </Section>

                <Section title="5. Interview Answer" description="Polished, interview-ready response">
                    <p>{question.interviewAnswer}</p>
                </Section>
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

const Section = ({ title, description, children }: { title: string; description: string; children: ReactNode }) => {
    return (
        <Card className="shadow-none ring-1 ring-slate-200/80 dark:ring-slate-800">
            <CardHeader className="gap-1.5">
                <CardTitle>
                    <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">{title}</h2>
                </CardTitle>
                <CardDescription className="text-[14px] leading-relaxed">{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-[15.5px] leading-7 text-slate-700 dark:text-slate-300">{children}</CardContent>
        </Card>
    );
};
