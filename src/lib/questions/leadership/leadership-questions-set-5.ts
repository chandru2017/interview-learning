import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const leadershipQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 'lead-21',
        topicId: 'leadership',
        title: 'Why should we hire you as a Frontend Architect?',
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
                            'I think about the whole frontend system, not only single features.',
                            'I make good technical decisions and explain trade-offs.',
                            'I keep teams consistent and productive.',
                            'I still write code and understand real problems.',
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
                            'An architect role is about **technical direction, trade-offs and enabling teams at scale**, not just being the best coder.',
                            '**Systems thinking** - rendering strategy, state/data architecture, design system, performance, security, accessibility, observability, scalability across teams.',
                            '**Decision making** - evaluate options with criteria, document with ADRs/RFCs, balance short-term delivery and long-term maintainability.',
                            '**Standards and platform** - golden paths, shared tooling, templates, CI quality gates, bundle/a11y budgets.',
                            '**Influence without authority** - alignment between teams, product, design and backend; communicate clearly to technical and non-technical audiences.',
                            '**Business alignment** - connect architecture to cost, speed, reliability and revenue.',
                            '**Mentoring and leadership** - grow senior engineers, create a culture of quality and learning.',
                            '**Hands-on credibility** - prototypes, code reviews, solving hard problems; avoid ivory tower architecture.',
                            '**Evidence** - examples of decisions, migrations, improvements you led and results.',
                            'If your experience is more senior-engineer than architect, show the architect behaviors you already practice and how you will grow.',
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
                        text: `Architect pitch:
    
    1. Scope:    "I look at frontend as a system: rendering, data, state, design system, performance, security, a11y, delivery."
    2. Decisions:"I led [decision: e.g. App Router adoption] using ADRs: options, criteria, trade-offs, rollout."
    3. Platform: "I created [standards/tooling/design system] that [reduced X / improved Y]."
    4. People:   "I mentor engineers and align teams through RFCs and reviews."
    5. Impact:   "[metrics: performance, delivery speed, bug rate, adoption]"
    6. First 90 days: assess current state -> quick wins -> roadmap and guidelines -> align teams.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Show system thinking, documented decisions, platform impact and a clear plan for the first 90 days.',
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
                        text: 'Sample (customize with your real details): "At Archer Review I drove decisions on [rendering/state/structure], documented trade-offs, set up quality gates and guidelines, and improved [metrics]. As an architect I would extend this across teams with a shared platform, clear standards and an RFC process, while staying hands-on."',
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
                            'I think in systems: rendering strategy, data and state architecture, design system, performance, security, accessibility and delivery.',
                            'I make decisions with clear criteria and document trade-offs in ADRs, like [example], and I build platform tools and standards that help teams move faster.',
                            'I align stakeholders and mentor engineers, while staying hands-on through prototypes and reviews.',
                            'In the first 90 days I would assess the current state, find quick wins and define a roadmap.',
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
                        text: '**Interviewer: "You have mostly worked as an engineer, not an architect. Why do you think you are ready?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Show architect-level work you already did: decisions, standards, cross-team influence, mentoring, with outcomes.',
                            'Be honest about what you will learn and your plan.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "How would you handle teams that resist your architectural guidance?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Listen to their constraints, explain the reasoning with data, involve them in decisions (RFCs) and make the golden path the easiest path.',
                            'Allow justified exceptions and measure outcomes.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What would you do in your first 90 days?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Learn the product and codebase, talk to teams, assess pain points and metrics, deliver a quick win, then propose a roadmap and guidelines with stakeholders.',
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
                            'Systems thinking',
                            'ADR/RFC',
                            'Trade-offs',
                            'Platform',
                            'Influence',
                            'Hands-on',
                            'Business alignment',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-22',
        topicId: 'leadership',
        title: 'Why are you looking for a job change?',
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
                            'Give a positive reason such as growth or new challenges.',
                            'Do not speak badly about your current company.',
                            'Connect your reason to this new role.',
                            'Be honest and calm.',
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
                            'Interviewers want to understand **motivation, risk of leaving early, and fit**. Be honest, positive and forward-looking.',
                            '**Focus on pull factors** - growth, bigger scope, architecture ownership, new domain, scale, learning, leadership opportunities.',
                            '**Briefly mention push factors neutrally** - limited growth, stable product with few new challenges, restructuring; no blame or negativity.',
                            '**Show you have achieved** what you could in the current role (impact, learning) and are ready for the next step.',
                            '**Connect to the company** - what attracts you to their product, tech, team or mission.',
                            '**Be consistent** - align with your career goals and previous job history.',
                            '**Avoid** - complaints about manager/team/salary only, vague answers, or reasons that suggest you will leave again quickly.',
                            'Keep it short (30-45 seconds).',
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
                        text: `Answer template:

    Current:  "I have enjoyed my time at [company]; I [achievements/learning]."
    Reason:   "I am now looking for [bigger scope / architecture ownership / larger scale / new domain]
        which I have limited opportunity for in my current role."
    Pull:     "Your company interests me because [product, scale, tech, team, challenge]."
    Close:    "I believe I can contribute [specific value] and grow into [direction]."`,
                    },
                    {
                        type: 'highlight',
                        text: 'Positive, forward-looking and specific to the new company, without criticizing the current one.',
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
                        text: 'Sample (customize with your real situation): "I have learned a lot at Archer Review and delivered [results]. I am looking for broader architecture and technical leadership responsibility and larger-scale problems, and your company\'s [product/challenge] is a strong match for that next step."',
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
                            'I have grown a lot in my current role, delivering [achievements].',
                            'Now I am looking for more ownership of architecture and larger-scale challenges, which is what drew me to this role.',
                            'I am attracted to [company/product/tech], and I believe I can contribute to [specific area] while continuing to grow.',
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
                        text: '**Interviewer: "Is it about money?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Be honest: compensation matters but it is not the main reason; the main drivers are growth and scope.',
                            'Avoid making it the only reason.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What did you dislike about your current job?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mention one neutral, constructive limitation (e.g., limited opportunities for architecture work) without blaming people.',
                            'Pivot to what you want.',
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
                            'Growth',
                            'Positive',
                            'Bigger scope',
                            'Company fit',
                            'No negativity',
                            'Career direction',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-23',
        topicId: 'leadership',
        title: 'Where do you see yourself in 5 years?',
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
                            'Say you want to grow technically and take more responsibility.',
                            'Mention leading projects or architecture and mentoring others.',
                            'Connect it to what this company can offer.',
                            'Keep it realistic and honest.',
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
                            'They want to see **ambition, direction and alignment** with the role and company, and whether you plan to stay and contribute.',
                            '**Show a growth path** - deeper technical expertise and broader influence: staff/principal/architect or technical lead, depending on your goals.',
                            '**Impact over titles** - talk about the kind of problems, scope and people you want to impact.',
                            '**Skills** - system design at scale, performance, cross-team leadership, mentoring, business understanding.',
                            '**Link to the role** - how this job is a step toward that path and what you will contribute along the way.',
                            "**Be flexible** - open to how the path evolves with the company's needs.",
                            '**Avoid** - unrelated goals (switching industries), pure title obsession, or "your job" in a threatening way.',
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
                        text: `Answer template:

    Year 1-2:  "Become a trusted expert on [your product/domain], deliver [impact], improve [quality/performance]."
    Year 3-4:  "Lead larger initiatives and architecture decisions, mentor engineers, align teams."
    Year 5:    "Be a [staff engineer / architect / tech lead] influencing the frontend direction
            for [the product/org], while staying hands-on."
    Link:      "This role with [company] gives me the scope to grow in that direction."`,
                    },
                    {
                        type: 'highlight',
                        text: 'A stepwise growth path tied to this role shows ambition and commitment.',
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
                        text: 'Sample (customize with your real goals): "In five years I see myself as a frontend architect or staff engineer who still codes, helping teams make good technical decisions, mentoring engineers and improving product quality at scale. This role is a strong step towards that."',
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
                            'In the next few years I want to deepen my expertise and take on bigger technical responsibility.',
                            'In five years I see myself as an architect or staff-level engineer, guiding frontend direction, mentoring others and staying hands-on.',
                            'This role fits because it offers [scope/challenges], and I plan to contribute by [specific value].',
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
                        text: '**Interviewer: "Do you want to move into management?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Answer honestly: e.g., you prefer technical leadership with mentoring (IC track) but are open to people leadership if it fits.',
                            'Show you understand the difference between the paths.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What if the company does not have an architect path?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Say you would grow through increasing scope and ownership, and ask about growth opportunities.',
                            "Show flexibility and interest in the company's needs.",
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
                        items: ['Growth path', 'Architect/Staff', 'Mentoring', 'Impact', 'Alignment', 'Hands-on'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-24',
        topicId: 'leadership',
        title: 'What makes someone a good frontend architect?',
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
                            'They understand the whole frontend: performance, security, accessibility and tooling.',
                            'They make decisions based on trade-offs.',
                            'They communicate well and help teams.',
                            'They stay practical and hands-on.',
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
                            'A good frontend architect combines **technical breadth and depth, judgment, and leadership**.',
                            '**Technical breadth** - rendering strategies (SSR/SSG/CSR), browser internals, performance, security, accessibility, state and data patterns, design systems, testing, CI/CD, observability, SEO.',
                            '**Trade-off thinking** - no "best" solution, only fit for context; considers team skills, cost, risk, time and long-term maintenance.',
                            '**Pragmatism** - simplest solution that works, avoids over-engineering and hype, makes reversible decisions where possible.',
                            '**Communication** - explains decisions to engineers, product and executives; writes ADRs/RFCs and docs; listens.',
                            '**Influence without authority** - builds consensus, earns trust, aligns teams.',
                            '**Enablement** - creates platforms, templates, standards and tooling that make the right way the easy way.',
                            '**Business alignment** - links architecture to user experience, speed, cost and reliability.',
                            '**Hands-on credibility** - writes code, builds prototypes, reviews PRs, stays close to real problems.',
                            '**Growth mindset** - mentors, learns continuously, admits mistakes, evolves architecture.',
                            '**Anti-patterns** - ivory-tower decisions, tech for resume, big rewrites, ignoring developer experience.',
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
                        text: `Frontend architect radar (self-check):

    Rendering & Performance   [ ]  Security & Privacy     [ ]
    State & Data architecture [ ]  Accessibility & i18n   [ ]
    Design system & UI arch.  [ ]  Testing & Quality      [ ]
    CI/CD & Observability     [ ]  Tooling & DX           [ ]
    Communication & ADRs      [ ]  Mentoring & Influence  [ ]
    Business/Product thinking [ ]  Hands-on delivery      [ ]

    Core behaviors: weigh trade-offs, document decisions, simplify, enable teams, stay hands-on.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A good architect is balanced across technical areas and people skills, not only deep in one framework.',
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
                        text: 'Sample (customize with your real details): "In my work at Archer Review I tried to act this way: I evaluated options by criteria, documented decisions, set up quality gates and standards, and stayed hands-on by building and reviewing key features while mentoring teammates."',
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
                            'A good frontend architect has technical breadth across rendering, performance, security, accessibility, state and tooling, and the judgment to weigh trade-offs for the context.',
                            'They are pragmatic, communicate decisions clearly through ADRs, and influence teams without authority.',
                            'They enable teams with standards and platforms, align with business goals and stay hands-on.',
                            'They avoid ivory-tower decisions and over-engineering.',
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
                        text: '**Interviewer: "Should an architect still write code?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Yes, enough to stay credible and informed: prototypes, critical code, reviews and pairing.',
                            'But not become a bottleneck; the focus is enabling teams.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "A team wants to adopt a trendy new framework. How do you decide?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask for the problem it solves, evaluate against criteria (maturity, ecosystem, hiring, migration cost, risk), run a small pilot, and decide with an ADR.',
                            'Avoid adopting tech just for novelty.',
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
                            'Breadth',
                            'Trade-offs',
                            'Pragmatism',
                            'Communication',
                            'Enablement',
                            'Hands-on',
                            'Business alignment',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-25',
        topicId: 'leadership',
        title: 'What is your approach to technical leadership?',
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
                            'Lead by example with good code and decisions.',
                            'Help the team understand direction and priorities.',
                            'Support and grow other developers.',
                            'Communicate clearly and remove blockers.',
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
                            "Technical leadership is **multiplying the team's impact** through direction, standards, people and communication, not controlling every decision.",
                            '**Set direction and context** - explain the "why", technical vision and priorities; connect work to business goals.',
                            '**Decide transparently** - use ADRs/RFCs, involve the team, make decisions when needed and own outcomes (disagree and commit).',
                            '**Lead by example** - code quality, reviews, testing, accountability, calm in incidents.',
                            '**Enable and grow people** - mentoring, delegation with clear ownership, stretch assignments, constructive feedback, sharing credit.',
                            '**Build a quality culture** - code review norms, definition of done, CI/CD, blameless postmortems, continuous improvement.',
                            '**Psychological safety** - encourage questions, dissent and experimentation.',
                            '**Remove blockers and manage dependencies** - coordinate with product, design, backend and other teams.',
                            '**Balance** - delivery vs quality, innovation vs stability, short vs long term.',
                            '**Measure** - delivery metrics (DORA: deployment frequency, lead time, change failure rate, time to restore), quality, developer experience, team health.',
                            '**Communicate upward and across** - clear status, risks and trade-offs.',
                            'Adapt style to people and situations (coach, direct, delegate).',
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
                        text: `Technical leadership loop:

    1. Understand: business goals, team strengths, pain points (talk, data)
    2. Align:      vision + priorities + principles (why), written in a short doc
    3. Decide:     ADR/RFC with team input; decide, document, commit
    4. Enable:     tooling, standards, mentoring, delegation, remove blockers
    5. Deliver:    small increments, quality gates, feedback loops
    6. Reflect:    retros, metrics (DORA, bugs, DX), adjust, share credit`,
                    },
                    {
                        type: 'highlight',
                        text: 'Leadership is a repeating loop of aligning, deciding, enabling, delivering and learning.',
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
                        text: 'Sample (customize with your real details): "At Archer Review I led technical direction on [area]: I proposed the approach in a short RFC, gathered team feedback, set guidelines and tooling, mentored teammates and tracked outcomes like [metrics]. I focused on helping others succeed rather than doing everything myself."',
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
                            "My approach to technical leadership is to multiply the team's impact: I give context and direction, make transparent decisions with ADRs and team input, and lead by example in code and reviews.",
                            'I mentor and delegate with clear ownership, build a quality culture with CI, reviews and blameless postmortems, and remove blockers.',
                            'I measure outcomes like delivery speed, quality and team health, and I communicate clearly to stakeholders.',
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
                        text: '**Interviewer: "Your team is demotivated after a failed release. What do you do?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Run a blameless postmortem, acknowledge the problem, focus on learning and concrete fixes, and celebrate small wins.',
                            'Support individuals and rebuild confidence with achievable goals.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "How do you lead engineers who are more experienced than you in some areas?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Respect their expertise, ask for their input and delegate ownership of those areas.',
                            'Lead through clarity, alignment and enabling rather than being the best at everything.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "How do you make a decision when the team is split 50-50?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Clarify criteria, run a quick spike or gather data, and decide, documenting the reasoning in an ADR with a review date.',
                            'Ask everyone to commit once decided.',
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
                            'Direction',
                            'Multiplier',
                            'ADR/RFC',
                            'Lead by example',
                            'Delegation',
                            'Psychological safety',
                            'DORA',
                        ],
                    },
                ],
            },
        ],
    }),
];
