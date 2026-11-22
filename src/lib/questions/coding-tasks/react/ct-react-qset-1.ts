import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const codingTaskReactQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ct-react-1',
        topicId: 'react-task',
        title: 'Create a useFetch Hook to Display Users',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'link',
                        text: 'https://onecompiler.com/react/459wdqkdq',
                    },
                ],
            },
        ],
        requirements: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Create a React custom hook called useFetch to call the API below. Use this hook in a component to display the users' names.`,
                    },
                    {
                        type: 'paragraph',
                        text: '**API:** https://jsonplaceholder.typicode.com/users',
                    },
                    {
                        type: 'paragraph',
                        text: '**Requirements:**',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Return data, loading, and error from the custom hook.',
                            'Display "Loading..." while fetching data.',
                            'Display an error message if the API call fails.',
                            'Display the users names in a list after fetching successfully.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Please use the code editor to write your solution.',
                    },
                ],
            },
        ],
    }),
];
