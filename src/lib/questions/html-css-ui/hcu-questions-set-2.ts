import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const htmlCssUIQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'hc-6',
        topicId: 'html-css-ui',
        title: 'What creates a stacking context?',
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
                            'A stacking context is a group of elements that stack together on the z-axis.',
                            'Elements inside one context cannot go above elements of another higher context.',
                            'The root <html> element creates the first one.',
                            'Some properties create a new context, such as position with z-index, opacity less than 1, and transform.',
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
                            'A stacking context is a 3D layering scope. z-index values are only compared **within the same context**.',
                            '**Root element** - html always creates one.',
                            '**Positioned + z-index** - position relative/absolute/fixed/sticky with z-index other than auto.',
                            '**Flex/Grid children** - with z-index other than auto.',
                            '**Visual effects** - opacity below 1, transform, filter, backdrop-filter, mix-blend-mode, clip-path, mask.',
                            '**Other** - isolation: isolate, will-change for such properties, contain: layout/paint.',
                            'A child with z-index 9999 cannot escape a parent context whose own level is lower.',
                            'Use isolation: isolate to intentionally create a context and avoid z-index leaks.',
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
                        text: `.parent-a { position: relative; z-index: 1; }
                            .parent-b { position: relative; z-index: 2; }
                            
                            .parent-a .child { position: relative; z-index: 9999; }
                            /* child still appears below .parent-b,
                            because its context (.parent-a) is lower */
                            
                            .card { isolation: isolate; } /* safe local context */`,
                    },
                    {
                        type: 'highlight',
                        text: 'z-index 9999 only wins inside its own stacking context. The parent contexts are compared first.',
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
                        text: 'In Archer Review, a dropdown was hidden behind a card with a transform animation. The transform created a new stacking context. We fixed it by rendering the dropdown in a portal.',
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
                            'A stacking context is an isolated layer group for z-index comparison.',
                            'It is created by the root, positioned elements with z-index, and properties like opacity, transform, filter and isolation.',
                            'z-index is compared only within the same context, so a high value cannot escape its parent.',
                            'I debug with DevTools layers and fix with portals or isolation.',
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
                        text: '**Your dropdown has z-index: 9999 but still appears behind another element. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It is inside a parent stacking context that is lower than the other element.',
                            'Find the parent creating the context (transform, opacity, z-index).',
                            'Fix by moving the dropdown to a portal or restructuring z-index on the parent.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How would you manage z-index across a large app?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Define z-index tokens/scale (dropdown, sticky, modal, toast).',
                            'Use isolation: isolate on components.',
                            'Render modals/toasts in a single portal root.',
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
                        items: ['Stacking context', 'z-index', 'transform', 'opacity', 'isolation', 'Portal'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-7',
        topicId: 'html-css-ui',
        title: 'Explain z-index.',
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
                            'z-index controls which element appears on top when elements overlap.',
                            'Higher z-index appears in front of lower z-index.',
                            'It only works on positioned elements (and flex/grid children).',
                            'Default is auto, which follows the HTML order.',
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
                            'z-index sets the stack level of an element **within its stacking context**.',
                            '**Applies to** - positioned elements, and flex/grid items.',
                            '**Values** - integers (including negative) or auto.',
                            '**Same level** - when z-index is equal, later elements in the DOM paint on top.',
                            '**Common bug** - z-index war (999, 9999) caused by not understanding stacking contexts.',
                            '**Best practice** - small scale with design tokens (10 dropdown, 20 sticky, 30 modal, 40 toast).',
                            'Negative z-index can place elements behind their parent content, but within the same context.',
                            'Debug: DevTools 3D view or "Layers" panel, and check parent contexts.',
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
                        text: `:root {
                            --z-dropdown: 10;
                            --z-sticky: 20;
                            --z-modal: 30;
                            --z-toast: 40;
                            }
                            
                            .modal  { position: fixed; z-index: var(--z-modal); }
                            .toast  { position: fixed; z-index: var(--z-toast); }`,
                    },
                    {
                        type: 'highlight',
                        text: 'A shared z-index scale keeps layering predictable and avoids random large numbers.',
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
                        text: 'In Archer Review, modals, toasts and dropdowns had random z-index values. We introduced CSS variables for layers, and the overlapping bugs stopped.',
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
                            'z-index controls stacking order of overlapping elements, within a stacking context.',
                            'It needs a positioned element or a flex/grid item.',
                            'Most z-index bugs come from stacking contexts, not the number itself.',
                            'I use a defined z-index scale with CSS variables instead of arbitrary large numbers.',
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
                        text: '**A toast notification shows behind a modal. How do you fix it?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check both are in the same stacking context.',
                            'Render both in the same portal root with toast z-index higher than modal.',
                            'Use a z-index token scale.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**z-index has no effect on your element. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Element is static (no position).',
                            'Parent stacking context limits it.',
                            'Add position: relative or make it a flex/grid child.',
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
                        items: ['z-index', 'Stacking context', 'Positioned', 'Layers', 'Design tokens'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-8',
        topicId: 'html-css-ui',
        title: 'How does CSS inheritance work?',
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
                            'Some CSS properties pass from parent to child automatically.',
                            'Text properties like color, font-family and line-height are inherited.',
                            'Box properties like margin, padding and border are not inherited.',
                            'You can control it with inherit, initial, unset and revert.',
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
                            "Inheritance means a child takes its parent's computed value if no value is specified.",
                            '**Inherited by default** - color, font-*, line-height, text-align, visibility, cursor, list-style.',
                            '**Not inherited** - margin, padding, border, background, width, height, display, position.',
                            "**inherit** - force take parent's value.",
                            '**initial** - reset to the spec default.',
                            '**unset** - inherit if the property is inheritable, otherwise initial.',
                            '**revert** - go back to the browser default stylesheet; **revert-layer** goes to the previous cascade layer.',
                            '**currentColor** - uses the inherited color, handy for icons and borders.',
                            'CSS custom properties are inherited, which makes them ideal for theming.',
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
                        text: `body { font-family: Inter, sans-serif; color: #222; }
                            /* all text inherits font and color */
                            
                            .card { border: 1px solid #ddd; }
                            /* children do NOT inherit the border */
                            
                            .link { color: inherit; }        /* match parent text */
                            .icon { fill: currentColor; }    /* match text color */
                            
                            [data-theme="dark"] { --bg: #111; --text: #eee; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Typography flows down automatically, layout does not. Custom properties also flow down, which powers themes.',
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
                        text: 'In Archer Review, we set font and color on the root and used CSS variables for theming, so components got consistent styles without repeating declarations.',
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
                            'Inheritance lets some properties, mostly text-related, flow from parent to child.',
                            'Layout and box properties are not inherited.',
                            'inherit, initial, unset and revert give explicit control.',
                            'CSS custom properties inherit, so I use them for theming.',
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
                        text: '**Buttons and inputs do not use your site font even though body has font-family. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Form controls have browser default styles and do not inherit by default.',
                            'Add font: inherit to button, input, select, textarea.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You need to implement dark mode with minimal code. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Define colors as CSS variables on :root.',
                            'Override variables under [data-theme="dark"] or prefers-color-scheme.',
                            'Components just use var(--bg), var(--text) and inherit the theme.',
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
                        items: ['Inheritance', 'inherit', 'initial', 'unset', 'currentColor', 'Custom properties'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-9',
        topicId: 'html-css-ui',
        title: 'What is responsive design?',
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
                            'Responsive design means the website adapts to different screen sizes.',
                            'The same site works on mobile, tablet and desktop.',
                            'It uses flexible layouts, flexible images and media queries.',
                            'The viewport meta tag is required for mobile.',
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
                            'Responsive design makes one codebase work across devices using fluid and adaptive techniques.',
                            '**Viewport meta** - <meta name="viewport" content="width=device-width, initial-scale=1">.',
                            '**Fluid layouts** - %, fr, flex/grid, min()/max()/clamp() rather than fixed px widths.',
                            '**Media queries** - change layout at breakpoints based on content, not specific devices.',
                            '**Container queries** - components respond to their container size instead of the viewport.',
                            '**Responsive images** - srcset, sizes, picture, max-width: 100%.',
                            '**Fluid typography** - clamp(1rem, 2vw, 1.5rem).',
                            '**Touch and a11y** - touch targets at least 44px, no hover-only interactions, respect user zoom.',
                            '**Test** - real devices, DevTools device mode, different orientations.',
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
                        text: `<meta name="viewport" content="width=device-width, initial-scale=1">
                            .grid {
                                display: grid;
                                grid-template-columns: 1fr;
                                gap: 16px;
                            }
                            @media (min-width: 768px) {
                                .grid { grid-template-columns: repeat(2, 1fr); }
                            }
                            @media (min-width: 1024px) {
                                .grid { grid-template-columns: repeat(3, 1fr); }
                            }
                            img { max-width: 100%; height: auto; }
                            h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }`,
                    },
                    {
                        type: 'highlight',
                        text: 'One column on mobile, two on tablet, three on desktop. Images and text scale smoothly.',
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
                        text: 'In Archer Review, students used both phones and laptops, so we built layouts with Grid and breakpoints. The question navigation collapsed into a drawer on small screens.',
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
                            'Responsive design means a single UI adapts to any screen size.',
                            'I use the viewport meta tag, fluid layouts with Flex/Grid, media queries and responsive images.',
                            'Breakpoints should be based on content, and container queries help component-level responsiveness.',
                            'I test on real devices and consider touch targets and accessibility.',
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
                        text: '**A data table breaks on mobile with horizontal overflow. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Wrap in overflow-x: auto container for simple cases.',
                            'Or convert rows to stacked cards on small screens.',
                            'Prioritize key columns and hide secondary ones.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page loads huge images on mobile and is slow. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use srcset/sizes and picture with modern formats (WebP/AVIF).',
                            'Lazy load below-the-fold images.',
                            'Set width/height to avoid layout shift.',
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
                        items: ['Viewport', 'Media queries', 'Fluid layout', 'clamp', 'Container queries', 'srcset'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-10',
        topicId: 'html-css-ui',
        title: 'Mobile-first vs desktop-first.',
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
                            'Mobile-first means you write base CSS for small screens, then add styles for bigger screens.',
                            'Desktop-first means you write for large screens first, then reduce for smaller screens.',
                            'Mobile-first uses min-width media queries.',
                            'Desktop-first uses max-width media queries.',
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
                            '**Mobile-first** - base styles are simple/small-screen; enhance with @media (min-width).',
                            '**Desktop-first** - base styles are for large screens; override with @media (max-width).',
                            '**Advantages of mobile-first** - less CSS overriding, better performance on weak devices, forces content prioritization, aligns with mobile-majority traffic and Google mobile-first indexing.',
                            '**Advantages of desktop-first** - easier for complex desktop-heavy apps (admin tools, dashboards) where mobile is secondary.',
                            '**Trade-off** - desktop-first often needs more overrides and loads unnecessary CSS on mobile.',
                            '**Tailwind** is mobile-first: unprefixed classes apply to all sizes, md:/lg: apply from that width up.',
                            'Choice depends on analytics: design for the main audience first.',
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
                        text: `/* Mobile-first */
                            .sidebar { display: none; }
                            @media (min-width: 1024px) {
                            .sidebar { display: block; width: 260px; }
                            }
                            
                            /* Desktop-first (more overrides) */
                            .sidebar { display: block; width: 260px; }
                            @media (max-width: 1023px) {
                            .sidebar { display: none; }
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Both give the same result, but mobile-first starts simple and adds features, which is usually cleaner.',
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
                        text: 'In Archer Review, we used mobile-first because many students studied on phones. Base styles were single column, and larger breakpoints added sidebars and multi-column layouts.',
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
                            'Mobile-first starts with small-screen styles and enhances using min-width queries.',
                            'Desktop-first starts large and overrides using max-width queries.',
                            'I prefer mobile-first for cleaner CSS, better performance and mobile-heavy audiences.',
                            'For desktop-centric admin tools, desktop-first can be practical, but I decide based on user analytics.',
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
                        text: '**You are given an existing desktop-only app and asked to make it mobile friendly. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check analytics for device split.',
                            'Add viewport meta and fix fixed-width layouts with Flex/Grid.',
                            'Introduce max-width queries incrementally; refactor to mobile-first for new components.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Tailwind class md:flex does nothing on phones. Is that a bug?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No, Tailwind is mobile-first: md: applies from the md breakpoint and up.',
                            'Unprefixed classes are the mobile styles.',
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
                        items: ['Mobile-first', 'min-width', 'max-width', 'Progressive enhancement', 'Breakpoints'],
                    },
                ],
            },
        ],
    }),
];
