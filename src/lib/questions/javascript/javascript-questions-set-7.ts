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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Immutability na oru data create aana apram, adha direct ah change panna koodadhu. Change panna venum na, original ah touch pannaama, change pannina values oda oru pudhu copy create pannanum.',
                            'React state or props update pannumbodhu, original object or array ah mutate panna koodadhu. Pudhu object or array create panni, adha setState ku kudukkanum.',
                            'React old state and new state ah reference compare (Object.is) panni, change irukkaa nu check pannum. Mutate pannina reference same ah irukkum, so React change nadakkala nu nenachu re-render pannaadhu, UI update aagaadhu.',
                            'Benefits: predictable state, easy debugging, React.memo and useMemo maari optimization work aagum, and Redux time-travel debugging possible.',
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
                        text: '**Mutable vs Immutable**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mutable: Original data ah direct ah change panradhu. Example: `arr.push()`, `obj.name = "Kumar"`.',
                            'Immutable: Original data ah change pannaama, pudhu copy create panni change panradhu. Example: spread operator, `map()`, `filter()`.',
                            'Primitive values (string, number, boolean) already immutable. Objects and arrays dhaan mutable.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Mutable (original change aagidum)
        const user = { name: "Ravi", age: 25 };
        user.name = "Kumar";

        // Immutable (pudhu object create aagum)
        const user2 = { name: "Ravi", age: 25 };
        const updatedUser = { ...user2, name: "Kumar" };

        console.log(user2.name);       // "Ravi" (original safe)
        console.log(updatedUser.name); // "Kumar"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`user.name = "Kumar"` original object ah direct ah change pannudhu. Idhu mutation.',
                            '`{ ...user2, name: "Kumar" }` pudhu object create pannudhu. Original ku effect illa.',
                            'Rendu objects um different reference, so React ku difference theriyum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it matters in React (core concept)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React state change aachaa nu check panna, old reference and new reference ah compare pannum. Value ah deep compare pannaadhu, because adhu slow.',
                            'Mutate pannina, reference same dhaan. So React "change illa" nu nenachu, re-render pannaadhu.',
                            'Pudhu object or array kudutha, reference change aagum. So React change irukku nu therinjitu, re-render pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `import { useState } from "react";

        function TodoList() {
        const [todos, setTodos] = useState(["Learn JS"]);

        // Wrong: mutation, UI update aagaadhu
        const addWrong = () => {
            todos.push("Learn React");
            setTodos(todos); // same reference
        };

        // Correct: pudhu array create pannrom
        const addCorrect = () => {
            setTodos([...todos, "Learn React"]); // pudhu reference
        };

        return (
            <div>
            <ul>
                {todos.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <button onClick={addWrong}>Add (Wrong)</button>
            <button onClick={addCorrect}>Add (Correct)</button>
            </div>
        );
        }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`addWrong` la `todos.push()` original array ah mutate pannudhu. `setTodos(todos)` same reference kudukkudhu.',
                            'React old and new reference same nu paathu, re-render skip pannidum. UI update aagaadhu.',
                            '`addCorrect` la `[...todos, "Learn React"]` pudhu array create pannudhu, so reference change aagum, re-render aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Immutable update patterns**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Array add: `[...arr, item]`.',
                            'Array remove: `arr.filter((x) => x.id !== id)`.',
                            'Array update: `arr.map((x) => x.id === id ? { ...x, done: true } : x)`.',
                            'Object update: `{ ...obj, key: value }`.',
                            'Nested object update: Ovvoru level kum spread use pannanum.',
                            'Mutating methods avoid pannunga: `push`, `pop`, `splice`, `sort`, `reverse`. Sort venum na `[...arr].sort()` use pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const todos = [
        { id: 1, text: "Learn JS", done: false },
        { id: 2, text: "Learn React", done: false },
        ];

        // Add
        const added = [...todos, { id: 3, text: "Build app", done: false }];

        // Remove
        const removed = todos.filter((t) => t.id !== 1);

        // Update
        const updated = todos.map((t) =>
        t.id === 2 ? { ...t, done: true } : t
        );

        // Nested object update
        const state = { user: { name: "Ravi", address: { city: "Pollachi" } } };

        const newState = {
        ...state,
        user: {
            ...state.user,
            address: { ...state.user.address, city: "Chennai" },
        },
        };

        console.log(state.user.address.city);    // "Pollachi" (original safe)
        console.log(newState.user.address.city); // "Chennai"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`filter` and `map` eppavum pudhu array return pannum, so immutable update ku best.',
                            '`map` la update aana item ku mattum pudhu object create pannrom, meedhi items same reference ah irukkum.',
                            'Nested update la ovvoru level kum spread use pannanum. Illa na nested object shared aagidum.',
                            'Nested update romba complex ah irundha, Immer library use pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it is important (benefits)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Predictable state: State eppo, enga change aagudhu nu track panna easy.',
                            'Easy debugging: Old state safe ah irukkum, so compare panni bug find pannalam.',
                            'Performance optimization: `React.memo`, `useMemo`, `useCallback` reference compare pannura nala, immutability irundha dhaan correct ah work aagum.',
                            'Time-travel debugging: Redux DevTools la old states ah save panni, back pogalam.',
                            'Unexpected side effects avoid aagum: Shared object ah ore place la change pannina, vera place la bug varaadhu.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `import { memo } from "react";

        const UserCard = memo(function UserCard({ user }) {
        console.log("UserCard rendered");
        return <p>{user.name}</p>;
        });

        // user mutate pannina: reference same, memo re-render skip pannum (UI stale)
        // user pudhu object ah kudutha: reference change aagum, memo re-render pannum (correct)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`memo` props reference compare pannum. Same reference na re-render skip pannum.',
                            'Mutate pannina, component update aaga vendiya time la kooda skip aagidum. Idhu bug.',
                            'Immutable update panna, change irundha mattum re-render aagum, illa na skip aagum. Idhu dhaan performance benefit.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Redux reducer and Immer**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux reducer la state ah eppavum immutable ah update pannanum. Nested state la spread ezhudha kashtama irukkum, so Immer library use pannuvaanga. Immer la mutate maari ezhudhalam, internally immutable update aagum. Redux Toolkit la idhu built-in.',
                    },
                    {
                        type: 'code',
                        text: `// Plain reducer (immutable)
        function reducer(state, action) {
        switch (action.type) {
            case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((t) =>
                t.id === action.id ? { ...t, done: !t.done } : t
                ),
            };
            default:
            return state;
        }
        }

        // Redux Toolkit (Immer built-in)
        import { createSlice } from "@reduxjs/toolkit";

        const todoSlice = createSlice({
        name: "todos",
        initialState: { todos: [] },
        reducers: {
            toggleTodo(state, action) {
            const todo = state.todos.find((t) => t.id === action.payload);
            todo.done = !todo.done; // mutate maari theriyum, aana Immer immutable update pannum
            },
        },
        });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Plain reducer la spread and `map` use panni, pudhu state return pannrom.',
                            'Redux Toolkit la Immer irukkurathunaala, mutate maari ezhudhalam. Internally pudhu immutable state create aagum.',
                            'Redux Toolkit ku veliya mutate panna koodadhu.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Object.freeze (immutability enforce panna)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Object.freeze(obj)` object ah change panna mudiyaadha mari lock pannum.',
                            'Strict mode la change panna try pannina error varum. Non-strict la silent ah ignore aagum.',
                            'Idhu shallow freeze dhaan. Nested objects freeze aagaadhu.',
                            '`const` immutability illa. `const` variable re-assign panna mudiyaadhu, aana object kulla irukkura values ah change pannalam.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `"use strict";

        const user = Object.freeze({ name: "Ravi", address: { city: "Pollachi" } });

        // user.name = "Kumar";     // TypeError (strict mode)
        user.address.city = "Chennai"; // work aagum (nested freeze aagala)

        console.log(user.address.city); // "Chennai"`,
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, mutable vs immutable, React la why important, update patterns, benefits.',
                            '“React reference compare pannum. Mutate pannina reference change aagaadhu, so re-render aagaadhu. Adhunaala eppavum pudhu object or array create pannanum” nu kandippa sollunga. Idhu dhaan core point.',
                            '`push` vs spread example kaattunga. State la array mutate panna UI update aagaadhu nu sollunga. Interview la idha romba ketpaanga.',
                            '`const` immutability illa nu clear ah sollunga. Idhula neraya per confuse aaguvaanga.',
                            'Nested state update ku ovvoru level kum spread, or Immer use pannalam nu sollunga. Idhu senior level answer.',
                            '`React.memo`, `useMemo`, and `useCallback` immutability ah depend pannum nu mention pannunga.',
                            'Idhu pure functions, shallow copy vs deep copy, and Redux reducer oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Never mutate, always create new”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Large application ah optimize panna, first problem enna nu measure pannanum. Chrome DevTools Performance tab, Lighthouse, and Web Vitals (LCP, INP, CLS) use panni, bottleneck find pannanum. Measure pannama optimize panna, time waste aagum.',
                            'Main areas: reduce load time (code splitting, lazy loading, tree shaking, minification), keep the main thread free (heavy work ah Web Workers ku move pannradhu, long tasks ah small chunks ah break pannradhu), and make rendering fast (reduce DOM updates, virtualization, memoization).',
                            'Common techniques: debounce and throttle, event delegation, caching (memoization, HTTP cache), avoid memory leaks, and avoid unnecessary re-renders (React.memo, useMemo, useCallback).',
                            'Network side la: compress assets (gzip or Brotli), use a CDN, optimize images, and reduce API calls (batching, caching, pagination).',
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
                        text: '**Step 1: Measure first**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Optimize panradhukku munnadi, problem enga irukku nu find pannanum. Guess pannaama, data vachu decide pannanum.',
                            'Chrome DevTools Performance tab: Long tasks, slow functions, and layout problems find pannalam.',
                            'Lighthouse: Overall score and suggestions kudukkum.',
                            'Core Web Vitals: LCP (load speed), INP (response to user input), CLS (layout shift).',
                            'Memory tab: Memory leaks find pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 2: Reduce load time (bundle size)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Code splitting: Periya bundle ah small chunks ah split pannunga. User ku thevai ana code mattum load aagum.',
                            'Lazy loading: Routes, components, and images ah thevai padum bodhu mattum load pannunga.',
                            'Tree shaking: Use pannaadha code ah build time la remove pannum. ES modules use pannanum.',
                            'Minification and compression: Code size kammi pannunga (Terser, gzip, Brotli).',
                            'Unnecessary libraries remove pannunga. Example: full Lodash ku badhila, thevaiyaana functions mattum import pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Lazy loading (React)
        import { lazy, Suspense } from "react";

        const Dashboard = lazy(() => import("./Dashboard"));

        function App() {
        return (
            <Suspense fallback={<p>Loading...</p>}>
            <Dashboard />
            </Suspense>
        );
        }

        // Dynamic import (plain JavaScript)
        button.addEventListener("click", async () => {
        const { heavyFunction } = await import("./heavy.js");
        heavyFunction();
        });

        // Import only what you need
        import debounce from "lodash/debounce"; // full lodash import pannala`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`lazy` and `import()` use panna, Dashboard code user visit pannumbodhu mattum load aagum.',
                            'Initial bundle small ah irukkum, so first load fast ah irukkum.',
                            'Dynamic `import()` oru Promise return pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 3: Keep the main thread free**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript single-threaded, so heavy calculation run aanaa, UI freeze aagidum.',
                            'Web Workers: Heavy work ah background thread la run pannalam. Main thread free ah irukkum.',
                            'Long tasks ah chunks ah break pannunga. Naduvula browser ku UI update panna chance kudunga.',
                            '`requestIdleCallback`: Browser free ah irukkumbodhu, low priority work run pannum.',
                            '`requestAnimationFrame`: Animation and visual updates ku use pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Web Worker
        // main.js
        const worker = new Worker("worker.js");

        worker.postMessage({ numbers: [1, 2, 3, 4, 5] });

        worker.onmessage = (event) => {
        console.log("Result:", event.data);
        };

        // worker.js
        self.onmessage = (event) => {
        const sum = event.data.numbers.reduce((a, b) => a + b, 0);
        self.postMessage(sum);
        };

        // Long task ah chunks ah break pannradhu
        async function processLargeList(items) {
        const chunkSize = 100;

        for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);
            chunk.forEach(processItem);

            // Browser ku UI update panna chance kudukkrom
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
        }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Worker separate thread la run aagum, so heavy calculation UI ah block pannaadhu.',
                            'Main thread and worker `postMessage` use panni communicate pannum.',
                            'Worker la DOM access panna mudiyaadhu.',
                            'Chunking la, `setTimeout(0)` use panna, event loop ku control kedaikkum, so UI responsive ah irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 4: Optimize rendering and DOM**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'DOM operations slow. Unnecessary DOM updates reduce pannunga.',
                            'Batch updates: Neraya changes ah ore time la pannunga. `DocumentFragment` or `innerHTML` use pannalam.',
                            'Layout thrashing avoid pannunga: DOM read and write ah mix pannaadhinga. Mudhalla ellaa read, apram ellaa write.',
                            'Virtualization: Periya list (10,000 items) la, screen la theriyura items mattum render pannunga. Libraries: react-window, react-virtualized.',
                            'React la: `React.memo`, `useMemo`, `useCallback` use panni unnecessary re-renders avoid pannunga. Stable `key` kudunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Bad: ovvoru item ku DOM update
        items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li); // ovvoru dhadavayum DOM update
        });

        // Good: DocumentFragment use pannunga
        const fragment = document.createDocumentFragment();
        items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        fragment.appendChild(li);
        });
        list.appendChild(fragment); // oru dhadava mattum DOM update

        // Layout thrashing (bad)
        elements.forEach((el) => {
        const height = el.offsetHeight;  // read
        el.style.height = height + 10 + "px"; // write
        });

        // Good: first read, then write
        const heights = elements.map((el) => el.offsetHeight);
        elements.forEach((el, i) => {
        el.style.height = heights[i] + 10 + "px";
        });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`DocumentFragment` la items ah add pannitu, oru dhadava DOM la add pannrom. So browser oru dhadava dhaan layout calculate pannum.',
                            'Read and write mix panna, browser ovvoru dhadavayum layout recalculate pannum. Idhu dhaan layout thrashing.',
                            'Virtualization la 10,000 items ku badhila, 20 items mattum DOM la irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 5: Avoid repeated work (caching and memoization)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Memoization: Same input ku result cache pannunga. Pure functions ku best.',
                            'Debounce: User type panni mudikkura varaikkum wait pannunga (search box).',
                            'Throttle: Frequent events (scroll, resize) ah limit pannunga.',
                            'HTTP caching: API responses cache pannunga (Cache-Control, ETag, Service Workers).',
                            'Event delegation: Neraya listeners ku badhila, parent ku oru listener.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Memoization
        const memoize = (fn) => {
        const cache = new Map();

        return (arg) => {
            if (cache.has(arg)) return cache.get(arg);

            const result = fn(arg);
            cache.set(arg, result);
            return result;
        };
        };

        const slowSquare = (n) => {
        // heavy calculation nu vechukkonga
        return n * n;
        };

        const fastSquare = memoize(slowSquare);

        fastSquare(10); // calculate aagum
        fastSquare(10); // cache la irundhu varum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Same input ku calculation thirumba pannaama, cache la irundhu result return pannum.',
                            'Memoization pure functions ku mattum use pannunga. Illa na wrong result varalaam.',
                            'Cache unlimited ah grow aana memory leak aagum. Size limit or `WeakMap` use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 6: Network optimization**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compress assets: gzip or Brotli.',
                            'CDN use pannunga, so user ku nearest server la irundhu content varum.',
                            'Images optimize pannunga: WebP or AVIF format, correct size, lazy loading (`loading="lazy"`).',
                            'API calls reduce pannunga: batching, pagination, caching.',
                            'Parallel requests: `Promise.all` use pannunga. Sequential `await` avoid pannunga (requests independent na).',
                            '`async` or `defer` use panni, scripts HTML parsing ah block pannaama load pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `<!-- Script loading -->
        <script src="app.js" defer></script>   <!-- HTML parse mudinja apram run aagum -->
        <script src="analytics.js" async></script> <!-- download aana udane run aagum -->

        <!-- Image lazy loading -->
        <img src="photo.webp" loading="lazy" alt="Photo" />

        // Parallel API calls
        const [user, orders] = await Promise.all([
        fetch("/api/user").then((r) => r.json()),
        fetch("/api/orders").then((r) => r.json()),
        ]);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`defer` script HTML parsing mudinja apram, order maaraama run aagum.',
                            '`async` script download aana udane run aagum, order guarantee illa.',
                            '`Promise.all` independent requests ah same time la run pannum, so total time kammi aagum.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 7: Memory and code quality**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Memory leaks avoid pannunga: clear timers, remove event listeners, `useEffect` cleanup.',
                            'Large data ku efficient data structures use pannunga. Example: frequent lookup ku `Map` or `Set` (array `find` vida fast).',
                            'Unnecessary loops and nested loops avoid pannunga. Time complexity check pannunga.',
                            'Unused code remove pannunga, dependencies regular ah update pannunga.',
                            'Production build use pannunga. Development build slow ah irukkum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Slow: array la find (O(n)) ovvoru dhadavayum
        const users = [/* 10,000 users */];
        const getUser = (id) => users.find((u) => u.id === id);

        // Fast: Map lookup (O(1))
        const userMap = new Map(users.map((u) => [u.id, u]));
        const getUserFast = (id) => userMap.get(id);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`find` ovvoru dhadavayum full array scan pannum. 10,000 items na slow.',
                            '`Map` la key vachu direct ah value edukkalam, so fast.',
                            'Data structure correct ah choose panna, performance romba improve aagum.',
                        ],
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Slow dashboard**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Oru dashboard la 5 seconds load time, scroll lag, and search slow ah irukku nu vechukkonga. Mudhalla DevTools la measure panni, problem find pannuvom. Apram fix pannuvom.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Problem 1: Bundle size 3 MB. Fix: code splitting, lazy load routes, remove unused libraries. Result: initial bundle 800 KB.',
                            'Problem 2: 10,000 rows table render aagudhu. Fix: virtualization (react-window). Result: only 20 rows DOM la irukkum.',
                            'Problem 3: Search box la ovvoru letter ku API call. Fix: debounce (300ms). Result: API calls 80% kammi.',
                            'Problem 4: Heavy data calculation main thread ah block pannudhu. Fix: Web Worker ku move pannunga. Result: UI smooth.',
                            'Problem 5: Unnecessary re-renders. Fix: `React.memo`, `useMemo`. Result: render time kammi.',
                            'Last step: thirumba measure pannunga, improvement confirm pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '9',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: measure first, load time, main thread, rendering, caching, network, memory.',
                            '“Mudhalla measure pannuvom, bottleneck find pannuvom, apram targeted fix pannuvom. Optimization measure pannaama pannaadhu” nu kandippa sollunga. Idhu dhaan core point.',
                            'Tools mention pannunga: Chrome DevTools, Lighthouse, Web Vitals, bundle analyzer.',
                            'Real project example sollunga. Example: "Bundle size 3 MB la irundhu 800 KB ku kammi pannen". Numbers sonna, impression nalla irukkum.',
                            'Techniques list ah gnabagam vechukonga: code splitting, lazy loading, Web Workers, virtualization, memoization, debounce, caching.',
                            'Premature optimization avoid pannanum nu sollunga. Problem irukku nu prove aana apram dhaan optimize pannanum. Idhu senior level answer.',
                            'Idhu event loop, memory leaks, debounce and throttle, and memoization oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Measure, Split, Offload, Cache, Compress”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-34',
        topicId: 'javascript',
        title: 'What is the difference between ==, ===, null and undefined?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '== (loose equality) compares values after converting types if they differ.',
                            '=== (strict equality) compares value and type, with no conversion.',
                            'undefined means "a variable exists but has no value yet."',
                            'null means "there is intentionally no value here."',
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
                        text: `console.log(5 == "5");        // true
                            console.log(5 === "5");       // false

                            let a = null;
                            let b;

                            console.log(a);               // null
                            console.log(b);               // undefined`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '5 == "5" → true, ஏனெனில் JavaScript "5" என்ற string-ஐ number-ஆக மாற்றி ஒப்பிடுகிறது.',
                            '5 === "5" → false, ஏனெனில் ஒன்று number, மற்றொன்று string.',
                            'null → மதிப்பு இல்லை என்று வேண்டுமென்றே குறிப்பிடுகிறோம்.',
                            'undefined → மதிப்பு இன்னும் assign செய்யப்படவில்லை.',
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
                            '== (Loose Equality): Compares two values after performing type conversion if necessary.',
                            '=== (Strict Equality): Compares both value and data type without type conversion.',
                            'null: Represents an intentional absence of a value.',
                            'undefined: Means a variable has been declared but has not been assigned a value.',
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
                            '== and === rendum two values ah compare pannum. == loose equality, adhu compare panradhukku munnadi type conversion (coercion) pannum. === strict equality, adhu type conversion pannaadhu, value and type rendum same na dhaan true return pannum.',
                            'null na "value illa" nu naama intentionally set panra value. undefined na variable declare pannirukkom, but value assign pannala nu JavaScript automatically set panra value.',
                            'typeof null "object" nu varum (famous bug), typeof undefined "undefined" nu varum. null == undefined true, but null === undefined false.',
                            'Best practice: always === use pannunga. == ah null check ku only use pannalam (value == null na null and undefined rendum check aagum).',
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
                        text: '**== (loose equality)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compare panradhukku munnadi, rendu values oda type different na, JavaScript type ah convert pannum. Idhu dhaan type coercion.',
                            'Idhunaala unexpected results varum, so interview la idha avoid pannanum nu sollunga.',
                            'Rules simple ah illa, so result predict panna kashtam.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `console.log(5 == "5");        // true  (string number ah convert aagum)
        console.log(0 == false);      // true
        console.log("" == false);     // true
        console.log(null == undefined); // true
        console.log([] == false);     // true
        console.log(NaN == NaN);      // false`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`5 == "5"` la string `"5"` number ah convert aagum, so true.',
                            '`0 == false` la `false` number `0` ah convert aagum, so true.',
                            '`null == undefined` special rule, so true.',
                            '`NaN == NaN` false, because NaN always itself ku kooda equal illa.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**=== (strict equality)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Type conversion pannaadhu. Value and type rendum same na dhaan true.',
                            'Predictable, so best practice ah idha use pannuvom.',
                            'Objects and arrays ku reference compare pannum. Same reference na dhaan true.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `console.log(5 === "5");        // false (type different)
        console.log(0 === false);      // false
        console.log(null === undefined); // false
        console.log(NaN === NaN);      // false

        const a = { id: 1 };
        const b = { id: 1 };
        const c = a;

        console.log(a === b); // false (different reference)
        console.log(a === c); // true  (same reference)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`5 === "5"` false, because number and string different types.',
                            '`a === b` false, because content same irundhaalum, rendum different objects.',
                            '`a === c` true, because rendum same object ah point pannum.',
                            'NaN check panna `Number.isNaN(value)` or `Object.is(value, NaN)` use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**undefined**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Variable declare pannitu, value assign pannala na, JavaScript automatically `undefined` set pannum.',
                            'Function la return statement illa na, `undefined` return aagum.',
                            'Object la illaadha property access panna, `undefined` kedaikkum.',
                            'Function ku argument pass pannala na, parameter `undefined` ah irukkum.',
                            'Type: `undefined` (primitive).',
                        ],
                    },
                    {
                        type: 'code',
                        text: `let x;
        console.log(x); // undefined

        function greet() {}
        console.log(greet()); // undefined (no return)

        const user = { name: "Ravi" };
        console.log(user.age); // undefined (property illa)

        function show(name) {
        console.log(name);
        }
        show(); // undefined (argument pass pannala)

        console.log(typeof undefined); // "undefined"`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**null**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Developer intentionally set panra value. Meaning: "empty" or "no value".',
                            'JavaScript automatically `null` set pannaadhu. Naama dhaan set pannanum.',
                            'Type: `typeof null` `"object"` nu varum. Idhu JavaScript oda old bug, adha fix pannala.',
                            'Use case: Variable ku value later varum na, ippo empty nu show pannanum. Or object reference ah clear panna (`obj = null`).',
                        ],
                    },
                    {
                        type: 'code',
                        text: `let user = null; // intentionally empty

        console.log(user);        // null
        console.log(typeof user); // "object" (famous bug)

        // Object reference clear panna
        let data = { name: "Ravi" };
        data = null; // garbage collector free pannum

        // Correct way to check null
        console.log(user === null); // true`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**null vs undefined (comparison)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Meaning: `undefined` na value assign pannala. `null` na intentionally empty.',
                            'Who sets: `undefined` JavaScript set pannum. `null` developer set pannum.',
                            'Type: `typeof undefined` `"undefined"`. `typeof null` `"object"`.',
                            'Equality: `null == undefined` true. `null === undefined` false.',
                            'Number conversion: `Number(null)` 0. `Number(undefined)` NaN.',
                            'JSON: `JSON.stringify` null ah keep pannum. undefined property remove aagidum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `console.log(null == undefined);  // true
        console.log(null === undefined); // false

        console.log(Number(null));       // 0
        console.log(Number(undefined));  // NaN

        console.log(null + 5);           // 5
        console.log(undefined + 5);      // NaN

        console.log(JSON.stringify({ a: null, b: undefined }));
        // {"a":null}  (b remove aagiduchu)`,
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Safe checks**',
                    },
                    {
                        type: 'paragraph',
                        text: 'API la irundhu data varumbodhu, value null, undefined, or 0 ah irukkalam. Correct operator use pannala na bug varum.',
                    },
                    {
                        type: 'code',
                        text: `// Problem: || operator 0 and "" ah um falsy nu treat pannum
        const count = 0;
        const wrong = count || 10;
        console.log(wrong); // 10 (wrong, count 0 valid value)

        // Fix: ?? (nullish coalescing) null and undefined ku only work aagum
        const correct = count ?? 10;
        console.log(correct); // 0 (correct)

        // Optional chaining
        const user = { profile: null };
        console.log(user.profile?.name); // undefined (error varaadhu)

        // Check null or undefined (both)
        function isEmpty(value) {
        return value == null; // null and undefined rendum true
        }

        console.log(isEmpty(null));      // true
        console.log(isEmpty(undefined)); // true
        console.log(isEmpty(0));         // false
        console.log(isEmpty(""));        // false`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`||` operator `0`, `""`, `false` ah um falsy nu treat pannum, so valid value 0 irundhaalum default value use aagum.',
                            '`??` null and undefined ku only default value use pannum. So `0` safe.',
                            '`?.` use panna, null or undefined irundha error varaama `undefined` return aagum.',
                            '`value == null` oru exception, null and undefined rendaiyum one check la handle pannum.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: == vs ===, undefined, null, null vs undefined, example.',
                            '“=== type conversion pannaadhu, == pannum. undefined na value assign pannala, null na intentionally empty” nu kandippa sollunga. Idhu dhaan core point.',
                            'Examples kaattunga: `5 == "5"` true, `5 === "5"` false, `null == undefined` true, `null === undefined` false. Interview la idha romba ketpaanga.',
                            '`typeof null` `"object"` nu varum, idhu old bug nu mention pannunga.',
                            '`NaN === NaN` false nu sollunga, and `Number.isNaN()` use pannanum nu add pannunga.',
                            '`??` vs `||` difference sollunga. Idhu senior level answer.',
                            'Idhu type coercion, truthy and falsy values, and optional chaining oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “=== always, undefined = not set, null = set empty”.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-35',
        topicId: 'javascript',
        title: 'what is the difference between spread operator and rest operator?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Spread operator and rest operator rendum same syntax (...) use pannum, but opposite work pannum. Spread na array or object ah individual elements ah expand pannum. Rest na many elements ah collect panni, one array or object ah maathum.',
                            'Spread na values ah unpack pannum. Example: [...arr], {...obj}, fn(...args). Rest na values ah pack pannum. Example: function sum(...numbers), const [first, ...others] = arr.',
                            'Difference find panna, position paarunga. Function call, array literal, or object literal la irundha spread. Function parameters or destructuring la irundha rest.',
                            'Rest eppavum last la irukkanum. Spread shallow copy create pannum, nested objects same reference ah share aagum.',
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
                        text: '**Spread operator (expand)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Array, string, or object ah individual values ah expand pannum.',
                            'Function call, array literal, and object literal la use pannalam.',
                            'Use cases: array copy, arrays merge, object copy, object update, function ku array ah arguments ah pass panradhu.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const nums = [1, 2, 3];

        // Function call
        console.log(Math.max(...nums)); // 3

        // Array copy and merge
        const copy = [...nums];
        const merged = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

        // Object copy and update
        const user = { name: "Ravi", age: 25 };
        const updated = { ...user, age: 26 };
        console.log(updated); // { name: "Ravi", age: 26 }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Math.max(...nums)` la array `1, 2, 3` nu individual arguments ah expand aagum.',
                            '`[...nums]` new array create pannum, so original safe.',
                            '`{ ...user, age: 26 }` la same key irundha, last value win aagum. So `age` 26 aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Rest operator (collect)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Remaining values ah collect panni, one array (or object) create pannum.',
                            'Function parameters and destructuring la use pannalam.',
                            'Function parameters la rest, real array return pannum. So `map`, `filter`, `reduce` direct ah use pannalam.',
                            'Rest eppavum last la irukkanum. Illa na SyntaxError varum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Function parameters
        function sum(...numbers) {
        return numbers.reduce((total, n) => total + n, 0);
        }
        console.log(sum(1, 2, 3, 4)); // 10

        // Array destructuring
        const [first, second, ...others] = [10, 20, 30, 40, 50];
        console.log(first);  // 10
        console.log(others); // [30, 40, 50]

        // Object destructuring
        const { name, ...details } = { name: "Ravi", age: 25, city: "Pollachi" };
        console.log(details); // { age: 25, city: "Pollachi" }

        // function greet(...args, last) {} // SyntaxError (rest last la irukkanum)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`sum(1, 2, 3, 4)` la ellaa arguments um `numbers` array la collect aagum.',
                            '`first` and `second` ku first rendu values kedaikkum. Remaining values `others` la collect aagum.',
                            'Object destructuring la `name` separate ah edukkum. Remaining properties `details` la collect aagum.',
                            'Rest last la illa na, JavaScript ku remaining values enna nu theriyaadhu. So error varum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Spread vs Rest (quick comparison)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Work: Spread expand pannum (one to many). Rest collect pannum (many to one).',
                            'Position: Spread function call, array literal, object literal la irukkum. Rest function parameters and destructuring la irukkum.',
                            'Position rule: Rest eppavum last. Spread edhu position la venaalum use pannalam.',
                            'Result: Spread individual values kudukkum. Rest array or object kudukkum.',
                            'Easy way to remember: equal sign or function call ku right side la irundha spread. Left side or parameter la irundha rest.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function demo(...args) {       // rest: collect
        console.log(args);
        }

        const arr = [1, 2, 3];
        demo(...arr);                  // spread: expand -> demo(1, 2, 3)

        const [a, ...rest] = [...arr, 4]; // rest (left) and spread (right) same line la
        console.log(rest); // [2, 3, 4]`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`...args` parameter la irukku, so rest. Arguments ah collect pannum.',
                            '`...arr` function call la irukku, so spread. Array ah expand pannum.',
                            'Last line la left side `...rest` rest, right side `...arr` spread. Rendum same line la use pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Rest vs arguments object**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`arguments` array maari irukkum, but real array illa. So `map`, `filter` direct ah use panna mudiyaadhu.',
                            'Arrow function la `arguments` illa. Rest parameters use pannalam.',
                            'Rest real array, so modern code la `arguments` ku badhila rest use pannuvom.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function oldWay() {
        // arguments.map is not a function (real array illa)
        return Array.from(arguments).map((n) => n * 2);
        }

        const newWay = (...nums) => nums.map((n) => n * 2);

        console.log(oldWay(1, 2, 3)); // [2, 4, 6]
        console.log(newWay(1, 2, 3)); // [2, 4, 6]`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Spread: shallow copy limitation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Spread top level mattum copy pannum. Nested objects and arrays same reference ah share aagum.',
                            'Nested value change panna, original um change aagum.',
                            'Deep copy venum na `structuredClone()` use pannunga.',
                            'Object spread object literal la mattum work aagum. Plain object ah array la spread panna (`[...obj]`) TypeError varum, because object iterable illa.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const original = { name: "Ravi", address: { city: "Pollachi" } };
        const copy = { ...original };

        copy.address.city = "Chennai";
        console.log(original.address.city); // "Chennai" (original um change aachu)

        // Deep copy
        const deep = structuredClone(original);

        // const arr = [...original]; // TypeError (object iterable illa)`,
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: React props and state update**',
                    },
                    {
                        type: 'paragraph',
                        text: 'React la state immutable ah update panna spread use pannuvom. Component la props ah separate pannitu, remaining props ah child component ku pass panna rest and spread rendum use pannuvom.',
                    },
                    {
                        type: 'code',
                        text: `// Rest: className ah separate edukkrom, remaining props ah collect pannrom
        function Button({ className, ...otherProps }) {
        // Spread: remaining props ah button ku pass pannrom
        return <button className={"btn " + className} {...otherProps} />;
        }

        <Button className="primary" onClick={handleClick} disabled={false}>
        Save
        </Button>

        // Spread: immutable state update
        const [todos, setTodos] = useState([]);
        setTodos([...todos, { id: 1, text: "Learn JS" }]);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`...otherProps` rest, `className` thavira remaining props ah collect pannum.',
                            '`{...otherProps}` spread, andha props ah `button` ku one by one ah pass pannum.',
                            '`[...todos, newItem]` new array create pannum, so React change detect pannum.',
                            'Idhu dhaan spread and rest oda most common real-world use.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, spread, rest, position difference, example.',
                            '“Spread expand pannum, rest collect pannum. Rendum same syntax (...), but position paathu difference theriyum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Position rule sollunga: function parameters or destructuring la na rest, function call or literal la na spread. Interview la idha romba ketpaanga.',
                            'Rest last la dhaan irukkanum nu mention pannunga.',
                            'Spread shallow copy dhaan, nested objects share aagum nu sollunga. Idhula many per mistake pannuvaanga.',
                            'Rest real array, `arguments` real array illa, arrow function la `arguments` illa nu add pannunga. Idhu senior level answer.',
                            'Idhu destructuring, shallow copy vs deep copy, and immutability oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Spread = unpack, Rest = pack”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
