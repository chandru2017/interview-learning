import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet9: IQuestion[] = [
    createQuestion({
        id: 're-41',
        topicId: 'react',
        title: 'How would you handle global state in a large application?',
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
                            'Options:',
                            'Context API for simple state (theme, auth).',
                            'Redux/Zustand for complex state.',
                            'React Query for server state.',
                            'Feature-based state for feature-specific logic.',
                            'Mix approaches based on needs.',
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
                            '**Global state strategy:**',
                            'App-level state - theme, language, auth with Context.',
                            '**Feature state** - Redux/Zustand per feature module.',
                            '**Server state** - React Query for API data.',
                            '**Local state** - React local state for temporary UI state.',
                            '**Cache** - use React Query or Redux for client cache.',
                            '**Performance** - split Contexts by concern to avoid bulk updates.',
                            '**DevTools** - Redux DevTools for debugging, React Query DevTools.',
                            '**Architecture:** Context at top for config, Redux/Zustand for domain logic, React Query for APIs.',
                            '**Avoid single Redux store with everything** - split by feature.',
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
                        text: `// Feature-based state with Zustand
    // features/users/store.js
    import { create } from 'zustand';

    const useUserStore = create((set) => ({
    users: [],
    setUsers: (users) => set({ users }),

    addUser: (user) => set((state) => ({ users: [...state.users, user] }))
    }));

    // features/users/component.js
    function Users() {
    const users = useUserStore((state) => state.users);
    const addUser = useUserStore((state) => state.addUser);

    return <div>{users.map(u => <User key={u.id} user={u} />)}</div>;
    }

    // App-level state with Context
    const AppContext = createContext();

    function App() {
    const [theme, setTheme] = useState('light');

    return (
    <AppContext.Provider value={{ theme, setTheme }}>
    <Users />
    </AppContext.Provider>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Feature-based Zustand for domain logic, Context for app config, React Query for APIs.',
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
                        text: `In Archer Review, form state per feature, user auth in Context, API data with React Query.`,
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
                            'Use Context for simple app-level state (theme, auth).',
                            'Use Zustand or Redux for complex feature state.',
                            'Use React Query for server state.',
                            "Don't put everything in one global store - split by feature.",
                            'Monitor performance with DevTools.',
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
                            'Theme or auth madhiri simple app state kku Context use pannuvom.',
                            'Complex feature state kku Zustand or Redux use pannuvom.',
                            'API data kku React Query use pannuvom.',
                            'Oru store-la ellame podama feature base panni split pannuvom.',
                            'Local state kku local state hooks pothum.',
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
                        text: '**Use simple state locally**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Modal open, input text, or selected tab component local state-a irukkalam.',
                            'Adhu vera places share panna vendam na mattum lift pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Choose one tool by purpose**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Context: theme, language, auth.',
                            'Redux or Zustand: complex shared app logic.',
                            'React Query: API server data.',
                            'Feature store: feature-specific state.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Keep the store organized**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Feature folder la state irukkalam.',
                            'DevTools use panni state updates monitor pannuvom.',
                            'Global store large-aaguradha avoid panna split pannuvom.',
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
                        items: ['global state', 'Context', 'Redux/Zustand', 'React Query', 'feature-based'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-42',
        topicId: 'react',
        title: 'How would you handle server state vs client state?',
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
                            'Server state - data from APIs (async, can be stale).',
                            'Client state - local UI state (synchronous, always fresh).',
                            'Use different tools: React Query for server, useState for client.',
                            'Server state is shared, async, complex.',
                            'Client is local, sync, simple.',
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
                            '**Server vs Client State distinction:** Server State - from API, async, shared with other users, can be stale, needs sync/refetching, needs caching.',
                            '**Client State** - local, synchronous, immediate updates, not shared, never stale, no caching needed.',
                            '**Problem before React Query:** treating server state like client state.',
                            'Using Redux for API data causes issues (manual caching, manual sync).',
                            '**Solution:** React Query handles server state (caching, background refetching, stale-while-revalidate), Redux/Zustand for client state.',
                            '**Pattern:** useQuery for fetching, useMutation for updates, QueryClient for cache management.',
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
                        text: `// Server state with React Query
    function UserProfile({ userId }) {
    // Server state - data from API
    const { data: user, isLoading } = useQuery(
    ['user', userId],
    () => fetchUser(userId),
    { staleTime: 5 * 60 * 1000 } // Cache for 5 minutes
    );

    // Mutation - update server state
    const { mutate: updateUser } = useMutation(
    (updates) => updateUserApi(userId, updates),
    {
    onSuccess: () => {
        queryClient.invalidateQueries(['user', userId]);
    }
    }
    );

    // Client state - local UI state
    const [isEditing, setIsEditing] = useState(false);

    if (isLoading) return <div>Loading...</div>;

    return (
    <>
    <h1>{user.name}</h1>
    <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Done' : 'Edit'}
    </button>
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Server state with React Query, client state with useState.',
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
                        text: `In Archer Review, form data from API is server state (cache), editing form is client state.`,
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
                            "Server state comes from APIs - it's async, can be stale, shared with others.",
                            'Use React Query for automatic caching and background refetching.',
                            'Client state is local UI - use useState.',
                            "Don't mix them.",
                            "Server state needs special handling, client state doesn't.",
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
                            'Server state API data. Async, shared, and stale-aagalam.',
                            'React Query server state cache and refresh pannum.',
                            'Client state UI state. Modal, tab, or input value madhiri local work.',
                            'Client state kku useState or Zustand useful.',
                            'API data ah normal global client store-la maintain panna vendam.',
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
                        text: '**Server state**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API user list, posts, or form data server state.',
                            'Loading, error, cache, and refetch handle panna vendum.',
                            'React Query server state kku best fit.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Client state**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Modal open or selected tab UI state.',
                            'Input type panna temporary text client state.',
                            'useState immediate local value kku useful.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple example**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API user data React Query la irukkum.',
                            'Edit mode or form draft useState la irukkum.',
                            'Save panna draft API mutation use panni server kku submit pannuvom.',
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
                        items: ['server state', 'client state', 'React Query', 'async', 'caching'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-43',
        topicId: 'react',
        title: 'How would you implement optimistic updates?',
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
                            'Optimistic updates - update UI immediately before server responds, rollback if error.',
                            'Shows instant feedback to user.',
                            'Handle with React Query mutations or custom async logic.',
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
                            '**Optimistic updates pattern:**',
                            'User clicks, update UI immediately.',
                            'Send request to server.',
                            'If success, keep changes (server confirms).',
                            'If error, rollback UI to previous state.',
                            '**Benefits:** instant feedback, better UX.',
                            '**Implementation:** React Query onMutate for temporary update, onSuccess for keeping, onError for rollback.',
                            '**Manual implementation:** store previous state, update UI, wait for response, keep or revert.',
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
                        text: `// React Query optimistic updates
    const { mutate } = useMutation(
    (newData) => updateUserApi(newData),
    {
    onMutate: async (newData) => {
    // Cancel ongoing queries for this key
    await queryClient.cancelQueries('user');
    
    // Store previous data
    const previousData = queryClient.getQueryData('user');
    
    // Optimistically update
    queryClient.setQueryData('user', newData);
    
    return { previousData };
    },
    onError: (err, newData, context) => {
    // Rollback on error
    if (context?.previousData) {
        queryClient.setQueryData('user', context.previousData);
    }
    },
    onSuccess: () => {
    // Server confirmed - no action needed, state is already updated
    }
    }
    );`,
                    },
                    {
                        type: 'highlight',
                        text: 'Optimistically update UI, rollback if server returns error.',
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
                        text: `In Archer Review, form submission showed success immediately, rolled back if server error.`,
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
                            'Optimistic updates improve UX by showing results immediately.',
                            'Update UI right away, send request, keep update if successful or rollback if failed.',
                            'React Query handles this with onMutate, onSuccess, onError callbacks.',
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
                            'Server response varadhukku munnaadi UI la change show pannuvom.',
                            'API success aana change maintain pannuvom.',
                            'API fail aana previous state kku rollback pannuvom.',
                            'React Query mutation callbacks optimistic update easy-aakkum.',
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
                        text: '**Three steps**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Old server state save pannuvom.',
                            'New state immediate-a UI la show pannuvom.',
                            'API result base panni keep or rollback pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**React Query flow**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`onMutate` old data save panni new UI set pannum.',
                            '`onError` old data restore pannum.',
                            '`onSuccess` server update confirm aagum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**When to use**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Like button, todo complete, or simple delete kku useful.',
                            'Payment madhiri risky action kku optimistic update avoid panna mudiyum.',
                            'Rollback and loading state clearly handle pannuvom.',
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
                        items: ['optimistic updates', 'immediate feedback', 'rollback', 'UX', 'React Query'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-44',
        topicId: 'react',
        title: 'How would you handle error states consistently across an application?',
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
                            'Handle errors with:',
                            'Error Boundaries for component errors.',
                            'Try/catch in async code.',
                            'Context for global error display.',
                            'useErrorHandler Hook.',
                            'React Query error handling.',
                            'Consistent error UI component.',
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
                            '**Error handling strategy:**',
                            'Error Boundaries for render-time errors.',
                            'Global error context or state.',
                            'useErrorHandler Hook (custom or react-error-boundary).',
                            'React Query onError callbacks.',
                            'Consistent error UI component.',
                            'Error logging service (Sentry, LogRocket).',
                            'User-friendly messages (not technical errors).',
                            'Retry logic for network errors.',
                            'Fallback UI for degraded experience.',
                            'Monitoring and alerting.',
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
                        text: `// Global error context
    const ErrorContext = createContext();

    function ErrorProvider({ children }) {
    const [error, setError] = useState(null);

    const clearError = () => setError(null);
    const showError = (err) => setError(err);

    return (
    <ErrorContext.Provider value={{ error, clearError, showError }}>
    {error && <ErrorAlert error={error} onClose={clearError} />}
    {children}
    </ErrorContext.Provider>
    );
    }

    // React Query error handling
    const { mutate, error } = useMutation(updateApi, {
    onError: (error) => {
    const message = error.response?.data?.message || 'Something went wrong';
    showError(new Error(message));
    }
    });

    // Error Boundary
    class ErrorBoundary extends React.Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
    return { error };
    }

    componentDidCatch(error) {
    // Log to error service
    logErrorService(error);
    }
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Global error context, Error Boundary for render errors, React Query error callbacks.',
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
                        text: `In Archer Review, errors shown in toast with automatic dismiss, logged to service.`,
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
                            'Use Error Boundaries for component errors, Context for global error display, React Query error callbacks for API errors, and error logging service for monitoring.',
                            'Show user-friendly messages, not technical errors.',
                            'Implement retry logic for network errors.',
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
                            'Render error kku Error Boundary use pannuvom.',
                            'API error kku try/catch or React Query callbacks use pannuvom.',
                            'Common error alert UI reuse pannuvom.',
                            'Technical error place-a simple user message show pannuvom.',
                            'Error service use panni production issue log pannuvom.',
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
                        text: '**Separate error types**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component render error Error Boundary handle pannum.',
                            'API and mutation error React Query or try/catch handle pannum.',
                            'Network error retry panna mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Show consistent UI**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reusable alert or toast component use pannuvom.',
                            'Field error inline show pannuvom.',
                            'Technical server text direct-a user kku show panna vendam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Log and monitor**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Sentry madhiri service-la error log pannuvom.',
                            'User action, route, and error details useful.',
                            'Repeated network error kku retry and fallback UI use pannuvom.',
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
                        items: ['error handling', 'Error Boundary', 'Context', 'React Query', 'user-friendly messages'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-45',
        topicId: 'react',
        title: 'How would you design a reusable form system?',
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
                            'Form system with:',
                            'useForm Hook - manage form state.',
                            'Form validation - schema-based (yup, zod).',
                            'Form fields - reusable field components.',
                            'Error display - consistent error messages.',
                            'Submission - handle submit, loading, errors.',
                            'Reset functionality - reset form to initial state.',
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
                            '**Reusable form system architecture:**',
                            '**Form provider Hook (useForm)** - state, validation, submission.',
                            '**Field components** - input, select, checkbox with error display.',
                            '**Validation schema** - yup, zod, or custom validator.',
                            'Auto-save - save form state periodically.',
                            'Field-level validation - real-time feedback.',
                            'Form-level validation - before submission.',
                            '**Conditional fields** - show/hide based on values.',
                            '**Dynamic fields** - add/remove fields.',
                            'Multi-step forms - wizard pattern.',
                            '**Field dependencies** - one field affects another.',
                            '**Popular libraries:** react-hook-form, formik.',
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
                        text: `// Custom useForm Hook
    function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
    await onSubmit(values);
    } finally {
    setIsSubmitting(false);
    }
    };

    return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
    };
    }

    // Reusable form component
    function Form({ onSubmit, children }) {
    const form = useForm({}, onSubmit);

    return (
    <form onSubmit={form.handleSubmit}>
    {children(form)}
    </form>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'useForm Hook manages all form state. Reusable form components reduce boilerplate.',
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
                        text: `In Archer Review, custom useForm Hook handled complex multi-step forms.`,
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
                            'Design form system with useForm Hook for state management, field components for consistent UI, schema-based validation, error display, and submission handling.',
                            'Support conditional fields, multi-step forms, and auto-save.',
                            'Extract into reusable library for team use.',
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
                            'Central form state kku useForm Hook use pannuvom.',
                            'Text, select, checkbox madhiri reusable field components create pannuvom.',
                            'Zod or Yup schema use panni validation pannuvom.',
                            'Submit, loading, error, and reset behavior consistent-a maintain pannuvom.',
                            'Conditional and dynamic fields support pannuvom.',
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
                        text: '**Form state**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'useForm Hook values, touched fields, errors, and submitting state maintain pannum.',
                            'Field components controlled or library-based state use panna mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Validation and errors**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Zod or Yup schema la rules irukkum.',
                            'Field error same UI component la display pannuvom.',
                            'Submit munnaadi form-level validation run pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Reusable features**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Conditional fields and multi-step forms support pannuvom.',
                            'Reset, loading, and success states consistent-a maintain pannuvom.',
                            'Keyboard, labels, and accessibility rules follow pannuvom.',
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
                        items: ['form system', 'useForm', 'validation', 'field components', 'reusable'],
                    },
                ],
            },
        ],
    }),
];
