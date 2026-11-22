import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const frontendArchitectureQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'fa-6',
        topicId: 'frontend-architecture',
        title: 'How would you ensure component reusability?',
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
                            'I keep components focused on one responsibility.',
                            'I avoid hardcoding business-specific logic inside common UI components.',
                            'I use props and composition to support different use cases.',
                            'I make the API simple and predictable.',
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
                            'I separate presentation from business logic when it improves reuse.',
                            'I use composition instead of creating too many boolean props.',
                            'I avoid coupling shared components directly to APIs or feature-specific state.',
                            'I define stable component contracts and document expected usage.',
                            'I only move a component into shared code when there is a genuine reuse requirement.',
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
                        text: `<Card
    title="React Course"
    footer={<Button>View</Button>}
  >
    Course content
  </Card>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Composition allows the same component to support different content.',
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
                        text: 'In Archer Review, a reusable Card or Modal should not know about a specific course API. It should receive data or children and remain independent from business logic.',
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
                            'I keep reusable components small and focused.',
                            'I avoid business logic and API calls inside common UI components.',
                            'I prefer props and composition over many conditional flags.',
                            'I also make the component accessible and define a clear API.',
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
                        text: '**How do you know whether a component should be shared?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Look for repeated use cases.',
                            'Check whether the behavior is genuinely common.',
                            'Avoid premature abstraction.',
                            'Extract when the shared contract becomes clear.',
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
                        items: ['Single responsibility', 'Composition', 'Props', 'Loose coupling', 'Reusable API'],
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
                            'Component-ah small and single responsibility-oda design pannuven.',
                            'Business logic and API calls-ah common UI component-kulla hardcode panna maatten.',
                            'Different use cases-ku props and composition use panni, simple predictable API maintain pannuven.',
                            'Genuine reuse irundha mattum shared component-a extract pannuven.',
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
                        text: '**Component focus and responsibility**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Oru component-ku clear-aana oru main responsibility irukkanum.',
                            'Common Card or Modal course API madhiri specific business logic-ah direct-a depend panna koodadhu.',
                            'Data, callback, or children props-a receive pannina component different places-la reuse pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Props and composition**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Title, variant, or content madhiri clear props API define pannunga.',
                            'Neraya boolean props add pannradhukku badhila children or composition use pannunga.',
                            'Idhu component-ku unnecessary conditions varama flexible-a vechukkum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Eppo shared component create pannalam?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Repeated use cases and common behavior clear-a irundha shared component-a extract pannalam.',
                            'Oru place-la mattum use aagura component-ah premature-a global shared folder-ku move panna vendam.',
                            'API accessible-a, predictable-a, and document panna easy-a irukkanum.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-7',
        topicId: 'frontend-architecture',
        title: 'How would you prevent a shared component from becoming too complex?',
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
                            'I keep shared components focused on one responsibility.',
                            'If a component gets too many props or conditions, I review whether it should be split.',
                            'I prefer composition over adding more boolean props.',
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
                            'A common warning sign is a component with many props, feature-specific conditions, or deeply nested branches.',
                            'I identify the common behavior and separate feature-specific behavior.',
                            'I use compound components or composition when appropriate.',
                            'If two use cases have very different behavior, I create separate components instead of forcing everything into one abstraction.',
                            'I review shared components during code review and monitor their API growth.',
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
                        text: `// Avoid
  <Button
    isCourseButton
    isAdminButton
    showPayment
    showIcon
    compact
    specialMode
  />`,
                    },
                    {
                        type: 'highlight',
                        text: 'Too many flags usually mean the component is doing too many jobs.',
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
                        text: 'If a shared Archer Review Modal starts containing course-specific, student-specific, and payment-specific logic, I would separate the business logic from the Modal and keep the shared Modal responsible only for dialog behavior and presentation.',
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
                            'I watch for too many props, boolean flags, and feature-specific conditions.',
                            'I separate business logic from the shared UI component.',
                            'I use composition when possible.',
                            'If use cases are fundamentally different, I create separate components.',
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
                        text: '**A shared component has 20 props. What is your first step?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Review actual usage.',
                            'Group related behavior.',
                            'Identify feature-specific props.',
                            'Consider composition or splitting the component.',
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
                        items: ['Complexity', 'Props', 'Composition', 'Feature-specific', 'Single responsibility'],
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
                            'Too many props, boolean flags, and feature-specific conditions irukka nu first check pannuven.',
                            'Common UI behavior and feature-specific logic-ah separate pannuven.',
                            'Composition or compound components use panni, behavior romba different na separate components create pannuven.',
                            'Shared component API grow aaguradha code review-la monitor pannuven.',
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
                        text: '**Complexity signs identify pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component-la romba props or boolean flags irundha, pala responsibilities irukkalaam.',
                            'Feature-specific conditions and deeply nested branches-um complexity signal.',
                            'Actual usage examples collect panni common behavior enna nu identify pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Component simplify pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Shared component common UI behavior mattum handle pannattum; course/payment logic feature-kulle irukkattum.',
                            'Boolean props adhigama add pannaama composition or compound component pattern consider pannunga.',
                            'Rendu use cases behavior romba different na, ore component force pannaama separate components create pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Maintain panna**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component responsibilities and API clear-a document pannunga.',
                            'Code review-la new prop unmaiyave common-a nu check pannunga.',
                            'Oru shared component ella business logic-um handle panna vendiya place illa.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-8',
        topicId: 'frontend-architecture',
        title: 'How do you manage dependencies between features?',
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
                            'I try to keep features independent.',
                            `One feature should not directly depend on another feature's internal implementation.`,
                            'Shared functionality should move into a shared layer.',
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
                            'I define dependency direction between layers and features.',
                            `Features can depend on shared libraries, but they should avoid importing another feature's internal files.`,
                            'If two features share business logic, I identify whether it belongs in a domain service or shared module.',
                            'I also use linting or dependency rules when the project needs stronger architectural enforcement.',
                            'The goal is to avoid circular dependencies and tightly coupled features.',
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
                        text: `courses → shared-ui
  users   → shared-ui
  
  Avoid:
  
  courses → users/internal-component`,
                    },
                    {
                        type: 'highlight',
                        text: 'Features should communicate through clear public APIs instead of internal files.',
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
                        text: 'For Archer Review, the Course feature should not import internal components from Video Library. If both need a common video player, I would place that player in a shared UI or domain layer.',
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
                            'I keep feature dependencies one-directional where possible.',
                            'Features should use another feature through a public API rather than importing internal files.',
                            'Common functionality should move into a shared domain or UI layer.',
                            'This helps avoid circular dependencies and tight coupling.',
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
                        text: '**Two features need the same business logic. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Understand whether the logic is truly shared.',
                            'Extract it into a shared domain service or module.',
                            'Give both features a clean public API.',
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
                            'Dependency boundaries',
                            'Loose coupling',
                            'Public API',
                            'Shared module',
                            'Circular dependency',
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
                            'Features independent-a irukka dependency direction and public API boundaries define pannuven.',
                            'Oru feature innoru feature-oda internal files import panna vida maatten.',
                            'Common business logic irundha shared domain service or module-ku extract pannuven.',
                            'Dependency rules enforce pannina circular dependency and tight coupling avoid pannalam.',
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
                        text: '**Feature boundaries**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Oru feature innoru feature-oda internal component or file-ah direct-a import panna koodadhu.',
                            'Feature-ku thevaiyana functionality public API moolama expose pannunga.',
                            'Idhu internal implementation change aana other feature break aaguradha reduce pannum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Shared functionality**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Rendu features same UI behavior use pannina shared UI module use pannalam.',
                            'Business logic share aana adhu domain service or shared module-la belong aagudha nu check pannunga.',
                            'Just duplicate code irukku nu udane extract pannaama, logic genuinely common-a nu confirm pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Dependency rules**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Dependency direction one-way-a irukka rules define pannunga.',
                            'Linting or dependency tools use panni internal imports and circular dependencies detect pannalam.',
                            'Clear boundaries maintain panna features loosely coupled-a irukkum.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-9',
        topicId: 'frontend-architecture',
        title: 'How would you design an API abstraction layer?',
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
                            'I avoid calling fetch or Axios directly from every component.',
                            'I create a common API layer that handles requests consistently.',
                            'It can handle authentication, errors, headers, and common response behavior.',
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
                            'I create a centralized HTTP client for common concerns.',
                            'Feature-specific API services use that client.',
                            'I separate transport concerns from business logic.',
                            'The abstraction can handle authentication, request cancellation, retries where appropriate, error normalization, logging, and common headers.',
                            'I avoid creating an abstraction that hides important HTTP behavior or makes debugging difficult.',
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
                        text: `const apiClient = {
    get: (url) => fetch(url),
  };
  
  const courseApi = {
    getCourse: (id) =>
      apiClient.get(\`/api/courses/\${id}\`),
  };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Components consume feature APIs instead of knowing transport details.',
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
                        text: 'For Archer Review, I would create a common API client for authentication, headers, error handling, and request behavior, while keeping Course, Student, and Video Library API functions inside their respective feature services.',
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
                            'I create a common HTTP client for cross-cutting concerns.',
                            'Feature-specific services use that client.',
                            'This keeps API logic out of UI components.',
                            'I also standardize errors, authentication, request cancellation, and logging.',
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
                        text: '**The backend changes the authentication header. How does your architecture help?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Update the centralized API client.',
                            'Feature APIs continue using the same client.',
                            'UI components do not need changes.',
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
                            'API client',
                            'Abstraction',
                            'Authentication',
                            'Error handling',
                            'Feature service',
                            'Loose coupling',
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
                            'Common headers, authentication, and error handling-ku centralized HTTP client create pannuven.',
                            'Feature-specific API services andha client use pannum; UI components endpoint details therinjukka thevai illa.',
                            'Request cancellation and logging madhiri shared behavior add pannuven, aana HTTP details debug panna mudiyama hide panna maatten.',
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
                        text: '**Central API client**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ovvoru component-layum fetch or Axios setup repeat pannaama common HTTP client create pannuvom.',
                            'Common headers, authentication, and consistent error handling anga manage pannalam.',
                            'Request/response behavior common-a irundha mattum abstraction-la add pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Feature API services**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Course API madhiri feature-specific functions andha feature service-la irukkum.',
                            'Feature service centralized client-ah call pannum; component feature function-ah mattum use pannum.',
                            'Idhunaala UI transport details-lendhu separate-a irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Trade-offs and maintenance**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Auth header change aana central client-la oru change podhum.',
                            'Over-abstraction panna important HTTP status or error details marainjidalaam; debug easy-a irukkanum.',
                            'Retries use pannumbodhu request type and failure reason base panni safe-a configure pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-10',
        topicId: 'frontend-architecture',
        title: 'How would you handle global configuration?',
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
                            'Global configuration contains values used by multiple parts of the application.',
                            'Examples include API URLs, application settings, feature defaults, and environment-specific configuration.',
                            'I keep configuration centralized instead of duplicating values across components.',
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
                            'I separate build-time configuration, runtime configuration, and business constants.',
                            'Environment-specific values should come from environment configuration.',
                            'Application-wide configuration should have a typed interface.',
                            'I avoid putting secrets into frontend code because browser-delivered values are not secret.',
                            'I also avoid creating one huge global config object that every feature depends on.',
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
                        text: `export const appConfig = {
    appName: 'Archer Review',
    apiBaseUrl: process.env.NEXT_PUBLIC_API_URL,
  };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Centralize configuration and keep sensitive values on the server.',
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
                        text: 'In a Next.js application like Archer Review, I would keep public application configuration centralized and separate it from server-only secrets and credentials.',
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
                            'I centralize application configuration and give it a clear type.',
                            'Environment-specific values come from environment variables.',
                            'I keep secrets on the server and never expose them to browser code.',
                            'I also avoid creating an overly large global configuration object.',
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
                        text: '**Where would you store an API URL?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use environment configuration.',
                            'Expose it to the browser only when it is intentionally public.',
                            'Keep credentials and secrets server-side.',
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
                            'Configuration',
                            'Environment',
                            'Typed config',
                            'Public values',
                            'Secrets',
                            'Server-side',
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
                            'Application-wide config-ah centralize panni clear type define pannuven.',
                            'Environment-specific values environment variables-lendhu varum; public values mattum client-ku expose pannuvom.',
                            'Secrets server-la mattum vechuttu, ella features-um depend aagura huge global config object avoid pannuven.',
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
                        text: '**Configuration separate pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API base URL or app name madhiri values multiple places-la use aana central config file-la veikkalam.',
                            'Environment-specific settings environment variables-lendhu load pannunga.',
                            'Build-time config, runtime config, and business constants-ah distinguish pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Types and public values**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Config-ku typed interface define pannina missing or wrong value early-a identify pannalam.',
                            'Browser-ku thevaiyana public values mattum expose pannunga.',
                            'Frontend bundle-la pogura value ellam user inspect panna mudiyum; adhanaala adhai secret-nu treat panna koodadhu.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Secrets and dependency control**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Credentials and private keys server-only environment variables-la irukkanum.',
                            'Oru periya global config object create panni ella feature-um depend aaga vidaama, thevaiyana config-ah clear-a pass pannunga.',
                            'Public config and server secrets separate-a maintain pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),
];
