import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const frontendArchitectureQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 'fa-21',
        topicId: 'frontend-architecture',
        title: 'What is Module Federation?',
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
                            'Module Federation is a mechanism that allows separate JavaScript applications to share and load modules at runtime.',
                            'It is commonly associated with micro-frontend architectures.',
                            'One application can expose modules and another application can consume them.',
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
                            'Module Federation enables independently built applications to consume remote modules at runtime.',
                            'This can allow teams to deploy different frontend domains independently.',
                            'Shared dependencies such as React need careful version and loading management.',
                            'I would also consider failure handling, caching, performance, security, routing, authentication, and compatibility.',
                            'It is a technical mechanism, not an architecture by itself.',
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
                        text: `Host App
     ↓
  Remote App
     ↓
  CourseComponent`,
                    },
                    {
                        type: 'highlight',
                        text: 'The host can load a module exposed by another application at runtime.',
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
                        text: 'If different Archer Review product teams independently owned Student Portal and Admin functionality, Module Federation could be considered for runtime integration, provided the operational complexity is justified.',
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
                            'Module Federation allows independently built applications to share modules at runtime.',
                            'It is commonly used for micro-frontends.',
                            'A host application can consume modules exposed by a remote application.',
                            'I would carefully manage shared dependencies, version compatibility, performance, and failure handling.',
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
                        text: '**What can go wrong with shared React dependencies?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Version mismatch.',
                            'Multiple React copies.',
                            'Runtime compatibility problems.',
                            'Unexpected bundle size or behavior.',
                            'Need clear dependency-sharing rules.',
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
                            'Module Federation',
                            'Host',
                            'Remote',
                            'Runtime',
                            'Shared dependencies',
                            'Micro-frontends',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Module Federation host app and remote apps-ku runtime-la modules share panna allow pannum.',
                            'Remote independently build/deploy aagalam; host runtime-la adhai load pannum.',
                            'Shared dependency versions, network failure, and compatibility carefully manage pannalana duplicate React or runtime issues varalam.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Host and remote concepts**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Module Federation multiple frontend builds-kku modules share panna use aagura mechanism.',
                            'Host application remote app expose pannura module-ah runtime-la load pannalam.',
                            'Remote separate-a deploy aanaalum host adhai consume pannura setup irukkalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Benefits and dependency sharing**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Teams independent-a features release panna flexibility kidaikkum.',
                            'React madhiri dependency duplicate bundle aagama share panna configure pannalam.',
                            'Aana compatible versions and shared dependency rules clear-a define pannanum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Risks to plan for**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Remote load aagala na host behavior enna nu fallback design pannunga.',
                            'Version mismatch, multiple React copies, and runtime failure test pannunga.',
                            'Independent deployment benefit deployment and debugging complexity-ah vida useful-a irukka nu evaluate pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-22',
        topicId: 'frontend-architecture',
        title: 'How would you migrate a legacy frontend architecture?',
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
                            'I would avoid rewriting everything at once.',
                            'First I understand the existing system and identify the biggest problems.',
                            'Then I migrate incrementally while keeping the application working.',
                            'Each migration step should provide measurable value.',
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
                            'First, I map the current architecture, dependencies, critical user flows, technical debt, and deployment process.',
                            'Then I define the target architecture and migration boundaries.',
                            'I choose a low-risk feature or area for the first migration.',
                            'I introduce shared foundations such as TypeScript, linting, testing, design-system components, or API abstractions gradually.',
                            'I use the strangler pattern where appropriate: new functionality follows the new architecture while legacy functionality is migrated incrementally.',
                            'I measure progress and remove old code as each migration is completed.',
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
                        text: `Legacy
    ↓
  Define target architecture
    ↓
  Migrate one feature
    ↓
  Validate
    ↓
  Migrate next feature
    ↓
  Remove legacy code`,
                    },
                    {
                        type: 'highlight',
                        text: 'Prefer incremental migration over a risky big-bang rewrite.',
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
                        text: 'For an Archer Review legacy area, I would migrate one business feature at a time, for example moving an older UI section toward the newer React/Next.js and Tailwind architecture while keeping existing functionality stable.',
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
                            'I would first understand the current architecture and identify the highest-risk areas.',
                            'Then I would define the target architecture and migration plan.',
                            'I prefer incremental migration instead of rewriting everything at once.',
                            'I would migrate one feature, test it, release it, and then continue.',
                            'Finally, I would remove the old implementation after successful migration.',
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
                        text: '**Management asks you to rewrite the whole application in six months. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Understand why the rewrite is required.',
                            'Identify business-critical areas.',
                            'Estimate migration risk.',
                            'Propose incremental migration where possible.',
                            'Define measurable milestones.',
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
                            'Legacy',
                            'Target architecture',
                            'Incremental migration',
                            'Strangler pattern',
                            'Risk',
                            'Milestones',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Current architecture, business-critical flows, and main pain points-ah first assess pannuven.',
                            'Target state and measurable milestones define panni, strangler pattern madhiri incremental migration use pannuven.',
                            'Tests, monitoring, and rollback plan-oda risk reduce panni; value prove aagama full rewrite start panna maatten.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Current state assess pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Legacy app-oda dependencies, build/deploy flow, and main user journeys map pannunga.',
                            'Bugs, slow delivery, performance, and security madhiri actual pain points identify pannunga.',
                            'Business-critical areas and migration risks-ah prioritize pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Incremental target architecture**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Target architecture and success measures clear-a define pannunga.',
                            'Strangler approach-la pudhu capability-ah new structure-la build panni, old functionality-ah step-by-step replace pannalam.',
                            'Small milestones and ownership assign pannina migration progress track panna easy.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Risk control**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Critical flow-ku automated tests and production monitoring add pannunga.',
                            'Each step-ku rollback plan vechu, old and new behavior compare pannunga.',
                            'Full rewrite cost and risk justify aagumbodhu mattum consider pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-23',
        topicId: 'frontend-architecture',
        title: 'How would you scale a frontend team from 5 developers to 30?',
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
                            'When the team grows, communication and ownership become important.',
                            'I would divide the team around clear business areas.',
                            'I would establish coding standards, architecture rules, documentation, and code ownership.',
                            'Automation becomes important because manual processes do not scale.',
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
                            'I would organize developers into smaller feature teams with clear ownership.',
                            'I would define architecture boundaries and shared platform responsibilities.',
                            'A common Design System and component library would reduce duplicate work.',
                            'I would establish coding standards, linting, formatting, testing, CI/CD, code review rules, and documentation.',
                            'I would use CODEOWNERS or similar ownership mechanisms where appropriate.',
                            'Regular architecture reviews and ADRs would help keep teams aligned without requiring every decision to go through one architect.',
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
                        text: `30 Developers
        ↓
  Feature Teams
        ↓
  Clear Ownership
        ↓
  Shared Design System
        ↓
  Standards + Automation
        ↓
  Independent Delivery`,
                    },
                    {
                        type: 'highlight',
                        text: 'The goal is to scale team autonomy without losing consistency.',
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
                        text: 'For a growing Archer Review frontend team, I would define ownership for areas such as Student, Courses, Video Library, and shared UI, while keeping common standards and architecture guidelines across all teams.',
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
                            'I would divide the 30 developers into smaller feature teams with clear ownership.',
                            'Then I would establish shared architecture, Design System, coding standards, testing, CI/CD, and documentation.',
                            'I would automate quality checks and use code ownership to reduce bottlenecks.',
                            'The goal is team autonomy with consistent engineering standards.',
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
                        text: '**Thirty developers are all modifying the same components. What would you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Define ownership.',
                            'Split business features.',
                            'Create a shared component library.',
                            'Define contribution rules.',
                            'Reduce unnecessary cross-team dependencies.',
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
                            'Team scaling',
                            'Feature teams',
                            'Ownership',
                            'Design System',
                            'Automation',
                            'Standards',
                            'Autonomy',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Teams-ah business features base-la organize panni, ovvoru team-kum clear ownership and decision boundaries define pannuven.',
                            'Shared design system, documentation, CI automation, and contribution standards provide pannuven.',
                            'Team dependencies reduce panni, communication and onboarding processes scale aagura madhiri improve pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team ownership define pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Developers increase aagumbodhu, business domain base-la small feature teams create pannalam.',
                            'Ovvoru team-kum code ownership, responsibility, and decision scope clear-a irukkanum.',
                            'Team boundaries feature boundaries-oda align aana cross-team dependency kammi aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Shared tools and standards**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Design System and shared libraries duplicate UI work reduce pannum.',
                            'CI, testing, linting, and release automation consistent-a use pannunga.',
                            'Documentation and onboarding materials pudhu developers-ku help pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Autonomy with coordination**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Teams independent-a deliver panna public APIs and contribution rules clear-a veinga.',
                            'Shared platform decisions-ku communication channels and ownership establish pannunga.',
                            'Too many approval layers add pannaama, standards and automation moolama quality maintain pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-24',
        topicId: 'frontend-architecture',
        title: 'How would you enforce coding standards across teams?',
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
                            'I would not depend only on developers remembering the rules.',
                            'I would automate as many standards as possible.',
                            'Examples are ESLint, Prettier, TypeScript, Husky, CI checks, and code review rules.',
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
                            'I define a common engineering baseline for all teams.',
                            'I automate formatting, linting, type checking, tests, security checks, and build validation in CI.',
                            'I use shared ESLint and TypeScript configurations where appropriate.',
                            'I document architecture and coding conventions.',
                            'Code reviews focus on business logic and architectural concerns rather than formatting issues already handled by automation.',
                            'I also review standards periodically instead of creating rules that become outdated.',
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
                        text: `Developer
                  ↓
                ESLint + Prettier
                  ↓
                TypeScript
                  ↓
                Tests
                  ↓
                CI
                  ↓
                Code Review`,
                    },
                    {
                        type: 'highlight',
                        text: 'Automate standards so quality does not depend only on manual review.',
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
                        text: 'For the Archer Review frontend, I would standardize ESLint, Prettier, TypeScript, Tailwind rules, accessibility checks, testing, and Git hooks so developers across teams follow the same baseline automatically.',
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
                            'I define common standards and automate them wherever possible.',
                            'I use ESLint, Prettier, TypeScript, tests, Git hooks, and CI checks.',
                            'I maintain shared configuration and documentation.',
                            'This allows code reviews to focus on architecture and business logic instead of basic formatting issues.',
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
                        text: '**One team follows different ESLint rules from another team. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create a shared configuration where appropriate.',
                            'Version and document it.',
                            'Run the rules in CI.',
                            'Allow justified exceptions through a documented process.',
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
                        items: ['ESLint', 'Prettier', 'TypeScript', 'CI', 'Git hooks', 'Automation', 'Code review'],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Coding standards-ah clear-a document panni shared ESLint, Prettier, and TypeScript config provide pannuven.',
                            'Automated checks-ah local hooks and CI-la run panni violations early-a catch pannuven.',
                            'Standards team-kku useful-a irukka feedback collect panni update pannuven; justified exception-ku documented process veppen.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Standards define and share pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Naming, formatting, TypeScript usage, and testing expectations document pannunga.',
                            'Teams separate config create pannaama shared ESLint, Prettier, and tsconfig presets use pannalam.',
                            'Rules easy-a find panna mudiyura docs and examples provide pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Automation moolama enforce pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Formatting and linting checks local Git hooks-la run pannina developer-ku early feedback kidaikkum.',
                            'CI-la lint, type-check, and tests fail aana merge block pannalam.',
                            'Manual review-la repeated-a check panna vendiya rules-ah automation handle pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Adoption and exceptions**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Rules team workflow-ku practical-a irukka feedback base-la improve pannunga.',
                            'Valid exception irundha reason document panni consistent-a approve pannunga.',
                            'Standards enforce pannradhu punishment illa; maintainable collaboration-ku support.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-25',
        topicId: 'frontend-architecture',
        title: 'How would you design a frontend architecture for multiple products?',
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
                            'For multiple products, I would identify what should be shared and what should remain product-specific.',
                            'Common UI, design tokens, utilities, and platform services can be shared.',
                            'Each product should keep its own business logic and user experience where required.',
                            'A monorepo can be useful when the products share significant code.',
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
                            'I would create a shared platform layer for the Design System, UI components, utilities, TypeScript types, API clients, authentication, and common configuration where appropriate.',
                            'Each product would have its own application layer and business features.',
                            'I would define clear package boundaries so product-specific code does not leak into shared packages.',
                            'For multiple independently deployed products, I would consider a monorepo first and micro-frontends only if independent runtime ownership is actually required.',
                            'I would also consider branding, theming, accessibility, SEO, performance, security, deployment, observability, and team ownership.',
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
    student/
    admin/
    marketing/
  
  packages/
    ui/
    design-system/
    auth/
    api/
    utils/
    types/`,
                    },
                    {
                        type: 'highlight',
                        text: 'Share the platform; keep product-specific business logic inside each product.',
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
                        text: 'For an Archer Review ecosystem with multiple products such as Student, Admin, Marketing, and other specialized experiences, I would create shared UI and platform packages while keeping each product domain independent.',
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
                            'For multiple products, I separate shared platform capabilities from product-specific business logic.',
                            'I would create shared packages for UI, design tokens, authentication, API utilities, types, and common tooling.',
                            'Each product would own its business features and user experience.',
                            'I would consider a monorepo for shared development and micro-frontends only when independent runtime deployment is actually needed.',
                            'The key is clear boundaries so sharing does not create tight coupling.',
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
                        text: '**Three products need the same Button, Modal, and authentication logic. How would you structure them?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create shared UI and authentication packages.',
                            'Publish or consume them through the monorepo.',
                            'Keep product-specific business logic inside each application.',
                            'Define versioning and ownership rules.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**One product needs a special version of the shared component. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First check whether the variation is genuinely reusable.',
                            'Prefer composition or a supported variant if it fits the shared design system.',
                            'If the behavior is product-specific, keep it in the product instead of making the shared component more complex.',
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
                            'Multiple products',
                            'Shared platform',
                            'Design System',
                            'Monorepo',
                            'Product-specific',
                            'Clear boundaries',
                            'Micro-frontends',
                        ],
                    },
                ],
            },
        ],
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Multiple products-ku shared platform and design system create panni, common UI and tooling reuse pannuven.',
                            'Product-specific features, branding, and release needs-ah separate boundaries-la maintain pannuven.',
                            'Monorepo or shared packages choose pannradhu team workflow base-la; common layer product-specific complexity-a absorb panna vida maatten.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Shared foundation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Products-ku common-aana Button, forms, auth patterns, and tooling identify pannunga.',
                            'Design System and shared packages moolama consistency and code reuse maintain pannalam.',
                            'Shared platform components-ku ownership and release policy define pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Product-specific boundaries**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Product-specific business logic and workflows andha product-kulle irukkanum.',
                            'Branding and configuration-ku clear extension points provide pannunga.',
                            'Oru product-oda special case-ah every shared component-kulla conditional-a add panna avoid pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Repo and release strategy**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Products shared code and tooling use pannina monorepo or versioned shared packages consider pannalam.',
                            'Independent deployment, ownership, and dependency updates-ku release boundaries clear-a irukkanum.',
                            'Architecture product-specific work-ah slow pannaama reuse and autonomy balance pannanum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
