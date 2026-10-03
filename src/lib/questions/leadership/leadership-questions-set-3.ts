import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const leadershipQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'lead-11',
        topicId: 'leadership',
        title: 'How do you handle technical debt?',
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
                            'Make the debt visible by writing it down.',
                            'Prioritize items that cause the most pain.',
                            'Fix a little in every sprint.',
                            'Avoid creating new unnecessary debt.',
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
                            'Technical debt is a **trade-off**: sometimes intentional for speed, but it has interest (slower delivery, bugs). Manage it consciously.',
                            '**Make it visible** - maintain a debt register/backlog with description, impact, area, estimated effort.',
                            '**Classify** - deliberate vs accidental, high-interest vs low-interest; prioritize by impact x frequency / effort.',
                            '**Quantify** - cycle time, bugs/incidents, build time, onboarding time, developer survey; link to business outcomes.',
                            '**Allocate capacity** - a fixed share of each sprint (e.g., 10-20%), or pair debt with feature work in the same area.',
                            '**Fix strategically** - hot spots first, incremental refactors, boy-scout rule, tests as safety net, automate (codemods, lint rules).',
                            '**Prevent new debt** - code review standards, definition of done (tests, a11y), ADRs, CI gates, architecture guidelines, avoid shortcuts without a ticket and owner.',
                            '**Communicate** - explain debt in business terms (risk, speed, cost).',
                            '**Celebrate and track progress** - show metrics improving.',
                            'Not all debt must be paid; some code is fine to leave alone.',
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
                        text: `Debt register entry:

    Title:      Legacy form components use class state and duplicated validation
    Impact:     Every new form takes ~2x longer; 8 bugs in last 3 months
    Area:       /src/forms (high churn)
    Fix:        Migrate to shared form hook + schema validation, incremental over 3 sprints
    Effort:     ~8 days   Priority: High (high impact, hot spot)
    Owner:      [name]    Target: Q3
    Metric:     Time to build a form, bug count`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each debt item has impact, effort and a metric, so it can be prioritized and defended.',
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
                        text: 'Sample (customize with your real details): "At Archer Review we kept a debt backlog tagged by impact, reserved part of each sprint for the highest-impact items, and tied fixes to features in the same area. We tracked build time and bug count, which improved over time."',
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
                            'I make debt visible in a backlog with impact and effort, and prioritize by pain and frequency of change.',
                            'We reserve capacity every sprint and fix incrementally, often together with feature work in the same area.',
                            'I prevent new debt with review standards, definition of done and CI gates, and I explain debt to stakeholders in terms of speed and risk.',
                            'I track metrics to show progress.',
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
                        text: '**Product says "no time for tech debt this quarter". What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Show the cost in business terms (slower delivery, incidents) and propose a small, high-ROI slice or pairing with features.',
                            'Negotiate a minimal capacity and agree on metrics to show benefits.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team created debt intentionally to hit a launch. How do you make sure it gets repaid?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Log it with an owner, impact and target date at the time of the decision.',
                            'Schedule it right after launch and review during planning.',
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
                            'Debt register',
                            'Prioritize',
                            'Capacity allocation',
                            'Hot spots',
                            'Metrics',
                            'Prevention',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-12',
        topicId: 'leadership',
        title: 'How do you convince management to invest in technical improvements?',
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
                            'Explain the problem in business terms like cost, speed and risk.',
                            'Show data, not only opinions.',
                            'Propose a small first step with clear benefits.',
                            'Report results after.',
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
                            'Management cares about **business outcomes**: revenue, cost, risk, speed to market, customer satisfaction. Translate technical work into those terms.',
                            '**Define the problem with evidence** - metrics: page speed and conversion, incident count/downtime, build and deploy time, bug rate, cycle time, developer onboarding time, support tickets.',
                            '**Connect to goals** - company OKRs (growth, retention, reliability, cost reduction, security/compliance).',
                            '**Present options** - do nothing (cost of inaction), small step, full solution; with effort, risk, ROI and timeline.',
                            '**Start small** - pilot or quick win to prove value, then expand; phased plan with milestones.',
                            '**Address risk** - rollout plan, rollback, impact on roadmap; show how feature delivery continues.',
                            '**Speak simply** - avoid jargon, use analogies, visuals (before/after charts).',
                            '**Get allies** - product, design, support, other engineers; use customer or incident stories.',
                            '**Follow up** - report results to build trust for the next request.',
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
                        text: `Proposal one-pager:

    Problem:   Checkout page LCP is 4.2s on mobile; conversion drops ~[X]% above 3s (analytics).
    Impact:    Estimated lost revenue [Y] per month; SEO ranking risk.
    Options:   A) Do nothing  B) Quick wins (images, caching) 1 sprint  C) Re-architecture 2 months
    Recommend: Option B now, measure, then decide on C.
    Cost/Risk: 1 dev for 2 weeks; low risk, behind feature flag.
    Success:   LCP < 2.5s, conversion +[Z]%. Review in 4 weeks.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A short proposal links the technical issue to money, offers options and defines success metrics.',
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
                        text: 'Sample (customize with your real details): "At Archer Review I proposed performance work by showing Web Vitals data and correlating slow pages with drop-offs. I proposed a two-week pilot on one page; LCP improved by [X] and engagement increased, which earned support for broader improvements."',
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
                            'I frame the problem in business terms with data, like conversion, incidents, delivery speed or cost.',
                            'I present options including the cost of doing nothing, and propose a small pilot with clear success metrics.',
                            'I address risk and roadmap impact, and then report results to build trust for the next investment.',
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
                        text: '**Manager says "customers do not see it, so it is not a priority". How do you respond?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Show indirect customer impact: slower features, bugs, outages, security risk, and developer attrition.',
                            'Use metrics and one concrete incident or delay story.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your first proposal was rejected. What do you do next?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask what concerns blocked it (cost, timing, evidence) and adjust: smaller scope, better data, or different timing.',
                            'Find a quick win to build credibility and revisit.',
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
                        items: ['Business impact', 'Data', 'ROI', 'Pilot', 'Cost of inaction', 'Success metrics'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-13',
        topicId: 'leadership',
        title: 'How do you estimate frontend work?',
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
                            'Break the work into small tasks.',
                            'Include design, API integration, testing and review time.',
                            'Give a range instead of one exact number.',
                            'Update the estimate when you learn more.',
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
                            'Estimation is about **managing uncertainty and communicating risk**, not predicting exactly.',
                            '**Understand scope** - clarify requirements, designs, acceptance criteria, API contracts, and what is out of scope.',
                            '**Break down** - components/screens, states (loading, empty, error, success), responsive behavior, forms and validation, API integration, auth, analytics, accessibility, i18n.',
                            '**Include the hidden work** - design review, testing (unit, e2e), code review cycles, QA fixes, cross-browser, performance, deployment, documentation, waiting on dependencies (API/design).',
                            '**Use ranges** - best / likely / worst or three-point estimates; state assumptions and risks explicitly.',
                            '**Reduce unknowns** - spikes/time-boxed research for new tech or unclear requirements.',
                            '**Calibrate** - compare with similar past work and team velocity; reference class estimates.',
                            '**Add buffer** consciously for risk, not hidden padding; split large items into smaller deliverables.',
                            '**Re-estimate** as you learn and communicate changes early.',
                            'Prefer story points/relative sizing for sprint planning and time ranges for stakeholder commitments.',
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
                        text: `Estimation example: "Add exam results dashboard"

    Task                                   Likely   Risk
    Component structure + routing          1d
    Data fetching + caching (API ready?)   1.5d     API dependency
    Table + filters (virtualization?)      2d       10k rows? -> spike 0.5d
    Loading/empty/error states             1d
    Responsive + accessibility             1.5d
    Tests (unit + e2e)                     1.5d
    Review, QA fixes, deploy               1.5d
    -----------------------------------------------------------
    Total: ~10d likely; range 8-14d. Assumptions: designs final, API contract agreed.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A task breakdown with hidden work, risks and a range gives a realistic and defensible estimate.',
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
                        text: 'Sample (customize with your real details): "At Archer Review I estimated features by splitting them into states and responsive/accessibility work, adding test and review time, and flagging API dependencies. For unclear parts I did short spikes first. This made delivery more predictable and surfaced risks early."',
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
                            'I clarify scope, break the work into tasks including states, responsiveness, accessibility, tests, reviews and deployment, and give a range with assumptions and risks.',
                            'For unknowns I do a time-boxed spike, and I compare with past similar work.',
                            'I communicate dependencies like API and design readiness and re-estimate when things change.',
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
                        text: '**Manager asks for an exact date on a vague feature. What do you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain what is unknown, provide a range and the assumptions, and propose a spike or a clarification session first.',
                            'Commit to a date once scope is clear.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You are halfway and realize the estimate was too low. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Tell stakeholders early with the reason and new estimate, and offer options (reduce scope, move date, add help).',
                            'Learn and adjust future estimates.',
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
                        items: ['Breakdown', 'Ranges', 'Assumptions', 'Spike', 'Hidden work', 'Re-estimate'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-14',
        topicId: 'leadership',
        title: 'How do you handle tight deadlines?',
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
                            'Clarify what is most important.',
                            'Reduce the scope to a smaller first version.',
                            'Communicate risks early.',
                            'Keep quality: do not skip tests for critical parts.',
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
                            'A tight deadline is a **scope and risk management problem**, not a call for heroics or hidden shortcuts.',
                            '**Clarify** - what is the real deadline and what is truly required (must-have vs nice-to-have)? What is the cost of missing it?',
                            '**Negotiate scope** - define an MVP, cut or defer features, simplify UX where acceptable; trade scope, time or resources, not quality.',
                            '**Plan** - break down tasks, identify risks and dependencies (API, design), start with the riskiest parts, parallelize work.',
                            '**Communicate** - regular updates, raise issues early with options, no surprises.',
                            '**Protect quality** - keep tests for critical flows, code review, feature flags and gradual rollout to reduce risk.',
                            '**Log shortcuts** - any intentional debt gets a ticket, owner and follow-up date.',
                            '**Avoid burnout** - limited overtime, not a pattern; ask for help or reassign.',
                            '**After** - retrospective: what caused the squeeze and how to prevent it (estimation, scope changes, planning).',
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
                        text: `Tight deadline plan:

    1. Clarify: must-have = [A, B]; nice-to-have = [C, D]; hard date because [reason]
    2. Propose MVP:  ship A+B behind a feature flag; C, D in a follow-up release
    3. Risks: [API not ready -> mock/contract], [design unclear -> confirm today]
    4. Daily update: status, risks, decisions needed
    5. Quality guardrails: tests for critical path, code review, smoke test, rollback plan
    6. After release: ticket for deferred items and technical shortcuts; retrospective`,
                    },
                    {
                        type: 'highlight',
                        text: 'Scope negotiation, early communication and quality guardrails keep a rushed delivery safe.',
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
                        text: 'Sample (customize with your real details): "Before a launch at Archer Review we had limited time. I proposed an MVP with the core flow first, deferred non-critical features, communicated risks daily and shipped behind a feature flag. We delivered on time and completed the remaining items in the next sprint."',
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
                            'I first clarify the real priorities and negotiate scope into an MVP instead of cutting quality.',
                            'I identify risks early, work on the riskiest parts first, and communicate progress and blockers openly.',
                            'I protect critical-path quality with tests, reviews and feature flags, and I log any shortcuts as debt with a follow-up.',
                            'Afterwards I review what caused the pressure to improve planning.',
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
                        text: '**Product wants all features by Friday, which is impossible. What do you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain what is feasible with the facts, offer options: reduce scope, extend date or add resources.',
                            'Recommend an MVP with a follow-up release.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You are asked to skip tests to meet the date. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Keep tests for critical and risky paths, and skip lower-risk ones with agreement and a follow-up ticket.',
                            'Explain that skipping tests often costs more time in bugs.',
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
                            'MVP',
                            'Scope negotiation',
                            'Risks',
                            'Communication',
                            'Feature flag',
                            'No hidden shortcuts',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-15',
        topicId: 'leadership',
        title: 'How do you prioritize bugs vs new features?',
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
                            'Fix bugs that hurt users or the business first.',
                            'Check how serious the bug is and how many users it affects.',
                            'Small bugs can wait if a feature is more valuable.',
                            'Discuss priorities with the product manager.',
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
                            'Prioritize by **impact, urgency and effort**, together with product, not by gut feeling.',
                            '**Severity** - security issues, data loss, payment/blocking issues (P0) go first; major functionality broken (P1); minor/cosmetic (P2/P3).',
                            '**Impact** - number/type of users affected (percentage, key customers), frequency, whether a workaround exists, revenue/legal/brand risk.',
                            '**Compare with feature value** - expected business value of the feature vs cost of the bug (support load, churn).',
                            '**Frameworks** - impact/effort matrix, RICE, severity x frequency; defined SLAs per priority.',
                            '**Capacity policy** - reserve a fixed share of each sprint for bugs/maintenance so they do not pile up.',
                            '**Triage process** - regular bug triage with product, QA and support; clear reproduction steps and ownership.',
                            '**Do not ignore small bugs forever** - they accumulate and hurt quality perception; batch quick wins.',
                            '**Communicate** - transparent trade-offs to stakeholders.',
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
                        text: `Bug triage matrix:

    P0  Security/data loss/site down/payments broken     -> fix immediately, hotfix + postmortem
    P1  Core flow broken for many users, no workaround   -> within current sprint/24-48h
    P2  Feature degraded, workaround exists              -> schedule in next sprint(s)
    P3  Cosmetic/edge case                               -> backlog, batch with related work

    Score = (users affected x severity x frequency) / effort     (use with product for features vs bugs)`,
                    },
                    {
                        type: 'highlight',
                        text: 'A simple severity ladder and score makes bug versus feature decisions transparent.',
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
                        text: 'Sample (customize with your real details): "At Archer Review we held a weekly bug triage with product. Blocking and data issues were fixed immediately, while minor UI bugs were batched, and we reserved part of each sprint for bugs so the backlog did not grow."',
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
                            'I prioritize by severity, number of users affected, frequency, workarounds and business risk, in discussion with product.',
                            'Security, data loss and blocking issues go first, while minor bugs are batched and scheduled.',
                            'We reserve sprint capacity for bugs and run regular triage so quality does not erode.',
                            'I communicate trade-offs clearly to stakeholders.',
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
                        text: '**A sales-critical feature is due, but a medium bug affects 5% of users. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Assess severity, workaround and revenue/support impact; if low risk, schedule the fix right after the feature.',
                            'Communicate the trade-off and the plan to product.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**The bug backlog has 300 open tickets. How do you manage it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Triage and close duplicates/obsolete items, prioritize by impact, and fix the top ones.',
                            'Reserve ongoing capacity and prevent new bugs through tests and review.',
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
                        items: ['Severity', 'Impact', 'Triage', 'RICE', 'Capacity reservation', 'SLA'],
                    },
                ],
            },
        ],
    }),
];
