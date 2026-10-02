import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const nextQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'nx-11',
        topicId: 'nextjs',
        title: 'When should you use "use client"?',
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
                            'Use it when the component needs state or effects.',
                            'Use it when you need event handlers like onClick or onChange.',
                            'Use it when you need browser APIs such as window or localStorage.',
                            'Use it when a library depends on client-side hooks.',
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
                            'Add "use client" only where **client-side behavior is required**.',
                            '**React hooks** - useState, useEffect, useReducer, useRef, useContext, custom hooks using them.',
                            '**Interactivity** - onClick, onChange, onSubmit handlers, drag and drop, animations driven by state.',
                            '**Browser APIs** - window, document, localStorage, IntersectionObserver, geolocation.',
                            '**Client-only libraries** - charts, maps, rich-text editors, libraries using hooks/context.',
                            '**Context providers** - providers (theme, query client) must be client components, but they can wrap Server Component children.',
                            '**Best practice** - push the boundary to the leaves, extract only the interactive part, pass children to keep server rendering.',
                            'Do not add it just to "make an error go away" - check whether the logic can stay on the server.',
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
                        text: `// app/providers.tsx
    'use client';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    const client = new QueryClient();
    export function Providers({ children }: { children: React.ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
    }

    // app/layout.tsx (Server Component)
    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html><body><Providers>{children}</Providers></body></html>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Only the provider is a Client Component; the layout and its children can still be Server Components.',
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
                        text: 'In Archer Review, we used "use client" for form inputs, quiz interactions, theme toggle and the query provider only, and kept all page-level data components on the server.',
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
                            'I use "use client" when a component needs hooks, event handlers, browser APIs or client-only libraries.',
                            'I keep the boundary as low as possible and extract just the interactive part.',
                            'Providers are client components but can wrap server-rendered children.',
                            'I avoid adding it at the page level unnecessarily.',
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
                        text: '**A large page needs one "Copy link" button. Where do you put "use client"?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create a tiny CopyButton component with "use client".',
                            'Import it into the Server Component page.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A third-party chart library throws "window is not defined". What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Wrap it in a Client Component.',
                            'If it still touches window during render, load it with next/dynamic and ssr: false in a client component.',
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
                            'Hooks',
                            'Event handlers',
                            'Browser APIs',
                            'Providers',
                            'Client boundary',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-12',
        topicId: 'nextjs',
        title: 'What happens when you unnecessarily use "use client"?',
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
                            'More JavaScript is sent to the browser, so the page loads slower.',
                            'You lose benefits of Server Components like direct data access.',
                            'Everything imported by that file becomes client code too.',
                            'It can expose logic and increase hydration work.',
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
                            'Putting "use client" high in the tree makes the **whole subtree part of the client bundle**.',
                            '**Bigger bundles** - heavy dependencies (markdown parsers, date libs, utilities) get shipped to every user.',
                            '**Slower hydration and INP** - more components to hydrate and more main-thread work.',
                            '**Lost server benefits** - cannot await data directly or use server-only code (db, fs), so you add client fetching, loading states and waterfalls.',
                            '**Worse caching and SEO risk** - data fetched in effects is not in the initial HTML.',
                            '**Security risk** - code moved to client can leak logic; server-only modules will fail or must be blocked with the server-only package.',
                            '**Fix** - move the boundary down to the leaves, split interactive pieces, pass Server Components as children, use the bundle analyzer to find large client chunks.',
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
                        text: `// Bad: whole page is client-side
    'use client';
    export default function Page() {
    const [open, setOpen] = useState(false);
    // heavy markdown parser + data fetching now ship to the browser
    return <Article />;
    }

    // Good: only the toggle is client-side
    // page.tsx (server)
    export default async function Page() {
    const article = await getArticle();
    return <><Article data={article} /><Toggle /></>;
    }
    // Toggle.tsx -> 'use client' with useState`,
                    },
                    {
                        type: 'highlight',
                        text: 'Extracting the small interactive piece keeps the rest on the server and the bundle small.',
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
                        text: 'In Archer Review, a page-level "use client" caused a large bundle; splitting out only the interactive widgets reduced JavaScript and improved load time.',
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
                            'Unnecessary "use client" increases bundle size, hydration cost and INP, and loses direct server data access.',
                            'Everything imported from that file becomes client code.',
                            'I fix it by moving the boundary to small leaf components and using the bundle analyzer to verify.',
                            'I keep data fetching and heavy libraries in Server Components.',
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
                        text: '**Lighthouse shows a huge JS bundle on a content page. How do you find the cause?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Run @next/bundle-analyzer to see what ships to the client.',
                            'Find pages/layouts with "use client" high up and push the boundary down.',
                            'Move heavy libraries to the server or lazy-load them.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A developer added "use client" to the root layout to fix a hook error. What do you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Revert it; extract the hook usage into a small client provider/component.',
                            'Explain boundary and bundle impact in code review.',
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
                        items: ['Bundle size', 'Hydration', 'INP', 'Client boundary', 'Bundle analyzer', 'server-only'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-13',
        topicId: 'nextjs',
        title: 'How does data fetching work in Next.js?',
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
                            'In the App Router, you fetch data directly inside async Server Components.',
                            'You can use fetch or call the database/ORM directly.',
                            'For mutations you use Server Actions or Route Handlers.',
                            'For client-side live data you can use SWR or TanStack Query.',
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
                            '**Server Components** - async components using fetch, ORM or SDKs; runs on the server, no API route needed.',
                            '**Parallel vs sequential** - start independent requests together (Promise.all) to avoid waterfalls; sequential only when one depends on another.',
                            '**Streaming** - Suspense boundaries and loading.tsx show UI while slow data loads.',
                            '**Deduplication** - identical fetch calls in one render are memoized; use React cache() for non-fetch calls like ORM queries.',
                            '**Mutations** - Server Actions ("use server") with revalidation, or Route Handlers for external clients.',
                            '**Client fetching** - SWR/TanStack Query for user-driven, polling or real-time data.',
                            '**Caching** - controlled via fetch options, route segment config or "use cache" depending on version.',
                            '**Pages Router (legacy)** - getServerSideProps, getStaticProps.',
                            'Pattern: a data access layer (DAL) with typed functions used by Server Components.',
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
                        text: `export default async function Dashboard() {
    // parallel fetching, no waterfall
    const [user, stats] = await Promise.all([getUser(), getStats()]);
    return (
    <>
    <Header user={user} />
    <Suspense fallback={<Skeleton />}>
        <Recent />        {/* slow part streams in later */}
    </Suspense>
    <Stats data={stats} />
    </>
    );
    }

    // Mutation with a Server Action
    async function addItem(formData: FormData) {
    'use server';
    await db.item.create({ data: { name: String(formData.get('name')) } });
    revalidatePath('/items');
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Parallel server fetching, streamed slow sections, and a Server Action for mutations with revalidation.',
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
                        text: 'In Archer Review, a data access layer with typed functions was called from Server Components, and form submissions used Server Actions with revalidation.',
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
                            'In the App Router I fetch inside async Server Components, using fetch or direct database calls.',
                            'I run independent requests in parallel and use Suspense for streaming slow parts.',
                            'Mutations go through Server Actions or Route Handlers, followed by revalidation.',
                            'For live or user-driven data on the client, I use TanStack Query or SWR.',
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
                        text: '**Your page has data waterfalls: user, then orders, then recommendations. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Fetch independent data in parallel with Promise.all.',
                            'Start requests early (preload pattern) and pass promises to child components.',
                            'Use Suspense so slow parts do not block the page.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Same function getUser() is called in layout, page and 3 components. Is it called 5 times?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'fetch calls are deduplicated per request; for ORM calls wrap in React cache().',
                            'So only one actual query runs per render pass.',
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
                        items: ['Async components', 'Promise.all', 'Suspense', 'Server Actions', 'Memoization', 'DAL'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-14',
        topicId: 'nextjs',
        title: 'Explain Next.js caching.',
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
                            'Next.js saves (caches) results to avoid doing the same work again.',
                            'It can cache fetched data, rendered pages and navigation on the client.',
                            'You control how long data stays cached and when it is refreshed.',
                            'Caching defaults changed between versions, so check the version you use.',
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
                            'Caching exists at several layers, and the **model differs by version** - always check the docs for your Next.js version.',
                            '**Request memoization** - same fetch/cache() call in one render is deduplicated (React feature, lasts one request).',
                            '**Data Cache** - persistent cache of fetch results/server function results across requests and deployments (with revalidate/tags).',
                            '**Full Route Cache** - cached HTML + RSC payload of static routes.',
                            '**Router Cache (client)** - in-memory cache of visited/prefetched route payloads in the browser.',
                            '**Next.js 15** - fetch requests, GET Route Handlers and the client router cache stopped being cached by default (opt in when needed).',
                            '**Next.js 16 Cache Components** - explicit, opt-in caching with the "use cache" directive on pages, components or functions, with cacheLife() for duration and cacheTag() for invalidation; works with Partial Prerendering (static shell + streamed dynamic parts).',
                            '**Invalidation** - time-based (revalidate/cacheLife), on-demand (revalidatePath, revalidateTag, updateTag, refresh).',
                            'Common pitfalls: stale data surprises, caching user-specific data, multi-instance self-hosting without a shared cache.',
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
                        text: `// Next.js 16 Cache Components (enabled in next.config with cacheComponents: true)
    import { cacheLife, cacheTag } from 'next/cache';

    async function getProducts() {
    'use cache';
    cacheLife('hours');       // how long it stays fresh
    cacheTag('products');     // label for invalidation
    return db.product.findMany();
    }

    // Older fetch-based style (App Router, Next.js 14/15)
    const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600, tags: ['products'] },
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'Same idea in both styles: cache a result, define its lifetime, and tag it so it can be invalidated later.',
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
                        text: 'In Archer Review, expensive shared queries were cached with tags and invalidated after admin updates, while user-specific data stayed uncached.',
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
                            'Next.js caches at multiple layers: request memoization, data cache, full route cache and the client router cache.',
                            'The defaults changed in recent versions, and in Next.js 16 caching is explicit with "use cache", cacheLife and cacheTag.',
                            'I cache shared data, never user-specific data, and tag it for targeted invalidation.',
                            'When self-hosting multiple instances, I configure a shared cache.',
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
                        text: '**After deploying, users see old data even though the database changed. Where do you look?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check what is cached (data cache/route cache/CDN) and its lifetime.',
                            'Add tag-based invalidation after mutations, or reduce cache time.',
                            'Check the Next.js version defaults.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: "**A cached function accidentally returned one user's data to another user. How do you prevent it?**",
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Never cache functions that read cookies/headers/session without passing the user ID as an argument (part of the cache key).',
                            'Keep personalized data dynamic or cache per user key explicitly.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Why is your page fully dynamic when you expected static?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'A dynamic API (cookies, headers, searchParams) or uncached fetch is used in the route.',
                            'Isolate that part with Suspense or cache the rest.',
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
                            'Data Cache',
                            'Full Route Cache',
                            'Router Cache',
                            'use cache',
                            'cacheLife',
                            'cacheTag',
                            'Memoization',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-15',
        topicId: 'nextjs',
        title: 'How does revalidation work?',
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
                            'Revalidation refreshes cached data so users see updated content.',
                            'Time-based: refresh automatically after a set number of seconds.',
                            'On-demand: refresh when you call a function, for example after saving data.',
                            'Used to keep static pages fresh without rebuilding.',
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
                            'Revalidation marks cached data/pages as stale and regenerates them.',
                            '**Time-based** - export const revalidate = N, fetch next.revalidate, or cacheLife() in Cache Components. Serves stale content while regenerating in the background.',
                            '**On-demand by path** - revalidatePath("/blog/my-post").',
                            '**On-demand by tag** - tag cached data (next: { tags: ["posts"] } or cacheTag("posts")) and call revalidateTag("posts"); affects every page using that tag.',
                            '**Next.js 16 refinements** - revalidateTag works as stale-while-revalidate with a cache life profile; updateTag in Server Actions gives read-your-own-writes (immediate expiry); refresh() refreshes uncached data.',
                            '**Where to call** - Server Actions after mutations, Route Handlers for webhooks (verify a secret).',
                            '**Best practice** - prefer tags over many paths, keep a time-based fallback, and secure the webhook endpoint.',
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
                        text: `// Server Action: update then refresh affected cache
    'use server';
    import { revalidatePath, revalidateTag } from 'next/cache';

    export async function publishPost(id: string) {
    await db.post.update({ where: { id }, data: { published: true } });
    revalidateTag('posts', 'max');         // all lists tagged 'posts' (check signature in your version)
    revalidatePath('/blog/' + id);         // the specific page
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'After a mutation, the related cache entries are invalidated so the next request shows fresh data.',
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
                        text: 'In Archer Review, admin edits triggered tag revalidation, so student-facing pages updated immediately without redeploying.',
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
                            'Revalidation refreshes cached content either by time or on demand.',
                            'On-demand uses revalidatePath or revalidateTag, usually from Server Actions or webhooks.',
                            'I tag data so a single call refreshes every page that uses it.',
                            'I keep a time-based fallback and protect webhook endpoints with a secret.',
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
                        text: '**Product price changes in the CMS but listing pages show old prices. How do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Tag product queries and call revalidateTag from a CMS webhook route.',
                            'Verify the webhook secret.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After a user edits their profile, they still see old values until refresh. Why and how do you fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cache is not updated after the mutation.',
                            'Call revalidatePath/updateTag in the Server Action (or refresh) so they see their own change immediately.',
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
                            'revalidate',
                            'revalidatePath',
                            'revalidateTag',
                            'Stale-while-revalidate',
                            'Webhook',
                            'updateTag',
                        ],
                    },
                ],
            },
        ],
    }),
];
