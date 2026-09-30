import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const javascriptQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'js-16',
        topicId: 'javascript',
        title: 'What is event delegation?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Event delegation is when you put one event listener on a parent element instead of many listeners on child elements. ',
                            'When a child is clicked, the event bubbles up to the parent where the listener catches it. ',
                            'This is more efficient because you have fewer listeners. ',
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
                            'Event delegation is a technique where a single event listener on a parent element handles events from child elements. ',
                            'The event bubbles from the target through parent elements. ',
                            'The listener uses event.target to identify which child triggered the event. ',
                        ],
                    },
                    {
                        type: 'heading',
                        text: 'Benefits:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Better performance** - fewer listeners in memory.',
                            '**Handles dynamic children** - children added later still work.',
                            '**Simpler code -** one listener instead of many. `Limitations:` not all events bubble (focus, load, scroll), event.target vs event.currentTarget distinction. `Advanced:` event.stopPropagation() stops bubbling, preventing delegation. ',
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
                        text: `// Instead of many listeners
                            document.getElementById('list').addEventListener('click', (e) => {
                            if (e.target.tagName === 'LI') {
                                console.log('Clicked:', e.target.textContent);
                                e.target.classList.add('active');
                            }
                            });
                            // Old way - one listener per item
                            // document.querySelectorAll('li').forEach(item => {
                            //   item.addEventListener('click', handler);
                            // });`,
                    },
                    {
                        type: 'highlight',
                        text: 'One listener on the parent catches clicks from any child LI. e.target identifies which LI was clicked. Much more efficient than listeners on all LI elements.',
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
                        text: `In Archer Review, we had lists of form fields. Instead of attaching listeners to each field, we used event delegation on the form. When fields changed, we caught it with one listener. This was especially useful when adding/removing fields dynamically.`,
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
                            'Event delegation is putting one listener on a parent element to handle events from children. ',
                            'When a child is clicked, the event bubbles to the parent. ',
                            "The parent's listener uses event.target to identify which child triggered it. ",
                            'This is more efficient than many listeners, and it works with dynamically added children. ',
                            'Not all events bubble though.',
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
                            'event delegation',
                            'event bubbling',
                            'event target',
                            'performance',
                            'dynamic elements',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-17',
        topicId: 'javascript',
        title: 'What is event bubbling and capturing?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'When an event happens on an element, it travels up through parent elements. ',
                            'This is event bubbling. The event starts at the target element and bubbles up. ',
                            "There's also event capturing - the event starts from the top and travels down to the target. Capturing happens before bubbling. Most events use bubbling. ",
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
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Capturing Phase:** event travels from window down to the target element. Listeners registered with capture:true catch it here. ',
                            '**Target Phase:** event reaches the target element.',
                            '**Bubbling Phase:** event travels from target back up to window. Normal listeners catch it here. stopPropagation() stops the event from traveling further. stopImmediatePropagation() prevents other listeners on the same element from running. preventDefault() prevents default browser behavior. Not all events bubble (focus, load, scroll, mouseenter). Use capturing when you need to intercept before target (rare).',
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
                        text: `document.addEventListener('click', () => {
                            console.log('Capturing');
                            }, true); // capture phase

                            document.getElementById('button').addEventListener('click', (e) => {
                            console.log('Target');
                            e.stopPropagation(); // stops bubbling
                            });

                            document.addEventListener('click', () => {
                            console.log('Bubbling');
                            }, false); // bubble phase
                            // Output: Capturing, Target (Bubbling prevented)`,
                    },
                    {
                        type: 'highlight',
                        text: 'Capturing runs first (true parameter), then target, then bubbling. stopPropagation() prevents the bubbling listener from running.',
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
                        text: `In Archer Review, we used event bubbling for form events. A parent form listener caught changes from all inputs. We also used stopPropagation() in buttons to prevent bubbling when we needed specific behavior.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `A stone drops in water. Capturing: water travels down to where the stone landed. Target: the stone splashes. Bubbling: ripples travel up to the surface. Event listeners on the surface (bubbling) see the ripples. Listeners underwater (capturing) see the stone arriving.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**Capturing:** event travels from top down to the target. ',
                            '**Target:** event at the element. ',
                            "**Bubbling:** event travels from target up to the top. Most events use bubbling, and that's what event delegation relies on. `stopPropagation()` stops the event from traveling. Not all events bubble - focus, load, and scroll don't bubble. ",
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
                        items: ['event bubbling', 'stopPropagation', 'event capturing', 'phases', 'target element'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-18',
        topicId: 'javascript',
        title: 'What is debouncing?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Debouncing is a technique to delay a function until a certain amount of time has passed without the event firing again. ',
                            'When something triggers multiple times quickly (like typing), debouncing waits until the user stops, then runs the function once. ',
                            'This reduces unnecessary function calls. ',
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
                            'Debouncing delays function execution until a specified time has elapsed without the triggering event firing again. ',
                            '**Use cases:** search input (wait until user stops typing), window resize (wait until resize stops), form validation (validate after user stops typing). ',
                            '**Implementation:** track a timeout, clear it if the event fires again before the delay, run the function only when the delay completes. ',
                            '**Solves:** expensive operations triggered too many times (API calls, computations). ',
                            '**Downside:** delayed execution. ',
                            '**Common mistake:** not clearing timeout on cleanup. ',
                            '**In React:** useCallback with useRef for timeout management, or custom hooks. ',
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
                        text: `function debounce(func, delay) {
                            let timeoutId;
                            return function(...args) {
                                clearTimeout(timeoutId);
                                timeoutId = setTimeout(() => {
                                func.apply(this, args);
                                }, delay);
                            };
                            }
                            const debouncedSearch = debounce((query) => {
                            console.log('Searching:', query);
                            }, 500);
                            input.addEventListener('input', (e) => debouncedSearch(e.target.value));`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each input clears the previous timeout and sets a new one. After 500ms without input, the search function runs once.',
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
                        text: `In Archer Review, we debounced search input. As users typed, we didn't make API calls immediately. We waited 500ms after they stopped typing, then searched once. This massively reduced API calls and server load.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `You're waiting for a friend. Every time you think they're arriving, you wait another 5 minutes. Only when 5 minutes pass without seeing them do you go check. Debouncing is like this - delay until there's a quiet moment.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Debouncing is delaying function execution until after a certain time passes without the event firing. ',
                            'When you type in a search box, debouncing waits until you stop typing, then makes one API call instead of calling for each keystroke. ',
                            "It's used for search, resize, and form validation. ",
                            'The trade-off is a small delay in execution. ',
                            'Implement with setTimeout and clear the timeout if the event fires again. ',
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
                        items: ['debounce', 'setTimeout', 'clearTimeout', 'search input', 'delay', 'reduce calls'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-19',
        topicId: 'javascript',
        title: 'What is throttling?',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Throttling is limiting how often a function can run. ',
                            'If a function is triggered many times quickly, throttling ensures it runs at most once every certain time period. ',
                            'Unlike debouncing which waits for quiet, throttling runs regularly at fixed intervals. ',
                            'Use throttling for smooth animations and scroll events. ',
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
                            'Throttling ensures a function runs at most once within a specified time interval, regardless of how many times the triggering event fires. ',
                            '**Implementation:** track last execution time, only run if enough time has passed since last run. ',
                            '**Use cases:** scroll events (update UI every 200ms, not every pixel), mouse move tracking, resize handlers (measure every 200ms), animation frames. ',
                            '**Difference from debounce:** throttle keeps running at intervals; debounce waits for quiet. ',
                            '**Solves:** performance on frequently-fired events. ',
                            '**Alternative:** requestAnimationFrame for animation-based throttling (runs before browser repaint). Throttle guarantees execution at intervals. ',
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
                        text: `function throttle(func, interval) {
                            let lastRun = 0;
                            return function(...args) {
                                const now = Date.now();
                                if (now - lastRun >= interval) {
                                func.apply(this, args);
                                lastRun = now;
                                }
                            };
                            }
                            const throttledScroll = throttle(() => {
                            console.log('Scroll event');
                            }, 200);
                            window.addEventListener('scroll', throttledScroll);`,
                    },
                    {
                        type: 'highlight',
                        text: 'Every scroll event is checked. The function only runs if 200ms has passed since the last run. This limits execution to at most once per 200ms.',
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
                        text: `In Archer Review, we throttled scroll events to detect when the user reached the bottom (infinite scroll). Without throttling, scroll events fire hundreds of times per second. Throttling to every 200ms reduced processing while keeping responsiveness.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `You're hitting a nail. You can hit it once every second maximum. No matter how fast you move your hammer, you hit once per second. Throttling is like this - guaranteed minimum time between executions.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Throttling limits how often a function runs - at most once every X milliseconds. ',
                            'For frequent events like scrolling, throttling ensures smooth performance. ',
                            'We track the last execution time and only run if enough time has passed. ',
                            'Throttling keeps the function running at regular intervals, unlike debouncing which waits for quiet. ',
                            'Use throttle for scroll, mouse move, resize. ',
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
                        items: ['throttle', 'interval', 'frequent events', 'scroll', 'performance'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'js-20',
        topicId: 'javascript',
        title: 'Implement debounce from scratch.',
        difficulty: 'Intermediate',
        status: 'completed',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Create a debounce function that delays calling a function until a certain time passes without being called again. ',
                            'Store a timeout ID. Each call clears the old timeout and sets a new one. ',
                            'Only the final call actually runs the function. ',
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
                        type: 'heading',
                        text: 'A proper debounce implementation must:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Clear previous timeout on each call ',
                            'Set new timeout ',
                            'Handle context (this binding) ',
                            'Handle arguments properly ',
                            '**Optional:** cancel method to clear timeout ',
                            '**Optional:** immediate flag to run on first call ',
                            '**Optional:** leading/trailing edges for start/end execution. Common edge cases: must work with methods (use apply), must handle arguments spread, must clean up on unmount in React. ',
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
                        text: `function debounce(func, delay) {
                            let timeoutId = null;
                            return function debounced(...args) {
                                clearTimeout(timeoutId);
                                timeoutId = setTimeout(() => {
                                func.apply(this, args);
                                }, delay);
                            };
                            }
                            // Usage
                            const handleSearch = debounce((query) => {
                            console.log('Searching for:', query);
                            }, 300);
                            document.getElementById('search').addEventListener('input', (e) => {
                            handleSearch(e.target.value);
                            });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The returned debounced function clears any pending timeout before setting a new one. After 300ms without new calls, the original function runs.',
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
                        text: `In Archer Review, we implemented debounce for form field validation. As users typed, we didn't validate immediately. After 500ms of no typing, we validated the field. This felt natural and reduced validation calls.`,
                    },
                ],
            },
        ],
        conceptAsStory: [
            {
                label: '',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `You're writing an email. Your computer autosaves. Every keystroke clears the previous autosave timer. Only when you stop typing for 10 seconds does it actually save. Debounce is this autosave behavior.`,
                    },
                ],
            },
        ],
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'heading',
                        text: 'Event propagation has three phases:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            "A debounce function returns a new function that delays the original function's execution. ",
                            'It clears any existing timeout when called, then sets a new timeout. ',
                            'Only after the delay passes without new calls does the original function run. ',
                            'We use apply() to preserve the this context. ',
                            'This is crucial for reducing API calls on search inputs and form validation. ',
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
                        items: ['debounce function', 'setTimeout', 'clearTimeout', 'search input', 'closure', 'delay'],
                    },
                ],
            },
        ],
    }),
];
