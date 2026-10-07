import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const codingTaskQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ct-1',
        topicId: 'coding-task',
        title: 'Write a JavaScript function to reverse a string.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `Input: "hello"
                        Output: "olleh"`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `"olleh"`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const reverseString = (str) => {
                            return str.split('').reverse().join('');
                            };

                            console.log(reverseString('hello'));
                            // "olleh"`,
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
                        type: 'heading',
                        text: 'We use 3 methods',
                    },
                    {
                        type: 'bullets',
                        items: [
                            "`str.split('')` - **Converts the string into an array** => `hello - ['h', 'e', 'l', 'l', 'o']`",
                            "`.reverse()` - **Reverses the array** => `['h', 'e', 'l', 'l', 'o'] - ['o', 'l', 'l', 'e', 'h']`",
                            "`.join('')` - **Joins the array back into a string** => `['o', 'l', 'l', 'e', 'h'] - 'olleh'`",
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**So the flow is:**',
                    },
                    {
                        type: 'code',
                        text: `"hello"
                            ↓
                            split('')
                            ↓
                            ["h", "e", "l", "l", "o"]
                            ↓
                            reverse()
                            ↓
                            ["o", "l", "l", "e", "h"]
                            ↓
                            join('')
                            ↓
                            "olleh"`,
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
                        text: '**Can you do it without reverse()?**',
                    },
                    {
                        type: 'code',
                        text: `const reverseString = (str) => {
                                let result = '';

                                for (let i = str.length - 1; i >= 0; i--) {
                                    result += str[i];
                                }

                                return result;
                                };`,
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-2',
        topicId: 'coding-task',
        title: 'Write a JavaScript function to remove duplicate values from an array.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const numbers = [1, 2, 2, 3, 3, 4, 5, 5];`,
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
                        text: `const removeDuplicates = (numbers) => {
                            return [...new Set(numbers)];
                            };

                            console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5]));
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
                            'First, we create a `Set:` - `new Set([1, 2, 2, 3, 3, 4])`',
                            'A `Set` stores only unique values: - `Set { 1, 2, 3, 4 }`',
                            'Then we use the spread operator: - `[...new Set(numbers)]`',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**So the flow is:**',
                    },
                    {
                        type: 'code',
                        text: `[1, 2, 2, 3, 3, 4]
                                ↓
                            new Set()
                                ↓
                            {1, 2, 3, 4}
                                ↓
                                [...Set]
                                ↓
                            [1, 2, 3, 4]`,
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
                        text: '**Does Set work for objects?**',
                    },
                    {
                        type: 'paragraph',
                        text: '**For Example:**',
                    },
                    {
                        type: 'code',
                        text: `const users = [
                            { id: 1, name: 'John' },
                            { id: 1, name: 'John' }
                            ];

                            console.log([...new Set(users)]);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The duplicate objects are not removed, because JavaScript compares objects by reference.',
                    },
                    {
                        type: 'heading',
                        text: `For objects, we can use the object's ID:`,
                    },
                    {
                        type: 'code',
                        text: `const uniqueUsers = [
                            ...new Map(users.map(user => [user.id, user])).values()
                            ];

                            console.log(uniqueUsers);`,
                    },
                    {
                        type: 'heading',
                        text: '**For your interview, remember:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Primitive values** -> `Set` is simple',
                            '**Objects** -> usually use `Map` or `filter` with a `Set` of IDs',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-3',
        topicId: 'coding-task',
        title: 'Find Duplicate Objects by ID',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const users = [
                            { id: 1, name: 'John' },
                            { id: 2, name: 'David' },
                            { id: 1, name: 'John' },
                            { id: 3, name: 'Sam' },
                            { id: 2, name: 'David' }
                            ];`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `[
                            { id: 1, name: 'John' },
                            { id: 2, name: 'David' }
                            ]`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'link',
                        text: 'https://onecompiler.com/javascript/45597uk4q',
                    },
                    {
                        type: 'code',
                        text: `const findDuplicates = (users) => {
                            const seen = new Set();
                            const duplicates = new Set();

                            users.forEach((user) => {
                                if (seen.has(user.id)) {
                                duplicates.add(user.id);
                                } else {
                                seen.add(user.id);
                                }
                            });

                            return users.filter((user, index) => {
                                return duplicates.has(user.id) &&
                                users.findIndex(item => item.id === user.id) === index;
                            });
                            };

                            console.log(findDuplicates(users));`,
                    },
                    {
                        type: 'code',
                        text: `[
                            { id: 1, name: 'John' },
                            { id: 2, name: 'David' }
                            ]`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step-by-step Explanation:**',
                    },
                    {
                        type: 'heading',
                        text: 'Step 1: Create two Sets.',
                    },
                    {
                        type: 'code',
                        text: `const seen = new Set();
                               const duplicates = new Set();`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'seen stores IDs that we have already visited.',
                            'duplicates stores IDs that appear more than once.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: `Step 2: Check every object's ID.`,
                    },
                    {
                        type: 'code',
                        text: `users.forEach((user) => {
                                if (seen.has(user.id)) {
                                    duplicates.add(user.id);
                                } else {
                                    seen.add(user.id);
                                }
                                });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Step 3: Return the duplicate objects.',
                    },
                    {
                        type: 'code',
                        text: `return users.filter((user, index) => {
                            return duplicates.has(user.id) &&
                                users.findIndex(item => item.id === user.id) === index;
                            });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'duplicates.has(user.id) checks whether the ID is duplicated.',
                            'findIndex() ensures we return only the first occurrence of each duplicated ID.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**So the flow is:**',
                    },
                    {
                        type: 'code',
                        text: `[1, 2, 2, 3, 3, 4]
                                ↓
                            new Set()
                                ↓
                            {1, 2, 3, 4}
                                ↓
                                [...Set]
                                ↓
                            [1, 2, 3, 4]`,
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
                        text: '**Does Set work for objects?**',
                    },
                    {
                        type: 'paragraph',
                        text: '**For Example:**',
                    },
                    {
                        type: 'code',
                        text: `const users = [
                            { id: 1, name: 'John' },
                            { id: 1, name: 'John' }
                            ];

                            console.log([...new Set(users)]);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The duplicate objects are not removed, because JavaScript compares objects by reference.',
                    },
                    {
                        type: 'heading',
                        text: `For objects, we can use the object's ID:`,
                    },
                    {
                        type: 'code',
                        text: `const uniqueUsers = [
                            ...new Map(users.map(user => [user.id, user])).values()
                            ];

                            console.log(uniqueUsers);`,
                    },
                    {
                        type: 'heading',
                        text: '**For your interview, remember:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Primitive values** -> `Set` is simple',
                            '**Objects** -> usually use `Map` or `filter` with a `Set` of IDs',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-4',
        topicId: 'coding-task',
        title: 'Find the maximum and minimum value from an array.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const numbers = [10, 5, 30, 2, 50, 15];`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `{ max: 50, min: 2 }`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const findMaxMin = (numbers) => {
                            return {
                                max: Math.max(...numbers),
                                min: Math.min(...numbers)
                            };
                            };

                            console.log(findMaxMin(numbers));
                            // { max: 50, min: 2 }`,
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
                            '`Math.max(...numbers)` - finds the maximum value in the array.',
                            '`Math.min(...numbers)` finds the minimum value in the array.',
                            'The `...` is the spread operator, which passes the array values as individual arguments to the `Math.max()` and `Math.min()` functions.',
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
        id: 'ct-5',
        topicId: 'coding-task',
        title: 'Count how many times each character appears in a string.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const str = "hello";`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: `{
                                h: 1,
                                e: 1,
                                l: 2,
                                o: 1
                                }`,
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const countCharacters = (str) => {
                                const count = {};

                                for (const char of str) {
                                    count[char] = (count[char] || 0) + 1;
                                }

                                return count;
                                };

                                console.log(countCharacters("hello"));`,
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
                            '`{}` - Start with an empty object',
                            'Read each character: `h → 1, e → 1, l → 1, l → 2, o → 1`',
                            'Final Result: `{ h → 1, e → 1, l → 1, l → 2, o → 1 }`',
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
