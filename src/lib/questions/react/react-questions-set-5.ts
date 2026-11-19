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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Simple calculation kku `useMemo` use panna vendam.',
                            'String, number, or array length madhiri cheap work kku memoization thevai illa.',
                            'Dependency ovvoru render layum change aana benefit illa.',
                            'Actual slow calculation irukku nu profile use panni confirm pannina thaan `useMemo` use pannuvom.',
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
                        text: '**Do not memoize cheap work**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`count * 2` or `items.length` like work fast-a mudiyum.',
                            'Adhukku `useMemo` use panna overhead mattum adhigam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Use it for expensive work**',
                    },
                    {
                        type: 'code',
                        text: `const sortedUsers = useMemo(
  () => users.sort(compareUsers),
  [users]
);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Sorting or filtering heavy data expensive irukkalam.',
                            '`users` change aana mattum calculation thirumba nadakkum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**General rule**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First profile pannuvom.',
                            'Real bottleneck irundha mattum optimize pannuvom.',
                            'Every value kku `useMemo` podradhu maintain panna kashtam.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Simple button handler kku `useCallback` thevai illa.',
                            'Function memoized child kku prop-a pass aagaadhu na use panna vendam.',
                            '`React.memo` child kku stable function prop venum na `useCallback` useful.',
                            'Actual performance problem illaina normal function use pannuvom.',
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
                        text: '**Normal useCallback no benefit**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Button direct-a onClick function use panna mudiyum.',
                            'Function child kku pass pannalana same function reference thevai illa.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Useful case**',
                    },
                    {
                        type: 'code',
                        text: `const handleDelete = useCallback((id) => {
  deleteItem(id);
}, []);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`MemoizedList` `handleDelete` prop receive pannum.',
                            'Stable function prop React.memo child re-render kammi panna help pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple rule**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Memoized child irundha mattum useCallback consider pannuvom.',
                            'Child props change aana every render layum useCallback benefit illa.',
                            'Profile use panni real problem confirm pannuvom.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'React rendering render and commit phases la nadakkum.',
                            'Render phase la React enna change venum nu calculate pannum.',
                            'Commit phase la React changes ah actual DOM la apply pannum.',
                            'Commit apram browser paint pannum.',
                            '`useLayoutEffect` paint munnaadi run aagum. `useEffect` paint apram run aagum.',
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
                        text: '**Render phase**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React component call panni UI enna irukkanum nu calculate pannum.',
                            'Old UI and new UI compare pannum.',
                            'This phase pausing or cancelling possible.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Commit phase**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Calculated DOM changes actual browser DOM la apply pannum.',
                            'Refs, layout effects, and cleanup work nadakkum.',
                            'Commit phase immediate-a run aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After commit**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`useLayoutEffect` browser paint aaguradhukku munnaadi run aagum.',
                            '`useEffect` browser paint aana apram run aagum.',
                            'Mount, update, and unmount work time identify panna lifecycle useful.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Batching na multiple state updates ah group panni one re-render nadathuradhu.',
                            'React 18 event, timeout, and Promise updates ellathaiyum batch pannum.',
                            'Unnecessary multiple renders kammi aagum.',
                            'Immediate DOM update venum na mattum `flushSync` use pannuvom.',
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
                        text: '**What batching means**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Oru function la two state updates irundha React avatra same group la process pannum.',
                            'Instead of two renders, final state kku one render aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Example**',
                    },
                    {
                        type: 'code',
                        text: `setCount((count) => count + 1);
setName('Alice');

// React normally renders once`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Count and name updates final state kku one UI update aagum.',
                            'React 18 Promises and timers kulla updatesum batch pannum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why batching is useful**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Re-renders kammi.',
                            'Intermediate wrong UI state screen-la visible aagala.',
                            'Normal cases la extra configuration thevai illa.',
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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Concurrent rendering heavy work nadakkumbothum React input response-ah maintain panna use pannum.',
                            'React render work ah pause panni urgent work first handle pannum.',
                            '`useTransition` low-priority update ah mark pannum.',
                            '`useDeferredValue` slow value update ah delay pannum.',
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
                        text: '**What is concurrent rendering?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'React heavy render work ah small parts-a process pannum.',
                            'Typing madhiri urgent work varumbothu low-priority work pause panna mudiyum.',
                            'Work apram resume aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**useTransition example**',
                    },
                    {
                        type: 'code',
                        text: `const [isPending, startTransition] = useTransition();

startTransition(() => {
  setResults(expensiveSearch(query));
});`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Input update urgent-a irukkum.',
                            'Search result update low-priority-a irukkum.',
                            'isPending use panni loading state show panna mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**useDeferredValue**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Heavy work use panna value update ah konjam delay pannum.',
                            'Fast typing response maintain panna useful.',
                            'Performance issue irundha mattum concurrent feature use pannuvom.',
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
