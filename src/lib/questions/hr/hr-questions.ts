import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const hrQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ae-1',
        topicId: 'hr',
        title: 'What is your notice period?',
        difficulty: 'Advanced',
        status: 'completed',
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Unnudaiya notice period already complete aagiduchu. So nee ippo company-la work pannala, immediate-ah join panna ready-ah irukka nu sollanum.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'My notice period is completed, and I am available for immediate joining.',
                    },
                ],
            },
        ],
    }),
];
