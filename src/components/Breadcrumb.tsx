import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface IBreadcrumbItem {
    label: string;
    href?: string;
}

interface IBreadcrumbProps {
    items: IBreadcrumbItem[];
}

export const Breadcrumb = ({ items }: IBreadcrumbProps) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-[14px] text-slate-500">
                <li>
                    <Link
                        href="/"
                        className="rounded hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:hover:text-slate-100"
                    >
                        Home
                    </Link>
                </li>
                {items.map((item) => (
                    <li key={item.label} className="flex items-center gap-1.5">
                        <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="rounded hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:hover:text-slate-100"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span aria-current="page" className="font-medium text-slate-900 dark:text-slate-100">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
