import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'one-india-11',
        topicId: 'one-india',
        title: 'What is React.js, and why do we use it?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'React is a JavaScript library used to build user interfaces.',
                            'It helps us create reusable UI components and update the screen efficiently when data changes.',
                        ],
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
                            'Component-based architecture.',
                            'Declarative UI development.',
                            'One-way data flow.',
                            'State and props management.',
                            'Reusable components.',
                            'Efficient UI updates through reconciliation.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'React is useful for building scalable and maintainable frontend applications.',
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
                        text: `const Welcome = () => {
                                return <h1>Welcome to React</h1>;
                            };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This creates a reusable React component that displays a heading.',
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
                        text: `In Archer Review, React helps us build reusable components such as navigation menus, buttons, forms, cards, and other learning-related UI elements.`,
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
                            'React is a JavaScript library used to build user interfaces.',
                            'It follows a component-based architecture, which allows us to divide the application into small and reusable components.',
                            'React uses state and props to manage data and update the UI when data changes.',
                            'It also uses reconciliation to efficiently update the required parts of the UI.',
                            'I use React to build scalable, reusable, and maintainable frontend applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-12',
        topicId: 'one-india',
        title: 'What are components in React?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Components are small, reusable building blocks of a React application.',
                            'For example, Header, Footer, Button, Sidebar and ProductCard can all be separate components.',
                        ],
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
                            'Functional components are the standard approach in modern React.',
                            'Components can receive data through props.',
                            'Components can maintain local state.',
                            'Reusable components reduce duplication.',
                            'Component composition helps maintain application architecture.',
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
                        text: `const Button = ({ label }) => {
                            return <button>{label}</button>;
                            };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'We can reuse this Button component in multiple places by passing different labels.',
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
                        text: `In Archer Review, we can maintain common components like buttons, input fields, modal dialogs and navigation elements in a shared component library.`,
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
                            'Components are the building blocks of React applications.',
                            'They help us divide the UI into smaller and reusable pieces.',
                            'A component can receive data through props and manage its own state when required.',
                            'I prefer creating reusable components because they reduce code duplication and improve maintainability.',
                            'In my projects, I use component-based architecture to maintain consistent UI across multiple pages.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-13',
        topicId: 'one-india',
        title: 'What is the difference between Props and State?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**Props:** Data passed from a parent component to a child component.',
                            '**State:** Data managed inside a component that can change over time.',
                        ],
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
                            `Props are read-only from the receiving component's perspective.`,
                            'State is managed using React state APIs.',
                            'Updating state can trigger a re-render.',
                            'Props changes can also trigger a re-render.',
                            'We use props for component communication and state for dynamic data.',
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
                        text: `const User = ({ name }) => {
                            const [age, setAge] = useState(25);

                            return <button onClick={() => setAge(age + 1)}>
                                {name} - {age}
                            </button>;
                            };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, name is received through props, while age is maintained using state.',
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
                        text: `In Archer Review, I can pass a course title through props to a reusable CourseCard component. The selected course status can be maintained using state.`,
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
                            'Props and state are used to manage data in React.',
                            'Props are used to pass data from a parent component to a child component. They are read-only in the receiving component.',
                            'State is used to manage data inside a component. When state changes, React can re-render the component.',
                            'I use props for component communication and state for managing dynamic UI data.',
                            'Both help build reusable and interactive applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-14',
        topicId: 'one-india',
        title: 'What are React Hooks?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Hooks are special functions in React that allow functional components to use state and other React features.',
                            '**Examples:** useState, useEffect, useRef, useMemo, useCallback.',
                        ],
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
                            'Call hooks at the top level of React components or custom hooks.',
                            'Do not call hooks inside loops, conditions or nested functions.',
                            'Custom hooks allow us to reuse stateful logic.',
                            "Hooks must follow React's rules of execution.",
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
                        type: 'paragraph',
                        text: 'Here, useState creates a state variable and a function to update it.',
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
                        text: `I use React hooks to manage form values, API-related UI states, reusable logic and component lifecycle-related behavior.`,
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
                            'React Hooks are special functions that allow functional components to use React features like state and lifecycle-related behavior.',
                            'Some commonly used hooks are useState, useEffect, useRef, useMemo, and useCallback.',
                            'We can also create custom hooks to reuse component logic.',
                            'React hooks must follow the Rules of Hooks. We should call them only at the top level of components or custom hooks.',
                            'Hooks help us write cleaner and more reusable React code.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-15',
        topicId: 'one-india',
        title: 'What is useState?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'useState is a React hook used to manage state inside functional components.',
                            'When state changes, React schedules a re-render.',
                        ],
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
                            'It returns the current state and a setter function.',
                            'State updates are scheduled and may be batched.',
                            'The setter can accept a new value or an updater function.',
                            'State should be treated as immutable.',
                            'We should not directly modify state variables.',
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
                        text: `const [count, setCount] = useState(0);

                            const increment = () => setCount(prev => prev + 1);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, count stores the current value. The setter updates it using the previous state.',
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
                        text: `In a learning application, I can use useState to manage dropdown visibility, selected filters, form values and modal open/close states.`,
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
                            'useState is a React hook used to manage local state inside functional components.',
                            'It returns the current state value and a setter function.',
                            'When we update state using the setter, React schedules a re-render to display the updated UI.',
                            'I use useState for managing form values, dropdowns, modals, filters, and other dynamic UI elements.',
                            'I also use functional updates when the new state depends on the previous state.',
                        ],
                    },
                ],
            },
        ],
    }),
];
