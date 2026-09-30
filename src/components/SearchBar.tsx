'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

import { getTopicById, searchQuestions } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useProgress } from '@/components/providers/progress-provider';

interface ISearchBarProps {
    className?: string;
    onNavigate?: () => void;
}

export const SearchBar = ({ className, onNavigate }: ISearchBarProps) => {
    const router = useRouter();
    const { getQuestion } = useProgress();
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const listId = useId();

    const results = useMemo(() => {
        return searchQuestions(query).map(getQuestion);
    }, [query, getQuestion]);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        return () => document.removeEventListener('mousedown', handlePointerDown);
    }, []);

    const handleSelect = (topicId: string, questionId: string) => {
        setQuery('');
        setOpen(false);
        onNavigate?.();
        router.push(`/${topicId}/${questionId}`);
    };

    return (
        <div ref={containerRef} className={cn('relative w-full', className)}>
            <label htmlFor="global-search" className="sr-only">
                Search questions
            </label>
            <SearchIcon
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
            />
            <Input
                id="global-search"
                type="search"
                value={query}
                autoComplete="off"
                placeholder="Search questions across all topics..."
                className="h-10 border-border/70 bg-muted/50 pl-9 text-[15px] shadow-none focus-visible:border-primary/40 focus-visible:bg-background focus-visible:ring-primary/20"
                aria-controls={listId}
                aria-expanded={open && results.length > 0}
                aria-autocomplete="list"
                role="combobox"
                onChange={(event) => {
                    setQuery(event.target.value);
                    setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                        setOpen(false);
                    }
                    if (event.key === 'Enter' && results[0]) {
                        event.preventDefault();
                        handleSelect(results[0].topicId, results[0].id);
                    }
                }}
            />
            {open && query.trim() && (
                <div
                    id={listId}
                    role="listbox"
                    aria-label="Search results"
                    className="absolute top-full z-50 mt-1.5 max-h-72 w-full overflow-auto rounded-xl border border-border/70 bg-popover/95 shadow-lg backdrop-blur-xl"
                >
                    {results.length === 0 ? (
                        <p className="px-3 py-2.5 text-[15px] text-muted-foreground">No matches found.</p>
                    ) : (
                        <ul className="py-1">
                            {results.map((question) => {
                                const topic = getTopicById(question.topicId);
                                return (
                                    <li key={question.id} role="option" aria-selected={false}>
                                        <Link
                                            href={`/${question.topicId}/${question.id}`}
                                            className="block px-3 py-2.5 text-[15px] transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                                            onClick={() => {
                                                setQuery('');
                                                setOpen(false);
                                                onNavigate?.();
                                            }}
                                        >
                                            <span className="font-medium text-foreground">{question.title}</span>
                                            <span className="mt-0.5 block text-xs text-muted-foreground">
                                                {topic?.name} · {question.difficulty}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
