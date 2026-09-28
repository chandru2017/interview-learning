import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const reactQuestions: IQuestion[] = [
    createQuestion({
        id: 're-1',
        topicId: 'react',
        title: 'How does reconciliation work at a high level?',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 're-2',
        topicId: 'react',
        title: 'useEffect dependency array pitfalls',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    createQuestion({
        id: 're-3',
        topicId: 'react',
        title: 'Controlled vs uncontrolled components',
        difficulty: 'Beginner',
        status: 'completed',
    }),
    createQuestion({
        id: 're-4',
        topicId: 'react',
        title: 'When would you lift state vs use composition?',
        difficulty: 'Intermediate',
    }),
    createQuestion({
        id: 're-5',
        topicId: 'react',
        title: 'Server Components vs Client Components',
        difficulty: 'Advanced',
    }),
];
