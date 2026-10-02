import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const accessibilityQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ax-1',
        topicId: 'accessibility',
        title: 'What is WCAG?',
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
                            'WCAG stands for Web Content Accessibility Guidelines.',
                            'It provides guidelines for making websites accessible to people with disabilities.',
                            'It is developed by the W3C Web Accessibility Initiative.',
                            'WCAG covers areas like keyboard access, screen readers, color contrast, forms, and content structure.',
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
                            '**WCAG** provides technology-independent accessibility guidance for web content.',
                            '**Conformance levels** are A, AA, and AAA.',
                            '**WCAG 2.2** is the current major WCAG 2.x recommendation and adds accessibility guidance beyond earlier versions.',
                            '**POUR principles** are Perceivable, Operable, Understandable, and Robust.',
                            '**Level AA** is commonly used as the practical target for many products and accessibility programs.',
                            'Accessibility should be considered during design, development, testing, and maintenance rather than only at the end.',
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
                        text: `// Bad
    <div onclick="submitForm()">Submit</div>
    
    // Better
    <button type="submit">
        Submit
    </button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'WCAG helps us build interfaces that can be used by people with different abilities and assistive technologies.',
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
                        text: 'In Archer Review, accessibility work includes keyboard navigation, screen reader support, semantic HTML, ARIA, color contrast, focus management, and testing with tools such as Axe and ARC Toolkit.',
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
                            'WCAG means Web Content Accessibility Guidelines.',
                            'It provides guidelines for making websites accessible to people with disabilities.',
                            'The main principles are POUR: Perceivable, Operable, Understandable, and Robust.',
                            'In projects, I use WCAG as a reference for development and accessibility testing.',
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
                        text: '**A client asks whether passing Lighthouse means the application is fully accessible. What would you say?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Automated tools can detect only some accessibility issues.',
                            'Manual keyboard testing is also required.',
                            'Screen reader testing may be required.',
                            'Accessibility should be checked against relevant WCAG requirements.',
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
                        items: ['WCAG', 'W3C', 'Accessibility', 'POUR', 'A / AA / AAA', 'Assistive technology'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-2',
        topicId: 'accessibility',
        title: "Explain WCAG's POUR principles.",
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
                            'POUR represents four accessibility principles.',
                            'P - Perceivable: users should be able to perceive the content.',
                            'O - Operable: users should be able to operate the interface.',
                            'U - Understandable: content and behavior should be easy to understand.',
                            'R - Robust: content should work with different browsers and assistive technologies.',
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
                            '**Perceivable** - provide alternatives such as alt text, captions, and sufficient contrast.',
                            '**Operable** - support keyboard navigation, focus management, and accessible interaction.',
                            '**Understandable** - use clear labels, predictable behavior, and useful error messages.',
                            '**Robust** - use valid semantic HTML and compatible accessibility APIs so assistive technologies can understand the UI.',
                            'POUR is useful as a mental model for finding accessibility gaps during design and code review.',
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
                        text: `Perceivable  -> alt text
    Operable      -> keyboard support
    Understandable -> clear labels/errors
    Robust        -> semantic HTML + ARIA`,
                    },
                    {
                        type: 'highlight',
                        text: 'POUR helps us think about accessibility from four different user-experience perspectives.',
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
                        text: 'For Archer Review, POUR can be applied to course content, video controls, forms, navigation, modals, and interactive components so users can perceive, operate, understand, and reliably use the application.',
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
                            'POUR stands for Perceivable, Operable, Understandable, and Robust.',
                            'Perceivable means users can access the information.',
                            'Operable means they can interact with the UI.',
                            'Understandable means the content and behavior are clear.',
                            'Robust means the UI works with browsers and assistive technologies.',
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
                        text: '**A button works with a mouse but not with a keyboard. Which POUR principle is mainly affected?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Operable.',
                            'The user must be able to operate the interface using supported input methods such as the keyboard.',
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
                        items: ['POUR', 'Perceivable', 'Operable', 'Understandable', 'Robust'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-3',
        topicId: 'accessibility',
        title: 'What is semantic accessibility?',
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
                            'Semantic accessibility means using HTML elements according to their actual meaning.',
                            'For example, use button for an action and a for navigation.',
                            'Semantic HTML gives browsers and screen readers useful information automatically.',
                            'It reduces the need for unnecessary ARIA.',
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
                            '**Native semantics** provide role, state, and behavior to assistive technologies.',
                            '**Buttons** already support keyboard interaction and button semantics.',
                            '**Links** provide navigation semantics and expected browser behavior.',
                            '**Headings** create a meaningful document structure.',
                            '**Landmarks** such as header, nav, main, and footer help screen reader users navigate.',
                            'Using semantic HTML first is usually safer than recreating native behavior with divs and ARIA.',
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
                        text: `// Avoid
    <div role="button" onClick={handleClick}>
        Save
    </div>

    // Prefer
    <button onClick={handleClick}>
        Save
    </button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'Use the correct HTML element first. Add ARIA only when native HTML cannot provide the required semantics.',
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
                        text: 'In Archer Review, semantic HTML is especially important for navigation, forms, buttons, headings, content sections, and interactive components because it improves both screen reader and keyboard usability.',
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
                            'Semantic accessibility means using HTML elements based on their actual purpose.',
                            'For example, I use button for actions, a for navigation, and proper heading levels for content structure.',
                            'This gives assistive technologies useful information without unnecessary ARIA.',
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
                        text: '**You find many clickable div elements in a project. What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Replace them with button or link when appropriate.',
                            'Preserve the expected keyboard and focus behavior.',
                            'Use ARIA only when a native element cannot provide the required semantics.',
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
                        items: ['Semantic HTML', 'Native semantics', 'Button', 'Link', 'Heading', 'Landmarks'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-4',
        topicId: 'accessibility',
        title: 'What is ARIA?',
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
                            'ARIA stands for Accessible Rich Internet Applications.',
                            'It provides attributes that communicate roles, states, and properties to assistive technologies.',
                            'ARIA is useful for custom interactive components.',
                            'ARIA should normally be used together with semantic HTML, not as a replacement for it.',
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
                            '**Roles** describe what an element is, such as dialog, tab, or alert.',
                            '**Properties** provide additional information, such as aria-label or aria-labelledby.',
                            '**States** describe current conditions, such as aria-expanded or aria-selected.',
                            'ARIA changes the accessibility tree but does not automatically implement keyboard behavior or interaction.',
                            'When native HTML already provides the required semantics, prefer native HTML instead of adding ARIA.',
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
                        text: `<button
        aria-expanded={isOpen}
        aria-controls="menu"
    >
        Menu
    </button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'ARIA communicates accessibility information, but developers are still responsible for implementing correct interaction behavior.',
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
                        text: 'In Archer Review, ARIA can be useful for custom dialogs, tabs, accordions, menus, live regions, and other interactive components where native HTML alone does not communicate the complete state or relationship.',
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
                            'ARIA stands for Accessible Rich Internet Applications.',
                            'It provides roles, states, and properties that help assistive technologies understand custom UI.',
                            'I use ARIA when native HTML is not enough, and I avoid using it when a semantic HTML element already solves the problem.',
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
                        text: '**Does adding role="button" to a div automatically make it an accessible button?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'You also need correct keyboard behavior, focus behavior, and interaction handling.',
                            'Using a native button is usually better.',
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
                        items: ['ARIA', 'Roles', 'States', 'Properties', 'Accessibility tree', 'Semantic HTML'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-5',
        topicId: 'accessibility',
        title: 'When should you NOT use ARIA?',
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
                            'Do not use ARIA when native HTML already provides the required accessibility.',
                            'For example, use button instead of div role="button".',
                            'Do not add ARIA just because it looks more accessible.',
                            'Incorrect ARIA can make accessibility worse.',
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
                            '**Prefer native HTML** because it provides built-in semantics and keyboard behavior.',
                            'Do not use ARIA to compensate for incorrect HTML structure.',
                            'Do not add conflicting ARIA roles or states.',
                            'Do not use aria-label to hide or replace visible text unnecessarily.',
                            'ARIA does not automatically provide keyboard interaction, focus management, or event handling.',
                            'The principle is: use native semantics first, ARIA when necessary.',
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
                        text: `// Unnecessary ARIA
    <div
        role="button"
        tabIndex={0}
    >
        Save
    </div>
    
    // Better
    <button>
        Save
    </button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The first question should always be: "Can native HTML solve this?"',
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
                        text: 'During accessibility reviews, I would remove unnecessary ARIA from native controls and use semantic elements wherever possible. This reduces complexity and avoids conflicting accessibility information.',
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
                            'I do not use ARIA when native HTML already provides the required semantics and behavior.',
                            'For example, I use button instead of div role="button".',
                            'Incorrect or unnecessary ARIA can create conflicting information for screen readers.',
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
                        text: '**A developer adds role="button" to every clickable div. What would you recommend?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use native button elements for actions.',
                            'Use anchor elements for navigation.',
                            'Reserve ARIA for cases where native HTML cannot express the required semantics.',
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
                            'Native HTML',
                            'Semantic',
                            'Avoid unnecessary ARIA',
                            'Conflicting roles',
                            'Keyboard behavior',
                        ],
                    },
                ],
            },
        ],
    }),
];
