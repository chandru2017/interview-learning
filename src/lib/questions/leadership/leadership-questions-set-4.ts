import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const leadershipQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'lead-16',
        topicId: 'leadership',
        title: 'How do you handle a developer who repeatedly introduces bugs?',
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
                            'First find out why bugs are happening.',
                            'Give private, kind and specific feedback.',
                            'Help with pairing, reviews and clear expectations.',
                            'If nothing improves, involve the manager.',
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
                            'Oru developer repeated-ah bugs introduce pannina, first avanga kitta privately discuss pannuven.',
                            'Bugs yen repeated-ah varudhu nu understand pannuven.',
                            'Avangalukku proper guidance kuduthu, coding standards, testing practices, and code review process follow panna encourage pannuven.',
                            'Thevai pattal, complex tasks-la support pannuven.',
                            'Enoda goal mistakes point out pannuradhu mattum illa, avanga improve aagi quality code deliver panna help pannuradhu.',
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
                            'Approach with **curiosity and support first**, accountability second. Focus on root causes and systems, not blame.',
                            '**Find root causes** - knowledge gap, unclear requirements, rushing/overload, poor testing habits, unfamiliar codebase, personal issues, or weak process (missing CI checks).',
                            '**Gather facts** - specific examples (PRs/incidents), patterns, not generalizations.',
                            '**Private conversation** - respectful, specific, ask for their view, express the impact on the team and users.',
                            '**Support** - pair programming, smaller PRs, test checklists, coaching on debugging and edge cases, better onboarding/documentation.',
                            '**Process safeguards** - TypeScript strict, lint rules, required tests, CI checks, review focus on risky areas, so one person is not the only safety net.',
                            '**Clear expectations** - agree on goals and a timeline (e.g., 4-6 weeks), and follow up regularly.',
                            '**Escalate if needed** - if no improvement after support, involve the engineering manager transparently (not behind their back).',
                            '**Keep team morale** - avoid public blame; recognize improvements.',
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
                        text: `Conversation outline (1:1):
    
    1. Context:     "I wanted to talk about the recent issues in [areas]. I'd like to understand what is happening."
    2. Facts:       "In the last 3 PRs we had [bug types]. Here are the examples."
    3. Listen:      "How do you see it? What is making it hard (requirements, time, codebase)?"
    4. Agree plan:  pair on next feature, add tests checklist, smaller PRs, review focus
    5. Expectations:"Over the next 4 weeks I would like to see [specific outcome]."
    6. Follow-up:   weekly check-in; give positive feedback on improvements.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A supportive but specific conversation with a clear plan and follow-up gives the person the best chance to improve.',
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
                        text: 'Sample (customize with your real details): "A teammate\'s PRs often had regressions. After talking privately I found they were unfamiliar with a complex module. We paired on the next task, added a test checklist and smaller PRs, and bugs dropped within a month."',
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
                            'If a developer repeatedly introduces bugs, I first try to understand the root cause.',
                            'I discuss the issue with them privately and provide guidance on coding standards and testing practices.',
                            'I also review their code and encourage better testing before submitting changes.',
                            'My goal is to help them improve their skills and maintain overall code quality.',
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
                        text: '**The developer says the bugs are due to unclear requirements from product. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Take it seriously: check requirements and acceptance criteria, improve the process (clear tickets, design review) and involve product.',
                            'Still address the testing and edge-case habits.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You are not their manager. How do you handle this?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Give peer feedback and offer help; if the problem continues, share concerns with the manager using facts.',
                            'Do not gossip or escalate without first talking to them.',
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
                            '1. Identify root cause.',
                            '2. Private discussion.',
                            '3. Provide guidance.',
                            '4. Improve code quality.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-17',
        topicId: 'leadership',
        title: 'How do you ensure consistency across multiple frontend teams?',
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
                            'Create a shared design system and component library.',
                            'Share ESLint, TypeScript and formatting configs.',
                            'Write guidelines and architecture decisions.',
                            'Hold regular sync meetings between teams.',
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
                            'Multiple frontend teams work pannumbodhu, consistency maintain panna common coding standards and guidelines follow panna ensure pannuven.',
                            'Reusable components, common design system, and shared UI patterns create panna encourage pannuven.',
                            'ESLint, Prettier, and code review process use panni coding standards maintain pannuven.',
                            'Teams-kulla regular communication and knowledge sharing encourage pannuven.',
                            'Enoda goal all teams-um consistent-ah and maintainable-ah frontend applications develop pannuradhu.',
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
                            'Aim for **consistency where it matters (UX, quality, tooling, security) while keeping team autonomy** for domain decisions.',
                            '**Design system** - shared component library with tokens, documentation (Storybook), accessibility built in, versioned releases and a clear contribution model.',
                            '**Shared tooling** - common ESLint/Prettier/TypeScript configs, project templates/generators, CI templates, shared testing utilities, monorepo or shared packages.',
                            '**Architecture guidelines** - ADRs/RFCs, a "golden path" (recommended stack and patterns), folder structure, API layer conventions, state management guidance.',
                            '**Automation over policing** - lint rules, dependency checks, bundle budgets, accessibility and visual regression tests in CI.',
                            '**Governance** - a frontend guild/chapter or architecture group with representatives from each team, regular syncs, an RFC process, clear owners.',
                            '**Inner-source** - teams can contribute to shared libraries with review; avoid a bottleneck central team.',
                            '**Versioning and migration** - semantic versions, changelogs, codemods and deprecation policy so upgrades are easy.',
                            '**Documentation and onboarding** - living docs, examples, office hours.',
                            '**Balance** - standardize the common 80%, allow justified exceptions via an RFC; measure adoption and developer satisfaction.',
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
                        text: `Frontend platform structure:
    
    packages/
    design-system/     # tokens, components, Storybook, a11y tested, semver
    eslint-config/     # shared lint rules
    tsconfig/          # shared TS configs
    ui-utils/          # shared hooks, API client, auth helpers
    apps/
    team-a-app/
    team-b-app/
    docs/
    adr/               # architecture decisions
    golden-path.md     # recommended stack and patterns
    
    Governance: Frontend guild (monthly), RFC process, shared CI template, bundle/a11y budgets`,
                    },
                    {
                        type: 'highlight',
                        text: 'Shared packages, documented standards and CI automation keep teams consistent without blocking them.',
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
                        text: 'Sample (customize with your real details): "At Archer Review we standardized components and lint/TypeScript configs and documented conventions. If we had multiple teams, I would extend this to a versioned design system with Storybook, a shared golden path and an RFC process."',
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
                            'I ensure consistency across frontend teams by establishing common coding standards and guidelines.',
                            'I encourage reusable components, shared design systems, and consistent UI patterns.',
                            'I also use tools like ESLint and Prettier, along with regular code reviews.',
                            'Regular communication and knowledge sharing help all teams follow the same practices.',
                            'My goal is to maintain consistent, scalable, and maintainable frontend applications.',
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
                        text: '**Team B says the design system slows them down and wants to build their own components. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Understand the pain (missing components, slow releases, hard customization), fix gaps quickly and improve the contribution model.',
                            'Allow justified exceptions through an RFC and contribute back later.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Two teams use different state management libraries and it is hurting shared code. How do you align?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Share the trade-offs, define a recommended approach for new work in an ADR, and plan gradual migration where it provides value.',
                            'Avoid forcing a big rewrite.',
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
                            '1. Coding standards',
                            '2. Reusable components',
                            '3. Design system',
                            '4. Code reviews',
                            '5. Knowledge sharing',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-18',
        topicId: 'leadership',
        title: 'Tell me about a failure.',
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
                            'Pick a real failure, not a fake one.',
                            'Explain what happened and take responsibility.',
                            'Describe how you fixed or recovered.',
                            'Show what you learned and changed.',
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
                            'Oru project-la, initial-ah responsive UI develop pannumbodhu, different screen sizes-la proper-ah test pannama development complete panniten.',
                            'Later, mobile screen-la layout issue identify pannanga.',
                            'Naan immediately issue fix panni, different screen sizes-la test pannen.',
                            'Indha experience moolama, development complete pannuradhu mattum illa, proper testing-um important nu learn panninen.',
                            'Ippo responsive UI develop pannumbodhu different screen sizes-la test pannuradhukku importance kudukkuren.',
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
                            'This tests **self-awareness, accountability and growth**. Honesty matters more than a perfect story.',
                            '**Choose a real, meaningful but not disqualifying failure** - e.g., missed estimate, a release causing an incident, underestimating complexity, poor communication, a wrong technical decision.',
                            '**Own it** - use "I", no blaming others or circumstances.',
                            '**Explain the impact** and the context honestly.',
                            '**Recovery** - what you did immediately and how you helped the team and users.',
                            '**Learning and change** - concrete changes in your habits/process (testing, communication, estimation, monitoring) and evidence it worked later.',
                            '**Keep the structure** - STAR with more weight on Action, Learning and Change.',
                            'Avoid "my weakness is that I work too hard" non-answers or stories with no lesson.',
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
                        text: `Failure answer template:
    
    Situation: On [project], I [decision/action] that led to [failure and impact].
    Why:       Looking back, the root cause was [my assumption/skipped check/communication gap].
    Recovery:  I [mitigated, communicated, fixed] and [helped the team/user].
    Learning:  I learned [lesson].
    Change:    Since then I always [new habit/process], for example in [later project] it helped [result].`,
                    },
                    {
                        type: 'highlight',
                        text: 'A good failure story shows ownership, recovery and a concrete behavior change.',
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
                        text: 'Sample (customize with your real details; use your real failure): "I once underestimated a feature and did not raise the risk early, so we missed the date. I recovered by reducing scope and communicating a new plan, and then I changed how I work: I do spikes for unknowns, give ranges and raise risks as soon as I see them. On later features this led to more predictable delivery."',
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
                            'One mistake I made was not testing a responsive UI properly across different screen sizes.',
                            'After development, we identified a layout issue on mobile devices.',
                            'I took responsibility, fixed the issue, and tested it across different screen sizes.',
                            'This experience taught me the importance of thorough testing.',
                            'Since then, I have been more careful about responsive testing and quality checks before completing a feature.',
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
                        text: '**Interviewer: "Has that mistake ever happened again?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Answer honestly; describe how your new habit/process prevented a repeat, or what you improved after a partial repeat.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You cannot think of any real failure. What do you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pick a smaller but genuine one: a missed estimate, a bug that reached production, or poor communication.',
                            'Avoid claiming you have never failed.',
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
                        items: ['1. Mistake', '2. Take responsibility', '3. Fix the issue', '4. Learn and improve'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-19',
        topicId: 'leadership',
        title: 'Tell me about something you improved significantly.',
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
                            'Choose something with a clear before and after.',
                            'Explain how you found the problem.',
                            'Describe what you changed.',
                            'Share the numbers and impact.',
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
                            'Archer Review project-la, repeated UI elements multiple pages-la use aaguradha notice pannen.',
                            'Adhanala reusable components create panni, common UI logic and styles centralize pannen.',
                            'Idhanala code duplication reduce aachu, UI consistency improve aachu, and future changes implement pannuradhu easier aachu.',
                            'Indha improvement moolama application maintainability and development efficiency improve aachu.',
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
                            'This shows **initiative, measurement mindset and impact**. Pick a measurable improvement you drove.',
                            '**Good topics** - performance (LCP/INP/bundle size), developer experience (build time, CI time), quality (bug rate, test coverage), accessibility, a design system, a process (code review, release).',
                            '**Baseline** - how you measured the problem before (metrics, user complaints, profiling).',
                            '**Diagnosis** - root cause and options considered.',
                            '**Action** - what you did, how you got buy-in, how you rolled it out safely.',
                            '**Result** - quantified improvement and business or team benefit; how you verified (field data) and sustained it (budgets, monitoring).',
                            '**Your role** - what you personally drove versus the team.',
                            '**Reflection** - what you learned and the next improvement.',
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
                        text: `Improvement template:
    
    Problem:   [metric] was [baseline] causing [impact].
    Diagnosis: Measured with [tools] -> root causes: [1], [2].
    Actions:   1) [change]  2) [change]  3) [guardrail: budget/test/monitoring]
    Result:    [metric] from [A] to [B] ([%] improvement); business effect: [conversion/support/dev time].
    Sustain:   Added [CI budget/dashboards/guidelines] so it does not regress.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Baseline, diagnosis, action, measured result and sustaining guardrails make an improvement story convincing.',
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
                        text: 'Sample (customize with your real numbers): "At Archer Review I improved page performance: baseline LCP was [X]s and the bundle [Y]KB. I profiled, optimized images, split code, moved data fetching to the server and reduced re-renders. LCP became [A]s and the bundle [B]KB. I added bundle size checks in CI and Web Vitals monitoring to keep it that way."',
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
                            'One significant improvement I made was improving code reusability in the Archer Review project.',
                            'I identified repeated UI elements across multiple pages and introduced reusable components.',
                            'This reduced code duplication, improved UI consistency, and made future changes easier to maintain.',
                            'It also helped the team develop new features more efficiently.',
                            'I believe reusable and maintainable code is important for long-term project success.',
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
                        text: '**Interviewer: "How do you know your change caused the improvement?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compare metrics before and after under the same conditions, preferably field data over time, and mention the rollout timeline or A/B comparison.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "How did you get the team to adopt the change?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Show the data, start with a small pilot, document it, make it easy (templates, lint rules) and share the results.',
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
                            '1. Identify repetition.',
                            '2. Create reusable components.',
                            '3. Reduce code duplication.',
                            '4. Improve maintainability.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-20',
        topicId: 'leadership',
        title: 'Why should we hire you as a Senior Frontend Engineer?',
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
                            'I have strong frontend skills and I deliver reliable work.',
                            'I take ownership from design to production.',
                            'I care about quality, performance and accessibility.',
                            'I help the team by mentoring and reviewing code.',
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
                            'Enakku 10+ years software development experience irukku, and 6+ years React.js experience irukku.',
                            'React.js, JavaScript, Next.js, and frontend architecture-la strong experience irukku.',
                            'Naan scalable applications develop pannuradhu, reusable components create pannuradhu, performance and accessibility improve pannuradhu-la contribute panniruken.',
                            'Technical decisions edukkuradhu, code quality maintain pannuradhu, and junior developers-ku guidance kudukkuradhu-la confident-ah irukken.',
                            'Enoda experience and technical skills use panni team-ku immediate-ah value add panna mudiyum.',
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
                            'Answer with **evidence mapped to the job description**, not generic adjectives.',
                            '**Technical depth** - React/TypeScript/Next.js, performance, accessibility, testing, state and data architecture, security basics.',
                            '**Delivery and ownership** - I take features from ambiguity to production, make good trade-offs and meet deadlines.',
                            '**Quality mindset** - testing, monitoring, code review, CI/CD.',
                            '**Impact** - 2 or 3 concrete results with numbers.',
                            '**Team multiplier** - mentoring, raising standards, clear communication, collaboration with design/product/backend.',
                            '**Learning and adaptability** - quickly learn new tools and domain.',
                            "**Fit** - connect to the company's product/problems and what you can contribute in the first 3-6 months.",
                            'Structure: 3 strengths, each with proof, then a closing about fit.',
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
                        text: `Answer structure:
    
    1. Match:   "From the job description, you need [A: e.g. performance at scale], [B: ownership], [C: mentoring]."
    2. Proof A: "I [did X] which improved [metric]."
    3. Proof B: "I [owned feature/system] end to end, including [design, release, monitoring]."
    4. Proof C: "I [mentored/reviewed/improved standards] resulting in [outcome]."
    5. Close:   "I can help you [specific contribution], and I am excited about [company challenge]."`,
                    },
                    {
                        type: 'highlight',
                        text: 'Mapping your proof points to their needs makes the answer specific and credible.',
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
                        text: 'Sample (customize with your real details): "You need someone who can own complex React/Next.js work and raise quality. At Archer Review I owned [features], improved [performance metric by X], set up [testing/CI standards] and mentored teammates. I can bring the same ownership, quality focus and collaboration to your team."',
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
                            'You should hire me because I bring strong frontend experience, technical knowledge, and a problem-solving mindset.',
                            'I have over 10 years of software development experience, including more than 6 years of hands-on experience with React.js.',
                            'I have experience building scalable applications, developing reusable components, and improving performance and accessibility.',
                            'I can also contribute to frontend architecture, code quality, and mentoring junior developers.',
                            'I am confident that I can contribute to the team and deliver high-quality frontend solutions.',
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
                        text: '**Interviewer: "We have many candidates with similar skills. What makes you different?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Highlight a unique combination backed by evidence: e.g., performance + accessibility + mentoring or domain knowledge.',
                            'Give one memorable result.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What is your biggest weakness for this role?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Name a real, non-critical gap (e.g., limited experience with a specific tool) and how you are improving it.',
                            'Avoid fake weaknesses.',
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
                            '1. Experience',
                            '2. Technical expertise',
                            '3. Problem-solving',
                            '4. Ownership',
                            '5. Team contribution',
                        ],
                    },
                ],
            },
        ],
    }),
];
