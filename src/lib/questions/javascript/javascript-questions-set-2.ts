import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'js-6',
        topicId: 'javascript',
        title: 'Explain lexical scope.',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Lexical scope means where a function can access variables depends on where the function is written in the code, not where it is called from. ',
                            "If written inside another function, it can access that function's variables. If written in the global scope, it can access all variables. ",
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
                            'Lexical scope (static scope) means variable accessibility is determined by the source code position, not runtime execution. ',
                            "A function's scope chain is established when defined, not when called. All nested functions access variables in parent scopes based on their lexical position. ",
                            'Fundamental for understanding closures and variable resolution. ',
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
                        text: `const global = 'global';
                            function a() {
                            const varA = 'A';
                            b();
                            }
                            function b() {
                            console.log(varA); // ReferenceError
                            }
                            a();`,
                    },
                    {
                        type: 'highlight',
                        text: `b() cannot access varA even though it's called inside a(). Scope is determined by where functions are written, not where they're called.`,
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
                        text: `In Archer Review, components are defined in specific files. Nested components access parent component's variables through lexical scope. Callbacks close over parent variables through lexical scope.`,
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
                        text: `A building blueprint (source code). Each room (function) has a closet (scope). Drawing a room inside another room means the inner room's closet includes the outer room's things. The blueprint determines accessibility, not which door you enter.`,
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
                            'Lexical scope means where a variable can be accessed depends on where the function is written. ',
                            "A function's scope is determined when defined, not when called. ",
                            "Inner functions can access outer function's variables. This determines the scope chain. ",
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
                            'Lexical scope na oru variable ah access panna mudiyuma nu, code eppadi write pannirukkom nu paathu decide aagura rule. Function enga call pannurom nu paathu illa, enga write pannirukkom nu paathu dhaan.',
                            'Inner function, adhoda outer scope variables ah access pannalam. Aana outer function, inner variables ah access panna mudiyaadhu.',
                            'JavaScript scope chain use panni, inner to outer variables ah search pannum.',
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
                        text: '**Definition**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Scope author time la (code ezhudhumbodhe) decide aagum, runtime la illa.',
                            'Function enga define pannirukkom nu paathu dhaan, adhu entha variables ah access pannalam nu theriyum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Nested scopes**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function kulla function irundha, inner function ku outer scope access irukkum.',
                            'Access inner to outer direction la mattum dhaan.',
                            'Search global scope vara pogum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Call location doesn’t matter**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function ah veliya irundhu call pannaalum, adhu define aana idaththoda scope ah dhaan use pannum.',
                            'Idhu dhaan lexical scope and dynamic scope difference. JavaScript la dynamic scope illa.',
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
                        text: `const name = "global";
        function outer() {
        const name = "outer";
        function inner() {
            console.log(name); // "outer" (inner define aana idaththula irundhu search pannum)
        }
        return inner;
        }
        const fn = outer();
        fn(); // "outer" (veliya irundhu call pannaalum "outer" dhaan varum)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`inner` function `outer` kulla define aagirukku.',
                            '`inner` la `name` illa, so `outer` scope la search pannum, `"outer"` kedaikkum.',
                            '`fn()` ah global la call pannaalum, `"global"` varaadhu. Because call location matter aagaadhu, define location dhaan matter aagum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, nested scopes, call location doesn’t matter.',
                            '“Scope enga write pannirukkom nu paathu decide aagum, enga call pannurom nu paathu illa” nu kandippa sollunga. Idhu dhaan core point.',
                            'Mela irukkura example ah whiteboard la trace pannunga. `fn()` global la call aanaalum `"outer"` varum nu kaattunga.',
                            'Idhu scope chain and closure oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Write pannina idam, Scope”.',
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
                            'lexical scope',
                            'scope chain',
                            'static scope',
                            'where functions are written',
                            'variable accessibility',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-7',
        topicId: 'javascript',
        title: 'How does `this` work in JavaScript?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'this is a special keyword that refers to an object. ',
                            'Which object depends on how the function is called. ',
                            'If called as a method of an object, this is that object. ',
                            'If called as a regular function, this is the global object (or undefined in strict mode). ',
                            'Arrow functions get this from the surrounding scope.',
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
                            'The value of this is determined by how a function is invoked. ',
                            '**Method call:** this is the object. ',
                            '**Regular call:** this is global (or undefined in strict mode). ',
                            '**Constructor call (new):** this is the newly created object. ',
                            '**Explicit binding (call, apply, bind):** this is explicitly set. ',
                            '**Arrow functions:** this inherits from enclosing scope. ',
                            '**Event handlers:** this is typically the element. ',
                            'Understanding this is crucial for classes, event handling, and avoiding bugs with callbacks.',
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
                        text: `const obj = {
                                    name: 'Ali',
                                    greet: function() {
                                        console.log(this.name);
                                    }
                                };
                                obj.greet();
                                const greet = obj.greet;
                                greet();`,
                    },
                    {
                        type: 'highlight',
                        text: `When called as obj.greet(), this is obj. When assigned to a variable and called, this loses its context. This is a common bug.`,
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
                        text: `In Archer Review, we used this in class components (before hooks). Event handlers lose this context - we bind them or use arrow functions. Understanding this helped us debug state update issues.`,
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
                            "A telephone (function). Answer at home (method call), 'this' is your home. ",
                            "Answer at office (function call), 'this' is office. ",
                            "Through receptionist (explicit binding), 'this' is who receptionist says. ",
                            "Arrow functions are magic phones - 'this' is always where you first got the phone.",
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
                            'this refers to an object, but which object depends on how the function is called. ',
                            '**Method call:** this is that object. ',
                            '**Regular call:** this is global or undefined in strict mode. ',
                            '**With arrow functions:** this comes from the surrounding scope. ',
                            'Understanding this is important for event handlers and callbacks.',
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
                            '`this` na oru special keyword. Adhoda value, function eppadi call pannurom nu paathu decide aagum, eppadi write pannirukkom nu paathu illa.',
                            'Normal function la, call pannura object dhaan `this`. Arrow function ku own `this` illa, adhu outer scope oda `this` ah use pannum.',
                            '`call`, `apply`, `bind` use panni `this` ah manually set pannalam.',
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
                        text: '**Call place based rules**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Global scope: Browser la `this` window object. Strict mode la `undefined`.',
                            'Object method: `obj.method()` call pannumbodhu, `this` andha `obj`.',
                            'Normal function call: `fn()` nu call pannumbodhu, `this` window. Strict mode la `undefined`.',
                            'Constructor: `new` use pannumbodhu, `this` pudhusa create aagura object.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Arrow function**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Arrow function ku own `this` illa.',
                            'Adhu define aana place oda `this` ah inherit pannum. Idhu lexical `this`.',
                            'Atha maathika `call`, `apply`, `bind` use panna mudiyaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Explicit binding**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`call(obj, a, b)`: `this` ah set panni, function ah udane execute pannum.',
                            '`apply(obj, [a, b])`: `call` maari, aana arguments array la kudukkanum.',
                            '`bind(obj)`: `this` set panni, pudhu function return pannum. Udane execute aagaadhu.',
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
                        text: `const user = {
        name: "Ravi",
        greet() {
            console.log(this.name); // "Ravi" (this = user)
        },
        greetArrow: () => {
            console.log(this.name); // undefined (arrow, outer this use pannum)
        },
        };
        user.greet();      // "Ravi"
        user.greetArrow(); // undefined
        const greet = user.greet;
        greet(); // undefined (this = window, method lose aachu)
        greet.call({ name: "Kumar" });      // "Kumar"
        const bound = greet.bind(user);
        bound();                            // "Ravi"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`user.greet()` la, `user` object call pannuradhaala `this = user`.',
                            'Arrow function la `this` outer scope dhaan, so `user` illa.',
                            '`const greet = user.greet` nu extract pannumbodhu, object illama call aagum, so `this` lose aagum.',
                            '`call` and `bind` use panni `this` ah manually set pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: definition, call place rules, arrow function, explicit binding.',
                            '“`this` value call time la decide aagum, arrow function ku mattum define time la decide aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Method extract panna `this` lose aagura example kaattunga. Idhu interview la romba ketpaanga.',
                            'Idhu lexical scope oda connect aagum, because arrow function `this` ah lexical scope la irundhu edukkum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-8',
        topicId: 'javascript',
        title: 'What is the difference between regular functions and arrow functions?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Regular functions (function keyword) and arrow functions (=>) are different. ',
                            "Arrow functions don't have their own this - they use this from outer scope. ",
                            'Regular functions have their own this. ',
                            "Arrow functions can't be used with new keyword. ",
                            "Arrow functions don't have arguments object.",
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
                            'Regular functions have their own this binding determined by invocation context. ',
                            "Arrow functions lexically bind this from enclosing scope - can't be reassigned. ",
                            'Regular functions work as constructors with new and have prototype property. ',
                            'Arrow functions cannot be constructors. ',
                            "Regular functions have arguments object; arrow functions don't (use rest parameters). ",
                            'Regular functions fully hoisted; arrow functions are not reassignable. ',
                            'Use arrow functions for callbacks, event handlers, array methods. ',
                            'Regular functions for constructors and methods needing this.',
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
                        text: `const obj = {
                                    name: 'Ali',
                                    regularFn: function() { console.log(this.name); },
                                    arrowFn: () => { console.log(this.name); }
                                };
                                obj.regularFn();  // 'Ali'
                                obj.arrowFn();    // undefined`,
                    },
                    {
                        type: 'highlight',
                        text: `Regular function gets this from the object. Arrow function gets this from global scope. Arrow functions don't bind this from the calling context.`,
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
                        text: `In Archer Review, we used arrow functions in event handlers and React callbacks to avoid this binding issues. In setTimeout, arrow functions ensured correct this binding. This prevented bugs with state access.`,
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
                            "Two worker types. Regular functions ask 'Who hired me today?' - determine boss based on today's hire.",
                            "Arrow functions remember 'Who hired me first?' - always work for the first employer.",
                            'Arrow functions are loyal to original employer.',
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
                            'Regular and arrow functions have key differences. ',
                            "Regular functions have their own this based on how they're called. ",
                            "Arrow functions use this from surrounding scope and can't change it. ",
                            "Regular functions can be constructors with new, arrow functions can't. ",
                            'Regular functions have arguments object. ',
                            'We use arrow functions in modern code for callbacks and event handlers.',
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
                            'Regular function and arrow function rendum function ezhudha use pannura ways. Main difference this, arguments, and constructor la irukku.',
                            'Regular function ku own this irukku, adhu call pannura object ah point pannum. Arrow function ku own this illa, adhu outer scope oda this ah use pannum.',
                            'Arrow function ku arguments object illa, new use panni constructor ah use panna mudiyaadhu.',
                            'Short callbacks ku arrow function, object methods and constructors ku regular function use pannuvom.',
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
                        text: '**this behavior**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Regular function: this call time la decide aagum. Yaar call pannuraanga nu paathu maarum.',
                            'Arrow function: this define time la decide aagum. Adhu outer scope oda this ah inherit pannum (lexical this).',
                            '`call`, `apply`, `bind` use panni arrow function this ah maatha mudiyaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**arguments and constructor**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Regular function la arguments object irukku. Arrow function la illa, rest parameters (`...args`) use pannanum.',
                            'Regular function ah new use panni constructor ah use pannalam. Arrow function la new use panna TypeError varum.',
                            'Arrow function ku prototype property um illa.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Syntax and return**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Arrow function short syntax. Oru expression na {} and return thevai illa (implicit return).',
                            'Regular function (function declaration) hoist aagum. Arrow function variable la store aagura nala, Temporal Dead Zone la irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (this)**',
                    },
                    {
                        type: 'code',
                        text: `const user = {
        name: "Ravi",
        regular() {
            console.log(this.name); // "Ravi" (this = user)
        },
        arrow: () => {
            console.log(this.name); // undefined (outer this)
        },
        delayed() {
            setTimeout(() => {
            console.log(this.name); // "Ravi" (arrow, outer this = user)
            }, 100);
        },
        };

        user.regular(); // "Ravi"
        user.arrow();   // undefined
        user.delayed(); // "Ravi"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`user.regular()` la this = user, so "Ravi" varum.',
                            '`user.arrow()` la arrow function outer scope oda this use pannum, so user illa, undefined varum.',
                            '`delayed()` la setTimeout ulla arrow function, delayed oda this (user) ah inherit pannum, so "Ravi" varum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (arguments and constructor)**',
                    },
                    {
                        type: 'code',
                        text: `function show() {
        console.log(arguments); // works
        }

        const showArrow = (...args) => {
        console.log(args); // rest parameters use pannanum
        };

        function Person(name) {
        this.name = name;
        }
        new Person("Ravi"); // OK

        const PersonArrow = (name) => {
        this.name = name;
        };
        // new PersonArrow("Ravi"); // TypeError`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Regular function la arguments direct ah use pannalam. Arrow function la rest parameters use pannanum.',
                            'Arrow function ah new use panna TypeError varum.',
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
                            'Idha order la sollunga: definition, this, arguments and constructor, syntax.',
                            '“Regular function ku call time la this decide aagum, arrow function ku define time la decide aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'setTimeout or callback ulla arrow function this ah correct ah vachukkum example kaattunga. Idhu dhaan arrow function oda main use.',
                            'Object method ku arrow function use panna koodadhu nu mention pannunga.',
                            'Idhu this and lexical scope oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Regular: who calls. Arrow: where written”.',
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
                        items: ['arrow function', 'regular function', 'this binding', 'constructor', 'lexical scope'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-9',
        topicId: 'javascript',
        title: 'Explain call(), apply(), and bind().',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'call(), apply(), and bind() let you control what this refers to when calling a function. ',
                            'call() and apply() call the function immediately. ',
                            "bind() returns a new function but doesn't call it immediately. ",
                            'call passes arguments individually. ',
                            'apply passes arguments as an array. ',
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
                            '**Explicit this binding methods:** call(thisArg, arg1, arg2) - calls immediately, individual arguments. ',
                            '**apply(thisArg, [arg1, arg2])** - calls immediately, array arguments. ',
                            '**bind(thisArg, arg1, arg2)** - returns bound function, useful for event handlers and callbacks.',
                            '**call() and apply()** execute immediately; **bind()** returns a function to execute later.',
                            '**Practical uses:** borrowing methods from other objects, fixing this in callbacks, creating partial functions.',
                            'With bind(), subsequent calls use the bound this, ignoring new invocation context.',
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
                        text: `function greet(greeting, punctuation) {
                                 console.log(greeting + ', ' + this.name + punctuation);
                                }
                                const person = { name: 'Ali' };
                                greet.call(person, 'Hello', '!');
                                greet.apply(person, ['Hello', '!']);
                                const boundGreet = greet.bind(person);
                                boundGreet('Hi', '?');`,
                    },
                    {
                        type: 'highlight',
                        text: `call and apply execute immediately with specified this. bind returns a function that we call later. apply takes array arguments, call takes individual arguments.`,
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
                        text: `In Archer Review, we used bind() in event handlers to bind this when attaching to DOM elements. We used apply() to spread array data to functions. These methods helped us work with callbacks correctly.`,
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
                            'You have a script (function) and a character (this). ',
                            'call() lets you insert the character and immediately perform the script. ',
                            'apply() does the same but you give character details as a list. ',
                            'bind() lets you prepare the script with the character, but perform it later. ',
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
                            'call, apply, and bind are methods to control this binding. ',
                            'call and apply execute the function immediately - call takes individual arguments, apply takes an array. ',
                            'bind returns a new function with this bound permanently. ',
                            'We use bind for event handlers and callbacks. ',
                            'These methods let you borrow functions from other objects. ',
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
                            '`call(), apply(),` and `bind()` are methods to set the value of this manually for a function.',
                            '`call()` this ah set pannitu, function ah immediately execute pannum. Arguments ah comma separate panni pass pannanum.',
                            '`apply()` um `call()` maari this ah set pannitu function ah immediately execute pannum. Difference enna na, apply() la arguments ah array la pass pannanum.',
                            '`bind()` function ah execute pannaadhu. this set panni, oru new function return pannum. Adha later epo venalum call pannalam.',
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
                        text: '**call()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Syntax: `fn.call(thisArg, arg1, arg2)`.',
                            'this ah set pannitu, function ah immediately execute pannum.',
                            'Arguments ah comma separate panni pass pannanum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**apply()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Syntax: `fn.apply(thisArg, [arg1, arg2])`.',
                            'call() maari dhaan, this ah set pannitu function ah immediately execute pannum.',
                            'Arguments ah array la pass pannanum. Namma kitta data already array la irundha, idhu useful.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**bind()**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Syntax: `const newFn = fn.bind(thisArg, arg1)`.',
                            'Function ah immediately execute pannaadhu. this set pannitu, oru new function return pannum.',
                            'Andha new function ah namma later epo venalum call pannalam.',
                            'Callbacks and event handlers la this lose aagaama irukka idhu useful.',
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
                        text: `function introduce(city, country) {
        console.log(this.name + " from " + city + ", " + country);
        }

        const user = { name: "Ravi" };

        introduce.call(user, "Pollachi", "India");    // "Ravi from Pollachi, India"
        introduce.apply(user, ["Pollachi", "India"]); // "Ravi from Pollachi, India"

        const bound = introduce.bind(user, "Pollachi", "India");
        bound(); // "Ravi from Pollachi, India"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`call()` la arguments ah comma separate panni pass panrom, function immediately execute aagum.',
                            '`apply()` la arguments ah array la pass panrom, function immediately execute aagum.',
                            '`bind()` function ah execute pannaadhu, new function return pannum. `bound()` nu call panna dhaan execute aagum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Method extract panna this lose aagum**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Object method ah oru variable la extract panna, this lose aagum. bind() use panni idha easy ah fix pannalam.',
                    },
                    {
                        type: 'code',
                        text: `const user = {
        name: "Ravi",
        greet() {
            console.log("Hi, " + this.name);
        },
        };

        const greet = user.greet;
        greet(); // "Hi, undefined" (this lose aachu)

        const boundGreet = user.greet.bind(user);
        boundGreet(); // "Hi, Ravi"

        setTimeout(user.greet, 100);             // "Hi, undefined"
        setTimeout(user.greet.bind(user), 100);  // "Hi, Ravi"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`greet` ah extract panna, adhu object illaama call aagum, so this lose aagum.',
                            '`bind(user)` use panna, this always user ah dhaan irukkum.',
                            'setTimeout and event handlers la idhu romba common problem.',
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
                            'Idha order la sollunga: definition, call, apply, bind, example.',
                            '“call and apply function ah immediately execute pannum, bind new function return pannum” nu kandippa sollunga. Idhu dhaan core point.',
                            'call vs apply difference: call la arguments comma separate, apply la array.',
                            'Method extract panna this lose aagura example kaattunga. Interview la idha romba ketpaanga.',
                            'Arrow function this ah call, apply, bind vachu change panna mudiyaadhu nu mention pannunga.',
                            'Idhu this keyword oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Call Comma, Apply Array, Bind Back (returns function)”.',
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
                        items: ['call', 'apply', 'bind', 'this binding', 'method borrowing'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-10',
        topicId: 'javascript',
        title: 'What is prototypal inheritance?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Prototypal inheritance is how JavaScript objects inherit properties and methods from other objects. ',
                            'Every object has a prototype - another object it can inherit from. ',
                            "If you access a property not on the object, JavaScript looks in the object's prototype. ",
                            "If still not found, it looks in the prototype's prototype. This chain is the prototype chain. ",
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
                            "Prototypal inheritance is JavaScript's inheritance model where objects inherit from other objects through the prototype chain. ",
                            'Each object has an internal [[Prototype]] property (accessed via __proto__ or Object.getPrototypeOf()). ',
                            'Property lookup: object itself → [[Prototype]] → [[Prototype]].[[Prototype]] → null. ',
                            'This differs from classical inheritance where classes inherit from other classes. ',
                            'Constructor function pattern with new creates objects with shared prototypes. ',
                            'Modern classes (class syntax) are syntactic sugar over prototypal inheritance. ',
                            'Understanding prototype chain is crucial for method inheritance, avoiding conflicts, performance optimization, and using constructors or classes. ',
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
                        text: `function Animal(name) { this.name = name; }
                            Animal.prototype.speak = function() {
                            console.log(this.name + ' speaks');
                            };
                            function Dog(name) { Animal.call(this, name); }
                            Dog.prototype = Object.create(Animal.prototype);
                            const dog = new Dog('Rex');
                            dog.speak();`,
                    },
                    {
                        type: 'highlight',
                        text: 'Dog inherits from Animal through the prototype chain. dog.speak() looks through the chain and finds the method on Animal.prototype.',
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
                        text: `In Archer Review, we used class syntax (modern prototypal inheritance). We had base components that other components inherited from. Understanding prototypes helped us debug method inheritance issues.`,
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
                            'Prototypal inheritance is how objects share properties through the prototype chain. ',
                            'Every object has a prototype - another object it inherits from. ',
                            'If a property is not on the object, JavaScript searches the prototype chain. ',
                            'Modern JavaScript uses class syntax which is based on prototypal inheritance. ',
                            'Understanding prototypes helps us understand method inheritance. ',
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
                            'Prototypal inheritance is a mechanism where an object can use the properties and methods of another object through the prototype chain.',
                            'JavaScript la ovvoru object ku oru hidden link irukkum, adhu dhaan its prototype. Namma ketta property andha object la illa na, JavaScript andha prototype la search pannum.',
                            'Appadiye chain la mela pogitte irukkum, property kedaikkura varaikkum or chain mudiyura varaikkum (null). Idhu dhaan prototype chain.',
                            'Idhunaala methods ah ovvoru object la copy pannaama, prototype la oru dhadava define pannitu, ellaa objects um share pannalam.',
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
                        text: '**Prototype and __proto__**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ovvoru object ku oru internal link irukkum, adhu dhaan [[Prototype]]. Idha `__proto__` or `Object.getPrototypeOf(obj)` use panni access pannalam.',
                            'Function ku `prototype` nu oru property irukkum. `new` use panni object create panna, andha object oda [[Prototype]] indha `prototype` ah point pannum.',
                            'Simple ah sollanum na: `__proto__` object ku irukkum, `prototype` function ku irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Prototype chain**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Property access pannumbodhu, mudhalla andha object la search pannum.',
                            'Illa na, adhoda prototype la search pannum. Appuram prototype oda prototype la, appadiye pogum.',
                            'Chain oda kadaisila `Object.prototype` irukkum, adhukku mela `null`. Angeyum illa na `undefined` kedaikkum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why it is useful**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Methods ah prototype la oru dhadava define panna podhum, ellaa objects um adha share pannum.',
                            'Memory save aagum, because ovvoru object kum separate copy create aagaadhu.',
                            'Child object, parent object oda properties and methods ah reuse pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Object.create)**',
                    },
                    {
                        type: 'code',
                        text: `const animal = {
        eat() {
            console.log("Eating...");
        },
        };

        const dog = Object.create(animal);
        dog.bark = function () {
        console.log("Woof!");
        };

        dog.bark(); // "Woof!" (dog la irukku)
        dog.eat();  // "Eating..." (dog la illa, animal prototype la irundhu varum)

        console.log(Object.getPrototypeOf(dog) === animal); // true`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Object.create(animal)` use panna, `dog` oda prototype `animal` ah set aagum.',
                            '`dog.bark()` dog la direct ah irukku, so udane run aagum.',
                            '`dog.eat()` dog la illa, so JavaScript prototype chain la `animal` la search pannum, kedaikkum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: Constructor function and class**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Ellaa Person object kum `greet` method venum. Adha ovvoru object la copy panna thevai illa, prototype la oru dhadava define pannalam.',
                    },
                    {
                        type: 'code',
                        text: `function Person(name) {
        this.name = name;
        }

        Person.prototype.greet = function () {
        console.log("Hi, I am " + this.name);
        };

        const p1 = new Person("Ravi");
        const p2 = new Person("Kumar");

        p1.greet(); // "Hi, I am Ravi"
        p2.greet(); // "Hi, I am Kumar"

        console.log(p1.greet === p2.greet); // true (same function share aagudhu)
        console.log(p1.__proto__ === Person.prototype); // true

        // ES6 class (same prototypal inheritance, just clean syntax)
        class Student extends Person {
        study() {
            console.log(this.name + " is studying");
        }
        }

        const s1 = new Student("Arun");
        s1.greet(); // "Hi, I am Arun" (Person.prototype la irundhu)
        s1.study(); // "Arun is studying"`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`greet` method `Person.prototype` la oru dhadava dhaan irukku, `p1` and `p2` rendum adha share panrom.',
                            '`p1.greet === p2.greet` true, so memory la oru copy dhaan irukku.',
                            'ES6 `class` and `extends` keyword, internally prototypal inheritance dhaan use pannum. Idhu just syntax sugar.',
                            '`s1.greet()` call panna chain: `s1` -> `Student.prototype` -> `Person.prototype`. Angaye `greet` kedaikkum.',
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
                            'Idha order la sollunga: definition, prototype chain, why useful, example.',
                            '“Property object la illa na, JavaScript prototype chain la search pannum” nu kandippa sollunga. Idhu dhaan core point.',
                            '`__proto__` vs `prototype` difference clear ah sollunga. Interview la idha romba ketpaanga.',
                            'Methods ah prototype la define panna memory save aagum nu mention pannunga.',
                            'ES6 class um internally prototypal inheritance dhaan nu sollunga. Idhu deep understanding kaattum.',
                            'Idhu this keyword and scope chain oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Not found? Go up the chain”.',
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
                        items: ['prototype', 'prototype chain', 'inheritance', 'constructor function', 'class syntax'],
                    },
                ],
            },
        ],
    }),
];
