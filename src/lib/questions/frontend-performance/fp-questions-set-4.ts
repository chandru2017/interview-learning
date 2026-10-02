import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const fpQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'fp-16',
        topicId: 'frontend-performance',
        title: 'How would you identify a memory leak?',
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
                            'A memory leak happens when unused memory is still referenced and cannot be released.',
                            'The application may become slower over time.',
                            'In Chrome DevTools, use the Memory and Performance panels.',
                            'Take heap snapshots and compare memory usage over time.',
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
                            '**Common React causes** include forgotten event listeners, timers, subscriptions, observers, and references to large objects.',
                            '**Heap snapshots** can show objects that remain in memory unexpectedly.',
                            '**Allocation timelines** help identify continuously increasing memory usage.',
                            '**React cleanup** should happen when a component unmounts.',
                            'Compare multiple snapshots after repeating the same user flow to identify retained objects.',
                            'Memory growth alone does not always mean a leak; verify whether garbage collection can reclaim the memory.',
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
                        text: `useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Always clean up listeners, timers, subscriptions, and observers created by a component.',
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
                        text: 'In a React application, if opening and closing a modal repeatedly causes memory to grow, I would check event listeners, timers, subscriptions, observers, and retained component references using Chrome DevTools.',
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
                            'I identify memory leaks using Chrome DevTools Memory and Performance panels.',
                            'I take heap snapshots and compare them after repeating the same user flow.',
                            'In React, I especially check event listeners, timers, subscriptions, observers, and missing useEffect cleanup.',
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
                        text: '**Memory keeps increasing every time a modal opens. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Event listeners added every time the modal opens.',
                            'Timers or intervals.',
                            'Subscriptions.',
                            'Observers.',
                            'References that keep old component data alive.',
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
                            'Memory leak',
                            'Heap snapshot',
                            'Garbage collection',
                            'Event listener',
                            'Cleanup',
                            'useEffect',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-17',
        topicId: 'frontend-performance',
        title: 'How do you analyze a production performance problem?',
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
                            'First, understand what users are experiencing.',
                            'Collect real-user performance data.',
                            'Identify whether the problem is network, server, JavaScript, rendering, or API related.',
                            'Reproduce the issue if possible.',
                            'Fix the biggest bottleneck and measure again.',
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
                            '**Step 1 - Define the problem**: Which page, users, devices, and actions are affected?',
                            '**Step 2 - Check real-user data**: Look at LCP, INP, CLS, page load, errors, and device/network distribution.',
                            '**Step 3 - Reproduce**: Use Chrome DevTools with CPU and network throttling.',
                            '**Step 4 - Profile**: Check Network, Performance, Memory, and React Profiler.',
                            '**Step 5 - Identify the bottleneck**: server, API, asset, JavaScript, rendering, or third-party script.',
                            '**Step 6 - Fix and measure**: compare before and after metrics.',
                            'Always validate the improvement in production rather than relying only on local development results.',
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
                        text: `Performance investigation

                            User complaint
                                ↓
                            Real-user metrics
                                ↓
                            Reproduce
                                ↓
                            DevTools profiling
                                ↓
                            Find bottleneck
                                ↓
                            Fix
                                ↓
                            Measure again`,
                    },
                    {
                        type: 'highlight',
                        text: 'Do not guess. Measure first, identify the bottleneck, then optimize.',
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
                        text: 'For Archer Review, if users report a slow dashboard, I would check real-user metrics, API timings, JavaScript execution, network requests, third-party scripts, React rendering, and device/network differences before deciding on a fix.',
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
                            'I start with real-user data and clearly define the affected page and user flow.',
                            'Then I reproduce the problem and use DevTools to analyze network, JavaScript, rendering, and memory.',
                            'I fix the main bottleneck and compare production metrics before and after the change.',
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
                        text: '**The page is slow only for some users. How would you investigate?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compare device types and network conditions.',
                            'Check geographic/CDN differences.',
                            'Compare Core Web Vitals by device and connection.',
                            'Check API and server timings.',
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
                            'Real-user data',
                            'Reproduce',
                            'DevTools',
                            'Network',
                            'Performance',
                            'Measure before/after',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-18',
        topicId: 'frontend-performance',
        title: 'Lighthouse vs Chrome DevTools.',
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
                            'Lighthouse is useful for automated audits and overall performance reports.',
                            'Chrome DevTools is useful for detailed debugging and profiling.',
                            'Lighthouse gives recommendations.',
                            'DevTools helps find the exact cause of a performance problem.',
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
                            '**Lighthouse** provides audits for performance, accessibility, SEO, and best practices.',
                            '**Performance panel** shows CPU activity, long tasks, rendering, network activity, and main-thread work.',
                            '**Network panel** helps analyze request timing, headers, caching, and transferred data.',
                            '**Memory panel** helps investigate memory leaks.',
                            '**React Profiler** helps identify unnecessary or expensive React renders.',
                            'I use Lighthouse to identify areas of concern and DevTools to investigate the root cause.',
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
                        text: `Lighthouse
        ↓
    "INP / LCP / CLS needs improvement"
    
    Chrome DevTools
        ↓
    "Which JavaScript task or resource is causing it?"`,
                    },
                    {
                        type: 'highlight',
                        text: 'Lighthouse tells you what needs attention. DevTools helps you understand why.',
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
                        text: 'When optimizing an Archer Review page, I would first use Lighthouse to identify performance opportunities, then use Chrome DevTools Network and Performance panels to find the actual bottleneck.',
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
                            'Lighthouse is mainly an automated audit tool.',
                            'Chrome DevTools gives deeper debugging and profiling information.',
                            'I normally use Lighthouse to identify issues and DevTools to investigate and fix the root cause.',
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
                        text: '**Lighthouse says JavaScript execution is high. What do you do next?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Open the Performance panel.',
                            'Record page load.',
                            'Find long tasks on the main thread.',
                            'Identify the script or function causing the work.',
                            'Optimize or split the code.',
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
                        items: ['Lighthouse', 'Automated audit', 'DevTools', 'Performance', 'Network', 'Root cause'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-19',
        topicId: 'frontend-performance',
        title: 'How would you optimize a slow React application?',
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
                            'First, measure where the application is slow.',
                            'Reduce unnecessary React re-renders.',
                            'Optimize expensive calculations.',
                            'Use code splitting and lazy loading.',
                            'Optimize large lists with virtualization.',
                            'Reduce unnecessary API calls and large payloads.',
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
                            '**Profile first** using React Profiler and Chrome Performance.',
                            '**Component design** - keep state close to where it is used to avoid unnecessary tree updates.',
                            '**Memoization** - use React.memo, useMemo, and useCallback only when they solve a measured problem.',
                            '**Large lists** - use virtualization.',
                            '**Network** - cache requests, reduce payloads, and avoid duplicate calls.',
                            '**Bundle** - use code splitting and dynamic imports.',
                            '**Rendering** - avoid expensive work during render.',
                            '**State management** - subscribe components only to the state they actually need.',
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
                        text: `const ProductList = React.memo(({ products }) => {
        return products.map(product => (
            <ProductCard
                key={product.id}
                product={product}
            />
        ));
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'Do not add memoization everywhere. Profile first and optimize the components that actually cause expensive renders.',
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
                        text: 'For an Archer Review dashboard, I would profile the React tree, check unnecessary renders, optimize API calls, virtualize large lists, split heavy components, and keep frequently changing state local where possible.',
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
                            'First I profile the application instead of guessing.',
                            'Then I optimize unnecessary renders, expensive calculations, API calls, bundle size, and large lists.',
                            'For large lists I use virtualization, and for heavy features I use code splitting.',
                            'Finally, I measure the improvement again.',
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
                        text: '**Typing in one input causes the entire page to re-render. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check where the input state is stored.',
                            'Move state closer to the component that needs it.',
                            'Use component boundaries to limit re-renders.',
                            'Use memoization only where profiling shows a benefit.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A React page has 5,000 cards and scrolling is slow.**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use virtualization.',
                            'Optimize images.',
                            'Avoid unnecessary card renders.',
                            'Lazy-load non-critical content.',
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
                            'Profile first',
                            'React Profiler',
                            'Re-renders',
                            'Memoization',
                            'Virtualization',
                            'Code splitting',
                            'API optimization',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'fp-20',
        topicId: 'frontend-performance',
        title: 'Tell me about a performance improvement you implemented.',
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
                            'Use a real project example.',
                            'Explain the problem first.',
                            'Explain what you changed.',
                            'Explain how you measured the result.',
                            'Finish with the impact on users.',
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
                            '**Problem** - clearly explain what was slow and how it affected users.',
                            '**Investigation** - explain how you used DevTools, Lighthouse, profiling, or monitoring.',
                            '**Root cause** - identify the actual bottleneck instead of saying "I optimized the page."',
                            '**Solution** - explain the technical changes such as image optimization, caching, code splitting, rendering optimization, or API improvements.',
                            '**Measurement** - compare performance before and after the change.',
                            '**Impact** - explain the improvement in load time, responsiveness, bandwidth, or user experience.',
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
    Measure
    ↓
    Find bottleneck
    ↓
    Optimize
    ↓
    Measure again
    ↓
    Production impact`,
                    },
                    {
                        type: 'highlight',
                        text: 'For senior-level answers, focus on the problem, your technical decision, and the measurable result.',
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
                        text: 'In Archer Review, one performance improvement example can be the optimization of image-heavy pages and frontend bundles. I would explain how I identified large assets or unnecessary client-side work, optimized the loading strategy, and validated the result using Lighthouse and browser performance tools.',
                    },
                ],
            },
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A strong interview story is: "We had a page with a large amount of frontend content and assets. I analyzed the page using Chrome DevTools and Lighthouse, identified unnecessary client-side work and large resources, then improved caching, image loading, and bundle loading. After the change, the page loaded faster and the amount of work required during the initial load was reduced."',
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'In one of my projects, I worked on improving frontend performance for content-heavy pages. I first used Chrome DevTools and Lighthouse to identify the bottlenecks. I then optimized assets, reduced unnecessary JavaScript work, and improved the loading strategy. After the changes, I measured the page again and verified that the loading and responsiveness improved. The main lesson was to measure first, fix the biggest bottleneck, and then validate the result.',
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
                        text: '**The interviewer asks: "What exactly did YOU do?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Clearly separate your work from the team work.',
                            'Mention the specific code or architecture changes you made.',
                            'Explain why you selected that solution.',
                            'Mention how you tested and measured it.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**The interviewer asks: "How did you prove the improvement?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Compare Lighthouse results before and after.',
                            'Check Core Web Vitals.',
                            'Compare network transfer size.',
                            'Check JavaScript execution time.',
                            'Use production monitoring or real-user metrics when available.',
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
                            'Problem',
                            'Investigation',
                            'Root cause',
                            'Solution',
                            'Measurement',
                            'Impact',
                            'Before vs after',
                        ],
                    },
                ],
            },
        ],
    }),
];
