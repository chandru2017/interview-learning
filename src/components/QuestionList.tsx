'use client';

import Link from 'next/link';
import { ArrowRight, Circle, CircleCheck, RotateCcw } from 'lucide-react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { useProgress } from '@/components/providers/progress-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getQuestionsByTopic } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { ITopic } from '@/types';

const DIFFICULTY_CLASS: Record<string, string> = {
    Beginner: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    Intermediate: 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300',
    Advanced: 'border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300',
};

interface IQuestionListProps {
    topic: ITopic;
}

export const QuestionList = ({ topic }: IQuestionListProps) => {
    const { getQuestion, getTopicProgress, resetTopicProgress } = useProgress();
    const questions = getQuestionsByTopic(topic.id).map(getQuestion);
    const progress = getTopicProgress(topic.id);

    const handleResetTopic = () => {
        const confirmed = window.confirm(
            `Reset progress for ${topic.name}? Completed and In Progress status in this topic will be cleared.`,
        );
        if (confirmed) {
            resetTopicProgress(topic.id);
        }
    };

    return (
        <div className="mx-auto w-full max-w-4xl">
            <Breadcrumb items={[{ label: topic.name }]} />

            <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <h1 className="text-[1.75rem] leading-snug font-semibold tracking-tight text-foreground sm:text-3xl">
                        {topic.name} Questions
                    </h1>
                    <p className="mt-2.5 text-[15px] text-muted-foreground">
                        {progress.total} Questions · {progress.completed} Completed · {progress.remaining} Remaining
                    </p>
                </div>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="shrink-0 text-[13px] text-muted-foreground"
                    onClick={handleResetTopic}
                    aria-label={`Reset progress for ${topic.name}`}
                >
                    <RotateCcw className="size-3.5" aria-hidden="true" />
                    Reset
                </Button>
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
                                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <Card className="card-premium rounded-2xl ring-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/25">
                                    <CardContent className="flex items-start gap-3.5 py-1">
                                        <StatusIcon
                                            className={cn(
                                                'mt-1 size-5 shrink-0',
                                                question.status === 'completed' &&
                                                    'text-emerald-600 dark:text-emerald-400',
                                                question.status === 'in-progress' && 'text-primary',
                                                question.status === 'not-started' && 'text-muted-foreground/60',
                                            )}
                                            aria-hidden="true"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="text-[15.5px] leading-snug font-medium text-foreground">
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
