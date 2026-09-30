'use client';

import type { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { Sidebar } from '@/components/Sidebar';
import { ProgressProvider } from '@/components/providers/progress-provider';
import { SidebarProvider } from '@/components/providers/sidebar-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ThemeScript } from '@/components/providers/theme-script';

export const AppShell = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <ThemeScript />
            <ProgressProvider>
                <SidebarProvider>
                    <div className="app-atmosphere flex h-dvh flex-col overflow-hidden text-foreground">
                        <a
                            href="#main-content"
                            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground focus:outline-none"
                        >
                            Skip to main content
                        </a>
                        <Header />
                        <div className="border-b border-border/70 bg-background/70 px-3 py-2.5 backdrop-blur-xl md:hidden">
                            <SearchBar />
                        </div>
                        <div className="flex min-h-0 flex-1">
                            <Sidebar />
                            <main
                                id="main-content"
                                className="min-h-0 min-w-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8"
                            >
                                {children}
                            </main>
                        </div>
                    </div>
                </SidebarProvider>
            </ProgressProvider>
        </ThemeProvider>
    );
};
