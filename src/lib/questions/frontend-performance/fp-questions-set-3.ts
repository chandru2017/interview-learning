import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const fpQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'fp-11',
        topicId: 'frontend-performance',
        title: 'What is tree shaking?',
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
                            'Tree shaking removes unused code from the production bundle.',
                            'It helps reduce JavaScript bundle size.',
                            'Modern bundlers perform tree shaking mainly with ES modules.',
                            'Unused exports can be removed during the build.',
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
                            'Tree shaking is a build-time optimization.',
                            'It works best with static ES module imports and exports.',
                            'Bundlers such as Webpack, Rollup, and modern Next.js tooling can remove unused code.',
                            'Side effects can prevent some code from being safely removed.',
                            'Using a package does not automatically mean every part of that package must be sent to the browser.',
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
                        text: `// utils.js
    export const add = (a, b) => a + b;
    export const multiply = (a, b) => a * b;

    // app.js
    import { add } from './utils';

    // Production build can remove unused multiply().`,
                    },
                    {
                        type: 'highlight',
                        text: 'Tree shaking removes code that is imported but never used.',
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
                        text: 'In a React/Next.js project, I would use ES module imports and analyze the production bundle to ensure unused library code is not unnecessarily shipped to the browser.',
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
                            'Tree shaking is a build optimization that removes unused code from the production bundle.',
                            'It works especially well with ES modules because imports and exports are statically analyzable.',
                            'The result is a smaller JavaScript bundle.',
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
                        text: '**You import one function from a library but the bundle is still large. What do you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check whether the package supports tree shaking.',
                            'Check package module format.',
                            'Analyze the final bundle.',
                            'Check for side effects or duplicate dependencies.',
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
                            'Unused code',
                            'Production build',
                            'ES modules',
                            'Bundle size',
                            'Static imports',
                            'Side effects',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-12',
        topicId: 'frontend-performance',
        title: 'How does image optimization improve performance?',
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
                            'Images can be one of the largest resources on a web page.',
                            'Compressing images reduces download size.',
                            'Modern formats like WebP and AVIF can reduce file size.',
                            'Responsive images prevent mobile devices from downloading unnecessarily large images.',
                            'Lazy loading reduces the number of images loaded initially.',
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
                            '**Compression** reduces bytes without unnecessary quality loss.',
                            '**Modern formats** such as WebP and AVIF can provide better compression.',
                            '**Responsive images** using srcset/sizes deliver an appropriate resolution.',
                            '**CDN transformation** can resize and optimize images close to the user.',
                            '**Priority** should be given to the LCP image, while below-the-fold images can be lazy-loaded.',
                            '**Dimensions** should be reserved to prevent CLS.',
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
        src="/course-800.webp"
        srcSet="
            /course-400.webp 400w,
            /course-800.webp 800w,
            /course-1200.webp 1200w
        "
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Course"
    />`,
                    },
                    {
                        type: 'highlight',
                        text: 'Responsive images prevent the browser from downloading a larger image than necessary.',
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
                        text: 'For Archer Review course and video thumbnails, I would use optimized image formats, responsive sizes, CDN delivery, lazy loading for non-critical images, and fixed dimensions to improve both LCP and CLS.',
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
                            'Image optimization reduces the number of bytes the browser downloads.',
                            'I use compression, WebP/AVIF, responsive images, CDN optimization, and lazy loading for non-critical images.',
                            'I also define dimensions to prevent layout shifts.',
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
                        text: '**A page has a 2MB hero image. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compress it.',
                            'Use WebP or AVIF.',
                            'Serve the correct responsive size.',
                            'Use CDN optimization.',
                            'Prioritize it because it may be the LCP element.',
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
                        items: ['WebP', 'AVIF', 'Compression', 'Responsive images', 'CDN', 'Lazy loading'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-13',
        topicId: 'frontend-performance',
        title: 'How would you optimize a page containing 100 images?',
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
                            'Do not load all 100 images immediately.',
                            'Lazy-load images below the viewport.',
                            'Use optimized formats and responsive sizes.',
                            'Use CDN image optimization.',
                            'Reserve image space to avoid CLS.',
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
                            '**Prioritize above-the-fold images** because they affect the initial experience.',
                            '**Lazy-load below-the-fold images** so they load near the viewport.',
                            '**Use responsive images** so mobile devices receive smaller files.',
                            '**Use CDN resizing and compression** to reduce transfer size.',
                            '**Virtualize very large image lists** when the DOM itself becomes expensive.',
                            '**Use fixed dimensions/aspect ratios** to prevent layout shifts.',
                            'Avoid requesting all 100 images simultaneously.',
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
        src="/thumbnail.webp"
        loading="lazy"
        width="320"
        height="180"
        alt="Video thumbnail"
    />`,
                    },
                    {
                        type: 'highlight',
                        text: 'Load only what the user needs first. Load the remaining images as the user approaches them.',
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
                        text: 'For an Archer Review video library containing many thumbnails, I would combine responsive images, lazy loading, CDN optimization, reserved dimensions, and pagination or virtualization when the list becomes very large.',
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
                            'I would not load all 100 images immediately.',
                            'I would prioritize visible images, lazy-load the rest, use responsive WebP/AVIF images, and deliver them through a CDN.',
                            'For a very large list, I would also consider virtualization.',
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
                        text: '**The page has 100 images and scrolling is also slow. What could be wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Too many DOM elements.',
                            'Too many images loaded at once.',
                            'Large image dimensions.',
                            'Expensive React rendering.',
                            'Consider lazy loading and virtualization.',
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
                        items: ['Lazy loading', 'Responsive images', 'CDN', 'WebP', 'Virtualization', 'CLS'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-14',
        topicId: 'frontend-performance',
        title: 'How would you optimize a table containing 10,000 rows?',
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
                            'Do not render all 10,000 rows at the same time.',
                            'Use pagination or virtualization.',
                            'Load data in smaller chunks.',
                            'Avoid unnecessary React re-renders.',
                            'Keep sorting and filtering efficient.',
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
                            '**Virtualization** renders only rows currently visible in the viewport.',
                            '**Server-side pagination** avoids downloading all 10,000 records.',
                            '**Server-side filtering/sorting** is useful when the dataset is very large.',
                            '**Memoization** can prevent unnecessary row rendering.',
                            '**Stable keys** help React efficiently reconcile rows.',
                            'For complex tables, use a mature virtualization/table library rather than building everything manually.',
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
                        text: `// Instead of:
    rows.map(row => <TableRow row={row} />)
    
    // Use virtualization:
    // render only the rows visible in the viewport.`,
                    },
                    {
                        type: 'highlight',
                        text: 'The main goal is to avoid putting 10,000 DOM nodes on the page at once.',
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
                        text: 'For an admin or analytics screen with thousands of records, I would use server-side pagination or virtualization, depending on the UX requirements and whether users need continuous scrolling.',
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
                            'For 10,000 rows, I would avoid rendering everything at once.',
                            'I would use server-side pagination or virtualization.',
                            'I would also optimize filtering, sorting, and React rendering to keep the UI responsive.',
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
                        text: '**The API returns 10,000 rows and the table freezes. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Move pagination/filtering to the server if possible.',
                            'Use virtualization.',
                            'Avoid expensive client-side transformations.',
                            'Profile React rendering.',
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
                            '10,000 rows',
                            'Virtualization',
                            'Pagination',
                            'Server-side filtering',
                            'Memoization',
                            'DOM nodes',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-15',
        topicId: 'frontend-performance',
        title: 'What is virtualization?',
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
                            'Virtualization means rendering only the items currently visible on the screen.',
                            'The full dataset can still contain thousands of items.',
                            'Only a small number of DOM elements are created.',
                            'It improves scrolling and rendering performance.',
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
                            'Virtualization is also called windowing.',
                            'It is useful for large lists, tables, feeds, and dropdowns.',
                            'The viewport determines which items need to exist in the DOM.',
                            'A small overscan area is usually rendered to make scrolling smooth.',
                            'Virtualization reduces DOM size, layout work, painting, and React rendering.',
                            'It does not reduce the amount of data itself, so server-side pagination may still be needed.',
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
                        text: `// Dataset
    const items = Array.from({ length: 10000 });
    
    // Virtualized list
    // renders only the visible rows,
    // not all 10,000 DOM elements.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Virtualization = large dataset, small number of DOM elements.',
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
                        text: 'For a large Archer Review video list or admin table, virtualization can keep scrolling smooth by rendering only the rows or cards currently visible to the user.',
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
                            'Virtualization renders only the visible part of a large list.',
                            'It reduces DOM nodes and React rendering work.',
                            'I use it for large tables, lists, feeds, and dropdowns when pagination alone is not enough.',
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
                        text: '**When would you choose virtualization instead of pagination?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'When the UX requires continuous scrolling.',
                            'When users need to browse a large dataset without changing pages.',
                            'For tables or feeds where many items need to be navigated quickly.',
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
                        items: ['Windowing', 'Visible items', 'DOM', 'Large lists', 'Scrolling', 'Overscan'],
                    },
                ],
            },
        ],
    }),
];
