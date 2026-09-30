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
