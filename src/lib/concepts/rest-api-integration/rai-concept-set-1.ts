import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const restApiIntConceptSet1: IQuestion[] = [
    createQuestion({
        id: 'api-1',
        topicId: 'rest-api',
        title: 'Explain REST API Integration',
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
                            '**REST API is a way for frontend and backend applications to communicate over HTTP.**',
                            'Frontend application backend server-kitta request send pannum. Backend request process panni response return pannum. Usually response JSON format-la irukkum.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Login API',
                            'User profile API',
                            'Course list API',
                            'Student exam API',
                            '- Payment API',
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
                        text: '**Why – Ethukku use pannuvom??**',
                    },
                    {
                        type: 'paragraph',
                        text: '**REST API integration use panna reasons:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Backend data frontend-la display panna.',
                            'User information fetch panna.',
                            'Create, update, delete operations perform panna.',
                            'Frontend and backend independently develop panna.',
                            'Different applications same API use panna.',
                            '- Authentication and authorization handle panna.',
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
                                title: 'React Frontend',
                                description: 'User action / API request',
                            },
                            {
                                title: 'HTTP Request',
                                description: 'GET / POST / PUT / PATCH / DELETE',
                            },
                            {
                                title: 'Backend API',
                                description: 'Validation + Business logic + Database',
                            },
                            {
                                title: 'HTTP Response',
                                description: 'Status code + JSON response',
                            },
                            {
                                title: 'React UI',
                                description: 'Display data / Error / Loading',
                            },
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Main concepts:',
                    },
                    {
                        type: 'bullets',
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
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Important HTTP Methods',
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'Important HTTP Methods',
                            toolA: 'Method',
                            toolB: 'Purpose',
                            toolC: 'Example',
                            comparison: [
                                {
                                    toolA: 'GET',
                                    toolB: 'Read data',
                                    toolC: 'Get courses',
                                },
                                {
                                    toolA: 'POST',
                                    toolB: 'Create data',
                                    toolC: 'Create course',
                                },
                                {
                                    toolA: 'PUT',
                                    toolB: 'Replace entire resource',
                                    toolC: 'Update full profile',
                                },
                                {
                                    toolA: 'PATCH',
                                    toolB: 'Update specific fields',
                                    toolC: 'Update username',
                                },
                                {
                                    toolA: 'DELETE',
                                    toolB: 'Delete data',
                                    toolC: 'Delete course',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Important HTTP Methods',
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'Important HTTP Status Codes',
                            toolA: 'Status',
                            toolB: 'Meaning',
                            comparison: [
                                {
                                    toolA: '200',
                                    toolB: 'OK – Request successful',
                                },
                                {
                                    toolA: '201',
                                    toolB: 'Created – Resource created',
                                },
                                {
                                    toolA: '204',
                                    toolB: 'No Content – Successful, no response body',
                                },
                                {
                                    toolA: '400',
                                    toolB: 'Bad Request',
                                },
                                {
                                    toolA: '401',
                                    toolB: 'Unauthorized',
                                },
                                {
                                    toolA: '403',
                                    toolB: 'Forbidden',
                                },
                                {
                                    toolA: '404',
                                    toolB: 'Resource not found',
                                },
                                {
                                    toolA: '500',
                                    toolB: 'Internal Server Error',
                                },
                            ],
                        },
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
                        text: '**GET API using Fetch**',
                    },
                    {
                        type: 'code',
                        text: `import { useEffect, useState } from "react";

                            type User = {
                            id: number;
                            name: string;
                            email: string;
                            };

                            const Users = () => {
                            const [users, setUsers] = useState<User[]>([]);
                            const [loading, setLoading] = useState(true);
                            const [error, setError] = useState("");

                            useEffect(() => {
                                const fetchUsers = async () => {
                                try {
                                    const response = await fetch(
                                    "https://jsonplaceholder.typicode.com/users"
                                    );

                                    if (!response.ok) {
                                    throw new Error("API request failed");
                                    }

                                    const data: User[] = await response.json();
                                    setUsers(data);
                                } catch (error) {
                                    setError("Unable to fetch users");
                                } finally {
                                    setLoading(false);
                                }
                                };

                                fetchUsers();
                            }, []);

                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>{error}</p>;

                            return (
                                <ul>
                                {users.map((user) => (
                                    <li key={user.id}>
                                    {user.name} - {user.email}
                                    </li>
                                ))}
                                </ul>
                            );
                            };

                            export default Users;`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`fetch()` – API request send pannum.',
                            '`async/await` – Asynchronous API call handle pannum.',
                            '`response.ok` – HTTP response success-ah irukka check pannum.',
                            '`response.json()` – JSON response-ah JavaScript data-ah convert pannum.',
                            '`setUsers()` – API data React state-la store pannum.',
                            '`try/catch` – Error handling.',
                            '`finally` – Loading state stop pannum.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Important interview point:** `fetch()` HTTP 404 or 500 response vandhaalum automatically reject aagadhu. `response.ok` or `response.status` check pannanum.',
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'Fetch vs Axios',
                            toolA: 'Fetch',
                            toolB: 'Axios',
                            comparison: [
                                {
                                    toolA: 'Browser built-in',
                                    toolB: 'External library',
                                },
                                {
                                    toolA: 'Manual JSON parsing',
                                    toolB: 'Automatic JSON parsing',
                                },
                                {
                                    toolA: 'HTTP error status manually check',
                                    toolB: 'HTTP errors reject aagum',
                                },
                                {
                                    toolA: 'Basic API integration',
                                    toolB: 'Convenient interceptors and configuration',
                                },
                            ],
                        },
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
                            'REST API integration allows the frontend application to communicate with the backend using HTTP methods like GET, POST, PUT, PATCH, and DELETE.',
                            'I use Fetch or Axios to send API requests and handle responses.',
                            'I manage loading, success, and error states, validate HTTP status codes, and display the API data in React components.',
                            'For larger applications, I prefer using TanStack Query for caching and server-state management.',
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
                            'REST API integration moolama frontend application backend-kooda HTTP methods use panni communicate pannum.',
                            'GET, POST, PUT, PATCH, DELETE methods use panni different API operations perform pannuvom.',
                            'Fetch or Axios use panni API requests send pannuvom and responses handle pannuvom.',
                            'Loading, success, error states manage panni API data React components-la display pannuvom.',
                            'Large applications-la caching and server-state management-ku TanStack Query use pannuvom.',
                        ],
                    },
                ],
            },
        ],
    }),
];
