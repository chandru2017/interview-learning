import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 're-11',
        topicId: 'react',
        title: 'What are React Hooks?',
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
                            'Hooks are functions that let you use React features in functional components.',
                            'Before Hooks, you needed class components for state and lifecycle.',
                            'Hooks like useState and useEffect bring these features to functional components.',
                            'Hooks make React code simpler and more reusable.',
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
                            'Hooks are functions that let functional components use state, context, and other React features.',
                            'Before Hooks (React 16.8), state was only available in class components.',
                            'Hooks changed this.',
                            '**Key Hooks:** useState (state), useEffect (lifecycle/side effects), useContext (consume context), useReducer (complex state), useCallback (memoize functions), useMemo (memoize values), useRef (persist values), useLayoutEffect (DOM measurements).',
                            '**Custom Hooks** - combine built-in Hooks to create reusable logic.',
                            '**Rules of Hooks:** only call at top level (not in loops/conditions), only in React functions.',
                            '**Advantages over class components:** simpler syntax, better code organization (group related logic), easier to share stateful logic, smaller bundle size (tree-shaking).',
                            '**Disadvantages:** requires understanding closure and dependency arrays.',
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
                        text: `// Before Hooks - Class component
    class Counter extends React.Component {
    constructor(props) {
    super(props);
    this.state = { count: 0 };
    }

    render() {
    return (
    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
    </button>
    );
    }
    }

    // After Hooks - Function component
    function Counter() {
    const [count, setCount] = useState(0);

    return (
    <button onClick={() => setCount(count + 1)}>
    {count}
    </button>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Hooks make functional components simpler and less boilerplate than class components.',
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
                        text: `In Archer Review, we used functional components with Hooks exclusively. useState for form state, useEffect for API calls, useCallback for stable handlers.`,
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
                            'Hooks are functions that let functional components use React features like state and lifecycle. useState manages state, useEffect handles side effects, useContext consumes context.',
                            'Custom Hooks combine built-in Hooks for reusable logic.',
                            'Hooks simplified React - no more class components for most cases.',
                            'Rule: only call Hooks at top level, not in loops or conditionals.',
                            'Hooks make code more organized and reusable.',
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
                            'Hooks use panni function components-la state and other React features use panna mudiyum.',
                            'Before Hooks, state and lifecycle class components-la mattum irukkum.',
                            '`useState` state maintain pannum, `useEffect` API call madhiri side effects handle pannum.',
                            'Custom Hooks use panni repeated logic ah reuse panna mudiyum.',
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
                        text: '**What are Hooks?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Hooks special functions.',
                            'Function components-la state, context, and lifecycle features use panna help pannum.',
                            'Hooks name `use` la start aagum: `useState`, `useEffect`.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple example**',
                    },
                    {
                        type: 'code',
                        text: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
                    },
                    {
                        type: 'bullets',
                        items: ['`count` current value.', '`setCount` value ah change panna use pannuvom.'],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why Hooks are useful**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function component code simple and short.',
                            'Related logic separate Custom Hooks-la organize panna mudiyum.',
                            'Hooks use panna rules follow panna vendum.',
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
                        items: ['Hooks', 'useState', 'useEffect', 'custom Hooks', 'functional components'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-12',
        topicId: 'react',
        title: 'What are the Rules of Hooks?',
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
                            'Rule 1: Only call Hooks at the top level of a function.',
                            "Don't call Hooks inside loops, conditions, or nested functions.",
                            'Rule 2: Only call Hooks from React function components or custom Hooks.',
                            "Don't call from regular functions.",
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
                            '**Rules of Hooks (enforced by linter):**',
                            '**Only call Hooks at top level** - never inside loops (for, while), conditions (if, switch), or nested functions.',
                            '**Why:** Hooks depend on call order.',
                            'If you conditionally call a Hook, the order changes and React gets confused about which state belongs to which Hook.',
                            '**Only call Hooks from React functions** - either functional components or custom Hooks.',
                            'Not from regular functions, class components, or event listeners.',
                            '**Why:** Hooks use internal React infrastructure (fiber, queue).',
                            '**Why these rules exist:** Hooks use closure to track state.',
                            'Call order determines which piece of state each Hook operates on.',
                            'Breaking rules causes state to get mixed up between Hooks.',
                            'ESLint plugin (eslint-plugin-react-hooks) enforces these rules automatically.',
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
                        text: `// WRONG - Hook in condition
    function Component() {
    if (condition) {
    const [state, setState] = useState(0); // BAD!
    }
    }

    // WRONG - Hook in loop
    function Component() {
    for (let i = 0; i < 5; i++) {
    useEffect(() => {}); // BAD!
    }
    }

    // CORRECT - Hook at top level
    function Component() {
    const [state, setState] = useState(0);
    const [other, setOther] = useState('');

    if (condition) {
    // Can use state here, just can't call Hook
    setState(state + 1);
    }
    }

    // CORRECT - Hook in custom Hook
    function useCustomLogic() {
    const [state, setState] = useState(0);
    return state;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: "Hooks must be called at the component's top level. Call order determines state assignment.",
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
                        text: `In Archer Review, all Hooks were at component top level. Conditional logic used state values, not Hooks.`,
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
                            'Two key rules:',
                            'Only call Hooks at the top level of your function component.',
                            'Never inside conditions or loops.',
                            'React relies on call order to track state.',
                            'If order changes, React gets confused.',
                            'Only call Hooks from React functions - either functional components or custom Hooks.',
                            'Use the ESLint plugin to enforce these rules.',
                            'Breaking them causes subtle bugs.',
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
                            'Hooks ah function components or Custom Hooks mela mattum top level la call panna vendum.',
                            '`if`, `for`, or nested function kulla Hook call panna koodadhu.',
                            'React Hooks call order use panni state ah track pannum.',
                            'Order change aana wrong state attach aagalam.',
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
                        text: '**Rule 1: Top level only**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Hooks ah component function oda top la call pannuvom.',
                            '`if`, loop, or nested function kulla call panna koodadhu.',
                            'Condition true irundha mattum Hook call aana, next render la call order maari pogum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Wrong example**',
                    },
                    {
                        type: 'code',
                        text: `function Profile({ isActive }) {
  if (isActive) {
    const [name, setName] = useState('');
  }
}`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Hook condition kulla irukku.',
                            'Next render la condition change aana React state ah correct-a identify panna mudiyala.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Rule 2: Call Hooks only in React functions**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Function component or Custom Hook la mattum call pannuvom.',
                            'Normal JavaScript function or event handler la call panna koodadhu.',
                            'React Hooks ESLint plugin rules ah catch panna help pannum.',
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
                        items: ['Rules of Hooks', 'top level', 'call order', 'ESLint plugin', 'consistency'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-13',
        topicId: 'react',
        title: 'Explain useState.',
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
                            'useState is a Hook that adds state to functional components.',
                            'It returns two things: the current state value and a function to update it.',
                            'When you update state, React re-renders the component.',
                            'State persists between renders.',
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
                            'useState(initialValue) returns [state, setState].',
                            'State updates are asynchronous and batched. setState can take a value or updater function.',
                            'Updater function receives previous state as argument.',
                            'All setState calls in event handlers are batched in React 18+. useState with objects/arrays requires new reference for update (immutability).',
                            'State initialized lazily if initialValue is a function.',
                            '**Pitfall:** setting same state multiple times in one event only triggers one re-render (batched).',
                            '**Common mistakes:** directly mutating arrays/objects instead of creating new ones. useState can be called multiple times - each call gets its own state variable.',
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
                        text: `// Basic useState
    const [count, setCount] = useState(0);
    setCount(count + 1); // Direct value

    // With updater function
    setCount(prev => prev + 1); // Better for multiple updates

    // Multiple state variables
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    // With object (requires new reference)
    const [user, setUser] = useState({ name: 'Ali', age: 30 });
    setUser({ ...user, name: 'Bob' }); // Create new object

    // Lazy initialization
    const [items, setItems] = useState(() => {
    return expensiveComputation();
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'useState returns state and setter. Updater function prevents stale closure issues. Lazy initialization runs only once.',
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
                        text: `In Archer Review, useState managed form fields. Each field had its own useState. Updates triggered re-renders to show real-time validation.`,
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
                            'useState lets functional components have state.',
                            'It takes an initial value and returns the current state and a function to update it.',
                            'Updates trigger re-renders.',
                            'Use the updater function form to avoid stale closures.',
                            'State with objects/arrays requires new references (spread operator).',
                            'Multiple useState calls each have their own state.',
                            'Batching in React 18 means multiple setState calls trigger one re-render.',
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
                            '`useState` function components-la state maintain panna use pannuvom.',
                            'Adhu current value and value change panna function render pannum.',
                            'State change aana component re-render aagum.',
                            'Old state base-a new state calculate panna updater function use pannuvom.',
                            'Object or array update panna new copy create panna vendum.',
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
                        text: '**Simple useState syntax**',
                    },
                    {
                        type: 'code',
                        text: `const [count, setCount] = useState(0);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`count` current state value.',
                            '`setCount` state ah change panna function.',
                            '`0` initial value.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**State update example**',
                    },
                    {
                        type: 'code',
                        text: `setCount(count + 1);

setCount((previousCount) => previousCount + 1);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Simple update kku direct value use pannalam.',
                            'Previous state base-a calculate panna updater function nalladhu.',
                            'Same component la multiple `useState` calls use panna mudiyum.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Objects and arrays**',
                    },
                    {
                        type: 'code',
                        text: `setUser((previousUser) => ({
  ...previousUser,
  name: 'Bob'
}));`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Object or array ah direct-a change panna vendam.',
                            'New copy create panni state update pannuvom.',
                            'React new reference compare panni re-render decide pannum.',
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
                        items: ['useState', 'state', 'setter', 'updater function', 'lazy initialization'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-14',
        topicId: 'react',
        title: 'Explain useEffect in detail.',
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
                            'useEffect runs side effects in functional components.',
                            'It runs after React updates the DOM.',
                            'Side effects are things like API calls, subscriptions, or DOM manipulation. useEffect runs after every render by default.',
                            'You can control when it runs with dependency arrays.',
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
                            'useEffect(callback, dependencies) runs side effects after renders.',
                            "Callback runs after render, doesn't block rendering.",
                            'Return cleanup function for cleanup (unsubscribe, cancel requests).',
                            '**Dependency array controls when effect runs:** empty array = run once on mount, [dep1, dep2] = run when dependencies change, no array = run every render (use carefully).',
                            '**Timing:** useEffect runs after paint (asynchronous), useLayoutEffect runs before paint (synchronous).',
                            'Multiple useEffect calls run in order.',
                            'Cleanup function runs before component unmounts and before effect runs again.',
                            '**Common pitfalls:** missing dependencies cause stale closures, infinite loops from missing or wrong dependencies, blocking renders (should use useLayoutEffect instead).',
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
                        text: `// Basic useEffect
    useEffect(() => {
    console.log('Component mounted');

    return () => {
    console.log('Component unmounting');
    };
    }, []); // Run once on mount

    // With dependencies
    useEffect(() => {
    console.log('userId changed:', userId);

    const unsubscribe = subscribeToUser(userId);
    return () => unsubscribe();
    }, [userId]); // Run when userId changes

    // Multiple effects
    useEffect(() => { /* effect 1 */ }, []);
    useEffect(() => { /* effect 2 */ }, [dep]);`,
                    },
                    {
                        type: 'highlight',
                        text: 'useEffect runs after render. Return cleanup function. Dependencies control when it runs.',
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
                        text: `In Archer Review, useEffect fetched user data and form templates. Cleanup function cancelled requests on unmount.`,
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
                            'useEffect runs side effects after rendering.',
                            'Pass a callback and optional dependency array.',
                            'The callback runs after React updates the DOM.',
                            'Return a cleanup function for cleanup.',
                            "Dependencies control when the effect runs - empty array means run once, array of values means run when those change. useEffect is asynchronous - it doesn't block rendering.",
                            'Common mistake: missing dependencies causing stale closures.',
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
                            '`useEffect` API call, subscription, or timer madhiri side effects run panna use pannuvom.',
                            'Effect component render aana apram execute aagum.',
                            'Effect kku cleanup function return panna subscription or timer stop panna mudiyum.',
                            'Dependency array effect eppothu run aagum nu control pannum.',
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
                        text: '**What is a side effect?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API call, event subscription, timer, or browser storage side effects.',
                            'Component render logic-la irundhu veliyila nadakkura work.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Simple useEffect example**',
                    },
                    {
                        type: 'code',
                        text: `useEffect(() => {
  fetch('/api/user')
    .then((response) => response.json());
}, []);`,
                    },
                    {
                        type: 'bullets',
                        items: ['`[]` empty dependency array.', 'Effect component mount aana once run aagum.'],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cleanup function**',
                    },
                    {
                        type: 'code',
                        text: `useEffect(() => {
  const interval = setInterval(refreshData, 1000);

  return () => clearInterval(interval);
}, []);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cleanup component unmount aana run aagum.',
                            'Subscription, interval, or request ah stop panna use pannuvom.',
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
                        items: ['useEffect', 'side effects', 'cleanup', 'dependencies', 'timing'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-15',
        topicId: 'react',
        title: 'What is the dependency array in useEffect?',
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
                            'The dependency array tells React when to run the useEffect.',
                            'If the array is empty, the effect runs once on mount.',
                            'If it has values, the effect runs when any of those values change.',
                            "If there's no array, the effect runs on every render.",
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
                            '**Dependency array controls effect timing:** No array = run after every render (rarely used).',
                            'Empty array [] = run once on mount, cleanup on unmount. [dep1, dep2] = run when dep1 or dep2 changes.',
                            '**How React checks:** after render, React compares new dependencies with old using Object.is().',
                            'If any dependency changed, run effect.',
                            'If all same, skip effect.',
                            'ESLint plugin (exhaustive-deps) warns about missing dependencies.',
                            "Adding value to dependencies that shouldn't be there causes unnecessary re-runs.",
                            '**Rule:** include all external values used in the effect that can change.',
                            "Constants don't need to be dependencies.",
                            'Functions defined inside component should either be memoized or included in dependencies.',
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
                        text: `// Empty array - run once
    useEffect(() => {
    fetchData();
    }, []);

    // With dependencies - run when they change
    useEffect(() => {
    console.log(userId, userName);
    fetchUserData(userId);
    }, [userId, userName]);

    // Forgetting dependency - stale closure bug
    function Component({ userId }) {
    useEffect(() => {
    const unsubscribe = subscribeToUser(userId);
    return () => unsubscribe();
    }, []); // BUG: userId not in deps, always uses initial value
    }

    // Correct
    function Component({ userId }) {
    useEffect(() => {
    const unsubscribe = subscribeToUser(userId);
    return () => unsubscribe();
    }, [userId]); // Correct: userId in deps
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Dependencies control when effect runs. Missing dependencies cause stale closure bugs.',
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
                        text: `In Archer Review, form field effects had field value in dependencies. When value changed, effect revalidated.`,
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
                            'The dependency array tells React when to run your effect.',
                            'Empty array means run once on mount.',
                            'Array with dependencies means run when those values change.',
                            'No array means run every render (usually not what you want).',
                            'Always include all external values used in the effect that can change.',
                            'Missing dependencies cause bugs where the effect has stale values.',
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
                            'Dependency array effect eppothu run aagum nu decide pannum.',
                            '[] irundha effect mount la once run aagum.',
                            '[userId] madhiri value irundha userId change aana effect run aagum.',
                            'Array illa na effect ovvoru render layum run aagum.',
                            'Effect use panna variables ah dependency array la include pannuvom.',
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
                        text: '**Three dependency cases**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No array: ovvoru render layum run aagum.',
                            '`[]`: mount la once mattum run aagum.',
                            '`[value]`: value change aana mattum run aagum.',
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
                        text: `useEffect(() => {
  fetchUser(userId);
}, [userId]);`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Initial render la effect run aagum.',
                            '`userId` change aana, effect thirumba run aagum.',
                            '`userId` same-a irundha effect run aagala.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Missing dependency problem**',
                    },
                    {
                        type: 'code',
                        text: `useEffect(() => {
  fetchUser(userId);
}, []); // userId missing`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`userId` change aana effect thirumba run aagala.',
                            'Old value use aagalam.',
                            'ESLint exhaustive-deps rule missing dependencies ah warn pannum.',
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
                        items: ['dependency array', 'when to run', 'Object.is', 'stale closure', 'exhaustive-deps'],
                    },
                ],
            },
        ],
    }),
];
