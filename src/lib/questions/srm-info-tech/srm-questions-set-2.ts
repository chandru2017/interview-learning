import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const srmInfoTechQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'srm-6',
        topicId: 'srm-info-tech',
        title: 'React Keys in Lists — Why are they important?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Simple definition',
                    },
                    {
                        type: 'paragraph',
                        text: 'A key is a unique identifier that React uses to identify each item in a list.',
                    },
                    {
                        type: 'code',
                        text: `const users = [
                            { id: 1, name: 'Chandra' },
                            { id: 2, name: 'Kumar' }
                            ];

                            users.map(user => (
                            <UserCard key={user.id} user={user} />
                            ));`,
                    },
                    {
                        type: 'heading',
                        text: 'Here:',
                    },
                    {
                        type: 'code',
                        text: `const users = [
                            { id: 1, name: 'Chandra' },
                            { id: 2, name: 'Kumar' }
                            ];`,
                    },
                    {
                        type: 'paragraph',
                        text: 'React uses these keys during reconciliation to understand which items were:',
                    },
                    {
                        type: 'bullets',
                        items: ['Added', 'Removed', 'Updated', 'Reordered'],
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Keys help React identify list items between renders.',
                            'During reconciliation, React uses keys to determine which items were added, removed, or reordered.',
                            'I prefer a stable unique ID from the data rather than an array index, especially when the list can change or be reordered.',
                            'Incorrect keys can cause unnecessary re-renders or even incorrect component state to be reused.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-7',
        topicId: 'srm-info-tech',
        title: 'When and how do you write custom hooks?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Simple definition',
                    },
                    {
                        type: 'paragraph',
                        text: 'A custom hook is a reusable JavaScript function that starts with use and contains React hooks.',
                    },
                    {
                        type: 'paragraph',
                        text: `I create custom hooks when the same stateful logic is needed in multiple components or when a component's logic becomes too complex.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "I create custom hooks when I have reusable stateful logic or when a component's logic becomes too complex.",
                            'A custom hook is a function starting with use that can use other React hooks and return the required state or functions.',
                            'For example, in a Video Library, I could create useVideos() to handle API calls, loading, error, and data state.',
                            'This keeps the component focused mainly on UI and makes the logic easier to reuse and test.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-8',
        topicId: 'srm-info-tech',
        title: 'How do you avoid unnecessary re-renders in React?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A re-render happens when React needs to run a component again to calculate the updated UI.',
                            'Not every re-render is bad. React can handle many re-renders efficiently.',
                            'The goal is to avoid expensive or unnecessary work, especially in large applications.',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'I first identify unnecessary work rather than blindly memoizing everything.',
                            'I use `React.memo` for components that receive stable props, `useMemo` for expensive calculations, and `useCallback` when function reference stability is important, especially with memoized children.',
                            'I also keep state close to where it is used, use stable keys for lists, and for very large lists I consider virtualization or pagination.',
                            'I would profile the application first and then optimize the actual bottleneck.',
                        ],
                    },
                ],
            },
        ],
    }),
];
