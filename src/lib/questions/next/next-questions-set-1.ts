import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const nextQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'nx-1',
        topicId: 'nextjs',
        title: 'Why use Next.js instead of React alone?',
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
                            'React only builds the UI. Next.js is a full framework built on top of React.',
                            'Next.js gives routing, server rendering, API endpoints and optimizations out of the box.',
                            'Pages load faster and are better for SEO.',
                            'You write less setup code and ship faster.',
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
                            'React is a UI library. A plain React (SPA) app needs you to choose and wire routing, bundling, data fetching, SSR and SEO yourself.',
                            '**Rendering options** - SSR, SSG, ISR and streaming, chosen per route, not just client-side rendering.',
                            '**File-based routing** - nested layouts, loading and error states, dynamic routes, parallel/intercepting routes.',
                            '**Server Components and Server Actions** - less client JavaScript and simple server mutations.',
                            '**Built-in optimizations** - next/image, next/font, next/script, code splitting, prefetching.',
                            '**SEO** - HTML is sent from the server and the Metadata API handles titles, OG tags, sitemaps.',
                            '**Full-stack capability** - Route Handlers, proxy/middleware, so a separate small backend is often not needed.',
                            '**Trade-offs** - more concepts (server/client boundary, caching), framework lock-in, and a Node/server runtime for dynamic features. A pure SPA behind login with no SEO needs may not need it.',
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
                        text: `// app/products/[id]/page.tsx - Server Component, fetches on the server
    export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct(id);   // direct DB/API call, no client JS
    return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Routing, server data fetching and HTML rendering come from the framework with no extra setup or client-side loading spinner.',
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
                        text: 'In Archer Review, public pages needed good SEO and fast first load, so Next.js SSR/SSG gave us this without custom server setup, while interactive parts stayed in client components.',
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
                            'React is only the UI layer, while Next.js adds routing, multiple rendering strategies, server components, API routes and built-in optimizations.',
                            'It improves performance and SEO and reduces setup because of conventions.',
                            'The trade-off is framework complexity and server requirements.',
                            'For SEO-sensitive or content-heavy apps I choose Next.js; for a simple internal SPA, plain React may be enough.',
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
                        text: '**Your marketing site built with a React SPA is not ranking on Google and loads slowly. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move to Next.js so HTML is rendered on the server/at build time.',
                            'Use SSG/ISR for marketing pages and Metadata API for SEO.',
                            'Optimize images/fonts with next/image and next/font.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A team is building an internal admin dashboard behind login. Do you need Next.js?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'SEO is not needed, so a plain React SPA (Vite) can be enough.',
                            'Choose Next.js only if you want its routing, server actions or one full-stack codebase.',
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
                        items: ['Framework', 'SSR', 'SSG', 'File-based routing', 'Server Components', 'SEO'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-2',
        topicId: 'nextjs',
        title: 'SSR vs CSR vs SSG vs ISR.',
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
                            'CSR: the browser builds the page with JavaScript after loading.',
                            'SSR: the server builds the HTML on every request.',
                            'SSG: the HTML is built once at build time.',
                            'ISR: static pages that refresh in the background after some time or on demand.',
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
                            '**CSR (Client-Side Rendering)** - empty HTML shell, JS fetches data and renders. Good for private, highly interactive pages; weak for SEO and first paint.',
                            '**SSR (Server-Side Rendering)** - HTML generated per request with fresh data. Good for personalized or frequently changing pages; costs server time (TTFB).',
                            '**SSG (Static Site Generation)** - HTML generated at build time and served from CDN. Fastest and cheapest; data is as old as the last build.',
                            '**ISR (Incremental Static Regeneration)** - static pages regenerated after a time interval or on demand without a full rebuild.',
                            '**In the App Router** - these are not separate APIs: a route is static or dynamic based on what it uses (cookies, headers, uncached fetch, searchParams), and cache/revalidate settings control ISR behavior.',
                            '**Mix per route** - marketing pages SSG/ISR, dashboard SSR/CSR, product pages ISR.',
                            '**Streaming + Suspense** - lets SSR send the shell early and fill slow parts later.',
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
                        text: `// SSG / ISR style (static, refreshed every 60s)
    export const revalidate = 60;
    export default async function Blog() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
    }
    
    // SSR style (dynamic per request)
    import { cookies } from 'next/headers';
    export default async function Dashboard() {
    const token = (await cookies()).get('token');   // dynamic API makes it per-request
    const data = await getUserData(token?.value);
    return <DashboardView data={data} />;
    }
    
    // CSR style
    'use client';
    export function Live() {
    const { data } = useSWR('/api/live', fetcher);   // fetched in the browser
    return <Widget data={data} />;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Same framework, different strategies per route: static with revalidation, dynamic per request, or client-only fetching.',
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
                        text: 'In Archer Review, marketing/content pages were static with revalidation, student dashboards were dynamic, and live widgets such as timers fetched on the client.',
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
                            'CSR renders in the browser, SSR renders on the server per request, SSG renders at build time, and ISR is static with background regeneration.',
                            'I choose per route based on data freshness, personalization and SEO needs.',
                            'In the App Router, static or dynamic is decided by what the route uses and the cache/revalidate settings.',
                            'Typically: SSG/ISR for content, SSR for personalized pages, CSR for private interactive parts.',
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
                        text: '**E-commerce product pages: 100k products, prices change a few times a day. Which strategy?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'ISR (static + revalidate or on-demand revalidation when price changes).',
                            'Pre-render top products, generate others on demand.',
                            'Keep cart/stock widgets as client or dynamic parts.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A news homepage must show breaking news within seconds. What do you choose?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'SSR or short revalidate with CDN caching, plus tag-based on-demand revalidation when the editor publishes.',
                            'Stream slower sections with Suspense.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A private analytics dashboard with heavy interactivity - best approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Server-render the shell and initial data, then client components with a data library for live updates.',
                            'SEO is irrelevant here.',
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
                        items: ['CSR', 'SSR', 'SSG', 'ISR', 'TTFB', 'Streaming', 'Revalidate'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-3',
        topicId: 'nextjs',
        title: 'When would you choose SSR?',
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
                            'Choose SSR when the page must show fresh or user-specific data on every request.',
                            'It is good for SEO because the HTML is ready from the server.',
                            'Examples: dashboards, search results, account pages.',
                            'It is slower and costlier than static pages.',
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
                            'Choose SSR when **data cannot be generated ahead of time** or differs per request.',
                            '**Personalization** - content depends on cookies, session, locale or headers.',
                            '**Real-time freshness** - prices, stock, live scores where staleness is unacceptable.',
                            '**SEO + dynamic data** - search results pages or listings with filters in the URL.',
                            '**Request-dependent logic** - geolocation, A/B variants, auth-gated content.',
                            '**Costs** - higher TTFB, server compute per request, harder to cache on CDN; mitigate with streaming, Suspense, caching of data and partial prerendering.',
                            '**Do not use SSR** when content is the same for everyone and changes rarely - use SSG/ISR instead.',
                            'In the App Router, a route becomes dynamic when it reads cookies(), headers(), searchParams or uses uncached data (or export const dynamic = "force-dynamic").',
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
                        text: `// app/search/page.tsx - results depend on the query, rendered per request
    export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const { q } = await searchParams;
    const results = await searchProducts(q ?? '');
    return <Results items={results} query={q} />;
    }
    
    // Force dynamic rendering
    export const dynamic = 'force-dynamic';`,
                    },
                    {
                        type: 'highlight',
                        text: 'Reading searchParams makes the page dynamic, so the server renders fresh HTML per request.',
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
                        text: 'In Archer Review, personalized pages that depend on the signed-in student were rendered dynamically, while shared content was static.',
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
                            'I choose SSR when content is personalized, must be real-time fresh, or depends on request data like cookies and query params, and still needs SEO or a fast first paint.',
                            'I avoid it for content identical for all users because static or ISR is cheaper and faster.',
                            'I reduce SSR cost with streaming, Suspense and data caching.',
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
                        text: '**A job-search page filters by query, location and salary. Which rendering?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'SSR (dynamic) because results depend on search params and need SEO.',
                            'Cache the underlying data queries and stream the results list.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**SSR page TTFB is 2 seconds because of a slow API. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Wrap slow parts in Suspense with loading fallback so the shell streams first.',
                            'Fetch in parallel with Promise.all and cache stable data.',
                            'Move non-critical data to the client.',
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
                        items: ['SSR', 'Dynamic rendering', 'Personalization', 'TTFB', 'Streaming', 'cookies()'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-4',
        topicId: 'nextjs',
        title: 'When would you choose SSG?',
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
                            'Choose SSG when the content is the same for everyone and does not change often.',
                            'Pages are built once and served from a CDN, so they load very fast.',
                            'Examples: blogs, docs, landing pages, marketing sites.',
                            'You need a rebuild (or revalidation) to update content.',
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
                            'SSG pre-renders HTML at build time, giving the **best performance, lowest cost and high reliability**.',
                            '**Ideal for** - docs, blogs, marketing, landing pages, changelogs, case studies.',
                            '**Benefits** - served by CDN, near-zero TTFB, great Core Web Vitals and SEO, easy to scale.',
                            '**Dynamic routes** - use generateStaticParams to list the pages to pre-render.',
                            '**Limits** - build time grows with page count, content is stale until rebuild/revalidate, no per-user data in the HTML.',
                            '**Mitigation** - ISR/on-demand revalidation, dynamicParams for on-demand generation, hydrate user-specific bits on the client.',
                            'Rule: start static by default, and go dynamic only where needed.',
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
                        text: `// app/blog/[slug]/page.tsx
    export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map(p => ({ slug: p.slug }));   // pre-render all posts at build
    }
    
    export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    return <article><h1>{post.title}</h1>{post.body}</article>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'generateStaticParams tells Next.js which pages to build ahead of time.',
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
                        text: 'In Archer Review, informational pages such as FAQs and guides were pre-rendered, so they loaded instantly from the CDN and ranked well.',
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
                            'I choose SSG when content is identical for all users and changes infrequently, such as blogs, docs and landing pages.',
                            'It gives the fastest load, lowest cost and best SEO.',
                            'I use generateStaticParams for dynamic routes, and ISR if content must refresh without a full rebuild.',
                            'User-specific parts load on the client.',
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
                        text: '**A docs site with 5,000 pages takes 40 minutes to build. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pre-render only the most visited pages with generateStaticParams.',
                            'Let the rest generate on demand and cache (ISR / dynamicParams).',
                            'Use incremental builds and a faster bundler.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Marketing page is static but needs a logged-in user name in the header. How?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Keep the page static and fetch user info in a small client component.',
                            'Or isolate the dynamic part with Suspense (Partial Prerendering / cache components).',
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
                        items: ['SSG', 'generateStaticParams', 'Build time', 'CDN', 'Static', 'Pre-render'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-5',
        topicId: 'nextjs',
        title: 'What is ISR?',
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
                            'ISR means Incremental Static Regeneration.',
                            'Pages are static, but Next.js can refresh them after a set time or when you tell it to.',
                            'You get static speed with fairly fresh content.',
                            'No full site rebuild is needed.',
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
                            'ISR serves a cached static page, then **regenerates it in the background** so the next visitor gets updated content (stale-while-revalidate).',
                            '**Time-based** - export const revalidate = 60 or fetch(url, { next: { revalidate: 60 } }).',
                            '**On-demand** - revalidatePath("/blog") or revalidateTag("posts") from a Server Action or Route Handler (e.g., CMS webhook).',
                            '**New paths** - generateStaticParams plus dynamicParams lets unknown pages be generated on first request and then cached.',
                            '**Benefits** - CDN speed, scales to huge page counts, no full rebuilds.',
                            '**Caveats** - first visitor after expiry may see stale content; the cache layer depends on hosting (self-hosting needs a shared cache for multiple instances).',
                            '**Next.js 16** - Cache Components with "use cache" and cacheLife() express the same idea (cache with lifetimes and tags) in a more explicit way.',
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
                        text: `// Time-based ISR
    export const revalidate = 3600;   // regenerate at most once per hour
    
    // On-demand revalidation (webhook from CMS)
    // app/api/revalidate/route.ts
    import { revalidateTag } from 'next/cache';
    export async function POST(req: Request) {
    const { secret, tag } = await req.json();
    if (secret !== process.env.REVALIDATE_SECRET) return new Response('Unauthorized', { status: 401 });
    revalidateTag(tag, 'max');   // check the signature for your Next.js version
    return Response.json({ revalidated: true });
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Pages stay static and fast, and update either on a timer or immediately when the CMS calls the webhook.',
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
                        text: 'In Archer Review, content pages updated through a CMS-style flow used revalidation, so editors saw changes live without redeploying the app.',
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
                            'ISR serves static pages and regenerates them in the background based on time or on-demand triggers.',
                            'It gives static speed with fresh-enough content and avoids full rebuilds.',
                            'I use time-based revalidate for general freshness and tag/path revalidation from webhooks for immediate updates.',
                            'In Next.js 16 the equivalent is explicit caching with "use cache", cacheLife and cacheTag.',
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
                        text: '**An editor publishes an article but users still see the old version for an hour. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add on-demand revalidation (tag or path) from a CMS webhook.',
                            'Keep the time-based revalidate as a safety net.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You self-host Next.js on 3 servers and users see different versions of the same page. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Each instance has its own local cache.',
                            'Use a shared cache handler (e.g., Redis) or a platform that supports shared ISR cache.',
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
                            'ISR',
                            'revalidate',
                            'Stale-while-revalidate',
                            'revalidateTag',
                            'On-demand',
                            'generateStaticParams',
                        ],
                    },
                ],
            },
        ],
    }),
];
