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
          <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white focus:outline-none"
            >
              Skip to main content
            </a>
            <Header />
            <div className="border-b border-slate-200 bg-white px-3 py-2.5 md:hidden dark:border-slate-800 dark:bg-slate-950">
              <SearchBar />
            </div>
            <div className="flex min-h-0 flex-1">
              <Sidebar />
              <main
                id="main-content"
                className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-slate-50 px-4 py-6 sm:px-8 sm:py-8 dark:bg-slate-950"
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
