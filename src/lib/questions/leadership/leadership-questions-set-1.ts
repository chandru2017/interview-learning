import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const leadershipQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'lead-1',
        topicId: 'leadership',
        title: 'Tell me about yourself.',
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
                            'This is a short introduction, not your life story.',
                            'Say who you are, what you do and what you are good at.',
                            'Mention one or two achievements.',
                            'End with why you want this role.',
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
                            'Interviewers use it to judge **communication, focus and relevance** in the first 90 seconds.',
                            '**Structure: Present - Past - Future.**',
                            '**Present** - current role, years of experience, main stack, type of products/scale.',
                            '**Past** - 2 or 3 relevant highlights that show growth (performance, architecture, leading a feature, mentoring).',
                            '**Future** - what you want next and why this company/role fits.',
                            '**Tailor it** - match the job description (senior/architect: ownership, design decisions, leadership).',
                            '**Keep it** 60-90 seconds, no personal/irrelevant details, no resume reading.',
                            '**Include numbers** where possible and end with a hook that invites follow-up questions.',
                            'Practice until it sounds natural, but not memorized.',
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
                        text: `Template (fill with your real details, 60-90 seconds):
    
    PRESENT: I am a Frontend Engineer with [X] years of experience, mainly with React,
         TypeScript and Next.js. Currently I work on [product] used by [users/scale].
    PAST:    Earlier I [achievement 1: e.g. improved LCP from X to Y],
         [achievement 2: e.g. led migration / built design system / mentored N devs].
    FUTURE:  I am now looking for a role where I can [own architecture / lead frontend / solve
         larger scale problems], and this role at [company] fits because [specific reason].`,
                    },
                    {
                        type: 'highlight',
                        text: 'Present, past, future in under 90 seconds keeps the answer focused and relevant to the role.',
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
                        text: 'Sample (customize with your real details): "I am a frontend engineer with [X] years of experience in React, TypeScript and Next.js. At Archer Review I built and owned the student-facing application, including the forms, exam flows and performance work, and I improved [metric] by [Y]. I also helped teammates with code reviews and standards. I am now looking for a senior/architect role where I can own frontend architecture and mentor a team, which is why this role interests me."',
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
                            'I am a frontend engineer with [X] years of experience, mainly in React, TypeScript and Next.js.',
                            'Currently I work on [product], where I own [area] and recently improved [metric/result].',
                            'Earlier I worked on [relevant highlight], and I enjoy mentoring and improving how teams build UI.',
                            'I am looking for a role with more ownership of architecture and impact, and your product and challenges match that.',
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
                        text: '**Interviewer: "That was a lot about tech. Tell me about you as a person."**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add one short, relevant personal point (how you work, what motivates you, a hobby that shows traits like curiosity).',
                            'Keep it brief and return to professional strengths.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You have gaps or frequent job changes in your resume. How do you handle it in the introduction?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Briefly and honestly frame them with a positive learning or growth reason, then move on.',
                            'Focus on outcomes and the direction of your career.',
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
                        items: ['Present-Past-Future', 'Relevant', 'Impact', 'Concise', 'Role fit'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-2',
        topicId: 'leadership',
        title: 'Walk me through your current project.',
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
                            'Explain what the product does and who uses it.',
                            'Describe your role and your main responsibilities.',
                            'Explain the tech stack and how the frontend is structured.',
                            'Share one challenge and its result.',
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
                            'The goal is to show **depth, ownership and architectural understanding**. Expect deep follow-up questions on anything you mention.',
                            '**1. Context** - product, users, scale, team size, your role.',
                            '**2. Architecture** - rendering (SPA/SSR/Next.js), routing, state management (server vs client state), data fetching, API layer, design system, styling, forms, auth.',
                            '**3. Quality and delivery** - testing strategy, CI/CD, code review, monitoring, performance and accessibility practices.',
                            '**4. Your contribution** - features you owned, decisions you drove, improvements and mentoring.',
                            '**5. Challenges and trade-offs** - one or two hard problems and why you chose a solution.',
                            '**6. Impact and learning** - measurable outcomes and what you would improve now.',
                            'Draw a simple architecture diagram mentally (browser, Next.js/CDN, API, DB, third-party). Be ready to go deeper on any box.',
                            'Only mention technologies you can discuss in depth.',
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
                        text: `Walkthrough outline (3-4 minutes):
    
    1. What: [Product] helps [users] to [goal]. Scale: [users/traffic], team: [size].
    2. My role: [owner of X / feature lead / frontend lead].
    3. Architecture: Next.js (App Router) + TypeScript, Server Components for data,
    client components for interaction, [TanStack Query/Zustand] for state, [REST/GraphQL] API layer.
    4. Quality: ESLint/Prettier, Jest/Vitest + Playwright, CI with preview deploys, Sentry + Web Vitals.
    5. Key work: [feature/performance/migration] -> result [metric].
    6. Challenge: [problem] -> solution [approach] -> trade-off [what I gave up].
    7. Next: what I would improve [debt/scaling/design system].`,
                    },
                    {
                        type: 'highlight',
                        text: 'A fixed outline keeps the walkthrough structured and gives the interviewer clear places to ask deeper questions.',
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
                        text: 'Sample (customize with your real details): "Archer Review is [a learning/exam platform] used by [students]. I own the frontend built with React/Next.js and TypeScript. We use server components for data-heavy pages, client components for interactive forms and exam flows, and a typed API layer with validation. We have CI with lint, type check, tests and preview deployments. My main contributions were [feature/performance/standards], which led to [result]. If I did it again, I would [improvement]."',
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
                            'The product is [X] used by [Y], and I own [area] of the frontend.',
                            'Architecture-wise we use [framework, rendering approach, state and data fetching strategy, design system].',
                            'We maintain quality with typed code, tests, CI/CD, and monitoring.',
                            'My key contributions were [A and B] with results [metrics], and the toughest challenge was [C], which we solved by [approach] with [trade-off].',
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
                        text: '**Interviewer: "Why did you choose that state management approach?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain the problem (server state vs UI state), the options considered, and why this fit (team size, complexity, performance).',
                            'Mention trade-offs and when you would revisit it.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What would you change in the architecture if you started again?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Give an honest, specific improvement (e.g., earlier design system, better typing at the API boundary, clearer folder boundaries).',
                            'Show learning without criticizing the team.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your project is small or not very technical. How do you present it as senior-level?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Focus on decisions, quality and impact: performance, accessibility, maintainability, mentoring.',
                            'Show ownership and how you handled complexity, not just the size of the app.',
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
                        items: ['Context', 'Architecture', 'Ownership', 'Trade-offs', 'Impact', 'Tech stack'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-3',
        topicId: 'leadership',
        title: 'What is the most technically challenging project you have worked on?',
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
                            'Choose a project with a real technical problem.',
                            'Explain why it was hard.',
                            'Describe how you solved it step by step.',
                            'Share the result and what you learned.',
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
                            'Pick a story that shows **problem solving, trade-offs, ownership and impact**, not just that it used many technologies.',
                            '**Choose well** - something where you made key decisions (performance at scale, complex state/forms, migration, real-time features, design system, accessibility, large data tables).',
                            '**STAR** - Situation (context and constraints), Task (your responsibility), Action (investigation, options, decision, implementation), Result (metrics).',
                            '**Show depth** - why it was hard (constraints: deadlines, legacy code, scale, unclear requirements), options you evaluated, how you validated (prototype, profiling, tests).',
                            '**Trade-offs** - what you chose not to do and why.',
                            '**Collaboration** - how you worked with backend, design, QA and product.',
                            '**Results** - numbers: faster load, fewer bugs, adoption, reduced cost.',
                            '**Reflection** - what you would do differently.',
                            'Avoid vague answers like "it was a big project"; avoid blaming others.',
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
                        text: `STAR template:
    
    S: [System/feature] had [problem: slow, buggy, hard to change] affecting [users/business].
    T: I was responsible for [goal and constraint, e.g., within 6 weeks without downtime].
    A: 1) Investigated with [profiling/logs/prototypes] -> found [root cause]
    2) Considered options A, B, C -> chose B because [criteria]
    3) Implemented [approach], validated with [tests/metrics/rollout]
    R: [metric before] -> [metric after], [business outcome]. Learned: [lesson].`,
                    },
                    {
                        type: 'highlight',
                        text: 'The STAR structure turns a technical story into a clear, measurable narrative.',
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
                        text: 'Sample (customize with your real details): "At Archer Review, the exam question page became slow and hard to maintain as features grew: large bundle, many re-renders and tangled state. I profiled with React DevTools and Lighthouse, separated server and client state, split the code, memoized hot paths and moved data fetching to the server. LCP improved from [X] to [Y], interaction lag disappeared and bugs dropped. I learned to measure first and to refactor incrementally behind tests."',
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
                            'The most challenging project was [X], where [problem and constraint].',
                            'I started by measuring and understanding the root cause, evaluated a few options, and chose [approach] because of [reasons], accepting [trade-off].',
                            'I implemented it incrementally with tests and a safe rollout.',
                            'The result was [metrics], and the lesson was [learning].',
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
                        text: '**Interviewer: "What would you do differently?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Name a real improvement: earlier profiling, better testing, clearer communication or smaller releases.',
                            'Show you learn from experience.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "Which part did YOU personally do versus the team?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Be precise: say "I" for your decisions and implementation and "we" for team work.',
                            "Do not claim others' work, but do not hide your contribution either.",
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
                        items: ['STAR', 'Root cause', 'Trade-offs', 'Constraints', 'Metrics', 'Ownership'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-4',
        topicId: 'leadership',
        title: 'Tell me about an architectural decision you made.',
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
                            'Choose one decision, such as a framework, state management or folder structure.',
                            'Explain the problem and the options you compared.',
                            'Say why you chose one option.',
                            'Share the result and trade-offs.',
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
                            'This tests **how you think about trade-offs**, not whether you picked a trendy tool.',
                            '**Context** - the problem, constraints (team skills, deadline, scale, existing code) and goals (performance, maintainability, SEO).',
                            '**Options** - at least 2 or 3 realistic alternatives with pros and cons.',
                            '**Criteria** - how you decided: complexity, learning curve, performance, ecosystem, risk, cost, long-term maintenance.',
                            '**Decision process** - prototype/spike, benchmarks, input from team, ADR (Architecture Decision Record) or RFC.',
                            '**Decision** - what you chose and why, plus what you consciously gave up.',
                            '**Rollout** - migration plan, incremental adoption, guardrails.',
                            '**Outcome and review** - results and whether you would revisit it; examples: SPA to Next.js, Redux to React Query + Zustand, monorepo with shared design system, CSS Modules vs Tailwind, adopting TypeScript strict.',
                            'Show humility: architecture decisions are context-dependent and reversible when possible.',
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
                        text: `ADR template (use this to structure your answer):
    
    Title:     Use Next.js App Router for the public site
    Context:   SEO and first-load speed needed; SPA had poor LCP; team knows React.
    Options:   1) Keep SPA + prerender  2) Next.js Pages Router  3) Next.js App Router
    Decision:  Option 3 - server components reduce JS; incremental adoption possible.
    Trade-offs: steeper learning curve, caching complexity, hosting requirements.
    Consequences: training, coding guidelines, performance budgets, migration plan.
    Review:    Revisit in 6 months with metrics (LCP, bundle size, dev velocity).`,
                    },
                    {
                        type: 'highlight',
                        text: 'An ADR shows you consider context, options and consequences instead of just picking a tool.',
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
                        text: 'Sample (customize with your real details): "At Archer Review we needed better SEO and faster first load. I compared keeping the SPA, using Next.js Pages Router and the App Router. I prototyped a key page, measured bundle size and LCP, and discussed team learning curve. We chose the App Router for server components and nested layouts and adopted it incrementally with guidelines for server/client boundaries. Result: [metric]. Trade-off: more complexity around caching."',
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
                            'The problem was [X] with constraints [Y].',
                            'I compared [options] against criteria like performance, complexity, team skills and long-term maintenance, and validated with a prototype or benchmark.',
                            'I chose [decision] and documented it in an ADR, consciously accepting [trade-off].',
                            'We adopted it incrementally and the outcome was [metrics]; I would revisit it if [condition].',
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
                        text: '**Interviewer: "What if the team disagreed with your decision?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Listen, share the data and criteria, run a spike if needed, and document the decision with reasoning.',
                            'If still disagreed, use "disagree and commit" and set a review date with metrics.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "Did any decision turn out to be wrong?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Give a real example, explain how you detected it (metrics, feedback), how you corrected course and what you changed in your decision process.',
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
                        items: ['ADR', 'Trade-offs', 'Options', 'Criteria', 'Prototype', 'Incremental adoption'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-5',
        topicId: 'leadership',
        title: 'Tell me about a production issue you handled.',
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
                            'Describe what broke and how users were affected.',
                            'Explain how you found the cause.',
                            'Say how you fixed it quickly and safely.',
                            'Explain what you did to prevent it again.',
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
                            'This tests **calm under pressure, systematic debugging, communication and learning culture**.',
                            '**Situation** - what broke, impact (users, revenue, severity), how it was detected (alert, user report).',
                            '**Mitigate first** - rollback, feature flag off, hotfix or workaround to stop the bleeding before the full root cause.',
                            '**Investigate** - logs, error tracking (Sentry), metrics, recent deploys/changes, reproduce, bisect.',
                            '**Communicate** - status updates to stakeholders/support, clear ownership during the incident, roles (incident lead).',
                            '**Fix** - minimal safe fix, tested, deployed carefully.',
                            '**Root cause and postmortem** - blameless review: what happened, why checks did not catch it, timeline.',
                            '**Prevent** - tests, monitoring/alerts, process changes (feature flags, canary, checks), documentation.',
                            '**Result** - time to detect and restore, lessons learned.',
                            'Keep it blameless: focus on systems and process, not people.',
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
                        text: `Incident answer template:
    
    Impact:      [what failed, % users, duration, business effect]
    Detection:   [alert/user report] at [time]
    Mitigation:  [rollback/flag off] -> restored in [minutes]
    Root cause:  [what exactly and why it slipped through]
    Fix:         [change + test + safe deploy]
    Prevention:  [test, monitoring, process, guardrail]
    Learning:    [what we changed in how we work]`,
                    },
                    {
                        type: 'highlight',
                        text: 'Mitigate first, then find the root cause, and finish with prevention; this order shows incident maturity.',
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
                        text: 'Sample (customize with your real details): "After a release at Archer Review, [a page/form] started failing for [some users]. Sentry alerted us; I confirmed it correlated with the deploy and rolled back to restore service within [X] minutes. Then I reproduced it, found [root cause, e.g., unhandled null from an API change], fixed it with a test, and redeployed. In the postmortem we added schema validation at the API boundary, an alert on error rate and a canary rollout for risky changes."',
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
                            'We had a production issue where [impact], detected by [alert/report].',
                            'First I mitigated by [rollback/flag], restoring service in [time], and kept stakeholders informed.',
                            'Then I found the root cause using logs, error tracking and recent changes, fixed it with a test and a safe deploy.',
                            'In the blameless postmortem we added [tests, alerts, process], so it would not happen again.',
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
                        text: '**Interviewer: "Why didn\'t tests catch it?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain the gap honestly (missing scenario, environment difference, API contract change) and what you added (regression test, contract test, e2e).',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "It is 2 AM and you are on call, error rate spikes. What do you do?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check alerts and recent deploys, assess impact, mitigate by rollback or flag, communicate in the incident channel.',
                            'Investigate after stabilizing and write a postmortem.',
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
                        items: ['Mitigation', 'Rollback', 'Root cause', 'Postmortem', 'Monitoring', 'Blameless'],
                    },
                ],
            },
        ],
    }),
];
