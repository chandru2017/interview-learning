import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'js-6',
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
        id: 'js-7',
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
];
