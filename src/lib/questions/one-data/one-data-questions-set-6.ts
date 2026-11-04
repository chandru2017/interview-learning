import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet6: IQuestion[] = [
    createQuestion({
        id: 'one-india-26',
        topicId: 'one-india',
        title: 'What is the difference between any and unknown?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Both `any` and `unknown` can accept any type of value.',
                            'But `unknown` is safer because we must check its type before using it.',
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
                            '`any` use pannina TypeScript type checking almost disable aagidum.',
                            '`unknown`-la `any` type value assign pannalaam. Aana adha use panna munnaadi type check pannanum.',
                            'Adhanaala `unknown` safer option.',
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
                            '`any` bypasses type checking.',
                            '`unknown` accepts all values but requires narrowing.',
                            '`unknown` is safer for uncertain API data or external inputs.',
                            'Prefer `unknown` when the data type is not known.',
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
                        text: `let value: unknown = "React";

    if (typeof value === "string") {
    console.log(value.toUpperCase());
    }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, we check the type before using string-specific operations.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'API responses, external libraries, or dynamic input data may have uncertain types.',
                            'I prefer unknown and validate the data before using it.',
                        ],
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
                            'Both `any` and `unknown` can accept values of any type.',
                            'The difference is that `any` disables type checking, while `unknown` requires type checking before accessing its properties or methods.',
                            '`unknown` is safer because it forces us to validate the data.',
                            'I prefer `unknown` when working with uncertain data because it helps maintain type safety.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-27',
        topicId: 'one-india',
        title: 'What are Utility Types in TypeScript?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Utility Types are built-in TypeScript types that help us modify existing types without creating everything from scratch.',
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
                            'Already define pannirukkura interface or type-ai modify panni reuse panna Utility Types use pannuvom.',
                            'Example: Oru `User` interface irukku. Adhula irukkura ellaa properties-um optional-ah venumna `Partial<User>` use pannalaam.',
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
                        text: '**Important Utility Types:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Partial<T>**: All properties optional',
                            '**Required<T>**: All properties required',
                            '**Pick<T, K>**: Selected properties',
                            '**Omit<T, K>**: Exclude selected properties',
                            '**Readonly<T>**: Properties cannot be reassigned',
                            '**Record<K, T>**: Object type using keys and values',
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
                        text: `interface User {
    id: number;
    name: string;
    email: string;
    }

    type UserUpdate = Partial<User>;`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Now all UserUpdate properties are optional.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In a frontend application, I can use Partial<User> for update forms, Pick<User, "id" | "name"> for a compact user display, and Omit<User, "id"> for creating a new user.',
                        ],
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
                            'Utility Types are built-in TypeScript types that help us transform existing types.',
                            'Some common examples are Partial, Required, Pick, Omit, Readonly, and Record.',
                            'For example, Partial makes all properties optional, while Pick selects specific properties.',
                            'I use Utility Types to reduce duplication and create reusable type definitions in frontend applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-28',
        topicId: 'one-india',
        title: 'How do you define Props in React using TypeScript?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'typescript',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: ['We define the expected data types of component props using `type` or `interface`.'],
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
                            'React component-ku parent component-lendhu data pass pannumbodhu, andha props enna type data accept pannum nu define pannuvom.',
                            'Idhunaala wrong type pass panna development time-la error identify panna mudiyum.',
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
                            'Props types define the component contract.',
                            'They improve autocomplete and developer experience.',
                            'They prevent invalid prop values.',
                            'Optional props can be marked using ?.',
                            'Event handlers and children can also be typed.',
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
                        text: `interface ButtonProps {
                            label: string;
                            disabled?: boolean;
                            }

                            const Button = ({ label, disabled }: ButtonProps) => {
                            return <button disabled={disabled}>{label}</button>;
                            };`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In Archer Review, I can define reusable component props for buttons, course cards, modals, and form components.',
                            'This ensures consistent usage across the application.',
                        ],
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
                            'In React with TypeScript, I define component props using `type` or `interface`.',
                            'This helps specify the expected data types and required or optional properties.',
                            'It improves type safety, autocomplete, and maintainability.',
                            'I use typed props for reusable components like buttons, cards, forms, and modals.',
                            'This ensures components are used consistently across the application.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-29',
        topicId: 'one-india',
        title: 'What is TanStack Query, and why do we use it?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'tanstack-query',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'TanStack Query is a library used to manage server state in frontend applications.',
                            'It helps fetch, cache, synchronize, and update API data.',
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
                            'Frontend application-la backend-lendhu API data fetch pannuvom.',
                            'Indha data manage panna TanStack Query use pannuvom.',
                            'Normal-ah API fetch pannumbodhu loading, error, data state ellathayum manually manage pannanum.',
                            'TanStack Query use pannina fetching, caching, refetching, loading and error states handle panna easy-ah irukkum.',
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
                        text: 'TanStack Query provides:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Server-state management',
                            'Automatic caching',
                            'Background refetching',
                            'Query invalidation',
                            'Loading and error states',
                            'Retry mechanisms',
                            'Pagination and infinite queries',
                            'Mutation handling',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'It reduces boilerplate and improves data synchronization.',
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
                        text: `const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This fetches users and manages the query state.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In a learning platform, I can use TanStack Query to fetch course lists, student details, and learning progress.',
                            'It helps cache data and avoid unnecessary API requests.',
                        ],
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
                            'TanStack Query is a library used to manage server state in frontend applications.',
                            'It helps with API data fetching, caching, background refetching, and loading and error states.',
                            'It reduces the need to manually manage API-related state.',
                            'I use TanStack Query to fetch and manage server data efficiently and improve the user experience through caching and synchronization.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-30',
        topicId: 'one-india',
        title: 'What are useQuery, queryKey, and queryFn?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'tanstack-query',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**useQuery** – Fetches and manages API data.',
                            '**queryKey** – Identifies the query.',
                            '**queryFn** – Function that fetches the data.',
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
                            'useQuery API data fetch panna use pannuvom.',
                            'queryKey-la query-ku unique identification kuduppom. Idhu cache-la data identify panna help pannum.',
                            'queryFn actual API request execute pannura function.',
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
                            'Query keys must be serializable.',
                            'Query keys identify cached data.',
                            'Query keys should include variables used by the query function.',
                            'Query functions should return data or throw an error.',
                            'Changing a query key can trigger a new query.',
                            'Query keys support cache organization and invalidation.',
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
                        text: `const fetchUsers = async () => {
    const response = await fetch("/api/users");
    if (!response.ok) throw new Error("Failed");
    return response.json();
    };

    const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    });`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In a course listing page, I can use queryKey: ["courses", category] so each category\'s course data is cached separately.',
                        ],
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
                            'useQuery is a TanStack Query hook used to fetch and manage server data.',
                            'queryKey uniquely identifies a query and helps manage its cache.',
                            'queryFn is the function that performs the API request and returns the data.',
                            'When query parameters change, I include them in the queryKey so the correct data can be fetched and cached.',
                            'This makes API data management more predictable and efficient.',
                        ],
                    },
                ],
            },
        ],
    }),
];
