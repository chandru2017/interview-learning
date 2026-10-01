import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 're-21',
        topicId: 'react',
        title: 'When should you NOT use useMemo?',
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
                            "Don't use useMemo for:",
                            'Simple computations (object lookups, array length).',
                            'When dependencies change frequently (defeats purpose).',
                            'Primitives that are cheap (numbers, strings).',
                            "When optimization isn't actually needed.",
                            'Profiling first prevents premature optimization.',
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
                            "useMemo shouldn't be used for:",
                            '**Primitive values (strings, numbers)** - too cheap to memoize.',
                            'Simple operations (math, array.length, object.key) - memoization overhead > computation cost.',
                            '**When deps change frequently** - if every render has dep changes, you memoize every render anyway.',
                            '**Complex dependency arrays** - if deps array changes frequently, defeats purpose.',
                            '**Readable code** - premature optimization harms maintainability.',
                            '**Without profiling** - profile first to confirm actual bottleneck.',
                            '**Guidance:** use useMemo only when you have profiling evidence of performance issue.',
                            '**Rule of thumb:** expensive algorithms, complex data transformations, heavy computations.',
                            '**Alternatives:** move computation outside component (memoize at module level), restructure to avoid re-renders altogether.',
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
                        text: `// DON'T use useMemo for this
    const doubled = useMemo(() => count * 2, [count]); // Too cheap!

    // DON'T use useMemo for this
    const length = useMemo(() => items.length, [items]); // Property access is free

    // DO use useMemo for this
    const sorted = useMemo(() => {
    return expensiveSort(items); // O(n log n) operation
    }, [items]);

    // Better: move outside component if possible
    const expensiveComputation = memoize((input) => {
    // Heavy computation
    });

    function Component({ data }) {
    const result = expensiveComputation(data); // Memoized at module level
    }`,
                    },
                    {
                        type: 'highlight',
                        text: "Don't memoize cheap operations. Only memoize expensive computations.",
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
                        text: `In Archer Review, early code over-used useMemo. We removed unnecessary memoization and kept only expensive calculations.`,
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
                            "Don't use useMemo for simple computations, primitives, or when you don't have profiling evidence.",
                            "Memoization itself has overhead - it's only worth it for expensive computations.",
                            'Common mistake: premature optimization without profiling.',
                            'Use useMemo when profiling shows a real bottleneck from expensive calculations.',
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
                            'when NOT to use',
                            'overhead',
                            'profiling',
                            'premature optimization',
                            'simple operations',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-22',
        topicId: 'react',
        title: 'When should you NOT use useCallback?',
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
                            "Don't use useCallback for:",
                            'Simple functions.',
                            'Functions not passed as props.',
                            'When dependencies change frequently.',
                            'When used with React.memo but memoized children are rare.',
                            "Overhead often isn't worth it for simple callbacks.",
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
                            "useCallback shouldn't be used for:",
                            'Simple functions (single operation, few lines) - memoization overhead > benefit.',
                            '**Functions not passed as props/dependencies** - no reason to memoize.',
                            '**When deps change often** - memoizing every render defeats purpose.',
                            'Without React.memo on children - if child always re-renders anyway, useCallback wasted.',
                            '**Event handlers not passed to children** - just define inline.',
                            'Without profiling evidence.',
                            '**Correct uses:** pass to memoized children, use as dependencies in other Hooks, pass to external libraries.',
                            "**Alternatives:** define functions inside render (they're cheap), use inline handlers.",
                            '**General rule:** memoize callbacks passed to React.memo children.',
                            'Otherwise skip it.',
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
                        text: `// DON'T use useCallback for this
    const increment = useCallback(() => setCount(c => c + 1), []);
    return <button onClick={increment}>+</button>; // Not memoized child, no dependencies

    // DON'T use useCallback for this (function not passed to children)
    const logError = useCallback((error) => console.error(error), []);
    // Just use: const logError = (error) => console.error(error);

    // DO use useCallback for this (passed to memoized child)
    const handleDelete = useCallback((id) => {
    deleteItem(id);
    }, []);
    return <MemoizedList onDelete={handleDelete} />;

    // Better: let it be unstable if not causing issues
    const handleDelete = (id) => deleteItem(id);
    return <MemoizedList onDelete={handleDelete} />;`,
                    },
                    {
                        type: 'highlight',
                        text: "Only use useCallback if function is passed to memoized children. Otherwise it's overhead.",
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
                        text: `In Archer Review, we initially over-used useCallback. We removed it from handlers not passed to memoized children.`,
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
                            "Don't use useCallback for simple functions or functions not passed to memoized children. useCallback is useful when passing callbacks to React.memo components - it keeps props stable.",
                            'Without memoized children, useCallback adds overhead without benefit.',
                            'Profile first to identify actual bottlenecks.',
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
                        items: ['when NOT to use', 'overhead', 'memoized children', 'React.memo', 'profiling'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-23',
        topicId: 'react',
        title: 'Explain React rendering lifecycle.',
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
                            'React rendering happens in two phases: Render phase - React calculates changes (fast, can be paused).',
                            'Commit phase - React applies changes to DOM (quick, synchronous).',
                            'Lifecycle: old props/state -> render -> reconciliation -> DOM update -> browser paint.',
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
                            '**React rendering phases:**',
                            '**Render Phase** - React calls components, computes Virtual DOM, reconciliation.',
                            'Can be paused/cancelled.',
                            'Multiple times (Fiber).',
                            'Pre-commit Phase - componentWillReceiveProps deprecated.',
                            '**Commit Phase** - Apply DOM changes, run side effects.',
                            'Cannot pause.',
                            '**Layout Phase** - useLayoutEffect runs.',
                            '**Paint Phase** - Browser paints screen.',
                            '**Passive Effects Phase** - useEffect runs.',
                            '**Class component lifecycle:** constructor -> render -> componentDidMount.',
                            '**Updated:** shouldComponentUpdate (or React.memo) -> render -> componentDidUpdate.',
                            '**Hooks equivalents:** useState for state, useEffect for lifecycle, useLayoutEffect for pre-paint updates.',
                            '**Modern:** Concurrent rendering allows pausing render phase.',
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
                        text: `// Class component lifecycle
    class Component extends React.Component {
    constructor(props) {
    super(props);
    }

    componentDidMount() {
    // After DOM updates, component visible
    }

    componentDidUpdate(prevProps, prevState) {
    // After DOM updates from state/props change
    }

    componentWillUnmount() {
    // Before component removed
    }
    }

    // Hooks equivalent
    function Component() {
    useEffect(() => {
    // Runs after mount
    return () => {
    // Runs before unmount
    };
    }, []);

    useEffect(() => {
    // Runs after update if dep changed
    }, [dep]);
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Class components have lifecycle methods. Hooks use useEffect for the same purposes.',
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
                        text: `In Archer Review, we used hooks instead of class components. useEffect handled data fetching and cleanup.`,
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
                            'React rendering has two main phases.',
                            'Render phase calculates what changed - can be paused with Fiber.',
                            'Commit phase applies changes to DOM - synchronous. useEffect runs after the commit. useLayoutEffect runs after commit but before paint.',
                            'Understanding lifecycle helps you know when to run code.',
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
                        items: ['render phase', 'commit phase', 'lifecycle', 'useEffect', 'Fiber'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-24',
        topicId: 'react',
        title: 'What is batching in React?',
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
                            'Batching groups multiple state updates into one re-render.',
                            'Instead of each setState triggering a re-render, React waits and updates all at once.',
                            'This makes apps faster.',
                            'React 18 batches all updates by default, including setTimeout and Promises.',
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
                            'Batching combines multiple state updates into one render.',
                            'React groups updates within event handlers and automatically flushes before browser paint.',
                            'React 17 and earlier only batched in event handlers.',
                            'React 18 batches all updates automatically (setTimeout, Promises, setInterval).',
                            '**Benefits:** fewer re-renders, better performance.',
                            '**How it works:** updates are queued, React waits for synchronous code to finish, then batch processes all updates, triggers one re-render. opt-out with flushSync if needed (rarely).',
                            '**Prevents intermediate states from rendering** - more efficient.',
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
                        text: `// React 17 - only batches in event handlers
    function handleClick() {
    setCount(c => c + 1); // Queued
    setName('Alice');     // Queued
    // One re-render happens here
    }

    // setTimeout NOT batched in React 17
    setTimeout(() => {
    setCount(c => c + 1); // Immediate re-render
    setName('Alice');     // Another re-render
    }, 0);

    // React 18 - batches all
    function handleClick() {
    setCount(c => c + 1); // Queued
    setName('Alice');     // Queued
    }

    setTimeout(() => {
    setCount(c => c + 1); // Queued
    setName('Alice');     // Queued
    // One re-render happens here
    }, 0);

    // Opt out if needed
    import { flushSync } from 'react-dom';
    flushSync(() => setCount(c => c + 1)); // Immediate re-render`,
                    },
                    {
                        type: 'highlight',
                        text: 'React 18 batches updates even in setTimeout. Multiple setState calls trigger one re-render.',
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
                        text: `In Archer Review, React 18 batching made form updates faster. Multiple field validations didn't trigger multiple re-renders.`,
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
                            'Batching groups multiple state updates into one re-render.',
                            'React 18 batches all updates automatically including setTimeout and Promises.',
                            'React 17 only batched in event handlers.',
                            'Batching improves performance by reducing re-renders.',
                            'You rarely need to opt out with flushSync.',
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
                        items: ['batching', 'multiple updates', 'one re-render', 'automatic', 'React 18'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-25',
        topicId: 'react',
        title: 'What is concurrent rendering?',
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
                            'Concurrent rendering lets React pause rendering to handle urgent work like user input.',
                            'Instead of blocking everything, React can stop mid-render, handle input, then resume.',
                            'This makes apps feel responsive even with heavy computations.',
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
                            'Concurrent rendering (enabled by Fiber) allows React to pause rendering work and resume later.',
                            '**Benefits:** input stays responsive even during heavy renders, animations smooth, can prioritize urgent updates over background updates.',
                            '**Features using it:** Suspense, startTransition, useTransition, useDeferredValue.',
                            '**Enables features like:** splitting big renders across frames, deferring non-urgent updates, canceling renders if result becomes invalid.',
                            '**How it works:** Fiber breaks render into work units, can pause between units, prioritizes high-priority updates (input), defers low-priority updates (data fetching results).',
                            '**Trade-off:** more complex, potential edge cases, not always needed for most apps.',
                            'Opt-in with features like useTransition.',
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
                        text: `// Concurrent features with useTransition
    function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value); // Urgent - immediate

    startTransition(() => {
    // Low priority - deferred
    const newResults = expensiveSearch(value);
    setResults(newResults);
    });
    };

    return (
    <>
    <input onChange={handleSearch} />
    {isPending && <Spinner />}
    <Results results={results} />
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'useTransition marks updates as non-urgent. Input stays responsive during expensive computations.',
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
                        text: `In Archer Review, search field with large dataset could freeze. Using startTransition kept input responsive.`,
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
                            'Concurrent rendering lets React pause and resume render work.',
                            'This keeps input responsive during heavy computations. useTransition marks updates as non-urgent. useDeferredValue defers value updates.',
                            'This is foundation for Suspense.',
                            "Most apps don't need concurrent features, but they're available for performance-critical UI.",
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
                        items: ['concurrent rendering', 'useTransition', 'useDeferredValue', 'responsive', 'priority'],
                    },
                ],
            },
        ],
    }),
];
