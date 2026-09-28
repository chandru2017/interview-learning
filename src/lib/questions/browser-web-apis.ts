import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const browserWebApisQuestions: IQuestion[] = [
    createQuestion({
        id: 'br-1',
        topicId: 'browser-web-apis',
        title: 'Critical rendering path overview',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 'br-2',
        topicId: 'browser-web-apis',
        title: 'localStorage vs sessionStorage vs cookies',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    createQuestion({
        id: 'br-3',
        topicId: 'browser-web-apis',
        title: 'How does the browser event system bubble and capture?',
        difficulty: 'Intermediate',
    }),
    createQuestion({
        id: 'br-4',
        topicId: 'browser-web-apis',
        title: 'Intersection Observer use cases',
        difficulty: 'Intermediate',
    }),
];
