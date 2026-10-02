import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const typescriptQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'ts-6',
        topicId: 'typescript',
        title: 'Explain Partial, Required, Pick, Omit, and Record.',
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
                            'Partial makes all properties optional.',
                            'Required makes all properties required.',
                            'Pick selects only some properties.',
                            'Omit removes some properties.',
                            'Record builds an object type with specific keys and one value type.',
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
                            '**Partial<T>** - every property becomes optional. Good for update/patch payloads and default props.',
                            '**Required<T>** - every property becomes required (removes ?).',
                            '**Pick<T, K>** - keeps only keys K. Good for previews and props subsets.',
                            '**Omit<T, K>** - removes keys K. Good for create payloads (omit id, createdAt).',
                            '**Record<K, V>** - object with keys K and values V. Good for lookups, maps and enums-to-config.',
                            '**Readonly<T>** - bonus: makes all properties immutable.',
                            'Caveats: Partial is shallow (not deep); Omit does not check that K exists in T strictly (use Exclude with keyof for stricter safety); Record with string keys allows any key.',
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
                        text: `interface Product { id: number; name: string; price: number; stock?: number; }
    
    type Patch   = Partial<Product>;                  // all optional
    type Full    = Required<Product>;                 // stock required
    type Card    = Pick<Product, 'name' | 'price'>;   // only 2 fields
    type NewItem = Omit<Product, 'id'>;               // no id
    type Stock   = Record<'in' | 'out', number>;      // { in: number; out: number }
    
    const labels: Record<Product['name'], string> = {};`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each utility reshapes Product for a specific use case without writing new interfaces.',
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
                        text: 'In Archer Review, Omit<Question, "id"> was used for creating questions, Partial<Question> for edit requests, and Record<Difficulty, string> for badge colors.',
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
                            'Partial makes all fields optional, Required makes them required.',
                            'Pick keeps selected keys and Omit removes selected keys.',
                            'Record creates an object type from a key type and a value type.',
                            'I use them to derive create, update and preview types from one base type.',
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
                        text: '**Map each status ("pending" | "paid" | "failed") to a badge color, and forget none.**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Record<Status, string> - compiler errors if a status key is missing.',
                            'Adding a new status forces you to update the map.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**PATCH endpoint accepts any subset of fields except id. Type the payload.**',
                    },
                    {
                        type: 'bullets',
                        items: ['Partial<Omit<User, "id">>.'],
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
                        items: ['Partial', 'Required', 'Pick', 'Omit', 'Record', 'Readonly'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-7',
        topicId: 'typescript',
        title: 'What is the difference between any, unknown, and never?',
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
                            'any turns off type checking - you can do anything with it.',
                            'unknown means "I do not know the type yet" - you must check it before using it.',
                            'never means a value that can never happen.',
                            'Prefer unknown over any.',
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
                            '**any** - opt-out of type system; assignable to and from everything. Silently spreads and hides bugs.',
                            '**unknown** - the type-safe top type; anything can be assigned to it, but you must narrow (typeof, instanceof, guards, Zod) before use.',
                            '**never** - the bottom type; no values exist. Used for functions that never return (throw/infinite loop), impossible branches and exhaustive checks.',
                            '**Where each fits** - any: temporary migration escape hatch; unknown: external data (JSON, catch errors, event payloads); never: exhaustiveness and filtering types.',
                            '**Exhaustive check** - assign the leftover value to never in a switch default to force handling new union members.',
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
                        text: `let a: any = 'hi';
    a.toUpperCase().foo.bar;      // no error, crashes at runtime
    
    let u: unknown = fetchedValue;
    // u.toUpperCase();           // Error
    if (typeof u === 'string') u.toUpperCase();   // OK after narrowing
    
    type Shape = 'circle' | 'square';
    function area(s: Shape) {
    switch (s) {
    case 'circle': return 1;
    case 'square': return 2;
    default: { const _x: never = s; return _x; }  // error if new Shape added
    }
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'any hides bugs, unknown forces checks, and never gives compile-time exhaustiveness.',
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
                        text: 'In Archer Review, API data and caught errors were typed as unknown and validated before use, and switch statements on exam status used never for exhaustive checks.',
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
                            'any disables type checking, so I avoid it.',
                            'unknown is the safe alternative; I must narrow it before use.',
                            'never represents impossible values and is useful for exhaustive checks.',
                            'I use unknown for external data and catch blocks.',
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
                        text: '**In a catch block, error is unknown. How do you read error.message safely?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'if (error instanceof Error) { error.message }.',
                            'Otherwise handle as a generic/string error.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You add a new union member but a switch silently ignores it. How do you prevent that?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add a default branch assigning the value to never.',
                            'Compiler then fails until every case is handled.',
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
                        items: ['any', 'unknown', 'never', 'Top type', 'Bottom type', 'Exhaustive check'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-8',
        topicId: 'typescript',
        title: 'What are union and intersection types?',
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
                            'Union (|) means the value can be one of several types.',
                            'Intersection (&) means the value must have all the types combined.',
                            'Union = "this OR that".',
                            'Intersection = "this AND that".',
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
                            '**Union A | B** - value is A or B. You can only access members common to both until you narrow.',
                            '**Intersection A & B** - value has all members of A and B. Used to compose object types.',
                            '**Literal unions** - "idle" | "loading" | "error" replace enums in many cases.',
                            '**Gotcha** - intersecting incompatible primitives (string & number) gives never.',
                            '**Unions of objects** - best combined with a discriminant for narrowing.',
                            '**Intersections for composition** - props mixins, extending third-party types, HOCs.',
                            'Union types describe variety of possible states; intersections describe combined capabilities.',
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
                        text: `type Id = string | number;
    function show(id: Id) {
    if (typeof id === 'string') return id.toUpperCase();
    return id.toFixed(0);                 // narrowed to number
    }
    
    type Timestamps = { createdAt: Date; updatedAt: Date };
    type User = { id: number; name: string };
    type UserWithTime = User & Timestamps;  // has all four fields`,
                    },
                    {
                        type: 'highlight',
                        text: 'Union needs narrowing before use; intersection merges members into one type.',
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
                        text: 'In Archer Review, a component prop used ButtonProps & { loading?: boolean }, and statuses were literal unions for exams and payments.',
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
                            'Union means one of several types, and I narrow it before using type-specific members.',
                            'Intersection combines types into one that has all members.',
                            'I use literal unions for finite states and intersections for composing object types.',
                            'Unions with a discriminant property give the safest narrowing.',
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
                        text: '**A function accepts a string or a string array. How do you handle it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Type it as string | string[].',
                            'Narrow with Array.isArray or typeof, then normalize to array.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need props = your own props + native button props.**',
                    },
                    {
                        type: 'bullets',
                        items: ['type Props = OwnProps & React.ComponentPropsWithoutRef<"button">.'],
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
                        items: ['Union', 'Intersection', 'Literal types', 'Narrowing', 'Composition'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-9',
        topicId: 'typescript',
        title: 'What are discriminated unions?',
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
                            'A discriminated union is a union of objects that share one common property with a unique value.',
                            'That common property tells TypeScript which type you have.',
                            'Checking it lets TypeScript narrow automatically.',
                            'Perfect for loading / success / error states.',
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
                            'Each member has a **literal-typed discriminant** (kind, type, status) and TypeScript narrows on it.',
                            '**Benefits** - impossible states are not representable (no data while loading, no error on success).',
                            '**Narrowing** - switch or if on the discriminant gives exact member type.',
                            '**Exhaustiveness** - add default with never to ensure all cases are handled.',
                            '**Use cases** - async state, API results, reducer actions (Redux/useReducer), form steps, events.',
                            'Better than a single object with many optional fields, which allows invalid combinations.',
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
                        text: `type State =
    | { status: 'loading' }
    | { status: 'success'; data: User[] }
    | { status: 'error'; message: string };
    
    function render(s: State) {
    switch (s.status) {
    case 'loading': return 'Loading...';
    case 'success': return s.data.length;     // data is available
    case 'error':   return s.message;         // message is available
    }
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Checking status tells TypeScript exactly which fields exist, so there are no undefined checks.',
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
                        text: 'In Archer Review, fetch state and useReducer actions used discriminated unions, which removed many optional-field checks and impossible UI states.',
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
                            'A discriminated union is a union of object types sharing a literal-typed property like status or type.',
                            'TypeScript uses it to narrow to the exact member.',
                            'It makes impossible states unrepresentable and is great for async state and reducer actions.',
                            'I add an exhaustive check with never so new variants are not missed.',
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
                        text: '**Your component has isLoading, data?, error? booleans and sometimes shows both data and error. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Replace with a discriminated union on status.',
                            'Each state carries only its valid fields.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Design the action types for a useReducer.**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Union of { type: "add"; item } | { type: "remove"; id } | { type: "clear" }.',
                            'Reducer switch narrows each action payload.',
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
                        items: ['Discriminant', 'Literal type', 'Narrowing', 'Exhaustive check', 'Impossible states'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-10',
        topicId: 'typescript',
        title: 'What are type guards?',
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
                            'A type guard is a check that tells TypeScript what type a value is.',
                            'Examples: typeof, instanceof, the in operator.',
                            'You can also write your own guard function.',
                            'After the check, TypeScript knows the exact type.',
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
                            'Type guards are runtime checks that **narrow** a type inside a code block.',
                            '**Built-in** - typeof (primitives), instanceof (classes), in (property existence), Array.isArray, equality/truthiness.',
                            '**Custom guard** - function returning a type predicate: (x: unknown): x is User.',
                            '**Assertion function** - asserts x is User throws if invalid.',
                            '**Discriminant checks** - checking a literal property on unions.',
                            '**Caution** - a custom guard is trusted by the compiler; a wrong implementation causes unsafe code. For external data, prefer schema validation (Zod) which generates both guard and type.',
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
                        text: `interface Cat { meow(): void }
    interface Dog { bark(): void }
    
    function isDog(pet: Cat | Dog): pet is Dog {
    return 'bark' in pet;
    }
    
    function speak(pet: Cat | Dog) {
    if (isDog(pet)) pet.bark();   // Dog
    else pet.meow();              // Cat
    }
    
    function isString(v: unknown): v is string { return typeof v === 'string'; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The "pet is Dog" predicate tells TypeScript the type inside each branch.',
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
                        text: 'In Archer Review, we used guards for API error objects and for filtering null/undefined out of arrays, with Zod for validating server responses.',
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
                            'Type guards are runtime checks that narrow a type inside a branch.',
                            'Built-ins are typeof, instanceof and in, and I write custom guards with "x is Type".',
                            'Compiler trusts custom guards, so they must be correct.',
                            'For external data I prefer schema validation like Zod.',
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
                        text: '**You call .filter(Boolean) on (User | null)[] but result is still (User | null)[]. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Use a guard: .filter((u): u is User => u !== null).'],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Webhook payload arrives as unknown. How do you use it safely?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Validate with a Zod schema (safeParse) or write a type guard.',
                            'Only then treat it as the typed value.',
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
                        items: ['Type guard', 'typeof', 'instanceof', 'in operator', 'Type predicate', 'Narrowing'],
                    },
                ],
            },
        ],
    }),
];
