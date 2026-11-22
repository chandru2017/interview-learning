import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const frontendArchitectureQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'fa-11',
        topicId: 'frontend-architecture',
        title: 'How would you manage environment variables?',
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
                            'Environment variables store configuration that changes between environments.',
                            'Examples are development, staging, and production API URLs.',
                            'Secrets should never be exposed to browser-side code.',
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
                            'I separate development, staging, and production configuration.',
                            'I use the framework-supported environment variable mechanism.',
                            'In Next.js, variables prefixed with NEXT_PUBLIC_ are exposed to browser code, so they should contain only intentionally public values.',
                            'API keys, database credentials, and private tokens should remain server-side.',
                            'I validate required environment variables during application startup or build time.',
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
                        text: `NEXT_PUBLIC_API_URL=https://api.example.com
  
  DATABASE_URL=private-value`,
                    },
                    {
                        type: 'highlight',
                        text: 'NEXT_PUBLIC_ values can reach browser code. Private secrets must stay server-side.',
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
                        text: 'For an Archer Review Next.js application, I would use separate environment configuration for development, staging, and production while ensuring private credentials are never bundled into client-side JavaScript.',
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
                            'I use environment variables for environment-specific configuration.',
                            'I separate development, staging, and production values.',
                            'In Next.js, NEXT_PUBLIC_ variables are public, so I never put secrets there.',
                            'I also validate required environment variables during build or startup.',
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
                        text: '**A developer puts a private API key in NEXT_PUBLIC_API_KEY. What is wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The value can be included in client-side JavaScript.',
                            'Users can inspect it in the browser.',
                            'Private credentials must be moved to server-side code.',
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
                            'Environment variables',
                            'Development',
                            'Staging',
                            'Production',
                            'NEXT_PUBLIC_',
                            'Secrets',
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
                            'Development, staging, and production values-ah separate environment configuration-la manage pannuven.',
                            'Browser-ku thevaiyana public values mattum expose pannuven; secrets server-side-la irukkum.',
                            'Required values validate panni, config-ku clear type and documentation maintain pannuven.',
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
                        text: '**Environment-specific values**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Local development, staging, production-ku different API URL or setting thevai padalam.',
                            'Indha values-ah source code-la hardcode pannaama environment variables-la veppom.',
                            'Build and deploy process correct environment values supply pannudhaa verify pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Public values and secrets**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Frontend bundle-la include aagura value browser-la user inspect panna mudiyum.',
                            'NEXT_PUBLIC_ prefix use pannina value public-aagum; API key or password madhiri secret-ku use panna koodadhu.',
                            'Credentials and private tokens server-side code-la mattum access aaganum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Validation and maintenance**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Application start aagumbodhu required environment values irukka nu validate pannunga.',
                            'Typed config and example env file maintain pannina setup errors kammi aagum.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-12',
        topicId: 'frontend-architecture',
        title: 'How would you manage feature flags?',
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
                            'Feature flags allow us to turn features on or off without deploying new code.',
                            'They are useful for gradual releases, A/B testing, and safely rolling out features.',
                            'Flags should have clear owners and should be removed when no longer needed.',
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
                            'I define feature flags centrally and expose a simple API to application code.',
                            'For large applications, I prefer a dedicated feature flag service or a controlled configuration system.',
                            'I support environments, user targeting, gradual rollout, and kill switches where required.',
                            'I avoid scattering raw flag checks throughout the codebase.',
                            'Every temporary flag should have an owner and cleanup date to prevent technical debt.',
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
                        text: `if (flags.newVideoLibrary) {
    return <NewVideoLibrary />;
  }
  
  return <OldVideoLibrary />;`,
                    },
                    {
                        type: 'highlight',
                        text: 'Feature flags allow controlled rollout without changing the deployment.',
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
                        text: 'For an Archer Review feature such as a new Video Library experience, I could release it gradually using a feature flag, validate it with selected users, and then remove the old implementation after the rollout is complete.',
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
                            'I use feature flags for gradual rollout, experiments, and kill switches.',
                            'I centralize flag evaluation instead of scattering configuration across components.',
                            'Each flag should have an owner and cleanup plan.',
                            'Once the feature is fully released, I remove the flag and old code.',
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
                        text: '**A feature flag has existed for one year. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check whether the flag is still required.',
                            'Remove old code paths if rollout is complete.',
                            'Remove the flag configuration.',
                            'Update documentation and tests.',
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
                        items: ['Feature flag', 'Gradual rollout', 'Kill switch', 'Experiment', 'Targeting', 'Cleanup'],
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
                            'Feature flag use panni code deploy pannitu feature-ah separate-a enable or disable pannalam.',
                            'Gradual rollout, experiment, and emergency kill switch-ku targeting rules-oda manage pannuven.',
                            'Flag owner and expiry set panni, rollout mudinja apragu stale flag and code path remove pannuven.',
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
                        text: '**Feature flag use enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Code deploy pannina udane ellaa users-kum feature enable aaganum-nu illa; flag moolama control pannalam.',
                            'Small user group-ku gradual rollout pannalam or A/B experiment run pannalam.',
                            'Problem vandha feature-ah kill switch use panni quick-a off pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Safe rollout and cleanup**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'User, region, or percentage base-la targeting rules define pannunga.',
                            'Flag owner, purpose, and expiry date document pannunga.',
                            'Rollout complete aana old condition and flag config remove pannunga; illana code paths accumulate aagum.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-13',
        topicId: 'frontend-architecture',
        title: 'How would you manage technical debt?',
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
                            'Technical debt is the future cost created by quick, outdated, or temporary technical decisions.',
                            'I do not try to remove all technical debt immediately.',
                            'I identify, prioritize, track, and reduce the debt based on business impact and risk.',
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
                            'I classify technical debt based on security, performance, reliability, developer productivity, and business impact.',
                            'Critical risks are handled first.',
                            'I include debt work in planning rather than waiting for a large rewrite.',
                            'I use incremental refactoring when possible.',
                            'I also prevent new debt through code reviews, standards, automated tests, and architecture guidelines.',
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
                        text: `Technical debt
        ↓
  Identify
        ↓
  Prioritize
        ↓
  Plan
        ↓
  Refactor incrementally
        ↓
  Prevent recurrence`,
                    },
                    {
                        type: 'highlight',
                        text: 'Manage technical debt continuously instead of waiting for a big rewrite.',
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
                        text: 'For an Archer Review legacy area, I would identify issues such as duplicated components, outdated UI patterns, accessibility gaps, or difficult-to-maintain code and prioritize them based on user impact and engineering risk.',
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
                            'I do not treat all technical debt equally.',
                            'I prioritize debt based on security, performance, reliability, business impact, and developer productivity.',
                            'I prefer incremental refactoring instead of unnecessary rewrites.',
                            'I also add standards and automation to prevent the same debt from coming back.',
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
                        text: '**The team wants to rewrite the entire application. What would you ask first?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'What business problem does the rewrite solve?',
                            'What is the current measurable pain?',
                            'Can we migrate incrementally?',
                            'What is the cost and risk?',
                            'Can we improve the architecture without a full rewrite?',
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
                            'Technical debt',
                            'Risk',
                            'Prioritization',
                            'Incremental refactoring',
                            'Business impact',
                            'Prevention',
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
                            'Technical debt-ah identify panni business impact, risk, and future maintenance cost base-la prioritize pannuven.',
                            'Feature delivery and refactoring-ku balance set panni, high-risk debt-ah incremental-a tests-oda reduce pannuven.',
                            'Root cause solve panni, review and engineering standards moolama debt thirumba varama prevent pannuven.',
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
                        text: '**Debt identify and prioritize pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Fragile code, repeated bugs, slow delivery, or unsupported dependencies technical debt signal-a irukkalam.',
                            'Impact, likelihood of failure, and future change cost base-la debt-ah rank pannunga.',
                            'Business-critical or security/performance risk irukkura debt-ku priority kudunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Incremental-a reduce and prevent**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Full rewrite-ku badhila small refactoring steps and tests-oda safer-a improve pannunga.',
                            'Feature work-oda serthu relevant code area-la debt reduce panna plan pannunga.',
                            'Debt-oda root cause address panni, tests and standards use panni pudhu debt prevent pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-14',
        topicId: 'frontend-architecture',
        title: 'How do you make architecture decisions?',
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
                            'I start by understanding the business and technical requirements.',
                            'Then I compare possible solutions and their trade-offs.',
                            'I choose the simplest solution that can meet the current and expected requirements.',
                            'For important decisions, I document the reason.',
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
                            'I consider requirements, scale, performance, security, maintainability, team skills, cost, and operational complexity.',
                            'I compare alternatives instead of choosing a technology because it is popular.',
                            'For significant decisions, I create a proof of concept when uncertainty is high.',
                            'I discuss the decision with relevant engineers and stakeholders.',
                            'I document important decisions and the reasons behind them.',
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
                        text: `Requirement
     ↓
  Options
     ↓
  Trade-offs
     ↓
  Proof of Concept
     ↓
  Decision
     ↓
  Document`,
                    },
                    {
                        type: 'highlight',
                        text: 'Good architecture decisions are based on requirements and trade-offs.',
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
                        text: 'For an Archer Review architecture decision, such as choosing between local state, Zustand, Redux, or server-state tools, I would first understand the type and scale of state before selecting the solution.',
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
                            'I start with requirements and constraints.',
                            'Then I compare different solutions and their trade-offs.',
                            'For uncertain decisions, I build a small proof of concept.',
                            'After discussing with the team, I document important decisions using an ADR.',
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
                        text: '**Two technologies can solve the same problem. How do you choose?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compare performance.',
                            'Compare maintainability.',
                            'Consider team experience.',
                            'Consider ecosystem and support.',
                            'Consider cost and complexity.',
                            'Choose based on project requirements.',
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
                        items: ['Requirements', 'Constraints', 'Trade-offs', 'PoC', 'Team discussion', 'ADR'],
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
                            'User, business, technical requirements and constraints-ah first clarify pannuven.',
                            'Options compare panni trade-offs, cost, risk, team experience consider pannuven; uncertainty irundha small PoC seiven.',
                            'Stakeholders-oda decision discuss panni, long-term impact irundha ADR-la context and consequences record pannuven.',
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
                        text: '**Requirements and constraints purinjukkaradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Architecture decision edukkura munnaadi user needs, scale, timeline, team skills, and budget purinjukkanum.',
                            'Existing system and technical constraints-um consider pannunga.',
                            'Problem clear-a illa na options compare pannradhu useful-a irukkaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Options compare and decide**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Possible solutions-oda benefits, drawbacks, complexity, cost, and risks compare pannunga.',
                            'Uncertainty or performance concern irundha small proof of concept run pannalam.',
                            'Team and stakeholders kooda discuss panni project requirement-ku fit aana option choose pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Decision document pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Long-term impact irukkura decision-ku ADR create pannunga.',
                            'Context, considered alternatives, selected option, and consequences record pannina future-la reason puriyum.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fa-15',
        topicId: 'frontend-architecture',
        title: 'What is ADR (Architecture Decision Record)?',
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
                            'ADR stands for Architecture Decision Record.',
                            'It documents an important architecture decision.',
                            'It records what decision was made and why it was made.',
                            'It helps future developers understand the history behind the decision.',
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
                            'An ADR normally contains the context, decision, alternatives, and consequences.',
                            'It should explain why the team selected one approach over another.',
                            'ADR is useful for decisions that have long-term architectural impact.',
                            'It prevents teams from repeatedly debating the same decision without context.',
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
                        text: `# ADR-001
  
  Decision:
  Use feature-based architecture.
  
  Context:
  The application is growing across multiple domains.
  
  Alternatives:
  Layer-based architecture.
  
  Consequences:
  Better feature ownership and scalability.`,
                    },
                    {
                        type: 'highlight',
                        text: 'ADR explains the decision and the reason behind it.',
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
                        text: 'For a large Archer Review frontend, I could create ADRs for decisions such as adopting a shared component library, selecting a state-management approach, or introducing a monorepo.',
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
                            'ADR means Architecture Decision Record.',
                            'It documents an important technical decision and why we made it.',
                            'I usually include context, decision, alternatives, and consequences.',
                            'It helps future developers understand architectural history.',
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
                        text: '**Would you create an ADR for every small coding decision?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'I use ADRs for decisions with meaningful architectural or long-term impact.',
                            'Small implementation details usually do not need an ADR.',
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
                            'ADR',
                            'Architecture decision',
                            'Context',
                            'Alternatives',
                            'Consequences',
                            'Documentation',
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
                            'ADR-na important architecture decision and adhai edutha reason-ah record pannura short document.',
                            'Adhula context, options considered, chosen decision, and consequences include pannuvom.',
                            'Team members later decision history and trade-offs purinjukka ADR help pannum.',
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
                        text: '**ADR enna record pannum?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Architecture Decision Record-na mukkiyamaana technical decision-oda reason and context-ai document pannura record.',
                            'Problem/context, consider panna alternatives, selected decision, and consequences include pannuvom.',
                            'Decision edutha date and current status-um add pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**ADR eppo useful?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Framework, data flow, deployment, or long-term dependency madhiri future work-ah affect pannura decisions-ku ADR useful.',
                            'Small implementation detail ellathukkum ADR thevai illa.',
                            'New team member decision history padichu context purinjukka mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Maintain pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'ADR concise-a and easy-a search panna mudiyura format-la veinga.',
                            'Later decision change aana old ADR-ah delete pannaama superseded nu mark panni pudhu ADR link pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),
];
