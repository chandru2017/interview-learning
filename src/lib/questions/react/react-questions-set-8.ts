import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const reactQuestionsSet8: IQuestion[] = [
    createQuestion({
        id: 're-36',
        topicId: 'react',
        title: 'How would you debug excessive re-renders?',
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
                            'Debug with:',
                            'React DevTools Profiler - see which components re-render and why.',
                            'Console.log to see render counts.',
                            'Identify prop changes causing re-renders.',
                            'Use React.memo to confirm props are changing.',
                            'Check dependency arrays in Hooks.',
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
                            '**Debugging tools:**',
                            '**React DevTools Profiler** - flame graphs show render time/frequency.',
                            'why-did-you-render library - logs component re-renders.',
                            '**React DevTools Highlight Updates** - see which components update.',
                            '**Console patterns** - log in component to count renders.',
                            'Check props with JSON.stringify to see what changed.',
                            "**Method:** profile with DevTools Profiler, identify slowest components, check why they're re-rendering (parent updates, Context change, own state change), apply appropriate optimization.",
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
                        text: `// Debug re-renders
    import whyDidYouRender from '@welldone-software/why-did-you-render';

    whyDidYouRender(React, {
    trackAllPureComponents: true,
    });

    // Console logging
    function Component({ count, name }) {
    console.log('Rendered:', { count, name }); // Logs on every render

    return <div>{count} {name}</div>;
    }

    // React DevTools Highlight Updates
    // Enable in DevTools settings

    // React DevTools Profiler
    // Record, interact, analyze flame chart`,
                    },
                    {
                        type: 'highlight',
                        text: 'why-did-you-render logs component re-renders with reasons. DevTools Profiler shows performance.',
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
                        text: `In Archer Review, DevTools Profiler identified form components re-rendering on unrelated state changes.`,
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
                            'Use React DevTools Profiler to visualize render times and identify slow components. why-did-you-render library logs why components re-render.',
                            'Add console.log to components to count renders.',
                            'Profile production builds, not development.',
                            'Check that props actually changed, not just references.',
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
                        items: ['debugging', 'DevTools Profiler', 'why-did-you-render', 'performance', 'optimization'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-37',
        topicId: 'react',
        title: 'How would you optimize a React application with 500+ components?',
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
                            'Optimize with:',
                            'Code splitting - load chunks on demand.',
                            'Lazy loading - React.lazy for routes/heavy components.',
                            'Component memoization - React.memo for leaf components.',
                            'State management - avoid prop drilling.',
                            'Virtualization - render only visible items.',
                            'Profiling - find bottlenecks.',
                            'Bundle analysis - identify large dependencies.',
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
                            '**Large app optimization:**',
                            '**Code splitting** - split by routes, features.',
                            '**Lazy loading** - React.lazy for routes and modals.',
                            '**Tree shaking** - remove unused code.',
                            '**Bundle analysis** - webpack-bundle-analyzer to find large deps.',
                            '**Virtual scrolling** - IntersectionObserver for large lists.',
                            '**Image optimization** - lazy load, optimize formats.',
                            '**State management** - split Context by concern.',
                            '**Component profiling** - React DevTools Profiler.',
                            '**Production build** - minification, gzip.',
                            '**Performance budgets** - set targets, monitor.',
                            '**Remove unused dependencies** - audit regularly.',
                            '**Prefetching** - preload critical routes.',
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
                        text: `// Code splitting by routes
    const Dashboard = lazy(() => import('./Dashboard'));
    const Settings = lazy(() => import('./Settings'));

    function App() {
    return (
    <Suspense fallback={<Loading />}>
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
    </Suspense>
    );
    }

    // Virtual scrolling for large lists
    import { FixedSizeList } from 'react-window';

    function LargeList({ items }) {
    return (
    <FixedSizeList height={600} itemCount={items.length} itemSize={35}>
    {({ index, style }) => (
        <div style={style}>{items[index].name}</div>
    )}
    </FixedSizeList>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Code splitting loads only needed code. Virtual scrolling renders only visible items.',
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
                        text: `In Archer Review, code splitting would've loaded form sections only when needed.`,
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
                            'For large apps: code split by routes and features, use lazy loading for heavy components, virtualize large lists, analyze bundle size, optimize images, manage state efficiently.',
                            'Profiling is key - measure before optimizing.',
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
                        items: ['code splitting', 'lazy loading', 'virtualization', 'profiling', 'bundle analysis'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-38',
        topicId: 'react',
        title: 'How would you handle a component that has become 1,000+ lines?',
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
                            'Break it into smaller components:',
                            'Extract sub-components for logical sections.',
                            'Move business logic to custom Hooks.',
                            'Use composition to organize code.',
                            'Split state into separate Hooks.',
                            'Move logic outside component (utility functions).',
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
                            '**Large component refactoring:**',
                            '**Identify logical sections** - render, state, effects.',
                            '**Extract custom Hooks** - move state and effects to hooks.',
                            'Create sub-components - one for each section.',
                            '**Use Composition** - nest smaller components.',
                            '**Separate concerns** - business logic in Hooks, UI in components.',
                            '**Container/Presentational pattern** - business in container, UI in presentational.',
                            'Feature-based structure - organize by feature instead of type.',
                            '**Consider state management** - if state is complex, use Context or Redux.',
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
                        text: `// Refactor large component
    // Before: 1000 line component
    function FormComponent() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    // ... 900 lines
    }

    // After: Extracted Hooks
    function useFormLogic() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    // ... form logic
    return { formData, setFormData, errors };
    }

    // After: Extracted sub-components
    function FormHeader() { return <header>...</header>; }
    function FormFields() { return <div>...</div>; }
    function FormFooter() { return <footer>...</footer>; }

    // After: Compose components
    function FormComponent() {
    const form = useFormLogic();
    return (
    <>
    <FormHeader />
    <FormFields {...form} />
    <FormFooter />
    </>
    );
    }`,
                    },
                    {
                        type: 'highlight',
                        text: 'Extract Hooks for logic, create sub-components for sections, compose them.',
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
                        text: `In Archer Review, large form components were split into sections with extracted Hooks.`,
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
                            'Break large components by extracting custom Hooks for logic, creating sub-components for sections, and using composition.',
                            'Move business logic to Hooks, keep components focused on rendering.',
                            'Consider state management if state is complex.',
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
                            'large component',
                            'extract Hooks',
                            'sub-components',
                            'composition',
                            'separation of concerns',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-39',
        topicId: 'react',
        title: 'How would you structure a large React application?',
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
                            'Structure by:',
                            'Feature-based folders (users, posts, settings).',
                            'Separate presentational and container components.',
                            'Centralize shared utilities and Hooks.',
                            'Organize state management separately.',
                            'Keep routes in one place.',
                            'Reusable components in common folder.',
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
                            '**Large app structure patterns:**',
                            'Feature-based - folders for each feature (users/, posts/) with routes, components, Hooks.',
                            '**Layered** - pages, containers, components, utils, services layers.',
                            '**Modular** - features as modules, each self-contained.',
                            'MVC-like - views (components), controllers (Hooks), models (state).',
                            '**Key principles:** separation of concerns, reusability, maintainability, scalability.',
                            '**File organization:** features > pages > components > utils.',
                            'Shared components in separate folder.',
                            'State management at top or feature level.',
                            'Services/APIs in separate folder.',
                            'No circular dependencies.',
                            'Keep imports simple.',
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
                        text: `// Feature-based structure
    src/
    features/
    users/
    components/
        UserCard.js
        UserForm.js
    hooks/
        useUser.js
        useUsers.js
    pages/
        UserPage.js
        UsersPage.js
    api/
        userApi.js
    types.js
    index.js
    posts/
    components/
        PostCard.js
    hooks/
        usePost.js
    pages/
        PostPage.js
    shared/
    components/
    Button.js
    Modal.js
    hooks/
    useAsync.js
    utils/
    helpers.js
    App.js
    index.js`,
                    },
                    {
                        type: 'highlight',
                        text: 'Feature-based structure organizes code by feature, easier to maintain and scale.',
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
                        text: `In Archer Review, feature-based structure would organize forms, users, submissions separately.`,
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
                            'Organize by features in separate folders, each with its components, Hooks, pages, and API calls.',
                            'Use shared folders for reusable components and utilities.',
                            'Keep state management organized.',
                            'Avoid circular dependencies.',
                            'Makes scaling easier.',
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
                        items: ['feature-based', 'organization', 'scalability', 'separation', 'maintainability'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 're-40',
        topicId: 'react',
        title: 'How would you design reusable components for multiple teams?',
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
                            'Design with:',
                            'Clear props interface - document all props.',
                            'Flexibility - accept variants and customization.',
                            'Composition - use props.children for customization.',
                            'Default styles - consistent look and feel.',
                            'Documentation - Storybook examples.',
                            'Testing - ensure components work reliably.',
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
                            '**Reusable component design:**',
                            '**Props interface** - clear, documented, typed (TypeScript).',
                            '**Flexibility** - accept variants (size, color, type), composition slots.',
                            '**Customization** - className, style props for overrides.',
                            '**Composition** - use render props or children for flexibility.',
                            '**Defaults** - sensible defaults, follow design system.',
                            '**Testing** - unit tests for behavior, visual tests for appearance.',
                            '**Documentation** - Storybook with variants and examples.',
                            '**Versioning** - semantic versioning for API changes.',
                            '**Performance** - memoization, lazy loading if needed.',
                            '**Accessibility** - ARIA labels, keyboard support.',
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
                        text: `// Reusable button component
    export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    }

    export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    children,
    className
    }) => {
    return (
    <button
    className={cn('button', \`button--\${variant}\`, \`button--\${size}\`, className)}
    disabled={disabled}
    onClick={onClick}
    >
    {children}
    </button>
    );
    };

    // Storybook example
    export default {
    title: 'Button',
    component: Button
    };

    export const Primary = () => <Button>Primary Button</Button>;
    export const Secondary = () => <Button variant="secondary">Secondary</Button>;`,
                    },
                    {
                        type: 'highlight',
                        text: 'Component has clear props, accepts customization, includes TypeScript types and Storybook examples.',
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
                        text: `In Archer Review, reusable components had consistent props interface for team reuse.`,
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
                            'Design reusable components with clear props interface, flexibility through variants and composition, sensible defaults, TypeScript types, Storybook documentation, unit and visual tests.',
                            'Allow customization through className and style props.',
                            'Follow design system.',
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
                        items: ['reusable components', 'props interface', 'composition', 'documentation', 'testing'],
                    },
                ],
            },
        ],
    }),
];
