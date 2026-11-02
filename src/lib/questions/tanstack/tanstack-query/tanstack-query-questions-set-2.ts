import type { IQuestion } from '@/types';

import { createQuestion } from '../../create-question';

export const tenStackQueryQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'tsq-6',
        topicId: 'react-query',
        title: 'How do you handle API errors using TanStack Query?',
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
                            'API error handling in TanStack Query means detecting API failures and displaying appropriate error messages to users.',
                            'TanStack Query provides flags like isError and an error object to help us handle errors in React applications.',
                            'One important point: when using fetch(), HTTP errors such as 404 or 500 do not automatically throw an error. We need to check response.ok and throw an error ourselves.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why —Why do we handle API errors?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'To show meaningful error messages to users.',
                            'To prevent the application from crashing when an API request fails.',
                            'To support retrying failed requests when appropriate.',
                            'To improve the user experience during network failures.',
                            'To help developers identify and debug API issues.',
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
                            'Imagine an e-commerce application where users open the Products page.',
                            'If the API is still loading, display a loading indicator.',
                            'If the API fails because of a temporary network issue, retry the request.',
                            'If it still fails, display an error message and a Try Again button.',
                            'For production applications, I would also avoid exposing sensitive backend details and would handle different errors appropriately, such as 401 Unauthorized, 403 Forbidden, and 500 Internal Server Error.',
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
                            'I handle API errors in TanStack Query using the isError flag and the error object.',
                            'First, I make sure the query function throws an error when the API request fails.',
                            'Then I display an appropriate error message and provide a retry option when necessary.',
                            'I can also configure the retry option to handle temporary network failures. This makes API error handling more reliable and improves the user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-7',
        topicId: 'react-query',
        title: 'What is caching, and how does query caching work?',
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
                            'Caching is the process of temporarily storing previously fetched data so that we can reuse it instead of fetching it from the server every time.',
                            'In TanStack Query, query caching means storing API response data in a cache, identified by its queryKey.',
                            'For example, if we fetch a list of products, TanStack Query can keep that data in its cache so the application can reuse it when the same query is needed again.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we use caching?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Faster UI:** Previously fetched data can be displayed without waiting for another request.',
                            '**Fewer API calls:** Cached data can be reused.',
                            '**Better user experience:** Users may see existing data while fresh data is fetched in the background.',
                            '**Less server load:** Reusing cached responses can reduce unnecessary network requests.',
                            '**Data synchronization:** TanStack Query can refetch stale data when appropriate.',
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
                            'Imagine an e-commerce application with a Products page.',
                            'The user opens the page, and the application fetches products from the backend.',
                            'TanStack Query caches the response.',
                            'The user navigates to another page and returns to Products within 60 seconds.',
                            'The application can immediately reuse the cached products without requiring an initial loading delay.',
                            'After the data becomes stale, TanStack Query can fetch updated products in the background.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'This improves the user experience and can reduce unnecessary API requests.',
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
                            'Caching means storing previously fetched data so it can be reused instead of requesting it from the server every time.',
                            'In TanStack Query, the cache is organized using query keys.',
                            'When an API request succeeds, its response is cached and can be reused by components using the same query key.',
                            'We use staleTime to control how long the data remains fresh and gcTime to control how long inactive cached data is retained. This improves performance, reduces unnecessary requests, and provides a better user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'tsq-8',
        topicId: 'react-query',
        title: 'What are staleTime and gcTime?',
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
                            'Caching is the process of temporarily storing previously fetched data so that we can reuse it instead of fetching it from the server every time.',
                            'In TanStack Query, query caching means storing API response data in a cache, identified by its queryKey.',
                            'For example, if we fetch a list of products, TanStack Query can keep that data in its cache so the application can reuse it when the same query is needed again.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why — Why do we use caching?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Faster UI:** Previously fetched data can be displayed without waiting for another request.',
                            '**Fewer API calls:** Cached data can be reused.',
                            '**Better user experience:** Users may see existing data while fresh data is fetched in the background.',
                            '**Less server load:** Reusing cached responses can reduce unnecessary network requests.',
                            '**Data synchronization:** TanStack Query can refetch stale data when appropriate.',
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
                            'Imagine an e-commerce application with a Products page.',
                            'The user opens the page, and the application fetches products from the backend.',
                            'TanStack Query caches the response.',
                            'The user navigates to another page and returns to Products within 60 seconds.',
                            'The application can immediately reuse the cached products without requiring an initial loading delay.',
                            'After the data becomes stale, TanStack Query can fetch updated products in the background.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'This improves the user experience and can reduce unnecessary API requests.',
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
                            'Caching means storing previously fetched data so it can be reused instead of requesting it from the server every time.',
                            'In TanStack Query, the cache is organized using query keys.',
                            'When an API request succeeds, its response is cached and can be reused by components using the same query key.',
                            'We use staleTime to control how long the data remains fresh and gcTime to control how long inactive cached data is retained. This improves performance, reduces unnecessary requests, and provides a better user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
];
