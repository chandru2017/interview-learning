import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const frontendArchitectureQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'fa-16',
        topicId: 'frontend-architecture',
        title: 'When would you introduce a monorepo?',
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
                            'A monorepo stores multiple applications and packages in one repository.',
                            'I introduce it when multiple projects need to share code, tooling, configuration, or dependencies.',
                            'It can improve consistency and code sharing across products.',
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
                            'I consider a monorepo when multiple applications share UI components, design systems, utilities, types, or configuration.',
                            'It is also useful when teams need coordinated changes across packages.',
                            'Before introducing one, I consider repository size, build performance, team ownership, CI complexity, and tooling.',
                            'A monorepo is not automatically better than multiple repositories.',
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
                        text: `apps/
    student-portal/
    admin/
    marketing/
  
  packages/
    ui/
    eslint-config/
    types/
    utils/`,
                    },
                    {
                        type: 'highlight',
                        text: 'Multiple applications can share common packages from one repository.',
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
                        text: 'If Archer Review had multiple independently deployed products sharing the same UI library, TypeScript types, and configuration, a monorepo could make shared development and version management easier.',
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
                            'I would introduce a monorepo when multiple applications have significant shared code or tooling.',
                            'Examples are a common design system, utilities, types, and configuration.',
                            'Before introducing it, I would consider CI performance, team ownership, repository size, and tooling complexity.',
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
                        text: '**You have three React applications sharing 80% of their UI. What would you consider?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'A shared package.',
                            'Potentially a monorepo.',
                            'A common design system.',
                            'Clear ownership and release strategy.',
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
                        items: ['Monorepo', 'Multiple apps', 'Shared packages', 'Design system', 'Tooling', 'CI'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-17',
        topicId: 'frontend-architecture',
        title: 'Turborepo vs Nx.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Turborepo and Nx are tools for managing monorepos and large JavaScript or TypeScript codebases.',
                            'Both support task orchestration, caching, dependency-aware builds, and multiple projects.',
                            'The choice depends on project needs and team preferences.',
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
                            'Turborepo focuses on fast task orchestration and caching with a relatively lightweight setup.',
                            'Nx provides a broader integrated workspace and strong project graph, generators, affected-project workflows, and extensibility.',
                            'I would choose based on repository complexity, framework support, team familiarity, CI requirements, and desired tooling.',
                            'I would not choose one only because it is more popular.',
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
                        text: `Monorepo
              apps/
                web/
                admin/
              
              packages/
                ui/
                utils/
              
              Tooling:
              Turborepo or Nx`,
                    },
                    {
                        type: 'highlight',
                        text: 'Both can help coordinate builds, tests, and shared packages in a monorepo.',
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
                        text: 'If an Archer Review organization had several Next.js applications and shared packages, I would evaluate Turborepo and Nx based on CI performance, dependency management, project boundaries, team experience, and required tooling.',
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
                            'Both Turborepo and Nx help manage monorepos.',
                            'Turborepo is lightweight and focused strongly on task orchestration and caching.',
                            'Nx provides a broader workspace with project graph, generators, and affected-project workflows.',
                            'I would choose based on project complexity, CI needs, team experience, and tooling requirements.',
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
                        text: '**Which one would you choose for a small monorepo?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'I would first understand the requirements.',
                            'For a simple workspace, I may prefer a lightweight setup.',
                            'For a complex organization with strong project graph and tooling needs, I would consider Nx.',
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
                        items: ['Turborepo', 'Nx', 'Monorepo', 'Caching', 'Project graph', 'Task orchestration'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-18',
        topicId: 'frontend-architecture',
        title: 'What are micro-frontends?',
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
                            'Micro-frontends split a large frontend into smaller independently owned applications or features.',
                            'Different teams can develop and deploy different parts of the frontend.',
                            'It is similar to the microservices idea on the frontend.',
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
                            'Each micro-frontend usually owns a business domain and can have independent development and deployment.',
                            'Integration can happen through runtime composition, build-time packages, routing, web components, or Module Federation.',
                            'The architecture requires strong standards for shared dependencies, authentication, design systems, routing, observability, and communication.',
                            'Micro-frontends introduce operational and architectural complexity, so they should be used only when that complexity provides real value.',
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
                        text: `Application
  ├── Student Portal
  ├── Admin Portal
  ├── Payments
  └── Learning Platform`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each domain can be owned and potentially deployed independently.',
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
                        text: 'If Archer Review had multiple large business domains owned by separate teams with independent release schedules, micro-frontends could allow each domain to evolve independently.',
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
                            'Micro-frontends split a large frontend into independently owned business areas.',
                            'Teams can develop and deploy those areas independently.',
                            'They can improve team autonomy, but they also introduce complexity around integration, dependencies, authentication, and UI consistency.',
                            'I use them only when the organizational and technical benefits justify that complexity.',
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
                        text: '**Why would a company introduce micro-frontends?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Many teams work on different business domains.',
                            'Teams need independent deployments.',
                            'The application is large enough that a single frontend has become difficult to scale organizationally.',
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
                            'Micro-frontends',
                            'Business domains',
                            'Independent deployment',
                            'Team autonomy',
                            'Integration',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-19',
        topicId: 'frontend-architecture',
        title: 'When should you use micro-frontends?',
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
                            'I consider micro-frontends when the frontend is very large and multiple teams need independent ownership and deployment.',
                            'It is mainly useful when organizational boundaries are a real problem.',
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
                            'I consider micro-frontends when teams are large, domains are clearly separated, and independent deployment provides meaningful value.',
                            'They are useful when teams need autonomy over release cycles and technology decisions.',
                            'I first check whether a well-structured modular monolith or monorepo can solve the problem with less complexity.',
                            'If micro-frontends are introduced, I define clear ownership, contracts, shared dependencies, design system rules, and observability.',
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
                        text: `Team A → Student Portal
  Team B → Payments
  Team C → Admin
  
  Each team → owns + deploys its domain`,
                    },
                    {
                        type: 'highlight',
                        text: 'Use micro-frontends when independent team ownership and deployment provide real value.',
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
                        text: 'If Archer Review grew into several independently managed products with separate teams and release cycles, I would evaluate micro-frontends after first checking whether a modular monorepo could solve the organizational problem more simply.',
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
                            'I would use micro-frontends when the application is large, domains are clearly separated, and multiple teams need independent ownership and deployment.',
                            'Before introducing them, I would check whether a modular monolith or monorepo can solve the same problem with less complexity.',
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
                        text: '**When would micro-frontends provide real value?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Many independent teams.',
                            'Clear business boundaries.',
                            'Independent deployments.',
                            'Different release schedules.',
                            'Need for team autonomy.',
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
                            'Large application',
                            'Independent teams',
                            'Business boundaries',
                            'Deployment',
                            'Autonomy',
                            'Modular monolith',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-20',
        topicId: 'frontend-architecture',
        title: 'When should you NOT use micro-frontends?',
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
                            'I would not use micro-frontends just because the application is large.',
                            'If one small team owns the entire application, micro-frontends may add unnecessary complexity.',
                            'If a normal modular React architecture can solve the problem, I prefer the simpler approach.',
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
                            'I avoid micro-frontends when team boundaries do not require independent deployments.',
                            'I also avoid them when domains are tightly coupled or when the application is still small.',
                            'The additional complexity includes runtime integration, shared dependencies, routing, authentication, observability, performance, and consistent UI.',
                            'A modular monolith or monorepo can often provide good boundaries without runtime fragmentation.',
                            'Architecture should solve a real problem rather than introduce technology for its own sake.',
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
                        text: `Small team
      +
  Single product
      +
  One deployment
      +
  Strongly connected features
  
  → Prefer modular React architecture`,
                    },
                    {
                        type: 'highlight',
                        text: 'Do not introduce micro-frontends when the problem can be solved more simply.',
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
                        text: 'For a small Archer Review team working on one Next.js application, I would prefer a clean feature-based architecture or monorepo before considering micro-frontends.',
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
                            'I would not use micro-frontends for a small or medium application with one team and one deployment cycle.',
                            'I would also avoid them when features are tightly coupled.',
                            'A modular monolith or feature-based architecture can often provide enough separation with much less complexity.',
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
                        text: '**The team has only five developers. Should they use micro-frontends?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Not automatically.',
                            'First understand the actual problem.',
                            'A modular architecture is usually simpler unless there is a strong need for independent ownership or deployment.',
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
                            'Avoid complexity',
                            'Small team',
                            'Tightly coupled',
                            'Modular monolith',
                            'Independent deployment',
                        ],
                    },
                ],
            },
        ],
    }),
];
