import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const typescriptQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ts-1',
        topicId: 'typescript',
        title: 'Why use TypeScript instead of JavaScript?',
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
                            'TypeScript is JavaScript with types.',
                            'It catches mistakes while you write code, before the app runs.',
                            'Editor autocomplete and hints become much better.',
                            'It makes large code bases easier to understand and change.',
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
                            'TypeScript adds a static type system on top of JavaScript and compiles to plain JS.',
                            '**Early bug detection** - typos, wrong arguments, null/undefined errors found at compile time.',
                            '**Refactoring confidence** - rename or change a type and the compiler shows every place affected.',
                            '**Better tooling** - autocomplete, go-to-definition, inline docs.',
                            '**Self-documenting code** - types describe contracts between modules, API and UI.',
                            '**Team scalability** - safer collaboration in large code bases.',
                            '**Gradual adoption** - allowJs and incremental migration are possible.',
                            '**Trade-offs** - build step, learning curve, and types are erased at runtime so external data still needs validation (Zod, etc.).',
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
                        text: `// JavaScript - bug found only at runtime
    function getTotal(price, qty) { return price * qty; }
    getTotal('10', 2); // works by accident, no warning
    
    // TypeScript - bug found immediately
    function getTotal(price: number, qty: number): number {
    return price * qty;
    }
    getTotal('10', 2); // Error: string is not assignable to number`,
                    },
                    {
                        type: 'highlight',
                        text: 'TypeScript reports the wrong argument type in the editor, long before users hit the bug.',
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
                        text: 'In Archer Review, shared types for questions, users and exam results meant API changes were caught by the compiler across the whole front end during refactors.',
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
                            'TypeScript adds static types to JavaScript, so errors are caught at compile time instead of runtime.',
                            'It improves refactoring, autocomplete and documentation, and scales well for big teams.',
                            'The trade-offs are a build step and the fact that types are erased at runtime, so I still validate external data.',
                            'I adopt it incrementally in existing projects.',
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
                        text: '**Your manager asks: "Is TypeScript worth the extra effort for a small project?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'For tiny scripts maybe not, but for apps that will grow, yes.',
                            'Cost is small with inference; savings show up in refactors and onboarding.',
                            'Start with strict mode on new code, adopt gradually.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A production bug happened because an API field was renamed. How does TypeScript help?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Update the shared type and compiler lists every broken usage.',
                            'Add runtime validation (Zod) at the boundary since types are erased.',
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
                        items: ['Static typing', 'Compile time', 'Refactoring', 'IntelliSense', 'Type safety'],
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
                            'TypeScript na JavaScript oda superset, adhavadhu valid JavaScript code ellam valid TypeScript dhaan. Adhula static types add pannalam. Code run aagradhukku munnadi, TypeScript compiler types check pannitu, JavaScript ah convert pannum.',
                            'Main reason: errors ah runtime la illa, development time la dhaan catch pannalam. Example: number expect panra function ku string pass panna, code run panna munnadiye error kaattum. JavaScript la idhu runtime la dhaan theriyum.',
                            'Other benefits: better autocomplete and IntelliSense, safe refactoring, code self-documenting ah irukkum, and large team la work panna easy. Interfaces, enums, generics maari features um irukku.',
                            'Trade-offs: extra setup and build step venum, learning curve irukku, and types ezhudha extra time aagum. Small projects or quick prototypes ku JavaScript podhum. Large and long-term projects ku TypeScript better.',
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
                        text: '**What is TypeScript**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'TypeScript Microsoft create pannina language. JavaScript oda superset.',
                            'Browser ku TypeScript directly understand aagaadhu. So compile panni, plain JavaScript ah maathanum.',
                            'Types compile time la mattum irukkum. Final JavaScript la types remove aagidum, so runtime performance la difference illa.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// TypeScript
        function add(a: number, b: number): number {
        return a + b;
        }

        add(2, 3);     // 5
        // add(2, "3"); // Error: Argument of type 'string' is not assignable to type 'number'

        // Compile aana apram JavaScript
        // function add(a, b) {
        //   return a + b;
        // }`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`a: number` na `a` number ah dhaan irukkanum.',
                            '`add(2, "3")` ku editor la udane red line varum, code run pannama.',
                            'Compile aana apram types remove aagidum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reason 1: Catch errors early**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript la type errors runtime la dhaan theriyum, sometimes production la user ku theriyum.',
                            'TypeScript la development time la, editor and compiler la errors theriyum.',
                            'Common bugs: `undefined` property access, wrong argument type, typo in property name, missing function arguments.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// JavaScript: runtime la error
        const user = { name: "Ravi" };
        console.log(user.nme.toUpperCase()); // TypeError at runtime (typo)

        // TypeScript: compile time la error
        interface User {
        name: string;
        }

        const user2: User = { name: "Ravi" };
        // console.log(user2.nme); // Error: Property 'nme' does not exist. Did you mean 'name'?`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'JavaScript la typo irundha, code run aana apram dhaan error varum.',
                            'TypeScript typo ah udane catch pannum, correct name suggest um pannum.',
                            'Idhunaala production bugs kammi aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reason 2: Better developer experience**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Autocomplete: Object la entha properties and methods irukku nu editor kaattum.',
                            'Go to definition, find all references, and rename symbol romba accurate ah work aagum.',
                            'Safe refactoring: Function signature change panna, use pannura ellaa places la um error kaattum. Ethuvum miss aagaadhu.',
                            'Documentation: Types dhaan documentation. Function ku enna input venum, enna return aagum nu code la theriyum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `interface Product {
        id: number;
        name: string;
        price: number;
        inStock: boolean;
        }

        function showProduct(product: Product): string {
        return product.name + " - " + product.price;
        // product. nu type panna, id, name, price, inStock suggest aagum
        }`,
                    },
                ],
            },
            {
                label: '4',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reason 3: Powerful type features**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Interface and type: Object shape define pannalam.',
                            'Union types: Value multiple types la oru type ah irukkalam (`string | number`).',
                            'Generics: Reusable code type safe ah ezhudhalam.',
                            'Enums: Named constants create pannalam.',
                            'Optional properties (`?`) and `readonly`.',
                            'Type inference: Types ah everywhere ezhudha thevai illa. TypeScript automatically guess pannum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Union type
        function format(id: string | number) {
        if (typeof id === "string") {
            return id.toUpperCase();
        }
        return id.toFixed(2);
        }

        // Generic
        function first<T>(arr: T[]): T {
        return arr[0];
        }
        const n = first([1, 2, 3]);     // type: number
        const s = first(["a", "b"]);    // type: string

        // Optional and readonly
        interface Config {
        readonly apiUrl: string;
        timeout?: number;
        }

        // Type inference
        let count = 5; // TypeScript knows: number
        // count = "five"; // Error`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Union type la, `typeof` check pannina, TypeScript automatically type narrow pannum.',
                            'Generic `first<T>` array type ah paathu, correct return type kudukkum.',
                            '`readonly` property ah change panna error varum.',
                            'Type inference naala, simple code la types ezhudha thevai illa.',
                        ],
                    },
                ],
            },
            {
                label: '5',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reason 4: Large projects and teams**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Many developers same codebase la work pannumbodhu, types oru contract maari work pannum.',
                            'Other developer oda code use panna, source code padikka thevai illa. Types paathu use pannalam.',
                            'New developer join panna, code purinjukka easy.',
                            'API response types define panna, frontend and backend mismatch bugs kammi aagum.',
                            'React, Angular, Node.js, Vue ellaa major frameworks um TypeScript support pannum. Angular default ah TypeScript.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// React component with TypeScript
        interface ButtonProps {
        label: string;
        onClick: () => void;
        disabled?: boolean;
        }

        function Button({ label, onClick, disabled = false }: ButtonProps) {
        return <button onClick={onClick} disabled={disabled}>{label}</button>;
        }

        <Button label="Save" onClick={() => console.log("Saved")} />
        // <Button label={123} /> // Error: number is not assignable to string
        // <Button />             // Error: Property 'label' is missing`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`ButtonProps` component ku enna props venum nu clear ah solludhu.',
                            'Wrong prop type or missing required prop irundha, udane error varum.',
                            'Idhu team la bugs and miscommunication kammi pannum.',
                        ],
                    },
                ],
            },
            {
                label: '6',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Trade-offs (disadvantages)**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Extra setup: Compiler (`tsc`) or build tool venum, `tsconfig.json` configure pannanum.',
                            'Learning curve: Types, generics, utility types purinjukka time aagum.',
                            'More code: Types ezhudha extra time aagum.',
                            'Compile time: Large project la build time adhigam aagalam.',
                            'Types runtime la irukkaadhu. API la irundhu varra data wrong type ah irundha, TypeScript catch pannaadhu. Runtime validation (Zod, Yup) venum.',
                            '`any` type overuse panna, TypeScript oda benefit pogidum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `// Runtime la types illa
        interface User {
        name: string;
        }

        async function getUser(): Promise<User> {
        const res = await fetch("/api/user");
        return res.json(); // TypeScript trust pannum, API wrong data kudutha catch pannaadhu
        }

        // any overuse (bad)
        let data: any = "hello";
        data.foo.bar(); // TypeScript error kaattaadhu, runtime la crash`,
                    },
                ],
            },
            {
                label: '7',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**When to use which?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'TypeScript use pannunga: Large projects, long-term maintenance, team work, shared libraries, complex business logic.',
                            'JavaScript podhum: Small scripts, quick prototypes, learning projects, very small apps.',
                            'Existing JavaScript project ah gradually migrate pannalam. `allowJs` enable panni, file by file TypeScript ku maathalam.',
                            'Most modern companies TypeScript use pannuvaanga, so job market la um important skill.',
                        ],
                    },
                ],
            },
            {
                label: '8',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Interview tips**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Idha order la sollunga: what is TypeScript, main reasons, example, trade-offs, when to use.',
                            '“TypeScript la static types irukku. Errors ah runtime la illa, development time la catch pannalam. Adhunaala large projects la bugs kammi aagum” nu kandippa sollunga. Idhu dhaan core point.',
                            'Typo or wrong type example kaattunga: `add(2, "3")` error. Interview la idha romba ketpaanga.',
                            'Types compile time la mattum irukkum, runtime la irukkaadhu nu clear ah sollunga. Idhula many per confuse aaguvaanga.',
                            'Trade-offs um mention pannunga: setup, learning curve, `any` overuse. Idhu balanced and senior level answer.',
                            'Runtime validation (Zod) venum nu sollunga, because API data ah TypeScript check pannaadhu.',
                            'Idhu type coercion, ES6 features, and React props oda connect aagum, so adhayum sollunga.',
                            'Memory trick: “Catch errors early, code self-documents”.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-2',
        topicId: 'typescript',
        title: 'Interface vs type — when would you use each?',
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
                            'Both describe the shape of data.',
                            'Interface is mainly for object shapes and can be extended.',
                            'Type can describe anything: unions, tuples, primitives and objects.',
                            'For simple objects both work the same.',
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
                            '**Interface** - object/class contracts, supports `extends` and **declaration merging** (same name declared twice merges).',
                            '**Type alias** - can name unions, intersections, tuples, primitives, mapped and conditional types.',
                            '**Extending** - interface uses extends; type uses intersection (&).',
                            '**Unions** - only type can express type Status = "idle" | "loading".',
                            '**Classes** - a class can implement either, interfaces are more conventional.',
                            '**Performance and errors** - interface extends is often cached better and gives clearer error messages in big projects.',
                            '**Rule of thumb** - interface for public object shapes and library APIs; type for unions, utility compositions and everything else. Be consistent in the team.',
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
                        text: `interface User { id: number; name: string; }
    interface Admin extends User { role: 'admin'; }
    
    // Declaration merging (interface only)
    interface Window { appVersion: string; }
    
    type Status = 'idle' | 'loading' | 'error';   // union (type only)
    type ApiResult = { data: User } | { error: string };
    type AdminUser = User & { permissions: string[] };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Interfaces fit object contracts and merging; types fit unions and compositions.',
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
                        text: 'In Archer Review, we used interface for props and API entities, and type for unions like exam status and for derived types built with utility types.',
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
                            'Both define shapes, and for objects they are mostly interchangeable.',
                            'Interfaces support declaration merging and extend cleanly, so I use them for object contracts and public APIs.',
                            'Types handle unions, tuples, mapped and conditional types, so I use them for those.',
                            'The most important thing is team consistency.',
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
                        text: '**You need to add a custom property to the global Window or Express Request object. Which one?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Interface - use declaration merging to augment the existing type.',
                            'Types cannot be merged.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A prop can be either "primary" or "secondary". How do you type it?**',
                    },
                    {
                        type: 'bullets',
                        items: ['type Variant = "primary" | "secondary" - unions need type alias.'],
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
                        items: ['Interface', 'Type alias', 'Declaration merging', 'Union', 'Extends', 'Intersection'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-3',
        topicId: 'typescript',
        title: 'What are generics?',
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
                            'Generics let you write code that works with many types while staying type safe.',
                            'Think of them as type variables, like function parameters but for types.',
                            'Common letter is T.',
                            'Examples: Array<T>, Promise<T>.',
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
                            'Generics make functions, interfaces, classes and types **reusable without losing type information**.',
                            '**Problem solved** - without generics you use any (unsafe) or duplicate code for each type.',
                            '**Inference** - TypeScript usually infers T from the arguments.',
                            '**Defaults** - <T = string> provides a default type.',
                            '**Multiple params** - <TKey, TValue>.',
                            '**Common uses** - API wrappers, React components and hooks, collections, utility types.',
                            'Use meaningful names (TData, TError) for complex generics.',
                            'Do not over-generalize: if a generic is used only once, it may not be needed.',
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
                        text: `function first<T>(items: T[]): T | undefined {
    return items[0];
    }
    const n = first([1, 2, 3]);       // number | undefined
    const s = first(['a', 'b']);      // string | undefined
    
    interface ApiResponse<T> {
    data: T;
    status: number;
    }
    const res: ApiResponse<User[]> = await fetchUsers();`,
                    },
                    {
                        type: 'highlight',
                        text: 'The same function returns the correct type for each input; ApiResponse<T> reuses one shape for all endpoints.',
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
                        text: 'In Archer Review, a generic ApiResponse<T> and a generic useFetch<T> hook were used for all endpoints, so every call returned correctly typed data.',
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
                            'Generics are type parameters that let me write reusable code without losing type safety.',
                            'They avoid both any and code duplication.',
                            'I use them for API responses, hooks, components and utility functions.',
                            'TypeScript usually infers the type, and I add constraints when needed.',
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
                        text: '**You have getUsers(), getOrders() and getProducts() each wrapping fetch with the same logic. How do you avoid duplication?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create one generic function request<T>(url): Promise<T>.',
                            'Each call specifies its type: request<User[]>("/users").',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Someone wrote function identity(x: any): any. What is wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'any loses the relationship between input and output type.',
                            'Use identity<T>(x: T): T so output type matches input.',
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
                        items: ['Generics', 'Type parameter', 'Reusable', 'Inference', 'Type safe'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-4',
        topicId: 'typescript',
        title: 'Explain generic constraints.',
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
                            'A constraint limits what types a generic can accept.',
                            'You write it with the extends keyword.',
                            'It lets you safely use properties of the type inside the function.',
                            'Example: T extends { id: number }.',
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
                            'Constraints restrict a type parameter to types that satisfy a minimum shape: <T extends Shape>.',
                            '**Why** - plain T is unknown, so you cannot access properties on it.',
                            '**keyof constraint** - <K extends keyof T> ensures a key exists on the object.',
                            '**Multiple constraints** - use intersection: T extends A & B.',
                            '**Constraint with default** - <T extends object = {}>.',
                            '**Benefit** - flexibility plus safety: accept many types but guarantee required members.',
                            'Common pattern: type-safe property getters, entity helpers needing id, and components accepting objects with specific fields.',
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
                        text: `function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);   // item.id is safe
    }
    
    function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
    }
    const user = { id: 1, name: 'Asha' };
    getProp(user, 'name');   // string
    getProp(user, 'age');    // Error: not a key of user`,
                    },
                    {
                        type: 'highlight',
                        text: 'Constraints guarantee id exists, and keyof prevents using keys that do not exist.',
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
                        text: 'In Archer Review, a generic list helper required items to have an id so lookups, selection and keys worked safely for questions, users and topics.',
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
                            'Generic constraints use extends to limit what a type parameter can be.',
                            'They let me safely access known properties inside generic code.',
                            'K extends keyof T is a common pattern for type-safe property access.',
                            'It gives flexibility without falling back to any.',
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
                        text: '**Your generic function sorts items by a key chosen by the caller. How do you type it safely?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'sortBy<T, K extends keyof T>(items: T[], key: K).',
                            'Compiler rejects keys that do not exist on T.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Generic function needs item.id but T is unconstrained and TS errors. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Add constraint T extends { id: string | number }.', 'Do not cast to any.'],
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
                        items: ['extends', 'keyof', 'Constraint', 'Type safety', 'Indexed access'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-5',
        topicId: 'typescript',
        title: 'What are utility types?',
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
                            'Utility types are built-in helpers that transform existing types.',
                            'They save you from rewriting similar types.',
                            'Examples: Partial, Required, Pick, Omit, Record, Readonly.',
                            'They are made using generics, mapped and conditional types.',
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
                            'Utility types are predefined generic types in TypeScript for common type transformations.',
                            '**Object shaping** - Partial, Required, Readonly, Pick, Omit, Record.',
                            '**Union filtering** - Exclude, Extract, NonNullable.',
                            '**Function related** - ReturnType, Parameters, ConstructorParameters.',
                            '**Async** - Awaited<T> unwraps Promise types.',
                            '**Benefits** - single source of truth; derived types update automatically when the base type changes.',
                            'They are built from mapped and conditional types, so understanding those helps create custom utilities.',
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
                        text: `interface User { id: number; name: string; email: string; }
    
    type UserPreview = Pick<User, 'id' | 'name'>;
    type CreateUser = Omit<User, 'id'>;
    type UpdateUser = Partial<User>;
    type RoleMap = Record<'admin' | 'user', string[]>;
    
    type Fetcher = () => Promise<User[]>;
    type Data = Awaited<ReturnType<Fetcher>>;   // User[]`,
                    },
                    {
                        type: 'highlight',
                        text: 'All types derive from User, so changing User updates them automatically.',
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
                        text: 'In Archer Review, form payloads and update APIs were derived from base entity types using Omit and Partial instead of duplicating interfaces.',
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
                            'Utility types are built-in generics that transform existing types, such as Partial, Pick, Omit and Record.',
                            'They keep types DRY and in sync with a single source of truth.',
                            'Others like ReturnType, Parameters and Awaited derive types from functions.',
                            'Under the hood they use mapped and conditional types.',
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
                        text: '**Backend User type has 15 fields. Your edit form needs only 3, all optional. How do you type the form?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Partial<Pick<User, "name" | "email" | "phone">>.',
                            'Avoid creating a duplicate interface.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need the return type of an existing async function without redefining it.**',
                    },
                    {
                        type: 'bullets',
                        items: ['Awaited<ReturnType<typeof fn>>.'],
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
                        items: ['Utility types', 'Partial', 'Pick', 'Omit', 'Record', 'ReturnType', 'Awaited'],
                    },
                ],
            },
        ],
    }),
];
