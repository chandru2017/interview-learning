import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const frontendPerformanceQuestions: IQuestion[] = [
    createQuestion({
        id: 'pf-1',
        topicId: 'frontend-performance',
        title: 'Explain Core Web Vitals (LCP, INP, CLS)',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 'pf-2',
        topicId: 'frontend-performance',
        title: 'How do you reduce JavaScript bundle size?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    createQuestion({
        id: 'pf-3',
        topicId: 'frontend-performance',
        title: 'Image optimization strategies',
        difficulty: 'Intermediate',
    }),
];
