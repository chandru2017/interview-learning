import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const top30QuestionsSet5: IQuestion[] = [
    createQuestion({
        id: 't30-21',
        topicId: 'top-30',
        title: 'Explain semantic HTML.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Semantic HTML means using HTML elements based on their meaning.',
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
                            'It improves accessibility.',
                            'It helps SEO.',
                            'It improves maintainability.',
                            'Native elements should be preferred over custom behavior.',
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
                        text: `<button type="button">Save</button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A real button already provides keyboard and accessibility behavior.',
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
                        text: `For Archer Review, semantic headings, navigation, buttons, and forms help student portal users and assistive technologies.`,
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
                            'Semantic HTML means using HTML elements according to their purpose.',
                            'It improves accessibility, SEO, and maintainability.',
                            'I always prefer native semantic elements before adding custom ARIA.',
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
                        items: ['Semantic', 'Accessibility', 'SEO', 'Native HTML'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-22',
        topicId: 'top-30',
        title: 'Explain WCAG and ARIA.',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'WCAG is a set of accessibility guidelines. ARIA provides extra information to assistive technologies when normal HTML is not enough.',
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
                            'WCAG defines accessibility guidelines and success criteria.',
                            'ARIA provides roles, states, and properties.',
                            'ARIA should not replace semantic HTML.',
                            'Accessibility should be tested automatically and manually.',
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
                        text: `<button aria-label="Close">×</button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The label gives a screen reader a meaningful name.',
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
                        text: `For Archer Review VPAT work, I would check keyboard navigation, focus, contrast, semantic structure, and screen-reader support.`,
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
                            'WCAG provides guidelines for making websites accessible.',
                            'ARIA provides additional information for assistive technologies.',
                            'I prefer semantic HTML first, then use ARIA when needed.',
                            'I also use automated tools and manual keyboard testing.',
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
                        items: ['WCAG', 'ARIA', 'Accessibility', 'Semantic HTML', 'Keyboard Testing', 'Screen Readers'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-23',
        topicId: 'top-30',
        title: 'How would you make a modal accessible?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'An accessible modal needs a clear name, correct focus handling, keyboard support, and proper closing behavior.',
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
                            'Use dialog semantics.',
                            'Move focus into the modal.',
                            'Keep keyboard focus within the modal when required.',
                            'Support Escape.',
                            'Return focus to the trigger when closed.',
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
                        text: `<div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledBy="modal-title"
                        >`,
                    },
                    {
                        type: 'highlight',
                        text: 'This provides dialog semantics to assistive technologies.',
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
                        text: `In Archer Review, a course confirmation modal should allow keyboard and screen-reader users to complete the action without losing context.`,
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
                            'For an accessible modal, I provide proper dialog semantics and an accessible name.',
                            'I move focus into the modal, manage keyboard focus, support Escape, and return focus to the trigger when the modal closes.',
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
                        items: ['Dialog', 'Focus', 'Escape', 'Return Focus', 'Modal'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-24',
        topicId: 'top-30',
        title: 'How would you implement SEO in Next.js?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'SEO helps search engines understand the page. I manage metadata, semantic HTML, canonical URLs, structured data, sitemap, and robots configuration.',
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
                            'Use Next.js Metadata APIs.',
                            'Use canonical URLs.',
                            'Add JSON-LD structured data where appropriate.',
                            'Use semantic HTML.',
                            'Choose rendering strategies that make important content available.',
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
                        text: `export const metadata = {
                                title: "NCLEX Course | Archer Review"
                            };`,
                    },
                    {
                        type: 'highlight',
                        text: 'Next.js can generate page metadata from this configuration.',
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
                        text: `For Archer Review, SEO work can include metadata and JSON-LD such as Course and Organization schema.`,
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
                            'For SEO in Next.js, I use the Metadata API, semantic HTML, canonical URLs, structured data, sitemap, and robots configuration.',
                            'I also choose SSR, SSG, or ISR when search engines need the content available in the initial response.',
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
                        items: ['SEO', 'Canonical URLs', 'Structured Data', 'Sitemap'],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 't30-25',
        topicId: 'top-30',
        title: 'How would you design a scalable frontend architecture?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'medium',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'A scalable architecture should be easy to add features, change features, test, maintain, and scale across teams.',
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
                            'Define clear boundaries.',
                            'Use feature-based organization.',
                            'Separate UI, business logic, and API concerns.',
                            'Define standards for state, testing, accessibility, security, and performance.',
                            'Keep coupling low.',
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
                        text: `features/
                                shared/
                                services/
                                types/`,
                    },
                    {
                        type: 'highlight',
                        text: 'Each area has a clear responsibility.',
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
                        text: `For Archer Review, Student Portal, Video Library, Courses, and Calendar can be separate feature domains with shared UI and infrastructure.`,
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
                            'For scalable frontend architecture, I focus on clear boundaries and low coupling.',
                            'I organize code by business features, define shared standards, and separate UI, business logic, and API concerns.',
                            'I also consider performance, accessibility, testing, security, and team scalability.',
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
                            'Scalable Architecture',
                            'Clear Boundaries',
                            'Feature Organization',
                            'Shared Standards',
                        ],
                    },
                ],
            },
        ],
    }),
];
