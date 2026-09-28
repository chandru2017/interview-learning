import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const aboutExperienceQuestions: IQuestion[] = [
    createQuestion({
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
    createQuestion({
        id: 'ae-2',
        topicId: 'about-experience',
        title: 'How do you handle disagreement on technical direction?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    createQuestion({
        id: 'ae-3',
        topicId: 'about-experience',
        title: 'Describe a time you improved team delivery quality',
        difficulty: 'Intermediate',
    }),
];
