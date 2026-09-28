'use client';

import { useEffect } from 'react';

import { syncThemeClass } from '@/components/providers/theme-provider';

export const ThemeScript = () => {
    useEffect(() => {
        syncThemeClass();
    }, []);

    return null;
};
