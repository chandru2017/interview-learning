import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const seoQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'seo-16',
        topicId: 'seo',
        title: 'How do Core Web Vitals affect SEO?',
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
                            'Core Web Vitals measure important parts of user experience.',
                            'The main metrics are LCP, INP, and CLS.',
                            'Good performance and user experience support a healthy website and are part of Google search systems.',
                            'Core Web Vitals are only one part of SEO; they do not guarantee higher rankings.',
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
                            'LCP measures loading performance.',
                            'INP measures interaction responsiveness.',
                            'CLS measures visual stability.',
                            'I optimize these using image optimization, code splitting, caching, reducing JavaScript, stable dimensions, and efficient rendering.',
                            'I monitor both lab and real-user data because real-user performance can differ from local testing.',
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
                        text: `LCP → Loading
  INP → Interaction
  CLS → Visual stability`,
                    },
                    {
                        type: 'highlight',
                        text: 'Good Core Web Vitals mean a better experience for users.',
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
                        text: 'For Archer Review, I would monitor Core Web Vitals on public pages and optimize images, JavaScript, fonts, rendering, and layout stability to improve real user experience.',
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
                            'Core Web Vitals measure loading, interaction, and visual stability.',
                            'The current main metrics are LCP, INP, and CLS.',
                            'They are part of Google search systems, but they are not the only ranking factor.',
                            'As a frontend engineer, I improve them through better images, JavaScript, caching, and layout stability.',
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
                        text: '**LCP is slow on a landing page. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Largest image or hero element.',
                            'Server response time.',
                            'Render-blocking resources.',
                            'Fonts.',
                            'JavaScript.',
                            'Image size and format.',
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
                        items: ['LCP', 'INP', 'CLS', 'Performance', 'User experience', 'Real-user data'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-17',
        topicId: 'seo',
        title: 'How would you handle duplicate content?',
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
                            'Duplicate content means the same or very similar content is available at multiple URLs.',
                            'I first identify why multiple URLs exist.',
                            'Then I choose the preferred URL and use canonical URLs, redirects, or other appropriate controls.',
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
                            'I first determine whether the duplication is caused by query parameters, URL variations, pagination, filters, HTTP/HTTPS, trailing slashes, or CMS content.',
                            'For permanent URL changes, I use 301 redirects.',
                            'For duplicate or alternate versions that need to remain accessible, I may use canonical URLs.',
                            'I also keep internal links and sitemap URLs consistent with the preferred version.',
                            'I avoid blindly using canonical tags without understanding the URL relationship.',
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
                        text: `/course/react
  /course/react?source=email

  Canonical:
  /course/react`,
                    },
                    {
                        type: 'highlight',
                        text: 'The clean URL can be selected as the preferred version.',
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
                        text: 'On a content-heavy site like Archer Review, I would check query parameters, alternate routes, trailing-slash variations, and duplicate CMS pages and then establish one preferred canonical URL.',
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
                            'First, I identify the source of duplicate URLs.',
                            'For permanent duplicate URLs, I use redirects where appropriate.',
                            'For accessible alternate versions, I can use canonical URLs.',
                            'I also keep internal links and sitemap URLs pointing to the preferred version.',
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
                        text: '**When would you use a redirect instead of canonical?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use a redirect when the old URL should permanently move to a new URL.',
                            'Use canonical when multiple versions need to remain accessible but one is preferred for indexing.',
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
                        items: ['Duplicate content', 'Canonical', '301 redirect', 'Query parameters', 'Preferred URL'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-18',
        topicId: 'seo',
        title: 'How would you implement Course schema?',
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
                            'Course schema describes a course page using Schema.org structured data.',
                            'I generate it using JSON-LD.',
                            'The data should match the actual course information shown on the page.',
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
                            'I create a reusable Course schema generator.',
                            'The schema is populated from trusted course data such as name, description, provider, and other properties supported by the relevant schema.',
                            'I render the JSON-LD in the page HTML.',
                            'I validate the final structured data and ensure it accurately represents the page.',
                            'I do not add properties simply to make the schema larger; I only add accurate supported information.',
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
                        text: `const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'React Fundamentals',
    description: 'Learn React fundamentals.',
  };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Generate the schema from real course data and keep it consistent with the page.',
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
                        text: 'For an Archer Review course page, I would create reusable Course JSON-LD from the course API or CMS data and render it on the server so the structured data is present in the page output.',
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
                            'I would create a reusable Course JSON-LD object.',
                            'I would populate it from trusted course data.',
                            'Then I would render it in the page and validate the structured data.',
                            'Most importantly, the schema must accurately represent the visible course content.',
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
                        text: '**You have 500 course pages. Would you manually create 500 schemas?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'I would create one reusable schema generator.',
                            'Each course page would pass its data to the generator.',
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
                        items: ['Course', 'JSON-LD', 'Schema.org', 'Reusable generator', 'Course data', 'Validation'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-19',
        topicId: 'seo',
        title: 'How would you implement Organization schema?',
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
                            'Organization schema describes an organization using structured data.',
                            'It can provide information such as organization name, website, logo, and other appropriate properties.',
                            'It is usually implemented using JSON-LD.',
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
                            'I normally define Organization schema at the site level using trusted company information.',
                            'I create a reusable schema component or utility rather than duplicating the JSON-LD on every page.',
                            'I make sure the organization information matches the actual website and visible content.',
                            'I can also connect relevant entities such as the official website and social profiles where supported and accurate.',
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
                        text: `const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Archer Review',
    url: 'https://example.com',
  };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Organization schema provides structured information about the company.',
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
                        text: 'For Archer Review, I would keep Organization schema in a common SEO or layout layer so the organization information can be reused consistently across the website.',
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
                            'I implement Organization schema using JSON-LD.',
                            'I create it from trusted company information such as name, URL, and logo where appropriate.',
                            'I keep it reusable at the site level and validate the final structured data.',
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
                        text: '**Where would you place Organization schema in a Next.js application?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Usually in a shared layout or SEO component.',
                            'This avoids repeating the same organization data on every page.',
                            'It should still be rendered in the HTML output.',
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
                            'Organization',
                            'JSON-LD',
                            'Company information',
                            'Reusable',
                            'Layout',
                            'Structured data',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'seo-20',
        topicId: 'seo',
        title: 'Tell me about an SEO improvement you implemented.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',

        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'For this question, I should explain one real SEO problem, what I changed, and the result.',
                            'A good answer should follow: Problem → Investigation → Solution → Validation → Result.',
                            'The answer should focus on my own contribution as a frontend engineer.',
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
                            'I explain the SEO issue from both the technical and business perspective.',
                            'I mention how I identified the problem, what frontend or Next.js changes I made, and how I validated them.',
                            'Examples include metadata improvements, structured data, canonical URLs, rendering, performance, accessibility, or crawlability.',
                            'I avoid claiming that one frontend change alone caused a ranking improvement unless there is reliable evidence.',
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
                        text: `Problem
    ↓
  SEO audit
    ↓
  Fix metadata / schema / rendering
    ↓
  Validate HTML
    ↓
  Monitor Search Console`,
                    },
                    {
                        type: 'highlight',
                        text: 'Tell the story clearly: problem, action, and measurable result.',
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
                        text: 'At Archer Review, I worked on SEO-related improvements such as metadata and structured-data changes. A good interview story is to explain the issue, how I identified the affected pages, how I implemented the frontend/Next.js changes, and how I validated the final output using SEO tools and page inspection.',
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
                            'In one project, I worked on improving technical SEO for public pages.',
                            'I started by checking metadata, rendered HTML, canonical URLs, structured data, and page performance.',
                            'I then implemented reusable SEO logic so titles, descriptions, and structured data were generated consistently.',
                            'I validated the changes using browser inspection and SEO tools, and then monitored the pages after release.',
                            'The main improvement was having more consistent and maintainable SEO implementation across the site.',
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
                        text: '**An interviewer asks: What exactly did you personally do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Explain your coding contribution.',
                            'Mention the Next.js or React changes.',
                            'Explain how you validated the result.',
                            'Mention collaboration with SEO, backend, or content teams if applicable.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How would you prove that your SEO change worked?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check technical SEO before and after.',
                            'Validate metadata and structured data.',
                            'Check indexing and crawl status.',
                            'Monitor Search Console data over time.',
                            'Compare performance metrics where applicable.',
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
                            'SEO audit',
                            'Problem',
                            'Investigation',
                            'Metadata',
                            'Structured data',
                            'Next.js',
                            'Validation',
                            'Search Console',
                            'Result',
                        ],
                    },
                ],
            },
        ],
    }),
];
