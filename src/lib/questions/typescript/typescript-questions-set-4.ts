import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const typescriptQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'ts-16',
        topicId: 'typescript',
        title: 'How do you type custom hooks?',
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
                            'Type the hook parameters and its return value.',
                            'Use generics if the hook works with different data types.',
                            'Type state with useState<Type>().',
                            'Return objects or tuples with clear types.',
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
                            '**Parameters** - explicit types, options object with an interface.',
                            '**Return type** - let inference work for simple hooks; annotate public hooks for stable contracts.',
                            '**Generics** - useFetch<T>, useLocalStorage<T> keep data type safe.',
                            '**State** - useState<User | null>(null) when initial value does not reveal the type.',
                            '**Tuple returns** - use "as const" or an explicit tuple type so [value, setValue] is not widened to an array.',
                            '**Refs and callbacks** - useRef<HTMLDivElement>(null), useCallback with typed params.',
                            '**Discriminated state** - return { status, data, error } as a union for safe consumption.',
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
                        text: `function useLocalStorage<T>(key: string, initial: T) {
    const [value, setValue] = useState<T>(() => {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
    });
    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
    return [value, setValue] as const;   // readonly [T, Dispatch<SetStateAction<T>>]
    }

    type FetchState<T> =
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: Error };

    function useFetch<T>(url: string): FetchState<T> { /* ... */ }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Generics keep data typed, "as const" keeps the tuple, and a union return makes states safe to consume.',
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
                        text: 'In Archer Review, useFetch<T> and useLocalStorage<T> were generic, so each component using them received correctly typed data.',
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
                            'I type hook parameters and return values, and use generics for reusable hooks like useFetch<T>.',
                            'I use as const or explicit tuple types for tuple returns.',
                            'I type state explicitly when the initial value is null or empty.',
                            'I return discriminated unions for async state so consumers cannot misuse it.',
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
                        text: '**Your hook returns [value, setValue] but TypeScript infers (T | Dispatch)[]. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Return "as const" or annotate a tuple return type.'],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**useState(null) then setUser(user) gives an error. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Initial null infers type null only.', 'Use useState<User | null>(null).'],
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
                        items: ['Custom hook', 'Generics', 'as const', 'Tuple', 'useState<T>', 'Discriminated union'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-17',
        topicId: 'typescript',
        title: 'How do you type API responses?',
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
                            'Create types or interfaces that match the data from the server.',
                            'Use generics for common wrappers like ApiResponse<T>.',
                            'Type the function return value, for example Promise<User[]>.',
                            'Validate the data at runtime when possible.',
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
                            'Types disappear at runtime, so an API type is only a **promise**, not a guarantee.',
                            '**Define DTO types** - separate API shape from UI/domain models and map between them.',
                            '**Generic wrapper** - ApiResponse<T>, Paginated<T>.',
                            '**Error and success** - discriminated union or Result<T, E>.',
                            '**Runtime validation** - Zod/Valibot: schema is the source of truth and z.infer<typeof schema> generates the type.',
                            '**Code generation** - OpenAPI/GraphQL codegen (openapi-typescript, GraphQL Codegen) keeps types in sync with the backend.',
                            '**Avoid** - casting response.json() as T without validation, and typing as any.',
                            'Handle nullability, optional fields and date strings (JSON has no Date type).',
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
                        text: `import { z } from 'zod';

    const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    createdAt: z.string(),
    });
    type User = z.infer<typeof UserSchema>;

    async function getUser(id: number): Promise<User> {
    const res = await fetch('/api/users/' + id);
    if (!res.ok) throw new Error('Failed');
    return UserSchema.parse(await res.json());   // validated at runtime
    }

    interface Paginated<T> { items: T[]; total: number; page: number; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Zod validates at runtime and gives the TypeScript type from the same schema.',
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
                        text: 'In Archer Review, API responses were validated with Zod at the API layer, so components could trust data and unexpected backend changes failed early with clear errors.',
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
                            'I define types for responses, use generic wrappers like ApiResponse<T>, and type function returns.',
                            'Since types are erased at runtime, I validate with Zod or generate types from OpenAPI.',
                            'I avoid casting json() with "as" without validation.',
                            'I map API DTOs into UI models where shapes differ.',
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
                        text: '**Backend changed a field from number to string and the app broke in production silently. How do you prevent that?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Validate responses with a schema at the API boundary.',
                            'Generate types from OpenAPI so changes break the build.',
                            'Add contract tests.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**API returns dates as strings but your UI expects Date. How do you type it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Type the DTO with string, then transform to Date in a mapper (or Zod transform).',
                            'Keep separate API and domain types.',
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
                        items: ['DTO', 'Generic wrapper', 'Zod', 'z.infer', 'OpenAPI', 'Runtime validation'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-18',
        topicId: 'typescript',
        title: 'How would you design a type-safe API layer?',
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
                            'Create one central place for all API calls.',
                            'Type the inputs and outputs of every function.',
                            'Handle errors in a consistent way.',
                            'Validate data from the server.',
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
                            'Goal: every network call is typed end to end, validated and consistently handled.',
                            '**Single client** - one fetch/axios wrapper handling base URL, auth headers, retries, interceptors.',
                            '**Typed endpoints** - an endpoint map or functions like getUsers(): Promise<User[]>; generic request<TResponse, TBody>.',
                            '**Schemas** - Zod schemas for responses and request bodies; types inferred from them.',
                            '**Error model** - custom ApiError class or Result type with discriminated union.',
                            '**Codegen** - OpenAPI/tRPC/GraphQL codegen for end-to-end type safety.',
                            '**Data layer** - TanStack Query hooks (useUsers) wrapping typed functions with query key factories.',
                            '**Mapping** - DTO to domain model mappers.',
                            '**Testing** - mock handlers (MSW) typed with the same schemas.',
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
                        text: `// client.ts
    export async function request<T>(path: string, schema: z.ZodType<T>, init?: RequestInit): Promise<T> {
    const res = await fetch(BASE_URL + path, init);
    if (!res.ok) throw new ApiError(res.status, await res.text());
    return schema.parse(await res.json());
    }

    // users.api.ts
    export const getUsers = () => request('/users', z.array(UserSchema));
    export const createUser = (body: CreateUser) =>
    request('/users', UserSchema, { method: 'POST', body: JSON.stringify(body) });

    // hooks
    export const useUsers = () => useQuery({ queryKey: ['users'], queryFn: getUsers });`,
                    },
                    {
                        type: 'highlight',
                        text: 'One typed, validated client; endpoint functions and hooks inherit types automatically.',
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
                        text: 'In Archer Review, all calls went through one typed request function and TanStack Query hooks, so components never touched fetch directly and API changes were handled in one place.',
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
                            'I centralize network access in one typed client handling auth, errors and retries.',
                            'Endpoints are typed functions with request and response types, validated with Zod or generated from OpenAPI.',
                            'Errors use a consistent ApiError or Result type.',
                            'On top of it I add TanStack Query hooks, so UI gets typed data, loading and error states.',
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
                        text: '**The backend team ships changes weekly and your front end keeps breaking. What design helps?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Generate types from OpenAPI in CI so changes break the build early.',
                            'Validate responses at runtime and add contract tests.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Different components handle 401 and 500 errors in different ways. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Handle auth errors in the central client (refresh/redirect).',
                            'Throw typed ApiError so UI handles it consistently.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You have both REST and GraphQL in the same app. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a common typed layer or codegen for each.',
                            'Expose both through consistent hooks to the UI.',
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
                            'API client',
                            'Generic request',
                            'Zod',
                            'OpenAPI codegen',
                            'ApiError',
                            'TanStack Query',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-19',
        topicId: 'typescript',
        title: 'How do you prevent excessive use of any in a large project?',
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
                            'Turn on strict mode in tsconfig.',
                            'Use unknown instead of any and then narrow it.',
                            'Add lint rules that warn or error on any.',
                            'Review code to catch any in pull requests.',
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
                            'any spreads silently and removes the value of TypeScript, so prevention should be automated.',
                            '**tsconfig** - "strict": true, noImplicitAny, strictNullChecks, noUncheckedIndexedAccess.',
                            '**ESLint** - @typescript-eslint/no-explicit-any, no-unsafe-assignment, no-unsafe-member-access, no-unsafe-call, no-unsafe-return.',
                            '**Alternatives** - unknown + narrowing, generics, proper interfaces, Zod for external data.',
                            '**Third-party types** - install @types packages; write small .d.ts declarations instead of any.',
                            '**Escape hatches** - when unavoidable, use @ts-expect-error with a comment (it errors when the issue is fixed) instead of @ts-ignore.',
                            '**CI** - fail the build on lint errors, track the any count (e.g., type-coverage) and reduce it over time.',
                            '**Culture** - code review guidelines and shared helper types.',
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
                        text: `// tsconfig.json
    { "compilerOptions": { "strict": true, "noUncheckedIndexedAccess": true } }

    // .eslintrc
    {
    "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "error"
    }
    }

    // Bad
    function parse(data: any) { return data.user.name; }
    // Good
    function parse(data: unknown) {
    const parsed = UserSchema.parse(data);
    return parsed.name;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Strict config plus lint rules block new any, and unknown plus validation replaces it safely.',
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
                        text: 'In Archer Review, we enabled strict mode and no-explicit-any in CI, and replaced any with unknown plus Zod validation, which cut type-related runtime bugs.',
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
                            'I enable strict mode and ESLint rules like no-explicit-any and the no-unsafe-* rules, enforced in CI.',
                            'I use unknown with narrowing, generics and schema validation instead of any.',
                            'For unavoidable cases I use @ts-expect-error with a reason.',
                            'I track any usage over time and reinforce it in code reviews.',
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
                        text: '**Existing project has 2,000 uses of any. How do you reduce them without stopping feature work?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Block new any with lint in CI (warn on old code, error on changed files).',
                            'Fix any in files you touch and track progress with type-coverage.',
                            'Prioritize shared types and the API layer first.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A third-party library has no types. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check DefinitelyTyped (@types/...).',
                            'Otherwise write a minimal .d.ts declaration for the parts you use.',
                            'Wrap the library in your own typed module.',
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
                        items: ['strict', 'noImplicitAny', 'no-explicit-any', 'unknown', '@ts-expect-error', 'CI'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ts-20',
        topicId: 'typescript',
        title: 'How would you migrate a large JavaScript application to TypeScript?',
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
                            'Do it step by step, not all at once.',
                            'Add TypeScript and allow JavaScript files to stay.',
                            'Convert files one by one, starting with small and shared files.',
                            'Turn on stricter rules gradually.',
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
                            'Migrate **incrementally** while the product keeps shipping.',
                            '**Setup** - add TypeScript, tsconfig with allowJs and checkJs (optional), set up the bundler, ESLint and CI.',
                            '**Start loose** - strict false at first, then enable flags one by one (noImplicitAny, strictNullChecks, then strict).',
                            '**Order** - start with leaf modules: utils, constants, shared types, API layer, then hooks and components, and finally pages.',
                            '**Types first** - define core domain and API types early, use JSDoc types for quick wins in JS files.',
                            '**Rule for new code** - all new files are .ts/.tsx; touched files get converted (boy-scout rule).',
                            '**Tooling** - ts-migrate or codemods for bulk renaming, @types packages for libraries.',
                            '**Avoid** - mass any, and big-bang rewrites; use @ts-expect-error with TODOs for temporary gaps.',
                            '**Track** - type coverage dashboards, CI gates, and team training and conventions.',
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
                        text: `// tsconfig.json (phase 1)
    {
    "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "noImplicitAny": false,
    "strict": false,
    "jsx": "react-jsx",
    "outDir": "dist"
    },
    "include": ["src"]
    }
    // Phase 2: noImplicitAny -> strictNullChecks -> strict: true
    // Rename: utils/format.js -> utils/format.ts, then add types`,
                    },
                    {
                        type: 'highlight',
                        text: 'JS and TS live together, and strictness is increased step by step as files are converted.',
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
                        text: 'In Archer Review, we started with shared types and the API layer, made all new files TypeScript, converted components as we touched them, and turned on strict flags gradually.',
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
                            'I migrate incrementally: add TypeScript with allowJs, keep the app shipping, and convert files from leaf modules upward.',
                            'I start with loose settings and enable strict flags gradually.',
                            'New code is always TypeScript, and old code is converted when touched.',
                            'I define core types early, avoid mass any, and track progress in CI.',
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
                        text: '**Management does not want a feature freeze for the migration. How do you plan?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Incremental plan: tooling first, then new files in TS and convert while touching.',
                            'Allocate small weekly migration budget and track progress.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After renaming 300 files you have 5,000 type errors. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Do not do big-bang renames; migrate folder by folder.',
                            'Temporarily relax flags or use @ts-expect-error with TODOs and fix by priority.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team members are new to TypeScript. How do you ensure a smooth migration?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Short training and shared guidelines (when to use type vs interface, avoid any).',
                            'Code review and pairing, plus reusable helper types.',
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
                            'Incremental migration',
                            'allowJs',
                            'strict flags',
                            'Leaf modules',
                            'ts-migrate',
                            'Type coverage',
                        ],
                    },
                ],
            },
        ],
    }),
];
