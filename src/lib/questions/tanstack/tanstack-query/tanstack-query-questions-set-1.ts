import type { IQuestion } from '@/types';

import { createQuestion } from '../../create-question';

export const tenStackQueryQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'tsq-1',
        topicId: 'react-query',
        title: 'What is TanStack Query, and why do we use it?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What — What is it?**',
                    },
                    {
                        type: 'paragraph',
                        text: 'TanStack Query is a library used to fetch, cache, synchronize, and update server data in React applications.',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we use it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It automatically caches API responses.',
                            'It reduces unnecessary API calls.',
                            'It manages loading and error states.',
                            'It helps refresh outdated data.',
                            'It makes API data management easier.',
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
                        text: `import { useQuery } from '@tanstack/react-query';

                            function Users() {
                            const { data, isPending, isError } = useQuery({
                                queryKey: ['users'],
                                queryFn: async () => {
                                const response = await fetch('/api/users');

                                if (!response.ok) {
                                    throw new Error('Failed to fetch users');
                                }

                                return response.json();
                                },
                            });

                            if (isPending) return <p>Loading...</p>;
                            if (isError) return <p>Something went wrong!</p>;

                            return data.map(user => (
                                <p key={user.id}>{user.name}</p>
                            ));
                            }`,
                    },
                    {
                        type: 'heading',
                        text: 'How it works',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`useQuery` calls the API through `queryFn`.',
                            '`queryKey` identifies the data and its cache entry.',
                            'TanStack Query caches the successful response.',
                            'It provides loading and error states.',
                            'When the same query is used again, cached data can be reused, and a background refetch may happen when appropriate.',
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
                        type: 'bullets',
                        items: [
                            'Imagine an e-commerce application displaying a list of products.',
                            'Without TanStack Query, we might manually manage API calls, loading states, errors, and cached data using React state and effects.',
                            'With TanStack Query, it handles much of this work for us. When users revisit the product page, cached data can appear immediately while the library refreshes outdated data when appropriate.',
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
                            'TanStack Query is a library for managing server state in React applications.',
                            'We use it to fetch and cache API data, handle loading and error states, reduce unnecessary network requests, and keep data synchronized with the server. It simplifies API data management and improves the user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-2',
        topicId: 'react-query',
        title: 'What is the difference between server state and client state?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What — What is it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Server state:** is data that comes from and is managed by a server.',
                            '**Client state:** is data that is managed inside the frontend application, usually in React.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we need both?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Server state:** We need to fetch, cache, refresh, and synchronize data from the backend.',
                            '**Client state:** We need to manage UI interactions and temporary user selections.',
                            'Separating them makes the application easier to maintain and helps us choose the right tool for each type of state.',
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
                        type: 'bullets',
                        items: [
                            'Imagine an e-commerce application.',
                            '**Server state:** Product list, prices, inventory, and order history fetched from backend APIs.',
                            '**Client state:** Selected category tab, open filter panel, and whether the shopping cart drawer is visible.',
                            'We use TanStack Query for server state and React useState or a state management library for client state.',
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
                            'Server state is data that comes from and is managed by the backend, such as products, users, and orders.',
                            'Client state is data managed by the frontend, such as modal visibility, selected tabs, and form inputs.',
                            'I use TanStack Query to fetch and cache server data, and React state or libraries like Redux or Zustand to manage client state.',
                            'Separating these responsibilities makes the application easier to maintain and improves data management.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-3',
        topicId: 'react-query',
        title: 'What is useQuery?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What — What is it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`useQuery` is a React Hook from TanStack Query that helps us fetch, cache, and manage data from an API.',
                            `It also provides useful states such as loading, success, and error, so we don't need to manage everything manually using useState and useEffect.`,
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we use `useQuery?`**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Fetching:** Fetches data from an API.',
                            '**Caching:** Stores fetched data for reuse.',
                            '**Loading and error handling:** Provides states to manage the UI.',
                            '**Background refetching:** Can refresh outdated data automatically.',
                            '**Less boilerplate:** Reduces the amount of manual API management code.',
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
                        text: 'How — How does it work?',
                    },
                    {
                        type: 'code',
                        text: `import { useQuery } from '@tanstack/react-query';

                            function Users() {
                            const { data, isPending, isError } = useQuery({
                                queryKey: ['users'],
                                queryFn: async () => {
                                const response = await fetch('/api/users');

                                if (!response.ok) {
                                    throw new Error('Failed to fetch users');
                                }

                                return response.json();
                                },
                            });

                            if (isPending) return <p>Loading...</p>;
                            if (isError) return <p>Something went wrong!</p>;

                            return (
                                <div>
                                {data.map(user => (
                                    <p key={user.id}>{user.name}</p>
                                ))}
                                </div>
                            );
                            }

                            export default Users;`,
                    },
                    {
                        type: 'heading',
                        text: 'How it works step by step:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**useQuery** starts the query when the component needs the data.',
                            "**queryKey:** `['users'] identifies the query and its cached data.",
                            '**queryFn** contains the function that calls the API.',
                            '**isPending** helps display a loading message while the initial query is pending.',
                            '**isError** helps display an error message if the request fails.',
                            '**data** contains the successfully returned API data.',
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
                        type: 'bullets',
                        items: [
                            'Imagine an e-commerce application displaying a product list.',
                            'When a user opens the Products page, useQuery fetches products from the backend API and displays them. If the user revisits the page, cached data may be reused while TanStack Query refreshes it in the background when appropriate.',
                            'This avoids manually managing caching and API request states.',
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
                            '`useQuery` is a React Hook provided by TanStack Query for fetching and managing server data.',
                            'We provide a queryKey to identify the data and a queryFn to fetch it.',
                            'It manages caching, loading and error states, and can automatically refetch outdated data.',
                            'I use it in React applications to simplify API integration and improve the user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-4',
        topicId: 'react-query',
        title: 'What are queryKey and queryFn?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What — What is it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`queryKey` identifies a query and its cached data in TanStack Query.',
                            '`queryFn` is the asynchronous function that fetches data from an API or another data source. It must return the data or throw an error.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Simple way to remember:',
                    },
                    {
                        type: 'bullets',
                        items: ['**queryKey** = Which data do we need?', '**queryFn** = How do we fetch that data?'],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we use them?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**queryKey:** Helps TanStack Query identify and cache different queries separately.',
                            '**queryFn:** Defines the actual API request or data-fetching logic.',
                            'Together, they allow TanStack Query to manage caching, refetching, and loading or error states.',
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
                        type: 'bullets',
                        items: [
                            "**queryKey: ['products']** identifies the complete product list.",
                            "**queryKey: ['products', 2]** identifies page 2 of the product list, if the query function uses that page.",
                            "**queryKey: ['product', 10]** identifies the details of product 10.",
                            '**queryFn** makes the appropriate API request for each query.',
                            'This lets TanStack Query keep different data sets in separate cache entries and refetch the correct data when needed.',
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
                            '`queryKey` and `queryFn` are the two main parts of a TanStack Query.',
                            'The `queryKey` uniquely identifies a query and its cached data, while the `queryFn` is the asynchronous function responsible for fetching the data.',
                            'For example, in an e-commerce application, I use ["products", page] as the query key and a query function to fetch products for that page.',
                            'This helps TanStack Query manage caching, refetching, and data synchronization efficiently.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-5',
        topicId: 'react-query',
        title: 'What is the difference between isLoading, isFetching, and isError?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'low',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What — What is it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            `These are status flags provided by TanStack Query's useQuery Hook. They help us understand what is happening while fetching API data.`,
                            '**isLoading** — The query is loading for the first time and does not have data yet.',
                            '**isFetching** — The query function is currently running, including during background refetches.',
                            '**isError** — The query encountered an error while fetching data.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Simple way to remember:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**isLoading** → Initial loading',
                            '**isFetching** → API request in progress',
                            '**isError** → Something went wrong',
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
                        type: 'bullets',
                        items: [
                            'Imagine an e-commerce application displaying a list of products.',
                            'Initial page load: Display a full-page loading indicator using isLoading.',
                            'Background refresh: Keep the existing products visible and display a small “Refreshing...” message using isFetching.',
                            'API failure: Display an error message using isError',
                            'This approach provides a better user experience because the entire page does not need to disappear whenever data refreshes.',
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
                            '`isLoading, isFetching, and isError` are status flags in TanStack Query.',
                            '`isLoading` indicates that the initial data is being loaded, `isFetching` indicates that the query function is currently executing, including background refetches, and `isError` indicates that the query has failed.',
                            'I use these flags to display loading indicators, refreshing messages, and error states in my React applications.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Interview tip:** If the interviewer asks about TanStack Query v5, also understand isPending. It indicates that the query has not yet reached a successful data state, whereas isLoading specifically indicates that the query is pending and currently fetching.',
                    },
                ],
            },
        ],
    }),
];
