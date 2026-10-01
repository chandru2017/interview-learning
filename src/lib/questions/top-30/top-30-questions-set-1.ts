import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 't30-1',
        topicId: 'top-30',
        title: 'Explain the JavaScript Event Loop',
        difficulty: 'Advanced',
        status: 'in-progress',
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
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: `E-Commerce website - Add to cart button`,
                    },
                    {
                        type: 'code',
                        text: `button.addEventListener('click', () => {
                            console.log('Button clicked');                    // Sync - runs now
                            
                            fetch('/api/add-to-cart', {data})                 // Async - goes to Web API
                                .then(response => response.json())            // Microtask queue
                                .then(data => updateCartUI(data));            // Runs after microtasks
                            
                            updateBadgeNumber();                              // Sync - runs now
                        });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The button click runs immediately.',
                            'The API call goes to the background. Badge updates right away.',
                            'When the API returns, it updates the cart UI.',
                        ],
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
                            'The event loop is how JavaScript runs code and handles asynchronous operations. ',
                            'The call stack executes synchronous code. ',
                            'When the stack is empty, the event loop checks the microtask queue first (Promises). ',
                            'After all microtasks, it takes one task from the task queue (setTimeout). ',
                            'Then repeats. Microtasks have higher priority. ',
                            'Understanding the event loop helps us debug async issues. ',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['event loop', 'call stack', 'microtask queue', 'task queue', 'asynchronous operations'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'top30-2',
        topicId: 'top-30',
        title: 'What are closures? Give a real-world example.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A closure is when a function remembers and can access variables from the scope where it was created, even after that scope is finished.',
                            'Inner functions are closures.',
                            'They can access variables from their parent function even after the parent returns.',
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
                            'A closure is a function that retains access to variables from its lexical scope, even after that scope finishes executing.',
                            'Created every time a function is created.',
                            '**Used for:** data privacy (creating private variables), function factories, callbacks, event handlers.',
                            'Closures can cause memory issues if not managed - if you hold references to closures that reference large objects, those objects stay in memory.',
                            'Essential for React hooks (useState, useCallback use closures).',
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
                        text: `function counter() {
                                let count = 0;
                                return function increment() {
                                    count++;
                                    return count;
                                };
                            }
                            const myCounter = counter();
                            console.log(myCounter()); // 1
                            console.log(myCounter()); // 2`,
                    },
                    {
                        type: 'highlight',
                        text: `increment is a closure - it remembers count from counter's scope. Each call increments the same count variable.`,
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
                        text: `In Archer Review, we used closures in form handling where functions remembered the form ID. In callbacks, closures closed over the request ID to match responses. In React, useCallback hooks use closures to maintain stable function references.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A bakery owner (outer function) creates a secret recipe with ingredient count (variable). ',
                            'The owner hires a baker (inner function/closure). ',
                            'The owner goes home, but the baker remembers the recipe. ',
                            "The baker is the closure - it remembers even though the owner isn't there.",
                        ],
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
                            'A closure is a function that remembers variables from where it was created. ',
                            'Inner functions are closures. ',
                            "They can access outer function's variables even after the outer function finishes. ",
                            'Very important in JavaScript - we use them in callbacks, event handlers, and React hooks. ',
                            'They allow us to create private variables.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'top30-3',
        topicId: 'top-30',
        title: 'Explain Promises and async/await.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A Promise represents the result of an asynchronous operation. ',
                            'It can be pending, fulfilled, or rejected. ',
                            'async/await is a cleaner way to work with Promises. ',
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
                            'Promises provide a standard way to handle asynchronous operations.',
                            'async/await improves readability.',
                            'try/catch can be used for error handling.',
                            'Async operations should not block the UI.',
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
                        text: `const getUser = async () => {
                            const response = await fetch("/api/user");
                            return response.json();
                        };`,
                    },
                    {
                        type: 'highlight',
                        text: `await waits for the Promise result inside the async function.`,
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
                        text: `In Archer Review, async/await can be used to call student, course, or video APIs and update the UI with the result.`,
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
                            'A Promise represents the future result of an asynchronous operation. ',
                            'async/await provides a cleaner syntax for working with Promises. ',
                            'I normally use try/catch for error handling and make sure API operations do not block the UI.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['promises', 'async/await', 'error handling', 'asynchronous operations'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'top30-4',
        topicId: 'top-30',
        title: 'Explain debounce vs throttle.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Debounce runs a function after the user stops an action. ',
                            'Throttle limits how often a function runs during a continuous action. ',
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
                            'Debounce is useful when only the final action matters.',
                            'Search input is a common debounce example.',
                            'Throttle is useful for continuous events.',
                            'Scroll and resize are common throttle examples.',
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
                        text: `function debounce(func, delay) {
                            let timeoutId;
                            return function(...args) {
                                clearTimeout(timeoutId);
                                timeoutId = setTimeout(() => {
                                func.apply(this, args);
                                }, delay);
                            };
                            }
                            const debouncedSearch = debounce((query) => {
                            console.log('Searching:', query);
                            }, 500);
                            input.addEventListener('input', (e) => debouncedSearch(e.target.value));`,
                    },
                    {
                        type: 'highlight',
                        text: `The API call waits until the user stops typing for 300ms.`,
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
                        text: `For an Archer Review search feature, I would debounce the search API so we do not send a request for every keyboard input.`,
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
                            'Debounce waits until the user stops an action before running the function. ',
                            'Throttle limits the function to run at a fixed interval. ',
                            'I use debounce for search inputs and throttle for events like scroll or resize.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['debounce', 'throttle', 'search input', 'scroll', 'resize'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'top30-5',
        topicId: 'top-30',
        title: 'Explain JavaScript memory leaks.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A memory leak happens when JavaScript keeps memory that the application no longer needs. ',
                            'Over time, this can make the application slow. ',
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
                            'Common causes include event listeners and timers.',
                            'Subscriptions should be cleaned up.',
                            'Closures can accidentally keep large objects alive.',
                            'Browser memory profiling helps identify leaks.',
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
                        text: `useEffect(() => {
                            const handler = () => {};
                            window.addEventListener("resize", handler);

                            return () => window.removeEventListener("resize", handler);
                        }, []);`,
                    },
                    {
                        type: 'highlight',
                        text: `The cleanup removes the event listener when the component is removed.`,
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
                        text: `In an Archer Review video or student dashboard component, timers, subscriptions, and event listeners should be cleaned up when the component unmounts.`,
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
                            'A memory leak happens when unused objects remain referenced and cannot be garbage collected. ',
                            'In React, common causes are event listeners, timers, subscriptions, and incorrect cleanup. ',
                            'I use proper cleanup and browser profiling tools to identify leaks.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: ['memory', 'Garbage Collection', 'cleanup', 'Listener'],
                    },
                ],
            },
        ],
    }),
];
