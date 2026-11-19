import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'js-11',
        topicId: 'javascript',
        title: 'Explain the JavaScript Event Loop.',
        difficulty: 'Intermediate',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Event loop na JavaScript single-threaded ah irundhaalum, asynchronous operations ah handle panna help pannura mechanism.',
                            'JavaScript la oru Call Stack dhaan irukku, so oru time la oru task dhaan run aagum. Async tasks (setTimeout, fetch) ah browser Web APIs handle pannum.',
                            'Andha tasks mudinjadhum, callback ah queue la podum. Call Stack empty aana apram, event loop andha callback ah queue la irundhu edutthu Call Stack ku anuppum.',
                            'Promise callbacks Microtask Queue la pogum. Idhu setTimeout maari Callback Queue (Macrotask) vida first run aagum.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Main parts**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Call Stack: Function execution contexts run aagura place. LIFO order la work aagum.',
                            'Web APIs: setTimeout, fetch, DOM events maari async work ah browser handle pannum. Idhu JavaScript engine oda part illa.',
                            'Callback Queue (Macrotask Queue): setTimeout, setInterval, DOM events oda callbacks inga wait pannum.',
                            'Microtask Queue: Promise `.then()` and `queueMicrotask` callbacks inga wait pannum.',
                            'Event Loop: Call Stack and queues ah continuously check pannura process.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Synchronous code mudhalla Call Stack la run aagum.',
                            'Async task vandha, adha Web APIs ku anuppum. Call Stack block aagaadhu, adutha code run aagitte irukkum.',
                            'Async task mudinjadhum, adhoda callback Callback Queue or Microtask Queue ku pogum.',
                            'Call Stack empty aana apram, event loop queue la irundhu callback ah edutthu Call Stack ku push pannum.',
                            'Microtask Queue ku priority adhigam. Macrotask edukkurathukku munnadi, Microtask Queue full ah empty aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it is needed**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript single-threaded, so oru time la oru task dhaan run aagum.',
                            'Network request maari slow task ku wait pannina, UI freeze aagidum.',
                            'Event loop use panna, slow tasks ah background la run panni, main thread ah free ah vechukkalam.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Output order)**',
                    },
                    {
                        type: 'code',
                        text: `console.log("1");

        setTimeout(() => {
        console.log("2");
        }, 0);

        Promise.resolve().then(() => {
        console.log("3");
        });

        console.log("4");

        // Output: 1, 4, 3, 2`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`console.log("1")` synchronous, so Call Stack la udane run aagum. Output: 1.',
                            '`setTimeout` Web APIs ku pogum. Delay 0 aanaalum, callback Callback Queue ku dhaan pogum.',
                            '`Promise.then` callback Microtask Queue ku pogum.',
                            '`console.log("4")` synchronous, so udane run aagum. Output: 4.',
                            'Call Stack empty aana apram, Microtask Queue first run aagum. Output: 3.',
                            'Adhukku apram Callback Queue la irundhu `setTimeout` callback run aagum. Output: 2.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Restaurant analogy**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Oru restaurant la oru waiter (Call Stack) dhaan irukkaanga. Customer order edukkuraanga, kitchen (Web APIs) ku anuppuraanga. Kitchen la food ready aagura varaikkum waiter wait pannaama, adutha customer ah handle pannuraanga. Food ready aanadhum, waiter free ah irukkumbodhu andha food ah serve pannuraanga. Idhu dhaan event loop oda work.',
                    },
                    {
                        type: 'code',
                        text: `console.log("Start");

        setTimeout(() => {
        console.log("Data received");
        }, 2000);

        console.log("End");

        // Output: Start, End, Data received (2 seconds apram)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`setTimeout` 2 seconds wait pannum, aana Call Stack block aagaadhu.',
                            'Adhunaala "End" udane print aagum.',
                            '2 seconds apram, callback Callback Queue ku pogum. Call Stack empty ah irundha, "Data received" print aagum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, main parts, how it works, example.',
                            '“Call Stack empty aana apram dhaan, event loop queue la irundhu callback ah Call Stack ku anuppum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Microtask Queue vs Callback Queue difference clear ah sollunga. Promise callbacks first run aagum.',
                            'Output order question (1, 4, 3, 2 example) interview la romba ketpaanga. Idha practice pannunga.',
                            '`setTimeout(fn, 0)` kooda udane run aagaadhu nu mention pannunga. Callback Queue la wait pannum.',
                            'Idhu Call Stack and execution context oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Stack first, Microtask next, Macrotask last”.',
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
        status: 'in-progress',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Call Stack, Task Queue, and Microtask Queue moonum JavaScript code eppadi run aagum nu decide panra main parts. Call Stack la code run aagum, queues la callbacks wait pannum.',
                            'Call Stack la dhaan code actual ah execute aagum. Oru time la oru function dhaan run aagum (LIFO order).',
                            'Task Queue (Macrotask Queue) la setTimeout, setInterval, DOM events oda callbacks wait pannum. Microtask Queue la Promise .then() and queueMicrotask oda callbacks wait pannum.',
                            'Call Stack empty aana apram, event loop mudhalla Microtask Queue ah full ah empty pannum. Adhukku apram dhaan Task Queue la irundhu oru task edukkum. So Microtask ku always priority adhigam.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Call Stack**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function execution contexts run aagura place.',
                            'LIFO (Last In, First Out) order la work aagum.',
                            'Synchronous code ellam inga dhaan run aagum.',
                            'Call Stack busy ah irundha, queues la irukkura callbacks run aaga mudiyaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Task Queue (Macrotask Queue)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'setTimeout, setInterval, DOM events, I/O oda callbacks inga wait pannum.',
                            'FIFO (First In, First Out) order la work aagum.',
                            'Event loop oru dhadava oru task dhaan edukkum.',
                            'Priority kammi. Microtask Queue empty aana apram dhaan edukkum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Microtask Queue**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Promise .then(), .catch(), .finally(), async/await, and queueMicrotask oda callbacks inga wait pannum.',
                            'Priority adhigam. Call Stack empty aanadhum, Microtask Queue full ah empty aagura varaikkum run aagum.',
                            'Microtask run aagumbodhu pudhu microtask add aanaalum, adhuvum udane run aagum.',
                            'Adhunaala microtask kulla infinite loop vandha, Task Queue and UI block aagidum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Output order)**',
                    },
                    {
                        type: 'code',
                        text: `console.log("A");

        setTimeout(() => {
        console.log("B");
        }, 0);

        Promise.resolve().then(() => {
        console.log("C");
        });

        queueMicrotask(() => {
        console.log("D");
        });

        console.log("E");

        // Output: A, E, C, D, B`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`console.log("A")` synchronous, so Call Stack la udane run aagum. Output: A.',
                            '`setTimeout` callback Task Queue ku pogum.',
                            '`Promise.then` and `queueMicrotask` callbacks Microtask Queue ku pogum (C first, D second).',
                            '`console.log("E")` synchronous, so udane run aagum. Output: E.',
                            'Call Stack empty aana apram, Microtask Queue full ah run aagum. Output: C, D.',
                            'Adhukku apram dhaan Task Queue la irundhu `setTimeout` callback run aagum. Output: B.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Bank counter**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Bank la oru counter la oru customer ah dhaan handle pannuvaanga (Call Stack). Veliya rendu line irukku. Oru line la priority token vachirukkuravanga (Microtask Queue), innoru line la normal token vachirukkuravanga (Task Queue). Counter free aanadhum, priority line la irukkuravanga ellaarum mudiyura varaikkum, normal line la irundhu yaarayum kooppida maattaanga. Priority line empty aana apram dhaan, normal line la irundhu oruthara kooppiduvaanga.',
                    },
                    {
                        type: 'code',
                        text: `console.log("Start");

        setTimeout(() => {
        console.log("Task Queue");
        }, 0);

        Promise.resolve().then(() => {
        console.log("Microtask Queue");
        });

        console.log("End");

        // Output: Start, End, Microtask Queue, Task Queue`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '"Start" and "End" synchronous, so Call Stack la mudhalla run aagum.',
                            'Promise callback priority line (Microtask Queue) la irukku, so adhu first run aagum.',
                            'setTimeout callback normal line (Task Queue) la irukku, so adhu last la run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: Call Stack, Task Queue, Microtask Queue, priority order, example.',
                            '“Call Stack empty aana apram, Microtask Queue full ah empty aagum, apram dhaan Task Queue la irundhu oru task run aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Microtask la enna varum (Promise, queueMicrotask), Task Queue la enna varum (setTimeout, setInterval, DOM events) nu clear ah sollunga.',
                            'Output order question (A, E, C, D, B example) interview la romba ketpaanga. Idha practice pannunga.',
                            '`setTimeout(fn, 0)` kooda Promise vida late ah dhaan run aagum nu mention pannunga.',
                            'Microtask kulla infinite loop vandha Task Queue starve aagum nu sonna, senior level answer.',
                            'Idhu Event Loop and Execution Context oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Stack first, Microtask next, Task last”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Promise na oru asynchronous operation oda final result (success or failure) ah represent panra object. Result ippo kedaikkaadhu, later kedaikkum.',
                            'Promise ku moonu states irukku: Pending, Fulfilled, and Rejected. Success aana .then() run aagum, failure aana .catch() run aagum.',
                            'async/await na Promise ah use panra easy and clean syntax. async function eppavum oru Promise return pannum. await use panna, Promise result varra varaikkum andha function la wait pannum, but main thread block aagaadhu.',
                            'Error handling ku Promise la .catch() use pannuvom, async/await la try...catch use pannuvom.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise states**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pending: Operation innum mudiyala, initial state.',
                            'Fulfilled: Operation success aachu, result value kedaichiduchu.',
                            'Rejected: Operation fail aachu, error kedaichiduchu.',
                            'Oru dhadava Fulfilled or Rejected aana apram, state maaraadhu (settled).',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise methods**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`.then()`: Promise fulfilled aana run aagum.',
                            '`.catch()`: Promise rejected aana run aagum.',
                            '`.finally()`: Success or failure, rendu la um run aagum.',
                            'Promise chaining: `.then()` oru pudhu Promise return pannum, so `.then().then().then()` nu chain pannalam. Idhu callback hell ah avoid panna help pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**async/await**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`async` keyword function ku munnadi potta, adhu eppavum Promise return pannum.',
                            '`await` async function kulla mattum dhaan use pannalam (top-level await modules la use pannalam).',
                            '`await` Promise resolve aagura varaikkum andha function ah pause pannum, but main thread block aagaadhu.',
                            'Internally idhu Promise dhaan. async/await just syntax sugar, code ah synchronous maari padikka easy ah irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Promise vs async/await)**',
                    },
                    {
                        type: 'code',
                        text: `function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve("Data received");
            }, 1000);
        });
        }

        // Promise chaining
        getData()
        .then((data) => {
            console.log(data); // "Data received"
        })
        .catch((error) => {
            console.log(error);
        });

        // async/await (same work)
        async function run() {
        try {
            const data = await getData();
            console.log(data); // "Data received"
        } catch (error) {
            console.log(error);
        }
        }

        run();`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`getData()` oru Promise return pannum. 1 second apram `resolve` call aagum.',
                            'Promise chaining la `.then()` success handle pannum, `.catch()` error handle pannum.',
                            'async/await la `await getData()` result varra varaikkum wait pannum, apram `data` la store aagum.',
                            'Error handle panna `try...catch` use pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: API call and parallel requests**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Website la user data and orders rendu um API la irundhu fetch pannanum. Rendu um independent na, `Promise.all` use panni parallel ah run pannalam. Appo total time kammi aagum.',
                    },
                    {
                        type: 'code',
                        text: `async function loadDashboard() {
        try {
            const [userRes, ordersRes] = await Promise.all([
            fetch("/api/user"),
            fetch("/api/orders"),
            ]);

            const user = await userRes.json();
            const orders = await ordersRes.json();

            console.log(user, orders);
        } catch (error) {
            console.log("Something went wrong", error);
        }
        }

        loadDashboard();`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Promise.all` rendu requests ah same time la start pannum, so sequential vida fast ah irukkum.',
                            'Rendu la entha oru request fail aanaalum, `Promise.all` reject aagum, so `catch` run aagum.',
                            'Ovvoru `await` kum separate ah wait panna, requests sequential ah run aagum. Idhu slow.',
                            'Other useful methods: `Promise.allSettled` (ellaa results um venum na), `Promise.race` (first finish aanadhu venum na).',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: Promise definition, states, methods, async/await, example.',
                            '“async/await is just syntax sugar over Promises, internally Promise dhaan” nu kandippa sollunga. Idhu dhaan core point.',
                            'Promise states (Pending, Fulfilled, Rejected) clear ah sollunga.',
                            '`Promise.all` vs `Promise.allSettled` vs `Promise.race` difference mention pannunga.',
                            'Sequential await vs parallel `Promise.all` difference sollunga. Idhu senior level answer.',
                            'Idhu Event Loop and Microtask Queue oda connect aagum, because `.then()` and `await` ku apram irukkura code Microtask la run aagum.',
                            'Memory trick: “Pending, Fulfilled, Rejected. await = wait inside, not block outside”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '`Promise.all(), Promise.allSettled(), Promise.race()`, and `Promise.any()` naala multiple Promises ah same time la run panni, avanga results ah different ways la handle pannalam.',
                            '`Promise.all()` ellaa Promises um success aana dhaan resolve aagum. Entha oru Promise fail aanaalum, udane reject aagidum.',
                            '`Promise.allSettled()` ellaa Promises um mudiyura varaikkum wait pannum. Success or failure, ellaa results um oru array la kudukkum. Eppavum reject aagaadhu.',
                            '`Promise.race()` first mudinja Promise oda result ah return pannum, adhu success aa irundhaalum failure aa irundhaalum. Promise.any() first success aana Promise oda result ah return pannum. Ellaa Promises um fail aana dhaan reject aagum.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise.all()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ellaa Promises um success aana, results oda array return pannum. Order, Promises kudutha order la dhaan irukkum.',
                            'Entha oru Promise fail aanaalum, udane reject aagum. Andha first error dhaan kedaikkum.',
                            'Use case: Ellaa data um irundha dhaan page ah show pannanum nu irukkum bodhu.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise.allSettled()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ellaa Promises um mudiyura varaikkum wait pannum.',
                            'Ovvoru Promise ku oru object kudukkum: `{ status: "fulfilled", value }` or `{ status: "rejected", reason }`.',
                            'Eppavum reject aagaadhu. Failure irundhaalum ellaa results um kedaikkum.',
                            'Use case: Entha Promise fail aachu, entha success aachu nu ellaathayum therinjukkanum nu irukkum bodhu.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise.race()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First settle aana Promise oda result ah return pannum. Settle na success or failure, edhuvaa irundhaalum.',
                            'First Promise success aana resolve aagum, first Promise fail aana reject aagum.',
                            'Use case: Timeout implement panna. API call and timeout Promise rendaiyum race panna, entha first mudiyudho adhu win aagum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promise.any()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First success aana Promise oda result ah return pannum. Failures ah ignore pannum.',
                            'Ellaa Promises um fail aana dhaan reject aagum. Appo `AggregateError` kedaikkum, adhula ellaa errors um irukkum.',
                            'Use case: Same data ah multiple servers la irundhu edukka try pannum bodhu, entha server first success aagudho adhu podhum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example**',
                    },
                    {
                        type: 'code',
                        text: `const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 success"), 1000));
        const p2 = new Promise((_, reject) => setTimeout(() => reject("P2 failed"), 500));
        const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 success"), 1500));

        Promise.all([p1, p2, p3])
        .then((res) => console.log("all:", res))
        .catch((err) => console.log("all error:", err));
        // all error: P2 failed (500ms la)

        Promise.allSettled([p1, p2, p3]).then((res) => console.log("allSettled:", res));
        // allSettled: [
        //   { status: "fulfilled", value: "P1 success" },
        //   { status: "rejected", reason: "P2 failed" },
        //   { status: "fulfilled", value: "P3 success" }
        // ] (1500ms la)

        Promise.race([p1, p2, p3])
        .then((res) => console.log("race:", res))
        .catch((err) => console.log("race error:", err));
        // race error: P2 failed (P2 first settle aachu)

        Promise.any([p1, p2, p3]).then((res) => console.log("any:", res));
        // any: P1 success (P2 fail aachu, ignore pannum. P1 first success)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`p2` 500ms la fail aagum, `p1` 1000ms la success, `p3` 1500ms la success.',
                            '`all` la p2 fail aana udane reject aagum.',
                            '`allSettled` 1500ms vara wait pannitu, ellaa results um kudukkum.',
                            '`race` la p2 first settle aagum, adhu failure, so reject aagum.',
                            '`any` p2 failure ah ignore pannitu, first success aana p1 result ah kudukkum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Quick comparison**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`all`: Ellaa success venum. Oru failure na reject.',
                            '`allSettled`: Ellaa mudiyura varaikkum wait. Eppavum resolve.',
                            '`race`: First settle aana (success or failure) win.',
                            '`any`: First success aana win. Ellaa fail aana dhaan reject.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Timeout with Promise.race**',
                    },
                    {
                        type: 'paragraph',
                        text: 'API call romba slow ah irundha, 3 seconds apram error kaattanum nu vechukkonga. API call and timeout Promise rendaiyum race pannalam. Entha first mudiyudho adhu win aagum.',
                    },
                    {
                        type: 'code',
                        text: `function timeout(ms) {
        return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Request timed out")), ms);
        });
        }

        async function fetchWithTimeout() {
        try {
            const response = await Promise.race([
            fetch("/api/data"),
            timeout(3000),
            ]);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
        }

        fetchWithTimeout();`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API 3 seconds kulla response kudutha, `fetch` win aagum, data kedaikkum.',
                            'API 3 seconds vida slow na, `timeout` first reject aagum, `catch` run aagum.',
                            'Idhu `Promise.race` oda most common real-world use.',
                        ],
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: all, allSettled, race, any, example.',
                            '“all: ellaa success venum. allSettled: ellaa results venum. race: first settle. any: first success” nu kandippa sollunga. Idhu dhaan core point.',
                            'race vs any difference clear ah sollunga. race first settle (failure um count aagum), any first success mattum count aagum. Idhula neraya per confuse aaguvaanga.',
                            'allSettled eppavum reject aagaadhu nu mention pannunga.',
                            'any ellaa Promises um fail aana AggregateError throw pannum nu sollunga. Idhu senior level answer.',
                            'Idhu Promises and async/await oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “All = all success, AllSettled = all results, Race = first finish, Any = first success”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
