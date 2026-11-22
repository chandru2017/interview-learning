import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const nextQuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 'nx-21',
        topicId: 'nextjs',
        title: 'How do you implement SEO in Next.js?',
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
                            'Use the Metadata API to set title, description and Open Graph tags.',
                            'Make sure content is rendered on the server (SSR/SSG).',
                            'Add sitemap.xml and robots.txt.',
                            'Use proper headings, alt text and fast loading.',
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
                            'SEO = crawlable content + correct metadata + performance + structure.',
                            '**Rendering** - SSR/SSG/ISR so crawlers receive complete HTML; avoid content only available after client fetch.',
                            '**Metadata API** - export metadata or generateMetadata for title, description, canonical, robots, Open Graph, Twitter cards.',
                            '**Files** - app/sitemap.ts, app/robots.ts, opengraph-image.tsx for dynamic social images.',
                            '**Structured data** - JSON-LD (Article, Product, FAQ, BreadcrumbList) in a script tag.',
                            '**URLs** - clean slugs, canonical URLs to avoid duplicates, proper redirects (301/308), hreflang for i18n.',
                            '**Performance** - Core Web Vitals are a ranking factor: next/image, next/font, minimal JS.',
                            '**Semantics and accessibility** - one h1, headings hierarchy, alt text, descriptive links.',
                            '**Status codes** - notFound() returns 404; avoid soft 404s.',
                            '**Verify** - Search Console, Lighthouse, rich result tests.',
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
                        text: `// app/layout.tsx or page.tsx
    import type { Metadata } from 'next';
    export const metadata: Metadata = {
    title: { default: 'Archer Review', template: '%s | Archer Review' },
    description: 'Prepare for your exams with practice questions.',
    alternates: { canonical: 'https://example.com' },
    openGraph: { title: 'Archer Review', type: 'website', images: ['/og.png'] },
    };

    // app/sitemap.ts
    export default async function sitemap() {
    const posts = await getAllPosts();
    return posts.map(p => ({ url: 'https://example.com/blog/' + p.slug, lastModified: p.updatedAt }));
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Metadata and sitemap are generated in code from the same data source as the pages.',
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
                        text: 'In Archer Review, public content pages were statically rendered with proper metadata, sitemap and canonical URLs, which helped them get indexed correctly.',
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
                            'I render content on the server (SSG/SSR/ISR) so crawlers get full HTML.',
                            'I use the Metadata API for titles, descriptions, canonical and Open Graph, plus sitemap.ts and robots.ts.',
                            'I add JSON-LD structured data and use semantic HTML.',
                            'I also optimize Core Web Vitals and verify in Search Console.',
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
                        text: '**Google indexes only your homepage but not product pages. What do you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Are product pages server-rendered (not client-only)?',
                            'Add sitemap, internal links and check robots/noindex.',
                            'Test with Search Console URL inspection.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Same product is accessible at multiple URLs (with filters/params). How do you avoid duplicate content?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Set a canonical URL in metadata.',
                            'Use redirects for old URLs and noindex for filter combinations if needed.',
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
                        items: ['Metadata API', 'sitemap', 'robots', 'Canonical', 'JSON-LD', 'Open Graph'],
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
                            'SEO-ku server-rendered content, Metadata API, canonical/Open Graph tags, sitemap, and robots rules set pannuven.',
                            'Semantic HTML, accessible alt text, clean URLs, and JSON-LD structured data use pannuven.',
                            'Core Web Vitals optimize panni Search Console and Lighthouse-la verify pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Metadata and crawlable content**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Page title, description, canonical URL, and Open Graph tags-ku Next.js Metadata API use pannunga.',
                            'SSR, SSG, or ISR use pannina crawler-ku ready HTML kidaikkum; client-side fetch mudiyum varaikkum content blank-a irukka koodadhu.',
                            'Dynamic content-ku page-specific metadata generate pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Discoverability and structure**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'sitemap.ts and robots.ts create panni search engines-ku pages and crawl rules provide pannunga.',
                            'Heading hierarchy, descriptive links, and image alt text use pannunga.',
                            'Relevant pages-ku JSON-LD structured data add pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Performance and verification**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Images, fonts, and client JavaScript optimize panni Core Web Vitals improve pannunga.',
                            'Duplicate URLs-ku canonical set pannunga; missing pages-ku correct 404 status return pannunga.',
                            'Search Console, Lighthouse, and rich result tools use panni results verify pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-22',
        topicId: 'nextjs',
        title: 'How do you implement dynamic metadata?',
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
                            'Export an async function called generateMetadata from the page.',
                            'It receives the route params and can fetch data.',
                            'It returns the title, description and other tags for that page.',
                            'Used for blog posts, products and profile pages.',
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
                            'Use **generateMetadata** in page.tsx or layout.tsx when metadata depends on route params, search params or fetched data.',
                            '**Params** - in recent versions params and searchParams are Promises, so await them.',
                            '**Deduplication** - fetch calls inside generateMetadata and the page with the same arguments are memoized; use React cache() for ORM calls so data is fetched once.',
                            '**Merging** - metadata from layouts and pages merge; use parent: ResolvingMetadata to extend (e.g., append to parent images).',
                            '**Dynamic OG images** - opengraph-image.tsx using ImageResponse.',
                            '**Not found** - call notFound() when the item does not exist so the correct 404 status and metadata are returned.',
                            '**Streaming** - metadata is resolved before the HTML head is sent for crawlers; keep the fetch fast.',
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
    import type { Metadata } from 'next';
    import { cache } from 'react';

    const getPost = cache(async (slug: string) => db.post.findUnique({ where: { slug } }));

    export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Not found' };
    return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: 'https://example.com/blog/' + slug },
    openGraph: { title: post.title, images: [post.coverImage] },
    };
    }

    export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);     // same call, deduplicated
    return <article>{post?.title}</article>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Metadata is generated per page from the same data, and cache() prevents a double database query.',
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
                        text: 'In Archer Review, each content page generated its own title, description and Open Graph image from the content record, so shared links looked right on social platforms.',
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
                            'I export generateMetadata from the page, await the params, fetch the needed data and return title, description, canonical and Open Graph.',
                            'I wrap data access in React cache() so the page and metadata share one query.',
                            'I call notFound() for missing items and use opengraph-image for dynamic social images.',
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
                        text: '**Social previews show the same title for every blog post. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Only static metadata is defined in layout.',
                            'Add generateMetadata per post with its own title/description/image.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**generateMetadata and the page both query the same record. Is it two queries?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'fetch is memoized automatically; for ORM wrap in React cache().',
                            'Result: a single query per request.',
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
                            'generateMetadata',
                            'Async params',
                            'cache()',
                            'Open Graph',
                            'notFound',
                            'ImageResponse',
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
                            'Route params or fetched content base panni metadata change aana page.tsx-la async generateMetadata export pannuven.',
                            'Title, description, canonical, and Open Graph values return panni, missing record-ku notFound() call pannuven.',
                            'Page and metadata same data fetch panna fetch memoization or React cache() use panni duplicate query avoid pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Dynamic metadata eppo thevai?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Blog post, product, or profile madhiri ovvoru route-kum title and description maarina dynamic metadata use pannalam.',
                            'App Router-la page.tsx or layout.tsx-la generateMetadata function export pannuvom.',
                            'Function route params and data fetch panni Metadata object return pannum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Data and metadata fields**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Recent Next.js versions-la params Promise-a irukkalam; adhai await panni slug/id edukkanum.',
                            'Title, description, canonical, Open Graph image madhiri fields content-lendhu populate pannalam.',
                            'Record kidaikkalana notFound() call panni correct 404 response return pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Duplicate fetch avoid pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'generateMetadata-um page-um same fetch arguments use pannina fetch memoization query deduplicate pannum.',
                            'ORM call-ku React cache() wrap panni same request-la result reuse pannalam.',
                            'Layout metadata-oda merge behavior consider panni parent metadata extend pannalam.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-23',
        topicId: 'nextjs',
        title: 'How do you optimize images?',
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
                            'Use the next/image component instead of the plain img tag.',
                            'It resizes images, serves modern formats like WebP/AVIF and lazy-loads them.',
                            'Always set width and height (or fill) to avoid layout shift.',
                            'Mark the main above-the-fold image as priority.',
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
                            'next/image automates most image optimization.',
                            '**Responsive sizes** - generates multiple widths; use the **sizes** prop so the browser picks the right one.',
                            '**Modern formats** - serves WebP/AVIF depending on browser (configurable in next.config images.formats).',
                            '**Lazy loading** - below-the-fold images load when near the viewport.',
                            '**LCP image** - use priority (preload) for the hero image, never lazy-load it.',
                            '**Layout stability** - width/height or fill with a sized parent prevents CLS; placeholder="blur" improves perceived loading.',
                            '**Remote images** - allow hosts via images.remotePatterns.',
                            '**Caching and CDN** - optimized images are cached; use a CDN/image service for large scale; set minimumCacheTTL.',
                            '**Source hygiene** - upload reasonably sized originals, use SVG for icons, avoid huge GIFs (use video).',
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
                        text: `import Image from 'next/image';

    <Image
    src="/hero.jpg"
    alt="Students studying"
    width={1200}
    height={600}
    priority                       // LCP image
    sizes="(max-width: 768px) 100vw, 1200px"
    />

    // next.config.ts
    const nextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.example.com' }],
    },
    };`,
                    },
                    {
                        type: 'highlight',
                        text: 'The hero image is preloaded with the right size and format, and dimensions reserve space to avoid layout shift.',
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
                        text: 'In Archer Review, replacing plain img tags with next/image and setting sizes reduced image weight and improved LCP on mobile.',
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
                            'I use next/image, which resizes, converts to WebP/AVIF, lazy-loads and prevents layout shift.',
                            'I set the sizes prop for responsive images and priority for the LCP hero image.',
                            'I configure remotePatterns for external images and use a CDN.',
                            'I also check original image size and use blur placeholders.',
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
                        text: '**Lighthouse says LCP is the hero image at 4.5s. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use next/image with priority/preload, correct sizes and modern format.',
                            'Reduce the original size and make sure it is not lazy-loaded.',
                            'Serve via CDN.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Product images from an external CMS fail to load with next/image. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The host is not allowed in images.remotePatterns.',
                            'Add the hostname and path pattern in next.config.',
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
                            'next/image',
                            'sizes',
                            'priority',
                            'AVIF/WebP',
                            'Lazy loading',
                            'CLS',
                            'remotePatterns',
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
                            'next/image use panni responsive sizes, optimized format, and lazy loading configure pannuven.',
                            'Width/height or fill with sized parent set panni layout shift avoid pannuven; hero LCP image-ku priority/preload use pannuven.',
                            'External image host-ah remotePatterns-la allow panni, source size and CDN behavior-um verify pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**next/image use pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'next/image browser-ku suitable-aana image size and format serve panna help pannum.',
                            'sizes prop set panna responsive layout-ku thevaiyana image width browser select pannum.',
                            'Below-the-fold image lazy load aagum; above-the-fold hero image-ku priority/preload use pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Layout shift and accessibility**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'width/height set pannunga illa fill use pannumbodhu parent-ku dimensions kudunga; image load aaguradhukku munnaadi space reserve aagum.',
                            'Idhu CLS reduce pannum; placeholder="blur" perceived loading improve pannalam.',
                            'Image-ku meaningful alt text kudunga; decorative image-na empty alt use pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Remote images and source quality**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'External image domains-ah next.config image remotePatterns-la allow pannunga.',
                            'Periya original files reduce panni, icon-ku SVG use pannunga; image CDN use pannina caching and delivery check pannunga.',
                            'LCP improve aagudha nu Lighthouse or field Web Vitals-la measure pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-24',
        topicId: 'nextjs',
        title: 'How would you improve Core Web Vitals in Next.js?',
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
                            'Core Web Vitals are LCP (loading), INP (interactivity) and CLS (visual stability).',
                            'Improve LCP with optimized hero images and fast server response.',
                            'Improve INP by sending less JavaScript.',
                            'Improve CLS by reserving space for images, fonts and ads.',
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
                            'Measure first (field data from CrUX/Search Console, Lighthouse, web-vitals library, Vercel Speed Insights), then target each metric.',
                            '**LCP** - static/ISR or cached HTML, fast TTFB, next/image priority for hero, preload fonts, avoid client-side data fetching for above-the-fold content, CDN.',
                            '**INP** - reduce JavaScript (Server Components, smaller client boundaries, dynamic imports), avoid long tasks, use useTransition/useDeferredValue, defer third-party scripts, virtualize large lists.',
                            '**CLS** - width/height or aspect-ratio on images and embeds, next/font (no font swap shift), reserve space for dynamic content, skeletons matching final size.',
                            '**TTFB** - cache, ISR, streaming, DB close to server.',
                            '**Third-party scripts** - next/script with afterInteractive/lazyOnload strategy, @next/third-parties for common embeds.',
                            '**Monitoring** - useReportWebVitals, RUM, performance budgets in CI.',
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
                        text: `// Fonts without layout shift
    import { Inter } from 'next/font/google';
    const inter = Inter({ subsets: ['latin'], display: 'swap' });

    // Defer analytics
    import Script from 'next/script';
    <Script src="https://example.com/analytics.js" strategy="lazyOnload" />

    // Keep UI responsive during heavy updates
    const [isPending, startTransition] = useTransition();
    startTransition(() => setFilter(value));`,
                    },
                    {
                        type: 'highlight',
                        text: 'Self-hosted optimized fonts prevent shifts, third-party scripts load late, and transitions keep input responsive.',
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
                        text: 'In Archer Review, we improved LCP with optimized hero images and static rendering, and INP by reducing client JavaScript and deferring analytics.',
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
                            'I measure with field data and Lighthouse, then fix each metric.',
                            'For LCP: static/cached rendering, fast TTFB, optimized priority hero image. For INP: less client JavaScript, Server Components, deferred third-party scripts, transitions. For CLS: fixed image sizes, next/font and reserved space.',
                            'I monitor with web-vitals reporting and keep performance budgets in CI.',
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
                        text: '**INP is poor on a product listing with filters. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Profile long tasks; reduce client JS and avoid heavy re-renders.',
                            'Use useTransition/useDeferredValue and virtualize large lists.',
                            'Move filtering to the server if possible.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**CLS spikes when ads and cookie banner load. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reserve fixed space (min-height/aspect-ratio) for ad slots.',
                            'Overlay the banner (position: fixed) instead of pushing content.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Google Search Console shows poor LCP on mobile only. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Test on throttled mobile in Lighthouse.',
                            'Reduce hero image size, preload it, cut render-blocking JS and third-party scripts.',
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
                        items: ['LCP', 'INP', 'CLS', 'TTFB', 'next/font', 'next/script', 'Field data'],
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
                            'First field Web Vitals and Lighthouse-la measure panni LCP, INP, CLS-la edhu bottleneck nu identify pannuven.',
                            'LCP-ku fast/cached response and optimized hero image; INP-ku less JavaScript and shorter main-thread work; CLS-ku reserved dimensions use pannuven.',
                            'Real-user monitoring and CI performance budgets use panni changes result-ah verify pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Measure and choose the metric**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Core Web Vitals-la LCP loading, INP interaction response, CLS visual stability measure pannum.',
                            'Field data and Lighthouse use panni slow metric and affected route/device identify pannunga.',
                            'Metric therinja piragu adhukku relevant fix prioritize pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**LCP and INP improve pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'LCP-ku TTFB reduce pannunga, static/cache use pannunga, hero image optimize panni preload pannunga.',
                            'INP-ku client JavaScript reduce panni, long tasks and heavy re-renders avoid pannunga.',
                            'Third-party scripts defer pannunga; heavy updates-ku useTransition or useDeferredValue consider pannalam.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**CLS and ongoing monitoring**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Images, embeds, ads-ku width/height or aspect ratio set panni space reserve pannunga.',
                            'Fonts and dynamic banners load aagumbodhu content jump aagama next/font and stable layout use pannunga.',
                            'Web Vitals reporting and CI performance budgets use panni regression monitor pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'nx-25',
        topicId: 'nextjs',
        title: 'How would you migrate a large Pages Router application to App Router?',
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
                            'Migrate step by step, not all at once.',
                            'Both routers can work together in the same project.',
                            'Move one route at a time from pages/ to app/.',
                            'Replace getServerSideProps and getStaticProps with async Server Components.',
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
                            'Use an **incremental migration**: pages/ and app/ coexist, and the same URL cannot exist in both.',
                            '**Prepare** - upgrade Next.js and React, Node version, fix lint/type errors, add tests/e2e for key flows.',
                            '**Root layout** - replace _app.tsx and _document.tsx with app/layout.tsx; move providers into a "use client" Providers component.',
                            '**Data fetching** - getServerSideProps/getStaticProps become async Server Components with fetch/DB calls and revalidate/caching; getStaticPaths becomes generateStaticParams.',
                            '**Client code** - add "use client" to components using hooks/browser APIs; keep the boundary small.',
                            '**Routing APIs** - next/router becomes next/navigation (useRouter, usePathname, useSearchParams); no router.query, use params.',
                            '**Head and SEO** - next/head becomes Metadata API.',
                            '**API routes** - can stay in pages/api for now, then convert to Route Handlers.',
                            '**Order** - start with simple/leaf and low-risk routes (static pages), then complex ones; migrate shared layout last or early depending on structure.',
                            '**Verify** - compare behavior, SEO output, performance; roll out with feature flags and monitoring.',
                            '**Watch for** - caching defaults of your version, async params in newer versions, third-party libs not supporting server components, state libraries needing client providers.',
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
                        text: `// BEFORE: pages/posts/[id].tsx
    export async function getServerSideProps({ params }) {
    const post = await getPost(params.id);
    return { props: { post } };
    }
    export default function PostPage({ post }) { return <Article post={post} />; }

    // AFTER: app/posts/[id]/page.tsx
    export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPost(id);
    return <Article post={post} />;
    }

    // app/layout.tsx replaces _app.tsx
    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body><Providers>{children}</Providers></body></html>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Data fetching moves into the component, and the root layout with a client-side Providers wrapper replaces _app.',
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
                        text: 'In Archer Review, new features were built in app/ first, and existing pages were migrated route by route, with e2e tests protecting critical flows.',
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
                            'I migrate incrementally because pages and app routers can coexist.',
                            'I start with the root layout and providers, then migrate simple routes first, replacing getServerSideProps and getStaticProps with async Server Components and generateStaticParams.',
                            'I update router imports to next/navigation, head to the Metadata API, and add "use client" only where needed.',
                            'I protect the process with e2e tests, SEO checks and gradual rollout.',
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
                        text: '**Team cannot stop feature work for the migration. How do you plan?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Build all new routes in app/ and migrate old pages gradually.',
                            'Allocate small per-sprint migration goals and track routes migrated.',
                            'Add e2e tests before migrating each critical route.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**After migrating a page, state management library and UI kit throw errors. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'They need client context/hooks; Server Components cannot use them.',
                            'Create a client Providers component and mark UI components with "use client" where needed.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page worked in pages/ but data seems stale in app/. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Caching behavior is different in the App Router.',
                            'Check revalidate/cache settings for your Next.js version and set dynamic or revalidation where needed.',
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
                            'Incremental migration',
                            'app/ and pages/',
                            'Root layout',
                            'Server Components',
                            'next/navigation',
                            'generateStaticParams',
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
                            'Migration-ah incremental-a pannuven; pages/ and app/ coexist pannalaam, aana same URL rendu router-layum define panna koodadhu.',
                            'Simple low-risk routes-la start panni, data fetching, layouts, navigation, and metadata APIs-ah App Router patterns-ku migrate pannuven.',
                            'Critical flows-ku e2e tests, SEO/performance checks, and gradual rollout use panni behavior compare pannuven.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Plan and prepare**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Full app-ah ore shot-la rewrite pannaama pages/ and app/ coexist aagura incremental migration plan pannunga.',
                            'Critical user flows-ku e2e tests add panni current behavior baseline record pannunga.',
                            'Simple, low-risk routes-lendhu start panni migration progress-ah track pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Router APIs update pannradhu**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Root layout-la _app.tsx and _document.tsx responsibilities move pannunga; client providers-ah small "use client" component-la veinga.',
                            'getServerSideProps/getStaticProps-ku badhila async Server Components-la data fetch pannunga; getStaticPaths-ku generateStaticParams use pannunga.',
                            'next/router-ah next/navigation-ku, next/head-ah Metadata API-ku migrate pannunga.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Verify and roll out**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Hooks or browser APIs use pannura components-ku mattum Client Component boundary add pannunga.',
                            'Cache defaults and async params madhiri Next.js version differences check pannunga.',
                            'Route-by-route e2e, SEO, and performance compare panni gradual-a release pannunga.',
                        ],
                    },
                ],
            },
        ],
    }),
];
