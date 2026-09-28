import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const accessibilityQuestions: IQuestion[] = [
    createQuestion({
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
    createQuestion({
        id: 'ax-2',
        topicId: 'accessibility',
        title: 'Heading hierarchy and landmarks',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    createQuestion({
        id: 'ax-3',
        topicId: 'accessibility',
        title: 'How do you test accessibility in CI?',
        difficulty: 'Advanced',
    }),
    createQuestion({
        id: 'ax-4',
        topicId: 'accessibility',
        title: 'Managing focus in modals and drawers',
        difficulty: 'Advanced',
        status: 'in-progress',
    }),
];
