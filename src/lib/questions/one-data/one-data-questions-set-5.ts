import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 'one-india-21',
        topicId: 'one-india',
        title: 'What is the difference between Controlled and Uncontrolled Components?',
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
                            'Controlled component: React state controls the input value.',
                            'Uncontrolled component: The DOM manages the input value, and React accesses it using a ref when required.',
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
                        type: 'paragraph',
                        text: 'Controlled components:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use value and onChange.',
                            'Give React control over form data.',
                            'Make validation and conditional UI easier.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Uncontrolled components:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use defaultValue and refs.',
                            'Can be useful for simple forms or file inputs.',
                            'Reduce the need to update React state on every keystroke.',
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
                        text: `const [name, setName] = useState("");

                            return (
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            );`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, React state controls the input value.',
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
                        text: `In Archer Review, I can use controlled components for registration forms, login forms and validation. For file inputs, I can use an uncontrolled input with a ref.`,
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
                            `Controlled components are form elements where React state controls the input value.`,
                            'Uncontrolled components manage their own values through the DOM, and we access them using refs.',
                            'I prefer controlled components when I need form validation, dynamic updates, and conditional behavior.',
                            'I use uncontrolled components for simple cases where direct DOM access is sufficient, such as file inputs.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-22',
        topicId: 'one-india',
        title: 'How do you optimize React application performance?',
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
                            'React performance optimization means making an application faster and avoiding unnecessary work.',
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
                        type: 'paragraph',
                        text: '**My approach:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Identify performance problems using React DevTools and browser profiling.',
                            'Avoid unnecessary re-renders.',
                            'Use React.memo, useMemo and useCallback when beneficial.',
                            'Implement code splitting and lazy loading.',
                            'Optimize images and bundle size.',
                            'Avoid unnecessary API requests.',
                            'Use pagination or virtualization for large lists.',
                            'Measure improvements using Lighthouse and Core Web Vitals.',
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
                        text: `const filteredUsers = useMemo(
                            () => users.filter(user => user.active),
                            [users]
                        );`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This memoizes the filtered result until the users dependency changes.',
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
                            'I follow a measurement-based approach to React performance optimization.',
                            'First, I identify performance issues using React DevTools, browser DevTools, and Lighthouse.',
                            'Then I work on unnecessary re-renders, code splitting, lazy loading, image optimization, and bundle optimization.',
                            'I also optimize API requests and large data rendering.',
                            'In one of my projects, I worked on performance improvements and helped improve the Lighthouse score from 60 to 94 and reduce page load time by approximately 35%.',
                            'My main focus is to improve performance without making the application difficult to maintain.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-23',
        topicId: 'one-india',
        title: 'What is TypeScript, and why do we use it?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'TypeScript is a programming language built on top of JavaScript.',
                            'It adds static typing and helps identify errors during development.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'TypeScript-na JavaScript-ku mela additional type system add pannura language.',
                            'JavaScript-la variable-ku different types of values assign pannalaam. Aana TypeScript-la variable enna type data accept pannum nu define pannalaam.',
                            'Idhunaala coding time-la errors identify panna mudiyum. Code maintain panna easy-ah irukkum.',
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
                            'TypeScript provides static type checking.',
                            'It detects many errors during development.',
                            'It improves code readability and maintainability.',
                            'It provides better IDE autocomplete and refactoring support.',
                            'TypeScript compiles into JavaScript.',
                            'It does not provide runtime type validation by itself.',
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
                        text: `const name: string = "React";
    const age: number = 10;

    const greet = (name: string): string => {
    return \`Hello \${name}\`;
    };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, name accepts a string and age accepts a number.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In Archer Review, TypeScript helps define API response types, component props, and form data.',
                            'This reduces type-related mistakes and makes large frontend applications easier to maintain.',
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
                            'TypeScript is a programming language built on top of JavaScript that adds static typing.',
                            'It helps identify type-related errors during development.',
                            'It also provides better code readability, autocomplete, and maintainability.',
                            'In my projects, I use TypeScript to define API response types, component props, and reusable interfaces.',
                            'It helps me build scalable and reliable frontend applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-24',
        topicId: 'one-india',
        title: 'What is the difference between type and interface?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: ['Both `type` and `interface` are used to define the structure of data in TypeScript.'],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '`interface` and `type` rendu perum object structure define panna use pannalaam.',
                            '`interface` mainly object structure define panna useful-ah irukkum. `interface`-ku `extends` use panni another interface extend pannalaam.',
                            '`type`-la object types mattum illaama union, intersection, primitive aliases and other types-um define pannalaam.',
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
                            '`interface` supports declaration merging.',
                            '`interface` supports extension using extends.',
                            '`type` supports unions and intersections.',
                            '`type` can represent primitives, tuples and more complex type combinations.',
                            'Both can describe object shapes.',
                            'For object contracts, either can be appropriate depending on project conventions.',
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
                        text: `interface User {
                            id: number;
                            name: string;
                            }

                            type Status = "active" | "inactive";`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, `User` defines an object structure, while `Status` defines allowed values.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In React applications, I can use `interface` to define component props and API objects.',
                            'I can use type for union types such as loading, success, and error states.',
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
                            'Both `type` and `interface` are used to define types in TypeScript.',
                            '`interface` is commonly used to define object structures and supports extension using extends.',
                            '`type` is more flexible because it supports `unions, intersections, primitive aliases`, and other type combinations.',
                            'Both can define object structures.',
                            'I choose between them based on the requirement and project coding conventions.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-25',
        topicId: 'one-india',
        title: 'What are Generics in TypeScript?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generics allow us to create reusable functions, components, and types that work with different data types while maintaining type safety.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Generics-na same function or component different data types-ku work aagura maadhiri create pannuradhu.',
                            'Oru function string-ku mattum work aaganum, number-ku mattum work aaganum nu separate-ah create panna thevai illa.',
                            'Generic use pannina same function different types accept pannum. Aana type safety maintain aagum.',
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
                            'Generics make code reusable.',
                            'They preserve type information.',
                            'They avoid unnecessary use of `any`.',
                            'They support type constraints.',
                            'They are useful in API response wrappers, reusable components, utility functions, and data structures.',
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
                        text: `const identity = <T>(value: T): T => {
    return value;
    };

    identity<string>("React");
    identity<number>(100);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'T represents a generic type that can be inferred or explicitly provided.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In frontend applications, I can create a reusable API response type like ApiResponse<T>.',
                            'It can represent responses containing users, courses, products, or any other data while maintaining type safety.',
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
                            'Generics allow us to create reusable functions, components, and types that work with different data types.',
                            'They help maintain type safety without using `any`.',
                            'For example, a generic API response type can support different data structures like users, courses, or products.',
                            'I use generics when building reusable utilities, components, and API response structures.',
                        ],
                    },
                ],
            },
        ],
    }),
];
