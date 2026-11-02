'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

const developerExperienceOptions = ['under-1', '1-3', '4-6', '7-plus'] as const;
const purposeOptions = [
    'interview-preparation',
    'skill-building',
    'career-change',
    'interviewing-candidates',
    'other',
] as const;

export interface IAuthFormState {
    error?: string;
    message?: string;
    mode?: 'sign-in' | 'sign-up';
}

export const signIn = async (_previousState: IAuthFormState, formData: FormData): Promise<IAuthFormState> => {
    const email = String(formData.get('email') ?? '').trim();
    const password = String(formData.get('password') ?? '');

    if (!email || !password) {
        return { error: 'Enter your email and password.', mode: 'sign-in' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: 'Enter a valid email address.', mode: 'sign-in' };
    }

    const supabase = await createClient();
    if (!supabase) {
        return {
            error: 'Add your Supabase URL and publishable key to the environment to enable sign-in.',
            mode: 'sign-in',
        };
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        return { error: error.message, mode: 'sign-in' };
    }

    redirect('/');
};

export const signUp = async (_previousState: IAuthFormState, formData: FormData): Promise<IAuthFormState> => {
    const fullName = String(formData.get('fullName') ?? '').trim();
    const experience = String(formData.get('experience') ?? '');
    const purpose = String(formData.get('purpose') ?? '');
    const learningGoal = String(formData.get('learningGoal') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const password = String(formData.get('password') ?? '');

    if (fullName.length < 2 || fullName.length > 80) {
        return { error: 'Enter a name between 2 and 80 characters.', mode: 'sign-up' };
    }

    if (!developerExperienceOptions.some((option) => option === experience)) {
        return { error: 'Choose your developer experience range.', mode: 'sign-up' };
    }

    if (!purposeOptions.some((option) => option === purpose)) {
        return { error: 'Choose your main goal.', mode: 'sign-up' };
    }

    if (learningGoal.length > 240) {
        return { error: 'Keep your focus area under 240 characters.', mode: 'sign-up' };
    }

    if (!email || !password) {
        return { error: 'Enter your email and password.', mode: 'sign-up' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: 'Enter a valid email address.', mode: 'sign-up' };
    }

    if (password.length < 8) {
        return { error: 'Your password must be at least 8 characters.', mode: 'sign-up' };
    }

    const supabase = await createClient();
    if (!supabase) {
        return {
            error: 'Add your Supabase URL and publishable key to the environment to enable sign-up.',
            mode: 'sign-up',
        };
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
    const emailRedirectTo = new URL('/auth/callback', appUrl).toString();
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo,
            data: {
                full_name: fullName,
                developer_experience: experience,
                purpose,
                learning_goal: learningGoal,
                requested_role: 'guest',
            },
        },
    });

    if (error) {
        return { error: error.message, mode: 'sign-up' };
    }

    if (data.session) {
        redirect('/');
    }

    return {
        message: 'Check your email for a confirmation link to finish creating your account.',
        mode: 'sign-up',
    };
};

export const signOut = async (): Promise<void> => {
    const supabase = await createClient();
    if (!supabase) {
        throw new Error('Supabase is not configured; unable to sign out.');
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(`Unable to sign out: ${error.message}`);
    }

    redirect('/');
};
