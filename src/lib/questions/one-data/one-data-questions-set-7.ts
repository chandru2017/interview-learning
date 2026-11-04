import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet7: IQuestion[] = [
    createQuestion({
        id: 'one-india-31',
        topicId: 'one-india',
        title: 'What is the difference between isLoading, isFetching, and isError?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'very-high',
        keyTopic: 'tanstack-query',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            '**isLoading** – No data is available yet and the query is loading.',
                            '**isFetching** – A query request is currently running.',
                            '**isError** – The query failed.',
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
                            'First time API call pannumbodhu data illaama loading state irukkum. Adhu `isLoading`.',
                            'Already data irundhaalum background-la API refetch aagalam. Appo `isFetching` true aagum.',
                            'API request fail aana isError true aagum.',
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
                        text: 'In TanStack Query v5:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`isLoading` is derived from `isPending` && `isFetching`.',
                            '`isFetching` indicates an active fetch.',
                            '`isError` indicates an error state.',
                            'A query may be fetching while existing data remains available.',
                            '`isPending` and `isLoading` are not identical.',
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
                        text: `const { data, isLoading, isFetching, isError } =
    useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'We can use these states to show loaders, errors, and existing data.',
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
                            'In a course page, I can show a full-page loader during the initial request and a smaller refresh indicator during background fetching.',
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
                            '`isLoading` indicates that the query is loading for the first time without available data.',
                            '`isFetching` indicates that a query request is currently running, including background refetching.',
                            '`isError` indicates that the query has failed.',
                            'I use these states to show appropriate loading indicators, error messages, and existing data in the UI.',
                            'This helps provide a better user experience during API operations.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-32',
        topicId: 'one-india',
        title: 'What is caching in TanStack Query?',
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
                            'Caching means storing previously fetched API data so it can be reused instead of fetching it again immediately.',
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
                            'Oru API data already fetch pannirundha, adha cache-la store pannalaam.',
                            'User same page-ku thirumba varumbodhu cached data immediately show panna mudiyum.',
                            'Adhukku appuram background-la fresh data fetch pannalaam.',
                            'Idhunaala user experience improve aagum and unnecessary API requests reduce aagum.',
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
                            'Query cache stores data using query keys.',
                            'Cached data can be reused across components.',
                            'Stale data can trigger background refetching.',
                            'Query invalidation marks data as stale.',
                            'Cache lifecycle is influenced by staleTime and gcTime.',
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
                        text: `useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 60_000,
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'The data is considered fresh for one minute.',
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
                            'Course listing page-la user filter change pannumbodhu different query keys use pannalaam.',
                            'Previously fetched category data cache-la irundha adha reuse panna mudiyum.',
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
                            'Caching is the process of storing previously fetched data for reuse.',
                            'TanStack Query stores server data in its query cache using query keys.',
                            'When the same query is requested again, cached data can be reused instead of immediately making another request.',
                            'It can also refetch stale data in the background.',
                            'Caching helps reduce unnecessary API calls and improves application responsiveness.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-33',
        topicId: 'one-india',
        title: 'What are staleTime and gcTime?',
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
                            '**staleTime** – How long data is considered fresh.',
                            '**gcTime** – How long inactive cached data stays in memory before garbage collection.',
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
                            '`staleTime`-na cache-la irukkura data evvalavu neram fresh-ah consider pannuvom nu decide pannum.',
                            'Andha time mudinja data stale aagum. Stale aana udane cache delete aagidum nu artham illa.',
                            '`gcTime`-na query inactive aana appuram cache memory-la evvalavu neram retain pannuvom nu decide pannum.',
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
                            '`staleTime` controls freshness.',
                            '`gcTime` controls retention of inactive queries.',
                            'Fresh queries generally do not refetch automatically on mount or focus.',
                            'Stale queries may refetch depending on configuration and triggers.',
                            'Active queries are not garbage-collected.',
                            'In TanStack Query v5, the previous `cacheTime` option was renamed `gcTime`.',
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
                        text: `useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 60_000,
    gcTime: 300_000,
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Here, data is fresh for one minute. Inactive cache can remain for five minutes before garbage collection.',
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
                            'Course catalog data frequently changes-na shorter staleTime use pannalaam.',
                            'Less frequently changing configuration data-ku longer staleTime use pannalaam.',
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
                            '`staleTime` and `gcTime` control different aspects of query caching.',
                            '`staleTime` defines how long data is considered fresh.',
                            '`gcTime` defines how long inactive cached data remains in memory before garbage collection.',
                            'When data becomes stale, it is not immediately deleted. It can still be reused while a refetch happens.',
                            "I configure these values based on how frequently the server data changes and the application's requirements.",
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-34',
        topicId: 'one-india',
        title: 'What is the difference between useQuery and useMutation?',
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
                            '**useQuery** – Fetches and reads data.',
                            '**useMutation** – Performs operations that modify data.',
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
                            '`useQuery` mostly API data fetch panni display panna use pannuvom.',
                            '`useMutation` data create, update, delete panna use pannuvom.',
                            'Example: Course list fetch – `useQuery` | Enroll course – `useMutation` | Update profile – `useMutation` | Delete user – `useMutation`',
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
                            'Queries are generally used for read operations.',
                            'Mutations are used for create, update, and delete operations.',
                            'Mutations are triggered explicitly.',
                            'Mutation states include pending, success, and error.',
                            'After a successful mutation, we can invalidate related queries.',
                            'Optimistic updates can improve user experience.',
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
                        text: `const queryClient = useQueryClient();

    const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
        queryClient.invalidateQueries({
        queryKey: ["users"],
        });
    },
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'After updating a user, we invalidate the users query so it can refresh.',
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
                            'In a learning application, I can use `useQuery` to fetch course details and `useMutation` to enroll a student or update learning progress.',
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
                            '`useQuery` and `useMutation` are both TanStack Query hooks, but they serve different purposes.',
                            '`useQuery` is mainly used to fetch and manage server data.',
                            '`useMutation` is used for operations that create, update, or delete data.',
                            'After a successful mutation, I can invalidate related queries to refresh the data.',
                            'This helps maintain consistency between the frontend and backend.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-35',
        topicId: 'one-india',
        title: 'How do you integrate REST APIs in React?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'rest-api',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'REST API integration means connecting the React frontend with backend services to fetch or update data.',
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
                            'React frontend-la backend data display panna REST API call pannuvom.',
                            'Fetch or Axios use panni API request send pannuvom.',
                            'Response receive pannitu data UI-la display pannuvom.',
                            'API call fail aana error handle pannuvom. Loading time-la loader show pannuvom.',
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
                        text: 'My API integration approach:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Define API service functions.',
                            'Handle HTTP status codes and errors.',
                            'Manage loading, success, and error states.',
                            'Validate and type API responses.',
                            'Use TanStack Query for server-state management.',
                            'Handle authentication and authorization appropriately.',
                            'Avoid unnecessary requests.',
                            'Maintain reusable API utilities.',
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

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return response.json();
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
                            'In Archer Review, I integrated REST APIs to fetch learning content, student information, and application data.',
                            'I handled loading and error states and displayed API data through reusable React components.',
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
                            'In React applications, I integrate REST APIs using Fetch or Axios.',
                            'I usually separate API logic into reusable service functions.',
                            'I handle loading, success, and error states and validate API responses using TypeScript.',
                            'For server-state management, I use TanStack Query to manage caching, refetching, and query states.',
                            'This approach keeps API integration clean, reusable, and maintainable.',
                        ],
                    },
                ],
            },
        ],
    }),
];
