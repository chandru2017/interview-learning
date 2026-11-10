import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const hrQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'hr-1',
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
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'My notice period is completed, and I am available for immediate joining.',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'hr-2',
        topicId: 'hr',
        title: 'Why are you looking for a job change?',
        difficulty: 'Advanced',
        status: 'completed',
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Unakku better career growth venum, challenging projects-la work pannanum. Adhanala new opportunity thedurenu short-ah sollanum.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'I was looking for better career growth and opportunities to work on challenging projects.',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'hr-3',
        topicId: 'hr',
        title: 'Are you currently working?',
        difficulty: 'Advanced',
        status: 'completed',
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Ippo nee previous company-la work pannala. Notice period complete aagiduchu nu direct-ah sollanum.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'No, I have completed my notice period, and I am currently available for immediate joining.',
                    },
                ],
            },
        ],
    }),
];
