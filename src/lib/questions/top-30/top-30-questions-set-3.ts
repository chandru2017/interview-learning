import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 't30-11',
        topicId: 'top-30',
        title: 'How do you optimize a React application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'First I measure the problem. Then I find the slow part and optimize that specific area.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Measure before optimizing.',
                            'Check unnecessary renders.',
                            'Check bundle size and JavaScript execution.',
                            'Use lazy loading and code splitting.',
                            'Use caching and virtualization when appropriate.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: 'const Chart = lazy(() => import("./Chart"));',
                    },
                    {
                        type: 'highlight',
                        text: 'The Chart code can be loaded only when it is needed.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `For an Archer Review video library, lazy loading and pagination can prevent every video component from loading at the same time.`,
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
                            'I first measure the performance problem instead of optimizing blindly. ',
                            'I check rendering, bundle size, API calls, and browser performance. ',
                            'Then I apply techniques like code splitting, lazy loading, caching, and render optimization based on the actual bottleneck.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['Measure', 'Renders', 'Bundle Size', 'Lazy Loading'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-12',
        topicId: 'top-30',
        title: 'How would you structure a large React application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'I organize the application by business features instead of putting everything in one large folder.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Use feature-based architecture.',
                            'Keep feature-specific components, hooks, APIs, and types together.',
                            'Keep truly shared code in shared layers.',
                            'Define clear ownership between features.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `features/
                                videos/
                                    VideoList.tsx
                                    useVideos.ts`,
                    },
                    {
                        type: 'highlight',
                        text: 'Video-related code stays inside the video feature.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `For Archer Review, areas such as Students, Courses, Videos, Calendar, and Payments can be separated into clear feature domains.`,
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
                            'For a large React application, I prefer feature-based architecture.',
                            'Each business feature owns its components, hooks, API logic, and types.',
                            'Shared components and utilities stay separate. This improves maintainability, scalability, and team ownership.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['Feature-Based', 'Shared', 'Scalable', 'Maintainable'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-13',
        topicId: 'top-30',
        title: 'Context vs Redux vs React Query.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Context shares values. Redux manages complex client state. React Query manages server data.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Context is good for simple shared state.',
                            'Redux is useful for complex client-side state.',
                            'React Query is designed for server state.',
                            'Server-state tools handle caching and refetching.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `const UserContext = createContext(null);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Context can share user information without passing props through many components.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In Archer Review, UI preferences can use Context, complex client state can use Redux, and course or video API data can use a server-state library.`,
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
                            `I don't choose these tools only by popularity.`,
                            `I first identify the state type.`,
                            `Context is good for simple shared state.`,
                            `Redux is useful for complex client state.`,
                            `React Query is designed for server state, including caching and refetching.`,
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['Context', 'Redux', 'Server State', 'Caching'],
                    },
                ],
            },
        ],
    }),
];
