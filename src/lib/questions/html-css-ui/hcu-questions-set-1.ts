import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const htmlCssUIQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'hc-1',
        topicId: 'html-css-ui',
        title: 'What is semantic HTML?',
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
                            'Semantic HTML means using HTML tags that describe the meaning of the content.',
                            '**Examples:** `<header>, <nav>, <main>, <article>, <section>, <footer>, <button>.`',
                            'Non-semantic tags like `<div>` and `<span>` say nothing about their content.',
                            'Browsers, screen readers and search engines understand the page better.',
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
                            "**Semantic HTML** uses elements for their **meaning**, not their look. Styling is CSS's job.",
                            '**Landmarks** - `header, nav, main, aside, footer` give screen readers quick navigation.',
                            '**Native behavior** - `<button>, <a>, <input>` come with keyboard support, focus and roles for free.',
                            '**Document outline** - proper `h1-h6` hierarchy, one `<main>` per page.',
                            '**Content elements** - `<time>, <figure>, <figcaption>, <address>, <ul>/<ol>` for lists.',
                            '**Rule of thumb:** use `<div>` only when no semantic element fits.',
                            'Common mistake: `<div onClick>` instead of `<button>` - loses keyboard and accessibility support.',
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
                        text: `<!-- Non-semantic -->
                            <div class="header">
                            <div class="nav">...</div>
                            </div>
                            <div class="clickable" onclick="save()">Save</div>
                            
                            <!-- Semantic -->
                            <header>
                            <nav aria-label="Main">...</nav>
                            </header>
                            <main>
                            <article>
                            <h1>Post title</h1>
                            <time datetime="2025-01-10">Jan 10</time>
                            </article>
                            </main>
                            <button type="button" onclick="save()">Save</button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Same visual result, but the semantic version is accessible, keyboard friendly and readable for search engines.',
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
                        text: 'In Archer Review, we used `<form>, <label>, <fieldset> and <button>` for the exam forms, and `<nav>/<main>` for the layout. Because of this, keyboard users and screen readers could use the app without extra ARIA code.',
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
                            'Semantic HTML means choosing tags by meaning - `<nav>, <main>, <article>, <button>` - instead of using `<div>` everywhere.',
                            'It gives accessibility, SEO and maintainability benefits.',
                            'Native elements like button and input give keyboard and screen reader support for free.',
                            'I use div or span only when no semantic element fits.',
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
                        text: '**A teammate built a custom dropdown using only divs and click handlers. Keyboard users cannot use it. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Replace with native `<select>` or `<button>` + list where possible.',
                            'If custom is required, add role, aria-expanded, keyboard handling (Enter, Esc, arrows) and focus management.',
                            'Prefer native elements first - less code and fewer bugs.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Product team says "SEO ranking dropped after redesign". Markup is all divs. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check heading hierarchy (single `<h1>`, logical `<h2>-<h3>`).',
                            'Replace layout `<div>`s with `<header>, <main>, <article>, <nav>, <footer>`.',
                            'Verify with Lighthouse and an accessibility tree view.',
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
                        items: ['Semantic', 'Accessibility', 'Landmarks', 'SEO', 'Native elements'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-2',
        topicId: 'html-css-ui',
        title: 'Why is semantic HTML important?',
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
                            'It makes your page understandable to browsers, search engines and assistive tools.',
                            'Screen reader users can jump between headings and landmarks.',
                            'Search engines can better understand what the content is.',
                            'Code is easier to read and maintain.',
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
                            'Semantic HTML matters for four reasons:',
                            '**Accessibility** - the browser builds an accessibility tree from semantics; screen readers depend on it. Also a legal requirement in many regions (WCAG, ADA).',
                            '**SEO** - headings, article, time and lists help crawlers extract structure and meaning.',
                            '**Maintainability** - tags communicate intent, so less reliance on class-name conventions.',
                            '**Free functionality** - native focus, keyboard activation, form submission, default roles.',
                            '**Robustness** - works better with reader mode, translation tools, print styles and browser features.',
                            '**Tip:** ARIA is a patch; the first rule of ARIA is "do not use ARIA if a native element exists".',
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
                        text: `<!-- Heading outline screen readers can navigate -->
                            <main>
                            <h1>Dashboard</h1>
                            <section aria-labelledby="orders">
                            <h2 id="orders">Orders</h2>
                            <ul>
                            <li>Order #101</li>
                            <li>Order #102</li>
                            </ul>
                            </section>
                            </main>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A screen reader can list headings, jump to the Orders section and announce "list with 2 items".',
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
                        text: 'In Archer Review, accessibility audits flagged missing labels and div-buttons. Moving to proper label/button/heading markup fixed most issues without any extra JavaScript.',
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
                            'Semantic HTML is important for accessibility, SEO, maintainability and built-in browser behavior.',
                            'Assistive tech builds on the accessibility tree, which comes from semantic elements.',
                            'Native elements give keyboard support and roles for free.',
                            'ARIA should only supplement semantics, not replace them.',
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
                        text: '**Your company gets an accessibility audit failure. Where do you start?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Run axe/Lighthouse to find issues.',
                            'Fix semantics first: labels, buttons, headings, landmarks.',
                            'Test with keyboard-only and a screen reader (NVDA/VoiceOver).',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A manager asks "why spend time on tags when the UI looks the same?" How do you justify it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Accessibility compliance and wider audience.',
                            'Better SEO and less custom code for behavior.',
                            'Lower maintenance cost and fewer bugs later.',
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
                        items: ['Accessibility tree', 'WCAG', 'SEO', 'ARIA', 'Maintainability'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-3',
        topicId: 'html-css-ui',
        title: 'Explain CSS specificity.',
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
                            'Specificity decides which CSS rule wins when many rules target the same element.',
                            'More specific selector wins: ID beats class, class beats element.',
                            'Inline styles beat all normal selectors.',
                            'If specificity is equal, the rule written last wins.',
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
                            'Specificity is calculated as a tuple: **(inline, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements)**.',
                            '**Inline style** - highest, normal rules cannot beat it.',
                            '**ID selector** - #nav has (0,1,0,0).',
                            '**Class, attribute, pseudo-class** - .btn, [type="text"], :hover each count as one.',
                            '**Element, pseudo-element** - div, ::before count lowest.',
                            '**Universal selector (*) and combinators** - add nothing.',
                            '**:where()** has zero specificity; **:is()/:not()** take the highest argument.',
                            '**!important** overrides specificity; avoid it except for utilities/overrides.',
                            'Cascade order: origin/importance, then specificity, then source order. Cascade layers (@layer) can also control order.',
                            'Best practice: keep selectors flat and low-specificity (single class).',
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
                        text: `/* (0,0,1,0) */
                            .btn { color: blue; }
                            
                            /* (0,0,2,0) - wins over .btn */
                            .card .btn { color: green; }
                            
                            /* (0,1,0,0) - wins over classes */
                            #save { color: red; }
                            
                            /* zero specificity, easy to override */
                            :where(.card) .title { color: gray; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The browser compares the numbers left to right. Higher value wins regardless of how many lower-level selectors exist.',
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
                        text: 'In Archer Review, a global style for form inputs was overriding component styles. We solved it by lowering specificity (single class selectors) rather than adding !important.',
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
                            'Specificity decides which rule wins when selectors conflict.',
                            'Order is inline, then ID, then class/attribute/pseudo-class, then element.',
                            'If equal, the later rule wins. !important overrides, but I avoid it.',
                            'I keep selectors flat and use methodologies like BEM, CSS Modules or Tailwind to avoid specificity wars.',
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
                        text: '**Your style is not applying even though the selector looks right. How do you debug?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Open DevTools and check the crossed-out rule and the winning rule.',
                            'Compare specificity and source order.',
                            'Fix by reducing the competing selector, not adding !important.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A third-party library has high-specificity CSS you must override. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use @layer to put library styles in a lower layer.',
                            'Or match specificity with a scoped wrapper class.',
                            '!important only as the last resort, documented.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Team has 50+ !important in the code base. How do you clean it up?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Audit each one, find the conflicting rule.',
                            'Flatten selectors and adopt a naming convention (BEM/Modules).',
                            'Introduce @layer to define priority and remove !important gradually.',
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
                        items: ['Specificity', 'Cascade', 'ID', 'Class', '!important', ':where'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-4',
        topicId: 'html-css-ui',
        title: 'Flexbox vs Grid.',
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
                            'Flexbox is for one-dimensional layout - a row or a column.',
                            'Grid is for two-dimensional layout - rows and columns together.',
                            'Use Flexbox for navbars, button groups, centering.',
                            'Use Grid for page layouts, card galleries, dashboards.',
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
                            '**Flexbox** - content-driven, 1D. Items size themselves based on content and flex rules (grow, shrink, basis).',
                            '**Grid** - layout-driven, 2D. You define tracks (rows/columns) and place items into them.',
                            '**Alignment** - both support justify/align; Grid also has place-items and gap on both axes.',
                            '**Responsiveness** - Grid: repeat(auto-fit, minmax(240px, 1fr)) gives responsive cards with no media query.',
                            '**Overlap and areas** - Grid supports named areas and overlapping items.',
                            '**Subgrid** - lets nested elements align to the parent grid.',
                            '**They combine well** - Grid for page skeleton, Flexbox inside components.',
                            'Rule of thumb: if you think in one direction use Flex, if you think in rows and columns use Grid.',
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
                        text: `/* Flexbox: navbar */
                            .nav {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 16px;
                            }
                            
                            /* Grid: responsive cards */
                            .cards {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                            gap: 24px;
                        }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Flex spaces items along one axis. Grid creates as many 240px+ columns as fit and wraps automatically.',
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
                        text: 'In Archer Review, the page shell (sidebar + content) used Grid, while headers, toolbars and form rows used Flexbox.',
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
                            'Flexbox is one-dimensional, Grid is two-dimensional.',
                            'Flexbox is content-first - great for components like navbars and toolbars.',
                            'Grid is layout-first - great for page structure and card layouts.',
                            'In practice I combine them: Grid for the page, Flex inside components.',
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
                        text: '**Design a dashboard with sidebar, header, main content and widgets. Which do you use?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Grid with named areas for sidebar/header/main.',
                            'Grid auto-fit for widget cards.',
                            'Flexbox inside each widget for header/actions alignment.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Cards in a row have different heights and the buttons are not aligned at the bottom. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Make each card a flex column container.',
                            'Use margin-top: auto on the button/footer.',
                            'Or use Grid/subgrid to align rows across cards.',
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
                        items: ['Flexbox', 'Grid', '1D vs 2D', 'auto-fit', 'minmax', 'Subgrid'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-5',
        topicId: 'html-css-ui',
        title: 'Explain CSS positioning.',
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
                            'position decides how an element is placed on the page.',
                            'static is the default - normal flow.',
                            'relative moves the element from its normal place but keeps its space.',
                            'absolute is placed relative to the nearest positioned parent.',
                            'fixed stays in the same place on the screen when scrolling; sticky sticks after you scroll to it.',
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
                            '**static** - default, top/left/z-index have no effect.',
                            '**relative** - offset from its original position, space is preserved. Commonly used to create a positioning context.',
                            '**absolute** - removed from flow, positioned against the nearest ancestor with position other than static.',
                            '**fixed** - positioned against the viewport (unless an ancestor has transform/filter, which creates a new containing block).',
                            '**sticky** - hybrid: relative until a scroll threshold, then fixed within its parent. Needs a top/bottom value and fails if an ancestor has overflow hidden/auto.',
                            'Positioned elements (non-static) can use z-index and may create stacking contexts.',
                            'Prefer Flex/Grid for layout; use positioning for overlays, badges, tooltips, sticky headers.',
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
                        text: `.card { position: relative; }
                            .badge {
                            position: absolute;   /* relative to .card */
                            top: 8px;
                            right: 8px;
                            }
                            
                            .header {
                            position: sticky;
                            top: 0;
                            z-index: 10;
                        }`,
                    },
                    {
                        type: 'highlight',
                        text: 'The badge is pinned to the card corner because the card is its positioning context. The header sticks to the top while scrolling.',
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
                        text: 'In Archer Review, the exam timer and question navigation used sticky positioning so they stayed visible while the student scrolled long questions.',
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
                            'CSS positioning controls how an element is placed: static, relative, absolute, fixed and sticky.',
                            'Absolute is relative to the nearest positioned ancestor, so I set relative on the parent.',
                            'Sticky is great for headers and sidebars but needs a scroll threshold and no clipping overflow ancestor.',
                            'I use Flex/Grid for layout and positioning only for overlays and special cases.',
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
                        text: '**Your sticky header is not sticking. What do you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Is top (or bottom) value set?',
                            'Does any ancestor have overflow hidden/auto/scroll?',
                            'Is the parent tall enough for sticky to work?',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A position: fixed modal is not centered on screen, it moves with its parent. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'An ancestor has transform, filter or perspective, creating a new containing block.',
                            'Move the modal to a portal at body level (React createPortal).',
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
                        items: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'Containing block'],
                    },
                ],
            },
        ],
    }),
];
