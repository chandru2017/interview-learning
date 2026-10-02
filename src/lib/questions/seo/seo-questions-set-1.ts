import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const seoQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'seo-1',
        topicId: 'seo',
        title: 'What is technical SEO?',
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
                            'Technical SEO means improving the technical structure of a website so search engines can crawl, understand, and index the pages.',
                            'It includes page speed, mobile responsiveness, URLs, sitemap, robots.txt, canonical URLs, metadata, structured data, and crawlability.',
                            'The goal is to make the website easy for search engines and users to understand.',
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
                            'As a Senior Frontend Engineer, I consider SEO during architecture and development, not only after the page is completed.',
                            'I focus on crawlability, indexability, rendering strategy, Core Web Vitals, metadata, canonical URLs, structured data, redirects, and internal linking.',
                            'For Next.js applications, I also consider SSR, SSG, ISR, dynamic metadata, sitemap generation, and robots.txt.',
                            'I also validate the final HTML because search engines need meaningful server-rendered content.',
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
                        text: `<title>React Interview Questions | Archer Review</title>
      <meta
        name="description"
        content="Prepare for React and frontend interviews."
      />`,
                    },
                    {
                        type: 'highlight',
                        text: 'Good SEO starts with crawlable content, proper metadata, performance, and correct technical configuration.',
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
                        text: 'In a project like Archer Review, I would handle technical SEO by managing metadata, canonical URLs, structured data, page performance, accessibility, sitemap, robots.txt, and server-rendered content.',
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
                            'Technical SEO is about making a website easy for search engines to crawl, understand, and index.',
                            'It covers performance, URLs, metadata, sitemap, robots.txt, canonical URLs, structured data, and rendering.',
                            'In Next.js, I also use SSR, SSG, ISR, and dynamic metadata to support SEO.',
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
                        text: '**A page is not appearing in Google. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check robots.txt.',
                            'Check noindex tags.',
                            'Check sitemap.',
                            'Check canonical URL.',
                            'Check server-rendered HTML.',
                            'Check Google Search Console.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A page is slow but has good content. What would you improve?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Optimize images.',
                            'Reduce JavaScript.',
                            'Improve Core Web Vitals.',
                            'Use caching and appropriate rendering strategies.',
                            'Lazy-load non-critical resources.',
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
                            'Crawlability',
                            'Indexability',
                            'Performance',
                            'Metadata',
                            'Canonical',
                            'Structured data',
                            'Sitemap',
                            'Robots.txt',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-2',
        topicId: 'seo',
        title: 'How does SSR help SEO?',
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
                            'SSR means Server-Side Rendering.',
                            'The server generates HTML before sending the page to the browser.',
                            'Search engine crawlers can receive meaningful HTML content directly.',
                            'This can improve crawlability and make important content available without depending entirely on client-side JavaScript.',
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
                            'SSR is useful for pages where SEO content must be available in the initial HTML.',
                            'The server fetches the required data and generates HTML for the request.',
                            'This is especially useful for product, course, article, and landing pages.',
                            'SSR does not automatically guarantee better rankings. Content quality, performance, links, metadata, and other SEO factors still matter.',
                            'In Next.js, I choose SSR when the content needs request-time rendering.',
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
                        text: `export default async function CoursePage() {
    const course = await getCourse();
    
    return <h1>{course.title}</h1>;
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The server can return the course title as part of the initial HTML.',
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
                        text: 'For an Archer Review course or content page, SSR can make the important course title and content available in the initial HTML while also allowing dynamic data to be fetched on the server.',
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
                            'SSR renders the page HTML on the server.',
                            'This means search engines can receive meaningful content in the initial response.',
                            'It is useful for SEO-sensitive pages such as courses, products, articles, and landing pages.',
                            'But SSR alone does not guarantee better rankings.',
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
                        text: '**Why would you choose SSR for a course page?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Course content is SEO important.',
                            'Content can be rendered in initial HTML.',
                            'Dynamic server data can be fetched before rendering.',
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
                            'Server rendering',
                            'Initial HTML',
                            'Crawlability',
                            'Dynamic content',
                            'SEO pages',
                            'Next.js',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-3',
        topicId: 'seo',
        title: 'SSR vs CSR from an SEO perspective.',
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
                            'SSR generates HTML on the server before sending it to the browser.',
                            'CSR sends a basic HTML shell and JavaScript builds most of the page in the browser.',
                            'SSR generally makes SEO-sensitive content available earlier.',
                            'CSR can still be indexed, but it may require search engines to process JavaScript before seeing the final content.',
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
                            'For SEO-sensitive pages, I prefer SSR, SSG, or ISR when they fit the use case.',
                            'CSR is useful for highly interactive applications where SEO is not the primary requirement.',
                            'I do not choose SSR only for SEO. I also consider performance, data freshness, server cost, caching, and user experience.',
                            'The important point is that search engines should be able to access the meaningful page content and metadata.',
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
                        text: `SSR → Server → HTML + Data → Browser
    
    CSR → Server → HTML Shell → JavaScript → Data → Browser`,
                    },
                    {
                        type: 'highlight',
                        text: 'For SEO pages, SSR or static rendering usually gives a stronger initial HTML experience.',
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
                        text: 'For Archer Review, public course and content pages are SEO-sensitive, so I would consider SSR, SSG, or ISR. Internal dashboards can usually use CSR because they are not primarily search-driven.',
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
                            'SSR renders meaningful HTML on the server, while CSR builds the page mainly in the browser.',
                            'For SEO-sensitive pages, I prefer SSR, SSG, or ISR because the important content is available earlier.',
                            'For private dashboards or highly interactive applications, CSR can be a better fit.',
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
                        text: '**Would you use CSR for an admin dashboard?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Yes.',
                            'Admin pages usually do not need search engine indexing.',
                            'CSR is suitable for highly interactive private applications.',
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
                        items: ['SSR', 'CSR', 'SSG', 'ISR', 'Initial HTML', 'SEO-sensitive', 'Private dashboard'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-4',
        topicId: 'seo',
        title: 'What are canonical URLs?',
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
                            'A canonical URL tells search engines which URL should be treated as the main version of a page.',
                            'It helps when the same content is available through multiple URLs.',
                            'It helps reduce duplicate-content confusion.',
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
                            'I use canonical URLs when query parameters, filters, tracking parameters, or alternate URLs can create multiple versions of similar content.',
                            'The canonical should normally point to the preferred indexable URL.',
                            'Canonical tags are hints to search engines, not an absolute command.',
                            'I also keep internal links, redirects, sitemap URLs, and canonical URLs consistent.',
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
                        text: `<link
    rel="canonical"
    href="https://example.com/react-course"
    />`,
                    },
                    {
                        type: 'highlight',
                        text: 'This tells search engines that the preferred URL is /react-course.',
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
                        text: 'For Archer Review pages with query parameters or alternate URL versions, I would make sure the canonical points to the clean, preferred page URL.',
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
                            'A canonical URL identifies the preferred version of a page.',
                            'It is useful when multiple URLs contain the same or very similar content.',
                            'I make sure canonical URLs are consistent with redirects, internal links, and the sitemap.',
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
                        text: '**A product has /product/123 and /product/123?source=email. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Keep the clean product URL as canonical.',
                            'Check that the parameter does not create a separate indexable page.',
                            'Keep internal links pointing to the clean URL.',
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
                        items: ['Preferred URL', 'Duplicate content', 'Canonical tag', 'Query parameters', 'Indexing'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-5',
        topicId: 'seo',
        title: 'What is structured data?',
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
                            'Structured data is additional information added to a webpage in a standard format.',
                            'It helps search engines understand what the page and its content represent.',
                            'Examples include Organization, Course, Product, Article, Event, and Breadcrumb data.',
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
                            'Structured data provides machine-readable information about entities and page content.',
                            'Schema.org vocabulary is commonly used for structured data.',
                            'JSON-LD is the preferred implementation format in many cases.',
                            'Structured data can make a page eligible for certain search result enhancements, but it does not guarantee a rich result.',
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
                        text: `<script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Archer Review"
    }
    </script>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The data describes the organization in a machine-readable format.',
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
                        text: 'For Archer Review, structured data can be used for organization information, courses, breadcrumbs, and other supported content types where the structured data accurately represents visible page content.',
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
                            'Structured data helps search engines understand the meaning of page content.',
                            'I usually implement it using Schema.org vocabulary and JSON-LD.',
                            'It can help search engines qualify pages for supported rich results.',
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
                        text: '**Can structured data guarantee a rich result?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'It makes a page eligible when the implementation meets the search engine requirements.',
                            'Search engines decide whether and how to display enhanced results.',
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
                        items: ['Machine-readable', 'Schema.org', 'JSON-LD', 'Entities', 'Rich results'],
                    },
                ],
            },
        ],
    }),
];
