import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 're-1',
        topicId: 'react',
        title: 'Why did you choose React?',
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
                            'React is a JavaScript library for building user interfaces.',
                            'You choose React because it makes creating interactive UIs easier.',
                            'React components are reusable pieces of UI.',
                            'When data changes, React automatically updates the UI.',
                            'React has a large community with many resources and libraries.',
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
                            'React solves the complexity of managing UI state and rendering.',
                            '**Key benefits:**',
                            'Component-based architecture for reusability and maintainability.',
                            '**Declarative syntax** - describe what UI should look like, React handles rendering.',
                            '**Virtual DOM for performance optimization** - React computes minimal updates.',
                            '**Strong ecosystem** - routing, state management, testing tools.',
                            '**Developer experience** - fast development cycle, browser DevTools.',
                            '**Community and job market** - most popular JavaScript framework.',
                            '**Unidirectional data flow** - predictable state changes.',
                            '**Choose React for:** complex interactive applications, large teams, long-term projects, need for performance optimization.',
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
                        text: `// React component - declarative and reusable
function UserCard({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
// Use the component multiple times
<UserCard user={alice} />
<UserCard user={bob} />`,
                    },
                    {
                        type: 'highlight',
                        text: 'React components are reusable. Same component renders different data. React automatically updates when data changes.',
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
                        text: `In Archer Review, we chose React for its component reusability. Form fields, buttons, and layouts were components used everywhere. React's ecosystem had libraries for everything we needed - routing, state management, form handling.`,
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
                            'I chose React because it simplifies building complex interactive UIs.',
                            'Components are reusable pieces that reduce code duplication.',
                            'React is declarative - you describe what the UI should look like, and React handles the updates.',
                            'The Virtual DOM makes apps fast by computing minimal DOM updates.',
                            'React has a huge community and ecosystem.',
                            'For a project like Archer Review with many interactive forms and features, React is the perfect choice.',
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
                        items: ['React', 'components', 'reusable', 'Virtual DOM', 'declarative'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-2',
        topicId: 'react',
        title: 'What problem does React solve?',
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
                            'Before React, updating UIs when data changed was manual and error-prone.',
                            'You had to find DOM elements, update them directly, and keep track of state manually.',
                            'React solves this by automatically updating the UI when data changes.',
                            'Components encapsulate logic and UI together.',
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
                            '**React solves several key problems:**',
                            '**State Management Complexity** - managing what data maps to what DOM elements was manual and error-prone.',
                            'React makes this automatic.',
                            '**Reusability** - without components, code duplication was inevitable.',
                            'React forces modular, reusable components.',
                            '**Predictability** - direct DOM manipulation led to unpredictable bugs.',
                            "React's unidirectional data flow is predictable.",
                            '**Performance** - frequent DOM updates are slow.',
                            'Virtual DOM computes minimal updates.',
                            '**Maintainability** - large jQuery-like codebases became unmaintainable.',
                            'Components are self-contained and testable.',
                            '**Scalability** - adding features to large apps is risky without clear structure.',
                            'Component hierarchy provides clear structure.',
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
                        text: `// Problem: Manual DOM updates (bad)
const user = { name: 'Ali' };
document.getElementById('name').textContent = user.name;
user.name = 'Bob';
// Must manually update again - error prone!

// React Solution: Automatic updates (good)
function UserComponent() {
  const [user, setUser] = useState({ name: 'Ali' });
  return <h1>{user.name}</h1>; // Auto-updates when state changes
}`,
                    },
                    {
                        type: 'highlight',
                        text: 'Manual updates require remembering to update the DOM. React automatically re-renders when state changes, keeping UI in sync.',
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
                        text: `In Archer Review, without React we'd manually track form values and update the DOM. With React, changing state automatically updates the form. Validation, submission, error states all update automatically.`,
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
                            'React solves the problem of keeping UI synchronized with state.',
                            "In traditional JavaScript, you manually update the DOM when data changes - this is error-prone and doesn't scale.",
                            'React automatically updates the UI when state changes.',
                            'Components are reusable and self-contained.',
                            'The Virtual DOM optimizes performance by computing minimal updates.',
                            'React makes code predictable and maintainable for large applications.',
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
                            'state synchronization',
                            'automatic updates',
                            'components',
                            'Virtual DOM',
                            'maintainability',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-3',
        topicId: 'react',
        title: 'What is the Virtual DOM?',
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
                            'The Virtual DOM is an in-memory representation of the real DOM.',
                            'When state changes, React creates a new Virtual DOM.',
                            'React compares the new Virtual DOM with the old one to find differences.',
                            'Then React updates only the changed parts in the real DOM.',
                            'This is faster than updating the entire DOM.',
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
                            'The Virtual DOM is a lightweight JavaScript representation of the actual DOM.',
                            '**Process:**',
                            'State changes trigger re-render.',
                            'React creates new Virtual DOM tree.',
                            'React diffs new vs old Virtual DOM (reconciliation).',
                            'React computes minimal set of changes (patch).',
                            'React applies changes to real DOM (batch updates).',
                            "**Benefits:** batching improves performance, diffing algorithm is optimized, developers don't touch DOM directly.",
                            '**Not magic** - still O(n) in worst case, but heuristics make it O(n) for typical cases.',
                            '**Trade-offs:** Virtual DOM abstraction has overhead, not always faster than direct DOM manipulation (but more convenient).',
                            'React Fiber improves this further with scheduling.',
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
                        text: `// Virtual DOM concept (simplified)
// Old state
<div>
  <p>Count: 0</p>
</div>

// State changes, new Virtual DOM created
<div>
  <p>Count: 1</p>
</div>

// React diffs and finds: only text content changed
// React updates only that text in real DOM
// Not the entire div, just the text node`,
                    },
                    {
                        type: 'highlight',
                        text: 'React compares old and new Virtual DOM. Only the changed text is updated in the real DOM, not the entire element.',
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
                        text: `In Archer Review, when a user changes a form field, React updates the Virtual DOM. Only the changed field updates in the real DOM - not the entire form. This makes the app feel responsive.`,
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
                            "The Virtual DOM is React's optimization technique.",
                            'When state changes, React creates a new Virtual DOM representation.',
                            'React then diffs the new Virtual DOM with the old one to find what changed.',
                            'React updates only the changed parts in the real DOM.',
                            'This batching and diffing makes React fast.',
                            'The Virtual DOM is an abstraction that frees developers from manual DOM manipulation.',
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
                        items: ['Virtual DOM', 'diffing', 'reconciliation', 'batching', 'performance'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-4',
        topicId: 'react',
        title: 'How does React reconciliation work?',
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
                            "Reconciliation is React's process of finding what changed between the old Virtual DOM and the new Virtual DOM.",
                            'React compares the two trees element by element.',
                            'When it finds differences, it updates the real DOM.',
                            'React uses keys to identify which elements are the same across renders.',
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
                            "Reconciliation (also called diffing) is React's algorithm to compute minimal DOM updates.",
                            '**Key assumptions for performance:**',
                            'Different types of elements produce different trees.',
                            '**Components are stable** - same component class always produces same tree structure.',
                            'Keys identify which elements are the same across renders.',
                            '**Algorithm:**',
                            '**Compare element types** - if different, replace the element.',
                            'For same types, compare props/attributes.',
                            'Recurse into children.',
                            'Use keys to match children.',
                            '**Trade-offs:** linear time O(n) for typical cases but not guaranteed worst case.',
                            'Heuristics work for most apps.',
                            'Fiber architecture allows scheduling and prioritizing updates. reconciliation happens before actual DOM updates (commit phase).',
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
                        text: `// Reconciliation with keys
// Old render
<ul>
  <li key="a">Alice</li>
  <li key="b">Bob</li>
</ul>

// New render (added Charlie at end)
<ul>
  <li key="a">Alice</li>
  <li key="b">Bob</li>
  <li key="c">Charlie</li>
</ul>

// Without keys, React would think:
// - First item changed Alice -> Alice (no change)
// - Second item changed Bob -> Bob (no change)
// - Added third item Charlie

// With keys, React knows:
// - Item 'a' is still Alice
// - Item 'b' is still Bob
// - New item 'c' is Charlie`,
                    },
                    {
                        type: 'highlight',
                        text: 'Keys tell React which elements are the same across renders. Without keys, React assumes order matters and compares by position.',
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
                        text: `In Archer Review, we used keys for list items - form fields in a dynamic form. With keys, React knows which field is which even if order changes. Without keys, state could get mixed up.`,
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
                            "Reconciliation is React's algorithm to find what changed.",
                            'React compares the old Virtual DOM with the new one element by element.',
                            'Keys are crucial - they tell React which elements are the same across renders.',
                            'Without keys, React assumes list order matters.',
                            'With keys, React can match elements correctly even if they reorder.',
                            'Reconciliation happens during the render phase, then the commit phase applies changes to the DOM.',
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
                        items: ['reconciliation', 'diffing', 'keys', 'element type', 'tree comparison'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-5',
        topicId: 'react',
        title: 'What is React Fiber?',
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
                            "React Fiber is React's redesign of the reconciliation engine.",
                            "Instead of processing the entire component tree at once, Fiber breaks work into small units called 'fibers'.",
                            'React can pause, stop, or prioritize this work.',
                            'This allows React to handle user interactions smoothly and avoid blocking the main thread.',
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
                            'React Fiber is the core architecture introduced in React 16.',
                            "It's a re-implementation of reconciliation with scheduling capabilities.",
                            '**Key features:**',
                            '**Work Splitting** - breaks reconciliation into small units (fibers), each representing a component/DOM element.',
                            '**Scheduling** - can pause/resume work, prioritize urgent updates over low-priority ones.',
                            '**Error Boundaries** - support for error handling during render.',
                            '**Concurrent Rendering** - foundation for Suspense and concurrent features.',
                            '**How it works:**',
                            '**Render phase (can be paused)** - walk fiber tree, compute changes.',
                            '**Commit phase (cannot be paused)** - apply changes to DOM.',
                            "**Benefits:** better responsiveness (input handling), animations stay smooth, large updates don't freeze UI.",
                            'Foundation for Suspense, concurrent rendering, and automatic batching.',
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
                        text: `// Fiber concept (simplified) - work units
// Before Fiber: process entire tree synchronously
reconcile(componentTree); // Blocks UI until done

// After Fiber: break into work units
const work = [
  { type: 'ComponentA', priority: 'high' },
  { type: 'ComponentB', priority: 'low' },
  { type: 'ComponentC', priority: 'high' }
];
// Process high priority first, defer low priority
// Can pause between work units to handle user input`,
                    },
                    {
                        type: 'highlight',
                        text: 'Fiber breaks reconciliation into prioritized work units. High-priority work (user input) is done first.',
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
                        text: `In Archer Review, Fiber allows the form to respond immediately to user input. Without Fiber, complex validation could freeze the UI. With Fiber, React prioritizes input handling over background updates.`,
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
                            "React Fiber is React's scheduling architecture.",
                            'It breaks reconciliation work into small units that can be paused and resumed.',
                            'This allows React to prioritize urgent work like user input over background updates.',
                            'Without Fiber, complex component trees could freeze the UI.',
                            'Fiber is the foundation for concurrent rendering and Suspense.',
                            'It makes React apps feel more responsive.',
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
                        items: ['Fiber', 'scheduling', 'priority', 'work units', 'concurrent rendering'],
                    },
                ],
            },
        ],
    }),
];
