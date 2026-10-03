import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const leadershipQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'lead-6',
        topicId: 'leadership',
        title: 'Tell me about a time you disagreed with another developer.',
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
                            'Describe the disagreement calmly, without blaming.',
                            'Explain how you listened to their view.',
                            'Say how you used facts or tests to decide.',
                            'Show the result and that the relationship stayed good.',
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
                            'This tests **emotional intelligence, collaboration and decision making**.',
                            '**Choose a professional technical disagreement** (approach, library, architecture), not a personal conflict.',
                            '**Show respect** - understand their reasoning first (ask questions), assume good intent.',
                            '**Use data, not opinions** - prototype/spike, benchmarks, examples, team guidelines, user impact.',
                            '**Involve others** - tech lead or team for input if needed; write down trade-offs (ADR).',
                            '**Be ready to be wrong** - show you can change your mind.',
                            '**Disagree and commit** - once decided, support the decision fully.',
                            '**Outcome** - what was decided, result, and how the relationship and team benefited.',
                            'Avoid stories where you "won" by authority or where the other person was "stupid".',
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
    
    Situation:   We disagreed on [approach A vs B] for [feature/library/architecture].
    My view:     [A] because [reasons]. Their view: [B] because [reasons].
    How I handled it: I listened to understand, asked [questions], then we agreed to compare
                  using [prototype/benchmark/criteria].
    Decision:    [what was chosen and why] (even if it was their option).
    Outcome:     [result], and we [kept good relationship / documented decision / improved process].
    Learning:    [what I learned about collaboration].`,
                    },
                    {
                        type: 'highlight',
                        text: 'Show listening, evidence-based resolution and a positive outcome, regardless of whose idea won.',
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
                        text: 'Sample (customize with your real details): "A teammate and I disagreed about using a global state library versus server-state caching for API data. I wanted TanStack Query; they preferred keeping everything in the global store. We listened to each other, built a small prototype of one screen both ways and compared code size, caching behavior and bugs. The data favored server-state caching for API data and the global store for UI state, which became our guideline. We stayed on good terms and documented the decision."',
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
                            'On [project], a teammate and I disagreed on [approach].',
                            'I first made sure I understood their reasoning, then we agreed to evaluate both options with a prototype or clear criteria instead of opinions.',
                            'We decided on [outcome], and I fully supported it, even though [if it was their idea].',
                            'It strengthened our collaboration and we documented the decision.',
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
                        text: '**Interviewer: "What if the other developer was senior to you?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Respect experience but still share evidence and concerns clearly; ask questions to understand their reasoning.',
                            'Escalate to the tech lead only after trying direct discussion and data.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interviewer: "What if you were right and they were wrong?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Focus on the outcome, not winning; present data, let results speak and keep it blameless.',
                            'Help them save face and learn, as you also will be wrong sometimes.',
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
                            'Listen first',
                            'Data over opinions',
                            'Prototype',
                            'Disagree and commit',
                            'Respect',
                            'ADR',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-7',
        topicId: 'leadership',
        title: 'How do you handle code review disagreements?',
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
                            'Stay respectful and focus on the code, not the person.',
                            'Explain your reasoning and listen to theirs.',
                            'Use team standards and facts to decide.',
                            'Talk in a call if comments are going back and forth.',
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
                            'Code review is for **correctness, maintainability and shared learning**, not for personal preference.',
                            '**Separate categories** - must-fix (bugs, security, accessibility, breaking standards) vs suggestions/nitpicks (label with "nit:" or "optional").',
                            '**Automate the trivial** - Prettier, ESLint and CI so style is never debated.',
                            '**Communicate well** - ask questions ("What happens if...?"), explain the why, offer alternatives, link docs; comment on code, not on the person.',
                            '**Resolve disagreements** - refer to team guidelines/ADRs; show evidence (benchmarks, tests); timebox written back-and-forth then hop on a quick call; summarize outcome in the PR.',
                            '**If unresolved** - ask a tech lead/another reviewer to break the tie; if it is a recurring topic, update team guidelines.',
                            '**As an author** - keep PRs small, explain context in the description, be open to feedback.',
                            '**Culture** - praise good work, no blocking on preferences, review within an agreed SLA.',
                            'Goal: ship good code and keep trust, not win arguments.',
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
                        text: `Review comment styles:
    
    Must fix:   "This can crash if user is null (see line 42). Could we guard or use optional chaining?"
    Question:   "Why did we choose useEffect here instead of deriving this value during render?"
    Suggestion: "nit (optional): extracting this into a helper might make tests simpler."
    Praise:     "Nice use of the discriminated union, this removes the impossible states."
    
    Disagreement flow:
    1) Explain reasoning with evidence  2) Check team guideline/ADR
    3) Quick call if > 2 comment rounds  4) Tech lead decides if still stuck  5) Update guideline`,
                    },
                    {
                        type: 'highlight',
                        text: 'Clear comment types and a simple escalation path keep reviews productive and respectful.',
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
                        text: 'Sample (customize with your real details): "At Archer Review we automated formatting and lint rules so reviews focused on logic. When a teammate and I disagreed on a component API, I explained the maintainability concern, we looked at the team guideline and a quick call settled it with a small compromise, and we updated the guideline for the future."',
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
                            'I treat review as collaboration: focus on the code, explain the why, and distinguish must-fix issues from optional suggestions.',
                            'I automate style with Prettier and ESLint so we never debate formatting.',
                            'If a thread goes back and forth, I move to a quick call, rely on team guidelines or evidence, and summarize the decision in the PR.',
                            'If still unresolved, we ask the tech lead and update guidelines.',
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
                        text: '**A reviewer keeps blocking your PR for style preferences. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask if it is a team standard; if not, propose automating or marking it optional.',
                            'Discuss in a call and propose updating the guidelines so it is not repeated.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You disagree with a reviewer on an architectural point in a PR. How do you proceed?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain your reasoning with trade-offs and evidence, and ask for theirs.',
                            'Move the discussion to a design conversation/ADR rather than blocking the PR for days.',
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
                        items: ['Respectful', 'Must-fix vs nit', 'Guidelines', 'Automation', 'Quick call', 'Small PRs'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-8',
        topicId: 'leadership',
        title: 'How do you mentor junior developers?',
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
                            'Help them understand why, not only what to do.',
                            'Give them small tasks that grow step by step.',
                            'Review their code kindly and explain improvements.',
                            'Make it safe for them to ask questions.',
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
                            'Mentoring is about **growing independent engineers**, not giving answers.',
                            '**Understand them** - skills, goals and learning style; set clear expectations and a growth plan.',
                            '**Onboarding** - good documentation, starter tasks, a buddy, a walkthrough of architecture and conventions.',
                            '**Teach through work** - pair programming, live debugging, thinking aloud, then let them drive.',
                            '**Ask, do not tell** - guiding questions ("What have you tried?", "What would you check next?") before showing the solution.',
                            '**Gradual autonomy** - increase scope and complexity as they grow; let them own a small feature end to end.',
                            '**Code review as teaching** - explain principles, link resources, praise good work, prioritize the most important feedback.',
                            '**Psychological safety** - questions are welcome, mistakes are learning opportunities.',
                            '**Regular 1:1s and feedback** - specific, timely and actionable; celebrate progress.',
                            '**Share knowledge** - tech talks, brown-bag sessions, documentation, learning resources.',
                            '**Measure** - independence, quality of PRs, reduced review rounds, confidence.',
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
                        text: `Mentoring plan (example):
    
    Week 1-2:  Setup, architecture walkthrough, pair on a small bug fix.
    Week 3-4:  Own a small UI feature with tests; I review with guiding comments.
    Month 2:   Own a medium feature end to end (design -> code -> release).
    Month 3+:  Review others' PRs, lead a small improvement (e.g., accessibility fix, performance).
    
    Weekly 1:1: what went well / where stuck / one skill to focus on / feedback both ways.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A simple progression of scope, with regular feedback, builds independence step by step.',
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
                        text: 'Sample (customize with your real details): "At Archer Review I mentored a junior developer by pairing on their first features, using code reviews to explain patterns like state colocation and accessibility, and giving them a small feature to own. Within [X] months they were shipping features independently with fewer review rounds."',
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
                            'I start by understanding their level and goals, set expectations and give small tasks with increasing scope.',
                            'I use pair programming and guiding questions so they learn to solve problems themselves, and I use code reviews to teach principles.',
                            'I keep it safe to ask questions and hold regular 1:1s with specific feedback.',
                            'Success for me is when they work independently and eventually help others.',
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
                        text: '**A junior keeps asking for the answer instead of trying first. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Set a pattern: ask them to share what they tried and their hypothesis first, timebox before asking.',
                            'Guide with questions and praise the problem-solving process.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**A junior's PRs are always very large and hard to review. How do you help?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Teach breaking work into small PRs and agree on a checklist.',
                            'Pair on slicing a task and review earlier (draft PRs).',
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
                            'Pairing',
                            'Guiding questions',
                            'Gradual autonomy',
                            'Feedback',
                            'Psychological safety',
                            'Growth plan',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-9',
        topicId: 'leadership',
        title: "How do you review senior developers' code?",
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
                            'I review it like any other code: with the same care.',
                            'I ask questions to understand their decisions.',
                            'I focus on design, edge cases and tests.',
                            'I stay respectful and learn from their approach.',
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
                            'Seniority does not remove the value of a second pair of eyes; the aim is **better outcomes and shared ownership**.',
                            '**Same standards for everyone** - correctness, readability, tests, accessibility, performance, security.',
                            '**Ask, do not assert** - "Can you help me understand why X over Y?" invites explanation and can reveal context you lacked.',
                            '**Review at the right level** - design and trade-offs, edge cases, failure modes, impact on other modules, maintainability, not just syntax.',
                            '**Bring evidence** - benchmarks, docs, examples; be specific and concise.',
                            '**Do not rubber-stamp** - skipping review hurts the team and the senior also benefits from fresh eyes.',
                            '**Do not nitpick** - prioritize important feedback, skip style that tools handle.',
                            '**Learn** - note good patterns and ask about them; give genuine praise.',
                            '**Respectful disagreement** - state concerns clearly with reasoning, offer alternatives, and escalate via discussion/ADR if needed.',
                            '**Respond to their feedback the same way** - be open to being corrected.',
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
                        text: `Review comments for senior code:
    
    Question:    "I see we cache this per user. What is the invalidation strategy if permissions change?"
    Concern:     "This works for the happy path, but a 429 from the API would leave the form stuck.
              Should we add a retry/error state?"
    Alternative: "Would a discriminated union for the state simplify the three booleans here?"
    Learning:    "Nice use of useSyncExternalStore here, I have not used that pattern before."`,
                    },
                    {
                        type: 'highlight',
                        text: 'Questions, evidence and genuine praise make reviews of senior colleagues respectful and valuable.',
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
                        text: 'Sample (customize with your real details): "When reviewing a senior colleague\'s caching change at Archer Review, I asked about the invalidation strategy for a permission change. That revealed an edge case, we added a test and a tag-based invalidation, and I also learned a pattern I reused later."',
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
                            'I review senior code with the same standards: correctness, edge cases, tests, accessibility, performance and maintainability.',
                            'I ask questions to understand their decisions rather than assuming, and I focus on design-level feedback with evidence.',
                            'I never rubber-stamp, and I am respectful, specific and open to learning from their patterns.',
                            'If we disagree, we discuss trade-offs and involve the team if needed.',
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
                        text: "**You spot a possible bug in a senior's PR but are not sure. What do you do?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask a precise question with a scenario, or add a test case to verify.',
                            'It is fine to be wrong; a question is low-risk and often reveals real issues.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A senior gets defensive about your comments. How do you respond?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Stay calm, clarify that the goal is the product, and back comments with evidence.',
                            'Offer a quick call and keep feedback specific and about the code.',
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
                            'Same standards',
                            'Ask questions',
                            'Design-level review',
                            'Evidence',
                            'Respect',
                            'No rubber-stamping',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'lead-10',
        topicId: 'leadership',
        title: 'How do you decide whether to refactor or continue development?',
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
                            'Check how much the messy code slows the team or causes bugs.',
                            'If it blocks the new feature, refactor the part you need.',
                            'Do small refactors step by step with tests.',
                            'Avoid big rewrites unless there is no other option.',
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
                            'Decide with **cost-benefit and risk**, not personal preference. Refactoring is an investment that must pay back.',
                            '**Questions to ask** - How often does this code change? How many bugs come from it? Does it block the feature or slow delivery? What is the business deadline and risk? Do we have tests?',
                            '**Refactor now when** - the code is in the path of the feature, high-churn (hot spot), causing recurring bugs, or the feature would be significantly harder/riskier without it.',
                            '**Defer when** - stable code that rarely changes, deadline-critical release, no test safety net (add tests first), or benefit is unclear; log it as tracked debt.',
                            '**How** - incremental refactoring: boy-scout rule, small PRs separate from feature changes, tests first (characterization tests), strangler fig for large areas, feature flags, keep behavior unchanged.',
                            '**Avoid** - big-bang rewrites (high risk, long freeze, second-system effect), refactoring without measurable goals, mixing refactors with feature logic in a single huge PR.',
                            '**Timebox and agree** - align with product on scope and timeline; show benefits (faster delivery, fewer bugs).',
                            '**Measure** - cycle time, bug counts, review time, test coverage.',
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
                        text: `Decision checklist:
    
    [ ] Is this code on the critical path of the upcoming feature?        -> if yes, refactor the minimum needed
    [ ] Does it change often or cause repeated bugs (hot spot)?            -> refactor soon
    [ ] Do we have tests/safety net?                                       -> if no, add tests first
    [ ] Can I do it in small, shippable, reversible steps?                 -> prefer incremental
    [ ] Is there a hard deadline/risk?                                     -> defer, log debt with a ticket
    [ ] Can I explain the benefit in numbers (time saved, bugs reduced)?   -> required for bigger refactors`,
                    },
                    {
                        type: 'highlight',
                        text: 'A short checklist turns a gut feeling into a risk and value based decision.',
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
                        text: 'Sample (customize with your real details): "At Archer Review, a form module had grown into a 1,000+ line component. Before adding a new feature I added tests, then extracted hooks and sub-components step by step in separate PRs. The feature was then simpler to build and bugs in that area dropped."',
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
                            'I evaluate how often the code changes, how many bugs it causes, whether it blocks the feature, and the deadline and risk.',
                            "If it is on the feature's path or a hot spot, I refactor incrementally with tests first, in small separate PRs.",
                            'If it is stable or the deadline is critical, I defer it and log tracked debt.',
                            'I avoid big-bang rewrites and communicate benefits to product in terms of speed and quality.',
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
                        text: '**Team wants to rewrite the whole app in a new framework. What is your view?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask for the business case, risks and alternatives; prefer incremental migration (strangler pattern).',
                            'Pilot on one area, measure results, and keep shipping features meanwhile.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You find messy code while building a feature with a tight deadline. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Make only the minimal refactor needed to deliver safely; leave the rest.',
                            'Create a ticket describing the debt and its impact for later.',
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
                            'Cost-benefit',
                            'Incremental refactoring',
                            'Boy-scout rule',
                            'Tests first',
                            'Strangler fig',
                            'Hot spot',
                        ],
                    },
                ],
            },
        ],
    }),
];
