import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito, Nunito_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

import { AppShell } from '@/components/AppShell';

import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
    variable: '--font-nunito-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'Frontend Interview Prep',
        template: '%s | Frontend Interview Prep',
    },
    description: 'Interview preparation dashboard for Senior Frontend Engineers and Frontend Architects.',
};

interface IRootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${nunitoSans.variable} h-full antialiased`}
        >
            <body className="min-h-full">
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
};

export default RootLayout;
