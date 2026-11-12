import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const graphQlConceptSet1: IQuestion[] = [
    createQuestion({
        id: 'graph-ql-1',
        topicId: 'graph-ql',
        title: 'Explain GraphQL',
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
                            '**GraphQL is an API query language that allows clients to request exactly the data they need.**',
                            'REST API-la different resources-ku separate endpoints irukkum. GraphQL-la usually single endpoint use panni, required fields mattum request pannalam.',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Student Portal-la student name and course name mattum venumna, GraphQL-la those fields mattum request pannalam.',
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
                        text: '**GraphQL use panna main reasons:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Fetch exact data:** Required fields mattum request pannalam.',
                            '**Avoid over-fetching:** Thevai illadha additional data receive panna vendam.',
                            '**Avoid under-fetching:** Related data multiple REST requests-la fetch pannradhai reduce pannalam.',
                            '**Flexible queries:** Frontend requirement-ku suitable-ah query write pannalam.',
                            '**Strong typing:** GraphQL schema types define pannum.',
                        ],
                    },
                    {
                        type: 'table',
                        content: {
                            title: 'REST vs GraphQL',
                            toolA: 'REST',
                            toolB: 'GraphQL',
                            comparison: [
                                {
                                    toolA: 'Multiple endpoints commonly used',
                                    toolB: 'Usually single endpoint',
                                },
                                {
                                    toolA: 'Fixed response structure',
                                    toolB: 'Client selects fields',
                                },
                                {
                                    toolA: 'Over-fetching possible',
                                    toolB: 'Exact fields request pannalam',
                                },
                                {
                                    toolA: 'Multiple requests may be needed',
                                    toolB: 'Related data in one query possible',
                                },
                            ],
                        },
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
                        text: 'GraphQl workflow:',
                    },
                    {
                        type: 'markdown',
                        items: [
                            {
                                title: 'React Frontend',
                                description: 'GraphQL Query',
                            },
                            {
                                title: 'GraphQL Server',
                                description: 'Schema + Resolver',
                            },
                            {
                                title: 'Database / Services',
                                description: 'Fetch requested data',
                            },
                            {
                                title: 'JSON Response',
                                description: 'Only requested fields',
                            },
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Important GraphQL Concepts:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`Query` – Data fetch panna.',
                            '`Mutation` – Data create, update, delete panna.',
                            '`Schema` – API structure and types define pannum.',
                            '`Resolver` – Requested data fetch panna logic execute pannum.',
                            '`Variables` – Dynamic values query-ku pass pannum.',
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
                        text: '**GraphQL Query**',
                    },
                    {
                        type: 'code',
                        text: `query GetStudent {
                            student(id: 101) {
                                name
                                email
                                courses {
                                    title
                                }
                            }
                        }`,
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
                        text: 'Indha query student name, email and course title mattum request pannum.',
                    },
                    {
                        type: 'paragraph',
                        text: '**React API Integration using Fetch**',
                    },
                    {
                        type: 'code',
                        text: `const query = '
                            query GetStudent {
                                student(id: 101) {
                                name
                                email
                                }
                            }';

                            const fetchStudent = async () => {
                            const response = await fetch('/graphql', {
                                method: "POST",
                                headers: {
                                Content-Type": "application/json",
                                },
                                body: JSON.stringify({ query }),
                            });

                            const result = await response.json();

                            return result.data.student;
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Explanation**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`query` – GraphQL request define pannum.',
                            '`/graphql` – GraphQL endpoint.',
                            '`POST` – Query request server-ku send pannum.',
                            '`JSON.stringify()` – Request body JSON format-ku convert pannum.',
                            '`result.data.student` – Student response access pannum.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Note:** GraphQL backend-la student schema and resolver already implement pannirukkanum.',
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
                            '**Student Portal example:**',
                            'Dashboard-la student details and enrolled courses display pannanum.',
                            'REST API use pannina:',
                        ],
                    },
                    {
                        type: 'sub-items',
                        items: ['/api/student/101', '/api/student/101/courses'],
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**GraphQL use pannina:**',
                            'Single query-la student name and courses fetch pannalam.',
                            '**Benefit:** Frontend-ku thevaiyana fields mattum request pannalam; multiple requests reduce aagalam.',
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
                            'GraphQL is an API query language that allows clients to request exactly the data they need.',
                            'Unlike REST, which commonly uses multiple endpoints, GraphQL typically uses a single endpoint.',
                            'It supports Query for fetching data and Mutation for modifying data.',
                            'It helps reduce over-fetching and provides flexible data fetching.',
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
                            'GraphQL is an API query language. Idha use panni frontend-ku thevaiyana data mattum request pannalam.',
                            'REST-la commonly multiple endpoints irukkum, but GraphQL-la usually single endpoint use pannuvom.',
                            'Data fetch panna Query and data modify panna Mutation use pannuvom.',
                            'Over-fetching reduce panni flexible data fetching provide pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'graph-ql-2',
        topicId: 'graph-ql',
        title: 'Explain GraphQL Variables',
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
                            'GraphQL Variables na query-kulla dynamic values pass panna use pannuvom.',
                            'Query-la values direct-ah hardcode pannaama, variables use panni reusable query create pannalam.',
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
                        type: 'bullets',
                        items: [
                            'Dynamic user IDs pass panna.',
                            'Search keyword pass panna.',
                            'Pagination values pass panna.',
                            'Query reuse panna.',
                            'Hardcoded values avoid panna.',
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
                        text: 'GraphQL query-la `$` use panni variable declare pannuvom.',
                    },
                    {
                        type: 'heading',
                        text: 'Example:',
                    },
                    {
                        type: 'code',
                        text: `query GetStudent($id: ID!) {
                            student(id: $id) {
                                name
                                email
                            }
                        }`,
                    },
                    {
                        type: 'heading',
                        text: 'Variables:',
                    },
                    {
                        type: 'code',
                        text: `{
                            "id": "101"
                        }`,
                    },
                    {
                        type: 'heading',
                        text: 'Explanation:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`$id` – Variable',
                            '`ID!` – ID type; `!` means required.',
                            '`student(id: $id)` – Variable value API-ku pass aagum.',
                            'Same query different student IDs-ku reuse pannalam.',
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
                            'GraphQL variables allow us to pass dynamic values into queries and mutations.',
                            'Instead of hardcoding values, we declare variables in the query and pass them separately.',
                            'This makes queries reusable and easier to maintain.',
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
                            'GraphQL variables use panni queries and mutations-ku dynamic values pass pannalam.',
                            'Query-la values hardcode pannaama variables declare panni separately pass pannuvom.',
                            'Idhu queries reusable-ah and maintainable-ah irukka help pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'graph-ql-3',
        topicId: 'graph-ql',
        title: 'Explain GraphQL Mutations',
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
                            '**Mutation is used to modify data in GraphQL.**',
                            'Create, update, delete operations perform panna Mutation use pannuvom.',
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
                        type: 'bullets',
                        items: [
                            'Backend data modify panna mutation use pannuvom.',
                            'REST-la POST, PUT, PATCH, DELETE use panra operations-ku GraphQL-la usually Mutation use pannuvom.',
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
                        text: 'Example: Student profile update.',
                    },
                    {
                        type: 'code',
                        text: `mutation UpdateStudent(
                            $id: ID!
                            $name: String!
                            ) {
                            updateStudent(
                                id: $id
                                name: $name
                            ) {
                                id
                                name
                            }
                        }`,
                    },
                    {
                        type: 'heading',
                        text: 'Variables:',
                    },
                    {
                        type: 'code',
                        text: `{
                            "id": "101",
                            "name": "Chandra"
                        }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Backend student name update pannitu requested fields response-la return pannum.',
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
                            'GraphQL mutations are used to create, update, or delete data.',
                            'We can pass dynamic values using variables and request the updated fields in the response.',
                            'Mutations help us perform backend operations in a structured way.',
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
                            'GraphQL mutations use panni data create, update, delete pannuvom.',
                            'Variables use panni dynamic values pass pannalam.',
                            'Mutation response-la updated data fields request pannalam.',
                            'Backend operations structured-ah perform panna mutations help pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'graph-ql-4',
        topicId: 'graph-ql',
        title: 'Explain Apollo Client',
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
                            '**Apollo Client is a GraphQL client library for React applications.**',
                            'GraphQL API integrate pannumbodhu Apollo Client use panni:',
                        ],
                    },
                    {
                        type: 'sub-items',
                        items: [
                            'Queries execute pannalam.',
                            'Mutations execute pannalam.',
                            'API response cache pannalam.',
                            'Loading and error states handle pannalam.',
                            'UI automatically update panna support irukkum.',
                        ],
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Apollo Client is similar to TanStack Query, but Apollo Client specifically GraphQL applications-ku designed.',
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
                        type: 'bullets',
                        items: [
                            'GraphQL API integration simple aagum.',
                            'Built-in caching provide pannum.',
                            'Loading and error handling easy.',
                            'Queries and mutations hooks moolama use pannalam.',
                            'Cache updates and refetching manage pannalam.',
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
                        type: 'markdown',
                        items: [
                            {
                                title: 'React Component',
                                description: 'useQuery / useMutation',
                            },
                            {
                                title: 'Apollo Client',
                                description: 'Query + Mutation + Cache',
                            },
                            {
                                title: 'GraphQL API',
                                description: 'Backend processing',
                            },
                            {
                                title: 'Response',
                                description: 'Cache update + UI re-render',
                            },
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 1: Install Apollo Client**',
                    },
                    {
                        type: 'code',
                        text: `npm install @apollo/client graphql`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 2: Configure Apollo Client**',
                    },
                    {
                        type: 'paragraph',
                        text: 'src/apollo/client.ts',
                    },
                    {
                        type: 'code',
                        text: `import {
                            ApolloClient,
                            InMemoryCache,
                            HttpLink,
                            } from "@apollo/client";

                            export const client = new ApolloClient({
                            link: new HttpLink({
                                uri: "https://example.com/graphql",
                            }),
                            cache: new InMemoryCache(),
                        });`,
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`HttpLink` API endpoint configure pannum.',
                            '`InMemoryCache` GraphQL response cache pannum.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 3: Add Apollo Provider**',
                    },
                    {
                        type: 'paragraph',
                        text: 'main.tsx',
                    },
                    {
                        type: 'code',
                        text: `import { ApolloProvider } from "@apollo/client/react";
                            import { client } from "./apollo/client";

                            <ApolloProvider client={client}>
                                <App />
                            </ApolloProvider>`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Provider moolama React components Apollo Client access pannalam.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Step 4: Fetch Data using useQuery**',
                    },
                    {
                        type: 'code',
                        text: `import { gql } from "@apollo/client";
                            import { useQuery } from "@apollo/client/react";

                            const GET_STUDENTS = gql'
                            query GetStudents {
                                students {
                                id
                                name
                                }
                            }
                            ';

                            const Students = () => {
                            const { data, loading, error } =
                                useQuery(GET_STUDENTS);

                            if (loading) return <p>Loading...</p>;

                            if (error) return <p>Error loading students</p>;

                            return (
                                <ul>
                                {data.students.map((student: any) => (
                                    <li key={student.id}>
                                    {student.name}
                                    </li>
                                ))}
                                </ul>
                            );
                        };`,
                    },
                    {
                        type: 'paragraph',
                        text: '**Important:**',
                    },
                    {
                        type: 'sub-items',
                        items: [
                            '`gql` – GraphQL query define pannum.',
                            '`useQuery()` – Query execute pannum.',
                            '`loading` – Initial request loading state.',
                            '`data` – GraphQL response.',
                            '`error` – Error information.',
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
                            'Apollo Client is a GraphQL client library for React.',
                            'I use it to execute queries and mutations, manage API loading and error states, and cache GraphQL responses.',
                            'It provides hooks like useQuery and useMutation, which simplify API integration.',
                            'For error handling, I handle network errors and GraphQL errors separately and display appropriate messages to users.',
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
                            'Apollo Client is a GraphQL client library for React.',
                            'Idha use panni queries and mutations execute pannalam, API loading and error states manage pannalam, and GraphQL responses cache pannalam.',
                            '`useQuery()` and `useMutation()` hooks API integration simplify pannum.',
                            'Error handling-la network errors and GraphQL errors separate-ah handle panni users-ku appropriate messages display pannuvom.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'graph-ql-5',
        topicId: 'graph-ql',
        title: 'Explain Apollo Client – useMutation',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'medium',
        simpleExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'code',
                        text: `import { gql } from "@apollo/client";
                            import { useMutation } from "@apollo/client/react";

                            const UPDATE_STUDENT = gql'
                            mutation UpdateStudent(
                                $id: ID!
                                $name: String!
                            ) {
                                updateStudent(id: $id, name: $name) {
                                id
                                name
                                }
                            }
                            ';

                            const UpdateStudent = () => {
                            const [updateStudent, { loading, error }] =
                                useMutation(UPDATE_STUDENT);

                            const handleUpdate = async () => {
                                await updateStudent({
                                variables: {
                                    id: "101",
                                    name: "Chandra",
                                },
                                });
                            };

                            return (
                                <>
                                <button
                                    onClick={handleUpdate}
                                    disabled={loading}
                                >
                                    {loading ? "Updating..." : "Update Student"}
                                </button>

                                {error && <p>Update failed</p>}
                                </>
                            );
                        };`,
                    },
                    {
                        type: 'heading',
                        text: 'Explanation',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`useMutation()` – Mutation execute panna use pannuvom.',
                            '`variables` – Dynamic values pass pannum.',
                            '`loading` – Mutation process aagumbodhu true.',
                            '`error` – Mutation failure information.',
                            '`updateStudent()` – Button click-la mutation execute pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
