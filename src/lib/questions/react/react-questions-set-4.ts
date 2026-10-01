import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 're-16',
        topicId: 'react',
        title: 'What problems can occur with useEffect?',
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
                            'Common problems:',
                            'Missing dependencies - effect uses old values.',
                            'Infinite loops - effect updates dependency causing effect to run again.',
                            'Memory leaks - cleanup function not removing subscriptions.',
                            'Race conditions - async requests finish out of order.',
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
                            'useEffect pitfalls:',
                            '**Stale Closures** - missing dependencies cause effect to use old values from initial render.',
                            "**Infinite Loops** - updating state in effect that's in dependency array.",
                            '**Memory Leaks** - subscriptions not cleaned up, timers not cleared.',
                            '**Race Conditions** - async operations complete out of order.',
                            '**Missing Cleanup** - event listeners, subscriptions remain after unmount.',
                            '**Expensive Operations** - DOM mutations, computations running too frequently.',
                            '**Dependencies Too Broad** - including unnecessary dependencies causes excessive re-runs.',
                            '**Object/Array Dependencies** - new object/array every render, even if content same, causes effect to run.',
                            '**Solutions:** ESLint plugin catches most issues, use dependency array correctly, memoize callbacks with useCallback, extract constants outside component, use AbortController for async cleanup.',
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
                        text: `// Problem 1: Missing dependencies
    function Component({ userId }) {
    useEffect(() => {
    console.log(userId); // Always logs initial userId
    }, []); // userId not in deps - STALE!
    }

    // Problem 2: Infinite loop
    function Component() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    setCount(count + 1); // Updates count
    }, [count]); // count is dependency
    // Effect runs -> count changes -> effect runs again -> infinite!
    }

    // Problem 3: Memory leak
    function Component() {
    useEffect(() => {
    const handler = () => console.log('clicked');
    window.addEventListener('click', handler);
    // Forgot cleanup - listener never removed!
    }, []);
    }

    // Solution: cleanup function
    useEffect(() => {
    const handler = () => console.log('clicked');
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
    }, []);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Missing deps = stale values. Updating dependencies in effect = infinite loop. Forgot cleanup = memory leak.',
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
                        text: `In Archer Review, early code had memory leaks from unsubscribed listeners. Later we added cleanup functions to all effects.`,
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
                            'Common useEffect problems: missing dependencies cause stale closures, infinite loops from updating state in dependency array, memory leaks from forgotten cleanup functions, race conditions from async operations.',
                            'Use the ESLint plugin to catch most issues.',
                            'Always return cleanup functions to remove subscriptions and listeners.',
                            'Include all external values in dependencies.',
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
                        items: ['stale closure', 'infinite loop', 'memory leak', 'race condition', 'cleanup'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-17',
        topicId: 'react',
        title: 'useEffect vs useLayoutEffect.',
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
                            'useEffect runs after React updates the DOM (asynchronous). useLayoutEffect runs after React updates the DOM but before browser paints (synchronous). useEffect is usually what you want. useLayoutEffect is for DOM measurements or when you need to update DOM before paint.',
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
                            '**Timing difference:** useEffect - runs after render, after browser has painted.',
                            'Non-blocking. useLayoutEffect - runs after render but before browser paints.',
                            'Blocks paint.',
                            '**Phase order:** render -> layout -> paint. useLayoutEffect runs during layout phase, useEffect runs after paint.',
                            '**Performance:** useLayoutEffect blocks paint, use sparingly. useEffect is better for most cases.',
                            '**Use useLayoutEffect for:**',
                            'DOM measurements (getBoundingClientRect).',
                            'Setting focus.',
                            'Animations that need to start before paint.',
                            'Synchronous state updates from DOM.',
                            '**Common mistake:** using useLayoutEffect for data fetching (unnecessary blocking). useLayoutEffect and useEffect deps work the same way.',
                            'Cleanup functions work the same.',
                            '**Generally:** useEffect first, only switch to useLayoutEffect if you see flickering or need pre-paint updates.',
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
                        text: `// useEffect - after paint
    useEffect(() => {
    document.title = 'New Title';
    }, []);

    // useLayoutEffect - before paint
    useLayoutEffect(() => {
    const rect = element.getBoundingClientRect();
    setPosition(rect.top); // Synchronous update before paint
    }, []);

    // Animation example
    useLayoutEffect(() => {
    // Update position before browser paints
    element.style.transform = 'translate(0, 0)';

    // Start animation
    requestAnimationFrame(() => {
    element.style.transition = 'transform 1s';
    element.style.transform = 'translate(100px, 100px)';
    });
    }, []);`,
                    },
                    {
                        type: 'highlight',
                        text: 'useEffect after paint = no flickering but delayed. useLayoutEffect before paint = blocks but smooth.',
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
                        text: `In Archer Review, form positions used useLayoutEffect to measure after DOM updates but before paint.`,
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
                            'useEffect runs after React updates and after the browser paints - non-blocking. useLayoutEffect runs after React updates but before the browser paints - blocks painting.',
                            'Use useEffect for most cases like data fetching.',
                            'Use useLayoutEffect only when you need DOM measurements or updates that must happen before paint. useLayoutEffect blocks the browser, so use sparingly.',
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
                        items: ['useEffect', 'useLayoutEffect', 'timing', 'paint', 'blocking'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-18',
        topicId: 'react',
        title: 'What is useRef used for?',
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
                            'useRef creates a reference that persists across re-renders.',
                            'It returns an object with a .current property.',
                            "Unlike state, updating a ref doesn't trigger re-render. useRef is useful for accessing DOM elements directly, storing timers/intervals, or keeping mutable values.",
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
                            'useRef(initialValue) returns mutable reference that persists across renders.',
                            "**Key characteristics:** updates don't trigger re-render, value persists across renders, same object returned every render.",
                            '**Use cases:**',
                            'Accessing DOM elements directly (focus, selections).',
                            'Storing timers/intervals for cleanup.',
                            'Keeping previous values.',
                            'Storing instance values.',
                            'Integrating with non-React libraries.',
                            "**Difference from state:** state triggers re-render, ref doesn't. state is displayed, ref is internal.",
                            "**Don't overuse** - refs break declarative nature of React.",
                            "**Rule:** use state for values that affect rendering, useRef for values that don't.",
                            '**Common pattern:** useRef for storing previous value or mutable config.',
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
                        text: `// Access DOM element
    function TextInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
    inputRef.current.focus();
    };

    return (
    <>
    <input ref={inputRef} />
    <button onClick={focusInput}>Focus</button>
    </>
    );
    }

    // Store mutable value
    function Timer() {
    const intervalRef = useRef(null);

    const startTimer = () => {
    intervalRef.current = setInterval(() => {
    // Do something
    }, 1000);
    };

    const stopTimer = () => {
    clearInterval(intervalRef.current);
    };

    return (
    <>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: "useRef stores reference to DOM element. Updating ref doesn't trigger re-render.",
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
                        text: `In Archer Review, useRef stored video player elements for play/pause control.`,
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
                            'useRef returns a reference that persists across renders.',
                            "Unlike state, updating a ref doesn't trigger re-render.",
                            'Use useRef for accessing DOM elements directly, storing timers for cleanup, or keeping mutable values.',
                            "Don't overuse - use state for values that affect rendering. useRef is for side effects and integrations, not for displayable data.",
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
                        items: ['useRef', 'persistent', 'no re-render', 'DOM access', 'mutable value'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-19',
        topicId: 'react',
        title: 'useMemo vs useCallback.',
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
                            'useMemo memoizes a value. useCallback memoizes a function.',
                            'Both prevent unnecessary computations/creations on every render.',
                            'Use them when computation is expensive or function is a dependency.',
                            "Don't overuse - they have overhead.",
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
                            '**useMemo(computeFn, deps)** - memoizes computed value, returns same value if deps unchanged. useCallback(function, deps) - memoizes function, returns same function if deps unchanged.',
                            'Both prevent recreations and recalculations.',
                            '**When to use:** expensive computations that happen on every render, functions passed as props or dependencies, objects/arrays as dependencies.',
                            '**When NOT to use:** simple computations, minor performance issues, when deps change frequently.',
                            '**Overhead:** memoization itself has cost (memory, comparison).',
                            'Use only when actual performance issue.',
                            '**Common mistake:** memoizing everything (cargo cult programming).',
                            'Profile first. useCallback example: pass stable function reference to useCallback or React.memo child. useMemo example: expensive list filtering or sorting.',
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
                        text: `// useMemo - memoize computed value
    function Component({ items }) {
    const expensiveList = useMemo(() => {
    return items.filter(item => item.active).sort((a, b) => a.name.localeCompare(b.name));
    }, [items]); // Recompute only if items changes

    return <List items={expensiveList} />;
    }

    // useCallback - memoize function
    function Parent() {
    const handleClick = useCallback(() => {
    console.log('clicked');
    }, []); // Function reference never changes

    return <Child onClick={handleClick} />;
    }

    // Reason: prevent child re-render if it's wrapped with React.memo
    const Child = React.memo(({ onClick }) => (
    <button onClick={onClick}>Click</button>
    ));`,
                    },
                    {
                        type: 'highlight',
                        text: 'useMemo caches computed values. useCallback caches function references.',
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
                        text: `In Archer Review, useMemo filtered large form field lists. useCallback created stable handlers for memoized child components.`,
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
                            'useMemo memoizes computed values, useCallback memoizes functions.',
                            'Both prevent recreations on every render.',
                            'Use when computation is expensive or when passing dependencies to memoized children.',
                            "Don't overuse - profiling first.",
                            'They have overhead. useCallback is often used with React.memo to prevent child re-renders.',
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
                        items: ['useMemo', 'useCallback', 'memoization', 'dependencies', 'performance'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-20',
        topicId: 'react',
        title: 'What is React.memo()?',
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
                            "React.memo wraps a component and prevents re-renders if props haven't changed.",
                            'It compares props with Object.is().',
                            "If props are the same, the component doesn't re-render.",
                            'Use for components that receive many props or have expensive renders.',
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
                            'React.memo(Component, customComparison) - shallow compares props.',
                            'If props same, skip re-render.',
                            'Optional second argument customComparison(prevProps, nextProps) for custom comparison logic.',
                            '**Benefits:** prevent child re-renders when parent re-renders.',
                            '**Downsides:** memory cost, comparison overhead, only prevents re-render not execution.',
                            '**Often paired with useCallback for functions** - if function is new every render, props change and child re-renders anyway.',
                            '**Common mistake:** using React.memo without memoizing dependencies.',
                            'If all props are new, React.memo does nothing.',
                            'Props must be stable (primitives, memoized functions, objects with stable references).',
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
                        text: `// Basic React.memo
    const UserCard = React.memo(({ user, onDelete }) => (
    <div>
    <h2>{user.name}</h2>
    <button onClick={onDelete}>Delete</button>
    </div>
    ));

    // With custom comparison
    const CustomCard = React.memo(
    ({ user, index }) => <div>{user.name}</div>,
    (prevProps, nextProps) => {
    // Return true to SKIP re-render, false to re-render
    return prevProps.user.id === nextProps.user.id;
    }
    );

    // Without memoizing callback - React.memo ineffective
    function Parent() {
    const handleDelete = () => {}; // New function every render
    return <UserCard user={user} onDelete={handleDelete} />; // Props change, re-renders anyway
    }

    // With memoizing callback
    function Parent() {
    const handleDelete = useCallback(() => {}, []); // Stable function
    return <UserCard user={user} onDelete={handleDelete} />; // Props stable, skips re-render
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'React.memo prevents re-render if props unchanged. Pair with useCallback for stable props.',
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
                        text: `In Archer Review, list item components were memoized. Parent re-renders, but items only update if their props changed.`,
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
                            "React.memo prevents child re-renders if props haven't changed.",
                            'Use when children have expensive renders or parents re-render frequently.',
                            'Pair with useCallback to keep function props stable.',
                            'Without memoized dependencies, React.memo is ineffective.',
                            'Remember it only prevents re-render if props are truly unchanged.',
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
                        items: ['React.memo', 'shallow comparison', 'props', 're-render prevention', 'useCallback'],
                    },
                ],
            },
        ],
    }),
];
