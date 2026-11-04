import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'one-india-6',
        topicId: 'one-india',
        title: 'What is a Closure in JavaScript?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Closure means an inner function can remember and access variables from its outer function, even after the outer function has finished executing.',
                            'Simple-ah sonna, function close aana pinnadiyum adhu use panna variables-ai remember pannum.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Closures are created when functions are defined inside another scope.',
                            'The inner function retains access to its lexical environment.',
                            'Closures help with data privacy and maintaining state.',
                            'They are useful in callbacks, event handlers and custom hooks.',
                        ],
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
                        text: `const counter = () => {
                            let count = 0;

                            return () => {
                                count++;
                                return count;
                            };
                            };

                            const increment = counter();

                            console.log(increment()); // 1
                            console.log(increment()); // 2`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The inner function remembers the count variable even after counter() has returned.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Closures are useful in event handlers, callbacks, and functions that maintain private state. For example, a reusable function can remember a configuration value without exposing it globally.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A closure is a feature in JavaScript where an inner function remembers and accesses variables from its outer function, even after the outer function has completed execution.',
                            'Closures are useful for maintaining private data, creating callbacks, and managing state.',
                            'For example, a counter function can maintain its value between multiple function calls without using a global variable.',
                            'Closures are also important for understanding React hooks and JavaScript event handlers.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-7',
        topicId: 'one-india',
        title: 'What is the difference between == and ===?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '== checks values after type conversion when needed.',
                            '- === checks both value and data type without type conversion.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript uses type coercion with loose equality (==). Strict equality (===) avoids this implicit conversion.',
                        ],
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
                        text: `console.log(5 == "5");  // true
                            console.log(5 === "5"); // false`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In React applications, I prefer strict equality to avoid unexpected type conversion when comparing API response values, IDs, and state values.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'The main difference between double equals and triple equals is type conversion.',
                            'Double equals compares values after performing type coercion when required.',
                            'Triple equals compares both value and data type without type coercion.',
                            'For example, 5 == "5" returns true, but 5 === "5" returns false.',
                            'I generally prefer strict equality because it makes comparisons more predictable.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-8',
        topicId: 'one-india',
        title: 'What are map, filter, and reduce?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'These are JavaScript array methods.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**map() –** Transforms every element.',
                            '**filter() –** Selects elements based on a condition.',
                            '**reduce() –** Combines elements into a single result.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'These methods help us write clean and declarative code without manually managing loops.',
                            'They are commonly used for API data transformation, filtering lists and calculating totals.',
                        ],
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
                        text: `const prices = [100, 200, 300];

                            const updated = prices.map(price => price * 2);
                            const filtered = prices.filter(price => price > 100);
                            const total = prices.reduce((sum, price) => sum + price, 0);`,
                    },
                    {
                        type: 'bullets',
                        items: ['updated = [200, 400, 600]', 'filtered = [200, 300]', 'total = 600'],
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `In an application like Archer Review, I can use map() to display a list of courses, filter() to show courses based on a category, and reduce() to calculate totals.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Map, filter, and reduce are JavaScript array methods.',
                            'Map transforms each element and returns a new array.',
                            'Filter returns a new array containing only elements that match a condition.',
                            'Reduce processes all elements and returns a single result, such as a total value.',
                            'I commonly use these methods to transform API data, filter records, and calculate values in React applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-9',
        topicId: 'one-india',
        title: 'What is the difference between Promise and async/await?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Both are used to handle asynchronous operations in JavaScript.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Promise represents a future result of an asynchronous operation.',
                            'Async/await provides a cleaner way to work with Promises.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A Promise has three states:',
                    },
                    {
                        type: 'bullets',
                        items: ['Pending', 'Fulfilled', 'Rejected'],
                    },
                    {
                        type: 'paragraph',
                        text: 'Async functions always return a Promise. Await pauses execution inside the async function until the awaited Promise settles. It does not block the entire JavaScript thread.',
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
                        text: `const getUsers = async () => {
                            try {
                                const response = await fetch("/api/users");
                                const data = await response.json();
                                return data;
                            } catch (error) {
                                console.error(error);
                            }
                            };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, await waits for the API response, and try/catch handles errors.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `I use async/await when integrating REST APIs in React applications. I handle loading, success, and error states to provide a better user experience.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A Promise is an object that represents the future result of an asynchronous operation.',
                            'It has three states: pending, fulfilled, and rejected.',
                            'Async and await provide a cleaner way to handle Promises.',
                            'I use async/await with try/catch for API integration because it makes asynchronous code easier to read and maintain.',
                            'In React applications, I use it to fetch API data and handle success and error scenarios.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-10',
        topicId: 'one-india',
        title: 'What is the JavaScript Event Loop?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'javascript-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript executes synchronous code first.',
                            'Asynchronous callbacks are handled later through the event loop.',
                            'Think of it like a queue system: first JavaScript completes its current work, then it processes waiting callbacks.',
                        ],
                    },
                ],
            },
        ],
        seniorExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'The main parts are:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Call Stack – Executes JavaScript functions.',
                            'Web APIs – Handle browser operations like timers and events.',
                            'Task Queue – Holds callbacks such as setTimeout.',
                            'Microtask Queue – Holds Promise callbacks.',
                            'Event Loop – Coordinates when queued callbacks can execute.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Microtasks are generally processed before the next task.',
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
                        text: `console.log("Start");

                            setTimeout(() => console.log("Timer"), 0);

                            Promise.resolve().then(() => console.log("Promise"));

                            console.log("End");`,
                    },
                    {
                        type: 'heading',
                        text: 'Output',
                    },
                    {
                        type: 'code',
                        text: `Start
                            End
                            Promise
                            Timer`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Understanding the event loop helps me understand API callbacks, Promise execution, UI responsiveness and asynchronous operations in React applications.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'The event loop is a mechanism that manages synchronous and asynchronous code execution in JavaScript.',
                            'JavaScript first executes synchronous code in the call stack.',
                            'Asynchronous operations are handled by browser APIs or other runtime APIs.',
                            'When callbacks are ready, they are placed in the microtask or task queue.',
                            'The event loop checks whether the call stack is empty and schedules the queued callbacks.',
                            'Promise callbacks are processed before regular timer callbacks in the standard example.',
                        ],
                    },
                ],
            },
        ],
    }),
];
