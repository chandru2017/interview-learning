import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet7: IQuestion[] = [
    createQuestion({
        id: 're-31',
        topicId: 'react',
        title: 'Context API vs Redux.',
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
                            'Context API - built into React, good for simple state (theme, auth).',
                            'Redux - external library, good for complex state.',
                            "Context is simpler but doesn't scale.",
                            'Redux has more boilerplate but better for large apps.',
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
                            '**Context API:** built-in, good for: theme, language, auth status, small-medium apps.',
                            '**Limitations:** all consumers re-render when context changes (no granular updates), performance can suffer with frequent updates.',
                            '**Redux:** external store, good for: large apps, complex state, many state interactions, predictable state management.',
                            '**Benefits:** DevTools for debugging, middleware, immutability patterns, clear data flow.',
                            '**Trade-off:** more boilerplate, steeper learning curve.',
                            '**Alternatives:** Zustand (lighter Redux), MobX (observable), Recoil.',
                            '**Best practice:** Context for app-level config, Redux/state management for domain logic.',
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
                        text: `// Context API
    const ThemeContext = React.createContext();

    function Provider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
    </ThemeContext.Provider>
    );
    }

    // Using Context
    function Component() {
    const { theme } = useContext(ThemeContext);
    return <div className={theme}>Content</div>;
    }

    // Redux (simplified)
    import { useDispatch, useSelector } from 'react-redux';

    function Component() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
    <button onClick={() => dispatch(toggleTheme())}>
    {theme}
    </button>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Context simpler, Redux more structured with actions and reducers.',
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
                        text: `In Archer Review, Context for theme, Redux for complex form state might've been overkill.`,
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
                            'Context API is built-in, simple, good for theme/language/auth.',
                            'Redux is external library for complex state management.',
                            'Context performance can suffer with frequent updates.',
                            'Redux has DevTools and middleware.',
                            'Choose based on app complexity - Context for simple state, Redux for complex apps.',
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
                        items: ['Context API', 'Redux', 'state management', 'complexity', 'performance'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-32',
        topicId: 'react',
        title: 'Redux vs Zustand.',
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
                            'Redux - traditional, lots of boilerplate, but very powerful and predictable.',
                            'Zustand - simpler, less boilerplate, more modern.',
                            'Both manage global state.',
                            'Choose Redux for large teams/complex apps, Zustand for simple/small apps.',
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
                            '**Redux:** established, mature ecosystem, DevTools, middleware, predictable patterns, but verbose (actions, reducers, dispatch).',
                            '**Zustand:** minimal boilerplate, simple API, good documentation, no actions/reducers, just write code.',
                            '**Performance:** both good, Zustand less verbose.',
                            '**Learning curve:** Redux steeper, Zustand simpler.',
                            '**Ecosystem:** Redux has more libraries/tools.',
                            '**Choosing:** Redux for enterprise, teams, complex state; Zustand for startups, simple logic, quick prototyping.',
                            '**Other alternatives:** MobX (observable), Recoil (atomic), TanStack Query (server state).',
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
                        text: `// Redux (verbose)
    const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
    return { count: state.count + 1 };
    default:
    return state;
    }
    };

    dispatch({ type: 'INCREMENT' });
    const count = useSelector(s => s.count);

    // Zustand (simple)
    const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 }))
    }));

    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);
    increment();`,
                    },
                    {
                        type: 'highlight',
                        text: 'Redux requires actions/reducers. Zustand just mutates store.',
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
                        text: `In Archer Review, Zustand would've been simpler than Redux for form state.`,
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
                            'Redux is verbose but powerful, good for large apps with many developers.',
                            'Zustand is simpler with less boilerplate, good for small to medium projects.',
                            'Both manage global state effectively.',
                            'Choose based on app size and team preference.',
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
                        items: ['Redux', 'Zustand', 'state management', 'boilerplate', 'simplicity'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-33',
        topicId: 'react',
        title: 'Redux vs React Query.',
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
                            'Redux - manage all state.',
                            'React Query - manage server state (data from API).',
                            "They're different - Redux handles app state, React Query handles API data.",
                            'Modern apps often use both.',
                            'React Query handles caching, pagination, mutations.',
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
                            '**Redux:** general state management (user preferences, form state, app state).',
                            '**React Query:** server state management (API data, caching, background sync).',
                            '**Key insight:** server state is different from client state.',
                            'Server state is shared, async, can go stale.',
                            'Client state is local, synchronous, always fresh.',
                            '**React Query handles server state complexity:** caching, refetching, pagination, optimistic updates, mutations.',
                            'Redux for app logic and workflows.',
                            'React Query for API integration.',
                            '**Modern apps:** Redux (or Zustand) for local state + React Query for server state.',
                            "**Don't use Redux for API data** - React Query is better.",
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
                        text: `// Redux - all state
    const reducer = (state = initialState, action) => {
    // Handle all state changes
    };

    // React Query - server state
    const { data: user } = useQuery('user', fetchUser);

    // Modern combo - Redux for local state, React Query for server
    const theme = useSelector(s => s.theme); // Local state
    const { data: user } = useQuery('user', fetchUser); // Server state
    const { mutate: updateUser } = useMutation(updateUserApi); // Server mutations`,
                    },
                    {
                        type: 'highlight',
                        text: 'Redux for app state, React Query for API data - each has its purpose.',
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
                        text: `In Archer Review, Redux for form state, React Query for user data would've been cleaner.`,
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
                            'Redux manages application state.',
                            'React Query manages server state from APIs.',
                            'They serve different purposes.',
                            'Modern apps use both.',
                            'React Query handles caching, refetching, mutations for API data.',
                            'Redux handles business logic and local state.',
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
                        items: ['Redux', 'React Query', 'server state', 'client state', 'API management'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-34',
        topicId: 'react',
        title: 'What problems does React Query solve?',
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
                            'React Query solves:',
                            'API caching - avoid fetching same data multiple times.',
                            'Background refetching - keep data fresh.',
                            'Request deduplication - one request for multiple components.',
                            'Error handling - consistent error handling.',
                            'Loading states - built-in loading/error states.',
                            'Pagination - easy pagination.',
                            'Optimistic updates - update UI before server responds.',
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
                            'React Query solves server state complexity:',
                            '**Caching with smart invalidation** - avoid unnecessary API calls.',
                            '**Background refetching** - keep data fresh without user interaction.',
                            '**Deduplication** - multiple components requesting same data trigger one request.',
                            '**Pagination/infinite scroll** - built-in pagination helpers.',
                            '**Mutations with optimistic updates** - update UI immediately, rollback if error.',
                            '**Request cancellation** - cancel in-flight requests on unmount.',
                            '**Focus refetching** - refetch when window regains focus.',
                            'Stale-while-revalidate pattern - show stale data while fetching fresh.',
                            '**Error boundaries integration** - error handling.',
                            '**DevTools** - visualize queries and mutations.',
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
                        text: `// React Query solution
    const { data: user, isLoading, error } = useQuery('user', fetchUser);

    const { mutate: updateUser } = useMutation(updateUserApi, {
    onSuccess: () => queryClient.invalidateQueries('user'),
    onError: (error) => showError(error)
    });

    // Optimistic update
    const { mutate } = useMutation(updateApi, {
    onMutate: async (newData) => {
    await queryClient.cancelQueries('item');
    const oldData = queryClient.getQueryData('item');
    queryClient.setQueryData('item', newData);
    return { oldData };
    },
    onError: (err, newData, { oldData }) => {
    queryClient.setQueryData('item', oldData);
    }
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'React Query handles caching, refetching, mutations, and error handling automatically.',
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
                        text: `In Archer Review, React Query would've automated API calls, caching, and error handling.`,
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
                            'React Query handles server state complexity automatically.',
                            'It caches data to avoid duplicate requests, refetches in background, handles mutations with optimistic updates, provides DevTools for debugging.',
                            "Solves many problems you'd solve manually with Redux.",
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
                        items: ['React Query', 'caching', 'deduplication', 'mutations', 'optimistic updates'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-35',
        topicId: 'react',
        title: 'How would you prevent unnecessary re-renders?',
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
                            'Prevent re-renders with:',
                            'React.memo for prop comparison.',
                            'useMemo for expensive computations.',
                            'useCallback for stable functions.',
                            'Memoize derived state.',
                            'Split state into smaller pieces.',
                            'Use state management for shared state instead of prop drilling.',
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
                            '**Prevention strategies:**',
                            'Memoization (React.memo, useMemo, useCallback) - but profile first.',
                            '**State structure** - split into smaller pieces, only update what changes.',
                            "**Composition** - move state down to where it's used.",
                            '**Context splitting** - separate Context for different concerns to minimize consumers.',
                            '**Virtualization** - render only visible items for large lists.',
                            '**Lazy loading** - code splitting with React.lazy.',
                            '**Production build** - development mode is slower.',
                            '**Suspense** - decouple data loading.',
                            "**Key insight:** most apps don't need optimization - don't optimize prematurely.",
                            'Profile with React DevTools Profiler first.',
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
                        text: `// Problem: unnecessary re-renders
    function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
    <>
    <Child count={count} name={name} /> {/* Re-renders on count OR name change */}
    </>
    );
    }

    // Solution 1: Split state
    function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
    <>
    <CountChild count={count} />
    <NameChild name={name} />
    </>
    );
    }

    // Solution 2: Memoization
    const Child = React.memo(({ count, name }) => {
    return <div>{count} {name}</div>;
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'Split state to prevent child re-renders, or use React.memo to skip re-renders.',
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
                        text: `In Archer Review, splitting form state prevented entire form from updating on single field change.`,
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
                            'Prevent unnecessary re-renders by splitting state into smaller pieces, using React.memo for prop comparison, memoizing expensive computations with useMemo, and stabilizing functions with useCallback.',
                            'Profile first to identify actual bottlenecks.',
                            "Most apps don't need heavy optimization.",
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
                        items: ['prevent re-renders', 'React.memo', 'useMemo', 'state splitting', 'profiling'],
                    },
                ],
            },
        ],
    }),
];
