'use client';

import type { ReactNode } from 'react';

import { ProgressProvider } from '@/components/providers/progress-provider';
import { SidebarProvider } from '@/components/providers/sidebar-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ThemeScript } from '@/components/providers/theme-script';

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <ThemeScript />
            <ProgressProvider>
                <SidebarProvider>{children}</SidebarProvider>
            </ProgressProvider>
        </ThemeProvider>
    );
};
