import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const securityQuestions: IQuestion[] = [
    createQuestion({
        id: 'sec-1',
        topicId: 'security',
        title: 'XSS prevention in React apps',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 'sec-2',
        topicId: 'security',
        title: 'CSRF and cookie strategies',
        difficulty: 'Advanced',
    }),
    createQuestion({
        id: 'sec-3',
        topicId: 'security',
        title: 'Handling secrets in frontend apps',
        difficulty: 'Intermediate',
    }),
];
