import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const zustandConceptSet1: IQuestion[] = [
    createQuestion({
        id: 'zustand-1',
        topicId: 'zustand',
        title: 'Explain Zustand State Management?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Zustand na enna nu oru short overview-oda paarkkalaam.**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Zustand is a lightweight state management library for React. React application-la multiple components share panna vendiya state irundha, Zustand use panni centralized store create pannalam.',
                    },
                ],
            },
        ],
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What – Concept enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Zustand is a lightweight state management library for React.',
                            'React application-la multiple components share panna vendiya state irundha, Zustand use panni centralized store create pannalam.',
                            'Redux Toolkit madhiri centralized state management provide pannum. But Zustand comparatively simple and less boilerplate code use pannum.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'User authentication state',
                            'Shopping cart',
                            'Theme preference',
                            'Sidebar open/close',
                            'Shared application state',
                        ],
                    },
                ],
            },
        ],
        why: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why – Ethukku idhu important?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Less boilerplate:** Redux Toolkit vida setup and code simple.',
                            '**Easy to learn:** Store create pannradhu straightforward.',
                            '**No Provider required:** Default Zustand store use panna React Provider thevai illa.',
                            '**Selective state subscription:** Component-ku thevaiyana state mattum subscribe pannalam.',
                            '**Easy integration:** Existing React application-la easily integrate pannalam.',
                        ],
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'Redux Toolkit vs Zustand',
                            toolA: 'Redux Toolkit',
                            toolB: 'Zustand',
                            comparison: [
                                {
                                    toolA: 'configureStore()',
                                    toolB: 'create()',
                                },
                                {
                                    toolA: 'createSlice()',
                                    toolB: 'Store state + actions',
                                },
                                {
                                    toolA: 'Provider required',
                                    toolB: 'Default setup-la Provider not required',
                                },
                                {
                                    toolA: 'More structured',
                                    toolB: 'Simpler and lightweight',
                                },
                                {
                                    toolA: 'Good for complex workflows',
                                    toolB: 'Good for simple to medium shared state',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
        how: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How – Eppadi work aaguthu?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Zustand workflow:',
                    },
                    {
                        type: 'markdown',
                        items: [
                            {
                                title: 'Zustand Store',
                                description: 'State + Actions',
                            },
                            {
                                title: 'React Component',
                                description: 'Read state + Call action',
                            },
                            {
                                title: 'Store Update',
                                description: 'set() updates state',
                            },
                            {
                                title: 'UI Re-render',
                                description: 'Subscribed component updates',
                            },
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Main functions:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            '`create()` – Zustand store create pannum.',
                            '`set()` – Store state update pannum.',
                            '`get()` – Current store state read pannum.',
                            '`useStore()` – React component-la state access panna use pannuvom.',
                        ],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 1: Install packages**',
                    },
                    {
                        type: 'code',
                        text: `npm install zustand`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 2: Create Store**',
                    },
                    {
                        type: 'paragraph',
                        text: `src/store/counterStore.ts`,
                    },
                    {
                        type: 'code',
                        text: `import { create } from "zustand";

                            type CounterStore = {
                            count: number;
                            increment: () => void;
                            decrement: () => void;
                            };

                            export const useCounterStore = create<CounterStore>(
                            (set) => ({
                                count: 0,

                                increment: () =>
                                set((state) => ({
                                    count: state.count + 1,
                                })),

                                decrement: () =>
                                set((state) => ({
                                    count: state.count - 1,
                                })),
                            })
                        );`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Explanation:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`create()` → Store create pannum.',
                            '`count` → Store state.',
                            '`increment, decrement` → Store actions.',
                            '`set()` → State update pannum.',
                            '`state.count` → Current state value.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 3: Use Store in Component**',
                    },
                    {
                        type: 'code',
                        text: `import { useCounterStore } from "./counterStore";

                            const Counter = () => {
                            const count = useCounterStore(
                                (state) => state.count
                            );

                            const increment = useCounterStore(
                                (state) => state.increment
                            );

                            return (
                                <>
                                <h2>{count}</h2>

                                <button onClick={increment}>
                                    Increment
                                </button>
                                </>
                            );
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Important:** `useCounterStore()` selector use pannumbodhu component subscribe aagum. Selected state change aana component re-render aagum.',
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
                            'Zustand is a lightweight state management library for React.',
                            'It allows us to create a centralized store using the create function.',
                            'We can manage state and actions inside the store and access them directly from React components using selectors. Zustand requires less boilerplate and does not need a Provider in its default setup.',
                            'I would use Zustand for simple to medium shared application state.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Zustand is a lightweight state management library for React.',
                            'Idha use panni centralized store create pannalam. create() use panni state and actions define pannuvom.',
                            'React components-la selectors use panni state access pannalam.',
                            'Redux Toolkit compare pannumbodhu Zustand-la boilerplate code kammiya irukkum and default setup-la Provider thevai illa.',
                            'Simple to medium shared application state manage panna Zustand useful-ah irukkum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
