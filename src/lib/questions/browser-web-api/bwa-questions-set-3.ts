import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const bwaQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'br-11',
        topicId: 'browser-web-api',
        title: 'What is the browser rendering pipeline?',
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
                            'It is the set of steps the browser follows to turn HTML, CSS and JavaScript into pixels on screen.',
                            'First it parses the code, then calculates styles and layout.',
                            'Then it paints the pixels and combines layers.',
                            'Understanding this helps you build faster pages.',
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
                            'The pipeline turns resources into frames: **Parse, Style, Layout, Paint, Composite**.',
                            '**Parse** - HTML to DOM, CSS to CSSOM; scripts can pause parsing.',
                            '**Style** - compute final styles for each element (cascade, specificity).',
                            '**Layout** - calculate size and position of each box (geometry).',
                            '**Paint** - generate draw instructions (colors, text, borders, shadows) per layer.',
                            '**Composite** - GPU combines layers in the correct order into the final frame.',
                            '**Main thread vs compositor** - style, layout and paint (and JavaScript) run on the main thread; compositing can run on a separate thread/GPU, so transform/opacity animations stay smooth even if the main thread is busy.',
                            '**Frame budget** - 16.7ms per frame at 60fps; long JS tasks cause dropped frames and poor INP.',
                            '**Performance idea** - avoid triggering earlier stages: changing layout properties repeats layout + paint + composite; changing transform only composites.',
                            'Tools: DevTools Performance panel, Layers panel, Rendering paint flashing.',
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
                        text: `Network -> HTML bytes
    |
    Parse HTML -> DOM          Parse CSS -> CSSOM
        \\                      /
        Style (computed styles)
                |
            Layout   (geometry)
                |
            Paint    (draw lists per layer)
                |
            Composite  (GPU, layers -> screen)`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each stage feeds the next, and changes made early in the pipeline cause more work later.',
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
                        text: 'In Archer Review, we used the DevTools Performance panel to find long style/layout work in a large question list and fixed it by simplifying the DOM and animating only transform and opacity.',
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
                            'The rendering pipeline is parse, style, layout, paint and composite.',
                            'HTML becomes the DOM and CSS becomes the CSSOM, then styles and geometry are calculated, pixels are painted and layers are composited on the GPU.',
                            'Main-thread work and JavaScript can block frames.',
                            'I optimize by reducing DOM size, avoiding layout-triggering updates and animating transform/opacity.',
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
                        text: '**Animation of a sidebar using "left" is janky. What do you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Animate transform: translateX instead of left, which only needs compositing.',
                            'Optionally hint with will-change sparingly and check in the Performance panel.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Scrolling a long list drops frames. How do you investigate?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Record in DevTools Performance and look for long layout/paint tasks.',
                            'Reduce DOM size (virtualization), simplify expensive CSS (shadows/filters) and use content-visibility.',
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
                        items: ['Parse', 'Style', 'Layout', 'Paint', 'Composite', 'Main thread', 'Frame budget'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-12',
        topicId: 'browser-web-api',
        title: 'Explain DOM → CSSOM → Render Tree → Layout → Paint → Composite.',
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
                            'DOM is the tree of HTML elements.',
                            'CSSOM is the tree of CSS styles.',
                            'Render Tree combines both, but only for visible elements.',
                            'Layout calculates sizes and positions, Paint draws them, and Composite combines layers on screen.',
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
                            '**DOM** - HTML bytes to tokens to nodes to a tree. Parsing is incremental; scripts without async/defer block it.',
                            '**CSSOM** - CSS parsed into a style tree. CSS is **render-blocking**: the browser will not paint until CSSOM is ready (to avoid flash of unstyled content).',
                            '**Render Tree** - DOM + CSSOM, containing only visible nodes with computed styles. display: none elements are excluded; visibility: hidden elements are included (they take space); pseudo-elements are included.',
                            '**Layout (reflow)** - compute exact position and size of each box in the viewport (box model, flow, flex/grid).',
                            '**Paint** - convert boxes into pixels/draw commands (backgrounds, text, borders, shadows), often into multiple layers.',
                            '**Composite** - layers are rasterized and the GPU stacks them in order; transform and opacity changes can skip layout and paint.',
                            '**JavaScript interplay** - JS can read/modify DOM and CSSOM; reading layout values can force synchronous layout.',
                            '**Optimization** - minimal critical CSS, defer JS, small DOM, avoid forced layouts, use layers wisely.',
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
                        text: `<html>
    <head><link rel="stylesheet" href="app.css"></head>   <!-- blocks rendering -->
    <body>
    <h1>Hello</h1>
    <p style="display:none">Hidden</p>      <!-- in DOM, not in render tree -->
    <script src="app.js" defer></script>    <!-- does not block parsing -->
    </body>
    </html>

    /* DOM:        html > head, body > h1, p
    CSSOM:      rules from app.css
    Render tree: html, body, h1   (p is excluded)
    Then Layout -> Paint -> Composite       */`,
                    },
                    {
                        type: 'highlight',
                        text: 'The hidden paragraph exists in the DOM but not in the render tree, and the blocking stylesheet delays first paint.',
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
                        text: 'In Archer Review, moving to critical CSS and deferring scripts made the first paint much earlier because CSSOM and DOM were ready sooner.',
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
                            'The browser builds the DOM from HTML and the CSSOM from CSS, then combines them into a render tree of visible elements.',
                            'Layout computes geometry, paint draws pixels and compositing assembles layers on the GPU.',
                            'CSS is render-blocking and JavaScript can block parsing unless deferred.',
                            'display: none is excluded from the render tree while visibility: hidden is not.',
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
                        text: '**What is the difference between display: none and visibility: hidden for rendering?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'display: none removes the element from the render tree, so no layout space and no paint.',
                            'visibility: hidden keeps it in the render tree (takes space) but does not paint it.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page shows a blank screen for 3 seconds because of a large stylesheet. How do you improve it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Inline critical CSS and load the rest asynchronously.',
                            'Minify, remove unused CSS, split by route and preload important CSS.',
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
                        items: ['DOM', 'CSSOM', 'Render tree', 'Layout', 'Paint', 'Composite', 'Render-blocking'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-13',
        topicId: 'browser-web-api',
        title: 'What is reflow?',
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
                            'Reflow (layout) is when the browser recalculates the size and position of elements.',
                            'It happens when you change things like width, height, margin or add/remove elements.',
                            'Reflow is expensive because it can affect many elements.',
                            'Reducing reflows makes pages smoother.',
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
                            'Reflow = browser **recomputes layout** (geometry) for part or all of the page. It is followed by repaint and composite.',
                            '**Triggers** - DOM add/remove/move, changes to width/height/margin/padding/border/position/font-size/display, text content change, window resize, font load, adding classes that change geometry.',
                            '**Why costly** - changes cascade to children, siblings and ancestors; large DOMs make layout slow.',
                            '**Forced synchronous layout** - reading layout values (offsetHeight, getBoundingClientRect, scrollTop, clientWidth) after a style change makes the browser flush layout immediately.',
                            '**How to reduce** - batch DOM changes, use DocumentFragment, toggle classes instead of many inline styles, avoid deep DOM, prefer transform for movement, use position: absolute/fixed for animated elements, use CSS containment (contain, content-visibility).',
                            '**Measure** - DevTools Performance (purple Layout events), Layout Shift regions.',
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
                        text: `// Triggers reflow each time
    el.style.width = '200px';
    el.style.margin = '10px';

    // Better: one class change
    el.classList.add('expanded');

    // Batch inserts
    const frag = document.createDocumentFragment();
    items.forEach(i => { const li = document.createElement('li'); li.textContent = i; frag.appendChild(li); });
    list.appendChild(frag);      // single reflow`,
                    },
                    {
                        type: 'highlight',
                        text: 'Grouping DOM changes lets the browser calculate layout once instead of many times.',
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
                        text: 'In Archer Review, rendering a long question list item by item caused many reflows; building with a fragment and virtualizing the list removed the lag.',
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
                            'Reflow is the recalculation of element geometry caused by changes to layout-affecting properties or the DOM.',
                            'It is expensive because it can cascade and is followed by repaint.',
                            'I reduce it by batching DOM updates, using classes, avoiding forced synchronous layout, and animating transform instead of layout properties.',
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
                        text: '**Adding 1,000 list items in a loop freezes the page. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Build with DocumentFragment or innerHTML once and append a single time.',
                            'For huge lists, use virtualization (render only visible rows).',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Window resize makes the UI lag. What do you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Resize handlers doing layout reads/writes on every event.',
                            'Throttle/debounce, use ResizeObserver, and prefer CSS (media/container queries) over JS layout.',
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
                        items: ['Reflow', 'Layout', 'DocumentFragment', 'Forced layout', 'Batching', 'Containment'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-14',
        topicId: 'browser-web-api',
        title: 'What is repaint?',
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
                            'Repaint is when the browser redraws the appearance of elements without changing their layout.',
                            'It happens when you change colors, background or visibility.',
                            'It is cheaper than reflow but still costs time.',
                            'Reflow always causes a repaint, but repaint does not always need reflow.',
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
                            'Repaint = browser **re-draws pixels** for elements whose visual style changed but geometry did not.',
                            '**Triggers** - color, background-color/image, border-color, box-shadow, outline, visibility, text-decoration, border-radius.',
                            '**Relationship** - layout change then paint then composite; paint-only change then paint then composite; transform/opacity (on its own layer) then composite only.',
                            '**Cost depends on** - area repainted and complexity (large blur shadows, filters, gradients, big images are expensive).',
                            '**Reduce** - animate transform/opacity, promote elements to their own layer carefully (will-change, translateZ) because each layer uses memory, avoid expensive effects on large areas, limit repaint region.',
                            '**Debug** - DevTools Rendering tab with Paint flashing, Layers panel, and Performance profile (green Paint events).',
                            'Premature layer promotion can hurt memory and performance, so measure.',
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
                        text: `/* Repaint only (no layout change) */
    .btn:hover { background-color: #4f46e5; color: #fff; }

    /* Composite only (smooth) */
    .card { transition: transform .2s, opacity .2s; }
    .card:hover { transform: translateY(-4px); }

    /* Hint for an element that will animate */
    .modal { will-change: transform; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Color changes repaint, while transform and opacity changes can be handled by the compositor.',
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
                        text: 'In Archer Review, replacing a box-shadow animation on large cards with a transform/opacity effect removed visible scroll jank.',
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
                            'Repaint is redrawing pixels after a visual change that does not affect layout, such as color or background.',
                            'It is cheaper than reflow, but heavy effects like large shadows and filters are still expensive.',
                            'I prefer transform and opacity animations that can be composited, and I use Paint flashing and the Performance panel to verify.',
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
                        text: '**Hover effect on cards is laggy. They animate box-shadow and margin. What do you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Avoid margin (layout); use transform: translateY.',
                            "Fade a pseudo-element's shadow with opacity rather than animating the shadow itself.",
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You added will-change: transform to many elements and memory usage went up. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Each promoted element may get its own compositor layer using GPU memory.',
                            'Use will-change only on elements that really animate, and remove it afterwards.',
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
                        items: ['Repaint', 'Paint', 'Compositing', 'will-change', 'Paint flashing', 'Layers'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'br-15',
        topicId: 'browser-web-api',
        title: 'How can JavaScript cause layout thrashing?',
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
                            'Layout thrashing happens when JavaScript keeps reading layout values and changing styles in a loop.',
                            'Each read forces the browser to recalculate layout immediately.',
                            'This repeats many times and makes the page slow.',
                            'Fix: do all reads first, then all writes.',
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
                            'Layout thrashing = **repeatedly interleaving DOM writes and layout reads**, forcing synchronous reflows (forced layout) many times in one frame.',
                            '**Why** - after a write (style change), the layout is "dirty". Reading offsetHeight, offsetWidth, getBoundingClientRect(), clientHeight, scrollTop, getComputedStyle() forces the browser to compute layout right now.',
                            '**In loops** - read, write, read, write for N elements causes N forced layouts instead of 1.',
                            '**Fixes** - batch: read all values first, then write all changes; use requestAnimationFrame for writes; use classList; use CSS (flex/grid, sticky) instead of JS measurements; use ResizeObserver/IntersectionObserver instead of polling layout.',
                            '**Libraries** - FastDOM scheduler for read/write batching; frameworks batch updates, but manual DOM code in effects can still thrash.',
                            '**React** - measuring in useLayoutEffect for many items, or reading layout inside render/loops, can thrash; batch measurements.',
                            '**Detect** - DevTools Performance shows "Forced reflow" warnings and long purple Layout blocks.',
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
                        text: `// Bad: layout thrashing (read + write per iteration)
    items.forEach(el => {
    const h = el.offsetHeight;          // read -> forces layout
    el.style.height = (h + 10) + 'px';  // write -> invalidates layout
    });

    // Good: batch reads, then writes
    const heights = items.map(el => el.offsetHeight);       // all reads
    requestAnimationFrame(() => {
    items.forEach((el, i) => { el.style.height = (heights[i] + 10) + 'px'; });  // all writes
    });`,
                    },
                    {
                        type: 'highlight',
                        text: 'The bad loop forces a layout for every element; the good version triggers only one layout calculation for reading and one for writing.',
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
                        text: 'In Archer Review, a script measured and resized many elements in a loop which froze the UI on mobile; batching reads and writes inside requestAnimationFrame fixed it.',
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
                            'Layout thrashing happens when code interleaves DOM writes with layout reads like offsetHeight, forcing the browser to recalculate layout repeatedly.',
                            'The fix is to batch all reads first and writes after, often inside requestAnimationFrame.',
                            'I also prefer CSS solutions, classList changes and observers like ResizeObserver.',
                            "I detect it using the Performance panel's forced reflow warnings.",
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
                        text: '**A script that equalizes card heights makes the page freeze for a second. How do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Measure all card heights first, then apply the max height in one write pass.',
                            'Better: use CSS Grid/Flex to equalize heights without JS.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Scroll handler reads getBoundingClientRect on 200 elements per scroll event. Problem and fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Forced layout on every scroll event.',
                            'Use IntersectionObserver, or throttle with requestAnimationFrame and batch measurements.',
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
                            'Layout thrashing',
                            'Forced reflow',
                            'offsetHeight',
                            'requestAnimationFrame',
                            'Batching',
                            'ResizeObserver',
                        ],
                    },
                ],
            },
        ],
    }),
];
