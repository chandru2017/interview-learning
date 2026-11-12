import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const tanstackQueryConceptSet1: IQuestion[] = [
    createQuestion({
        id: 'tanstack-query-1',
        topicId: 'tanstack-query',
        title: 'Explain TanStack Query (React Query)',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'medium',
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
                            '**TanStack Query is a data-fetching and server-state management library for React applications.**',
                            'Backend API-la irundhu data fetch pannradhu, cache maintain pannradhu, loading/error states handle pannradhu, API data refetch pannradhu ellam TanStack Query simplify pannum.',
                            '**Important:** Redux Toolkit and Zustand mainly client state manage pannum. TanStack Query mainly server state manage pannum.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'User profile API',
                            'Student course list',
                            'Product details',
                            'Exam questions API',
                            'Dashboard statistics',
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
                        text: '**Why – Ethukku idhu pannuvom?**',
                    },
                    {
                        type: 'paragraph',
                        text: '**TanStack Query use panna reasons:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'API data caching',
                            'Automatic refetching',
                            'Loading and error handling',
                            'Background data synchronization',
                            'Avoid unnecessary API calls',
                            'Pagination and infinite scrolling support',
                            'Mutation handling for POST/PUT/DELETE',
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
                        text: '**How – Eppadi work aaguthu?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'TanStack Query workflow:',
                    },
                    {
                        type: 'markdown',
                        items: [
                            {
                                title: 'React Component',
                                description: 'useQuery()',
                            },
                            {
                                title: 'Query Cache',
                                description: 'Cached data irundha reuse pannum',
                            },
                            {
                                title: 'API Request',
                                description: 'Cache illa / refetch needed na fetch pannum',
                            },
                            {
                                title: 'UI Update',
                                description: 'Loading → Data / Error',
                            },
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Main concepts:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            '`QueryClient` – Query cache and query configuration manage pannum.',
                            '`QueryClientProvider` – QueryClient-ah React application-ku provide pannum.',
                            '`useQuery()` – GET API data fetch and cache pannum.',
                            '`queryKey` – Query identify and cache manage panna use pannuvom.',
                            '`queryFn` – API request execute pannum function.',
                            '`useMutation()` – Create/update/delete operations handle pannum.',
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
                        text: `npm install @tanstack/react-query`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 2: Configure QueryClient**',
                    },
                    {
                        type: 'paragraph',
                        text: `main.tsx`,
                    },
                    {
                        type: 'code',
                        text: `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

                            const queryClient = new QueryClient();

                            <QueryClientProvider client={queryClient}>
                                <App />
                            </QueryClientProvider>`,
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Step 3: Fetch API using useQuery**',
                    },
                    {
                        type: 'code',
                        text: `import { useQuery } from "@tanstack/react-query";

                            const fetchUsers = async () => {
                            const response = await fetch(
                                "https://jsonplaceholder.typicode.com/users"
                            );

                            if (!response.ok) {
                                throw new Error("Failed to fetch users");
                            }

                            return response.json();
                            };

                            const Users = () => {
                            const { data, isLoading, isError } = useQuery({
                                queryKey: ["users"],
                                queryFn: fetchUsers,
                            });

                            if (isLoading) return <p>Loading...</p>;

                            if (isError) return <p>Error loading users</p>;

                            return (
                                <ul>
                                {data.map((user: any) => (
                                    <li key={user.id}>{user.name}</li>
                                ))}
                                </ul>
                            );
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Explanation:**',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            '`queryKey: ["users"]` – Users query identify pannum.',
                            '`queryFn: fetchUsers` – API call execute pannum.',
                            '`data` – API response.',
                            '`isLoading` – Initial loading state.',
                            '`isError` – Request error state.',
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
                            'TanStack Query is a server-state management library for React.',
                            'I use it to fetch API data, manage caching, handle loading and error states, and automatically refetch data when required.',
                            'It provides hooks like useQuery for fetching data and useMutation for modifying data.',
                            'It reduces manual API state management and improves application performance.',
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
                            'TanStack Query is a server-state management library for React.',
                            'Idha use panni API data fetch pannalam, caching manage pannalam, loading and error states handle pannalam, and required time-la data refetch pannalam.',
                            'Data fetch panna useQuery() and data modify panna useMutation() use pannuvom.',
                            'Manual API state management reduce panni application performance improve panna help pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
