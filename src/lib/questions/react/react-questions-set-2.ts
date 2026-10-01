import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 're-6',
        topicId: 'react',
        title: 'What causes a React component to re-render?',
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
                            'A component re-renders when:',
                            'Its state changes (setState).',
                            'Its props change.',
                            'Its parent re-renders.',
                            'React re-renders the component and all its children, then decides what DOM changes are needed based on the Virtual DOM diff.',
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
                            '**Re-render triggers:**',
                            '**State change** - setState or state update in hooks.',
                            '**Props change** - parent passed different props.',
                            'Parent re-render - all children re-render unless optimized (React.memo, useMemo).',
                            '**Context change** - components consuming Context re-render.',
                            '**External store update** - if using Redux, Zustand, etc.',
                            '**Important distinction:** re-render !== DOM update.',
                            'React re-renders components (calls functions), creates new Virtual DOM, diffs with old, then commits DOM changes.',
                            '**Optimization techniques:** React.memo for prop equality, useMemo for value memoization, useCallback for stable functions, useTransition for deferring updates.',
                            '**Common cause of performance issues:** parent re-renders triggering unnecessary child re-renders.',
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
                        text: `// Re-render triggers
    function App() {
    const [count, setCount] = useState(0);

    return (
    <>
    <button onClick={() => setCount(count + 1)}>
        {count}
    </button>
    <Child count={count} /> {/* Props change, re-renders */}
    </>
    );
    }

    function Child({ count }) {
    // Re-renders when count prop changes
    // Also re-renders when App re-renders even if count doesn't change
    return <p>Count: {count}</p>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Child re-renders when count prop changes. Also re-renders when App re-renders for any reason.',
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
                        text: `In Archer Review, form fields re-rendered whenever form state changed. Without optimization, every field updated on every keystroke. We used useCallback and React.memo to prevent unnecessary re-renders.`,
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
                            'A component re-renders when its state changes, props change, or its parent re-renders.',
                            'During re-render, React calls the component function, creates new Virtual DOM, and diffs with old Virtual DOM.',
                            'Only if Virtual DOM changed does React update the real DOM.',
                            "Common performance issue: parent re-renders triggering child re-renders even when props didn't change.",
                            'We optimize with React.memo, useMemo, and useCallback.',
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
                        items: ['re-render', 'state change', 'props change', 'parent re-render', 'optimization'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-7',
        topicId: 'react',
        title: 'What is the difference between state and props?',
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
                            'Props are passed from parent to child component.',
                            'Props are read-only - child cannot change them.',
                            'State is internal to a component.',
                            'Component can change its state.',
                            'Props come from outside, state is inside.',
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
                            '**Props vs State:** Props - read-only data passed from parent.',
                            'Immutable within component.',
                            'Component cannot modify props.',
                            'Used to pass data and callbacks.',
                            'Triggers re-render if changed.',
                            '**State** - internal data managed by component.',
                            'Mutable via setState or useState.',
                            'Component owns and manages state.',
                            'Triggers re-render when updated.',
                            'Props flow down the tree (unidirectional).',
                            'State is local to component.',
                            'Props are like function parameters.',
                            'State is like local variables.',
                            'Props make components predictable and testable.',
                            'State is necessary for interactivity.',
                            '**General rule:** lift state up to common parent if multiple components need it.',
                            'Context or state management for app-wide state.',
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
                        text: `// Props - from parent
    function Parent() {
    return <Child name="Ali" age={30} />;
    }

    function Child({ name, age }) {
    // name and age are props - read-only
    // Cannot do: this.props.name = 'Bob';
    return <p>{name} is {age}</p>;
    }

    // State - internal
    function Counter() {
    const [count, setCount] = useState(0);
    // count is state - can be changed
    return (
    <>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Child receives name and age as props from Parent. Counter manages count as its own state.',
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
                        text: `In Archer Review, form component received initialValue as prop. User input updates state. Parent accesses final state through callback prop.`,
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
                            'Props are read-only data passed from parent to child.',
                            'Child cannot modify props.',
                            'State is internal to a component and can be changed.',
                            'State changes trigger re-render.',
                            'Props are unidirectional - data flows from parent to child.',
                            'If multiple components need the same state, lift it to their common parent.',
                            'Props make components predictable and reusable.',
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
                        items: ['props', 'state', 'read-only', 'mutable', 'unidirectional'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-8',
        topicId: 'react',
        title: 'Why are keys important in React?',
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
                            'Keys help React identify which list items have changed.',
                            'Without keys, React uses list index as key.',
                            'This causes bugs when the list reorders or items are added/removed.',
                            'With keys, React knows which item is which even if the order changes.',
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
                            'Keys are crucial for list reconciliation.',
                            '**Issues without proper keys:**',
                            '**Incorrect state mapping** - if using index as key and list reorders, state gets mixed up.',
                            'Input values could appear on wrong items.',
                            '**Component state issues** - each item might have its own state (e.g., input field).',
                            'Without keys, component state could be preserved for wrong item.',
                            '**Performance** - React might recreate components instead of reusing them.',
                            '**Animation issues** - animations might apply to wrong items.',
                            '**Best practices:** use unique, stable identifiers (ID from database, not index).',
                            'Never use array index as key (unless list is static).',
                            'If no unique ID available, use libraries like uuid.',
                            'Keys must be stable across re-renders.',
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
                        text: `// BAD - using array index as key
    const items = ['Alice', 'Bob', 'Charlie'];
    {items.map((name, index) => (
    <li key={index}>{name}</li>
    ))}
    // If list reorders, keys are wrong!

    // GOOD - using unique ID
    const items = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
    ];
    {items.map(item => (
    <li key={item.id}>{item.name}</li>
    ))}`,
                    },
                    {
                        type: 'highlight',
                        text: 'Index as key breaks when list reorders. Unique ID as key stays correct even if order changes.',
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
                        text: `In Archer Review, we had dynamic form fields. Each field had an ID. When fields reordered, React knew which field was which. Without keys, state could get mixed up.`,
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
                            'Keys help React identify which items are the same across renders.',
                            'Without keys, React uses index which breaks when lists reorder or items are added/removed.',
                            'Use unique, stable identifiers as keys - typically an ID from your data.',
                            'Never use array index as key for dynamic lists.',
                            'Keys enable proper state management for list items and prevent state from appearing on wrong items.',
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
                        items: ['keys', 'list reconciliation', 'unique identifier', 'stable', 'reordering'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-9',
        topicId: 'react',
        title: 'Why should you avoid using array indexes as keys?',
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
                            'Array indexes change when the list reorders.',
                            "If an item moves from position 0 to position 1, its 'key' changes.",
                            "This confuses React into thinking it's a different item.",
                            'Also, if items have internal state (like input values), the state gets mixed up.',
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
                            '**Problems with index keys:**',
                            '**State Lost/Mixed** - if component has internal state and items reorder, state stays at index position, not with the item.',
                            'Input value meant for Alice ends up with Bob.',
                            'Re-mounting - React might think item is new and re-mount component, losing state.',
                            '**Animation** - animations apply to index, not item.',
                            'Item moves but animation stays at old position.',
                            '**Performance** - filters or sorts might recreate all components.',
                            '**Mutations** - adding/removing items changes all following indexes.',
                            '**Real-world example:** todo list with removable items.',
                            'Remove first item, all remaining items get new indexes.',
                            'React remounts them, losing any per-item state.',
                            "**Rule:** Use index only if: list is static (never filtered/sorted/reordered), no IDs available and cannot add them, items don't have mutable state.",
                            'Even then, better to use unique IDs.',
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
                        text: `// Index keys problem
    const [todos, setTodos] = useState([
    { name: 'Task 1' },
    { name: 'Task 2' }
    ]);

    // With index as key
    {todos.map((todo, index) => (
    <li key={index}>{todo.name}</li>
    ))}

    // If user drags task 2 to position 1:
    // Before: Task1 (key=0), Task2 (key=1)
    // After: Task2 (key=0), Task1 (key=1)
    // React thinks they swapped positions, not items!

    // With unique key
    {todos.map(todo => (
    <li key={todo.id}>{todo.name}</li>
    ))}
    // Correct: items stay with their identities`,
                    },
                    {
                        type: 'highlight',
                        text: 'Index keys break when order changes. React thinks items changed, not their positions. Unique keys preserve item identity.',
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
                        text: `In Archer Review, we had dynamic form fields with state (input values, validation status). Using index keys would lose state when fields reordered. We used field IDs as keys.`,
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
                            'Never use array index as key for dynamic lists.',
                            'When the list reorders, adds, or removes items, index keys fail.',
                            'Items get wrong state, components re-mount unnecessarily, and animations break.',
                            'Use unique, stable identifiers from your data instead.',
                            'For new items without IDs, generate unique IDs with uuid or similar.',
                            'Index keys are only acceptable for static lists that never change order.',
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
                        items: ['index as key', 'identity', 'reordering', 'state loss', 'unique ID'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-10',
        topicId: 'react',
        title: 'What are controlled and uncontrolled components?',
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
                            'Controlled component - React state holds the input value.',
                            'Uncontrolled component - the DOM holds the input value.',
                            "In controlled components, React controls the input's value.",
                            'In uncontrolled, the component manages itself.',
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
                            '**Controlled Components** - form elements (input, select, textarea) are controlled by React state.',
                            'Value comes from props, changes go through onChange callbacks.',
                            'React is single source of truth.',
                            '**Advantages:** easy to validate, can disable submit when invalid, can programmatically update, can clear inputs.',
                            '**Uncontrolled Components** - form elements manage their own state.',
                            "React doesn't control the value.",
                            'Access value via useRef.',
                            '**Advantages:** simpler for simple forms, useful with non-React code.',
                            '**Disadvantages:** harder to integrate with React patterns.',
                            '**Best practice:** use controlled components for most cases.',
                            '**Only use uncontrolled for:** file inputs (cannot be controlled), integration with jQuery/legacy code.',
                            '**Hybrid approach:** controlled for main fields, uncontrolled for file inputs.',
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
                        text: `// Controlled component
    function ControlledForm() {
    const [name, setName] = useState('');

    return (
    <>
    <input
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <p>Value: {name}</p>
    </>
    );
    }

    // Uncontrolled component
    function UncontrolledForm() {
    const inputRef = useRef();

    const handleSubmit = (e) => {
    console.log(inputRef.current.value);
    };

    return (
    <>
    <input ref={inputRef} />
    <button onClick={handleSubmit}>Submit</button>
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Controlled: React state holds value. Uncontrolled: useRef accesses value directly from DOM.',
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
                        text: `In Archer Review, most form fields were controlled. React state held values, enabling validation and error display. File upload used uncontrolled because file inputs cannot be set via JavaScript.`,
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
                            'Controlled components are form elements whose value is managed by React state.',
                            "The input's value comes from props, and changes go through onChange callbacks.",
                            'This makes validation and programmatic updates easy.',
                            'Uncontrolled components manage their own value - you access it via useRef.',
                            "Most forms should be controlled for consistency with React's patterns.",
                            'File inputs are usually uncontrolled because they cannot be set by JavaScript.',
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
                        items: ['controlled', 'uncontrolled', 'state', 'useRef', 'form elements'],
                    },
                ],
            },
        ],
    }),
];
