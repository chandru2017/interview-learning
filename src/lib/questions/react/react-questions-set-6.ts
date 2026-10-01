import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet6: IQuestion[] = [
    createQuestion({
        id: 're-26',
        topicId: 'react',
        title: 'What is Suspense?',
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
                            'Suspense lets you handle loading states while data is being fetched.',
                            'Wrap async components in Suspense with a fallback.',
                            'While loading, show the fallback.',
                            'When data arrives, show the component.',
                            'Makes handling async cleaner than useEffect.',
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
                            "Suspense boundary catches 'suspend' events (unresolved promises from data fetching).",
                            'Shows fallback until promise resolves, then shows component.',
                            "Requires data fetching libraries that throw promises (React Query, SWR, Relay) - native fetch doesn't work.",
                            '**Benefits:** declarative async handling, code splitting, streaming SSR.',
                            '**Limitations:** currently only data fetching and code splitting, concurrent features needed.',
                            '**How it works:** component throws promise while loading, Suspense catches it, shows fallback, when resolved, retries component.',
                            'Can nest multiple Suspense boundaries.',
                            'Error Boundaries handle promise rejections.',
                            '**Streaming SSR benefits** - send HTML incrementally, hydrate progressively.',
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
                        text: `// Using Suspense with React Query
    function Posts() {
    const { data: posts } = useQuery('posts', fetchPosts);
    return posts.map(post => <Post key={post.id} {...post} />);
    }

    export default function App() {
    return (
    <Suspense fallback={<div>Loading posts...</div>}>
    <Posts />
    </Suspense>
    );
    }

    // Multiple Suspense for different sections
    function Dashboard() {
    return (
    <>
    <Suspense fallback={<div>Loading user...</div>}>
        <UserProfile />
    </Suspense>
    <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
    </Suspense>
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Suspense shows fallback while data loads. Works with libraries that throw promises.',
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
                        text: `In Archer Review, we could use Suspense with React Query for cleaner async handling.`,
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
                            'Suspense handles async data loading with a fallback.',
                            'Requires data fetching libraries that throw promises like React Query.',
                            'Shows fallback while loading, then component when ready.',
                            'Cleaner than useEffect for many cases.',
                            'Can nest Suspense boundaries for different loading states.',
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
                        items: ['Suspense', 'fallback', 'loading', 'promises', 'React Query'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-27',
        topicId: 'react',
        title: 'What are Error Boundaries?',
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
                            'Error Boundaries catch errors in child components during rendering.',
                            'If a child throws error, Error Boundary catches it and shows a fallback UI instead of crashing the app.',
                            'Only work with errors during render, not in event handlers or async code.',
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
                            'Error Boundaries are class components with getDerivedStateFromError and componentDidCatch.',
                            'Catch errors during render and lifecycle only.',
                            "**Limitations:** don't catch event handler errors (use try/catch), don't catch async errors (use try/catch in async), don't catch SSR errors, don't catch errors in Error Boundary itself.",
                            '**Best practices:** granular boundaries (catch errors per section), log errors for debugging, show user-friendly messages.',
                            "**Hooks don't have Error Boundary yet** - must use class components or third-party solutions.",
                            '**Functional component approach:** wrapper library or useErrorHandler hook from react-error-boundary.',
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
                        text: `// Class-based Error Boundary
    class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
    return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error);
    }

    render() {
    if (this.state.hasError) {
    return <h1>Something went wrong</h1>;
    }
    return this.props.children;
    }
    }

    // Using Error Boundary
    <ErrorBoundary>
    <ComponentThatMightError />
    </ErrorBoundary>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Error Boundary catches render errors and shows fallback UI.',
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
                        text: `In Archer Review, Error Boundaries wrapped major sections. One form error didn't crash the entire app.`,
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
                            'Error Boundaries catch errors during rendering in child components.',
                            "They're class components with getDerivedStateFromError and componentDidCatch.",
                            'Show a fallback UI instead of crashing.',
                            "They don't catch event handler errors or async errors - use try/catch for those.",
                            'Place Error Boundaries strategically to isolate failures.',
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
                            'Error Boundary',
                            'getDerivedStateFromError',
                            'componentDidCatch',
                            'fallback',
                            'rendering',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-28',
        topicId: 'react',
        title: 'What are custom hooks?',
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
                            'Custom hooks are JavaScript functions that use other Hooks.',
                            'They let you share stateful logic between components.',
                            'A custom hook is just a function that calls built-in Hooks.',
                            'They follow the Rules of Hooks.',
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
                            'Custom hooks extract and share stateful logic.',
                            "Must start with 'use' convention.",
                            'Must follow Rules of Hooks.',
                            'Can call other Hooks.',
                            'Return extracted state and functions.',
                            '**Benefits:** reduce code duplication, organize complex logic, easier to test and reuse.',
                            '**Naming convention:** useXxx (useForm, useAsync, useFetch, etc.).',
                            'Completely different from class component inheritance - Hooks composition is more flexible.',
                            'Can compose custom hooks (hook that uses other custom hooks).',
                            'Hooks library (react-use, ahooks) provides many ready-made hooks.',
                            '**Common patterns:** useAsync for data fetching, useForm for form handling, useWindowSize for responsive design.',
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
                        text: `// Custom hook - useAsync
    function useAsync(asyncFunction, immediate = true) {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const execute = useCallback(async () => {
    setStatus('pending');
    try {
    const response = await asyncFunction();
    setValue(response);
    setStatus('success');
    } catch (error) {
    setError(error);
    setStatus('error');
    }
    }, [asyncFunction]);

    useEffect(() => {
    if (immediate) {
    execute();
    }
    }, [execute, immediate]);

    return { execute, status, value, error };
    }

    // Using custom hook
    function UserComponent({ userId }) {
    const { value: user, status } = useAsync(() => fetchUser(userId), true);

    if (status === 'pending') return <div>Loading...</div>;
    if (status === 'error') return <div>Error</div>;
    return <div>{user.name}</div>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Custom hook combines useState and useEffect to create reusable logic.',
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
                        text: `In Archer Review, custom hooks handled form state, API calls, and complex logic.`,
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
                            'Custom hooks are functions that use other Hooks.',
                            'They let you share stateful logic between components.',
                            "Must follow Rules of Hooks and use 'use' prefix.",
                            'Can call other Hooks and combine them.',
                            'Custom hooks make code more organized and reusable than prop drilling or render props.',
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
                        items: ['custom hooks', 'stateful logic', 'reusable', 'use prefix', 'composition'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-29',
        topicId: 'react',
        title: 'What are Higher-Order Components?',
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
                            'A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional features.',
                            'HOCs are used to share logic between components.',
                            'Example: withRouter adds routing features to a component.',
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
                            '**HOC is advanced pattern:** Component -> function -> Enhanced Component.',
                            'Adds features like props, state logic, or lifecycle.',
                            '**Common uses:** authentication (withAuth), styling (withTheme), analytics (withTracking).',
                            '**Drawbacks:** prop drilling (pass props through layers), naming conflicts, static methods lost, hard to trace data flow.',
                            '**Modern alternatives:** Hooks (simpler, more flexible), Render Props (more explicit), Composition (simpler).',
                            '**When to use HOCs:** integrating with legacy code, complex prop transformations, sharing multiple features.',
                            '**Display name for debugging:** Component.displayName = `Wrapper(${Component.displayName})`.',
                            '**Ref forwarding:** HOC might not forward refs properly.',
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
                        text: `// HOC example - withAuth
    function withAuth(Component) {
    return function AuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
    checkAuth().then(setIsAuthenticated);
    }, []);

    if (!isAuthenticated) {
    return <Login />;
    }

    return <Component {...props} />;
    };
    }

    // Using HOC
    const Dashboard = withAuth(function Dashboard() {
    return <div>Welcome to dashboard</div>;
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'HOC wraps component and returns enhanced version with auth check.',
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
                        text: `In Archer Review, we'd use Hooks instead of HOCs for better code organization.`,
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
                            'HOCs are functions that take a component and return a new component with added features.',
                            'Common for authentication, theming, or other cross-cutting concerns.',
                            "Modern Hooks are preferred over HOCs - they're simpler and more flexible.",
                            'Downsides: prop drilling, ref forwarding issues, performance overhead.',
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
                        items: ['HOC', 'Higher-Order Component', 'wrapper', 'enhanced', 'props'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-30',
        topicId: 'react',
        title: 'What are Render Props?',
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
                            'Render Props is a pattern where a component receives a function as a prop that returns JSX.',
                            'The component calls this function to render its children.',
                            'Useful for sharing logic between components without creating wrapper components.',
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
                            "**Render Props pattern:** component takes a 'render' prop (function), calls it with shared state/logic.",
                            'Function returns JSX.',
                            '**Benefits:** explicit data flow, easier to trace than HOCs, compose multiple providers.',
                            '**Downsides:** callback hell with multiple levels, performance issues (function created every render).',
                            '**Modern alternatives:** Hooks (simpler), composition.',
                            '**Example:** component that provides mouse position to children via function prop. vs HOC: Render Props is more explicit about data flow but requires callback functions.',
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
                        text: `// Render Props example
    function Mouse({ children }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return children(position);
    }

    // Using Render Props
    <Mouse>
    {(position) => (
    <div>
    Mouse position: {position.x}, {position.y}
    </div>
    )}
    </Mouse>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Component receives function prop that gets state as argument and returns JSX.',
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
                        text: `In Archer Review, we'd use Hooks instead for simpler code.`,
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
                            'Render Props is a pattern where a component receives a function prop that returns JSX.',
                            'The component provides shared logic/state to this function.',
                            'Explicit data flow makes it easy to understand.',
                            'Modern Hooks are often preferred for simplicity.',
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
                        items: ['Render Props', 'function prop', 'shared logic', 'children as function', 'data flow'],
                    },
                ],
            },
        ],
    }),
];
