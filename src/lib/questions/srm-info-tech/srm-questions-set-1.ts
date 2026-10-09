import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const srmInfoTechQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'srm-1',
        topicId: 'srm-info-tech',
        title: 'React vs Angular — What’s the difference?',
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
                        type: 'bullets',
                        items: [
                            'React is a JavaScript library mainly used for building UI.',
                            'Angular is a full frontend framework that provides a complete structure for building applications.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why would I choose React?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'I would choose React when I need flexibility, reusable components, and a large ecosystem.',
                    },
                    {
                        type: 'paragraph',
                        text: '**For example, in a large application, I can choose:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React → UI',
                            'Next.js → routing, SSR/SSG, SEO',
                            'Zustand/Redux → state management',
                            'React Query → server-state/API caching',
                            'Tailwind/MUI → UI styling',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'This gives the team flexibility to choose the right tools based on the project.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `For a senior project, I don't choose React just because it is popular. I consider:`,
                    },
                    {
                        type: 'paragraph',
                        text: '',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Team expertise → project requirements → scalability → performance → SEO → ecosystem → maintainability.**',
                            'If the application needs a flexible architecture and the team already has strong React experience, I would choose React with Next.js.',
                        ],
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Angular gives you a complete framework with many decisions already made.',
                            'React gives you more freedom to choose the architecture and supporting libraries.',
                            'In my projects, I prefer React because it provides reusable components and flexibility, and with Next.js I can also handle routing, SEO, rendering, and performance requirements.',
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
                            'React is a JavaScript library for building user interfaces, while Angular is a complete frontend framework.',
                            'Angular provides many features out of the box, whereas React gives more flexibility in choosing libraries and architecture.',
                            'I would choose React when I need a flexible, component-based architecture, especially when the team has React experience and we need a large ecosystem.',
                            "In my projects, I prefer React with Next.js because it gives us React's flexibility along with routing, SEO, server-side rendering, and performance features.",
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-2',
        topicId: 'srm-info-tech',
        title: 'Two-way Binding vs One-way Data Flow',
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
                        text: '**Two-way binding means:**',
                    },
                    {
                        type: 'bullets',
                        items: ['Data changes in the component → UI updates, and UI changes → data also updates.'],
                    },
                    {
                        type: 'paragraph',
                        text: '**One-way data flow means:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Data flows in one direction: Parent → Child.',
                            'User actions update state, and React re-renders the UI.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why would I choose React?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'I would choose React when I need flexibility, reusable components, and a large ecosystem.',
                    },
                    {
                        type: 'paragraph',
                        text: '**For example, in a large application, I can choose:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React → UI',
                            'Next.js → routing, SSR/SSG, SEO',
                            'Zustand/Redux → state management',
                            'React Query → server-state/API caching',
                            'Tailwind/MUI → UI styling',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'This gives the team flexibility to choose the right tools based on the project.',
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
                            '**Two-way binding** can be convenient for forms, but it can become harder to track in large applications when many components modify the same data.',
                            '**One-way data flow** gives better predictability, debugging, and maintainability.',
                            'React can still achieve a two-way-binding-like experience using:',
                        ],
                    },
                    {
                        type: 'code',
                        text: `<input value={value} onChange={setValue} />`,
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
                            '**Two-way binding** means changes in the UI automatically update the component state, and changes in the state update the UI.',
                            'Angular supports this using `ngModel`.',
                            '`React` follows one-way data flow, where data flows from parent to child through props.',
                            'For user input, we explicitly update state using event handlers like `onChange` and `setState.`',
                            "I prefer React's one-way flow because it makes data changes predictable, easier to debug, and easier to maintain in large applications.",
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-3',
        topicId: 'srm-info-tech',
        title: 'How does the Virtual DOM work?',
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
                        text: '**Two-way binding means:**',
                    },
                    {
                        type: 'bullets',
                        items: ['Data changes in the component → UI updates, and UI changes → data also updates.'],
                    },
                    {
                        type: 'paragraph',
                        text: '**One-way data flow means:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Data flows in one direction: Parent → Child.',
                            'User actions update state, and React re-renders the UI.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why would I choose React?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'I would choose React when I need flexibility, reusable components, and a large ecosystem.',
                    },
                    {
                        type: 'paragraph',
                        text: '**For example, in a large application, I can choose:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React → UI',
                            'Next.js → routing, SSR/SSG, SEO',
                            'Zustand/Redux → state management',
                            'React Query → server-state/API caching',
                            'Tailwind/MUI → UI styling',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'This gives the team flexibility to choose the right tools based on the project.',
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Simple definition',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Virtual DOM is a lightweight JavaScript representation of the actual browser DOM.',
                            'React uses it to determine what actually needs to change in the UI, instead of updating the entire DOM every time.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'How it works',
                    },
                    {
                        type: 'paragraph',
                        text: 'Imagine the current UI is:',
                    },
                    {
                        type: 'code',
                        text: `Name: Chandra
                                Age: 35`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The state changes:',
                    },
                    {
                        type: 'code',
                        text: `Age: 36`,
                    },
                    {
                        type: 'heading',
                        text: 'React roughly follows this process:',
                    },
                    {
                        type: 'code',
                        text: `1. State changes
                                ↓
                            2. React creates a new Virtual DOM
                                ↓
                            3. React compares old Virtual DOM with new Virtual DOM
                                ↓
                            4. Finds the changed part
                                ↓
                            5. Updates only that part in the real DOM`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This comparison process is commonly called reconciliation.',
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
                            'The Virtual DOM is a lightweight JavaScript representation of the real DOM.',
                            'When state or props change, React creates a new Virtual DOM representation and compares it with the previous one.',
                            'This process is called reconciliation. React then calculates the required changes and updates the real DOM accordingly.',
                            'This allows us to build UI declaratively without manually manipulating the DOM.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-4',
        topicId: 'srm-info-tech',
        title: 'Explain Hooks: useState, useEffect, useMemo, useCallback, useRef, useReducer',
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
                        text: 'Hooks are functions that let functional React components use features like state, side effects, memoization, refs, and complex state logic.',
                    },
                    {
                        type: 'paragraph',
                        text: 'The main hooks you should know for a Senior React interview are:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**useState -** Manages component state.',
                            '**useEffect -** Handles side effects like API calls, subscriptions, and DOM updates.',
                            '**useMemo -** Memoizes expensive calculations.',
                            '**useCallback -** Memoizes functions.',
                            '**useRef -** Manages mutable values like timers, DOM elements, and previous values.',
                            '**useReducer -** Manages complex state logic.',
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
                            'I use `useState` for local state.',
                            '`useEffect` for side effects like API calls and subscriptions.',
                            '`useMemo` for memoizing expensive calculations.',
                            '`useCallback` for keeping function references stable when needed.',
                            "I use `useRef` for DOM references or mutable values that shouldn't trigger a re-render.",
                            'When state logic becomes complex with multiple related actions, I use `useReducer`.',
                            "I don't use memoization hooks by default; I use them when there is a real performance or reference-stability requirement",
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'srm-5',
        topicId: 'srm-info-tech',
        title: 'Controlled vs Uncontrolled Components',
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
                        text: 'The main difference is where the form value is stored.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Controlled** → React state controls the input.',
                            '**Uncontrolled** → The DOM itself controls the input, and React reads the value using ref.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Controlled Component',
                    },
                    {
                        type: 'paragraph',
                        text: 'React state is the source of truth.',
                    },
                    {
                        type: 'code',
                        text: `function Login() {
                            const [email, setEmail] = useState('');

                            return (
                                <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            );
                            }`,
                    },
                    {
                        type: 'heading',
                        text: 'Flow',
                    },
                    {
                        type: 'code',
                        text: `User types
                                ↓
                                onChange
                                ↓
                                setEmail()
                                ↓
                                React state
                                ↓
                                Re-render
                                ↓
                                Input value`,
                    },
                    {
                        type: 'heading',
                        text: 'When would I use it?',
                    },
                    {
                        type: 'paragraph',
                        text: 'For forms where i need',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Validation',
                            'Conditional UI',
                            'Dynamic fields',
                            'Enable/disable buttons',
                            'Real-time error messages',
                            'Form state management',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Uncontrolled Component',
                    },
                    {
                        type: 'paragraph',
                        text: 'The DOM is the source of truth. We use `ref` to read the value.',
                    },
                    {
                        type: 'code',
                        text: `function Login() {
                                const emailRef = useRef();

                                const handleSubmit = () => {
                                    console.log(emailRef.current.value);
                                };

                                return (
                                    <>
                                    <input ref={emailRef} />
                                    <button onClick={handleSubmit}>Submit</button>
                                    </>
                                );
                                }`,
                    },
                    {
                        type: 'heading',
                        text: `Here React doesn't store every keystroke in state.`,
                    },
                    {
                        type: 'code',
                        text: `User types
                            ↓
                            DOM stores value
                            ↓
                            Submit
                            ↓
                            ref.current.value`,
                    },
                    {
                        type: 'heading',
                        text: 'When would I use it?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The form is simple',
                            `I don't need real-time validation`,
                            'I want less state management',
                            'I need direct DOM access',
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
                            'In a controlled component, the input value is managed by React state, so React is the source of truth.',
                            'We use `value` and `onChange`.',
                            'In an uncontrolled component, the DOM manages the value and we access it using `useRef`.',
                            'I prefer controlled components when I need validation, dynamic behavior, or real-time form state.',
                            'For simple forms where I only need the value during submission, an uncontrolled approach can be simpler.',
                        ],
                    },
                ],
            },
        ],
    }),
];
