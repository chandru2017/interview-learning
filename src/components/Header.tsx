'use client';

import Link from 'next/link';
import { Menu, Moon, Rocket, RotateCcw, Sun, User } from 'lucide-react';

import { SearchBar } from '@/components/SearchBar';
import { useProgress } from '@/components/providers/progress-provider';
import { useSidebar } from '@/components/providers/sidebar-provider';
import { useTheme } from '@/components/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { openMobile } = useSidebar();
    const { getGlobalProgress, resetAllProgress } = useProgress();
    const { percent, completed, total } = getGlobalProgress();

    const handleResetAll = () => {
        const confirmed = window.confirm(
            'Reset progress for all questions? Completed and In Progress status will be cleared.',
        );
        if (confirmed) {
            resetAllProgress();
        }
    };

    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur supports-backdrop-filter:bg-white/80 sm:px-5 dark:border-slate-800 dark:bg-slate-950/95 dark:supports-backdrop-filter:bg-slate-950/80">
            <div className="flex min-w-0 flex-1 items-center gap-2 lg:gap-4">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open navigation menu"
                    onClick={openMobile}
                >
                    <Menu className="size-5" />
                </Button>

                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                    <Rocket className="size-5 text-blue-600" aria-hidden="true" />
                    <span className="hidden text-[15px] font-semibold tracking-tight text-slate-900 sm:inline dark:text-slate-50">
                        Frontend Interview Prep
                    </span>
                    <span className="text-[15px] font-semibold tracking-tight text-slate-900 sm:hidden dark:text-slate-50">
                        FIP
                    </span>
                </Link>

                <div className="mx-auto hidden w-full max-w-xl flex-1 md:block">
                    <SearchBar />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden items-center gap-2.5 sm:flex" aria-live="polite">
                    <div className="w-28">
                        <Progress value={percent} aria-label={`Overall progress ${percent}%`} />
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap text-slate-600 dark:text-slate-300">
                        {percent}%
                        <span className="sr-only">
                            {' '}
                            ({completed} of {total} questions completed)
                        </span>
                    </span>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="hidden text-[13px] sm:inline-flex"
                    onClick={handleResetAll}
                    aria-label="Reset all question progress"
                >
                    <RotateCcw className="size-3.5" aria-hidden="true" />
                    Reset
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="sm:hidden"
                    onClick={handleResetAll}
                    aria-label="Reset all question progress"
                >
                    <RotateCcw className="size-5" aria-hidden="true" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Profile"
                    className="hidden sm:inline-flex"
                >
                    <User className="size-5" />
                </Button>
            </div>
        </header>
    );
};
