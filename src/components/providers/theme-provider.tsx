'use client';

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface IThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContextValue | null>(null);
const STORAGE_KEY = 'fip-theme';
const LISTENERS = new Set<() => void>();
const SERVER_THEME: Theme = 'light';

const emit = () => {
    LISTENERS.forEach((listener) => listener());
};

const readTheme = (): Theme => {
    if (typeof window === 'undefined') {
        return SERVER_THEME;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getServerTheme = (): Theme => {
    return SERVER_THEME;
};

const applyTheme = (theme: Theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(STORAGE_KEY, theme);
    emit();
};

const subscribe = (listener: () => void) => {
    LISTENERS.add(listener);
    return () => LISTENERS.delete(listener);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = useSyncExternalStore(subscribe, readTheme, getServerTheme);

    const setTheme = useCallback((next: Theme) => {
        applyTheme(next);
    }, []);

    const toggleTheme = useCallback(() => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

/** Call once on the client to sync the document class with stored preference. */
export const syncThemeClass = () => {
    if (typeof window === 'undefined') {
        return;
    }
    applyTheme(readTheme());
};
