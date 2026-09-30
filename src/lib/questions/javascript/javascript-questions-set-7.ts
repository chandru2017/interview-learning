import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet7: IQuestion[] = [
    createQuestion({
        id: 'js-31',
        topicId: 'javascript',
        title: 'What is immutability and why is it important in React?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "Immutability means not changing data after it's created. ",
                            'Instead of modifying an object, you create a new one with the changes. ',
                            'In React, immutability helps the framework detect changes. ',
                            'When data is immutable, React knows something changed by checking if the reference changed. ',
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
                        text: 'Immutability: data cannot be changed after creation. Instead of mutating, create new objects. Benefits in React:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Change detection** - React uses reference equality. Immutability ensures new reference when data changes. ',
                            '**Performance optimization** - React.memo, useMemo work correctly with immutable data. ',
                            '**Predictability** - easier to reason about state. ',
                            '**Time-travel debugging** - can replay state changes. ',
                            '**Undo/redo** - easy to implement. `In Redux:` reducers must be pure and immutable. `Patterns:` spread operator ({...obj}), Object.assign(), Array.from(), map/filter create new arrays. `Libraries:` Immer simplifies immutable updates. `Downside:` performance overhead from creating new objects. ',
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
                        text: `// MUTABLE - React might miss the change
                            const user = { name: 'Ali', age: 30 };
                            user.age = 31; // BAD - modifying existing object

                            // IMMUTABLE - React detects the change
                            const user = { name: 'Ali', age: 30 };
                            const updated = { ...user, age: 31 }; // new object
                            setUser(updated);

                            // Array immutability
                            const items = [1, 2, 3];
                            items.push(4); // BAD - mutating
                            const newItems = [...items, 4]; // GOOD - new array`,
                    },
                    {
                        type: 'highlight',
                        text: `With immutability, we create new objects/arrays instead of modifying. React detects the change by checking the new reference.`,
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
                        text: `In Archer Review, we used immutable updates for form state. When editing a field, we created a new form object instead of modifying the old one. This ensured React re-rendered when needed.`,
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
                        text: `Immutability is like taking notes. Instead of erasing and rewriting notes (mutation), you tear up the old page and write a new one (immutability). You always have a history of all versions.`,
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
                            'Immutability means not changing data after creation. ',
                            'Instead, create new objects with the changes. ',
                            'In React, immutability is important for change detection - React uses reference equality to know if state changed. ',
                            'Immutable data also enables performance optimizations and makes debugging easier. ',
                            'Use spread operator, Object.assign(), or libraries like Immer to handle immutable updates. ',
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
                        items: ['immutability', 'React', 'reference equality', 'change detection', 'performance'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-32',
        topicId: 'javascript',
        title: 'What is the difference between synchronous and asynchronous JavaScript?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Synchronous code runs line by line, one thing at a time. ',
                            'The program waits for each operation to finish before moving to the next. ',
                            "Asynchronous code doesn't wait. It starts an operation and continues immediately, handling the result later. ",
                            'Callbacks, Promises, and async/await are asynchronous patterns. ',
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
                            '**Synchronous: blocking** - each statement waits for the previous to complete. Code is predictable but slow for I/O.',
                            "**Asynchronous: non-blocking** - operations start but don't wait for completion. ",
                            'Results handled later via callbacks, Promises, or async/await. JavaScript runs synchronously in the main thread. ',
                            'For I/O (network, file reading), asynchronous prevents blocking. ',
                            'Event loop manages async operations. ',
                            '*Async patterns:** 1) Callbacks (nested, hard to read). 2) Promises (better, chainable). 3) async/await (cleanest syntax). ',
                            'Browser operations (setTimeout, fetch, DOM events) are always asynchronous. ',
                            'Use asynchronous when: API calls, file I/O, expensive computations. Downside: more complex error handling and debugging. ',
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
                        text: `// SYNCHRONOUS - blocks until done
                            const data = fetchData(); // waits 2 seconds
                            console.log(data);
                            console.log('done');

                            // ASYNCHRONOUS - doesn't block
                            fetchData().then(data => {
                            console.log(data);
                            console.log('done');
                            });
                            console.log('started request');

                            // async/await - looks synchronous
                            async function getData() {
                            const data = await fetchData();
                            console.log(data);
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: `Synchronous waits for operations. Asynchronous starts operations and continues. async/await makes async code look synchronous.`,
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
                        text: `In Archer Review, all API calls were asynchronous. Users could continue using the app while data loaded. With synchronous calls, the app would freeze until requests finished.`,
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
                        text: `Synchronous: you go to a restaurant, order, wait until food is ready to leave. Asynchronous: you order, get a buzzer, continue shopping, then get food when buzzer goes off. Asynchronous keeps you productive.`,
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
                            'Synchronous code runs line by line, waiting for each operation. ',
                            'Asynchronous starts operations and continues immediately, handling results later. ',
                            'JavaScript uses callbacks, Promises, and async/await for asynchronous patterns. ',
                            'Asynchronous is essential for I/O operations like API calls - without it, apps would freeze. ',
                            'async/await is the modern way to write asynchronous code that looks synchronous. ',
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
                        items: ['synchronous', 'asynchronous', 'blocking', 'non-blocking', 'callbacks'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-33',
        topicId: 'javascript',
        title: 'How would you optimize JavaScript execution in a large application?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Optimize by: splitting code into smaller chunks (code splitting), lazy loading modules, removing unused code (tree shaking), using Web Workers for heavy computations, caching results, using efficient data structures, avoiding memory leaks, and profiling to find bottlenecks.',
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
                        text: 'JavaScript optimization strategies:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Code Splitting:** split bundle into chunks, load only needed code.',
                            '**Lazy Loading:** load code when needed (React.lazy).',
                            '**Tree Shaking:** remove unused code during build. ',
                            '**Memoization:** cache function results (useMemo, React.memo).',
                            '**Web Workers:** offload heavy computations to background threads.',
                            '**Debouncing/Throttling:** reduce function execution frequency.',
                            '**Virtual Scrolling:** render only visible items.',
                            '**Efficient Data Structures:** use Map/Set instead of objects for lookups. ',
                            '**Profiling:** Chrome DevTools to identify bottlenecks. ',
                            'CDN for static assets. ',
                            'Compression (gzip, brotli). ',
                            'Minimize main thread blocking. ',
                            'requestAnimationFrame for animations. ',
                            'Avoid memory leaks.',
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
                        text: `// Code splitting with React
                            const HeavyComponent = React.lazy(() => import('./Heavy'));
                            <Suspense fallback={<div>Loading...</div>}>
                            <HeavyComponent />
                            </Suspense>

                            // Memoization
                            const expensiveCalc = useMemo(() => {
                            return calculate(data);
                            }, [data]);

                            // Web Worker
                            const worker = new Worker('worker.js');
                            worker.postMessage(largeData);
                            worker.onmessage = (e) => console.log(e.data);`,
                    },
                    {
                        type: 'highlight',
                        text: `Code splitting loads components only when needed. Memoization caches results. Web Workers run computations in background.`,
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
                        text: `In Archer Review, we optimized by splitting the app into smaller chunks - only loading form components when users navigated to them. We used useMemo for expensive calculations. This made the app load much faster.`,
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
                        text: `A library with millions of books. You don't need all books at once. Load only the genre you're reading now. When finished, load the next. This is code splitting - load only what you need now.`,
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
                            'Optimize by splitting code into chunks and loading on demand. ',
                            'Use React.lazy for code splitting. ',
                            'Avoid memory leaks and remove unused code. ',
                            'Use memoization for expensive calculations. ',
                            'Debounce/throttle frequent events. Profile with Chrome DevTools to find bottlenecks. ',
                            'Web Workers offload heavy computations. ',
                            'Virtual scrolling for long lists. ',
                            'Efficient data structures matter. ',
                            'Every optimization decision should be data-driven from profiling.',
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
                        items: ['code splitting', 'lazy loading', 'memoization', 'profiling', 'web workers'],
                    },
                ],
            },
        ],
    }),
];
