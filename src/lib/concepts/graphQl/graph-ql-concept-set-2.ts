import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const graphQlConceptSet2: IQuestion[] = [
    createQuestion({
        id: 'graph-ql-6',
        topicId: 'graph-ql',
        title: 'Explain GraphQL Error Handling',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'medium',
        simpleExample: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Error Types',
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'GraphQL-la important-ah 3 types of errors understand pannikanum.',
                            toolA: 'Error Type',
                            toolB: 'Meaning',
                            comparison: [
                                {
                                    toolA: 'Network Error',
                                    toolB: 'Server unavailable, connection failure',
                                },
                                {
                                    toolA: 'GraphQL Error',
                                    toolB: 'Query/resolver/schema-related error',
                                },
                                {
                                    toolA: 'Validation Error',
                                    toolB: 'Invalid query or incorrect variables',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Network Error**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Server connect aagala or network failure.',
                    },
                    {
                        type: 'paragraph',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: ['Server down.', 'Internet disconnected.', 'Request timeout.'],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**GraphQL Error**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Request server reach aagum, but query execution-la error varalam.',
                    },
                    {
                        type: 'paragraph',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: ['Student not found.', 'Resolver failure.', 'Permission issue.'],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Validation Error**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Query schema-ku match aagala.',
                    },
                    {
                        type: 'paragraph',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: ['Invalid field name.', 'Wrong argument type.', 'Required variable missing.'],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Apollo Error Handling Example**',
                    },
                    {
                        type: 'code',
                        text: `const { data, loading, error } =
                            useQuery(GET_STUDENTS);

                            if (loading) {
                            return <p>Loading students...</p>;
                            }

                            if (error) {
                            return <p>{error.message}</p>;
                            }

                            return <StudentList students={data.students} />;`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Apollo Client-la error details access panni UI-la appropriate message display pannalam.',
                    },
                ],
            },
        ],
    }),
];
