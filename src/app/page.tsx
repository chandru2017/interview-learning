import type { Metadata } from 'next';

import { AuthForm } from '@/components/auth/AuthForm';
import { AppShell } from '@/components/AppShell';
import { HomeDashboard } from '@/components/HomeDashboard';
import { isMissingAuthSessionError } from '@/lib/supabase/errors';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
    title: 'Dashboard',
};

interface IHomePageProps {
    searchParams: Promise<{ authError?: string }>;
}

const HomePage = async ({ searchParams }: IHomePageProps) => {
    const { authError } = await searchParams;
    const supabase = await createClient();

    if (!supabase) {
        return <AuthForm configured={false} />;
    }

    const { data, error } = await supabase.auth.getUser();
    if (error && !isMissingAuthSessionError(error)) {
        throw error;
    }

    if (!data.user) {
        return <AuthForm configured confirmationError={authError === 'confirmation'} />;
    }

    return (
        <AppShell>
            <HomeDashboard />
        </AppShell>
    );
};

export default HomePage;
