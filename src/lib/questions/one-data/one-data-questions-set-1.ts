import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';
import { createSelfIntroductionQuestion, createRoleAndResponsibility } from '../shared/features';

export const oneIndiaQuestionsSet1: IQuestion[] = [
    createSelfIntroductionQuestion({ id: 'one-india-1', topicId: 'one-india' }),
    createRoleAndResponsibility({ id: 'one-india-2', topicId: 'one-india' }),
    createQuestion({
        id: 'one-india-3',
        topicId: 'one-india',
        title: 'Can you explain your Archer Review project?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'project-explain',
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'One of my major projects is Archer Review. It is an online learning platform that provides educational resources and exam preparation for students.',
                            'I worked on this project as a Frontend Team Lead.',
                            'We used React.js, Next.js, TypeScript, Tailwind CSS, Material UI, and REST APIs.',
                            'My responsibilities included developing reusable UI components, implementing responsive pages, integrating APIs, and maintaining frontend architecture.',
                            'I also worked on accessibility improvements, technical SEO, and performance optimization.',
                            'I collaborated with backend developers, designers, and other team members to deliver new features.',
                            'My main focus was to build a scalable, accessible, and maintainable frontend application.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-4',
        topicId: 'one-india',
        title: 'What is the difference between var, let, and const?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**var –** Function scoped.',
                            '**let –** Block scoped. Value can be changed.',
                            '**const –** Block scoped. Variable cannot be reassigned.',
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
                            'JavaScript-la variables declare panna `var`, `let`, `const` use pannuvom.',
                            '`var` function-scoped. Adha redeclare pannalam. Adhanala unexpected issues varalaam.',
                            '`let` block-scoped. Same scope-la redeclare panna mudiyadhu, but value change pannalam.',
                            '`const` block-scoped. Declare pannumbodhe value assign pannanum. Later reassign panna mudiyadhu.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Simple Explanation',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`var` – function scope.',
                            '`let` – block scope + value change pannalam.',
                            '`const` – block scope + reassign panna mudiyadhu.',
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
                            'var allows redeclaration and reassignment.',
                            'let allows reassignment but not redeclaration in the same scope.',
                            'const does not allow reassignment.',
                            'let and const are hoisted but stay in the Temporal Dead Zone until declaration.',
                            'We generally prefer const by default and let when reassignment is required.',
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
                        text: `const name = "Chandrasekar";
                            let age = 35;

                            age = 36;

                            console.log(name, age);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, name cannot be reassigned. But age can be updated.',
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
                        text: `In React applications, I use const for API response variables, functions, and values that don't need reassignment. I use let when a value needs to change inside a calculation.`,
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
                            'The main difference between var, let, and const is their scope and reassignment behavior.',
                            'Var is function scoped, while let and const are block scoped.',
                            'Var allows redeclaration and reassignment. Let allows reassignment but not redeclaration in the same scope.',
                            'Const does not allow reassignment.',
                            'In modern JavaScript, I prefer const by default and use let when the value needs to change. This makes the code more predictable and maintainable.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-5',
        topicId: 'one-india',
        title: 'What is Hoisting in JavaScript?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Hoisting means JavaScript processes variable and function declarations before executing the code.',
                            'Think of it like this: JavaScript prepares declarations first, then executes the code.',
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
                            'Hoisting na JavaScript behavior. Idhula variable and function declarations, code execution aagurathukku munnaadi process pannappadum.',
                            'var use panni declare panna variables, undefined value-oda initialize aagum.',
                            'let and const kooda hoisted aagum. Aana declaration-ku munnaadi access panna mudiyadhu. Idhuku reason Temporal Dead Zone (TDZ).',
                            'Function declarations-ah declaration-ku munnaadiye call panna mudiyum.',
                            'Hoisting-ah understand pannuradhu JavaScript applications-la unexpected errors avoid panna help pannum.',
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
                            'var is hoisted and initialized with undefined.',
                            'let and const are hoisted but remain in the Temporal Dead Zone.',
                            'Function declarations can be called before their declaration.',
                            'Function expressions behave based on the variable declaration used.',
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
                        text: `console.log(name);

                            var name = "React";

                            // Output: undefined`,
                    },
                    {
                        type: 'paragraph',
                        text: 'JavaScript knows the var declaration before execution, but its assignment happens later.',
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
                        text: `Understanding hoisting helps me avoid reference errors and write predictable JavaScript code, especially when working with functions and variables across different scopes.`,
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
                            'Hoisting is a JavaScript behavior where variable and function declarations are processed before code execution.',
                            'Variables declared with var are initialized with undefined.',
                            'Let and const are also hoisted, but they cannot be accessed before their declaration because of the Temporal Dead Zone.',
                            'Function declarations can be called before their declaration.',
                            'Understanding hoisting helps me avoid unexpected errors in JavaScript applications.',
                        ],
                    },
                ],
            },
        ],
    }),
];
