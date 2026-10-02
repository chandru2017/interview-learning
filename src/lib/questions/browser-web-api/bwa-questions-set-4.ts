import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const bwaQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'br-16',
        topicId: 'browser-web-api',
        title: 'What is the Critical Rendering Path?',
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
                            'It is the sequence of steps the browser takes to show the first pixels on the screen.',
                            'It includes getting HTML, CSS, building DOM and CSSOM, layout and paint.',
                            'Optimizing it makes your page appear faster.',
                            'Key idea: load only what is needed for the first screen first.',
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
                            'The Critical Rendering Path (CRP) is the minimum work between receiving bytes and first render: **HTML + CSS (+ blocking JS) → DOM + CSSOM → render tree → layout → paint**.',
                            '**Resources that block** - CSS blocks rendering; synchronous JS blocks HTML parsing (and waits for CSSOM before executing).',
                            '**Metrics affected** - FCP, LCP, TTFB, and render-blocking time.',
                            '**Optimizations** - minimize critical resources, bytes and round trips.',
                            '**CSS** - inline critical CSS, load the rest async (media or preload trick), minify, remove unused, split by route.',
                            '**JS** - defer or async scripts, code split, avoid large synchronous scripts in head.',
                            '**Network** - preload key resources (fonts, LCP image), preconnect, CDN, compression (brotli), HTTP/2/3, caching.',
                            '**HTML** - send early, stream, keep head small, put important content early; fetchpriority="high" for LCP image.',
                            '**Measure** - Lighthouse, WebPageTest, DevTools Performance and Coverage.',
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
                        text: `<head>
    <link rel="preconnect" href="https://cdn.example.com" crossorigin>
    <style>/* critical above-the-fold CSS inlined */ body{margin:0} .hero{min-height:60vh}</style>
    <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/app.css" media="print" onload="this.media='all'">
    </head>
    <body>
    <img src="/hero.webp" fetchpriority="high" width="1200" height="600" alt="Hero">
    <script src="/app.js" defer></script>
    </body>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Critical CSS is inline, non-critical CSS loads without blocking, scripts are deferred and the hero image is prioritized.',
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
                        text: 'In Archer Review, inlining critical CSS, deferring scripts and preloading the hero image improved First Contentful Paint and LCP on slow networks.',
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
                            'The Critical Rendering Path is the sequence from HTML and CSS to DOM, CSSOM, render tree, layout and paint for the first screen.',
                            'CSS and synchronous JS are render-blocking, so I inline critical CSS, defer scripts and reduce critical resources.',
                            'I preload key assets, use a CDN and compression, and measure FCP and LCP with Lighthouse.',
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
                        text: '**Lighthouse flags render-blocking resources and FCP is 4s. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Inline critical CSS and load the remaining CSS asynchronously.',
                            'Add defer to scripts, split bundles and remove unused code.',
                            'Preconnect/preload key resources and use a CDN.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**What is the difference between async and defer for scripts?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Both download without blocking parsing. async runs as soon as downloaded (order not guaranteed); defer runs after parsing finishes, in order.',
                            'Use defer for app scripts that depend on DOM/order, async for independent scripts like analytics.',
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
                            'Critical path',
                            'Render-blocking',
                            'Critical CSS',
                            'defer/async',
                            'preload',
                            'FCP/LCP',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-17',
        topicId: 'browser-web-api',
        title: 'What is a CDN?',
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
                            'CDN means Content Delivery Network.',
                            'It is a group of servers around the world that store copies of your files.',
                            'Users get files from the nearest server, so the site loads faster.',
                            'It also reduces the load on your main server.',
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
                            'A CDN is a globally distributed network of **edge servers (PoPs)** that cache and deliver content close to users.',
                            '**Benefits** - lower latency (shorter distance), higher throughput, offloads the origin, handles traffic spikes, DDoS/WAF protection, TLS termination, HTTP/2/3 and compression at the edge.',
                            '**How it works** - DNS or anycast routes the user to the nearest edge; on a cache hit the edge responds; on a miss it fetches from the origin, stores it according to Cache-Control, and serves it.',
                            '**What to put on a CDN** - static assets (JS, CSS, images, fonts, video), and optionally cacheable HTML/API responses.',
                            '**Cache control** - Cache-Control/s-maxage, Vary, cache keys (query strings, cookies), purge/invalidation (by URL, tag), stale-while-revalidate.',
                            '**Edge compute** - run logic at the edge (redirects, auth checks, A/B tests, personalization, image resizing).',
                            '**Pitfalls** - caching personalized content by mistake, stale content without invalidation, low cache hit ratio from unnecessary query params or cookies.',
                            'Examples: Cloudflare, Akamai, Fastly, CloudFront, Vercel/Netlify edge networks.',
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
                        text: `# Origin response headers for a CDN
    # Static, versioned assets
    Cache-Control: public, max-age=31536000, immutable

    # HTML cached at the CDN for 60s, browser always revalidates
    Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=300

    # Personalized response - never cache at shared caches
    Cache-Control: private, no-store

    # Check if CDN served it
    x-cache: HIT        (header name varies by provider)`,
                    },
                    {
                        type: 'highlight',
                        text: 'Headers tell the CDN what to cache, for how long, and what must never be shared between users.',
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
                        text: 'In Archer Review, static assets and public pages were served from a CDN with long-lived hashed assets, which cut load times for users far from the origin and reduced server load.',
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
                            'A CDN is a network of edge servers that cache content close to users, reducing latency and origin load.',
                            'It serves static assets and can cache HTML/API responses based on Cache-Control headers.',
                            'It also adds security, TLS, compression and HTTP/2/3 support.',
                            'I watch cache hit ratio, avoid caching personalized responses, and use purge or tag invalidation for updates.',
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
                        text: '**You updated an image but users still see the old one through the CDN. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Purge the URL (or tag) at the CDN.',
                            'Long-term: use versioned/hashed filenames so updates get a new URL.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**CDN cache hit ratio is only 20%. Why might that be?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'URLs vary due to random query params or cookies in the cache key; short TTLs; Vary headers.',
                            'Normalize cache keys, ignore irrelevant params and increase TTLs for static content.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Users in Asia experience slow API responses while Europe is fast. What are options?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use the CDN for cacheable API responses and edge caching.',
                            'Deploy regional servers/replicas or edge functions closer to users.',
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
                        items: ['CDN', 'Edge server', 'Cache hit', 'Origin', 's-maxage', 'Purge', 'Latency'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-18',
        topicId: 'browser-web-api',
        title: 'How does browser caching affect frontend performance?',
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
                            'Cached files do not need to be downloaded again, so repeat visits are much faster.',
                            'It reduces network requests and data usage.',
                            'It lowers load on the server.',
                            'But wrong caching can show users old files after a new release.',
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
                            'Caching is one of the biggest performance wins: the fastest request is the one never made.',
                            '**Speed** - cache hits avoid DNS, connection, download time; improves LCP and repeat-visit load times.',
                            '**Bandwidth and cost** - fewer bytes from origin/CDN; helps mobile and slow networks.',
                            '**Server load** - 304 revalidations and cache hits reduce origin work.',
                            '**Best practice** - fingerprint assets (content hash) and cache them for a long time with immutable; keep HTML short-lived or revalidated so it references the newest assets.',
                            '**Granular bundles** - split vendor and app code so a small change does not invalidate everything.',
                            '**Stale-while-revalidate** - serve cached content instantly and update in the background.',
                            '**Service workers / Cache API** - offline support and custom strategies (cache-first, network-first).',
                            '**Risks** - stale code/data after deploys, caching private data, version skew between HTML and assets (keep old assets available for a while).',
                            '**Measure** - DevTools Network ("disk cache", "memory cache", 304), Lighthouse "Serve static assets with an efficient cache policy".',
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
                        text: `// Service worker: cache-first for static assets
    self.addEventListener('fetch', event => {
    if (event.request.destination === 'script' || event.request.destination === 'style') {
    event.respondWith(
    caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(res => {
        const copy = res.clone();
        caches.open('static-v1').then(c => c.put(event.request, copy));
        return res;
        })
    )
    );
    }
    });

    // Response headers
    // /assets/app.9f3c1.js  -> Cache-Control: public, max-age=31536000, immutable
    // /index.html           -> Cache-Control: no-cache`,
                    },
                    {
                        type: 'highlight',
                        text: 'Versioned assets are reused instantly from cache, while HTML is revalidated so users always get the latest file references.',
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
                        text: 'In Archer Review, content-hashed bundles with long cache lifetimes made repeat visits almost instant, and short-lived HTML ensured each deployment reached users immediately.',
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
                            'Browser caching removes repeated downloads, so repeat visits are faster and use less bandwidth, improving LCP and reducing server load.',
                            'I fingerprint static assets with long max-age and immutable, while keeping HTML revalidated.',
                            'I split bundles so small changes do not invalidate the whole cache.',
                            'I watch for stale content and never cache private data in shared caches.',
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
                        text: '**Returning users still download 2MB of JS on every visit. How do you investigate?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check response headers (Cache-Control, ETag) and whether file names are stable/hashed.',
                            'Set long-term caching for hashed assets and ensure the CDN is not stripping headers.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After deploy, users get errors loading old chunk files (404). Why and how do you prevent it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Cached HTML points to old hashed chunks that were deleted from the server.',
                            'Keep previous build assets available for some time and avoid long caching of HTML.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need the app shell to work offline. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a service worker with a precache of the shell and cache-first for static assets.',
                            'Use network-first or stale-while-revalidate for API data and handle versioned cache cleanup.',
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
                            'Cache-Control',
                            'Fingerprinting',
                            'Immutable',
                            'stale-while-revalidate',
                            'Service worker',
                            'Cache hit',
                        ],
                    },
                ],
            },
        ],
    }),
];
