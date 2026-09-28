'use client';

import Link from 'next/link';
import { ArrowRight, Circle, CircleCheck } from 'lucide-react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { useProgress } from '@/components/providers/progress-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getQuestionsByTopic } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { ITopic } from '@/types';

const DIFFICULTY_CLASS: Record<string, string> = {
    Beginner:
        'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    Intermediate:
        'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
    Advanced: 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300',
};

interface IQuestionListProps {
    topic: ITopic;
}

export const QuestionList = ({ topic }: IQuestionListProps) => {
    const { getQuestion, getTopicProgress } = useProgress();
    const questions = getQuestionsByTopic(topic.id).map(getQuestion);
    const progress = getTopicProgress(topic.id);

    return (
        <div className="mx-auto w-full max-w-3xl">
            <Breadcrumb items={[{ label: topic.name }]} />

            <header className="mb-8">
                <h1 className="text-[1.75rem] leading-snug font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                    {topic.name} Questions
                </h1>
                <p className="mt-2.5 text-[15px] text-slate-600 dark:text-slate-400">
                    {progress.total} Questions · {progress.completed} Completed · {progress.remaining} Remaining
                </p>
            </header>

            <ul className="flex flex-col gap-2.5">
                {questions.map((question) => {
                    const StatusIcon =
                        question.status === 'completed'
                            ? CircleCheck
                            : question.status === 'in-progress'
                              ? ArrowRight
                              : Circle;

                    const statusLabel =
                        question.status === 'completed'
                            ? 'Completed'
                            : question.status === 'in-progress'
                              ? 'In Progress'
                              : 'Not Started';

                    return (
                        <li key={question.id}>
                            <Link
                                href={`/${topic.id}/${question.id}`}
                                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            >
                                <Card className="shadow-none ring-1 ring-slate-200/80 transition-colors hover:bg-slate-50 dark:ring-slate-800 dark:hover:bg-slate-900">
                                    <CardContent className="flex items-start gap-3.5 py-1">
                                        <StatusIcon
                                            className={cn(
                                                'mt-1 size-5 shrink-0',
                                                question.status === 'completed' &&
                                                    'text-emerald-600 dark:text-emerald-400',
                                                question.status === 'in-progress' && 'text-blue-600 dark:text-blue-400',
                                                question.status === 'not-started' && 'text-slate-400',
                                            )}
                                            aria-hidden="true"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="text-[15.5px] leading-snug font-medium text-slate-900 dark:text-slate-50">
                                                    {question.title}
                                                </h2>
                                                <Badge
                                                    variant="outline"
                                                    className={cn('text-xs', DIFFICULTY_CLASS[question.difficulty])}
                                                >
                                                    {question.difficulty}
                                                </Badge>
                                                <Badge variant="secondary" className="text-xs">
                                                    {statusLabel}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
