import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 'js-21',
        topicId: 'javascript',
        title: 'Implement throttle from scratch.',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Create a throttle function that runs a function at most once every X milliseconds. ',
                            'Track the last time the function ran. Only run if enough time has passed. ',
                            'If called during the throttle period, ignore it or queue it for later. ',
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
                        text: 'A throttle implementation tracks the last execution time and only runs the function if enough time has passed.',
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Variations:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Simple throttle** - just skip calls within interval ',
                            '**Throttle with leading** (run immediately, then wait) ',
                            '**Throttle with trailing** (queue last call to run after interval) ',
                            '**requestAnimationFrame** - based throttle for animations. Should `handle:` context binding, argument passing, cleanup, multiple throttle instances. `Advanced:` combine leading/trailing flags for max flexibility. Common pattern in `React:` useCallback with lastTime ref. ',
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
                        text: `function throttle(func, interval) {
                            let lastRun = 0;
                            return function throttled(...args) {
                                const now = Date.now();
                                if (now - lastRun >= interval) {
                                func.apply(this, args);
                                lastRun = now;
                                }
                            };
                            }
                            // Usage
                            const handleScroll = throttle(() => {
                            console.log('Scroll detected, checking if bottom...');
                            }, 200);
                            window.addEventListener('scroll', handleScroll);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Date.now() tracks when function last ran. We only execute if current time minus lastRun is greater than the interval.',
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
                        text: `In Archer Review, we throttled scroll detection for infinite scroll. Users scrolling fast would trigger 60+ events per second. Throttling to 200ms means at most 5 checks per second, which is plenty for detecting 'bottom reached'.`,
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
                        text: `A coffee shop gives out samples. They give one sample every 5 minutes maximum. No matter how many people line up, they hand out at most one every 5 minutes. Throttle is like this - guaranteed execution at intervals.`,
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
                            'Throttle ensures a function runs at most once every X milliseconds. ',
                            'We track the last time it ran with Date.now(). ',
                            'If enough time has passed, we run and update the lastRun time. ',
                            'If not enough time has passed, we skip the call. ',
                            'This keeps performance smooth on frequently-fired events like scroll. ',
                            'Throttle is different from debounce - throttle runs regularly, debounce waits for quiet. ',
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
                        items: ['throttle', 'Date.now', 'interval', 'lastRun', 'performance'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-22',
        topicId: 'javascript',
        title: 'What is shallow copy vs deep copy?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A shallow copy copies the top level of an object. ',
                            'If the object contains other objects or arrays, the copy still references the same inner objects. ',
                            'A deep copy copies everything, including nested objects and arrays. ',
                            "Changes to nested objects in a shallow copy affect the original. In a deep copy, they don't. ",
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
                            '**Shallow Copy:** Creates a new object/array but copies references to nested values.',
                            "**Methods:** spread operator {...obj}, Object.assign(), slice(), concat(). Changes to nested properties affect both original and copy. Suitable when nested values don't change.",
                            '**Deep Copy:** Creates a new object with completely independent copies of all nested values.',
                            '**Methods:** JSON.parse(JSON.stringify()) (has limitations - no functions, dates become strings), lodash.cloneDeep(), recursive function.',
                            '**Limitations of JSON method:** loses functions, Date objects become strings, undefined values lost, circular references fail.',
                            '**Performance:** shallow copy is fast, deep copy is slower but safer for nested structures.',
                            '**React:** state updates need new references for nested objects to trigger re-renders.',
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
                        text: `const original = { name: 'Ali', info: { age: 30 } };

                            // Shallow copy
                            const shallow = { ...original };
                            shallow.info.age = 25; // affects original!
                            console.log(original.info.age); // 25

                            // Deep copy with JSON
                            const deep = JSON.parse(JSON.stringify(original));
                            deep.info.age = 35; // doesn't affect original
                            console.log(original.info.age); // still 30`,
                    },
                    {
                        type: 'highlight',
                        text: 'Shallow copy only copies the top level. The info object is still shared. Deep copy creates independent nested objects.',
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
                        text: `In Archer Review, we used shallow copies for props in React - usually good enough. But when users edited nested form data, we needed deep copies to avoid affecting other instances. Deep copying prevented bugs where edits in one form affected others.`,
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
                        text: `You copy a recipe (object). Shallow copy: you copy the paper, but point to the same ingredient list (nested object). Modify the ingredient list, both papers are affected. Deep copy: you copy the paper AND write a new ingredient list. Modify the new one, the original is fine.`,
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
                            'Shallow copy copies only the top level of an object. ',
                            'Nested `objects/arrays` are still references to the same objects. ',
                            'We use spread operator or Object.assign() for shallow copying. ',
                            'Deep copy copies everything including nested `objects/arrays`. ',
                            'We use `JSON.parse/stringify` or recursive functions. ',
                            'In `React`, we need new references for nested state changes to trigger re-renders. ',
                            'Deep copy is slower but necessary when nested data changes. ',
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
                        items: ['shallow copy', 'deep copy', 'spread operator', 'Object.assign', 'nested objects'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-23',
        topicId: 'javascript',
        title: 'How would you clone a complex JavaScript object?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'To clone a complex object with nested properties and methods, use `JSON.stringify` and `parse` (loses functions), or use a recursive function (preserves everything), or use a library like `lodash.cloneDeep()`. ',
                            'Choose based on what the object contains.',
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
                        text: 'Complex cloning strategies:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**JSON.stringify/parse:** Simple, fast, but loses functions, Dates become strings, undefined lost. ',
                            '**Recursive cloning:** Copies all property types, handles circular references with WeakMap. ',
                            '**structured clone API:** Modern, handles most types including Date, Map, Set. ',
                            '**Lodash cloneDeep:** Reliable, handles edge cases. ',
                            '**Manual implementation with Object.create and property descriptors:** Most control. Consider: Performance (recursive is slowest), accuracy (JSON loses data), circular references (recursive needs WeakMap), what to clone (properties, methods, getters/setters).',
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
                        text: `// Recursive deep clone with circular reference handling
                            function deepClone(obj, map = new WeakMap()) {
                            if (obj === null || typeof obj !== 'object') return obj;
                            if (map.has(obj)) return map.get(obj);
                            
                            const clone = Array.isArray(obj) ? [] : {};
                            map.set(obj, clone);
                            
                            for (let key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                clone[key] = deepClone(obj[key], map);
                                }
                            }
                            return clone;
                            }
                            // Usage
                            const original = { a: 1, b: { c: 2 }, d: [3, 4] };
                            const cloned = deepClone(original);`,
                    },
                    {
                        type: 'highlight',
                        text: `Recursive function checks each value. If it's an object/array, recurse. WeakMap prevents infinite loops with circular references.`,
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
                        text: `In Archer Review, we cloned form data before editing so users could cancel changes. We couldn't use JSON.stringify because some fields had custom objects. We implemented a simple recursive clone for our needs.`,
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
                        text: `You're photocopying a book (object). A regular copy works for simple books. But if pages reference other pages or have complex diagrams, you need special equipment. For complex books, you'd need to manually recreate it perfectly. Cloning complex objects is like this.`,
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
                            'To clone a complex object, we have several options. ',
                            'JSON.stringify/parse is simple but loses functions and Dates. ',
                            'A recursive function preserves everything but needs to handle circular references with a WeakMap. ',
                            'The structured clone API is modern and handles most types. ',
                            'For production code, using lodash.cloneDeep() is reliable. ',
                            "We need deep cloning in React when state contains complex nested objects - shallow copies aren't enough. ",
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
                        items: ['deep clone', 'recursive', 'circular references', 'WeakMap', 'JSON stringify'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-24',
        topicId: 'javascript',
        title: 'What causes memory leaks in JavaScript?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Memory leaks happen when objects are no longer needed but are still referenced in memory. ',
                            "The garbage collector can't delete them because the code still references them. ",
                            'Common causes: forgetting to remove event listeners, not clearing timeouts, keeping references to large objects, circular references. ',
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
                        text: 'Memory leaks in JavaScript occur when memory is not released when objects are no longer needed. ',
                    },
                    {
                        type: 'heading',
                        text: 'Common causes:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event listeners not removed (addEventListener without removeEventListener). ',
                            'Timers not cleared (setTimeout/setInterval without clearTimeout). ',
                            'Closures holding large objects (especially in setInterval). ',
                            'Circular references (A references B, B references A). ',
                            'Detached DOM nodes (removed from HTML but still referenced). ',
                            'Global variables (stored in global scope forever). ',
                            'Forgotten console.logs and debugger statements. `In React:` useEffect cleanup function must clear subscriptions/timers. `Common pattern:` WeakMap to avoid preventing garbage collection. ',
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
                        text: `// LEAK - event listener never removed
                            element.addEventListener('click', handler);
                            // element.removeEventListener('click', handler); // forgot this

                            // LEAK - timeout never cleared
                            const id = setTimeout(() => {
                            console.log('delayed');
                            }, 1000);
                            // clearTimeout(id); // forgot this

                            // FIX in React
                            useEffect(() => {
                            const handler = () => console.log('clicked');
                            element.addEventListener('click', handler);
                            return () => element.removeEventListener('click', handler);
                            }, []);`,
                    },
                    {
                        type: 'highlight',
                        text: `Event listeners keep the handler and element in memory. Timers keep callbacks queued. Cleanup functions prevent these leaks.`,
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
                        text: `In Archer Review, we had memory leaks from event listeners on dynamically created elements. When users navigated away, listeners stayed in memory. We learned to clean up in useEffect return functions.`,
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
                        text: `You buy furniture (objects) and place them in a room (memory). When you move out, you leave the furniture (leak). It stays in the room forever because you still "own" it according to the deed (reference). Cleaning up is selling the furniture (removing references).`,
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
                            "Memory leaks happen when objects can't be garbage collected because code still references them. ",
                            '`Common causes:` event listeners not removed, timeouts not cleared, closures holding large objects, circular references. ',
                            'In React, useEffect cleanup functions must remove listeners and cancel timers. ',
                            'The key is removing references when objects are no longer needed. ',
                            'Memory leaks gradually reduce app performance. ',
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
                        items: ['memory leaks', 'event listeners', 'setTimeouts', 'garbage collection', 'cleanup'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-25',
        topicId: 'javascript',
        title: 'How does garbage collection work?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            "Garbage collection automatically frees memory that's no longer needed. ",
                            'JavaScript tracks which objects are referenced. ',
                            'If an object is not referenced anymore, the garbage collector deletes it and frees the memory. ',
                            "This happens automatically - you don't need to manage it manually. ",
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
                        text: 'Garbage collection automatically reclaims memory from objects no longer referenced by the program. ',
                    },
                    {
                        type: 'heading',
                        text: 'JavaScript uses mark-and-sweep algorithm (most modern engines): ',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Mark Phase:** start from root (global), mark all reachable objects. ',
                            '**Sweep Phase:** delete unmarked objects, free their memory. ',
                            '**Reachability:** an object is reachable if referenced from root, or referenced from a reachable object. ',
                            '**Generations:** objects are divided by age - young objects checked frequently, old objects less often (optimization). ',
                            "**Weak references:** WeakMap and WeakSet don't prevent garbage collection (used for caches). ",
                            '**Stop-the-world pause:** GC stops code execution briefly (can affect performance). ',
                            '**Optimization:** reducing object allocations and keeping reference chains short helps GC efficiency. ',
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
                        text: `let obj = { name: 'Ali', data: new Array(1000000) };
                            console.log(obj); // object in memory
                            obj = null; // reference removed
                            // garbage collector will eventually free this memory

                            // WeakMap - doesn't prevent garbage collection
                            const cache = new WeakMap();
                            let key = { id: 1 };
                            cache.set(key, 'value');
                            key = null; // key is garbage collected, cache entry removed automatically`,
                    },
                    {
                        type: 'highlight',
                        text: `Setting obj to null removes the reference. Garbage collection will delete the object and free its memory. WeakMap entries are automatically removed when the key is garbage collected.`,
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
                        text: `In Archer Review, we understood GC to avoid creating unnecessary objects. We reused objects where possible and removed references when done. We used WeakMap for caching to avoid preventing garbage collection.`,
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
                        text: `A library (memory). Books (objects) are on shelves. Librarians (garbage collectors) periodically check which books no one is borrowing (no references). They take those books off the shelves and burn them (free memory). The library stays organized with space for new books.`,
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
                            'Garbage collection automatically frees memory from objects no longer referenced. ',
                            'Modern JavaScript uses mark-and-sweep algorithm. ',
                            'Reachability is key - if an object is not referenced from any reachable object, it can be garbage collected. ',
                            "WeakMap and WeakSet don't prevent garbage collection. ",
                            'GC can cause brief pauses in execution. Writing good code helps GC - remove references when done, avoid circular references, use WeakMap for caches. ',
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
                        items: ['garbage collection', 'mark-and-sweep', 'reachability', 'WeakMap', 'memory management'],
                    },
                ],
            },
        ],
    }),
];
