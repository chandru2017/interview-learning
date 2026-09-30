import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet6: IQuestion[] = [
    createQuestion({
        id: 'js-26',
        topicId: 'javascript',
        title: 'What are WeakMap and WeakSet?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "WeakMap and WeakSet are collections like Map and Set, but their keys/values don't prevent garbage collection. ",
                            'If a key in WeakMap becomes unreferenced, the entry is automatically removed. ',
                            "This is useful for caches and metadata that shouldn't keep objects alive. WeakMap keys must be objects. ",
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
                            '**WeakMap:** stores key-value pairs where keys must be objects. ',
                            "Keys don't prevent garbage collection - if key is unreferenced, the entry is removed automatically. ",
                            '**Methods:** get(), set(), delete(), has(). No iteration, no size property. ',
                            '**WeakSet:** stores object values. Values are automatically removed when unreferenced. ',
                            '**Methods:** add(), delete(), has(). No iteration. ',
                            '**Use cases:** caches (DOM node -> cached data), metadata (store private data), avoid memory leaks. ',
                            "**Limitations:** no iteration (can't loop), no size, no forEach. ",
                            'WeakMap used in React for tracking component instances, in libraries for DOM-related caches. ',
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
                        text: `// WeakMap - keys are garbage collected
                            const cache = new WeakMap();
                            let obj = { id: 1 };
                            cache.set(obj, 'cached data');
                            console.log(cache.get(obj)); // 'cached data'
                            obj = null; // if this becomes unreferenced elsewhere
                            // the entry in cache is automatically removed

                            // Regular Map would keep obj alive
                            const regularMap = new Map();
                            regularMap.set(obj, 'data'); // obj is kept alive
                            obj = null;
                            console.log(regularMap.size); // 1 - entry still there
                            // the object won't be garbage collected!`,
                    },
                    {
                        type: 'highlight',
                        text: `WeakMap doesn't keep keys alive. Regular Map keeps them forever. This is the key difference for garbage collection.`,
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
                        text: `In Archer Review, we could have used WeakMap for caching component instance data, but usually didn't need to. We understood that using regular Map for things we want to keep was fine.`,
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
                        text: `A WeakMap is like a sticky note on a photo. When you throw away the photo (object becomes unreferenced), the sticky note goes with it. A regular Map is like a photo album - photos never get thrown away because the album keeps them.`,
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
                            'WeakMap and WeakSet store keys/values without preventing garbage collection. ',
                            'If a key in WeakMap is unreferenced, the entry is automatically removed. ',
                            'This is useful for caches and metadata. WeakMap keys must be objects. ',
                            "They don't have iteration methods or size property. ",
                            'Use them to cache data associated with objects without preventing garbage collection. ',
                            'Regular Map keeps keys alive forever. ',
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
                        items: ['WeakMap', 'WeakSet', 'garbage collection', 'cache', 'memory efficient'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-27',
        topicId: 'javascript',
        title: 'What are generators?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A generator is a special function that can pause and resume. ',
                            'You write it with function* and use yield to pause. ',
                            'Each time you call next(), the generator runs until the next yield, then pauses. ',
                            'This lets you create sequences of values without calculating them all at once. ',
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
                            'Generators are functions marked with  `function*` that can pause execution and resume. ',
                            '`yield` pauses and returns a value. `next()` resumes execution. ',
                            'Returns an iterator object with done (boolean) and value properties. ',
                            'Each call to `next()` runs until the next `yield`. ',
                            '**Useful for:** lazy evaluation (generate values on demand), state machines (complex workflows), async patterns (before async/await). ',
                            'Generator objects are iterable (can use in for...of loops). return value is captured as final value. `throw()` allows sending errors into generators. ',
                            '**Delegation:** `yield*` delegates to another generator. ',
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
                        text: `function* counter(max) {
                            let i = 0;
                            while (i < max) {
                                yield i;
                                i++;
                            }
                            }
                            const gen = counter(3);
                            console.log(gen.next()); // { value: 0, done: false }
                            console.log(gen.next()); // { value: 1, done: false }
                            console.log(gen.next()); // { value: 2, done: false }
                            console.log(gen.next()); // { value: undefined, done: true }

                            for (const num of counter(3)) {
                            console.log(num); // 0, 1, 2
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: `Each next() call resumes from the previous yield. Generators are iterable, so for...of loops work naturally.`,
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
                        text: `In Archer Review, we didn't use generators directly much, but understanding them helped us understand async/await (which is built on generators). We used iterators in some utility functions.`,
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
                        text: `A vending machine (generator). You press the button, it gives you one snack (yield). You press again, it gives another. It calculates snacks as needed, not all at once. This is lazy - on demand.`,
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
                            'Generators are functions marked with `function*` that pause and resume with `yield`. ',
                            'Each `next()` call runs until the next `yield`. They return an iterator with `value` and `done` properties. ',
                            'Generators are useful for lazy evaluation - generating values on demand rather than all at once. ',
                            'They were the foundation for `async/await` patterns. ',
                            'You can iterate generators with `for...of` loops. ',
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
                        items: ['generators', 'function*', 'yield', 'iterator', 'lazy evaluation'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-28',
        topicId: 'javascript',
        title: 'What is currying?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currying is breaking down a function that takes multiple arguments into a series of functions that each take one argument. ',
                            'Instead of `add(1, 2, 3)`, you do `add(1)(2)(3)`. Each function returns another function until all arguments are provided, then it executes. ',
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
                            'Currying is a functional programming technique where a function taking n arguments is transformed into n functions each taking 1 argument. ',
                            '**Benefits:** partial application (create specialized functions), readability with named functions, function composition (easier to combine). ',
                            '**Implementation:** recursively return functions until all arguments collected. ',
                            '**Distinguish:** partial application (providing some arguments) vs currying (each function takes 1 argument). ',
                            "**Downsides:** overhead of multiple function calls, less readable for simple cases. Common in functional libraries. JavaScript doesn't automatically curry - you must implement it. ",
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
                        text: `// Normal function
                            function add(a, b, c) {
                            return a + b + c;
                            }

                            // Curried version
                            function curry(fn) {
                            return function curried(...args) {
                                if (args.length >= fn.length) {
                                return fn.apply(this, args);
                                }
                                return (...nextArgs) => curried(...args, ...nextArgs);
                            };
                            }
                            const curriedAdd = curry(add);
                            console.log(curriedAdd(1)(2)(3)); // 6
                            console.log(curriedAdd(1, 2)(3)); // 6 - also works`,
                    },
                    {
                        type: 'highlight',
                        text: `The curried function collects arguments one at a time, returning a new function until all arguments are provided.`,
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
                        text: `In Archer Review, we used currying for creating reusable handler factories. A curried validation function would create specific validators for different fields.`,
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
                        text: `You're building a sandwich. Normal: provide all ingredients at once. Curried: add one ingredient at a time, waiting for confirmation before adding the next. Or decide later what the next ingredient is.`,
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
                            'Currying transforms a function with multiple arguments into a series of functions each taking one argument. ',
                            '**Benefits:** include partial application (create specialized functions from general ones) and easier function composition. ',
                            '**Implementation:** return functions until all arguments are collected, then execute. ',
                            'In React, this is useful for creating handler factories or middleware. ',
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
                            'currying',
                            'partial application',
                            'function composition',
                            'multiple arguments',
                            'functional programming',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-29',
        topicId: 'javascript',
        title: 'What is function composition?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function composition is combining multiple functions into one. ',
                            'The output of one function becomes the input of the next. ',
                            'Instead of `f(g(h(x)))`, you compose them: `compose(f, g, h)(x)`. ',
                            'This makes code more readable and reusable. ',
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
                            'Function composition is combining functions where the output of one is the input of the next, creating a pipeline. ',
                            '**Implementation:** compose takes functions, returns a new function that applies them right-to-left (or left-to-right in pipe). ',
                            '**Benefits:** code reusability, readability (clear data flow), testability (small functions), modularity. Practical: data transformations, middleware chains, event handlers. ',
                            'Often paired with currying for maximum flexibility. Functional programming core principle. ',
                            'Many libraries (lodash, ramda) provide compose/pipe utilities. ',
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
                        text: `// Simple compose
                            function compose(...fns) {
                                return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
                                }
                                // Or pipe (left to right)
                                function pipe(...fns) {
                                return (value) => fns.reduce((acc, fn) => fn(acc), value);
                            }
                            const add = (x) => x + 10;
                            const multiply = (x) => x * 2;
                            const square = (x) => x * x;

                            const composed = compose(square, multiply, add);
                            console.log(composed(5)); // ((5+10)*2)^2 = 2400

                            const piped = pipe(add, multiply, square);
                            console.log(piped(5)); // ((5+10)*2)^2 = 2400`,
                    },
                    {
                        type: 'highlight',
                        text: `compose applies functions right-to-left. pipe applies left-to-right. Both create a single function from multiple small functions.`,
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
                        text: `In Archer Review, we could have used composition for data transformation pipelines. We often chained operations on user data - this is composition.`,
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
                        text: `A factory assembly line. Each station (function) does one job (transformation). The output of one station becomes input for the next. The final station outputs the finished product. Composition is this pipeline.`,
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
                            'Function composition combines multiple functions into a data pipeline. ',
                            'The output of one function becomes input for the next. We implement compose (right-to-left) and pipe (left-to-right) to create single functions from small ones. ',
                            'Composition makes code more modular, readable, and testable. Each function does one thing, and composing them creates complex behavior. ',
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
                        items: ['composition', 'pipe', 'compose', 'function programming', 'data pipeline'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-30',
        topicId: 'javascript',
        title: 'What are pure functions?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A pure function always returns the same output for the same input and has no side effects. ',
                            "It doesn't modify external state or depend on external state. Pure functions are easier to test, reason about, and combine. ",
                            'This is a core principle of functional programming. ',
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
                        text: 'A pure function has two criteria:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Deterministic:** same inputs always produce same outputs. ',
                            "**No side effects:** doesn't modify external state, doesn't perform I/O, doesn't modify arguments. Benefits: easy to test (no setup needed), memoizable (cache results), safe to parallelize, easier to debug (no global state interference). Not pure: functions with random(), Date.now(), API calls, console.log(), modifying global variables, modifying arguments. In React: component render functions should be pure (same props = same output). Redux reducers must be pure. Contrast with impure functions which make code harder to test and reason about. ",
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
                        text: `// PURE - same input always same output, no side effects
                            const add = (a, b) => a + b;
                            const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
                            const double = (arr) => arr.map(x => x * 2); // doesn't modify arr

                            // IMPURE - depends on external state
                            let total = 0;
                            const addToTotal = (n) => { // impure - modifies external state
                            total += n;
                            return total;
                            };
                            const getRandomUser = () => fetch('/api/random'); // impure - I/O
                            const mutateArray = (arr) => { // impure - modifies argument
                            arr.push(1);
                            return arr;
                            };`,
                    },
                    {
                        type: 'highlight',
                        text: `Pure functions (add, capitalize, double) have no side effects and are deterministic. Impure functions modify state or do I/O.`,
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
                        text: `In Archer Review, we wrote pure reducer functions for state management. Pure component logic made testing easy - just pass props, check output.`,
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
                        text: `A pure vending machine always gives the same snack for the same coin (input). An impure vending machine sometimes gives different snacks, sometimes takes your coin without giving anything, and talks to a manager (side effects).`,
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
                            'Pure functions always return the same output for the same input and have no side effects. ',
                            "They don't modify external state or depend on it. ",
                            'Pure functions are easier to test, reason about, and parallelize. ',
                            'In React, render functions should be pure - same props should always produce the same output. ',
                            'Redux reducers must be pure. Pure functions are a core principle of functional programming. ',
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
                        items: ['pure functions', 'side effects', 'deterministic', 'functional programming', 'testing'],
                    },
                ],
            },
        ],
    }),
];
