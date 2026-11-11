import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';
import reduxDataFlowImg from '../../../../public/concept/redux/redux-data-flow.jpeg';
import reduxToolkitImg from '../../../../public/concept/redux/redux-toolkit.jpeg';
import reduxToolkitImg1 from '../../../../public/concept/redux/redux-toolkit-1.jpeg';

export const reduxConceptSet2: IQuestion[] = [
    createQuestion({
        id: 'redux-6',
        topicId: 'redux',
        title: 'Explain Redux Selector?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        what: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What – Selector na enna?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Selector na Redux Store-la irundhu specific state data-va select panni access pannura function.',
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
                        text: '**Why – Ethukku Selector?**',
                    },
                    {
                        type: 'bullets',
                        items: ['Component-ku thevaiyana data mattum access panna Selector use pannuvom.'],
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
                        type: 'heading',
                        text: 'Store-la',
                    },
                    {
                        type: 'code',
                        text: `const state = {
                            user: {
                                name: "Chandra",
                            },
                            cart: {
                                count: 3,
                            },
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Selector:**',
                    },
                    {
                        type: 'code',
                        text: `const selectUserName = (state) => state.user.name;`,
                    },
                    {
                        type: 'paragraph',
                        text: `Idhu username mattum return pannum.`,
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
                        text: `const username = selectUserName(store.getState());

                        console.log(username); // Chandra`,
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
                            'A Selector is a function used to access specific data from the Redux Store.',
                            'It helps components retrieve only the required state.',
                            'Selectors can also be used to derive or calculate values from the state.',
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
                            'Selector na Redux Store-la irundhu specific data-va access pannura function.',
                            'Components-ku thevaiyana state mattum retrieve panna help pannum.',
                            'State-la irundhu derived values calculate pannavum Selectors use pannalaam.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-7',
        topicId: 'redux',
        title: 'Explain Redux Data Flow?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Ippo ellaa concepts-um connect panni paarkkalaam.**',
                    },
                    {
                        type: 'image',
                        url: reduxDataFlowImg,
                        loading: 'eager',
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
                        text: '**What - Redux Data Flow na enna**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux-la state update aagura complete process-ku Redux Data Flow nu solluvom.',
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
                            'Application state eppadi update aaguthu nu understand pannavum debugging pannavum useful-ah irukkum.',
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
                        type: 'markdown',
                        items: [
                            {
                                title: 'React Component',
                                description: 'Button Click',
                            },
                            {
                                title: 'Dispatch Action',
                                description: 'INCREMENT',
                            },
                            {
                                title: 'Reducer',
                                description: 'Calculate new state',
                            },
                            {
                                title: 'Redux Store',
                                description: 'Updated state',
                            },
                            {
                                title: 'Selector',
                                description: 'Read updated count',
                            },
                            {
                                title: 'Component Re-render',
                                description: 'Display updated UI',
                            },
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
                        type: 'paragraph',
                        text: 'Shopping cart-la Add button click pannumbodhu:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Component `dispatch()` pannum.',
                            'Action cart/addItem trigger aagum.',
                            'Reducer new cart state calculate pannum.',
                            'Store updated state maintain pannum.',
                            'Selector updated cart count retrieve pannum.',
                            'Header component updated count display pannum.',
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
                            'Redux follows a predictable unidirectional data flow.',
                            'A component dispatches an action, the reducer processes the action and returns a new state, and the Store maintains the updated state.',
                            'Components subscribe to the Store and re-render when their selected state changes.',
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
                            'Redux predictable-ah unidirectional data flow follow pannum.',
                            'Component Action-a dispatch pannum. Reducer Action-a process panni new state return pannum.',
                            'Store updated state maintain pannum.',
                            'Components Store-la subscribe panni, avangaloda selected state change aagumbodhu re-render aagum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-8',
        topicId: 'redux',
        title: 'Explain Redux vs Redux Toolkit?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Redux basics already paathutom. Ippo Redux-la irundhu Redux Toolkit-ku yen move aaguranga, RTK enna simplify pannuthu nu understand pannuvom.',
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
                        text: '**What – Redux Toolkit na enna?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit (RTK) is the official and recommended way to write Redux logic in modern Redux applications.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Redux-la Store, Actions, Reducers create panni state manage pannuvom. Aana traditional Redux-la neraya boilerplate code write pannanum.',
                            'Indha unnecessary code-a reduce panni, Redux development easy-ah and maintainable-ah panna Redux Toolkit introduce pannanga.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxToolkitImg,
                        loading: 'eager',
                    },
                    {
                        type: 'paragraph',
                        text: '**Redux Toolkit use pannumbodhu:**',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Less boilerplate code.',
                            'Easy Store configuration.',
                            'Simple Reducer creation.',
                            'Built-in Immer support.',
                            'Better developer experience.',
                            'Redux DevTools integration.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: `**Important:** Redux Toolkit is not a replacement for Redux. It's the recommended way to write Redux applications.`,
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
                        text: '**Why – Ethukku Redux Toolkit use pannuvom?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Traditional Redux-la state update panna Actions, Action Types, Action Creators, Reducers separate-ah create panna vendiyirukkum.',
                            'Redux Toolkit-la `createSlice()` use pannina indha code ellam simplify pannalaam.',
                            '**Traditional Redux:** More boilerplate code, Manual action creators, Manual action types, Immutable updates manually, Manual Store setup',
                            '**Redux Toolkit:** Less boilerplate, Automatically generated, Automatically generated, Immer support, configureStore()',
                        ],
                    },
                ],
            },
        ],
        how: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How – Redux Toolkit eppadi work aaguthu?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit-la main-ah 2 important functions understand pannuvom:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`configureStore()` – Redux Store create and configure pannum.',
                            '`createSlice()` – State, Reducers, Actions ellathayum oru place-la define pannum.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxToolkitImg1,
                        loading: 'lazy',
                    },
                    {
                        type: 'paragraph',
                        text: '**Basic workflow:**',
                    },
                    {
                        type: 'code',
                        text: `React Component
                                ↓
                            useDispatch()
                                ↓
                            Slice Action
                                ↓
                            Reducer
                                ↓
                            Redux Store
                                ↓
                            useSelector()
                                ↓
                            Updated UI
                        `,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Important concept: Immer',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Traditional Redux-la existing state-a direct-ah modify panna koodadhu.',
                            'Redux Toolkit-la createSlice() use pannumbodhu:',
                        ],
                    },
                    {
                        type: 'code',
                        text: `state.count += 1;`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Indha madhiri write pannalaam.',
                            'Redux Toolkit-la createSlice() use pannumbodhu:',
                            'Idhu direct mutation madhiri therinjaalum, Redux Toolkit internally Immer use panni immutable state update handle pannum.',
                            '**Note:** Immer support createSlice and createReducer-la irukkum. Ordinary JavaScript objects or traditional Redux reducers-la automatic-ah apply aagadhu.',
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
                        text: 'Ippo traditional Redux vs Redux Toolkit code difference paarkkalaam.',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Traditional Redux',
                    },
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

                                default:
                                return state;
                            }
                        }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Indha code-la manual-ah action type and reducer logic write pannirukkom.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit',
                    },
                    {
                        type: 'code',
                        text: `import { createSlice } from "@reduxjs/toolkit";

                            const counterSlice = createSlice({
                            name: "counter",
                            initialState: { count: 0 },

                            reducers: {
                                increment: (state) => {
                                state.count += 1;
                                },
                            },
                            });

                            export const { increment } = counterSlice.actions;

                            export default counterSlice.reducer;`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Difference understand pannikko:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`createSlice()` state and reducers define pannum.',
                            '`increment` action automatically generate aagum.',
                            '`counterSlice.actions` action creators provide pannum.',
                            '`counterSlice.reducer` reducer function provide pannum.',
                            'Immer state update handle pannum.',
                        ],
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
                        text: 'Student Portal-la student dashboard state manage pannuradhukku Redux Toolkit use pannalaam.',
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'User login state.',
                            'Selected filters.',
                            'Sidebar open/close.',
                            'Cart items.',
                            'Selected course.',
                            'Shared application preferences.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit use pannina feature-wise state and reducers organize pannalaam.',
                    },
                    {
                        type: 'code',
                        text: `src/
                            ├── app/
                            │    └── store.ts
                            │
                            ├── features/
                            │    ├── auth/
                            │    │    └── authSlice.ts
                            │    │
                            │    ├── cart/
                            │    │    └── cartSlice.ts
                            │    │
                            │    └── dashboard/
                            │         └── dashboardSlice.ts
                            │
                            └── components/`,
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
                            'Redux Toolkit is the official recommended way to write Redux logic.',
                            'It simplifies Redux development by reducing boilerplate code.',
                            'It provides functions like configureStore and createSlice, automatically generates action creators, and uses Immer to simplify immutable state updates.',
                            'It makes Redux applications easier to maintain and develop.',
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
                            'Redux Toolkit na Redux logic write panna official-ah recommend pannura approach.',
                            'Idhu boilerplate code-a reduce panni Redux development-a easy-ah pannum.',
                            'configureStore and createSlice madhiri functions provide pannum. Action creators automatically generate pannum.',
                            'Immer use panni immutable state updates-a easy-ah handle pannum.',
                            'Idhanala Redux application develop pannuradhum maintain pannuradhum easier-ah irukkum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'redux-9',
        topicId: 'redux',
        title: 'Explain Redux Toolkit – Practical Implementation',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Intha lesson-ல் நாம் ஒரு Counter App build பண்ணுவோம். இதன் மூலம் Redux Toolkit complete flow புரியும்.',
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
                        text: '**What – Redux Toolkit Concept na enna?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit-ல் Redux state management implement பண்ண முக்கியமாக 4 things பயன்படுத்துவோம்:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'configureStore() – Redux Store create pannum.',
                            'createSlice() – State + Reducer + Actions create pannum.',
                            'Provider – Redux Store-ஐ React application-க்கு connect பண்ணும்.',
                            'useSelector() / useDispatch() – Component-ல் state read மற்றும் action dispatch பண்ணும்.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxToolkitImg,
                        loading: 'eager',
                    },
                    {
                        type: 'paragraph',
                        text: '**Redux Toolkit use pannumbodhu:**',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Less boilerplate code.',
                            'Easy Store configuration.',
                            'Simple Reducer creation.',
                            'Built-in Immer support.',
                            'Better developer experience.',
                            'Redux DevTools integration.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: `**Important:** Redux Toolkit is not a replacement for Redux. It's the recommended way to write Redux applications.`,
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
                        text: '**Why – Ethukku Redux Toolkit use pannuvom?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Traditional Redux-la state update panna Actions, Action Types, Action Creators, Reducers separate-ah create panna vendiyirukkum.',
                            'Redux Toolkit-la `createSlice()` use pannina indha code ellam simplify pannalaam.',
                            '**Traditional Redux:** More boilerplate code, Manual action creators, Manual action types, Immutable updates manually, Manual Store setup',
                            '**Redux Toolkit:** Less boilerplate, Automatically generated, Automatically generated, Immer support, configureStore()',
                        ],
                    },
                ],
            },
        ],
        how: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How – Redux Toolkit eppadi work aaguthu?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit-la main-ah 2 important functions understand pannuvom:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`configureStore()` – Redux Store create and configure pannum.',
                            '`createSlice()` – State, Reducers, Actions ellathayum oru place-la define pannum.',
                        ],
                    },
                    {
                        type: 'image',
                        url: reduxToolkitImg1,
                        loading: 'lazy',
                    },
                    {
                        type: 'paragraph',
                        text: '**Basic workflow:**',
                    },
                    {
                        type: 'code',
                        text: `React Component
                                ↓
                            useDispatch()
                                ↓
                            Slice Action
                                ↓
                            Reducer
                                ↓
                            Redux Store
                                ↓
                            useSelector()
                                ↓
                            Updated UI
                        `,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Important concept: Immer',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Traditional Redux-la existing state-a direct-ah modify panna koodadhu.',
                            'Redux Toolkit-la createSlice() use pannumbodhu:',
                        ],
                    },
                    {
                        type: 'code',
                        text: `state.count += 1;`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Indha madhiri write pannalaam.',
                            'Redux Toolkit-la createSlice() use pannumbodhu:',
                            'Idhu direct mutation madhiri therinjaalum, Redux Toolkit internally Immer use panni immutable state update handle pannum.',
                            '**Note:** Immer support createSlice and createReducer-la irukkum. Ordinary JavaScript objects or traditional Redux reducers-la automatic-ah apply aagadhu.',
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
                        text: 'Ippo traditional Redux vs Redux Toolkit code difference paarkkalaam.',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Traditional Redux',
                    },
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

                                default:
                                return state;
                            }
                        }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Indha code-la manual-ah action type and reducer logic write pannirukkom.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit',
                    },
                    {
                        type: 'code',
                        text: `import { createSlice } from "@reduxjs/toolkit";

                            const counterSlice = createSlice({
                            name: "counter",
                            initialState: { count: 0 },

                            reducers: {
                                increment: (state) => {
                                state.count += 1;
                                },
                            },
                            });

                            export const { increment } = counterSlice.actions;

                            export default counterSlice.reducer;`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Difference understand pannikko:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`createSlice()` state and reducers define pannum.',
                            '`increment` action automatically generate aagum.',
                            '`counterSlice.actions` action creators provide pannum.',
                            '`counterSlice.reducer` reducer function provide pannum.',
                            'Immer state update handle pannum.',
                        ],
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
                        text: 'Student Portal-la student dashboard state manage pannuradhukku Redux Toolkit use pannalaam.',
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'User login state.',
                            'Selected filters.',
                            'Sidebar open/close.',
                            'Cart items.',
                            'Selected course.',
                            'Shared application preferences.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Redux Toolkit use pannina feature-wise state and reducers organize pannalaam.',
                    },
                    {
                        type: 'code',
                        text: `src/
                            ├── app/
                            │    └── store.ts
                            │
                            ├── features/
                            │    ├── auth/
                            │    │    └── authSlice.ts
                            │    │
                            │    ├── cart/
                            │    │    └── cartSlice.ts
                            │    │
                            │    └── dashboard/
                            │         └── dashboardSlice.ts
                            │
                            └── components/`,
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
                            'Redux Toolkit is the official recommended way to write Redux logic.',
                            'It simplifies Redux development by reducing boilerplate code.',
                            'It provides functions like configureStore and createSlice, automatically generates action creators, and uses Immer to simplify immutable state updates.',
                            'It makes Redux applications easier to maintain and develop.',
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
                            'Redux Toolkit na Redux logic write panna official-ah recommend pannura approach.',
                            'Idhu boilerplate code-a reduce panni Redux development-a easy-ah pannum.',
                            'configureStore and createSlice madhiri functions provide pannum. Action creators automatically generate pannum.',
                            'Immer use panni immutable state updates-a easy-ah handle pannum.',
                            'Idhanala Redux application develop pannuradhum maintain pannuradhum easier-ah irukkum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
