import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

import { AppShell } from '@/components/AppShell';
import { isMissingAuthSessionError } from '@/lib/supabase/errors';
import { createClient } from '@/lib/supabase/server';

const TopicLayout = async ({ children }: { children: ReactNode }) => {
    await connection();

    const supabase = await createClient();
    if (!supabase) {
        redirect('/');
    }

    const { data, error } = await supabase.auth.getUser();
    if (error && !isMissingAuthSessionError(error)) {
        throw error;
    }

    if (!data.user) {
        redirect('/');
    }

    return <AppShell>{children}</AppShell>;
};

export default TopicLayout;
