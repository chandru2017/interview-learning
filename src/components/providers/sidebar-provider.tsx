'use client';

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from 'react';

interface ISidebarContextValue {
    collapsed: boolean;
    mobileOpen: boolean;
    toggleCollapsed: () => void;
    setCollapsed: (value: boolean) => void;
    openMobile: () => void;
    closeMobile: () => void;
    toggleMobile: () => void;
}

const SidebarContext = createContext<ISidebarContextValue | null>(null);
const STORAGE_KEY = 'fip-sidebar-collapsed';
const COLLAPSE_LISTENERS = new Set<() => void>();
let mobileOpenState = false;
const MOBILE_LISTENERS = new Set<() => void>();

const emitCollapse = () => {
    COLLAPSE_LISTENERS.forEach((listener) => listener());
};

const emitMobile = () => {
    MOBILE_LISTENERS.forEach((listener) => listener());
};

const readCollapsed = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }
    return window.localStorage.getItem(STORAGE_KEY) === 'true';
};

const writeCollapsed = (value: boolean) => {
    window.localStorage.setItem(STORAGE_KEY, String(value));
    emitCollapse();
};

const subscribeCollapsed = (listener: () => void) => {
    COLLAPSE_LISTENERS.add(listener);
    return () => COLLAPSE_LISTENERS.delete(listener);
};

const subscribeMobile = (listener: () => void) => {
    MOBILE_LISTENERS.add(listener);
    return () => MOBILE_LISTENERS.delete(listener);
};

const getMobileSnapshot = () => {
    return mobileOpenState;
};

const getMobileServerSnapshot = () => {
    return false;
};

const getCollapsedServerSnapshot = () => {
    return false;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const collapsed = useSyncExternalStore(subscribeCollapsed, readCollapsed, getCollapsedServerSnapshot);
    const mobileOpen = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot);

    const setCollapsed = useCallback((value: boolean) => {
        writeCollapsed(value);
    }, []);

    const toggleCollapsed = useCallback(() => {
        writeCollapsed(!readCollapsed());
    }, []);

    const openMobile = useCallback(() => {
        mobileOpenState = true;
        emitMobile();
    }, []);

    const closeMobile = useCallback(() => {
        mobileOpenState = false;
        emitMobile();
    }, []);

    const toggleMobile = useCallback(() => {
        mobileOpenState = !mobileOpenState;
        emitMobile();
    }, []);

    const value = useMemo(
        () => ({
            collapsed,
            mobileOpen,
            toggleCollapsed,
            setCollapsed,
            openMobile,
            closeMobile,
            toggleMobile,
        }),
        [collapsed, mobileOpen, toggleCollapsed, setCollapsed, openMobile, closeMobile, toggleMobile],
    );

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within SidebarProvider');
    }
    return context;
};
