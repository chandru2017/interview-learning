import type { IQuestion } from '@/types';

// import { createQuestion } from './create-question';

export const accessibilityQuestions: IQuestion[] = [
    // createQuestion({
    //     id: 'ax-1',
    //     topicId: 'accessibility',
    //     title: 'What makes a button accessible?',
    //     difficulty: 'Beginner',
    //     status: 'completed',
    //     simpleExplanation:
    //         'Use a real <button>, give it a clear name, ensure keyboard focus, and keep a visible focus style.',
    //     seniorExplanation:
    //         'Accessible buttons need name, role (native preferred), operable keyboard support, and state announcements when needed. Avoid div-onClick patterns; prefer primitives from Radix/shadcn.',
    //     simpleExample: '<button type="button" aria-pressed="false">Mute</button>',
    //     realProjectExample:
    //         'Our interview dashboard uses shadcn Button with focus-visible rings and aria-labels on icon-only controls (theme toggle, menu).',
    //     interviewAnswer:
    //         'I start with native elements, ensure accessible names, keyboard operability, and focus visibility — then add ARIA only when semantics are missing.',
    // }),
];
