import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const htmlCssUIQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'hc-11',
        topicId: 'html-css-ui',
        title: 'How do you structure CSS for a large application?',
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
                            'Break CSS into small reusable pieces instead of one giant file.',
                            'Use a naming convention or scoped styles (BEM, CSS Modules).',
                            'Keep global styles minimal: reset, variables, typography.',
                            'Group styles by component or feature.',
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
                            'Goal: predictable, scalable, low-conflict CSS.',
                            '**Layers** - reset/base, design tokens, layout, components, utilities (ITCSS/@layer).',
                            '**Design tokens** - CSS variables for color, spacing, typography, z-index, radius.',
                            '**Component-scoped styles** - CSS Modules, styled-components, or Tailwind; colocate styles with components.',
                            '**Naming convention** - BEM if using plain CSS.',
                            '**Low specificity** - single-class selectors, avoid nesting deeper than 2-3 levels, no IDs.',
                            '**Folder structure** - by feature/component, shared styles in a /styles or design-system package.',
                            '**Tooling** - Stylelint, Prettier, PostCSS, purge unused CSS, visual regression tests (Storybook/Chromatic).',
                            '**Governance** - documented guidelines, design system for multiple teams.',
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
                        text: `src/
                                styles/
                                tokens.css       /* variables */
                                reset.css
                                global.css
                                components/
                                Button/
                                Button.tsx
                                Button.module.css
                                Card/
                                Card.tsx
                                Card.module.css

                                /* tokens.css */
                                :root {
                                --color-primary: #4f46e5;
                                --space-2: 8px;
                                --radius-md: 8px;
                                }

                                /* Button.module.css */
                                .button { padding: var(--space-2); background: var(--color-primary); }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Global tokens plus component-scoped styles keep CSS organized and conflict-free.',
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
                        text: 'In Archer Review, we kept tokens and reset global and used scoped styles per component. New developers could change a component without worrying about breaking other pages.',
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
                            'I structure large CSS around design tokens, a small global base and component-scoped styles.',
                            'I use CSS Modules or Tailwind for scoping, and BEM if using plain CSS.',
                            'I keep specificity low, use @layer where needed, and enforce rules with Stylelint.',
                            'For multiple teams, I build a shared design system documented in Storybook.',
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
                        text: '**You join a project with one 8000-line global stylesheet. How do you refactor safely?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Audit and measure usage; add visual regression tests.',
                            'Extract tokens first, then migrate component by component to scoped styles.',
                            'Delete unused CSS gradually and add lint rules to prevent regressions.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Two teams need the same UI look across different apps. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Create a shared design system package with tokens and components.',
                            'Version it and document in Storybook.',
                            'Apps consume tokens/components instead of copying CSS.',
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
                        items: ['Design tokens', 'CSS Modules', 'BEM', '@layer', 'Scoped styles', 'Design system'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-12',
        topicId: 'html-css-ui',
        title: 'Tailwind CSS advantages and disadvantages.',
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
                            'Tailwind is a utility-first CSS framework: you style using small classes in HTML/JSX.',
                            'It is fast to build with and keeps design consistent.',
                            'Final CSS is small because unused classes are removed.',
                            'Downside: class names can make markup long and messy.',
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
                            '**Advantages**',
                            '**Speed** - no context switching between files, no naming things.',
                            '**Consistency** - spacing, colors and typography come from a constrained design scale.',
                            '**Small bundle** - JIT generates only the used classes.',
                            '**No dead CSS and fewer conflicts** - styles are local to the element.',
                            '**Responsive and state variants** - md:, hover:, focus:, dark: built in.',
                            '**Customizable** - theme config for design tokens, plugins for extensions.',
                            '**Disadvantages**',
                            '**Verbose markup** - long class strings reduce readability.',
                            '**Learning curve** - must learn utility names.',
                            '**Reuse needs discipline** - repeated classes should become components or @apply.',
                            '**Weak separation of concerns** - styling in markup; dynamic classes need care (full class names, not string concatenation).',
                            'Mitigation: component abstraction, clsx/cva for variants, prettier-plugin-tailwindcss.',
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
                        text: `// Tailwind in React
                            function Button({ children }) {
                            return (
                            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white
                                            hover:bg-indigo-700 focus:ring-2 md:px-6">
                            {children}
                            </button>
                            );
                            }
                            // Reuse via the component, not by copying classes`,
                    },
                    {
                        type: 'highlight',
                        text: 'Everything is styled inline with utility classes, including hover, focus and responsive variants. The Button component prevents repetition.',
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
                        text: 'In Archer Review style work, utilities made it fast to build screens, and wrapping common patterns in components (Button, Card) kept the JSX readable.',
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
                            'Tailwind is utility-first, which gives fast development, consistency through a design scale and a small production CSS.',
                            'It has built-in responsive and state variants and is easy to customize with a theme.',
                            'Disadvantages are verbose class lists, a learning curve and the need for component discipline.',
                            'I solve those with components, cva/clsx and the Prettier plugin.',
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
                        text: '**Your JSX has 15 repeated Tailwind class strings for buttons. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Extract a Button component with variant props (cva/clsx).',
                            'Use @apply only for truly shared patterns.',
                            'Keep one source of truth for button styles.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A dynamic class like `bg-${color}-500` is not working. Why?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Tailwind scans source text; it cannot see dynamically built class names.',
                            'Use full class names in a map: { red: "bg-red-500", blue: "bg-blue-500" }.',
                            'Or safelist the classes.',
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
                            'Utility-first',
                            'JIT',
                            'Design scale',
                            'Variants',
                            'Verbose markup',
                            'Component abstraction',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-13',
        topicId: 'html-css-ui',
        title: 'Tailwind vs CSS Modules.',
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
                            'Tailwind: you use ready-made utility classes directly in your markup.',
                            'CSS Modules: you write normal CSS in a file and classes are scoped to the component automatically.',
                            'Tailwind is faster for prototyping and consistent design.',
                            'CSS Modules feel closer to regular CSS and keep markup clean.',
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
                            '**Tailwind** - utility-first, styles in markup, design tokens via config, JIT output.',
                            '**CSS Modules** - standard CSS files, class names hashed per file for local scope, no runtime cost.',
                            '**Speed** - Tailwind is faster to write; Modules need naming and file switching.',
                            '**Readability** - Modules keep JSX clean; Tailwind can get noisy.',
                            '**Consistency** - Tailwind enforces a scale by default; Modules need tokens/discipline.',
                            '**Complex CSS** - Modules handle complex selectors, animations and legacy CSS more naturally.',
                            '**Dynamic styling** - both work with CSS variables; Tailwind needs full class names.',
                            '**Team fit** - Tailwind suits teams who want constraints; Modules suit teams with strong CSS skills or existing CSS.',
                            'They can coexist: Tailwind for most UI, Modules for complex components.',
                            'Both avoid global conflicts and have no runtime overhead, unlike CSS-in-JS libraries.',
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
                        text: `// Tailwind
                            <button className="rounded bg-indigo-600 px-4 py-2 text-white">Save</button>

                            // CSS Modules
                            import styles from './Button.module.css';
                            <button className={styles.button}>Save</button>

                            /* Button.module.css */
                            .button {
                            border-radius: 4px;
                            background: var(--color-primary);
                            padding: 8px 16px;
                            color: #fff;
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Tailwind keeps style next to markup; Modules separate style into a scoped file with locally hashed class names.',
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
                        text: 'For Archer Review, a scoped approach avoided global conflicts. Choosing between the two is mostly about team preference, speed and design-system needs.',
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
                            'Both solve global CSS conflicts, with no runtime cost.',
                            'Tailwind is utility-first with faster development and built-in consistency, but noisier markup.',
                            'CSS Modules use plain CSS with scoped class names, cleaner JSX, and handle complex CSS better.',
                            'I choose based on team skills, design system needs and project complexity, and can mix both.',
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
                        text: '**Startup needs to ship an MVP in 3 weeks with 2 developers. Which one?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Tailwind - fast, consistent, no naming overhead.',
                            'Wrap repeated patterns in components.',
                            'Revisit if design system needs grow.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**A component needs complex keyframe animations and intricate selectors. Approach?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use CSS Modules for that component.',
                            'Keep Tailwind for the rest; they can coexist.',
                            'Use CSS variables to connect both.',
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
                        items: ['Utility-first', 'Scoped CSS', 'Hashed class names', 'Design tokens', 'No runtime'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-14',
        topicId: 'html-css-ui',
        title: 'How do you prevent CSS conflicts?',
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
                            'Conflicts happen when two styles affect the same element unintentionally.',
                            'Use scoped styles: CSS Modules, Tailwind or BEM naming.',
                            'Avoid global selectors and avoid !important.',
                            'Keep specificity low and consistent.',
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
                            'Conflicts come from global scope, specificity wars and source-order dependency.',
                            '**Scoping** - CSS Modules, Shadow DOM, CSS-in-JS or Tailwind so styles belong to a component.',
                            '**Naming** - BEM (block__element--modifier) for plain CSS.',
                            '**Low specificity** - single-class selectors, no IDs, avoid deep nesting.',
                            '**@layer** - define explicit priority: reset, base, components, utilities.',
                            '**Avoid** - element selectors in components, !important, styling by DOM structure.',
                            '**Third-party CSS** - put in a lower layer or scope under a wrapper.',
                            '**Tooling** - Stylelint rules, code review guidelines, visual regression tests.',
                            '**Tokens** - shared variables so components do not hard-code conflicting values.',
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
                        text: `@layer reset, base, components, utilities;

                                @layer components {
                                .card { padding: 16px; }
                                }
                                @layer utilities {
                                .p-0 { padding: 0; }   /* wins regardless of specificity */
                                }

                                /* BEM */
                                .card__title--highlight { color: crimson; }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Layers decide priority explicitly, so utilities always win over components without !important.',
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
                        text: 'In Archer Review, global styles clashed with a UI library. Scoping with CSS Modules and placing library CSS in a lower @layer removed the conflicts.',
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
                            'I prevent conflicts with scoping (CSS Modules/Tailwind), a naming convention like BEM, and low specificity.',
                            'I use @layer for explicit priority and avoid !important and IDs.',
                            'Third-party styles are isolated in a lower layer.',
                            'Stylelint and visual regression tests catch problems early.',
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
                        text: '**After adding a UI library, your buttons look different across the app. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Import library CSS inside a lower @layer.',
                            'Override with your component layer and tokens.',
                            'Scope the library under a wrapper if needed.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Two developers define .title with different styles in different files. How do you stop this?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use CSS Modules so names are hashed per file.',
                            'Or BEM with block prefix (.card__title).',
                            'Add lint rules and code review checks.',
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
                        items: ['Scoping', 'BEM', '@layer', 'Specificity', 'CSS Modules', 'Stylelint'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'hc-15',
        topicId: 'html-css-ui',
        title: 'How do you optimize CSS performance?',
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
                            'Send less CSS to the browser: remove unused styles and minify.',
                            'Load critical CSS first so the page shows quickly.',
                            'Avoid very complex selectors and heavy effects.',
                            'Animate only transform and opacity.',
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
                            'CSS is render-blocking, so optimize both delivery and rendering.',
                            '**Reduce size** - minify, purge unused CSS (Tailwind JIT, PurgeCSS), split by route.',
                            '**Critical CSS** - inline above-the-fold CSS, load the rest async or deferred.',
                            '**Network** - HTTP/2 or HTTP/3, compression (gzip/brotli), caching with hashed filenames, preload key fonts/CSS.',
                            '**Selectors** - keep them simple and avoid deep descendant chains (minor but cumulative).',
                            '**Rendering** - animate transform/opacity (compositor-only), avoid layout thrashing, use contain and content-visibility: auto for long pages.',
                            '**Fonts** - font-display: swap, subset fonts, limit weights.',
                            '**Avoid** - expensive properties like large box-shadow/filter blur on many elements, and @import chains.',
                            '**Measure** - Lighthouse, DevTools Coverage and Performance panels, Core Web Vitals (LCP, CLS).',
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
                        text: `/* Compositor-friendly animation */
                            .card { transition: transform .2s, opacity .2s; }
                            .card:hover { transform: translateY(-4px); }

                            /* Skip rendering offscreen sections */
                            .section { content-visibility: auto; contain-intrinsic-size: 800px; }

                            /* Font loading */
                            @font-face {
                            font-family: Inter;
                            src: url(inter.woff2) format('woff2');
                            font-display: swap;
                            }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Transform/opacity avoid layout and paint costs, content-visibility skips offscreen work, and font-display prevents invisible text.',
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
                        text: 'In Archer Review, we used route-level code splitting, purged unused CSS and fixed layout shift by reserving image sizes, which improved LCP and CLS.',
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
                            'CSS is render-blocking, so I reduce its size with minify, purge and route splitting, and inline critical CSS.',
                            'I use caching, compression and font optimization.',
                            'For rendering performance I animate only transform and opacity and use content-visibility for long pages.',
                            'I measure with Lighthouse, Coverage and Core Web Vitals before and after.',
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
                        text: '**Lighthouse shows "eliminate render-blocking resources" for a 400KB stylesheet. What do you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use DevTools Coverage to find unused CSS and remove/purge it.',
                            'Split CSS per route and inline critical CSS.',
                            'Load non-critical CSS asynchronously and enable brotli + caching.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Page scroll feels janky on a card list with hover effects and shadows. Fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Profile in the Performance panel to find paint/layout cost.',
                            'Animate only transform/opacity, reduce heavy shadows/filters.',
                            'Use content-visibility: auto or virtualize the list.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**You see layout shift when images and fonts load. How to fix?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Set width/height or aspect-ratio on images.',
                            'Use font-display: swap with a similar fallback font.',
                            'Reserve space for dynamic content (skeletons).',
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
                            'Critical CSS',
                            'Render-blocking',
                            'Purge',
                            'content-visibility',
                            'Compositor',
                            'Core Web Vitals',
                        ],
                    },
                ],
            },
        ],
    }),
];
