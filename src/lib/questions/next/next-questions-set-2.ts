import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const nextQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'nx-6',
        topicId: 'nextjs',
        title: 'Explain the Next.js App Router.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'App Router is the newer routing system in Next.js, using the app/ folder.',
                            'Folders become URL routes, and special files like page.tsx and layout.tsx define the UI.',
                            'It is built on React Server Components.',
                            'It supports nested layouts, loading states, error handling and streaming.',
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
                            'The App Router uses the **app/ directory** with a file-system convention built on React Server Components.',
                            '**page.tsx** - UI for a route; **layout.tsx** - shared UI that persists across navigations; **template.tsx** - re-mounts on navigation.',
                            '**loading.tsx / error.tsx / not-found.tsx** - automatic Suspense and error boundaries per segment.',
                            '**Dynamic segments** - [id], catch-all [...slug], optional [[...slug]].',
                            '**Route groups and special routes** - (group) for organization, @slot parallel routes, (.)intercepting routes.',
                            '**route.ts** - Route Handlers for API endpoints.',
                            '**Server Components by default** - async components fetch data directly; client components opt in with "use client".',
                            '**Server Actions** - mutations via "use server" functions.',
                            '**Streaming and Suspense** - progressive rendering of slow parts.',
                            '**Metadata API** - SEO from code or files.',
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
                        text: `app/
    layout.tsx            // root layout (html, body, providers)
    page.tsx              // /
    loading.tsx           // streaming fallback
    error.tsx             // error boundary ('use client')
    dashboard/
    layout.tsx          // nested layout
    page.tsx            // /dashboard
    [id]/page.tsx       // /dashboard/123
    api/users/route.ts    // Route Handler: GET/POST /api/users`,
                    },
                    {
                        type: 'highlight',
                        text: 'Folder structure defines routes, and special files add layouts, loading UI, error handling and API endpoints.',
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
                        text: 'In Archer Review, nested layouts kept the sidebar and navigation mounted while only page content changed, and loading.tsx gave instant feedback while data streamed in.',
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
                            'The App Router is the app/ directory based routing built on React Server Components.',
                            'Folders define routes and special files like page, layout, loading and error define behavior.',
                            'It supports nested layouts, streaming, Server Actions and Route Handlers.',
                            'Components are server by default, and I add "use client" only where interactivity is required.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Dashboard needs a persistent sidebar while content changes per route. How do you structure it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'app/dashboard/layout.tsx with the sidebar and children.',
                            'Layouts do not re-render on navigation, so sidebar state persists.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**One slow widget blocks the whole page. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Wrap that widget in Suspense with a fallback or use loading.tsx.',
                            'Other parts stream immediately.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'app directory',
                            'layout.tsx',
                            'page.tsx',
                            'Nested layouts',
                            'loading.tsx',
                            'Server Components',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-7',
        topicId: 'nextjs',
        title: 'App Router vs Pages Router.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Pages Router is the older system using the pages/ folder.',
                            'App Router is the newer system using the app/ folder.',
                            'App Router supports Server Components, nested layouts and streaming.',
                            'New projects should use the App Router.',
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
                            '**Directory** - pages/ vs app/ (both can coexist during migration; app takes precedence for conflicting routes).',
                            '**Components** - Pages: all components are client-rendered/hydrated. App: Server Components by default, less client JS.',
                            '**Data fetching** - Pages: getServerSideProps, getStaticProps, getStaticPaths. App: async components with fetch/DB calls, generateStaticParams, caching/revalidate.',
                            '**Layouts** - Pages: _app/_document and manual layout patterns. App: nested layout.tsx that persists.',
                            '**Loading and errors** - App has built-in loading.tsx, error.tsx with Suspense streaming.',
                            '**API** - Pages: pages/api. App: Route Handlers (route.ts).',
                            '**Metadata** - Pages: next/head. App: Metadata API.',
                            '**Navigation** - Pages: next/router. App: next/navigation (useRouter, usePathname, useSearchParams).',
                            '**Trade-offs** - App Router has a steeper learning curve (server/client boundary, caching); Pages Router is simpler and stable but gets fewer new features.',
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
                        text: `// Pages Router
    export async function getServerSideProps() {
    const posts = await getPosts();
    return { props: { posts } };
    }
    export default function Blog({ posts }) { return <List posts={posts} />; }
    
    // App Router
    export default async function Blog() {
    const posts = await getPosts();      // runs on the server
    return <List posts={posts} />;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'App Router removes the special data-fetching functions: the component itself is async and runs on the server.',
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
                        text: 'In Archer Review, new routes were built in the App Router to use server components and nested layouts, while older pages were migrated gradually.',
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
                            'Pages Router uses pages/ with getServerSideProps and getStaticProps, and all components hydrate on the client.',
                            'App Router uses app/ with Server Components, nested layouts, streaming and Server Actions.',
                            'App Router reduces client JS and simplifies data fetching but has a steeper learning curve.',
                            'I use App Router for new projects and migrate incrementally because both can coexist.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team has a stable Pages Router app. Should you migrate immediately?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Not necessarily; Pages Router still works.',
                            'Migrate when you benefit (streaming, server components, layouts), and do it route by route.',
                            'New features can start in app/ since both coexist.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A library breaks inside the App Router. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It probably uses hooks/state/browser APIs and must run in a Client Component.',
                            'Wrap it in a file with "use client".',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'app/',
                            'pages/',
                            'getServerSideProps',
                            'Server Components',
                            'Nested layouts',
                            'Incremental migration',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-8',
        topicId: 'nextjs',
        title: 'What are Server Components?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Server Components are React components that run only on the server.',
                            'They can fetch data directly and send ready HTML to the browser.',
                            'Their code is not sent to the browser, so the JavaScript bundle is smaller.',
                            'They cannot use state, effects or browser events.',
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
                            'React Server Components (RSC) render on the server and stream a serialized result to the client; **their JS never ships to the browser**.',
                            '**Default in the App Router** - every component is a Server Component unless it has "use client".',
                            '**Direct data access** - await DB/ORM/fs/APIs inside the component, secrets stay on the server.',
                            '**Smaller bundles** - heavy libraries (markdown, syntax highlighters, date libs) stay server-side.',
                            '**Streaming** - works with Suspense for progressive loading.',
                            '**Restrictions** - no useState/useEffect/useRef, no event handlers, no browser APIs, no context providers/consumers.',
                            '**Composition** - Server Components can render Client Components and pass serializable props; Client Components can receive Server Components as children.',
                            'Props from server to client must be serializable (no functions, class instances).',
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
                        text: `// Server Component (default) - no "use client"
    import { db } from '@/lib/db';
    import LikeButton from './LikeButton';   // client component
    
    export default async function Post({ id }: { id: string }) {
    const post = await db.post.findUnique({ where: { id } });  // runs on server only
    return (
    <article>
      <h1>{post.title}</h1>
      <LikeButton postId={id} initial={post.likes} />
    </article>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The DB query and article markup stay on the server; only the small LikeButton ships JavaScript.',
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
                        text: 'In Archer Review, content-heavy pages fetched data in Server Components and kept only interactive controls such as quiz inputs and timers as Client Components, which reduced bundle size.',
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
                            'Server Components render only on the server and send HTML/RSC payload without shipping their JavaScript.',
                            'They can access databases and secrets directly and reduce bundle size.',
                            'They cannot use state, effects or browser APIs, so interactive parts go into Client Components.',
                            'In the App Router, components are server components by default.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need to call the database and use an API secret in a component. Where?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'In a Server Component (or Server Action/Route Handler).',
                            'Never in a Client Component, since the code is exposed to the browser.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You get an error "useState only works in a Client Component". What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move interactive logic into a small component with "use client".',
                            'Keep the parent as a Server Component.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'RSC',
                            'Server-only',
                            'No client JS',
                            'Direct data access',
                            'Streaming',
                            'Serializable props',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-9',
        topicId: 'nextjs',
        title: 'What are Client Components?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Client Components are components that run in the browser (after also being pre-rendered on the server).',
                            'You mark them with "use client" at the top of the file.',
                            'They can use state, effects, event handlers and browser APIs.',
                            'Use them for interactive UI.',
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
                            'A file with **"use client"** defines a client boundary: that component and everything it imports become part of the client bundle.',
                            '**Capabilities** - useState, useEffect, useRef, context, event handlers, browser APIs (window, localStorage), client libraries.',
                            '**Still pre-rendered** - they render to HTML on the server for first paint, then hydrate in the browser.',
                            '**Typical uses** - forms with state, dropdowns, modals, charts, drag and drop, anything using hooks or browser APIs.',
                            '**Boundary rule** - "use client" applies to the module and its imports, not only the one component; keep client components small and at the leaves.',
                            '**Composition** - pass Server Components as children/props into Client Components to keep them on the server.',
                            '**Data** - fetch on the client with TanStack Query/SWR only when needed (user-driven, real-time); otherwise prefer the server.',
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
                        text: `'use client';
    import { useState } from 'react';
    
    export default function LikeButton({ postId, initial }: { postId: string; initial: number }) {
    const [likes, setLikes] = useState(initial);
    return (
    <button onClick={() => setLikes(l => l + 1)}>
      Like ({likes})
    </button>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: '"use client" lets the component use state and click handlers, and its code is sent to the browser.',
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
                        text: 'In Archer Review, quiz option selection, timers, and form inputs were Client Components, kept small so the rest of the page remained server-rendered.',
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
                            'Client Components are marked with "use client" and can use state, effects, events and browser APIs.',
                            'They are still pre-rendered on the server and then hydrated.',
                            'The directive creates a boundary that includes the imports, so I keep client components small and near the leaves.',
                            'I use them only for interactivity.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page needs a searchable dropdown inside a mostly static page. How do you structure it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Make only the dropdown a Client Component.',
                            'Pass the options data from the Server Component as props.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need localStorage for theme preference. Where do you read it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'In a Client Component inside useEffect (browser only).',
                            'Or store it in a cookie so the server can render the right theme and avoid flicker.',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'use client',
                            'Hydration',
                            'Client boundary',
                            'useState',
                            'Event handlers',
                            'Browser APIs',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-10',
        topicId: 'nextjs',
        title: 'Why does Next.js use Server Components?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'To send less JavaScript to the browser.',
                            'To fetch data on the server, closer to the database, which is faster and safer.',
                            'To make pages load faster and improve SEO.',
                            'To keep secrets like API keys on the server.',
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
                            'Server Components solve problems of client-heavy React apps: **large bundles, request waterfalls and data exposure**.',
                            '**Performance** - zero client JS for server-only parts, faster hydration, better LCP and INP.',
                            '**Data fetching** - fetch next to the data source (low latency), avoiding client-to-API round trips and waterfalls.',
                            '**Security** - secrets, tokens and business logic never reach the browser.',
                            '**Streaming** - send UI progressively with Suspense instead of all-or-nothing.',
                            '**Caching** - server results can be cached and shared across users.',
                            '**Simplicity** - async/await in components instead of useEffect + loading states.',
                            '**SEO** - complete HTML is delivered on first response.',
                            'Trade-off: new mental model (server/client boundary) and server infrastructure required.',
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
                        text: `// Before: client fetching, waterfall, loading state, more JS
    'use client';
    function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => { fetch('/api/user').then(r => r.json()).then(setUser); }, []);
    if (!user) return <Spinner />;
    return <h1>{user.name}</h1>;
    }
    
    // After: Server Component
    async function Profile() {
    const user = await getUser();     // direct, on the server
    return <h1>{user.name}</h1>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'No effect, no loading state, no extra API call from the browser, and no component JavaScript shipped.',
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
                        text: 'In Archer Review, moving data-heavy pages to Server Components removed client fetch waterfalls and reduced JavaScript, which improved load time on mobile devices.',
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
                            'Server Components reduce client JavaScript, fetch data closer to the source, and keep secrets on the server.',
                            'They enable streaming, improve LCP and SEO, and simplify data code with async/await.',
                            'The cost is a new mental model and a server runtime.',
                            'I keep interactivity in small Client Components.',
                        ],
                    },
                ],
            },
        ],
        scenarioQuestions: [
            {
                label: 'Scenario 1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Your page makes 4 sequential client API calls and feels slow. What do you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move fetching to Server Components close to the data.',
                            'Run independent calls in parallel with Promise.all.',
                            'Stream slow sections with Suspense.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Security review finds an API key in the client bundle. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move the call to a Server Component, Server Action or Route Handler.',
                            'Rotate the exposed key and use server-only env variables (no NEXT_PUBLIC_ prefix).',
                        ],
                    },
                ],
            },
        ],
        speakingPractice: [
            {
                label: '',
                blocks: [
                    {
                        type: 'keywords',
                        items: [
                            'Bundle size',
                            'Waterfall',
                            'Streaming',
                            'Security',
                            'LCP',
                            'Server-side data fetching',
                        ],
                    },
                ],
            },
        ],
    }),
];
