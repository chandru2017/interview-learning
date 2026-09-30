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
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase">Interview Prep</p>
                <h1 className="text-[2rem] leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
                    Frontend Interview Prep
                </h1>
                <p className="mt-3 max-w-2xl text-[15.5px] leading-7 text-muted-foreground">
                    Practice senior frontend and architecture interview questions by topic. Track progress, search
                    everything, and prepare with structured answers.
                </p>
                <div className="card-premium mt-6 max-w-md rounded-2xl p-4">
                    <div className="mb-2.5 flex items-center justify-between gap-3 text-[15px]">
                        <span className="text-muted-foreground">Overall progress</span>
                        <div className="flex items-center gap-2.5">
                            <span className="font-medium text-foreground">
                                {global.completed}/{global.total} ({global.percent}%)
                            </span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 text-[13px] text-muted-foreground"
                                onClick={handleResetAll}
                                aria-label="Reset all question progress"
                            >
                                <RotateCcw className="size-3.5" aria-hidden="true" />
                                Reset
                            </Button>
                        </div>
                    </div>
                    <Progress value={global.percent} className="h-1.5" aria-label="Overall progress" />
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
                                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <Card className="card-premium h-full rounded-2xl ring-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/25 group-hover:shadow-md">
                                    <CardHeader className="flex flex-row items-center gap-3">
                                        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/15">
                                            <TopicIcon name={topic.icon} className="size-4" />
                                        </span>
                                        <CardTitle>
                                            <h2 className="text-[15.5px] font-semibold tracking-tight text-foreground">
                                                {topic.name}
                                            </h2>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2.5">
                                        <p className="text-[13px] text-muted-foreground">
                                            {topic.completedCount}/{topic.questionCount} completed
                                        </p>
                                        <Progress value={percent} className="h-1.5" aria-hidden="true" />
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
