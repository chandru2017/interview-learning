import type { IQuestion, ITopic, ITopicSectionGroup, TopicSection } from '@/types';

export const TOPICS: ITopic[] = [
    {
        id: 'about-experience',
        name: 'About Experience',
        section: 'ABOUT',
        icon: 'BookOpen',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'html-css-ui',
        name: 'HTML / CSS / UI',
        section: 'CORE',
        icon: 'Palette',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        section: 'CORE',
        icon: 'Zap',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        section: 'CORE',
        icon: 'FileCode',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'react',
        name: 'React',
        section: 'FRAMEWORKS',
        icon: 'Atom',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        section: 'FRAMEWORKS',
        icon: 'Layers',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'browser-web-apis',
        name: 'Browser & Web APIs',
        section: 'WEB PLATFORM',
        icon: 'Globe',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'frontend-performance',
        name: 'Frontend Performance',
        section: 'QUALITY',
        icon: 'Gauge',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'accessibility',
        name: 'Accessibility',
        section: 'QUALITY',
        icon: 'Accessibility',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'seo',
        name: 'SEO',
        section: 'QUALITY',
        icon: 'Search',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'frontend-architecture',
        name: 'Frontend Architecture',
        section: 'ARCHITECTURE',
        icon: 'Network',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'security',
        name: 'Security',
        section: 'ARCHITECTURE',
        icon: 'Shield',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'git-cicd',
        name: 'Git & CI/CD',
        section: 'ENGINEERING',
        icon: 'GitBranch',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'leadership',
        name: 'Leadership',
        section: 'ENGINEERING',
        icon: 'Users',
        questionCount: 0,
        completedCount: 0,
    },
    {
        id: 'top-30',
        name: 'Top 30 Questions',
        section: 'FINAL REVISION',
        icon: 'Star',
        questionCount: 0,
        completedCount: 0,
    },
];

const SECTION_ORDER: TopicSection[] = [
    'ABOUT',
    'CORE',
    'FRAMEWORKS',
    'WEB PLATFORM',
    'QUALITY',
    'ARCHITECTURE',
    'ENGINEERING',
    'FINAL REVISION',
];

const q = (
    partial: Omit<
        IQuestion,
        | 'status'
        | 'simpleExplanation'
        | 'seniorExplanation'
        | 'simpleExample'
        | 'realProjectExample'
        | 'interviewAnswer'
    > &
        Partial<
            Pick<
                IQuestion,
                | 'status'
                | 'simpleExplanation'
                | 'seniorExplanation'
                | 'simpleExample'
                | 'realProjectExample'
                | 'interviewAnswer'
            >
        >,
): IQuestion => {
    return {
        status: 'not-started',
        simpleExplanation: partial.simpleExplanation ?? `A clear, beginner-friendly explanation of: ${partial.title}.`,
        seniorExplanation:
            partial.seniorExplanation ??
            `A senior-level take on ${partial.title}: trade-offs, edge cases, and how you would defend the decision in a system design or deep-dive interview.`,
        simpleExample: partial.simpleExample ?? `// Minimal example for: ${partial.title}\nconsole.log('example');`,
        realProjectExample:
            partial.realProjectExample ??
            `In production, apply ${partial.title} when building scalable UI — measure impact, document the decision, and keep accessibility intact.`,
        interviewAnswer:
            partial.interviewAnswer ??
            `In interviews I explain ${partial.title} with a short definition, one concrete example, the trade-offs I considered, and how I validated the result (tests, metrics, or user impact).`,
        ...partial,
    };
};

