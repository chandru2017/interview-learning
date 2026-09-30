'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { SearchBar } from '@/components/SearchBar';
import { TopicIcon } from '@/components/topic-icon';
import { useProgress } from '@/components/providers/progress-provider';
import { useSidebar } from '@/components/providers/sidebar-provider';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { getTopicSections } from '@/lib/data';
import { cn } from '@/lib/utils';

const SidebarNav = ({ onNavigate }: { onNavigate?: () => void }) => {
    const pathname = usePathname();
    const { collapsed } = useSidebar();
    const { enrichTopic } = useProgress();
    const sections = getTopicSections();

    return (
        <nav aria-label="Topics" className="flex min-h-0 flex-1 flex-col">
            <ScrollArea className="h-full flex-1 px-2.5 py-3">
                <div className="flex flex-col gap-5 pb-4">
                    {sections.map((group) => (
                        <div key={group.section}>
                            {!collapsed && (
                                <p className="mb-2 px-2.5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                    {group.section}
                                </p>
                            )}
                            <ul className="flex flex-col gap-0.5">
                                {group.topics.map((topicBase) => {
                                    const topic = enrichTopic(topicBase);
                                    const href = `/${topic.id}`;
                                    const active = pathname === href || pathname.startsWith(`${href}/`);

                                    return (
                                        <li key={topic.id}>
                                            <Link
                                                href={href}
                                                title={
                                                    collapsed
                                                        ? `${topic.name} ${topic.completedCount}/${topic.questionCount}`
                                                        : undefined
                                                }
                                                aria-current={active ? 'page' : undefined}
                                                onClick={onNavigate}
                                                className={cn(
                                                    'group flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-[15px] transition-all duration-200',
                                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                                                    active
                                                        ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground shadow-sm'
                                                        : 'text-sidebar-foreground/85 hover:bg-muted/70 hover:text-foreground',
                                                    collapsed && 'justify-center px-0',
                                                    active &&
                                                        !collapsed &&
                                                        'relative before:absolute before:top-1/2 before:left-0 before:h-5 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-primary',
                                                )}
                                            >
                                                <TopicIcon
                                                    name={topic.icon}
                                                    className={cn(
                                                        'size-[18px] shrink-0 transition-colors',
                                                        active
                                                            ? 'text-primary'
                                                            : 'text-muted-foreground group-hover:text-foreground',
                                                    )}
                                                />
                                                {!collapsed && (
                                                    <span className="min-w-0 flex-1 truncate leading-snug">
                                                        {topic.name}
                                                        <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                                            {topic.completedCount}/{topic.questionCount}
                                                        </span>
                                                    </span>
                                                )}
                                                {collapsed && (
                                                    <span className="sr-only">
                                                        {topic.name}, {topic.completedCount} of {topic.questionCount}{' '}
                                                        completed
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    );
};

export const Sidebar = () => {
    const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();

    return (
        <>
            <aside
                className={cn(
                    'relative hidden min-h-0 shrink-0 self-stretch border-r border-border/70 bg-sidebar/80 backdrop-blur-xl transition-[width] duration-300 ease-in-out lg:flex lg:flex-col',
                    collapsed ? 'w-16' : 'w-[280px]',
                )}
                aria-label="Sidebar"
            >
                <div className="flex shrink-0 items-center justify-end border-b border-border/70 p-2">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        aria-expanded={!collapsed}
                        onClick={toggleCollapsed}
                    >
                        {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
                    </Button>
                </div>
                <SidebarNav />
            </aside>

            <Sheet open={mobileOpen} onOpenChange={(open) => !open && closeMobile()}>
                <SheetContent side="left" className="w-[300px] p-0 sm:max-w-[300px]" aria-describedby={undefined}>
                    <SheetHeader className="border-b border-border/70 px-4 py-3">
                        <SheetTitle className="text-base">Topics</SheetTitle>
                    </SheetHeader>
                    <div className="border-b border-border/70 p-3">
                        <SearchBar onNavigate={closeMobile} />
                    </div>
                    <div className="h-[calc(100vh-8rem)]">
                        <SidebarNav onNavigate={closeMobile} />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
