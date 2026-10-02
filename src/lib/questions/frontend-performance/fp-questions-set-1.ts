import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const fpQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'fp-1',
        topicId: 'frontend-performance',
        title: 'What are Core Web Vitals?',
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
                            'Core Web Vitals are Google metrics used to measure real-world user experience.',
                            'They mainly measure loading performance, responsiveness, and visual stability.',
                            'The three main metrics are LCP, INP, and CLS.',
                            'Good Core Web Vitals can improve user experience and support better search performance.',
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
                            '**LCP - Largest Contentful Paint** measures how quickly the main content becomes visible.',
                            '**INP - Interaction to Next Paint** measures how quickly the page responds to user interactions.',
                            '**CLS - Cumulative Layout Shift** measures unexpected visual movement.',
                            '**Real-user monitoring** is important because lab results may differ from actual users.',
                            '**Optimization** should focus on the actual bottleneck instead of optimizing everything blindly.',
                            'Use PageSpeed Insights, Chrome DevTools, Lighthouse, and real-user data to investigate problems.',
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
                        text: `// Core Web Vitals
    
    LCP -> How fast does the main content load?
    INP -> How fast does the page respond to interaction?
    CLS -> Does the page move unexpectedly?`,
                    },
                    {
                        type: 'highlight',
                        text: 'Think of Core Web Vitals as Loading + Interaction + Visual Stability.',
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
                        text: 'In Archer Review, I would monitor LCP for important landing pages, INP for interactive student screens, and CLS for pages containing images, banners, and dynamic content.',
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
                            'Core Web Vitals are Google metrics for measuring real user experience.',
                            'The three main metrics are LCP for loading, INP for responsiveness, and CLS for visual stability.',
                            'I use Lighthouse, DevTools, and real-user data to identify and fix performance issues.',
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
                        text: '**LCP is poor but the API response is fast. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check the largest image or text element.',
                            'Check render-blocking CSS and JavaScript.',
                            'Check font loading and image priority.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Users complain that the page feels slow even though LCP is good. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check INP and long JavaScript tasks.',
                            'Check expensive React renders.',
                            'Check large bundle execution time.',
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
                        items: ['LCP', 'INP', 'CLS', 'User experience', 'Real-user data', 'Performance'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-2',
        topicId: 'frontend-performance',
        title: 'Explain LCP.',
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
                            'LCP stands for Largest Contentful Paint.',
                            'It measures how quickly the largest important content becomes visible.',
                            'This is usually a large image, heading, video poster, or main content area.',
                            'A good LCP should generally be 2.5 seconds or less.',
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
                            'LCP measures the loading experience of the main content.',
                            '**Common LCP elements** are hero images, large headings, banners, and content blocks.',
                            '**Main causes of poor LCP** include slow server response, render-blocking resources, large images, web fonts, and client-side rendering delays.',
                            '**Improve LCP** by improving TTFB, optimizing images, preloading critical resources, reducing blocking CSS/JS, and rendering important content early.',
                            'Avoid lazy-loading the actual LCP image because it can delay the main content.',
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
                        text: `// Example LCP element

    <h1>Master React and Next.js</h1>

    // If this is the largest visible content,
    // the browser measures how quickly it becomes visible.`,
                    },
                    {
                        type: 'highlight',
                        text: 'LCP answers: "How quickly can the user see the main content?"',
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
                        text: 'For an Archer Review landing page, the hero heading and main banner can become the LCP element. I would optimize the hero image, reduce blocking resources, and make sure critical content renders early.',
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
                            'LCP means Largest Contentful Paint.',
                            'It measures how quickly the main visible content loads.',
                            'I improve LCP by optimizing images, reducing render-blocking resources, improving server response time, and prioritizing critical content.',
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
                        text: '**LCP is a hero image and it takes 4 seconds. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compress and use modern image formats.',
                            'Use responsive image sizes.',
                            'Preload or prioritize the LCP image.',
                            'Avoid lazy loading the LCP image.',
                            'Check CDN and server response time.',
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
                            'Largest Contentful Paint',
                            'Main content',
                            'Hero image',
                            '2.5 seconds',
                            'Image optimization',
                            'Render blocking',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-3',
        topicId: 'frontend-performance',
        title: 'Explain INP.',
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
                            'INP stands for Interaction to Next Paint.',
                            'It measures how quickly the page responds after a user interacts with it.',
                            'Examples are clicking a button, typing in a search box, or opening a menu.',
                            'A good INP is generally 200 milliseconds or less.',
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
                            'INP focuses on responsiveness throughout the page lifecycle.',
                            '**Common problems** are long JavaScript tasks, expensive React renders, large state updates, and heavy event handlers.',
                            '**Improve INP** by reducing JavaScript work, splitting tasks, using efficient state updates, and avoiding unnecessary renders.',
                            'Use Web Workers for CPU-heavy work that does not need direct DOM access.',
                            'In React, use memoization carefully and avoid updating large parts of the component tree for small interactions.',
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
                        text: `button.addEventListener('click', () => {
        // Avoid heavy synchronous work here
    
        updateUI();
    });
    
    // Better:
    // move expensive work away from the critical interaction path.`,
                    },
                    {
                        type: 'highlight',
                        text: 'INP answers: "After the user interacts, how quickly does the UI respond?"',
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
                        text: 'In a student dashboard, opening filters or searching videos should respond quickly. I would avoid expensive synchronous processing inside click and input handlers and reduce unnecessary React re-renders.',
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
                            'INP measures page responsiveness after user interactions.',
                            'Poor INP usually comes from long JavaScript tasks or expensive UI updates.',
                            'I improve it by reducing JavaScript work, optimizing React renders, and keeping event handlers lightweight.',
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
                        text: '**A button takes 1 second to respond. How do you investigate?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Record the interaction in Chrome Performance.',
                            'Look for long tasks.',
                            'Check React rendering and state updates.',
                            'Move heavy calculations away from the event handler.',
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
                            'Interaction to Next Paint',
                            'Responsiveness',
                            'JavaScript',
                            'Long task',
                            'React render',
                            '200 milliseconds',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-4',
        topicId: 'frontend-performance',
        title: 'Explain CLS.',
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
                            'CLS stands for Cumulative Layout Shift.',
                            'It measures unexpected movement of content while a page is loading.',
                            'For example, an image loads and pushes the text downward.',
                            'A good CLS score is generally 0.1 or less.',
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
                            'CLS measures visual stability rather than loading speed.',
                            '**Common causes** include images without dimensions, dynamically injected content, ads, banners, and font swapping.',
                            '**Prevent shifts** by reserving space before content loads.',
                            'Always define image and video dimensions or use a stable aspect ratio.',
                            'Avoid inserting content above existing content unless the user expects the movement.',
                            'Use skeleton loaders with the same approximate dimensions as the final content.',
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
        src="/banner.webp"
        width="1200"
        height="400"
        alt="Course banner"
    />

    // Space is reserved before the image loads.`,
                    },
                    {
                        type: 'highlight',
                        text: 'CLS answers: "Does the page unexpectedly move while the user is using it?"',
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
                        text: 'For Archer Review pages containing course banners, thumbnails, and dynamic sections, I would reserve their layout space so content does not jump when images or API data arrive.',
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
                            'CLS measures unexpected layout movement.',
                            'Common causes are images without dimensions and dynamically inserted content.',
                            'I reduce CLS by reserving space, defining image dimensions, and using stable skeleton layouts.',
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
                        text: '**A banner appears after 2 seconds and pushes the page content down. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Reserve the banner height from the beginning.',
                            'Use a fixed or responsive aspect ratio.',
                            'Render a placeholder with the same dimensions.',
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
                            'Cumulative Layout Shift',
                            'Visual stability',
                            'Image dimensions',
                            'Reserved space',
                            'Skeleton',
                            '0.1',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-5',
        topicId: 'frontend-performance',
        title: 'How would you improve LCP?',
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
                            'First, identify which element is the LCP element.',
                            'Optimize the LCP image or content.',
                            'Reduce render-blocking CSS and JavaScript.',
                            'Improve server response time.',
                            'Load critical resources earlier.',
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
                            '**Identify** the LCP element using Lighthouse or Chrome DevTools.',
                            '**Improve TTFB** using CDN, caching, optimized backend/API, and efficient rendering.',
                            '**Optimize images** using WebP/AVIF, responsive sizes, compression, and correct dimensions.',
                            '**Prioritize LCP** using preload or appropriate fetch priority when needed.',
                            '**Reduce blocking work** by removing unnecessary CSS/JS from the critical path.',
                            '**Use SSR/SSG/ISR** where appropriate instead of waiting for client-side JavaScript to render important content.',
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
                        text: `<Image
        src="/hero.webp"
        alt="React course"
        width={1200}
        height={600}
        priority
    />`,
                    },
                    {
                        type: 'highlight',
                        text: 'The main idea is to identify the LCP element and make it available as early as possible.',
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
                        text: 'For Archer Review marketing pages, I would check the hero image, server response, critical CSS, fonts, and JavaScript execution. Then I would prioritize the resources required for the first visible content.',
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
                            'First I identify the LCP element.',
                            'Then I optimize its image or content, improve server response time, remove render-blocking resources, and prioritize critical resources.',
                            'I verify the improvement using Lighthouse and real-user data.',
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
                        text: '**LCP is 4 seconds on mobile but 1.5 seconds on desktop. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mobile image size and format.',
                            'Network latency and bandwidth.',
                            'JavaScript execution.',
                            'Server response time.',
                            'Mobile-specific render-blocking resources.',
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
                            'Identify LCP',
                            'Optimize image',
                            'TTFB',
                            'Critical resources',
                            'SSR/SSG/ISR',
                            'Lighthouse',
                        ],
                    },
                ],
            },
        ],
    }),
];
