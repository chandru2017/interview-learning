import Link from 'next/link';

import { Button } from '@/components/ui/button';

const NotFound = () => {
    return (
        <div className="mx-auto flex max-w-lg flex-col items-start gap-4 py-16">
            <h1 className="text-2xl font-semibold">Page not found</h1>
            <p className="text-slate-600 dark:text-slate-400">
                That topic or question does not exist in the prep dashboard.
            </p>
            <Button asChild>
                <Link href="/">Back to dashboard</Link>
            </Button>
        </div>
    );
};

export default NotFound;
