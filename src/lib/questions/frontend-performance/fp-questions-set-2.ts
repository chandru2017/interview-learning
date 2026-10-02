import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const fpQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'fp-6',
        topicId: 'frontend-performance',
        title: 'How would you reduce CLS?',
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
                            'Reserve space for images and dynamic content.',
                            'Give images and videos width and height.',
                            'Avoid inserting content above existing content.',
                            'Use skeleton loaders with stable dimensions.',
                            'Load fonts carefully to reduce text movement.',
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
                            'CLS is mainly prevented by making the layout predictable before content arrives.',
                            '**Images** - define dimensions or use aspect-ratio.',
                            '**Dynamic content** - reserve space before API content appears.',
                            '**Ads/banners** - allocate their expected space in advance.',
                            '**Fonts** - use appropriate font loading strategies and compatible fallback metrics.',
                            '**Animations** - prefer transform and opacity instead of changing layout properties.',
                            'Use Chrome DevTools Layout Shift information to identify the exact element causing the shift.',
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
                        text: `.video-thumbnail {
                                aspect-ratio: 16 / 9;
                                width: 100%;
                            }

                            // The browser knows the required space
                            // before the image loads.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Reserve the space first, then load the content.',
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
                        text: 'In an Archer Review video or course listing page, I would reserve thumbnail and card dimensions so API responses and images do not push other content down.',
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
                            'I reduce CLS by reserving space for images and dynamic content.',
                            'I define dimensions or aspect ratios, use stable skeletons, and avoid inserting content above existing content.',
                            'I verify layout shifts using Chrome DevTools and Lighthouse.',
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
                        text: '**CLS increases after adding an API-driven banner. What would you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reserve the banner height before the API response.',
                            'Use a placeholder or skeleton.',
                            'Avoid pushing existing content when the banner appears.',
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
                            'Visual stability',
                            'Reserve space',
                            'Aspect ratio',
                            'Skeleton',
                            'Dynamic content',
                            'Layout shift',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-7',
        topicId: 'frontend-performance',
        title: 'How would you improve INP?',
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
                            'Keep event handlers small and fast.',
                            'Reduce unnecessary JavaScript.',
                            'Avoid expensive React re-renders.',
                            'Break large JavaScript tasks into smaller tasks.',
                            'Move heavy calculations to Web Workers when appropriate.',
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
                            '**Find long tasks** using Chrome Performance and INP diagnostics.',
                            '**Reduce JavaScript execution** through code splitting and removing unnecessary dependencies.',
                            '**Optimize React rendering** by improving component boundaries and avoiding unnecessary state updates.',
                            '**Yield to the browser** by breaking expensive synchronous work into smaller chunks.',
                            '**Use Web Workers** for CPU-heavy calculations that do not require the DOM.',
                            '**Optimize input handlers** such as search, filtering, scrolling, and drag/drop operations.',
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
                        text: `// Avoid expensive work directly in an input handler
    
    const handleSearch = (value) => {
        setSearch(value);
    
        // Avoid heavy synchronous filtering here
        // when the dataset is very large.
    };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Keep the interaction path small so the browser can respond quickly.',
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
                        text: 'For a large Archer Review video library, I would avoid filtering thousands of records synchronously on every keystroke. I would use debouncing, server-side filtering, virtualization, or optimized memoized calculations where appropriate.',
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
                            'I improve INP by reducing JavaScript work and keeping event handlers lightweight.',
                            'For React, I reduce unnecessary re-renders and optimize expensive calculations.',
                            'For CPU-heavy work, I can split tasks or use Web Workers.',
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
                        text: '**Search input becomes slow when there are 50,000 products. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Debounce the input.',
                            'Avoid filtering the entire dataset on every keystroke.',
                            'Use server-side search for very large datasets.',
                            'Virtualize the result list.',
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
                        items: ['INP', 'Long tasks', 'Event handler', 'React render', 'Debounce', 'Web Worker'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-8',
        topicId: 'frontend-performance',
        title: 'How do you reduce JavaScript bundle size?',
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
                            'Remove unused dependencies and code.',
                            'Use code splitting and lazy loading.',
                            'Use tree shaking.',
                            'Import only the functions you need from libraries.',
                            'Analyze the bundle to find large dependencies.',
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
                            '**Bundle analysis** identifies large packages and duplicate dependencies.',
                            '**Code splitting** loads only the JavaScript needed for the current route or feature.',
                            '**Tree shaking** removes unused exports from production bundles.',
                            '**Dynamic imports** defer non-critical features until they are needed.',
                            '**Dependency optimization** means replacing heavy libraries or importing smaller modules.',
                            '**Server Components** in Next.js can keep server-only logic out of the client bundle.',
                            'Avoid sending large JSON payloads or unnecessary polyfills to the browser.',
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
                        text: `// Instead of loading a heavy feature immediately

    const Chart = lazy(() => import('./Chart'));

    <Suspense fallback={<p>Loading...</p>}>
        <Chart />
    </Suspense>;`,
                    },
                    {
                        type: 'highlight',
                        text: 'Load expensive code only when the user actually needs it.',
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
                        text: 'In a Next.js application, I would analyze the bundle, move server-only logic to Server Components, dynamically import heavy client components, and remove unnecessary dependencies.',
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
                            'I reduce bundle size by removing unused dependencies, using tree shaking, code splitting, and dynamic imports.',
                            'I also analyze the production bundle to find large packages.',
                            'In Next.js, I keep server-only logic on the server and send only required client JavaScript.',
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
                        text: '**Your production JavaScript bundle is 3MB. What is your approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Analyze the bundle first.',
                            'Find large dependencies and duplicate packages.',
                            'Split route-specific code.',
                            'Lazy-load heavy features.',
                            'Remove unused libraries.',
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
                            'Bundle analysis',
                            'Code splitting',
                            'Tree shaking',
                            'Dynamic import',
                            'Dependencies',
                            'Server Components',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-9',
        topicId: 'frontend-performance',
        title: 'What is code splitting?',
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
                            'Code splitting means dividing one large JavaScript bundle into smaller bundles.',
                            'Only the code needed for the current page or feature is loaded.',
                            'This reduces the initial JavaScript download.',
                            'It improves initial loading and responsiveness.',
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
                            '**Route-based splitting** loads code based on the current route.',
                            '**Component-based splitting** loads heavy components only when needed.',
                            '**Dynamic import** is commonly used to create separate chunks.',
                            'Code splitting is especially useful for large applications with many routes and features.',
                            'Too much splitting can create many small requests, so boundaries should be chosen carefully.',
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
                        text: `const AdminPanel = lazy(
        () => import('./AdminPanel')
    );

    // AdminPanel code loads only when needed.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Code splitting means: do not send all application code on the first load.',
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
                        text: 'In a learning platform, an admin dashboard, video player, analytics screen, and student dashboard do not need to load all their JavaScript together. I would split these features so users download only what they need.',
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
                            'Code splitting divides a large JavaScript bundle into smaller chunks.',
                            'The browser loads only the code required for the current route or feature.',
                            'This reduces initial bundle size and improves page load performance.',
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
                        text: '**When would you use component-level code splitting?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'For heavy components such as charts, editors, maps, or video tools.',
                            'When the component is not required for the initial page.',
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
                            'Split bundle',
                            'Chunks',
                            'Dynamic import',
                            'Lazy loading',
                            'Route-based',
                            'Component-based',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-10',
        topicId: 'frontend-performance',
        title: 'What is lazy loading?',
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
                            'Lazy loading means loading something only when it is needed.',
                            'It can be used for images, components, JavaScript, and other resources.',
                            'It reduces the initial page load.',
                            'It is useful for content below the fold or features users may never use.',
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
                            '**Images** below the fold can use native lazy loading.',
                            '**Components** can use dynamic imports.',
                            '**Avoid lazy loading critical content**, especially the LCP element.',
                            'Lazy loading should be combined with responsive images and good caching.',
                            'The goal is to reduce initial work without causing visible delays when the user reaches the content.',
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
                        text: `<img
        src="/course.webp"
        loading="lazy"
        alt="Course"
    />

    // Browser loads the image when it approaches
    // the viewport.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Lazy loading delays non-critical resources until they are needed.',
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
                        text: 'For an Archer Review video library, thumbnails far below the initial viewport can be lazy-loaded so the browser does not download hundreds of images during the first page load.',
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
                            'Lazy loading means loading resources only when they are needed.',
                            'I use it for below-the-fold images and non-critical components.',
                            'I avoid lazy loading important content such as the main LCP element.',
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
                        text: '**Should you lazy-load the hero image?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Usually no if it is the LCP element.',
                            'The hero image should be prioritized so it becomes visible quickly.',
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
                            'Load when needed',
                            'Below the fold',
                            'Images',
                            'Dynamic import',
                            'Non-critical',
                            'LCP',
                        ],
                    },
                ],
            },
        ],
    }),
];
