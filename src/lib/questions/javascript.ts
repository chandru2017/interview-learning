import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const javascriptQuestions: IQuestion[] = [
    createQuestion({
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
    createQuestion({
        id: 'js-2',
        topicId: 'javascript',
        title: 'Event loop: microtasks vs macrotasks',
        difficulty: 'Advanced',
        status: 'completed',
    }),
    createQuestion({
        id: 'js-3',
        topicId: 'javascript',
        title: 'Difference between == and ===',
        difficulty: 'Beginner',
        status: 'in-progress',
    }),
    createQuestion({
        id: 'js-4',
        topicId: 'javascript',
        title: 'How does prototypal inheritance work?',
        difficulty: 'Advanced',
    }),
    createQuestion({
        id: 'js-5',
        topicId: 'javascript',
        title: 'Debounce vs throttle — use cases',
        difficulty: 'Intermediate',
        status: 'completed',
    }),
    createQuestion({
        id: 'js-6',
        topicId: 'javascript',
        title: 'Explain promises and async/await error handling',
        difficulty: 'Intermediate',
    }),
];
