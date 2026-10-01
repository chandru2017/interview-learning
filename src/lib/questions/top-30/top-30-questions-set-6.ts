import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet6: IQuestion[] = [
    createQuestion({
        id: 't30-26',
        topicId: 'top-30',
        title: 'How would you build a Design System?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A Design System is a collection of reusable UI components and design rules.',
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
                            'Build reusable components.',
                            'Define design tokens.',
                            'Follow accessibility standards.',
                            'Provide documentation.',
                            'Add visual and functional testing.',
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
                        text: `<Button variant="primary">
                                Save
                            </Button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The same Button component can be reused across the application.',
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
                        text: `For Archer Review, buttons, inputs, dropdowns, cards, modals, and icons can be standardized using Tailwind and shared UI components.`,
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
                            'I would build a Design System around reusable components, design tokens, accessibility, documentation, and testing.',
                            'The goal is consistency and faster development.',
                            'I would also keep component APIs simple and flexible.',
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
                        items: [
                            'Design System',
                            'Reusable Components',
                            'Design Tokens',
                            'Accessibility',
                            'Documentation',
                            'Testing',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-27',
        topicId: 'top-30',
        title: 'When would you use micro-frontends?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Micro-frontends split a large frontend into smaller applications that can be owned by different teams.',
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
                            'Useful when team boundaries are strong.',
                            'Can provide independent deployment.',
                            'Can improve team ownership.',
                            'Adds complexity around routing, dependencies, communication, and performance.',
                            'A modular monolith may be simpler.',
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
                        text: `Shell
                                ├── Student
                                ├── Courses
                                └── Payments`,
                    },
                    {
                        type: 'highlight',
                        text: 'Different teams can own different application areas.',
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
                        text: `If Archer Review became a very large platform with independently owned Student, Commerce, and Learning applications, micro-frontends could be considered.`,
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
                            'I use micro-frontends mainly when team and deployment boundaries justify the added complexity.',
                            'They can provide independent ownership and deployment.',
                            'But I first consider a well-structured modular monolith because it is usually simpler.',
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
                        items: ['Teams', 'Deployment', 'Boundaries', 'Complexity'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-28',
        topicId: 'top-30',
        title: 'Design a large-scale e-commerce frontend.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'I would divide the application into business areas such as Product, Search, Cart, Checkout, Account, and Payment.',
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
                            'Define clear domain boundaries.',
                            'Use reusable UI components.',
                            'Create clear API contracts.',
                            'Use caching and appropriate rendering.',
                            'Plan for errors, analytics, security, and observability.',
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
                        text: `const ProductCard = ({ product }) =>
                            <article>{product.name}</article>;`,
                    },
                    {
                        type: 'highlight',
                        text: 'ProductCard can be reused across product listing pages.',
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
                        text: `The same architecture can apply to Archer Review: Courses can act as products, with pricing, course details, checkout, student accounts, and learning content separated into domains.`,
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
                            'For a large e-commerce frontend, I would define clear domains such as product, search, cart, checkout, and account.',
                            'I would use reusable components and strong API boundaries.',
                            'For performance, I would use caching, code splitting, optimized images, and the right rendering strategy.',
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
                        items: ['Domains', 'Checkout', 'API', 'Caching'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-29',
        topicId: 'top-30',
        title: 'Tell me about your most challenging technical problem.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Use this structure: Problem → Investigation → Solution → Result.',
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
                            'Show technical ownership.',
                            'Explain how you investigated the problem.',
                            'Explain the trade-offs.',
                            'Show collaboration.',
                            'Mention the final result.',
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
                        text: `Problem → Accessibility issues
                            Action  → Audit and fix
                            Result  → Better accessibility`,
                    },
                    {
                        type: 'highlight',
                        text: 'Keep the story focused on your decision-making and impact.',
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
                        text: `A strong Archer Review example is the large VPAT accessibility effort. You can discuss identifying issues, categorizing them by severity, fixing them systematically, and validating the fixes using automated and manual testing.`,
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
                            'One challenging problem I worked on was a large accessibility and VPAT effort.',
                            'There were many issues across the application, so I first categorized them by severity and type.',
                            'Then I worked through the issues systematically with the team and validated the fixes using automated and manual testing.',
                            'This improved accessibility and gave us a more maintainable UI.',
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
                        items: ['Problem', 'Ownership', 'Accessibility', 'Teamwork'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-30',
        topicId: 'top-30',
        title: 'Why should we hire you as a Senior Frontend Engineer / Frontend Architect?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Talk about Experience + Technical Skills + Problem Solving. Do not only list technologies.',
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
                            '10+ years of software development experience.',
                            'Around 6 years of hands-on React experience.',
                            'Strong frontend architecture knowledge.',
                            'Experience with performance, accessibility, SEO, and maintainability.',
                            'Ability to solve complex technical problems.',
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
                        text: `Problem → Technical challenge
                            Decision → Architecture
                            Result   → Better scalability`,
                    },
                    {
                        type: 'highlight',
                        text: 'The important point is how you use your experience to solve business problems.',
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
                        text: `Your Archer Review experience covers React, Next.js, TypeScript, Tailwind, SEO, accessibility/VPAT, performance, and component architecture.`,
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
                            'I have over 10 years of software development experience and around 6 years of hands-on React experience.',
                            'I have worked on large frontend applications using React, Next.js, and TypeScript.',
                            'I focus not only on building features, but also on architecture, performance, accessibility, SEO, and maintainability.',
                            'I believe I can bring both strong technical skills and senior-level problem solving to the team.',
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
                        items: ['10+ Years', 'React', 'Architecture', 'Problem Solving'],
                    },
                ],
            },
        ],
    }),
];
