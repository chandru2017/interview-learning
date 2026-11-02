'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ArrowRight, Check, ChevronDown, LockKeyhole, Rocket } from 'lucide-react';
import Link from 'next/link';

import { signIn, signUp } from '@/app/auth/actions';
import type { IAuthFormState } from '@/app/auth/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface IAuthFormProps {
    configured: boolean;
    confirmationError?: boolean;
}

interface IAuthFormValues {
    fullName: string;
    experience: string;
    purpose: string;
    learningGoal: string;
    email: string;
    password: string;
}

const fieldClassName =
    'h-12 rounded-xl border-border/80 bg-background px-3.5 text-sm shadow-none transition-colors focus-visible:border-primary';
const selectClassName =
    'h-12 w-full cursor-pointer appearance-none rounded-xl border border-border/80 bg-background py-2 pl-3.5 pr-12 text-sm text-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50';
const labelClassName = 'text-sm font-medium text-foreground';

const selectOptions = {
    experience: ['under-1', '1-3', '4-6', '7-plus'],
    purpose: ['interview-preparation', 'skill-building', 'career-change', 'interviewing-candidates', 'other'],
} as const;

export const AuthForm = ({ configured, confirmationError = false }: IAuthFormProps) => {
    const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
    const [state, setState] = useState<IAuthFormState>({});
    const [pending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm<IAuthFormValues>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            fullName: '',
            experience: '',
            purpose: '',
            learningGoal: '',
            email: '',
            password: '',
        },
    });
    const isSignUp = mode === 'sign-up';

    const changeMode = (nextMode: 'sign-in' | 'sign-up') => {
        setMode(nextMode);
        setState({});
        clearErrors();
        reset();
    };

    const onSubmit: SubmitHandler<IAuthFormValues> = (values) => {
        const formData = new FormData();
        formData.set('email', values.email);
        formData.set('password', values.password);

        if (isSignUp) {
            formData.set('fullName', values.fullName);
            formData.set('experience', values.experience);
            formData.set('purpose', values.purpose);
            formData.set('learningGoal', values.learningGoal);
        }

        startTransition(async () => {
            const result = isSignUp ? await signUp(state, formData) : await signIn(state, formData);
            setState(result);
        });
    };

    return (
        <main className="auth-ambient relative isolate flex h-dvh items-center justify-center overflow-hidden px-3 py-3 text-[#17262b] sm:px-6 sm:py-6">
            <div className="auth-glass-card grid h-full min-h-0 w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-[1.75rem] md:h-[min(820px,calc(100dvh-3rem))] md:grid-rows-1 md:grid-cols-[0.92fr_1.08fr]">
                <aside className="auth-glass-aside relative flex min-h-0 flex-col justify-between overflow-hidden px-6 py-5 text-[#f3f5ef] sm:px-10 sm:py-7 md:px-8 md:py-8 lg:px-12 lg:py-9">
                    <div className="pointer-events-none absolute -right-28 -top-32 size-96 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-12 -top-16 size-64 rounded-full border border-white/10" />

                    <Link
                        href="/"
                        className="relative inline-flex w-fit cursor-pointer items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[#d5e6da] text-[#173c3b]">
                            <Rocket className="size-[18px]" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-semibold tracking-[-0.02em] sm:text-base">
                            Frontend Interview Prep
                        </span>
                    </Link>

                    <div className="relative my-5 max-w-lg sm:my-7 md:my-0 md:py-6 lg:py-10">
                        <p className="mb-3 text-sm font-medium text-[#a9c5b6] lg:mb-5">Your next chapter starts here</p>
                        <h1 className="max-w-md text-3xl leading-[1.08] font-medium tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                            Make your next interview count.
                        </h1>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-[#d0ddd6] sm:mt-5 sm:text-[15px] sm:leading-7">
                            A considered space to practise, sharpen your thinking, and see how far you have come.
                        </p>

                        <div className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
                            {[
                                'Practise by frontend topic',
                                'Explore structured explanations',
                                'Keep track of questions you have covered',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-xs text-[#e2ebe5] sm:text-sm">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#d5e6da] text-[#173c3b]">
                                        <Check className="size-3" aria-hidden="true" />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="relative hidden text-xs text-[#a9c5b6] lg:block">
                        Built for thoughtful frontend engineers.
                    </p>
                </aside>

                <section className="auth-glass-panel auth-form-scroll min-h-0 overflow-y-auto overscroll-contain">
                    <div className="flex min-h-full items-center px-6 py-7 sm:px-10 sm:py-9 md:px-8 lg:px-14">
                        <div className="mx-auto w-full max-w-md shrink-0">
                            <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[#57706d] sm:mb-8">
                                <LockKeyhole className="size-3.5" aria-hidden="true" />
                                Secure access to your learning space
                            </div>

                            <h2 className="text-[1.85rem] leading-tight font-semibold tracking-[-0.045em]">
                                {isSignUp ? 'Create your account' : 'Welcome back'}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-[#647573]">
                                {isSignUp
                                    ? 'A few details help us tailor your practice.'
                                    : 'Sign in to pick up where your preparation left off.'}
                            </p>

                            <div
                                className="mt-5 grid grid-cols-2 border-b border-[#e7ece9] sm:mt-7"
                                role="tablist"
                                aria-label="Account options"
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={!isSignUp}
                                    className={`min-h-11 cursor-pointer border-b-2 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#345a52] ${
                                        !isSignUp
                                            ? 'border-[#28594e] text-[#28594e]'
                                            : 'border-transparent text-[#82908c] hover:text-[#40534e]'
                                    }`}
                                    onClick={() => changeMode('sign-in')}
                                >
                                    Sign in
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={isSignUp}
                                    className={`min-h-11 cursor-pointer border-b-2 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#345a52] ${
                                        isSignUp
                                            ? 'border-[#28594e] text-[#28594e]'
                                            : 'border-transparent text-[#82908c] hover:text-[#40534e]'
                                    }`}
                                    onClick={() => changeMode('sign-up')}
                                >
                                    Create account
                                </button>
                            </div>

                            {confirmationError && (
                                <p className="mt-5 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800" role="alert">
                                    That confirmation link could not be verified. Try signing in or creating your
                                    account again.
                                </p>
                            )}
                            {!configured && (
                                <p className="mt-5 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800" role="alert">
                                    Supabase is not configured yet. Add the project URL and publishable key to your
                                    environment variables.
                                </p>
                            )}

                            <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4 sm:mt-6">
                                {isSignUp && (
                                    <>
                                        <div className="space-y-2">
                                            <label htmlFor="full-name" className={labelClassName}>
                                                Your name
                                            </label>
                                            <Input
                                                id="full-name"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="How should we address you?"
                                                aria-invalid={Boolean(errors.fullName)}
                                                aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                                                className={fieldClassName}
                                                disabled={pending || !configured}
                                                {...register('fullName', {
                                                    required: 'Enter your name.',
                                                    minLength: {
                                                        value: 2,
                                                        message: 'Your name must be at least 2 characters.',
                                                    },
                                                    maxLength: {
                                                        value: 80,
                                                        message: 'Your name must be no more than 80 characters.',
                                                    },
                                                })}
                                            />
                                            {errors.fullName && (
                                                <p id="full-name-error" className="text-xs text-red-800" role="alert">
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="experience" className={labelClassName}>
                                                    Developer experience
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="experience"
                                                        aria-invalid={Boolean(errors.experience)}
                                                        aria-describedby={
                                                            errors.experience ? 'experience-error' : undefined
                                                        }
                                                        className={selectClassName}
                                                        disabled={pending || !configured}
                                                        {...register('experience', {
                                                            required: 'Choose your experience range.',
                                                            validate: (value) =>
                                                                selectOptions.experience.some(
                                                                    (option) => option === value,
                                                                ) || 'Choose a valid experience range.',
                                                        })}
                                                    >
                                                        <option value="">Select experience</option>
                                                        <option value="under-1">Less than 1 year</option>
                                                        <option value="1-3">1–3 years</option>
                                                        <option value="4-6">4–6 years</option>
                                                        <option value="7-plus">7+ years</option>
                                                    </select>
                                                    <ChevronDown
                                                        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#74837e]"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                {errors.experience && (
                                                    <p
                                                        id="experience-error"
                                                        className="text-xs text-red-800"
                                                        role="alert"
                                                    >
                                                        {errors.experience.message}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="purpose" className={labelClassName}>
                                                    Your main goal
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="purpose"
                                                        aria-invalid={Boolean(errors.purpose)}
                                                        aria-describedby={errors.purpose ? 'purpose-error' : undefined}
                                                        className={selectClassName}
                                                        disabled={pending || !configured}
                                                        {...register('purpose', {
                                                            required: 'Choose your main goal.',
                                                            validate: (value) =>
                                                                selectOptions.purpose.some(
                                                                    (option) => option === value,
                                                                ) || 'Choose a valid goal.',
                                                        })}
                                                    >
                                                        <option value="">Select a goal</option>
                                                        <option value="interview-preparation">
                                                            Prepare for interviews
                                                        </option>
                                                        <option value="skill-building">Build frontend skills</option>
                                                        <option value="career-change">Plan a career move</option>
                                                        <option value="interviewing-candidates">
                                                            Interview frontend candidates
                                                        </option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    <ChevronDown
                                                        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#74837e]"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                {errors.purpose && (
                                                    <p id="purpose-error" className="text-xs text-red-800" role="alert">
                                                        {errors.purpose.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="learning-goal" className={labelClassName}>
                                                What are you focusing on?{' '}
                                                <span className="font-normal text-[#82908c]">(optional)</span>
                                            </label>
                                            <textarea
                                                id="learning-goal"
                                                rows={2}
                                                maxLength={240}
                                                placeholder="For example, system design or React performance"
                                                aria-invalid={Boolean(errors.learningGoal)}
                                                aria-describedby={
                                                    errors.learningGoal ? 'learning-goal-error' : undefined
                                                }
                                                className="w-full resize-y rounded-xl border border-border/80 bg-background px-3.5 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
                                                disabled={pending || !configured}
                                                {...register('learningGoal', {
                                                    maxLength: {
                                                        value: 240,
                                                        message: 'Keep your focus area under 240 characters.',
                                                    },
                                                })}
                                            />
                                            {errors.learningGoal && (
                                                <p
                                                    id="learning-goal-error"
                                                    className="text-xs text-red-800"
                                                    role="alert"
                                                >
                                                    {errors.learningGoal.message}
                                                </p>
                                            )}
                                        </div>
                                    </>
                                )}
                                <div className="space-y-2">
                                    <label htmlFor="email" className={labelClassName}>
                                        Email address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        autoCapitalize="none"
                                        placeholder="you@example.com"
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                        className={fieldClassName}
                                        disabled={pending || !configured}
                                        {...register('email', {
                                            required: 'Enter your email address.',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Enter a valid email address.',
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-xs text-red-800" role="alert">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="password" className={labelClassName}>
                                        Password
                                    </label>
                                    <Input
                                        id="password"
                                        type="password"
                                        autoComplete={isSignUp ? 'new-password' : 'current-password'}
                                        placeholder={isSignUp ? 'At least 8 characters' : 'Enter your password'}
                                        aria-invalid={Boolean(errors.password)}
                                        aria-describedby={errors.password ? 'password-error' : undefined}
                                        className={fieldClassName}
                                        disabled={pending || !configured}
                                        {...register('password', {
                                            required: 'Enter your password.',
                                            ...(isSignUp
                                                ? {
                                                      minLength: {
                                                          value: 8,
                                                          message: 'Your password must be at least 8 characters.',
                                                      },
                                                  }
                                                : {}),
                                        })}
                                    />
                                    {errors.password && (
                                        <p id="password-error" className="text-xs text-red-800" role="alert">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {state.error && state.mode === mode && (
                                    <p className="rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800" role="alert">
                                        {state.error}
                                    </p>
                                )}
                                {state.message && state.mode === mode && (
                                    <p
                                        className="rounded-xl bg-[#edf5f0] px-3.5 py-3 text-sm text-[#28594e]"
                                        role="status"
                                    >
                                        {state.message}
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    className="h-12 w-full cursor-pointer gap-2 rounded-xl bg-[#28594e] text-sm font-semibold text-white hover:bg-[#20483f]"
                                    disabled={pending || !configured}
                                >
                                    {pending ? 'Please wait…' : isSignUp ? 'Create your account' : 'Sign in'}
                                    {!pending && <ArrowRight className="size-4" aria-hidden="true" />}
                                </Button>
                            </form>

                            <p className="mt-5 text-center text-xs leading-5 text-[#82908c]">
                                Your credentials are protected by Supabase authentication.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};
