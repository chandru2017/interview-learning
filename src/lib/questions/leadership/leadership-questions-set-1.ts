import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';
import { createSelfIntroductionQuestion, createRoleAndResponsibility } from '../shared/features';

export const leadershipQuestionsSet1: IQuestion[] = [
    createSelfIntroductionQuestion({ id: 'lead-1', topicId: 'leadership' }),
    createRoleAndResponsibility({ id: 'lead-2', topicId: 'leadership' }),
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
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Enoda most technically challenging project Archer Review.',
                            'Indha project-la multiple pages and reusable components develop panniruken. Different screens-ku responsive UI create panniruken.',
                            'Main challenge enna na, application consistent-ah irukkanum, performance improve pannanum, and accessibility standards follow pannanum.',
                            'Adhukaga reusable components, responsive layouts, and accessibility improvements implement panniruken.',
                            'Indha project moolama complex requirements-ah understand panni, maintainable and scalable frontend solutions create panna kathukitten.',
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
                            'The most technically challenging project I worked on was Archer Review.',
                            'I worked on developing responsive user interfaces, reusable components, and improving frontend performance.',
                            'One of the main challenges was maintaining consistency across multiple pages while meeting accessibility and responsive design requirements.',
                            'I handled these challenges by creating reusable components and following frontend best practices.',
                            'This project helped me improve my problem-solving skills and build maintainable and scalable frontend applications.',
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
                        items: [
                            'Keep your answer around 30–40 seconds.',
                            'Speak confidently.',
                            `Don't explain too many technical details unless they ask follow-up questions.`,
                        ],
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
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Archer Review project-la naan edutha oru important architectural decision reusable component architecture.',
                            'Multiple pages-la same UI elements repeat aagitu irundhuchu. So, ovvoru page-layum separate-ah code write panrathuku badhila, common reusable components create panna decide pannen.',
                            'Idhanala code duplication reduce aachu, maintenance easy aachu, and UI consistency improve aachu.',
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
                            'One important architectural decision I made was introducing reusable components in the Archer Review project.',
                            'Instead of writing the same UI code on multiple pages, I decided to create common components.',
                            'This reduced code duplication, improved consistency, and made the application easier to maintain.',
                            'It also helped the team develop new features faster.',
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
                        items: ['Reusable components', 'Code duplication', 'Consistency', 'Maintainability'],
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
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Archer Review project-la production issue face pannumbodhu, first issue enga irukku nu identify panna browser DevTools use pannuven.',
                            'Console errors, network requests, and affected UI screen check pannuven.',
                            'Root cause identify pannitu, fix implement panni different scenarios-la test pannuven.',
                            'Finally, fix production-la deploy aana piragu issue resolve aagirukka nu verify pannuven.',
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
                            'In the Archer Review project, I handled production issues related to UI functionality and responsiveness.',
                            'First, I used browser DevTools to identify the root cause by checking console errors and network requests.',
                            'Then, I fixed the issue, tested the affected scenarios, and verified the fix after deployment.',
                            'My main focus was resolving the issue quickly without affecting existing functionality.',
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
                        items: [
                            '1. Identify the issue.',
                            '2. Find the root cause.',
                            '3. Fix and test.',
                            '4. Verify after deployment.',
                        ],
                    },
                ],
            },
        ],
    }),
];
