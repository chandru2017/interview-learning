import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const top30Questions: IQuestion[] = [
    createQuestion({
        id: 't30-1',
        topicId: 'top-30',
        title: 'Explain React rendering and when components re-render',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 't30-2',
        topicId: 'top-30',
        title: 'Design a performant infinite product list',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
    createQuestion({
        id: 't30-3',
        topicId: 'top-30',
        title: 'How would you architect a multi-tenant admin UI?',
        difficulty: 'Advanced',
    }),
    createQuestion({
        id: 't30-4',
        topicId: 'top-30',
        title: 'Debug a hydration mismatch in Next.js',
        difficulty: 'Advanced',
    }),
    createQuestion({
        id: 't30-5',
        topicId: 'top-30',
        title: 'Ship an accessible modal from scratch',
        difficulty: 'Intermediate',
    }),
];
