import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 't30-16',
        topicId: 'top-30',
        title: 'How does Next.js caching work?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Next.js can cache data and rendered results to avoid repeating the same work.',
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
                            'Understand what is being cached.',
                            'Understand cache lifetime.',
                            'Understand invalidation.',
                            'Choose caching based on data freshness.',
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
                        text: `fetch(url, {
                            next: { revalidate: 60 }
                        });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The data can be revalidated after the configured period.',
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
                        text: `For Archer Review course information that does not change every second, caching and revalidation can reduce repeated API requests.`,
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
                            'Next.js provides caching to avoid unnecessary work and improve performance.',
                            'As a senior engineer, I focus on what should be cached, how long it should stay cached, and how it should be invalidated.',
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
                        items: ['Cache', 'Revalidation', 'Data Freshness', 'Invalidation'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-17',
        topicId: 'top-30',
        title: 'How do you optimize a Next.js application?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'I look at JavaScript, images, fonts, rendering, API calls, caching, and Server/Client Components.',
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
                            'Reduce unnecessary Client Components.',
                            'Optimize images and fonts.',
                            'Use appropriate caching.',
                            'Choose the right rendering strategy.',
                            'Monitor Core Web Vitals.',
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
                        text: `import Image from "next/image";`,
                    },
                    {
                        type: 'highlight',
                        text: 'Next.js Image helps optimize image loading and sizing.',
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
                        text: `For Archer Review pages, I would optimize course images, reduce unnecessary client JavaScript, and use appropriate caching.`,
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
                            'For Next.js optimization, I look at both server and client performance.',
                            'I reduce unnecessary Client Components, optimize images and fonts, use caching correctly, and choose SSR, SSG, or ISR based on the page.',
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
                        items: ['Bundle', 'Server Components', 'Images', 'Caching'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-18',
        topicId: 'top-30',
        title: 'Explain the browser rendering pipeline.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'The browser converts HTML, CSS, and JavaScript into pixels on the screen.',
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
                            'HTML becomes the DOM.',
                            'CSS becomes the CSSOM.',
                            'The browser creates the render tree.',
                            'It calculates layout.',
                            'It paints and composites the result.',
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
                        text: `element.style.width = "500px";`,
                    },
                    {
                        type: 'highlight',
                        text: 'Changing layout-related properties can cause the browser to recalculate layout.',
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
                        text: `For an Archer Review dashboard, I avoid unnecessary DOM changes during scrolling and animations to reduce layout and paint work.`,
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
                            'The browser first creates the DOM and CSSOM.',
                            'It builds the render tree, calculates layout, paints the page, and finally composites the layers.',
                            'For performance, I reduce unnecessary layout and paint work.',
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
                        items: ['DOM', 'CSSOM', 'Render Tree', 'Layout', 'Paint', 'Compositing'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-19',
        topicId: 'top-30',
        title: 'Explain Core Web Vitals.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Core Web Vitals measure important parts of the user experience.',
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
                            'They help identify real user experience problems.',
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
                            width="800"
                            height="400"
                            src="/course.jpg"
                        />`,
                    },
                    {
                        type: 'highlight',
                        text: 'Providing dimensions helps reduce unexpected layout shifts.',
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
                        text: `For Archer Review, I would monitor LCP on course pages, INP on interactive screens, and CLS for images and dynamic UI.`,
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
                            'Core Web Vitals measure real user experience.',
                            'LCP measures loading, INP measures interaction responsiveness, and CLS measures visual stability.',
                            'I use these metrics to identify performance issues.',
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
                        items: ['LCP', 'INP', 'CLS', 'User Experience'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-20',
        topicId: 'top-30',
        title: 'How would you improve a slow webpage?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'First I measure the page. Then I find the biggest bottleneck and fix it.',
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
                            'Use Lighthouse and DevTools.',
                            'Check Core Web Vitals.',
                            'Check network and bundle size.',
                            'Check JavaScript execution.',
                            'Fix the biggest bottleneck first.',
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
                        text: `const Page = lazy(() => import("./Page"));`,
                    },
                    {
                        type: 'highlight',
                        text: 'Lazy loading can reduce the initial JavaScript bundle.',
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
                        text: `For a slow Archer Review page, I would check images, third-party scripts, API response time, JavaScript bundle size, and unnecessary Client Components.`,
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
                            `I don't optimize based on assumptions. I first measure the page using Lighthouse and DevTools.`,
                            'Then I identify the biggest bottleneck, such as images, JavaScript, API calls, or rendering.',
                            'I fix that issue and measure again.',
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
                        items: ['Measure', 'Lighthouse', 'Bottleneck', 'Bundle'],
                    },
                ],
            },
        ],
    }),
];
