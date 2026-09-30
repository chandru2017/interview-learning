import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const highestPriorityPart1Questions: IQuestion[] = [
    createQuestion({
        id: 't30-1',
        topicId: 'top-30',
        title: 'Explain the JavaScript Event Loop',
        difficulty: 'Advanced',
        status: 'completed',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'The **JavaScript Event Loop** helps JavaScript handle **asynchronous tasks** without blocking the main thread.',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'JavaScript runs one task at a time using the **Call Stack**.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'When an async task like `setTimeout`, API call, or Promise is completed, its callback waits in a queue.',
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'The **Event Loop** checks:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Is the Call Stack empty?',
                            'If yes, take the waiting task and put it into the Call Stack.',
                            'Then JavaScript executes it.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple flow:**',
                    },
                    {
                        type: 'bullets',
                        items: ['`Call Stack → Web APIs → Queue → Event Loop → Call Stack`'],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'The Event Loop is the mechanism that coordinates the **Call Stack, task queues, and asynchronous browser APIs.**',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'JavaScript is single-threaded, but the Event Loop allows it to handle asynchronous operations efficiently.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'An important point is that **microtasks** such as Promise callbacks have higher priority than regular **macrotasks** such as `setTimeout`.',
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
                        text: 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");`',
                    },
                    {
                        type: 'heading',
                        text: 'Output:',
                    },
                    {
                        type: 'code',
                        text: 'A\nD\nC\nB',
                    },
                ],
            },
        ],
    }),
];