export const QUESTIONS: IQuestion[] = [
    // About Experience
    q({
        id: 'ae-1',
        topicId: 'about-experience',
        title: 'Walk me through a production frontend you owned end-to-end',
        difficulty: 'Advanced',
        status: 'completed',
        simpleExplanation: 'Tell a clear story: problem, your role, architecture, what shipped, and the outcome.',
        seniorExplanation:
            'Structure with STAR, but emphasize technical ownership: constraints, trade-offs, metrics, incidents, and what you would change. Interviewers assess judgment more than buzzwords.',
        simpleExample:
            'Problem → Approach → Trade-offs → Result → Lesson\nExample: rebuilt checkout → reduced drop-off 12%.',
        realProjectExample:
            'Owned a Next.js storefront: App Router migration, design system adoption, Core Web Vitals budget, and on-call for release regressions.',
        interviewAnswer:
            'I pick one system I owned fully, frame the business problem, walk through architecture and key decisions, then close with measurable impact and a lesson I applied later.',
    }),
    q({
        id: 'ae-2',
        topicId: 'about-experience',
        title: 'How do you handle disagreement on technical direction?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    q({
        id: 'ae-3',
        topicId: 'about-experience',
        title: 'Describe a time you improved team delivery quality',
        difficulty: 'Intermediate',
    }),

    // HTML/CSS/UI
    q({
        id: 'hc-1',
        topicId: 'html-css-ui',
        title: 'Explain the CSS box model and when you use border-box',
        difficulty: 'Beginner',
        status: 'completed',
        simpleExplanation:
            'Every element has content, padding, border, and margin. border-box includes padding and border inside width/height.',
        seniorExplanation:
            'box-sizing: border-box makes layout math predictable. Combined with logical properties and container queries, it reduces layout bugs across responsive designs.',
        simpleExample: '* { box-sizing: border-box; }\n.card { width: 320px; padding: 16px; border: 1px solid; }',
        realProjectExample:
            'Design systems set border-box globally so component width tokens stay stable when padding changes.',
        interviewAnswer:
            'I explain content vs border-box, why border-box is the default in modern apps, and how it interacts with padding and borders in component layouts.',
    }),
    q({
        id: 'hc-2',
        topicId: 'html-css-ui',
        title: 'Flexbox vs Grid — when do you choose each?',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'hc-3',
        topicId: 'html-css-ui',
        title: 'How do you build responsive layouts mobile-first?',
        difficulty: 'Intermediate',
    }),
    q({
        id: 'hc-4',
        topicId: 'html-css-ui',
        title: 'What is stacking context and how does z-index work?',
        difficulty: 'Advanced',
    }),

    // JavaScript
    q({
        id: 'js-1',
        topicId: 'javascript',
        title: 'Explain closures with a practical example',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation:
            'A closure is a function that remembers variables from the scope where it was created, even after that scope finished.',
        seniorExplanation:
            'Closures enable encapsulation and factory patterns, but can retain memory longer than expected. In React, stale closures in effects/handlers are a common senior interview trap.',
        simpleExample:
            'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nnext(); // 1',
        realProjectExample:
            'Rate-limit helpers, private module state, and event handler factories use closures. In React, useEffect dependencies must reflect closed-over values.',
        interviewAnswer:
            'I define closures simply, show a counter factory, then connect to React stale-closure bugs and how dependency arrays or functional updates fix them.',
    }),
    q({
        id: 'js-2',
        topicId: 'javascript',
        title: 'Event loop: microtasks vs macrotasks',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 'js-3',
        topicId: 'javascript',
        title: 'Difference between == and ===',
        difficulty: 'Beginner',
        status: 'in-progress',
    }),
    q({
        id: 'js-4',
        topicId: 'javascript',
        title: 'How does prototypal inheritance work?',
        difficulty: 'Advanced',
    }),
    q({
        id: 'js-5',
        topicId: 'javascript',
        title: 'Debounce vs throttle — use cases',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'js-6',
        topicId: 'javascript',
        title: 'Explain promises and async/await error handling',
        difficulty: 'Intermediate',
    }),

    // TypeScript
    q({
        id: 'ts-1',
        topicId: 'typescript',
        title: 'interface vs type — practical differences',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'ts-2',
        topicId: 'typescript',
        title: 'How do generics improve API design?',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
    q({
        id: 'ts-3',
        topicId: 'typescript',
        title: 'Explain discriminated unions',
        difficulty: 'Intermediate',
    }),
    q({
        id: 'ts-4',
        topicId: 'typescript',
        title: 'What is the satisfies operator useful for?',
        difficulty: 'Advanced',
    }),

    // React
    q({
        id: 're-1',
        topicId: 'react',
        title: 'How does reconciliation work at a high level?',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 're-2',
        topicId: 'react',
        title: 'useEffect dependency array pitfalls',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    q({
        id: 're-3',
        topicId: 'react',
        title: 'Controlled vs uncontrolled components',
        difficulty: 'Beginner',
        status: 'completed',
    }),
    q({
        id: 're-4',
        topicId: 'react',
        title: 'When would you lift state vs use composition?',
        difficulty: 'Intermediate',
    }),
    q({
        id: 're-5',
        topicId: 'react',
        title: 'Server Components vs Client Components',
        difficulty: 'Advanced',
    }),

    // Next.js
    q({
        id: 'nx-1',
        topicId: 'nextjs',
        title: 'App Router vs Pages Router mental model',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'nx-2',
        topicId: 'nextjs',
        title: 'How does caching work in the App Router?',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
    q({
        id: 'nx-3',
        topicId: 'nextjs',
        title: 'When do you use route handlers vs server actions?',
        difficulty: 'Intermediate',
    }),
    q({
        id: 'nx-4',
        topicId: 'nextjs',
        title: 'Streaming and Suspense for UX',
        difficulty: 'Advanced',
    }),

    // Browser
    q({
        id: 'br-1',
        topicId: 'browser-web-apis',
        title: 'Critical rendering path overview',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 'br-2',
        topicId: 'browser-web-apis',
        title: 'localStorage vs sessionStorage vs cookies',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    q({
        id: 'br-3',
        topicId: 'browser-web-apis',
        title: 'How does the browser event system bubble and capture?',
        difficulty: 'Intermediate',
    }),
    q({
        id: 'br-4',
        topicId: 'browser-web-apis',
        title: 'Intersection Observer use cases',
        difficulty: 'Intermediate',
    }),

    // Performance
    q({
        id: 'pf-1',
        topicId: 'frontend-performance',
        title: 'Explain Core Web Vitals (LCP, INP, CLS)',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 'pf-2',
        topicId: 'frontend-performance',
        title: 'How do you reduce JavaScript bundle size?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    q({
        id: 'pf-3',
        topicId: 'frontend-performance',
        title: 'Image optimization strategies',
        difficulty: 'Intermediate',
    }),

    // Accessibility
    q({
        id: 'ax-1',
        topicId: 'accessibility',
        title: 'What makes a button accessible?',
        difficulty: 'Beginner',
        status: 'completed',
        simpleExplanation:
            'Use a real <button>, give it a clear name, ensure keyboard focus, and keep a visible focus style.',
        seniorExplanation:
            'Accessible buttons need name, role (native preferred), operable keyboard support, and state announcements when needed. Avoid div-onClick patterns; prefer primitives from Radix/shadcn.',
        simpleExample: '<button type="button" aria-pressed="false">Mute</button>',
        realProjectExample:
            'Our interview dashboard uses shadcn Button with focus-visible rings and aria-labels on icon-only controls (theme toggle, menu).',
        interviewAnswer:
            'I start with native elements, ensure accessible names, keyboard operability, and focus visibility — then add ARIA only when semantics are missing.',
    }),
    q({
        id: 'ax-2',
        topicId: 'accessibility',
        title: 'Heading hierarchy and landmarks',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'ax-3',
        topicId: 'accessibility',
        title: 'How do you test accessibility in CI?',
        difficulty: 'Advanced',
    }),
    q({
        id: 'ax-4',
        topicId: 'accessibility',
        title: 'Managing focus in modals and drawers',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),

    // SEO
    q({
        id: 'seo-1',
        topicId: 'seo',
        title: 'Metadata and Open Graph in Next.js',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'seo-2',
        topicId: 'seo',
        title: 'CSR vs SSR vs SSG for SEO',
        difficulty: 'Advanced',
    }),
    q({
        id: 'seo-3',
        topicId: 'seo',
        title: 'Structured data basics',
        difficulty: 'Intermediate',
    }),

    // Architecture
    q({
        id: 'fa-1',
        topicId: 'frontend-architecture',
        title: 'Feature-based folder structure trade-offs',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'fa-2',
        topicId: 'frontend-architecture',
        title: 'Where should business logic live?',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
    q({
        id: 'fa-3',
        topicId: 'frontend-architecture',
        title: 'Designing a scalable design system boundary',
        difficulty: 'Advanced',
    }),

    // Security
    q({
        id: 'sec-1',
        topicId: 'security',
        title: 'XSS prevention in React apps',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 'sec-2',
        topicId: 'security',
        title: 'CSRF and cookie strategies',
        difficulty: 'Advanced',
    }),
    q({
        id: 'sec-3',
        topicId: 'security',
        title: 'Handling secrets in frontend apps',
        difficulty: 'Intermediate',
    }),

    // Git & CI/CD
    q({
        id: 'gc-1',
        topicId: 'git-cicd',
        title: 'Conventional Commits and why they help',
        difficulty: 'Beginner',
        status: 'completed',
    }),
    q({
        id: 'gc-2',
        topicId: 'git-cicd',
        title: 'What belongs in a frontend CI pipeline?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    q({
        id: 'gc-3',
        topicId: 'git-cicd',
        title: 'Trunk-based vs long-lived feature branches',
        difficulty: 'Intermediate',
    }),

    // Leadership
    q({
        id: 'ld-1',
        topicId: 'leadership',
        title: 'How do you mentor junior frontend engineers?',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    q({
        id: 'ld-2',
        topicId: 'leadership',
        title: 'Driving technical decisions without authority',
        difficulty: 'Advanced',
    }),
    q({
        id: 'ld-3',
        topicId: 'leadership',
        title: 'Balancing quality vs delivery pressure',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),

    // Top 30 (subset for prototype)
    q({
        id: 't30-1',
        topicId: 'top-30',
        title: 'Explain React rendering and when components re-render',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    q({
        id: 't30-2',
        topicId: 'top-30',
        title: 'Design a performant infinite product list',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
    q({
        id: 't30-3',
        topicId: 'top-30',
        title: 'How would you architect a multi-tenant admin UI?',
        difficulty: 'Advanced',
    }),
    q({
        id: 't30-4',
        topicId: 'top-30',
        title: 'Debug a hydration mismatch in Next.js',
        difficulty: 'Advanced',
    }),
    q({
        id: 't30-5',
        topicId: 'top-30',
        title: 'Ship an accessible modal from scratch',
        difficulty: 'Intermediate',
    }),
];

export const getTopicById = (topicId: string): ITopic | undefined => {
    return TOPICS.find((topic) => topic.id === topicId);
};

export const getQuestionsByTopic = (topicId: string): IQuestion[] => {
    return QUESTIONS.filter((question) => question.topicId === topicId);
};

export const getQuestionById = (topicId: string, questionId: string): IQuestion | undefined => {
    return QUESTIONS.find((question) => question.topicId === topicId && question.id === questionId);
};

export const getAdjacentQuestionIds = (
    topicId: string,
    questionId: string,
): { previousId: string | null; nextId: string | null } => {
    const questions = getQuestionsByTopic(topicId);
    const index = questions.findIndex((question) => question.id === questionId);

    if (index === -1) {
        return { previousId: null, nextId: null };
    }

    return {
        previousId: index > 0 ? questions[index - 1].id : null,
        nextId: index < questions.length - 1 ? questions[index + 1].id : null,
    };
};

export const searchQuestions = (query: string): IQuestion[] => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return [];
    }

    return QUESTIONS.filter((question) => {
        const topic = getTopicById(question.topicId);
        return (
            question.title.toLowerCase().includes(normalized) ||
            topic?.name.toLowerCase().includes(normalized) ||
            question.difficulty.toLowerCase().includes(normalized)
        );
    }).slice(0, 8);
};

export const getTopicSections = (): ITopicSectionGroup[] => {
    return SECTION_ORDER.map((section) => ({
        section,
        topics: TOPICS.filter((topic) => topic.section === section).map((topic) => {
            const questions = getQuestionsByTopic(topic.id);
            return {
                ...topic,
                questionCount: questions.length,
                completedCount: questions.filter((item) => item.status === 'completed').length,
            };
        }),
    })).filter((group) => group.topics.length > 0);
};

export const getTopicsWithCounts = (): ITopic[] => {
    return TOPICS.map((topic) => {
        const questions = getQuestionsByTopic(topic.id);
        return {
            ...topic,
            questionCount: questions.length,
            completedCount: questions.filter((item) => item.status === 'completed').length,
        };
    });
};

export const getGlobalProgressFromBase = (): {
    total: number;
    completed: number;
    percent: number;
} => {
    const total = QUESTIONS.length;
    const completed = QUESTIONS.filter((question) => question.status === 'completed').length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, percent };
};
