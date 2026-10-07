import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const codingTaskQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'ct-6',
        topicId: 'coding-task',
        title: 'Check whether a string is a palindrome.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A palindrome reads the same from left to right and right to left.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `madam → true
                        level → true
                        hello → false`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `madam → true
                        level → true
                        hello → false`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const isPalindrome = (str) => {
                            const reversed = str.split('').reverse().join('');

                            return str === reversed;
                            };

                            console.log(isPalindrome('madam'));
                            // true

                            console.log(isPalindrome('hello'));
                            // false`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'For `madam`',
                            'Reverse it: `madam → madam`',
                            'Compare: `str === reversed`',
                            'Both are the same, so the result is: `true`',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://onecompiler.com/javascript/45597uk4q',
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ct-7',
        topicId: 'coding-task',
        title: 'Flatten an Array.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Convert a nested array into a single-level array.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const numbers = [1, [2, 3], [4, 5]];`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `[1, 2, 3, 4, 5]`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const numbers = [1, [2, [3, 4]], 5];
                            console.log(numbers.flat(Infinity));
                            // [1, 2, 3, 4, 5]`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`flat()` removes one level of nesting: [1, [2, 3], [4, 5]] -> [1, 2, 3, 4, 5]',
                            'For unknown/deep nesting: `flat(Infinity)` flattens all levels',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://onecompiler.com/javascript/45597uk4q',
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ct-6',
        topicId: 'coding-task',
        title: 'Group Objects by Property',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Group objects based on a property.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const products = [
                            { name: 'Laptop', category: 'Electronics' },
                            { name: 'Phone', category: 'Electronics' },
                            { name: 'Shirt', category: 'Clothing' }
                            ];`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `{
                                Electronics: [
                                    { name: 'Laptop', category: 'Electronics' },
                                    { name: 'Phone', category: 'Electronics' }
                                ],
                                Clothing: [
                                    { name: 'Shirt', category: 'Clothing' }
                                ]
                            }`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const groupByCategory = (products) => {
                                return products.reduce((result, product) => {
                                    const category = product.category;

                                    if (!result[category]) {
                                    result[category] = [];
                                    }

                                    result[category].push(product);

                                    return result;
                                }, {});
                                };

                                console.log(groupByCategory(products));`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`{}` - We start with an empty object',
                            'First product: Electronics → [Laptop]',
                            'Second product: Electronics → [Laptop, Phone]',
                            'Third product: Clothing → [Shirt]',
                            'Final Result: { Electronics: [Laptop, Phone], Clothing: [Shirt] }',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://onecompiler.com/javascript/45597uk4q',
                    },
                ],
            },
        ],
    }),
];
