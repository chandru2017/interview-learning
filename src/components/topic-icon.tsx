'use client';

import {
    Accessibility,
    Atom,
    BookOpen,
    FileCode,
    Gauge,
    GitBranch,
    Globe,
    Layers,
    Network,
    Palette,
    Search,
    Shield,
    Star,
    Users,
    Zap,
    type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
    BookOpen,
    Palette,
    Zap,
    FileCode,
    Atom,
    Layers,
    Globe,
    Gauge,
    Accessibility,
    Search,
    Network,
    Shield,
    GitBranch,
    Users,
    Star,
};

export const TopicIcon = ({ name, className }: { name: string; className?: string }) => {
    const Icon = ICON_MAP[name] ?? BookOpen;
    return <Icon className={className} aria-hidden="true" />;
};
