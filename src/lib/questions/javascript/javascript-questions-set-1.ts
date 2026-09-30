import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'js-1',
        topicId: 'javascript',
        title: 'What is the difference between var, let, and const?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'var, let, and const are three ways to declare variables in JavaScript.',
                            'var is the old way.',
                            'let and const are newer ways.',
                            'let allows you to change the value, but const does not.',
                            'var has function scope, while let and const have block scope (inside {}).',
                        ],
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
                        text: `var has function-level scope and is hoisted to the top with an undefined value. let and const have block-level scope (block scope within {}, if statements, loops).`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `**The key difference:** var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared.`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: ` const prevents reassignment but does not freeze objects/arrays (you can mutate their properties). Modern practice prefers const by default, then let when reassignment is needed, and avoid var.`,
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
                        text: `const user = { name: 'Ali' };\nuser.name = 'Bob';let count = 0;count = 1;var old = 1;\nlet count = 0;\ncount = 1;\nvar old = 1;`,
                    },
                    {
                        type: 'highlight',
                        text: 'const prevents reassigning the user variable, but we can still change properties inside it. let allows the count to be updated. var is function-scoped and can be re-declared.:',
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
                        text: `In Archer Review, we used const for component props and configuration objects that shouldn't be reassigned. We used let for counters and variables that need to update in loops. This prevented accidental reassignment bugs.`,
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
                        text: `Imagine a notebook (variable). var lets you erase and rewrite anything, and the notebook can be seen everywhere in the building. let gives you a notebook that only you can see in your room.`,
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `const gives you a notebook that only exists in your room, you can't get a new notebook, but you can add more pages to it.`,
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
                            'In simple terms, var is the old way. let and const are the new ways. ',
                            'let allows you to change the value, but const does not. var has function scope, while let and const have block scope.',
                            'We use const by default because it prevents accidental changes. If we need to reassign, we use let.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-2',
        topicId: 'javascript',
        title: 'Explain JavaScript execution context.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Execution context is like the environment where JavaScript code runs. ',
                            'When a function is called, JavaScript creates an execution context for that function. ',
                            'It contains the variables, functions, and the this value.',
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
                            'Execution context is created when a function is invoked. ',
                            'There is a Global Execution Context and a Function Execution Context. ',
                            'Each context has: Creation Phase (variables and functions are hoisted), Execution Phase (code runs line by line), and Completion Phase. ',
                            '**The context contains:** Variable Environment (all declared variables and functions), Lexical Environment (for block scope), and ThisBinding. ',
                            'JavaScript creates a call stack to manage multiple execution contexts.',
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
                        text: `function outer() {
                                const x = 1;
                                    function inner() {
                                        console.log(x);
                                    }
                                    inner();
                                }
                                outer();`,
                    },
                    {
                        type: 'highlight',
                        text: `When outer() is called, an execution context is created. When inner() is called, another context is created on top of it. inner() can access x from outer's context.`,
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
                        text: `In Archer Review, when a user submits a form, a handler function creates an execution context. Inside that context, we access form data, make API calls, and update state. Understanding this helped us debug closure issues.`,
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
                            'Imagine entering a restaurant (function call). ',
                            'When you enter, a table is prepared for you (execution context created). ',
                            'On the table: your order pad (variables), your plate (this value), and the menu (functions). ',
                            'While you eat, a friend joins (nested function call) - they get their own table but can see what you ordered. ',
                            'When you leave, your table is cleaned up.',
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
                            'Execution context is the environment where code runs. ',
                            'When a function is called, JavaScript creates a context for that function. ',
                            'This context contains variables, functions, and the this value. ',
                            'Understanding execution context helps us understand closures and why variables are available in nested functions.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-3',
        topicId: 'javascript',
        title: 'What is the scope chain?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Scope chain is how JavaScript looks for variables. ',
                            'When you use a variable, JavaScript first looks in the current scope. ',
                            "If it's not there, it looks in the parent scope. ",
                            'It keeps going up until it finds the variable or reaches the global scope.',
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
                            'The scope chain is a mechanism that determines variable accessibility through nested function scopes. ',
                            'When a variable is referenced, the JavaScript engine searches: Local Scope → Outer Function Scope → Global Scope. ',
                            "If not found, a ReferenceError is thrown. The scope chain is determined by the lexical position of functions in the code (where they're written), not where they're called from.",
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
                                function outer() {
                                    const outerVar = 'outer';
                                    function inner() {
                                        const innerVar = 'inner';
                                        console.log(innerVar);
                                        console.log(outerVar);
                                        console.log(global);
                                    }
                                    inner();
                                }`,
                    },
                    {
                        type: 'highlight',
                        text: `JavaScript looks for variables starting from inner scope, then outer scope, then global scope. This is the scope chain.`,
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
                        text: `In Archer Review, nested component functions use the scope chain. Child components can access variables from parent components through the scope chain. Understanding this helped us optimize re-renders.`,
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
                            "Imagine a building with rooms. You're in a small room (function scope). You want something.",
                            'First, check your room (local scope). ',
                            'Then check the big room outside (parent scope). Then the main lobby (global scope). ',
                            'This search from small to big is the scope chain.',
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
                            'Scope chain is how JavaScript finds variables. ',
                            "Starting from the current scope, then parent scope, then parent's parent, up to the global scope. ",
                            "This is determined by where functions are written, not where they're called. ",
                            'Understanding scope chain is important for closures.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-4',
        topicId: 'javascript',
        title: 'What is hoisting?',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Hoisting is JavaScript moving variable and function declarations to the top of their scope before code runs.',
                            'var and function declarations are hoisted.',
                            "let and const are hoisted but not initialized, so you can't use them until declared.",
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
                            'Hoisting is where var declarations and function declarations are moved to the top of their scope during the creation phase.',
                            'var is hoisted and initialized with undefined.',
                            'let and const are hoisted but enter a Temporal Dead Zone (TDZ) - not initialized until declared.',
                            'Function declarations are fully hoisted with their body. Function expressions are not hoisted.',
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
                        text: `console.log(x); // undefined\nvar x = 5;\n\nconsole.log(y); // ReferenceError\nlet y = 10;\n\nconsole.log(add(2, 3)); // 5\nfunction add(a, b) { return a + b; }`,
                    },
                    {
                        type: 'highlight',
                        text: `var x is hoisted as undefined. let y is in Temporal Dead Zone. The function declaration is completely hoisted.`,
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
                        text: `In Archer Review, we encountered hoisting bugs with var. We learned to use const and let exclusively. We discovered that function declarations were hoisted but arrow functions were not.`,
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
                            'The teacher (JavaScript) checks your homework before the semester starts.',
                            'For var, the teacher puts "undefined" next to questions.',
                            'For let/const, the teacher puts "Don\'t look yet" until you define it.',
                            'For functions, the teacher already knows the answer before the semester starts.',
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
                            'Hoisting is JavaScript moving declarations to the top before executing code.',
                            'var is hoisted and initialized with undefined.',
                            'let and const are hoisted but in Temporal Dead Zone.',
                            'Function declarations are fully hoisted.',
                            'This is why you can call a function before declaring it, but not let/const.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-5',
        topicId: 'javascript',
        title: 'What are closures? Give a real-world example.',
        difficulty: 'Advanced',
        status: 'in-progress',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'A closure is when a function remembers and can access variables from the scope where it was created, even after that scope is finished.',
                            'Inner functions are closures.',
                            'They can access variables from their parent function even after the parent returns.',
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
                            'A closure is a function that retains access to variables from its lexical scope, even after that scope finishes executing.',
                            'Created every time a function is created.',
                            '**Used for:** data privacy (creating private variables), function factories, callbacks, event handlers.',
                            'Closures can cause memory issues if not managed - if you hold references to closures that reference large objects, those objects stay in memory.',
                            'Essential for React hooks (useState, useCallback use closures).',
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
                        text: `function counter() {
                                let count = 0;
                                return function increment() {
                                    count++;
                                    return count;
                                };
                            }
                            const myCounter = counter();
                            console.log(myCounter()); // 1
                            console.log(myCounter()); // 2`,
                    },
                    {
                        type: 'highlight',
                        text: `increment is a closure - it remembers count from counter's scope. Each call increments the same count variable.`,
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
                        text: `In Archer Review, we used closures in form handling where functions remembered the form ID. In callbacks, closures closed over the request ID to match responses. In React, useCallback hooks use closures to maintain stable function references.`,
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
                            'A bakery owner (outer function) creates a secret recipe with ingredient count (variable). ',
                            'The owner hires a baker (inner function/closure). ',
                            'The owner goes home, but the baker remembers the recipe. ',
                            "The baker is the closure - it remembers even though the owner isn't there.",
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
                            'A closure is a function that remembers variables from where it was created. ',
                            'Inner functions are closures. ',
                            "They can access outer function's variables even after the outer function finishes. ",
                            'Very important in JavaScript - we use them in callbacks, event handlers, and React hooks. ',
                            'They allow us to create private variables.',
                        ],
                    },
                ],
            },
        ],
    }),
];
