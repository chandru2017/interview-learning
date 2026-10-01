import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 't30-6',
        topicId: 'top-30',
        title: 'Explain TypeScript generics.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Generics allow us to write reusable code that works with different types while keeping type safety.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generics make reusable code type-safe.',
                            'They are useful for API responses.',
                            'They are useful for reusable components and hooks.',
                            'They reduce duplicate type-specific code.',
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
                        text: 'const identity = <T>(value: T): T => value;',
                    },
                    {
                        type: 'highlight',
                        text: 'T can represent different types while keeping the returned value type-safe.',
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
                        text: `In Archer Review, a reusable API utility can use generics so the same function works with Student, Course, or Video response types.`,
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
                            'TypeScript generics help me create reusable and type-safe code. ',
                            'Instead of creating separate functions for every type, I can use one generic function. ',
                            'I commonly use generics for API responses, reusable components, and utility functions.',
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
                        items: ['Generics', 'API', 'Reusable', 'Type-safe'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-7',
        topicId: 'top-30',
        title: 'Explain React reconciliation.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Reconciliation is how React compares the old UI with the new UI. React finds what changed and updates the required parts of the DOM.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'React compares the previous and next element trees.',
                            'It calculates the required changes.',
                            'Keys help React identify list elements.',
                            'Good reconciliation helps avoid unnecessary DOM work.',
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
                        text: `items.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ));`,
                    },
                    {
                        type: 'highlight',
                        text: 'The key helps React identify each list item.',
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
                        text: `In an Archer Review video library, when video progress changes, React can update the affected UI instead of rebuilding the entire page.`,
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
                            'Reconciliation is the process React uses to compare the previous UI tree with the new UI tree. ',
                            'React identifies what changed and updates the required DOM elements. ',
                            'Proper keys are important because they help React track list items efficiently.',
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
                        items: ['Virtual DOM', 'Compare', 'Keys', 'Update'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-8',
        topicId: 'top-30',
        title: 'Explain React Fiber.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Fiber is React's internal system for managing rendering work. It allows React to split rendering work into smaller pieces.`,
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            `Fiber is React's reconciliation architecture.`,
                            'It allows rendering work to be prioritized.',
                            'Work can be paused and continued.',
                            'It helps React build more responsive applications.',
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
                        text: `const App = () => <Dashboard />;`,
                    },
                    {
                        type: 'highlight',
                        text: 'React Fiber manages the rendering work for the component tree.',
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
                        text: `In a large Archer Review student portal, many components may update together. React's rendering architecture helps manage this work while keeping the UI responsive.`,
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
                            'React Fiber is the internal reconciliation architecture of React. ',
                            'It breaks rendering work into smaller units and allows React to prioritize work. ',
                            'This helps React build more responsive applications, especially when the UI is complex.',
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
                        items: ['Fiber', 'Rendering', 'Prioritization', 'Reconciliation'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-9',
        topicId: 'top-30',
        title: 'What causes React re-renders?',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `React components can re-render when state changes, props change, the parent renders, or a consumed Context value changes.`,
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'State updates trigger a render.',
                            'New props can trigger a child render.',
                            'Parent rendering can cause child rendering.',
                            'Context updates affect consumers.',
                            'A render does not always mean the DOM changes.',
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
                        text: `const [count, setCount] = useState(0);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Calling setCount causes the component to render again.',
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
                        text: `In an Archer Review dashboard, changing a student's selected filter can re-render related components. I would keep state close to where it is needed.`,
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
                            'React re-renders mainly when state, props, or consumed context changes, and also when the parent renders. ',
                            'A re-render does not always mean a DOM update. ',
                            'I identify unnecessary renders using React DevTools and optimize only where needed.',
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
                        items: ['State', 'Props', 'Context', 'Parent Rendering'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-10',
        topicId: 'top-30',
        title: 'Explain useMemo vs useCallback vs React.memo.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `useMemo remembers a calculated value. useCallback remembers a function. React.memo prevents a component from rendering when its props have not changed.`,
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
                            'useMemo memoizes a calculated value.',
                            'useCallback memoizes a function reference.',
                            'React.memo memoizes a component.',
                            'Use them only when there is a real performance benefit.',
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
                        text: `const total = useMemo(
                            () => items.reduce((a, b) => a + b),
                            [items]
                        );`,
                    },
                    {
                        type: 'highlight',
                        text: 'The calculated value is reused until items changes.',
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
                        text: `In an Archer Review dashboard, changing a student's selected filter can re-render related components. I would keep state close to where it is needed.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'All three are React performance optimization tools. They help prevent unnecessary re-renders and calculations ',
                    },
                    {
                        type: 'heading',
                        text: 'useMemo',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Remembers a calculated value. You give it a function and a dependency array. ',
                            'The function runs only when dependencies change. Otherwise, it returns the cached result. ',
                            'Use this for expensive calculations like filtering a large list or complex math.',
                            '**Example:** `const sum = useMemo(() => expensiveCalculation(), [dependency])` ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'useCallback',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Remembers a function. Similar to useMemo, but for functions specifically. ',
                            "The function stays the same between renders if dependencies don't change. ",
                            'Use this when passing functions to child components, especially memoized children.',
                            '**Example:** `const handleClick = useCallback(() => { doSomething() }, [dependency]).` ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'React.memo',
                    },
                    {
                        type: 'bullets',
                        items: [
                            "Prevents a component from re-rendering if props didn't change. ",
                            "It wraps the entire component and compares old props with new props. If same, component doesn't re-render. ",
                            'Use this for components that receive many props or are expensive to render. ',
                            '**Example:** `const Child = React.memo(({ name }) => <div>{name}</div>)` ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Key differences:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'useMemo and useCallback use dependency arrays - they both check dependencies and return cached values if dependencies unchanged ',
                            'React.memo wraps the entire component - it checks if props changed',
                            'useMemo returns a value, useCallback returns a function, React.memo returns a component',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'When to use together:',
                    },
                    {
                        type: 'paragraph',
                        text: `In parent component: use useMemo for values, useCallback for functions. In child component: wrap with React.memo. This way, child doesn't re-render if values/functions didn't change. `,
                    },
                    {
                        type: 'heading',
                        text: `Important: Don't use these everywhere. They have overhead. Use only for:`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Expensive calculations (sorting, filtering large arrays)',
                            'Components that re-render frequently',
                            'Functions passed to memoized children',
                            'List items with complex rendering',
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
                        items: ['Value', 'Function', 'Component', 'Memoization'],
                    },
                ],
            },
        ],
    }),
];
