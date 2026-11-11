import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';
import reduxPropsDrilling from '../../../../public/concept/redux/redux-workflow.jpeg';
import reduxDataFlowImg from '../../../../public/concept/redux/redux-data-flow.jpeg';

export const reduxConceptSet1: IQuestion[] = [
    createQuestion({
        id: 'redux-1',
        topicId: 'redux',
        title: 'What is Redux?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'What – Redux na enna?',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'First oru simple React application example eduthuppom.',
                            'Imagine pannikko, namma application-la:',
                        ],
                    },
                    {
                        type: 'sub-items',
                        items: ['Header', 'Login Page', 'Dashboard', 'Profile Page', 'Sidebar'],
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ippo user login pannumbodhu, avaroda username and user details different components-la display pannanum.',
                            'Normally React-la parent component-la irundhu child components-ku Props use panni data pass pannuvom.',
                            'Aana application perusa aagumbodhu, same data-va multiple components-ku pass panna vendiyirukkum. Idha Props Drilling nu solluvom.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxPropsDrilling,
                        loading: 'eager',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Indha problem solve panna Redux use pannalaam.',
                            'Redux is a predictable state management library used to manage application state in a centralized store.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Simple-ah Thanglish-la:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Redux na namma React application-la irukkura common data-va oru centralized place-la store panni, different components-la irundhu access and update panna help pannura State Management Library.',
                            'Example:Namma application-la Redux Store-la user details store pannirukkom.',
                        ],
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Header component username access pannum.',
                            'Dashboard component user details access pannum.',
                            '- Profile component user information access pannum.',
                        ],
                    },
                    {
                        type: 'bullets',
                        items: ['Ovvoru component-kum props pass panna thevai illa.'],
                    },
                ],
            },
        ],
        why: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'React application-la useState irukku. Appo ethukku Redux thevai?',
                            'useState mostly component-level state manage panna use pannuvom.',
                            'Aana multiple components-ku same state share pannanum na centralized state management useful-ah irukkum.',
                            'Redux use pannurathoda main benefits:',
                        ],
                    },
                    {
                        type: 'sub-items',
                        items: [
                            '**Centralized State:** Application data-va single Store-la maintain pannalaam.',
                            '**Props Drilling:** Multiple component levels-la props pass panra necessity reduce pannalaam.',
                            '**Predictable Updates:** State changes structured flow-la nadakkum.',
                            '**Maintainability:** Large applications-la state management organize pannalaam.',
                            '**Debugging:** Redux DevTools use panni state changes trace pannalaam.',
                        ],
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Important: Ella state-um Redux-la store panna vendiyathu illa. Local component state-ku useState podhum.',
                        ],
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
                        text: 'Redux-la main-ah 4 important concepts irukku:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Store:** Application state maintain pannura central place.',
                            '**Action:** Enna change nadakkanum nu describe pannura object.',
                            '**Reducer:** Current state and action base panni next state calculate pannura function.',
                            '**Dispatch:** Action-a Store-ku send pannura method.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxDataFlowImg,
                        loading: 'eager',
                    },
                    {
                        type: 'paragraph',
                        text: 'Example: Shopping Cart.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'User Add to Cart button click pannuranga.',
                            'Component `dispatch()` use panni action send pannum.',
                            'Reducer action-a receive pannum.',
                            'Reducer state update pannum.',
                            'Store updated state maintain pannum.',
                            'Connected component updated data-va display pannum.',
                        ],
                    },
                    {
                        type: 'bullets',
                        items: ['Idhu dhaan Redux basic workflow.'],
                    },
                ],
            },
        ],
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Ippo Redux basic concept puriyura madhiri oru simple counter example paarkkalaam.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 1: Initial State**',
                    },
                    {
                        type: 'code',
                        text: `const initialState = {
                            count: 0,
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 2: Reducer**',
                    },
                    {
                        type: 'code',
                        text: `function counterReducer(state = initialState, action) {
                            switch (action.type) {
                                case "INCREMENT":
                                return {
                                    ...state,
                                    count: state.count + 1,
                                };

                                case "DECREMENT":
                                return {
                                    ...state,
                                    count: state.count - 1,
                                };

                                default:
                                return state;
                            }
                        }`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 3: Dispatch Action**',
                    },
                    {
                        type: 'code',
                        text: `dispatch({ type: "INCREMENT" });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Indha action dispatch pannumbodhu reducer-ku `INCREMENT` action pogum. Reducer count-a 1 increase panni updated state return pannum.',
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
                        text: 'Imagine pannikko Archer Review student portal.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Student login pannumbodhu:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Header-la student name display pannanum.',
                            'Dashboard-la student information display pannanum.',
                            'Profile-la personal details display pannanum.',
                            'Sidebar-la user role base panni menu show pannanum.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Indha common application state-a Redux Store-la maintain pannalaam.',
                    },
                    {
                        type: 'paragraph',
                        text: 'Different components `useSelector` use panni data access pannalaam. `useDispatch` use panni state update actions dispatch pannalaam.',
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
                            'Redux is a state management library used to manage application state in a centralized store.',
                            'It helps different components access and update shared data without passing props through multiple component levels.',
                            'Redux follows a predictable data flow using Store, Actions, Reducers, and Dispatch.',
                            'It is useful for managing complex shared state in large React applications.',
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
                            'Redux என்பது application-oda state manage panna use pannura oru State Management Library.',
                            'Idhu application-oda shared data-va oru centralized Store-la maintain pannum.',
                            'Multiple components-la irundhu Props pass pannama shared data-va access and update pannalaam.',
                            'Redux, Store, Actions, Reducers, and Dispatch use panni predictable data flow follow pannum.',
                            'Large React applications-la complex shared state manage panna Redux useful-ah irukkum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-2',
        topicId: 'redux',
        title: 'Explain Redux Store?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'What – Store na enna?',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Store na namma application-oda complete Redux state maintain pannura centralized storage place.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Example: Student Portal**',
                    },
                    {
                        type: 'code',
                        text: `const state = {
                            user: {
                                name: "Chandra",
                                role: "student"
                            },
                            cart: {
                                items: [],
                                total: 0
                            },
                            theme: "dark"
                        };`,
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
                        text: '**Why – Ethukku Store?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Shared data centralized-ah maintain pannalaam.',
                            'Multiple components same data access pannalaam.',
                            'State updates predictable-ah irukkum.',
                            'Debugging easier-ah irukkum.',
                        ],
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
                        text: '**How – Eppadi work aagum?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component Store-la irukkura data-va direct-ah modify panna mudiyadhu.',
                            'Action dispatch pannanum → Reducer process pannanum → Store updated state maintain pannum.',
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
                        text: `import { createStore } from "redux";

                            const initialState = {
                            count: 0,
                            };

                            function reducer(state = initialState, action) {
                            if (action.type === "INCREMENT") {
                                return { ...state, count: state.count + 1 };
                            }
                            return state;
                            }

                            const store = createStore(reducer);

                            console.log(store.getState());`,
                    },
                    {
                        type: 'paragraph',
                        text: '`store.getState()` current state return pannum.',
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
                            'Redux Store is a centralized container that holds the application state.',
                            'It provides a single source of truth and allows components to access shared data.',
                            'State updates happen through dispatched actions and reducers.',
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
                            'Redux Store na application-oda state-va centralized-ah maintain pannura container.',
                            'Idhu application-ku single source of truth provide pannum.',
                            'Components shared data-va Store-la irundhu access pannalaam.',
                            'State updates Actions and Reducers moolama nadakkum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-3',
        topicId: 'redux',
        title: 'Explain Redux Action?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What – Action na enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Action na application state-la enna change nadakkanum nu describe pannura JavaScript object.',
                            'Action-ku mandatory-ah type property irukkanum.',
                        ],
                    },
                    {
                        type: 'code',
                        text: `const action = {
                            type: "INCREMENT",
                        };`,
                    },
                    {
                        type: 'bullets',
                        items: ['Idhu count increase pannanum nu describe pannuthu.'],
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
                        text: '**Why – Ethukku Action?**',
                    },
                    {
                        type: 'bullets',
                        items: ['State-la enna change nadakkanum nu Reducer-ku communicate panna Action use pannuvom.'],
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
                        text: '**How – Eppadi work aagum?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component action create pannum. `dispatch()` use panni Store-ku send pannum. Reducer action type base panni state update pannum.',
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
                        text: `const incrementAction = {
                            type: "INCREMENT",
                            };

                            const addToCartAction = {
                            type: "cart/addItem",
                            payload: {
                                id: 1,
                                name: "Book",
                            },
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: 'payload use panni additional data action-la pass pannalaam.',
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
                            'An Action is a JavaScript object that describes what change should happen in the application state.',
                            'It contains a type property and can also contain additional data through payload.',
                            'Actions are dispatched to the Store and processed by reducers.',
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
                            'Action na application state-la enna change nadakkanum nu describe pannura JavaScript object.',
                            'Idhula type property irukkum.',
                            'Additional data-va payload moolama pass pannalaam.',
                            'Action-a Store-ku dispatch pannumbodhu Reducer process panni state update pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-4',
        topicId: 'redux',
        title: 'Explain Redux Reducer?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What – Reducer na enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reducer na current state and action receive panni, next state eppadi irukkanum nu decide pannura function.',
                            'Reducer = Current State + Action → New State',
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
                        text: '**Why – Ethukku Reducer?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Application state updates consistent-ah and predictable-ah irukka Reducer use pannuvom.',
                        ],
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
                        text: '**How – Eppadi work aagum?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Reducer-ku two arguments irukkum:'],
                    },
                    {
                        type: 'sub-items',
                        items: ['`state` – Current state.', '`action` – Dispatched action.'],
                    },
                    {
                        type: 'bullets',
                        items: ['Reducer current state-a process panni new state return pannum.'],
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
                        text: `const initialState = {
                            count: 0,
                            };

                            function counterReducer(state = initialState, action) {
                            switch (action.type) {
                                case "INCREMENT":
                                return {
                                    ...state,
                                    count: state.count + 1,
                                };

                                case "DECREMENT":
                                return {
                                    ...state,
                                    count: state.count - 1,
                                };

                                default:
                                return state;
                            }
                        }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Important: Traditional Redux Reducers-la existing state-a directly mutate panna koodadhu. New state return pannanum.',
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
                            'A Reducer is a pure function that takes the current state and an action and returns a new state.',
                            'It contains the logic for updating the application state.',
                            'Traditional Redux reducers should not directly mutate the existing state.',
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
                            'Reducer na current state and action receive panni new state return pannura pure function.',
                            'Application state eppadi update aaganum nu logic Reducer-la irukkum.',
                            'Traditional Redux Reducers existing state-a direct-ah mutate panna koodadhu.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-5',
        topicId: 'redux',
        title: 'Explain Redux Dispatch?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What – Dispatch na enna?**',
                    },
                    {
                        type: 'bullets',
                        items: ['`dispatch()` na Action-a Redux Store-ku send pannura method.'],
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
                        text: '**Why – Ethukku Dispatch?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Application state update panna `Action`-a trigger pannanum. Adhukku `Dispatch` use pannuvom.',
                        ],
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
                        text: '**How – Eppadi work aagum?**',
                    },
                    {
                        type: 'code',
                        text: `Component
                            ↓
                            dispatch(action)
                            ↓
                            Reducer
                            ↓
                            Updated Store
                            ↓
                            Component Update`,
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
                        text: `store.dispatch({
                            type: "INCREMENT",
                        });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Indha code INCREMENT action-a dispatch pannum.',
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
                            'Dispatch is a method used to send an action to the Redux Store.',
                            'When an action is dispatched, the reducer processes it and returns the updated state.',
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
                            'Dispatch na Action-a Redux Store-ku send pannura method.',
                            'Action dispatch pannumbodhu Reducer adha process panni updated state return pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
