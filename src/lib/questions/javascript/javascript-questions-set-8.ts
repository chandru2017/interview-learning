import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet8: IQuestion[] = [
    createQuestion({
        id: 'js-36',
        topicId: 'javascript',
        title: 'What are the ES6 features?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'ES6 (ECMAScript 2015) JavaScript oda biggest update. Idhula code ah short, clean, and easy to read ah ezhudha neraya new features add aachu. Modern JavaScript ah ES6 la irundhu dhaan start aachu nu solluvaanga.',
                            'Main features: let and const, arrow functions, template literals, destructuring, spread and rest operators, default parameters, classes, modules (import and export), Promises, Map and Set, Symbol, generators, and for...of loop.',
                            'Variables ku let and const, functions ku arrow functions and default parameters, strings ku template literals, data handling ku destructuring and spread and rest, OOP ku classes, code organization ku modules, async work ku Promises. Ippadi category wise sonna, remember panna easy.',
                            'Interview la ellaa features um list panna thevai illa. Most important 5 or 6 features oda example show pannunga: let and const, arrow functions, destructuring, spread and rest, Promises, modules.',
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
                        text: '**let and const**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`let` and `const` block scoped. `var` function scoped.',
                            '`let` value ah re-assign pannalam. `const` re-assign panna mudiyaadhu.',
                            'Both Temporal Dead Zone la irukkum, so declare panradhukku munnadi use panna ReferenceError varum.',
                            'Best practice: default ah `const` use pannunga. Value change aaganum na `let` use pannunga.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const PI = 3.14;
        let count = 0;
        count = 1; // OK
        // PI = 3.15; // TypeError

        if (true) {
        let blockScoped = "inside";
        }
        // console.log(blockScoped); // ReferenceError`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Arrow functions**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Short syntax. One expression na `{}` and `return` thevai illa.',
                            'Own `this` illa. Outer scope oda `this` ah use pannum (lexical this).',
                            'Own `arguments` illa. `new` use panni constructor ah use panna mudiyaadhu.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const add = (a, b) => a + b;
        const square = (n) => n * n;

        const user = {
        name: "Ravi",
        delayedHi() {
            setTimeout(() => console.log("Hi " + this.name), 100); // this = user
        },
        };
        user.delayedHi(); // "Hi Ravi"`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Template literals**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Backticks (`) use pannuvom.',
                            '`${}` kulla variable or expression ah directly add pannalam.',
                            'Multi-line strings support pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const name = "Ravi";
        const age = 25;

        console.log(\`Hi \${name}, next year you will be \${age + 1}\`);
        // "Hi Ravi, next year you will be 26"

        const message = \`Line 1
        Line 2\`; // multi-line`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Destructuring**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Array or object la irundha values ah easy ah separate variables ah extract pannalam.',
                            'Array destructuring position paathu work aagum. Object destructuring key name paathu work aagum.',
                            'Default values, rename, and nested destructuring um support pannum.',
                            'Function parameters la um use pannalam.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Array
        const [first, second] = [10, 20];

        // Object
        const user = { name: "Ravi", age: 25, city: "Pollachi" };
        const { name, age } = user;

        // Rename and default
        const { city: location, country = "India" } = user;
        console.log(location, country); // "Pollachi" "India"

        // Function parameters
        function greet({ name, age }) {
        console.log(name + " is " + age);
        }
        greet(user);

        // Swap values
        let a = 1, b = 2;
        [a, b] = [b, a];`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Spread and rest operators**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Same syntax (`...`), but opposite work. Spread expand pannum, rest collect pannum.',
                            'Spread: array copy, arrays merge, object update.',
                            'Rest: function parameters and destructuring la remaining values ah collect pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const nums = [1, 2, 3];
        const more = [...nums, 4, 5]; // spread

        function sum(...numbers) {    // rest
        return numbers.reduce((a, b) => a + b, 0);
        }
        console.log(sum(...nums));    // 6`,
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Default parameters**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Argument pass pannala na, default value use aagum.',
                            'Default value `undefined` ku mattum work aagum. `null` pass panna default use aagaadhu.',
                            'Default value ah function call pannumbodhu evaluate aagum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `function greet(name = "Guest", greeting = "Hello") {
        return greeting + ", " + name;
        }

        console.log(greet());            // "Hello, Guest"
        console.log(greet("Ravi"));      // "Hello, Ravi"
        console.log(greet(null));        // "Hello, null" (null ku default use aagala)`,
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Classes**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`class` keyword oru cleaner syntax. Internally prototypal inheritance dhaan, so syntactic sugar.',
                            '`constructor` object create aagumbodhu run aagum.',
                            '`extends` and `super` use panni inheritance pannalam.',
                            'Static methods, getters, and setters support pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            return "Hi, I am " + this.name;
        }
        }

        class Student extends Person {
        constructor(name, course) {
            super(name);
            this.course = course;
        }

        study() {
            return this.name + " is studying " + this.course;
        }
        }

        const s = new Student("Ravi", "JavaScript");
        console.log(s.greet()); // "Hi, I am Ravi"
        console.log(s.study()); // "Ravi is studying JavaScript"`,
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Modules (import and export)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Code ah multiple files ah split panni, organize pannalam.',
                            'Named export: one file la many exports. Import panna same name use pannanum, curly braces la.',
                            'Default export: one file ku one default. Import panna any name use pannalam.',
                            'Modules automatically strict mode la run aagum. Each module ku own scope irukku.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// math.js
        export const add = (a, b) => a + b;
        export const subtract = (a, b) => a - b;
        export default function multiply(a, b) {
        return a * b;
        }

        // app.js
        import multiply, { add, subtract } from "./math.js";

        console.log(add(2, 3));      // 5
        console.log(multiply(2, 3)); // 6`,
                    },
                ],
            },
            {
                label: '9',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Promises**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Async operation oda result (success or failure) ah represent pannum.',
                            'Three states: Pending, Fulfilled, Rejected.',
                            '`.then()`, `.catch()`, `.finally()` use pannalam. Callback hell ah avoid panna help pannum.',
                            'Later ES2017 la `async/await` add aachu, adhu Promises mela build aana syntax.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const getData = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data received"), 1000);
        });

        getData()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));`,
                    },
                ],
            },
            {
                label: '10',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Other important features**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Map` and `Set`: Map la any type key use pannalam. Set la unique values mattum irukkum.',
                            '`WeakMap` and `WeakSet`: Objects ku weak reference hold pannum.',
                            '`Symbol`: Unique and immutable primitive value. Object property keys ku use pannalam.',
                            '`for...of`: Iterable (array, string, Map, Set) la values ah loop pannalam.',
                            'Generators (`function*`): `yield` use panni function ah pause and resume pannalam.',
                            'Enhanced object literals: shorthand property (`{ name }`), shorthand method, computed property names (`{ [key]: value }`).',
                            'New methods: `Array.find()`, `Array.findIndex()`, `Array.from()`, `Array.of()`, `Object.assign()`, `String.includes()`, `startsWith()`, `endsWith()`, `repeat()`.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Enhanced object literals
        const name = "Ravi";
        const key = "age";

        const user = {
        name,                 // shorthand property
        greet() {},           // shorthand method
        [key]: 25,            // computed property
        };

        // Map and Set
        const set = new Set([1, 2, 2, 3]);
        console.log([...set]); // [1, 2, 3]

        const map = new Map([["a", 1]]);
        console.log(map.get("a")); // 1

        // for...of
        for (const ch of "Hi") {
        console.log(ch); // "H", "i"
        }

        // New methods
        console.log([1, 2, 3].find((n) => n > 1)); // 2
        console.log("hello".includes("ell"));       // true`,
                    },
                ],
            },
            {
                label: '11',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: ES6 features together**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Real project la ES6 features ah separate ah use pannaadhinga, together use pannuvom. Idhu oru small API data handling example.',
                    },
                    {
                        type: 'code',
                        text: `// api.js
        export const fetchUser = async (id) => {
        const response = await fetch(\`/api/users/\${id}\`);
        return response.json();
        };

        // app.js
        import { fetchUser } from "./api.js";

        const showUser = async (id, { showEmail = false } = {}) => {
        const { name, email, ...otherDetails } = await fetchUser(id);

        const info = { name, ...(showEmail && { email }) };
        console.log(\`User: \${info.name}\`, info, otherDetails);
        };

        showUser(1, { showEmail: true });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`import` and `export` modules, `const` and arrow function, template literal, default parameter, destructuring, rest, and spread, ellaam one example la use aagudhu.',
                            'Idhu dhaan modern JavaScript code eppadi irukkum nu kaattum.',
                            'ES6 features ah together use panna, code short and clean ah irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '12',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**ES6 vs later versions**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'ES6 (2015) la major features vandhuchu. After that every year small updates varudhu.',
                            'ES2016: `Array.includes()`, exponent operator (`**`).',
                            'ES2017: `async/await`, `Object.entries()`, `Object.values()`.',
                            'ES2018: Object spread and rest, `Promise.finally()`.',
                            'ES2020: Optional chaining (`?.`), nullish coalescing (`??`), `BigInt`, `Promise.allSettled()`.',
                            'ES2022: Class private fields (`#field`), top-level `await`, `Array.at()`.',
                            'Interviewer "ES6 features" nu kettaalum, neenga later features ah mention panna, extra impression kedaikkum.',
                        ],
                    },
                ],
            },
            {
                label: '13',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: what is ES6, main features category wise, 5 or 6 features example, later versions.',
                            '“ES6 2015 la vandha JavaScript oda major update. let and const, arrow functions, destructuring, spread and rest, classes, modules, Promises ellam ES6 features” nu kandippa sollunga. Idhu dhaan core point.',
                            'Ellaa features ah list pannaadhinga. Most important features ku short example kaattunga.',
                            'let and const, arrow functions (`this` behavior), and destructuring ku code example ready ah vechukonga. Interview la idha romba ketpaanga.',
                            'Classes syntactic sugar over prototypal inheritance nu mention pannunga. Idhu senior level answer.',
                            '`var` vs `let` vs `const` difference kettaa, answer ready ah irukkanum.',
                            'Idhu scope, `this`, prototypal inheritance, Promises, and immutability oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Variables, Functions, Strings, Data, Classes, Modules, Async”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
