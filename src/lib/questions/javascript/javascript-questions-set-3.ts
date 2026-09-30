import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'js-11',
        topicId: 'javascript',
        title: 'Explain the JavaScript Event Loop.',
        difficulty: 'Intermediate',
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
        id: 'js-12',
        topicId: 'javascript',
        title: 'What is the difference between the Call Stack, Task Queue, and Microtask Queue?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "**Call stack:** JavaScript code that's currently running.",
                            '**Task queue:** tasks waiting to run, like setTimeout.',
                            '**Microtask queue:** high-priority tasks waiting to run, like Promises.',
                            'When call stack is empty, microtasks run first. Then one task runs. ',
                            'Then back to microtasks. The microtask queue has higher priority. ',
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
                            '**Call Stack:** stores function execution contexts in LIFO order. When a function is called, a frame is added. ',
                            'When it returns, the frame is removed. When the stack is empty, the event loop can process other tasks. ',
                            '**Task Queue (Macrotask Queue):** contains callbacks from setTimeout, setInterval, setImmediate, I/O operations, UI rendering. ',
                            '**Microtask Queue:** contains Promises (then, catch, finally), queueMicrotask, MutationObserver callbacks. ',
                            '**Processing order:** Call stack executes all synchronous code → Microtask queue executes all waiting microtasks → Task queue executes one task → back to microtask queue.',
                            'Microtasks have higher priority than tasks - all microtasks execute before any task. ',
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
                        text: `console.log('1: sync');
                            setTimeout(() => console.log('2: task'), 0);
                            Promise.resolve()
                            .then(() => console.log('3: microtask 1'))
                            .then(() => console.log('4: microtask 2'));
                            console.log('5: sync 2');
                            // Order: 1, 5, 3, 4, 2`,
                    },
                    {
                        type: 'highlight',
                        text: 'Sync code runs first (1, 5). Then all microtasks (3, 4). Then one task (2). Microtasks have higher priority than setTimeout.',
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
                        text: 'In Archer Review, we had complex async flows. API responses (Promises) always ran before UI updates (setTimeout). Understanding the queue priority helped us ensure state updates happened at the right time.',
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Three lines at a bank. The teller is working (call stack). When she's done with one customer, she checks the VIP line (microtask queue) first. If empty, she checks the regular line (task queue) for one customer. Then back to VIP line. VIP line is always more important.`,
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
                            'The call stack executes synchronous code. ',
                            'The microtask queue contains Promises and has high priority. ',
                            'The task queue contains setTimeout and setInterval and has lower priority. ',
                            'When the call stack is empty, all microtasks run first. Then one task runs. Then back to microtasks. ',
                            'Understanding these queues helps us predict the execution order of async code. ',
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
                        items: ['call stack', 'microtask queue', 'task queue', 'priority', 'execution order'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-13',
        topicId: 'javascript',
        title: 'What is the execution order of `Promise`, `setTimeout`, and synchronous code?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Synchronous code runs first. ',
                            'Then Promises (microtasks) run. ',
                            'Then setTimeout (tasks) run. ',
                            'This is because Promises are microtasks and have higher priority than setTimeout tasks. ',
                            'If you have multiple Promises and setTimeouts, Promises run first, then one setTimeout. ',
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
                        type: 'heading',
                        text: 'Execution order follows the event loop priority:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Synchronous code executes completely first. ',
                            'When the call stack is empty, all Promises (microtasks) in the microtask queue execute. ',
                            'After all microtasks are done, the event loop takes one task from the task queue and executes it. ',
                            'After the task, check microtask queue again (Promises added during the task). ',
                            'Then the next task. This is why Promises resolve before setTimeout, even if setTimeout is called first. Nested Promises all execute before any setTimeout. UI rendering happens between tasks, not between microtasks.',
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
                        text: `console.log('sync 1');
                            setTimeout(() => {
                            console.log('timeout 1');
                            Promise.resolve().then(() => console.log('promise in timeout'));
                            }, 0);
                            Promise.resolve()
                            .then(() => console.log('promise 1'))
                            .then(() => console.log('promise 2'));
                            console.log('sync 2');
                            // Order: sync 1, sync 2, promise 1, promise 2, timeout 1, promise in timeout`,
                    },
                    {
                        type: 'highlight',
                        text: `Synchronous code first (sync 1, 2). Then all Promises (promise 1, 2). Then setTimeout runs, and Promises created inside it run after.`,
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
                        text: `In Archer Review, we had API calls (Promises) and UI updates (setTimeout). Understanding execution order ensured API responses updated state before UI changes rendered. This prevented race conditions.`,
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
                            "You're in a meeting. First, finish talking (sync code). ",
                            'Then answer all emails (Promises). Then take one phone call (setTimeout). ',
                            'If the phone call creates new emails, answer them after the call. This is the execution order.',
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
                            'Synchronous code runs first completely. ',
                            'Then all Promises run (Promises are microtasks). ',
                            'Then setTimeout runs (setTimeout is a task). ',
                            'Even if setTimeout is written first, Promises run before it. ',
                            'This is because the event loop prioritizes microtasks over tasks. ',
                            'All Promises must run before any setTimeout.',
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
                        items: ['promise', 'setTimeout', 'microtask', 'task', 'execution order'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-14',
        topicId: 'javascript',
        title: 'Explain Promises and async/await',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A Promise is a result that will come later. Think of it like ordering food. You get a token now, and the food comes later.',
                    },
                    {
                        type: 'heading',
                        text: 'A Promise has 3 states:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Pending**: still waiting for the result. ',
                            '**Fulfilled**: work finished, we got the result ',
                            '**Rejected**: work failed, we got an error ',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'async/await is an easy way to write Promise code. It looks like normal step-by-step code, so it is easier to read.',
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
                        text: 'Why it is used: JavaScript is single-threaded. Promises let us handle async work (API calls, file loading, timers) without blocking the UI.',
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'When to use it:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use **async/await** for most code. It is clean and easy to debug.',
                            'Use **Promise methods**  `(Promise.all, Promise.allSettled, Promise.race)` when you need to run tasks in parallel.',
                        ],
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Important technical points:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Promise callbacks run in the `microtask queue`, so they run before setTimeout callbacks.',
                            'An async function always returns a Promise.',
                            'await pauses only that function, not the whole app.',
                            'Use try/catch for error handling with async/await.',
                        ],
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Common trade-offs:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Using `await` one by one makes requests sequential and slow. Use `Promise.all` for independent calls.',
                            '`Promise.all` fails fast if one call fails. Use `Promise.allSettled` if you need all results.',
                            'Unhandled rejections can cause silent bugs.',
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
                        text: `const getUser = async (id) => {  try {
                                const res = await fetch('/api/users/id');
                                return await res.json();
                            } catch (error) {
                                console.error("Failed to load user", error);
                            }
                        };`,
                    },
                    {
                        type: 'highlight',
                        text: '`await` waits for the API response without blocking the page. If something fails, catch handles the error.',
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
                            'A Promise is an object that represents work happening in the future. It has three states: **pending, fulfilled, or rejected**. We can use `.then()` to handle the result. ',
                            'Async/await is a newer way to work with promises.',
                            'It makes the code look cleaner and easier to read.',
                            'We write `async` before a function, and use await to wait for a promise to finish before moving to the next line. ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'For example, when fetching data from an API:',
                    },
                    {
                        type: 'heading',
                        text: 'With Promise:',
                    },
                    {
                        type: 'code',
                        text: `fetch(url)
                            .then(res => res.json())
                            .then(data => console.log(data))`,
                    },
                    {
                        type: 'heading',
                        text: 'With async/await',
                    },
                    {
                        type: 'code',
                        text: `const data = 
                        await fetch(url) and 
                        await res.json()`,
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
                        items: ['promise', 'async/await', 'try/catch', 'pending', 'fulfilled', 'rejected'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-15',
        topicId: 'javascript',
        title: 'What is the difference between `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**These are methods for handling multiple Promises: **',
                            '`Promise.all()` - waits for all to complete, fails if any fails. ',
                            '`Promise.allSettled()` - waits for all to complete regardless of success or failure. ',
                            '`Promise.race()` - returns result of the first completed Promise. ',
                            '`Promise.any()` - returns the first successful Promise, fails only if all fail. ',
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
                            '`Promise.all(promises)` - Resolves with array of results when all resolve. Rejects immediately if any rejects. Fast-fail behavior - one rejection stops everything. Best for dependent operations. ',
                            '`Promise.allSettled(promises)` - Always resolves with array of {status, value/reason} objects. Never rejects. Best for operations where you want all results regardless of individual failures. ',
                            '`Promise.race(promises)` - Resolves/rejects with the first settled Promise. Fastest result wins. Best for race conditions, timeouts. ',
                            '`Promise.any(promises)` - Resolves with first fulfilled Promise, ignores rejections. Rejects only if all reject (AggregateError with all reasons). Best for trying alternatives. ',
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
                        text: `// all - fails on first error
                        Promise.all([p1, p2, p3])
                        .then(results => console.log(results))
                        .catch(error => console.log('One failed:', error));

                        // allSettled - all settle regardless
                        Promise.allSettled([p1, p2, p3])
                        .then(results => results.forEach(r => 
                            console.log(r.status, r.value || r.reason)
                        ));

                        // race - first wins
                        Promise.race([p1, p2, p3])
                        .then(winner => console.log('First:', winner));

                        // any - first success
                        Promise.any([p1, p2, p3])
                        .then(winner => console.log('First success:', winner))
                        .catch(errors => console.log('All failed:', errors));`,
                    },
                    {
                        type: 'highlight',
                        text: 'all and race return immediately on first result. allSettled waits for all. any returns on first success. Choose based on your needs.',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'These methods handle multiple Promises differently.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Promise.all()` waits for all to resolve, failing if any fails. ',
                            '`Promise.allSettled()` waits for all regardless of success/failure. ',
                            '`Promise.race()` returns the first settled result. ',
                            '`Promise.any()` returns the first successful result. ',
                            'Use `all()` when you need all results. ',
                            'Use `allSettled()` for partial failures. ',
                            'Use `race()` for timeouts. ',
                            'Use `any()` for alternatives. ',
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
                        items: [
                            'Promise.all',
                            'Promise.allSettled',
                            'Promise.race',
                            'Promise.any',
                            'multiple promises',
                        ],
                    },
                ],
            },
        ],
    }),
];
