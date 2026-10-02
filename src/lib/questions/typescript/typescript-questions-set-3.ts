import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const typescriptQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'ts-11',
        topicId: 'typescript',
        title: 'What is type narrowing?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Narrowing means making a broad type more specific.',
                            'TypeScript does this when you check a value, like typeof x === "string".',
                            'Inside that block, the type is more exact.',
                            'It lets you safely use unions.',
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
                            "Narrowing is TypeScript's control-flow analysis refining a type based on checks.",
                            '**Techniques** - typeof, instanceof, in, equality (===), truthiness, Array.isArray, discriminant property, custom type guards, assertion functions.',
                            '**Control flow** - narrowing follows if/else, early return, switch, and logical operators.',
                            '**Optional chaining and ??** - handle null/undefined.',
                            '**Limits** - narrowing is lost across function boundaries or after mutation in callbacks; use const or local variables.',
                            'The goal: write less casting (as) and let the compiler prove safety.',
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
                        text: `function format(v: string | number | null) {
    if (v === null) return 'N/A';          // v: string | number
    if (typeof v === 'string') return v.trim();   // v: string
    return v.toFixed(2);                   // v: number
    }

    function handle(e: Error | string) {
    return e instanceof Error ? e.message : e;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Every check removes possibilities, until the compiler knows the exact type.',
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
                        text: 'In Archer Review, we narrowed API data (null checks, typeof) instead of using "as" casts, which removed many runtime crashes.',
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
                            'Narrowing is how TypeScript refines a union to a more specific type using checks.',
                            'It uses typeof, instanceof, in, equality, discriminants and custom guards.',
                            'It follows control flow, including early returns.',
                            'I prefer narrowing over type assertions because it is verified by the compiler.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You used "as User" on API data and got a runtime crash. What is the better way?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'as bypasses checks, so it can lie.',
                            'Validate/narrow the data (guard or Zod) before use.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Narrowing works at first but disappears inside a callback. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compiler cannot be sure the variable is unchanged in callbacks.',
                            'Use const, or assign the narrowed value to a new const first.',
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
                            'Narrowing',
                            'Control flow analysis',
                            'typeof',
                            'instanceof',
                            'Truthiness',
                            'Assertion',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-12',
        topicId: 'typescript',
        title: 'What are mapped types?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Mapped types create a new type by looping over the keys of another type.',
                            'You can change each property: make it optional, readonly, or change its type.',
                            'Partial and Readonly are built with mapped types.',
                            'Syntax: { [K in keyof T]: ... }.',
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
                            'A mapped type iterates over a union of keys and builds a new object type: **{ [K in keyof T]: Transform }**.',
                            '**Modifiers** - add or remove readonly and ? using + and - (e.g., -?).',
                            '**Key remapping** - { [K in keyof T as NewKey]: ... } with "as" to rename or filter keys.',
                            '**Built-ins** - Partial, Required, Readonly, Pick, Record are mapped types.',
                            '**Use cases** - form state from model (all fields to string/error), getters, event maps, nullable versions.',
                            '**Homomorphic** - mapping over keyof T preserves modifiers of the original type.',
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
                        text: `type Nullable<T> = { [K in keyof T]: T[K] | null };
    type Mutable<T>  = { -readonly [K in keyof T]: T[K] };
    type FormErrors<T> = { [K in keyof T]?: string };

    // Key remapping: add "get" prefix
    type Getters<T> = {
    [K in keyof T as 'get' + Capitalize<string & K>]: () => T[K];
    };

    type User = { name: string; age: number };
    type UserErrors = FormErrors<User>;   // { name?: string; age?: string }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each type is generated from User by looping its keys, so it stays in sync automatically.',
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
                        text: 'In Archer Review, form error and touched state types were generated from the form model with a mapped type, so adding a field updated everything automatically.',
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
                            'Mapped types loop over keys of a type to build a new type, using [K in keyof T].',
                            'They can add or remove readonly and optional modifiers and remap keys.',
                            'Partial, Required and Readonly are built with them.',
                            'I use them to derive form, error and nullable types from a model.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You have a User model and need a form-errors object with the same keys and string messages. How?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'type Errors<T> = { [K in keyof T]?: string }.',
                            'Adding a field to the model updates the errors type.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need a version of a type where every property is nullable (from DB rows).**',
                    },
                    {
                        type: 'bullets',
                        items: ['{ [K in keyof T]: T[K] | null } as Nullable<T>.'],
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
                        items: ['Mapped types', 'keyof', 'Key remapping', 'Modifiers', 'Homomorphic'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-13',
        topicId: 'typescript',
        title: 'What are conditional types?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Conditional types choose a type based on a condition, like an if/else for types.',
                            'Syntax: T extends U ? X : Y.',
                            'They are often used with generics.',
                            'Utility types like Exclude and ReturnType use them.',
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
                            'A conditional type resolves to X if T is assignable to U, otherwise Y: **T extends U ? X : Y**.',
                            '**infer** - capture part of a type inside the condition (e.g., infer R for a return type).',
                            '**Distributive** - when T is a naked union, the condition is applied to each member separately.',
                            '**Built-ins** - Exclude, Extract, NonNullable, ReturnType, Parameters, Awaited.',
                            '**Use cases** - API typing that depends on input, unwrapping arrays/promises, filtering union members.',
                            '**Caution** - complex conditional types hurt readability and compile speed; keep them small and documented.',
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
                        text: `type IsString<T> = T extends string ? true : false;
    type A = IsString<'x'>;   // true
    type B = IsString<1>;     // false

    type Unwrap<T> = T extends Promise<infer R> ? R : T;
    type C = Unwrap<Promise<number>>;   // number

    type NonNull<T> = T extends null | undefined ? never : T;
    type D = NonNull<string | null>;    // string`,
                    },
                    {
                        type: 'highlight',
                        text: 'Types are chosen by checking a condition, and infer extracts inner types.',
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
                        text: 'In Archer Review, a helper type unwrapped Promise and array types for API responses, so components got the final data type without manual annotations.',
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
                            'Conditional types choose a type using T extends U ? X : Y.',
                            'infer lets me extract types, like the return type or promise value.',
                            'They distribute over unions, which powers Exclude and Extract.',
                            'I use them sparingly, since complex ones reduce readability.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You want a function whose return type depends on the input type (string to string[], number to number[]). How?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a conditional return type or overloads.',
                            'Prefer overloads for readability if only a few cases.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Extract the element type of an array type.**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'type Item<T> = T extends (infer U)[] ? U : never;',
                            'Or T[number] when T is known to be an array.',
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
                        items: ['Conditional types', 'infer', 'Distributive', 'Exclude', 'ReturnType', 'extends'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-14',
        topicId: 'typescript',
        title: 'What is function overloading?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Function overloading lets one function have several call signatures.',
                            'Each signature describes different parameter types and return type.',
                            'You write the signatures first, then one implementation.',
                            'Callers see only the overload signatures.',
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
                            'Overloads declare multiple call signatures with an implementation signature that handles all of them.',
                            '**Order matters** - TypeScript picks the first matching overload, so put specific ones first.',
                            '**Implementation signature is hidden** - callers cannot call it directly.',
                            '**Use case** - return type depends on parameter type or count.',
                            '**Alternatives** - union parameters, generics with conditional types, or optional parameters are often simpler.',
                            '**Also** - method overloads in classes and interfaces.',
                            'Use overloads when they give clearer, more precise typing than a union signature.',
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
                        text: `function getValue(id: number): User;
    function getValue(email: string): User[];
    function getValue(arg: number | string): User | User[] {
    return typeof arg === 'number' ? findById(arg) : findByEmail(arg);
    }

    const a = getValue(1);          // User
    const b = getValue('a@b.com');  // User[]`,
                    },
                    {
                        type: 'highlight',
                        text: 'The caller gets the exact return type for each input type, while one implementation handles both.',
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
                        text: 'In Archer Review, a storage helper was overloaded so getItem(key) returned a typed value and getItem(key, default) returned a non-null value.',
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
                            'Overloading lets a function have multiple signatures with different parameter and return types.',
                            'There is one implementation, which is not visible to callers.',
                            'TypeScript picks the first matching signature, so order matters.',
                            'I use it when return type depends on input, and otherwise prefer unions or generics.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A function returns string when given a string and number[] when given a number. Union signature makes the return type vague. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use overloads for each input/return pair.',
                            'Or a generic with a conditional return type.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You see 8 overloads on one function. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Consider if generics, unions or separate functions are clearer.',
                            'Too many overloads signal a design smell.',
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
                        items: ['Overload', 'Call signature', 'Implementation signature', 'Return type', 'Union'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-15',
        topicId: 'typescript',
        title: 'How do you type a reusable React component?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Define a props type or interface for the component.',
                            'Type children with React.ReactNode.',
                            'Use generics when the component works with different data types.',
                            'Extend native element props so the component supports normal attributes.',
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
                            '**Props interface** - explicit and exported; optional props with ? and defaults via destructuring.',
                            '**Children** - React.ReactNode (React.PropsWithChildren is also common).',
                            '**Native props** - extend React.ComponentPropsWithoutRef<"button"> so className, onClick, aria-* work.',
                            '**Variants** - literal unions for variant/size; discriminated unions when props depend on each other.',
                            '**Generics** - <T,> components for lists, selects, tables: Props<T> with renderItem: (item: T) => ReactNode.',
                            '**Ref forwarding** - forwardRef<HTMLButtonElement, Props> (or ref prop in React 19).',
                            '**Events** - React.MouseEvent<HTMLButtonElement>, React.ChangeEvent<HTMLInputElement>.',
                            'Avoid React.FC for new code as it adds implicit baggage; type props directly.',
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
                        text: `type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant?: 'primary' | 'secondary';
    loading?: boolean;
    };

    export function Button({ variant = 'primary', loading, children, ...rest }: ButtonProps) {
    return <button {...rest} disabled={loading || rest.disabled}>{children}</button>;
    }

    // Generic list component
    interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T) => string | number;
    }
    export function List<T>({ items, renderItem, getKey }: ListProps<T>) {
    return <ul>{items.map(i => <li key={getKey(i)}>{renderItem(i)}</li>)}</ul>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Button accepts all native button props plus custom ones; List infers T from items so renderItem is fully typed.',
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
                        text: 'In Archer Review, shared Button, Input and Select components extended native props, and a generic Select<T> worked for topics, difficulties and users with full type safety.',
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
                            'I define an explicit props type, with children as ReactNode and variants as literal unions.',
                            'I extend native element props using ComponentPropsWithoutRef so the component behaves like the native element.',
                            'For data-driven components like lists and selects, I use generics.',
                            'I forward refs where needed and prefer typing props directly over React.FC.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You are building a Table component used for users, orders and products. How do you type it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Generic Table<T> with columns keyed by keyof T and renderCell.',
                            'Row type is inferred from the data prop.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Props depend on each other: if "href" is given, it renders a link, otherwise a button. Type it.**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a discriminated union: LinkProps | ButtonProps.',
                            'Avoid optional props that allow invalid combinations.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Developers cannot pass aria-label or onClick to your custom Input. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Extend React.ComponentPropsWithoutRef<"input">.',
                            'Spread rest props to the native element.',
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
                            'Props',
                            'ReactNode',
                            'ComponentPropsWithoutRef',
                            'Generic component',
                            'forwardRef',
                            'Variants',
                        ],
                    },
                ],
            },
        ],
    }),
];
