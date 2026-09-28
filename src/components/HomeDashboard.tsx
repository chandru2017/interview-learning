'use client';

import Link from 'next/link';
import { RotateCcw } from 'lucide-react';

import { TopicIcon } from '@/components/topic-icon';
import { useProgress } from '@/components/providers/progress-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getTopicsWithCounts } from '@/lib/data';

export const HomeDashboard = () => {
    const { enrichTopic, getGlobalProgress, resetAllProgress } = useProgress();
    const topics = getTopicsWithCounts().map(enrichTopic);
    const global = getGlobalProgress();

    const handleResetAll = () => {
        const confirmed = window.confirm(
            'Reset progress for all questions? Completed and In Progress status will be cleared.',
        );
        if (confirmed) {
            resetAllProgress();
        }
    };

    return (
        <div className="mx-auto w-full max-w-5xl">
            <header className="mb-10">
                <h1 className="text-[1.75rem] leading-snug font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                    Frontend Interview Prep
                </h1>
                <p className="mt-3 max-w-2xl text-[15.5px] leading-7 text-slate-600 dark:text-slate-400">
                    Practice senior frontend and architecture interview questions by topic. Track progress, search
                    everything, and prepare with structured answers.
                </p>
                <div className="mt-5 flex max-w-md flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-3 text-[15px]">
                        <span className="text-slate-600 dark:text-slate-400">Overall progress</span>
                        <div className="flex items-center gap-2.5">
                            <span className="font-medium text-slate-900 dark:text-slate-100">
                                {global.completed}/{global.total} ({global.percent}%)
                            </span>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="h-8 text-[13px]"
                                onClick={handleResetAll}
                                aria-label="Reset all question progress"
                            >
                                <RotateCcw className="size-3.5" aria-hidden="true" />
                                Reset
                            </Button>
                        </div>
                    </div>
                    <Progress value={global.percent} aria-label="Overall progress" />
                </div>
            </header>

            <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => {
                    const percent =
                        topic.questionCount === 0 ? 0 : Math.round((topic.completedCount / topic.questionCount) * 100);

                    return (
                        <li key={topic.id}>
                            <Link
                                href={`/${topic.id}`}
                                className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            >
                                <Card className="h-full shadow-none ring-1 ring-slate-200/80 transition-colors hover:bg-slate-50 dark:ring-slate-800 dark:hover:bg-slate-900">
                                    <CardHeader className="flex flex-row items-center gap-2.5">
                                        <TopicIcon name={topic.icon} className="size-5 text-blue-600" />
                                        <CardTitle>
                                            <h2 className="text-[15.5px] font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                                                {topic.name}
                                            </h2>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2.5">
                                        <p className="text-[13px] text-slate-500 dark:text-slate-400">
                                            {topic.completedCount}/{topic.questionCount} completed
                                        </p>
                                        <Progress value={percent} aria-hidden="true" />
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
