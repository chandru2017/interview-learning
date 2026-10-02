import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const seoQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'seo-11',
        topicId: 'seo',
        title: 'How would you implement SEO in Next.js?',
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
                            'Next.js provides several features that support SEO.',
                            'I use server or static rendering, metadata, sitemap, robots.txt, canonical URLs, and structured data.',
                            'I also optimize performance and make sure the important content is available in the rendered HTML.',
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
                            'For the App Router, I use the Metadata API for static and dynamic metadata.',
                            'I use generateMetadata() for route-specific metadata.',
                            'I use sitemap.ts and robots.ts for crawler configuration.',
                            'I implement JSON-LD for relevant structured data.',
                            'I choose SSG, SSR, or ISR based on content freshness and SEO requirements.',
                            'I also optimize images, fonts, JavaScript, caching, and Core Web Vitals.',
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
                        text: `export const metadata = {
    title: 'React Course',
    description: 'Learn React with practical examples.',
  };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Next.js Metadata API makes page metadata easy to manage.',
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
                        text: 'For Archer Review, I would create a reusable SEO system for titles, descriptions, canonical URLs, Open Graph data, JSON-LD, sitemap, and robots.txt instead of implementing SEO separately on every page.',
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
                            'In Next.js, I implement SEO using the Metadata API, dynamic metadata, SSR or static rendering, sitemap, robots.txt, canonical URLs, and structured data.',
                            'I also focus on Core Web Vitals, semantic HTML, image optimization, and crawlable content.',
                            'I prefer a reusable SEO utility so all pages follow the same standard.',
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
                        text: '**How would you create a common SEO system for 1000 pages?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create reusable metadata utilities.',
                            'Generate metadata from page or CMS data.',
                            'Generate sitemap dynamically.',
                            'Add reusable structured-data utilities.',
                            'Define fallback metadata.',
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
                            'Metadata API',
                            'generateMetadata',
                            'SSR',
                            'SSG',
                            'ISR',
                            'Sitemap',
                            'JSON-LD',
                            'Core Web Vitals',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-12',
        topicId: 'seo',
        title: 'How would you implement dynamic metadata?',
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
                            'Dynamic metadata means generating the title and description based on page data.',
                            'For example, every course page can have a different title and description.',
                            'In Next.js App Router, generateMetadata() can be used for this.',
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
                            'I fetch the required page data and generate metadata from that data.',
                            'I add sensible fallback values when data is missing.',
                            'I also generate canonical, Open Graph, and other metadata from the same source where appropriate.',
                            'I avoid unnecessary duplicate data fetching by using Next.js-supported caching and data-fetching patterns.',
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
                        text: `export async function generateMetadata({ params }) {
    const course = await getCourse(params.id);
  
    return {
      title: course.title,
      description: course.description,
    };
  }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each route can generate metadata from its own data.',
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
                        text: 'For Archer Review dynamic course or content pages, I would generate the title and description from the CMS or API data so every page has relevant metadata.',
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
                            'I use generateMetadata() in Next.js App Router for dynamic metadata.',
                            'I fetch the page data and generate a unique title, description, canonical URL, and social metadata.',
                            'I also provide fallback metadata if the data is missing.',
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
                        text: '**What if the API does not return an SEO title?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a safe fallback title.',
                            'Generate a fallback description.',
                            'Log or monitor missing SEO data if it is important.',
                            'Do not generate empty metadata.',
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
                            'Dynamic data',
                            'Unique title',
                            'Fallback',
                            'Canonical',
                            'Open Graph',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-13',
        topicId: 'seo',
        title: 'What are Open Graph tags?',
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
                            'Open Graph tags control how a webpage appears when it is shared on social platforms.',
                            'Common properties are title, description, image, and URL.',
                            'They improve the appearance of shared links.',
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
                            'I generate Open Graph metadata dynamically for important pages.',
                            'The image, title, and description should match the page content.',
                            'I also define image dimensions and use stable absolute URLs where required.',
                            'Open Graph metadata is mainly for social sharing and should not be confused with standard search ranking metadata.',
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
                        text: `<meta property="og:title" content="React Course" />
  <meta property="og:description" content="Learn React." />
  <meta property="og:image" content="/react-course.png" />
  <meta property="og:type" content="website" />`,
                    },
                    {
                        type: 'highlight',
                        text: 'These tags control the preview when the URL is shared.',
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
                        text: 'For Archer Review course or article pages, I would generate Open Graph title, description, image, and URL dynamically so shared links have useful previews.',
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
                            'Open Graph tags control how a URL appears when shared on social platforms.',
                            'I normally define title, description, image, URL, and type.',
                            'In Next.js, I can generate them dynamically using the Metadata API.',
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
                        text: '**The social preview shows the wrong image. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check og:image.',
                            'Check the absolute image URL.',
                            'Check image accessibility.',
                            'Check whether the platform has cached an older preview.',
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
                        items: ['Open Graph', 'og:title', 'og:description', 'og:image', 'Social sharing'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-14',
        topicId: 'seo',
        title: 'What are Twitter/X cards?',
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
                            'Twitter/X Cards define how a shared webpage appears on X.',
                            'They can include a title, description, image, and other information.',
                            'They improve the visual presentation of shared links.',
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
                            'I use X card metadata together with Open Graph metadata for social sharing.',
                            'Common properties include twitter:card, twitter:title, twitter:description, and twitter:image.',
                            'I generate them dynamically for pages with different content.',
                            'I verify the final HTML and social preview when debugging sharing issues.',
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
                        text: `<meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="React Course" />
  <meta name="twitter:description" content="Learn React." />
  <meta name="twitter:image" content="/react-course.png" />`,
                    },
                    {
                        type: 'highlight',
                        text: 'These tags help control the X link preview.',
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
                        text: 'For Archer Review, I would generate X card metadata from the same SEO data used for Open Graph so social previews remain consistent.',
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
                            'X Cards control how a URL appears when shared on X.',
                            'I can define a card type, title, description, and image.',
                            'I normally manage this along with Open Graph metadata.',
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
                        text: '**Why would you use both Open Graph and X metadata?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Different platforms can use different metadata.',
                            'Open Graph provides broad social sharing support.',
                            'X-specific metadata gives additional control for X previews.',
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
                        items: ['X Cards', 'twitter:card', 'Social preview', 'Open Graph', 'Image'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-15',
        topicId: 'seo',
        title: 'How would you debug an indexing problem?',
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
                            'First, I check whether the page is allowed to be crawled.',
                            'Then I check noindex, canonical URL, sitemap, redirects, and HTTP status.',
                            'I also check the actual rendered HTML and search engine tools.',
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
                            'I start with Google Search Console URL Inspection for the affected URL.',
                            'Then I check robots.txt, meta robots, X-Robots-Tag, canonical, HTTP status, redirects, and sitemap.',
                            'For JavaScript applications, I compare server HTML with the rendered DOM.',
                            'I check whether the content is actually accessible to crawlers.',
                            'Finally, I request re-crawling after fixing the root cause and monitor the result.',
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
                        text: `Check:
  
  1. HTTP status → 200
  2. robots.txt → allowed
  3. noindex → not present
  4. canonical → correct
  5. sitemap → URL included
  6. Content → crawlable`,
                    },
                    {
                        type: 'highlight',
                        text: 'Always find the root cause instead of immediately requesting re-indexing.',
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
                        text: 'If an Archer Review page was not indexed, I would check the URL in Search Console, then verify robots.txt, metadata, canonical URL, response status, sitemap, redirects, and the rendered HTML.',
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
                            'I start with Search Console URL Inspection.',
                            'Then I check robots.txt, noindex, canonical, HTTP status, redirects, sitemap, and rendered content.',
                            'After fixing the root cause, I request crawling again and monitor the result.',
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
                        text: '**The page returns 200 but is still not indexed. What do you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Noindex directives.',
                            'Canonical URL.',
                            'Content quality and uniqueness.',
                            'Internal links.',
                            'Rendering issues.',
                            'Search Console status.',
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
                            'Search Console',
                            'Crawl',
                            'Noindex',
                            'Canonical',
                            'Sitemap',
                            'HTTP status',
                            'Rendered HTML',
                        ],
                    },
                ],
            },
        ],
    }),
];
