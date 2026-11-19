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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Shallow copy na oru object or array ah copy pannumbodhu, mela irukkura first level values mattum pudhusa copy aagum. Nested objects or arrays ku, adhoda reference mattum copy aagum, so original and copy rendum same nested object ah share pannum.',
                            'Deep copy na nested objects or arrays um sethu, ellaa levels um pudhusa copy aagum. So copy ah maathina, original ku effect aagaadhu.',
                            'Shallow copy ku spread operator (...), Object.assign(), and Array.slice() use pannuvom. Deep copy ku structuredClone() use pannuvom.',
                            'JSON.parse(JSON.stringify(obj)) trick um deep copy ku use pannalam, but function, undefined, Date, Map, Set maari values ku problem varum.',
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
                        text: '**Primitive vs Reference (base concept)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Primitive values (number, string, boolean) copy panna, actual value copy aagum. So copy maathina original ku effect aagaadhu.',
                            'Reference values (object, array) copy panna, memory address (reference) copy aagum. So rendu variables um same object ah point pannum.',
                            'Shallow copy vs deep copy problem, nested reference values la dhaan varum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Shallow copy**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Top level properties mattum pudhusa copy aagum.',
                            'Nested object or array oda reference dhaan copy aagum, actual nested object copy aagaadhu.',
                            'Copy la nested value ah maathina, original la um maarum.',
                            'Methods: spread operator (`{ ...obj }`, `[...arr]`), `Object.assign({}, obj)`, `arr.slice()`.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Deep copy**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Nested objects and arrays um sethu, ellaa levels um pudhusa copy aagum.',
                            'Copy ah maathina, original ku effect aagaadhu. Rendum completely independent.',
                            'Methods: `structuredClone(obj)` (recommended), `JSON.parse(JSON.stringify(obj))`, and Lodash `_.cloneDeep()`.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example**',
                    },
                    {
                        type: 'code',
                        text: `const original = {
        name: "Ravi",
        address: { city: "Pollachi" },
        };

        // Shallow copy
        const shallow = { ...original };
        shallow.name = "Kumar";            // original ku effect illa
        shallow.address.city = "Chennai";  // original um maarum

        console.log(original.name);         // "Ravi"
        console.log(original.address.city); // "Chennai" (maariduchu)

        // Deep copy
        const original2 = {
        name: "Ravi",
        address: { city: "Pollachi" },
        };

        const deep = structuredClone(original2);
        deep.address.city = "Chennai";

        console.log(original2.address.city); // "Pollachi" (maaralai)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`shallow.name` primitive, so copy la maathina original ku effect illa.',
                            '`shallow.address` reference, so rendum same `address` object ah share pannum.',
                            'Adhunaala `shallow.address.city` maathina, `original.address.city` um maariduchu.',
                            '`structuredClone` nested objects ah um pudhusa copy pannum, so `original2` safe.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**JSON trick limitations**',
                    },
                    {
                        type: 'code',
                        text: `const obj = {
        name: "Ravi",
        age: undefined,
        greet() {},
        date: new Date(),
        };

        const copy = JSON.parse(JSON.stringify(obj));
        console.log(copy);
        // { name: "Ravi", date: "2026-11-19T..." }
        // age and greet missing, date string ah maariduchu`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`undefined` values and functions remove aagidum.',
                            '`Date` object string ah maaridum.',
                            '`Map`, `Set` empty object ah maaridum.',
                            'Circular reference irundha error varum.',
                            'Adhunaala modern code la `structuredClone()` use pannuvom. Aana structuredClone ku um functions copy panna mudiyaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: React state update**',
                    },
                    {
                        type: 'paragraph',
                        text: 'React la state ah direct ah maatha koodadhu. Nested state update pannumbodhu shallow copy mattum panna, nested object original state oda share aagum, so bug varum. Adhunaala nested level kum spread use pannanum.',
                    },
                    {
                        type: 'code',
                        text: `const state = {
        user: { name: "Ravi", city: "Pollachi" },
        count: 0,
        };

        // Wrong: shallow copy, user object share aagum
        const wrong = { ...state };
        wrong.user.city = "Chennai"; // original state um maariduchu

        // Correct: nested level kum spread
        const correct = {
        ...state,
        user: { ...state.user, city: "Chennai" },
        };`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`wrong` la `user` reference share aagum, so original state um maarum. Idhu bug.',
                            '`correct` la `user` ku um spread use pannrom, so pudhu `user` object create aagum.',
                            'Idhu dhaan immutable update pattern.',
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
                            'Idha order la sollunga: primitive vs reference, shallow copy, deep copy, example, methods.',
                            '“Shallow copy la nested objects oda reference dhaan copy aagum, deep copy la ellaa levels um pudhusa copy aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Mela irukkura example (`shallow.address.city`) whiteboard la ezhudhi explain pannunga. Interview la idha romba ketpaanga.',
                            '`structuredClone()` recommended nu sollunga, JSON trick oda limitations um mention pannunga. Idhu senior level answer.',
                            'Spread operator shallow copy dhaan, deep copy illa nu clear ah sollunga. Idhula neraya per mistake pannuvaanga.',
                            'Idhu primitive vs reference types and const oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Shallow = top level new, nested shared. Deep = everything new”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Complex object na nested objects, arrays, Date, Map, Set, and circular references irukkura object. Idha clone panna, mudhalla structuredClone() use pannuvom, adhu dhaan modern and recommended way.',
                            'structuredClone() Date, Map, Set, RegExp, nested objects, and circular references ellam correct ah copy pannum. Aana functions, DOM nodes copy panna mudiyaadhu, class instance oda prototype um lose aagidum.',
                            'JSON.parse(JSON.stringify(obj)) trick la Date string ah maarum, undefined and functions remove aagum, Map and Set empty object aagidum, circular reference irundha error varum. Adhunaala complex object ku idha avoid pannuvom.',
                            'Functions or class instances venum na, Lodash _.cloneDeep() use pannalam, or namma own recursive deepClone function ezhudhalam. Circular reference handle panna WeakMap use pannuvom.',
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
                        text: '**Option 1: structuredClone() (recommended)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Browser and Node.js la built-in ah irukku, extra library thevai illa.',
                            'Nested objects, arrays, Date, Map, Set, RegExp, and circular references ellam support pannum.',
                            'Limitation: functions copy panna mudiyaadhu, error varum (DataCloneError).',
                            'Limitation: class instance clone panna, prototype lose aagi, plain object aagidum. Getters and setters um lose aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Option 2: JSON trick (limitations)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`undefined` values and functions remove aagidum.',
                            '`Date` string ah maaridum.',
                            '`Map` and `Set` empty object ah maaridum.',
                            'Circular reference irundha `TypeError` varum.',
                            'Simple data (numbers, strings, plain objects, arrays) ku mattum use pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Option 3: Lodash _.cloneDeep()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Library already project la irundha, idha use pannalam.',
                            'Circular references, Date, Map, Set handle pannum.',
                            'Class instance oda prototype ah preserve pannum.',
                            'Extra dependency add aagum, so only thevai na use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Option 4: Custom recursive deepClone**',
                    },
                    {
                        type: 'code',
                        text: `function deepClone(value, seen = new WeakMap()) {
        // Primitive and function: direct ah return
        if (value === null || typeof value !== "object") {
            return value;
        }

        // Circular reference: already clone panna object ah return
        if (seen.has(value)) {
            return seen.get(value);
        }

        if (value instanceof Date) {
            return new Date(value);
        }

        if (value instanceof RegExp) {
            return new RegExp(value.source, value.flags);
        }

        if (value instanceof Map) {
            const mapCopy = new Map();
            seen.set(value, mapCopy);
            value.forEach((v, k) => {
            mapCopy.set(deepClone(k, seen), deepClone(v, seen));
            });
            return mapCopy;
        }

        if (value instanceof Set) {
            const setCopy = new Set();
            seen.set(value, setCopy);
            value.forEach((v) => {
            setCopy.add(deepClone(v, seen));
            });
            return setCopy;
        }

        // Array or object (prototype preserve pannrom)
        const copy = Array.isArray(value)
            ? []
            : Object.create(Object.getPrototypeOf(value));

        seen.set(value, copy);

        Reflect.ownKeys(value).forEach((key) => {
            copy[key] = deepClone(value[key], seen);
        });

        return copy;
        }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Primitive and function ah direct ah return pannrom. Function share aagum, adhu fine.',
                            '`WeakMap` (`seen`) already clone panna objects ah remember pannum. Circular reference vandha, infinite loop aagaama, same clone ah return pannum.',
                            '`Date`, `RegExp`, `Map`, `Set` ku special handling venum, because normal object maari copy panna mudiyaadhu.',
                            '`Object.create(Object.getPrototypeOf(value))` use panna, class instance oda prototype preserve aagum.',
                            '`Reflect.ownKeys` string keys and Symbol keys rendaiyum copy pannum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (comparison)**',
                    },
                    {
                        type: 'code',
                        text: `const original = {
        name: "Ravi",
        joined: new Date("2024-01-15"),
        tags: new Set(["js", "react"]),
        scores: new Map([["math", 90]]),
        address: { city: "Pollachi" },
        greet() {
            return "Hi";
        },
        };

        // Circular reference
        original.self = original;

        // structuredClone: function irundha error
        // structuredClone(original); // DataCloneError (greet function)

        // JSON trick: circular reference irundha error
        // JSON.stringify(original); // TypeError

        // Custom deepClone: ellam work aagum
        const clone = deepClone(original);

        clone.address.city = "Chennai";
        console.log(original.address.city);       // "Pollachi" (original safe)
        console.log(clone.joined instanceof Date); // true
        console.log(clone.tags instanceof Set);    // true
        console.log(clone.self === clone);         // true (circular reference correct)
        console.log(clone.self === original);      // false`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`structuredClone` function irukkura object ku error throw pannum.',
                            'JSON trick circular reference ku error throw pannum.',
                            'Custom `deepClone` Date, Set, Map, function, and circular reference ellam handle pannum.',
                            '`clone.self === clone` true, so circular reference clone kulla dhaan point pannum, original ku illa.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Which one to use?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Plain data (objects, arrays, Date, Map, Set, circular reference): `structuredClone()`.',
                            'Functions or class instances with methods: `_.cloneDeep()` or custom `deepClone`.',
                            'Simple JSON-like data and old browser support: JSON trick.',
                            'Only top level copy podhum na: spread operator (shallow copy).',
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
                            'Idha order la sollunga: structuredClone, JSON trick limitations, Lodash, custom deepClone.',
                            '“Modern code la structuredClone use pannuvom. Functions or class instances venum na Lodash or custom recursive function use pannuvom” nu kandippa sollunga. Idhu dhaan core point.',
                            'JSON trick oda limitations (Date, undefined, Map, Set, circular reference) clear ah sollunga. Interview la idha romba ketpaanga.',
                            'Custom deepClone ezhudha sonna, `WeakMap` use panni circular reference handle pannunga. Idhu senior level answer.',
                            '`structuredClone` function copy panna mudiyaadhu, prototype lose aagum nu mention pannunga.',
                            'Idhu shallow copy vs deep copy, recursion, and WeakMap oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “structuredClone first, custom if needed”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Memory leak na namma ku thevai illaadha memory ah JavaScript free panna mudiyaama irukkurathu. Garbage collector oru object ah, adha yaarachum reference pannitu irundha free pannaadhu. Namma andha reference ah vittu vaikkalana, memory free aagaadhu.',
                            'Main causes: accidental global variables, forgotten timers (setInterval), remove pannaadha event listeners, closures large data ah hold pannitu irukkurathu, and detached DOM nodes.',
                            'Unlimited ah grow aagura cache or array (Map, object) um memory leak ku oru main reason. Idha WeakMap or size limit use panni fix pannalam.',
                            'Fix pannum bodhu cleanup pannanum: clearInterval, removeEventListener, AbortController, and React la useEffect cleanup function. Leak ah find panna Chrome DevTools la Memory tab (heap snapshot) use pannuvom.',
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
                        text: '**Base concept (garbage collection)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript automatic ah memory manage pannum. Garbage collector use aagaadha objects ah free pannum.',
                            'Object ah "reachable" ah irundha (entha variable or reference la irundhu aachum access panna mudinja), adha free pannaadhu.',
                            'Namma thevai illaadha object ku reference vachirundha, adhu reachable ah irukkum, so memory la irundhitte irukkum. Idhu dhaan memory leak.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 1: Accidental global variables**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Variable ah `let`, `const`, `var` illaama declare panna, adhu global object oda property aagidum.',
                            'Global variables page close aagura varaikkum memory la irukkum.',
                            'Fix: eppavum `let` or `const` use pannunga, and `"use strict"` use pannunga. Strict mode la idhu error throw pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function setUser() {
        user = { name: "Ravi", data: new Array(1000000) }; // let/const illa, global aagidum
        }

        setUser();
        // user ippo global, memory free aagaadhu`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 2: Forgotten timers**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`setInterval` stop pannala na, adhu forever run aagum. Adhoda callback kulla irukkura variables um memory la irukkum.',
                            'Component or page thevai illa nu aana apram kooda, timer run aagitte irukkum.',
                            'Fix: `clearInterval` or `clearTimeout` use panni timer ah stop pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const bigData = new Array(1000000).fill("data");

        const id = setInterval(() => {
        console.log(bigData.length); // bigData memory la irundhitte irukkum
        }, 1000);

        // Fix
        clearInterval(id);`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 3: Event listeners remove pannaama irukkurathu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Element ku `addEventListener` add pannina, listener function and adhula use aagura variables memory la irukkum.',
                            'Element remove aanaalum, listener ku vera reference irundha, memory free aagaadhu.',
                            'Fix: thevai illa na `removeEventListener` use pannunga. Or `AbortController` use panni, ellaa listeners ah oru dhadava remove pannalam.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function handleResize() {
        console.log("resized");
        }

        window.addEventListener("resize", handleResize);

        // Fix
        window.removeEventListener("resize", handleResize);

        // AbortController use panni fix
        const controller = new AbortController();

        window.addEventListener("resize", handleResize, { signal: controller.signal });
        window.addEventListener("scroll", handleResize, { signal: controller.signal });

        controller.abort(); // rendu listeners um remove aagidum`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 4: Closures large data ah hold pannurathu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Closure outer function oda variables ah remember pannum. Andha variable periya data na, closure irukkura varaikkum adhu memory la irukkum.',
                            'Closure thevai illa nu aana apram kooda, reference vachirundha, memory free aagaadhu.',
                            'Fix: thevai mudinjadhum variable ah `null` set pannunga, or closure kulla thevaiyaana data mattum use pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function createHandler() {
        const hugeData = new Array(1000000).fill("data");

        return function () {
            console.log(hugeData.length); // hugeData ah remember pannum
        };
        }

        let handler = createHandler();
        handler();

        // Fix: thevai illa na reference ah remove pannunga
        handler = null; // ippo garbage collector free pannum`,
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 5: Detached DOM nodes**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'DOM element ah page la irundhu remove panna, aana JavaScript variable la adha store pannitu irundha, adhu memory la irukkum.',
                            'Idhu detached DOM node nu solluvom. Page la theriyaadhu, aana memory la irukkum.',
                            'Fix: element remove pannina apram, adhoda reference ah `null` set pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `let button = document.getElementById("btn");
        document.body.removeChild(button);

        // button variable innum element ah hold pannitu irukku
        // Fix
        button = null;`,
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cause 6: Unlimited cache or growing array**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cache ku `Map` or object use panni, entries ah remove pannaama irundha, adhu continuous ah grow aagum.',
                            'Fix 1: `WeakMap` use pannunga. Key object ku vera reference illa na, entry automatic ah remove aagidum.',
                            'Fix 2: Cache ku size limit vaiyunga (example: LRU cache).',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Leak: Map entries remove aagaadhu
        const cache = new Map();

        function process(obj) {
        cache.set(obj, "some data");
        }

        // Fix: WeakMap, obj ku vera reference illa na entry free aagum
        const weakCache = new WeakMap();

        function processSafe(obj) {
        weakCache.set(obj, "some data");
        }`,
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: React useEffect cleanup**',
                    },
                    {
                        type: 'paragraph',
                        text: 'React component la `setInterval` or event listener add pannitu, component unmount aagumbodhu cleanup pannala na, component remove aanaalum timer run aagitte irukkum. Idhu romba common leak.',
                    },
                    {
                        type: 'code',
                        text: `import { useEffect, useState } from "react";

        function Timer() {
        const [seconds, setSeconds] = useState(0);

        useEffect(() => {
            const id = setInterval(() => {
            setSeconds((s) => s + 1);
            }, 1000);

            const handleResize = () => console.log("resized");
            window.addEventListener("resize", handleResize);

            // Cleanup function: component unmount aagumbodhu run aagum
            return () => {
            clearInterval(id);
            window.removeEventListener("resize", handleResize);
            };
        }, []);

        return <p>{seconds}</p>;
        }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cleanup function illa na, component unmount aana apram kooda `setInterval` run aagitte irukkum.',
                            'Window la add pannina listener, component remove aanaalum, window la irundhitte irukkum.',
                            '`useEffect` kulla return pannura function dhaan cleanup. Idhula timers, listeners, subscriptions ellam clean pannanum.',
                        ],
                    },
                ],
            },
            {
                label: '9',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Memory leak eppadi find pannurathu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Chrome DevTools la Memory tab open pannunga.',
                            'Heap snapshot edunga, apram app use pannunga, apram innoru heap snapshot edunga. Rendaiyum compare pannina, entha objects grow aagirukku nu theriyum.',
                            'Performance tab la memory graph continuous ah mela pogitte irundha, leak irukku nu artham.',
                            'Detached DOM nodes ah snapshot la "Detached" nu search pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '10',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, causes, example, fix, eppadi find pannurathu.',
                            '“Garbage collector reachable objects ah free pannaadhu. Thevai illaadha object ku reference vachirundha, memory leak aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Causes list ah gnabagam vechukonga: global variables, timers, event listeners, closures, detached DOM nodes, unlimited cache.',
                            'React la `useEffect` cleanup function pathi mention pannunga. Interview la idha romba ketpaanga.',
                            '`WeakMap` and `WeakRef` memory leak ah thadukka help pannum nu sollunga. Idhu senior level answer.',
                            'Chrome DevTools heap snapshot use panni leak find panna theriyum nu sollunga. Idhu practical experience kaattum.',
                            'Idhu closure, event listeners, garbage collection, and WeakMap oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Timers, Listeners, Globals, Closures, DOM, Cache”.',
                        ],
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Garbage collection na JavaScript engine, namma ku thevai illaadha memory ah automatic ah free panra process. Namma manually memory allocate or free panna thevai illa.',
                            'Garbage collector oru object ah free pannalaama nu decide panna, "reachability" use pannum. Root la irundhu (global object, call stack variables) entha object ah access panna mudiyudho, adhu reachable. Access panna mudiyaadha object unreachable, adha free pannidum.',
                            'Modern engines (V8) Mark-and-Sweep algorithm use pannum. Mudhalla roots la irundhu reachable objects ah mark pannum, apram mark aagaadha objects ah memory la irundhu remove pannum.',
                            'Performance ku Generational GC use pannum. Young generation la pudhu objects irukkum, adhu frequently clean aagum. Neraya time survive aana objects Old generation ku pogum, adhu rarely clean aagum. GC work main thread ah block panna koodadhu nu, incremental, concurrent, and parallel techniques use pannum.',
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
                        text: '**Why garbage collection venum**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Program run aagumbodhu objects, arrays, functions create aagum, adhukku memory venum.',
                            'Use aagi mudinja apram, andha memory ah free pannanum. Illa na memory full aagidum.',
                            'C and C++ la developer manually free pannanum. JavaScript la garbage collector automatic ah pannum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reachability (core concept)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Roots: global object, current call stack la irukkura local variables.',
                            'Root la irundhu direct ah or reference chain vazhiya access panna mudinja object reachable.',
                            'Reachable objects ah garbage collector free pannaadhu.',
                            'Unreachable objects (entha reference um illaadha) free aagidum.',
                            'Oru object ah reference pannura object um unreachable aana, rendum free aagidum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `let user = { name: "Ravi" }; // reachable (user variable reference pannudhu)

        user = null; // ippo { name: "Ravi" } object ah entha reference um illa
        // Garbage collector idha free pannum

        let a = { name: "A" };
        let b = { friend: a };

        a = null;
        // a variable null aachu, aana b.friend innum object ah reference pannudhu
        // So object innum reachable, free aagaadhu

        b = null;
        // ippo entha reference um illa, rendu objects um free aagum`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Mark-and-Sweep algorithm**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Step 1, Mark: Roots la irundhu start pannitu, reachable aagura ellaa objects ah mark pannum.',
                            'Step 2, Sweep: Mark aagaadha objects ellam unreachable, adha memory la irundhu remove pannum.',
                            'Step 3: Mark ah reset pannitu, adutha cycle ku ready aagum.',
                            'Idhu dhaan modern engines use pannura main algorithm.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reference Counting (old algorithm) and circular reference problem**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reference counting la, ovvoru object ku evlo references irukku nu count pannum. Count 0 aana, free pannum.',
                            'Problem: Circular reference. Rendu objects ore mela ore reference pannina, count eppavum 0 aagaadhu, so free aagaadhu. Idhu memory leak.',
                            'Mark-and-Sweep la idhu problem illa. Circular reference irundhaalum, root la irundhu reach panna mudiyala na, rendum free aagidum.',
                            'Pazhaya browsers (old Internet Explorer) reference counting use pannina, adhunaala leak varum. Ippo modern browsers ellam Mark-and-Sweep.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function createCycle() {
        const objA = {};
        const objB = {};

        objA.ref = objB;
        objB.ref = objA; // circular reference
        }

        createCycle();
        // Function mudinja apram objA and objB root la irundhu reach panna mudiyaadhu
        // Reference counting: free aagaadhu (count 0 aagala)
        // Mark-and-Sweep: free aagum (unreachable)`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Generational garbage collection (V8)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Most objects short time kulla thevai illaama aagidum (example: function kulla create aagura temporary variables).',
                            'Young generation: Pudhu objects inga create aagum. Idhu small, so frequently and fast ah clean aagum (Minor GC, Scavenge).',
                            'Old generation: Young generation la survive aana objects inga pogum. Idhu periya, so rarely clean aagum (Major GC, Mark-Sweep-Compact).',
                            'Idhunaala ovvoru dhadavayum full memory scan panna thevai illa, performance nalla irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**GC pause ah kammi panna techniques**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'GC run aagumbodhu JavaScript execution konjam time pause aagum (stop-the-world). Idhu user ku lag ah theriyum.',
                            'Incremental: GC work ah small small parts ah pirichu, naduvula JavaScript run aaga vidum.',
                            'Concurrent: GC work ah background thread la run pannum, main thread ah block pannaadhu.',
                            'Parallel: Multiple threads use panni GC work ah fast ah mudikkum.',
                            'Idhunaala V8 la GC pause romba kammi.',
                        ],
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Closure and reachability**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Closure irukkura varaikkum, adhu use pannura outer variables reachable ah irukkum. Closure ah remove pannina dhaan, andha data free aagum.',
                    },
                    {
                        type: 'code',
                        text: `function createHandler() {
        const hugeData = new Array(1000000).fill("data");

        return function () {
            console.log(hugeData.length);
        };
        }

        let handler = createHandler();
        // handler closure hugeData ah reference pannudhu, so hugeData reachable

        handler();

        handler = null;
        // ippo closure ah entha reference um illa
        // hugeData unreachable aagidum, garbage collector free pannum`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Closure irukkura varaikkum `hugeData` reachable, free aagaadhu.',
                            '`handler = null` set panna, closure unreachable aagum, so `hugeData` um free aagum.',
                            'Idhu dhaan memory leak and garbage collection rendukkum irukkura connection.',
                        ],
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**WeakMap, WeakSet, and WeakRef**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`WeakMap` and `WeakSet` objects ah weak reference ah hold pannum. Andha object ku vera reference illa na, garbage collector free pannidum.',
                            '`WeakRef` oru object ku weak reference kudukkum. Object free aagi irundha, `deref()` `undefined` return pannum.',
                            'Use case: Cache, metadata store panna. Object remove aana, cache entry um automatic ah remove aagidum.',
                            'Garbage collection eppo run aagum nu predict panna mudiyaadhu, so idha logic ku depend panna koodadhu.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const cache = new WeakMap();

        let obj = { id: 1 };
        cache.set(obj, "metadata");

        console.log(cache.get(obj)); // "metadata"

        obj = null;
        // obj ku vera reference illa
        // Garbage collector eppo run aanaalum, cache entry um free aagidum`,
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
                            'Idha order la sollunga: definition, reachability, Mark-and-Sweep, generational GC, example.',
                            '“Garbage collector root la irundhu reachable objects ah mark pannum, unreachable objects ah free pannum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Reachability concept clear ah sollunga. Reference irukkardhu mattum podhaadhu, root la irundhu reach panna mudiyanum. Idhula neraya per confuse aaguvaanga.',
                            'Reference counting vs Mark-and-Sweep difference, and circular reference problem mention pannunga. Interview la idha romba ketpaanga.',
                            'Generational GC (Young and Old generation) mention pannunga. Idhu senior level answer.',
                            'Garbage collection eppo run aagum nu predict panna mudiyaadhu, manually trigger panna mudiyaadhu nu sollunga.',
                            'Idhu memory leaks, closures, and WeakMap oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Mark reachable, sweep the rest”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
