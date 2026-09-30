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
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-3 border-b border-border/70 bg-background/70 px-4 backdrop-blur-xl supports-backdrop-filter:bg-background/55 sm:px-5">
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
                    className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/15">
                        <Rocket className="size-4" aria-hidden="true" />
                    </span>
                    <span className="hidden text-[15px] font-semibold tracking-tight text-foreground sm:inline">
                        Frontend Interview Prep
                    </span>
                    <span className="text-[15px] font-semibold tracking-tight text-foreground sm:hidden">FIP</span>
                </Link>

                <div className="mx-auto hidden w-full max-w-xl flex-1 md:block">
                    <SearchBar />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden items-center gap-2.5 sm:flex" aria-live="polite">
                    <div className="w-28">
                        <Progress value={percent} className="h-1.5" aria-label={`Overall progress ${percent}%`} />
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap text-muted-foreground">
                        {percent}%
                        <span className="sr-only">
                            {' '}
                            ({completed} of {total} questions completed)
                        </span>
                    </span>
                </div>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="hidden text-[13px] text-muted-foreground hover:text-foreground sm:inline-flex"
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
                    {theme === 'dark' ? (
                        <Sun className="size-5 transition-transform duration-200" />
                    ) : (
                        <Moon className="size-5 transition-transform duration-200" />
                    )}
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
