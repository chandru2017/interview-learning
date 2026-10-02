import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const seoQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'seo-6',
        topicId: 'seo',
        title: 'What is JSON-LD?',
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
                            'JSON-LD stands for JavaScript Object Notation for Linked Data.',
                            'It is a JSON format used to provide structured data to search engines.',
                            'It is usually added using a script tag with type application/ld+json.',
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
                            'JSON-LD separates structured SEO data from the visible HTML structure.',
                            'It is easier to generate dynamically in React and Next.js applications.',
                            'I generate the schema from trusted page data and make sure it matches the visible content.',
                            'I validate the generated structured data before production.',
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
      "@type": "Course",
      "name": "React Course"
    }
    </script>`,
                    },
                    {
                        type: 'highlight',
                        text: 'JSON-LD is one of the common ways to implement structured data.',
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
                        text: 'In a Next.js project, I can create reusable schema utilities and generate JSON-LD from page data for Organization, Course, Breadcrumb, or other relevant schemas.',
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
                            'JSON-LD is a JSON format for structured data.',
                            'I use it with Schema.org vocabulary to describe page content to search engines.',
                            'In Next.js, I can generate it dynamically based on the page data.',
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
                        text: '**Why do you prefer JSON-LD?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It is separated from the visible HTML.',
                            'It is easy to generate dynamically.',
                            'It is easier to maintain for complex applications.',
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
                        items: ['JSON', 'Linked Data', 'Schema.org', 'Structured data', 'Dynamic schema'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-7',
        topicId: 'seo',
        title: 'What are schema.org schemas?',
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
                            'Schema.org provides a common vocabulary for describing entities and content on the web.',
                            'It defines types such as Organization, Course, Product, Article, Person, Event, and BreadcrumbList.',
                            'We can use these schemas in structured data.',
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
                            'Schema.org defines types and properties that search engines can understand.',
                            'I select a schema based on the actual content and purpose of the page.',
                            'I avoid adding a schema just for SEO if the page does not represent that entity.',
                            'The schema should accurately represent the visible and authoritative content.',
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
                        text: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Archer Review"
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Organization is the schema type and name is one of its properties.',
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
                        text: 'For Archer Review, I would use Organization schema for company information and Course schema for pages that genuinely represent courses.',
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
                            'Schema.org provides a standard vocabulary for structured data.',
                            'It contains schemas such as Organization, Course, Product, Article, and BreadcrumbList.',
                            'I select the schema based on what the page actually represents.',
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
                        text: '**Should you add every available schema to a page?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'Only use schemas that accurately describe the page.',
                            'Incorrect or misleading structured data should be avoided.',
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
                        items: ['Schema.org', 'Vocabulary', 'Schema type', 'Properties', 'Organization', 'Course'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-8',
        topicId: 'seo',
        title: 'What is a sitemap?',
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
                            'A sitemap is a file that lists important URLs on a website.',
                            'It helps search engines discover pages.',
                            'The common format for search engine sitemaps is XML.',
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
                            'I generate sitemaps dynamically for websites with many pages.',
                            'I include canonical, indexable URLs and avoid unnecessary or blocked URLs.',
                            'For large websites, I can use sitemap indexes and split URLs into multiple sitemap files.',
                            'The sitemap should be submitted to search engines and referenced from robots.txt where appropriate.',
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
                        text: `https://example.com/sitemap.xml

    <url>
      <loc>https://example.com/courses/react</loc>
    </url>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A sitemap helps search engines discover important URLs.',
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
                        text: 'For Archer Review, the sitemap should contain important public pages such as course, product, content, and landing pages that are intended to be indexed.',
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
                            'A sitemap is an XML file containing important website URLs.',
                            'It helps search engines discover pages.',
                            'In Next.js, I can generate it dynamically based on available content.',
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
                        text: '**Should every URL be included in the sitemap?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'I include important, canonical, indexable URLs.',
                            'I avoid noindex, duplicate, or irrelevant URLs.',
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
                        items: ['XML', 'URL discovery', 'Indexable URLs', 'Canonical', 'Next.js sitemap'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-9',
        topicId: 'seo',
        title: 'What is robots.txt?',
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
                            'robots.txt is a file that provides crawling instructions to search engine crawlers.',
                            'It can allow or disallow crawling of specific URL paths.',
                            'It is usually available at /robots.txt.',
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
                            'I use robots.txt to control crawler access to areas that should not normally be crawled.',
                            'robots.txt is not the same as noindex. Blocking crawling does not itself guarantee that a URL will never appear in search results.',
                            'I avoid accidentally blocking important CSS, JavaScript, images, or public pages that search engines need to render and understand.',
                            'I can also reference the sitemap from robots.txt.',
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
                        text: `User-agent: *
    Disallow: /admin/
    Sitemap: https://example.com/sitemap.xml`,
                    },
                    {
                        type: 'highlight',
                        text: 'This asks crawlers not to crawl the /admin/ path.',
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
                        text: 'For an Archer Review website, I would use robots.txt carefully to keep private or unnecessary paths out of crawling while allowing search engines to access important public content.',
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
                            'robots.txt provides crawling instructions to search engine bots.',
                            'I use it to control which paths crawlers can access.',
                            'It should not be treated as a replacement for noindex or other indexing controls.',
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
                        text: '**A developer accidentally blocks /courses/ in robots.txt. What happens?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Search engines may not crawl those course URLs.',
                            'Important pages may not be discovered or updated correctly.',
                            'I would remove the incorrect block and verify crawling again.',
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
                        items: ['Crawler', 'Disallow', 'Allow', 'Sitemap', 'Crawl control', 'Noindex difference'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-10',
        topicId: 'seo',
        title: 'What are meta title and meta description?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'medium',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'The meta title defines the page title used by search engines and browsers.',
                            'The meta description summarizes the page content.',
                            'They help search engines and users understand what the page is about.',
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
                            'Each important indexable page should have a useful, unique title and description.',
                            'I generate them dynamically for pages such as products, courses, articles, and categories.',
                            'I avoid keyword stuffing and duplicate metadata.',
                            'Search engines may rewrite the displayed title or description based on the query and page content.',
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
                        text: `<title>React Course | Archer Review</title>
    <meta
      name="description"
      content="Learn React with practical examples."
    />`,
                    },
                    {
                        type: 'highlight',
                        text: 'The title identifies the page and the description summarizes it.',
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
                        text: 'In Archer Review, I would generate page-specific titles and descriptions from CMS or server data and keep them consistent with the actual page content.',
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
                            'The meta title identifies the page and is important for SEO and browser tabs.',
                            'The meta description gives a short summary of the page.',
                            'I keep both unique, relevant, and dynamically generated when page content changes.',
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
                        text: '**What happens if every page has the same title?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Search engines get less useful page information.',
                            'Users may have difficulty understanding different results.',
                            'I would generate unique titles based on page content.',
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
                        items: ['Title', 'Description', 'Unique', 'Relevant', 'Dynamic metadata'],
                    },
                ],
            },
        ],
    }),
];
