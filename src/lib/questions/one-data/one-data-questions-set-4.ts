import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'one-india-16',
        topicId: 'one-india',
        title: 'What is useEffect?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'useEffect is a React hook used to synchronize a component with external systems.',
                    },
                    {
                        type: 'heading',
                        text: 'Examples',
                    },
                    {
                        type: 'bullets',
                        items: ['API requests.', 'Event listeners.', 'Timers.', 'Subscriptions.'],
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
                            'Effects run after a commit.',
                            'Cleanup runs before the effect runs again and when the component unmounts.',
                            'In development Strict Mode, React may run an extra setup and cleanup cycle.',
                            'Avoid using effects for values that can be calculated during rendering.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'React is useful for building scalable and maintainable frontend applications.',
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
                        text: `useEffect(() => {
                            const timer = setInterval(() => {
                                console.log("Running");
                            }, 1000);

                            return () => clearInterval(timer);
                            }, []);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, we start a timer and clean it up when the component is removed.',
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
                        text: `In an application, I can use useEffect to subscribe to browser events, synchronize external data and clean up event listeners when necessary.`,
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
                            'useEffect is a React hook used to synchronize a component with external systems.',
                            'I commonly use it for event listeners, subscriptions, timers, and other side effects.',
                            'It accepts a callback and an optional dependency array.',
                            'The effect runs after a commit, and its cleanup function helps prevent memory leaks and unwanted subscriptions.',
                            'I also make sure to include the correct dependencies to avoid unexpected behavior.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-17',
        topicId: 'one-india',
        title: 'What is the difference between useMemo and useCallback?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Both are used for performance optimization.',
                    },
                    {
                        type: 'bullets',
                        items: ['useMemo remembers a calculated value.', 'useCallback remembers a function reference.'],
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
                            'Both depend on dependency arrays.',
                            'They help avoid unnecessary recalculation or function recreation.',
                            'They are useful when dealing with expensive calculations or memoized child components.',
                            'They should not be used everywhere because memoization also has a cost.',
                            'React Compiler may automatically optimize some cases in supported setups.',
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
                        text: `const total = useMemo(() => calculateTotal(items), [items]);

                                const handleClick = useCallback(() => {
                                console.log("Clicked");
                                }, []);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The first memoizes a calculated value. The second memoizes a function.',
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
                        text: `In a large course listing page, I can use useMemo to cache filtered course data and useCallback to maintain a stable event handler passed to a memoized child component.`,
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
                            'The main difference between useMemo and useCallback is what they memoize.',
                            'useMemo memoizes the result of a calculation, while useCallback memoizes a function reference.',
                            'I use useMemo for expensive calculations like filtering or sorting large datasets.',
                            'I use useCallback when I need a stable function reference, especially when passing callbacks to memoized child components.',
                            'I use them only when there is a real performance benefit.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-18',
        topicId: 'one-india',
        title: 'What is React.memo?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'React.memo is a higher-order component that helps prevent unnecessary re-renders of a component when its props have not changed.',
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
                            'It performs a shallow comparison of props by default.',
                            'If props are equal, React can skip rendering that component.',
                            'New object and function references can cause re-renders.',
                            'It works well with stable props and callbacks.',
                            'It is a performance optimization, not a guarantee that a component will never re-render.',
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
                        text: `const UserCard = React.memo(({ name }) => {
                                return <h2>{name}</h2>;
                                });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'If the name prop remains unchanged, React can skip an unnecessary re-render of this component.',
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
                        text: `In a page containing many reusable course cards, I can use React.memo to avoid unnecessary child renders when unrelated parent state changes, provided the props remain stable.`,
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
                            'React.memo is a higher-order component used to optimize functional components.',
                            'It performs a shallow comparison of the previous and next props.',
                            'If the props have not changed, React can skip an unnecessary re-render.',
                            'I use React.memo for components that receive stable props and are expensive to render.',
                            'I combine it with useMemo and useCallback when required, but I always check whether the optimization provides a real benefit.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-19',
        topicId: 'one-india',
        title: 'What is Virtual DOM and Reconciliation?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Virtual DOM is a lightweight JavaScript representation of the actual DOM.',
                            'When state changes, React creates an updated UI representation, compares it with the previous one and updates the required DOM changes.',
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
                            'React renders the component tree.',
                            'Reconciliation determines what changed.',
                            'React uses keys to identify list items.',
                            'React commits necessary DOM updates.',
                            'Reconciliation does not mean React always updates only one DOM node; the actual updates depend on the changes.',
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
                        text: `const [name, setName] = useState("John");

                            return <h1>{name}</h1>;`,
                    },
                    {
                        type: 'paragraph',
                        text: 'When name changes, React updates the UI to display the new value.',
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
                        text: `In a course listing page, when a user changes a filter, React updates the UI based on the new data without requiring us to manually manipulate the DOM.`,
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
                            'The Virtual DOM is a lightweight JavaScript representation of the actual DOM.',
                            'When state or props change, React renders the updated component tree and performs reconciliation to identify the required changes.',
                            'React then commits the necessary updates to the actual DOM.',
                            'Keys help React identify list items efficiently.',
                            'This approach helps us build declarative and maintainable user interfaces.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-20',
        topicId: 'one-india',
        title: 'What is the React component lifecycle?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'react-fundamentals',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Component lifecycle means the different stages a component goes through.',
                    },
                    {
                        type: 'paragraph',
                        text: 'Three main stages:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Mounting** – Component is created and added to the UI.',
                            '**Updating** – Component updates when props or state change.',
                            '**Unmounting** – Component is removed from the UI.',
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
                        type: 'paragraph',
                        text: 'In modern React, functional components use hooks to handle lifecycle-related synchronization.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mounting: Component first appears.',
                            'Updating: Component re-renders due to changes.',
                            'Unmounting: Cleanup and removal.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Class components have lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.',
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
                        text: `useEffect(() => {
                            console.log("Component mounted");

                            return () => {
                                console.log("Component cleanup");
                            };
                            }, []);`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This demonstrates setup and cleanup for an effect.',
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
                        text: `I use lifecycle-related cleanup to remove event listeners, clear timers, and unsubscribe from external resources when components are no longer needed.`,
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
                            'The React component lifecycle has three main phases: mounting, updating, and unmounting.',
                            'Mounting happens when a component is added to the UI.',
                            'Updating happens when its props or state change.',
                            'Unmounting happens when the component is removed.',
                            'In functional components, I use hooks like useEffect to synchronize with external systems and perform necessary cleanup.',
                            'This helps maintain predictable component behavior.',
                        ],
                    },
                ],
            },
        ],
    }),
];
