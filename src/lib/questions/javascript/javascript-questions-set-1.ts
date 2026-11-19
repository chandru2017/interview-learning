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
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Scope**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`var` function-scoped. if or for block kulla declare pannalum veliya access aagum.',
                            '`let` and `const` block-scoped. { } kulla mattum dhaan.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Re-declaration and re-assignment**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**var:** re-declare um pannalam, re-assign um pannalam.',
                            '**let:** re-assign pannalam, re-declare panna mudiyaadhu.',
                            '**const:** rendum panna mudiyaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Hoisting**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Moonum hoist aagum, aana behaviour vera.',
                            '`var undefined` nu initialize aagum, so declare panradhukku munnadi use pannalam.',
                            '`let/const` **Temporal Dead Zone (TDZ)** la irukkum, so munnadi use panna ReferenceError varum.',
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
                        text: `if (true) {
                            var a = 1;
                            let b = 2;
                            }
                            console.log(a); // 1
                            console.log(b); // ReferenceError`,
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Memory trick**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Memory trick: “Scope, Assign, Hoist”. Moonu words, moonu points.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '`var, let, const` moonum JavaScript la variable declare panna use pannura keywords.',
                            'Main difference scope, re-assignment, and hoisting la irukku.',
                            '`var` function-scoped, `let` and `const` block-scoped.',
                            '`let` value ah re-assign pannalam, `const` pannamudiyaadhu.',
                            'Modern code la default ah const use pannuvom, value maaranum na let, var ah avoid pannuvom.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Execution context na JavaScript code run aagura environment. Code run aaga thevaiyaana ellam adhula irukkum.',
                            '**Moonu types irukku:** Global, Function, and Eval execution context.',
                            '**Ovvoru context um rendu phases la work aagum:** Creation phase and Execution phase.',
                            'Ellam Call Stack la manage aagum, LIFO (Last In, First Out) order la.',
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
                        text: '**Types of Execution Context**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Global EC:** Program start aagumbodhu oru dhadava mattum create aagum. Browser la `this` window ah point pannum.',
                            '**Function EC:** Function call pannura ovvoru dhadavayum pudhusa create aagum.',
                            '**Eval EC:** `eval()` kulla create aagum. Idha romba yarum use pannala, so mention mattum pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Two Phases**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Creation phase:** Memory allocate aagum. Variable and function declarations hoist aagum. `var` `undefined` nu set aagum, function full ah store aagum. `this` value and scope chain set aagum.',
                            '**Execution phase:** Code line by line run aagum. Variables ku actual values assign aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Call Stack**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function call pannumbodhu, pudhu EC stack oda mela push aagum.',
                            'Function mudinjadhum, adhu stack la irundhu pop aagum.',
                            'Global EC kadaisi vara stack oda keezha irukkum.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Example Flow**',
                    },
                    {
                        type: 'code',
                        text: `var x = 10;
                            function add(a, b) {
                            var result = a + b;
                            return result;
                            }
                            add(2, 3);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Global EC create aagum (creation phase: `x = undefined`, `add = function`).',
                            'Execution phase la `x = 10` assign aagum.',
                            '`add(2, 3)` call aagum, Function EC stack la push aagum.',
                            'Return aanadhum pop aagum, Global EC mattum meedhi irukkum.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Scope chain na JavaScript oru variable ah find panna use pannura mechanism. Variable current scope la illa na, JavaScript outer scope la search pannum, appuram adhukku outer scope la, global scope vara.',
                            'Idhu lexical scoping based la work aagum. Adhavadhu function eppadi write pannirukkom nu paathu scope decide aagum, eppadi call pannurom nu paathu illa.',
                            'Variable engayum kedaikkala na ReferenceError varum.',
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
                        text: '**Order of searching**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mudhalla local scope la search pannum.',
                            'Illa na parent scope la search pannum.',
                            'Global scope vara ippadiye search pannum. Angeyum illa na ReferenceError varum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Lexical scoping**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function enga write pannirukkom nu paathu dhaan scope decide aagum, enga call pannurom nu paathu illa.',
                            'Ovvoru execution context kum oru outer environment reference irukkum. Adhu vachu dhaan chain create aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Direction**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Search inner to outer mattum dhaan pogum.',
                            'Inner function la outer variables ah access pannalam. Outer function la inner variables ah access panna mudiyaadhu.',
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
                        text: `const a = "global";
        function outer() {
        const b = "outer";
        function inner() {
            const c = "inner";
            console.log(c); // "inner"  (own scope)
            console.log(b); // "outer"  (parent scope)
            console.log(a); // "global" (global scope)
        }
        inner();
        // console.log(c); // ReferenceError (outer la inner variable access panna mudiyaadhu)
        }
        outer();`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`c` inner scope la kedaikkum, so angaye search stop aagum.',
                            '`b` inner la illa, so outer scope la search pannum, kedaikkum.',
                            '`a` rendu la um illa, so global scope la search pannum, kedaikkum.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Hoisting na JavaScript code run aagurdhukku munnadi, declarations ah scope oda top ku move panna maari behave aagura mechanism. Actually code move aagala, creation phase la declarations memory la store aagum.',
                            '`var` `undefined` nu set aagum, function declarations full ah store aagum.',
                            '`let` and `const` um hoist aagum, aana Temporal Dead Zone la irukkum, so declaration munnadi use panna `ReferenceError` varum.',
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
                        text: '**var hoisting**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Declaration hoist aagum, value assign aagaadhu.',
                            'Declaration munnadi use panna `undefined` kedaikkum, error varaadhu.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Function hoisting**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function declaration full ah hoist aagum, so declaration munnadi call pannalam.',
                            'Function expression la variable mattum hoist aagum. `var` na `undefined` aagum, so call panna `TypeError` varum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**let and const hoisting**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Hoist aagum, aana Temporal Dead Zone la irukkum.',
                            'Declaration line varra varaikkum access panna `ReferenceError` varum.',
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
                        text: `console.log(a); // undefined (var hoisting)
        var a = 5;

        sayHi(); // "Hi" (function declaration hoisting)
        function sayHi() {
        console.log("Hi");
        }

        // sayHello(); // TypeError (function expression)
        var sayHello = function () {
        console.log("Hello");
        };

        // console.log(b); // ReferenceError (Temporal Dead Zone)
        let b = 10;`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Creation phase la `a` `undefined` nu set aagum, `sayHi` full function ah store aagum.',
                            '`sayHello` variable `undefined` nu mattum set aagum, so function ah call panna mudiyaadhu.',
                            '`b` Temporal Dead Zone la irukkum, so declaration munnadi access panna error varum.',
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
                            'Idha order la sollunga: definition, `var`, function, `let` and `const`.',
                            '“Code move aagala, creation phase la memory allocate aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Function declaration vs function expression difference mention pannunga.',
                            'Idhu execution context oda connect aagum, so adhayum sollunga.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Closure na oru function, adhoda outer function oda variables ah remember pannitu irukkura feature. Outer function mudinjaalum, inner function andha variables ah access pannalam.',
                            'Idhu lexical scoping naala work aagum. Function create aagumbodhu, adhoda scope chain um sethu save aagum.',
                            'Data privacy, counter, callbacks maari places la use aagum.',
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
                            'Function + adhoda lexical environment serndhu dhaan closure.',
                            'Inner function outer variables ku reference vachirukkum, copy illa.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Outer function execute aagi mudinjadhum, normally adhoda variables memory la irundhu pogum.',
                            'Aana inner function andha variables ah use pannitu irundha, JavaScript adhai keep pannum.',
                            'Idhu dhaan closure.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Uses**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Data privacy: Variable ah veliya irundhu direct ah access panna mudiyaadhu.',
                            'Counter / state: Function call aagumbodhu value remember pannum.',
                            'Callbacks and event handlers: Outer data ah use pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Small Example (Counter)**',
                    },
                    {
                        type: 'code',
                        text: `function createCounter() {
        let count = 0; // private variable
        return function () {
            count++;
            return count;
        };
        }
        const counter = createCounter();
        console.log(counter()); // 1
        console.log(counter()); // 2
        console.log(counter()); // 3
        // console.log(count);  // ReferenceError (veliya irundhu access panna mudiyaadhu)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`createCounter()` call aagum, `count = 0` create aagum.',
                            'Inner function return aagum, `createCounter` mudinjidum.',
                            'Aana `counter()` call pannumbodhu, inner function `count` ah remember pannitu irukku.',
                            'So ovvoru call kum `count` increase aagum.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Real-world example: ATM / Bank account**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Bank account la balance ah veliya irundhu direct ah maatha mudiyaadhu. Deposit and withdraw function vazhiya mattum dhaan maatha mudiyum. Idhu closure oda real use.',
                    },
                    {
                        type: 'code',
                        text: `function createAccount(initialBalance) {
        let balance = initialBalance; // private
        return {
            deposit(amount) {
            balance += amount;
            return balance;
            },
            withdraw(amount) {
            if (amount > balance) return "Insufficient balance";
            balance -= amount;
            return balance;
            },
            getBalance() {
            return balance;
            },
        };
        }
        const account = createAccount(1000);
        account.deposit(500);   // 1500
        account.withdraw(200);  // 1300
        console.log(account.getBalance()); // 1300
        console.log(account.balance);      // undefined (direct access illa)`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idhula `balance` oru private variable. `deposit`, `withdraw`, `getBalance` function ellam closure naala `balance` ah remember pannum.',
                            'Veliya irundhu yaarum `balance` ah direct ah maatha mudiyaadhu.',
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
                            'Idha order la sollunga: definition, how it works, uses, example.',
                            '“Outer function mudinjaalum, inner function variables ah remember pannum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Counter example ah whiteboard la ezhudhi, step by step explain pannunga.',
                            'Data privacy use case mention pannunga, adhu real-world value kaattum.',
                            'Idhu lexical scoping and scope chain oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Function + Memory = Closure”.',
                        ],
                    },
                ],
            },
        ],
    }),
];
