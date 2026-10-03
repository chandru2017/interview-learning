import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const frontendArchitectureQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'fa-1',
        topicId: 'frontend-architecture',
        title: 'How would you architect a large React application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'For a large React application, I would divide the application into clear business features.',
                            'Each feature should have its own components, hooks, API logic, state, and tests where possible.',
                            'Shared UI and utilities should be separated from business-specific code.',
                            'The architecture should be easy to understand, test, maintain, and scale.',
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
                            'I would start with business domains or features rather than creating one large components folder.',
                            'I would separate feature-specific code from shared UI, utilities, API clients, configuration, and infrastructure.',
                            'I would define clear dependency rules so one feature does not directly depend on another feature.',
                            'I would choose state management based on the type of state: local state, server state, or global client state.',
                            'I would also define standards for error handling, API access, testing, accessibility, performance, and code ownership.',
                            'The goal is not just folder structure. The main goal is controlling complexity as the application grows.',
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
                        text: `src/
        features/
          courses/
          students/
          payments/
        components/
        services/
        hooks/
        utils/
        config/`,
                    },
                    {
                        type: 'highlight',
                        text: 'Organize around business features and keep shared code separate.',
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
                        text: 'For a large Archer Review application, I would separate areas such as Student, Course, Video Library, Dashboard, and shared UI. Each feature would own its business logic while common components and utilities would stay in shared packages.',
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
                            'Each feature owns its components, hooks, API logic, state, and tests.',
                            'Shared UI, utilities, configuration, and API clients are kept separate.',
                            'I also define dependency boundaries and coding standards so the architecture can scale with the team.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**The application has 500 components and developers cannot find anything. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Identify major business features.',
                            'Move feature-specific code closer to the feature.',
                            'Create a clear shared component layer.',
                            'Remove duplicate components.',
                            'Document the architecture.',
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
                            'Feature-based',
                            'Business domains',
                            'Shared components',
                            'Dependency boundaries',
                            'State management',
                            'Scalability',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-2',
        topicId: 'frontend-architecture',
        title: 'How would you structure folders for a large application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'I prefer a structure that reflects the business features of the application.',
                            'Feature-specific code should stay together.',
                            'Common components and utilities should be separated.',
                            'The structure should make it easy for a new developer to understand where code belongs.',
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
                            'I avoid putting every component into one global components folder.',
                            'I use feature folders for business-specific functionality.',
                            'Shared UI components go into a common UI layer.',
                            'API clients and external integrations go into services or infrastructure.',
                            'Types, utilities, configuration, and tests should have clear ownership.',
                            'The folder structure should support dependency boundaries and team ownership.',
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
                        text: `src/
    app/
    features/
        courses/
        components/
        hooks/
        services/
        types.ts
        users/
        components/
        hooks/
        services/
    components/
    lib/
    config/
    types/`,
                    },
                    {
                        type: 'highlight',
                        text: 'Feature-specific code stays inside the feature instead of spreading across the application.',
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
                        text: 'For Archer Review, I would keep areas such as Video Library, Student Dashboard, Courses, and common UI clearly separated. This makes ownership and maintenance easier as more developers work on the project.',
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
                            'For a large application, I prefer feature-based folders.',
                            'Each feature contains its components, hooks, services, types, and tests.',
                            'Shared components and utilities are kept outside the feature folders.',
                            'This keeps related code together and makes the application easier to scale.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Where would you place a component used only by the Course feature?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Inside the Course feature.',
                            'I would move it to shared components only when another feature genuinely needs it.',
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
                        items: ['Feature folders', 'Shared UI', 'Services', 'Types', 'Ownership', 'Maintainability'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-3',
        topicId: 'frontend-architecture',
        title: 'Feature-based architecture vs layer-based architecture.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Feature-based architecture groups code by business feature.',
                            'Layer-based architecture groups code by technical type such as components, hooks, services, and utilities.',
                            'Feature-based architecture usually works better for large applications because related code stays together.',
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
                            'Layer-based structure is simple for small applications.',
                            'As the application grows, a global components, hooks, and services folder can become difficult to navigate.',
                            'Feature-based architecture improves ownership and localizes changes.',
                            'I often use a hybrid approach: feature-based business code with shared technical layers for UI, utilities, configuration, and infrastructure.',
                            'The important point is to define clear boundaries rather than blindly following one pattern.',
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
                        text: `Layer-based:
    
    components/
    hooks/
    services/
    
    Feature-based:
    
    features/
    courses/
    users/
    payments/`,
                    },
                    {
                        type: 'highlight',
                        text: 'For large applications, I generally prefer feature-based or hybrid architecture.',
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
                        text: 'For a large Archer Review codebase, I would use feature-based organization for areas such as Courses and Video Library, while keeping shared UI and common infrastructure separate.',
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
                            'Layer-based architecture is simple and works well for smaller applications.',
                            'Feature-based architecture groups related business code together and scales better for large applications.',
                            'For a large React application, I prefer a feature-based or hybrid approach.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Would you always use feature-based architecture?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'For a small application, a simple layer-based structure may be enough.',
                            'I choose based on application size, team size, and complexity.',
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
                        items: ['Feature-based', 'Layer-based', 'Hybrid', 'Scalability', 'Boundaries', 'Team size'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-4',
        topicId: 'frontend-architecture',
        title: 'What is a Design System?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A Design System is a collection of reusable UI components, design rules, patterns, and guidelines.',
                            'It helps teams build consistent user interfaces.',
                            'Examples include buttons, inputs, dialogs, typography, colors, spacing, and accessibility rules.',
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
                            'A mature Design System contains both design and engineering standards.',
                            'It includes reusable components, design tokens, accessibility behavior, responsive rules, interaction patterns, and documentation.',
                            'The goal is not only visual consistency but also faster development and predictable behavior.',
                            'I would treat accessibility and API consistency as first-class requirements.',
                            'I also define contribution and versioning rules for the system.',
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
                        text: `Button
    Input
    Modal
    Dropdown
    Card
    Typography
    Spacing
    Colors`,
                    },
                    {
                        type: 'highlight',
                        text: 'A Design System provides reusable building blocks and rules for the product.',
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
                        text: 'At Archer Review, a common design system can help keep buttons, inputs, dialogs, typography, spacing, accessibility behavior, and Tailwind-based UI consistent across different products and pages.',
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
                            'A Design System is a collection of reusable components, design tokens, patterns, and guidelines.',
                            'It provides visual consistency and consistent behavior across applications.',
                            'As a frontend architect, I also include accessibility, responsive behavior, documentation, and contribution standards.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why is a Design System useful for a large team?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reduces duplicate work.',
                            'Improves consistency.',
                            'Improves accessibility consistency.',
                            'Makes development faster.',
                            'Creates a common language between design and engineering.',
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
                            'Components',
                            'Design tokens',
                            'Consistency',
                            'Accessibility',
                            'Documentation',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-5',
        topicId: 'frontend-architecture',
        title: 'How would you build a component library?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'First, I identify common UI components.',
                            'Then I build reusable components with consistent APIs.',
                            'I add accessibility, tests, documentation, and versioning.',
                            'Finally, I publish and consume the library across applications.',
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
                            'I start with design tokens and component requirements.',
                            'I define component APIs carefully to avoid unnecessary props.',
                            'Components should support keyboard accessibility, responsive behavior, and theming where required.',
                            'I add unit/component tests and visual testing where useful.',
                            'Storybook or similar documentation can be used to demonstrate states and usage.',
                            'For multiple applications, I publish the library as a versioned package and establish release and breaking-change rules.',
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
                        text: `<Button
    variant="primary"
    size="md"
    onClick={handleSubmit}
    >
    Submit
    </Button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A good component library provides a simple and predictable API.',
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
                        text: 'For Archer Review, I would create shared components for common UI patterns such as Button, Input, Modal, Tabs, Dropdown, and Card, with accessibility and design rules built into the components.',
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
                            'I would start with reusable components and design tokens.',
                            'Then I would define simple APIs, accessibility behavior, tests, and documentation.',
                            'For multiple applications, I would package and version the library.',
                            'I would also define ownership and release rules.',
                        ],
                    },
                ],
            },
        ],

        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A shared Button has 30 props. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Review the actual use cases.',
                            'Remove unnecessary props.',
                            'Split fundamentally different behaviors into separate components.',
                            'Use composition instead of adding more conditional props.',
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
                            'Reusable',
                            'API',
                            'Accessibility',
                            'Testing',
                            'Storybook',
                            'Versioning',
                            'Design tokens',
                        ],
                    },
                ],
            },
        ],
    }),
];
