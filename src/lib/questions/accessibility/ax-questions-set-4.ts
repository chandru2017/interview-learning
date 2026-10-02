import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const accessibilityQuestionsSet4: IQuestion[] = [
    createQuestion({
        id: 'ax-16',
        topicId: 'accessibility',
        title: 'How do you test accessibility?',
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
                            'Accessibility testing should combine automated and manual testing.',
                            'Use tools such as Axe, Lighthouse, and ARC Toolkit.',
                            'Test keyboard navigation manually.',
                            'Test important flows with screen readers.',
                            'Check color contrast, focus, forms, and interactive components.',
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
                            '**Automated testing** can detect issues such as missing labels, invalid ARIA, and some contrast problems.',
                            '**Keyboard testing** verifies focus order, keyboard interaction, focus visibility, and modal behavior.',
                            '**Screen reader testing** validates how important content and interactions are announced.',
                            '**Zoom/reflow testing** checks usability at enlarged text and viewport conditions.',
                            '**Tooling** can include Axe DevTools, ARC Toolkit, Lighthouse, browser DevTools, and automated CI checks.',
                            'Automated tools cannot prove complete accessibility, so manual testing remains important.',
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
                        text: `Accessibility testing

    1. Run Axe / ARC / Lighthouse
    2. Fix automated issues
    3. Test keyboard
    4. Test focus
    5. Test screen reader
    6. Check contrast
    7. Test important user flows`,
                    },
                    {
                        type: 'highlight',
                        text: 'Use automation for coverage and manual testing for real interaction behavior.',
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
                        text: 'In Archer Review accessibility work, I would combine Axe, ARC Toolkit, Lighthouse, keyboard testing, screen reader testing, zoom testing, and manual interaction checks for important user journeys.',
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
                            'I use both automated and manual accessibility testing.',
                            'Tools such as Axe, ARC Toolkit, and Lighthouse help find common issues.',
                            'I then manually test keyboard navigation, focus management, screen readers, contrast, zoom, forms, and important user flows.',
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
                        text: '**Axe reports zero issues. Can you say the page is fully accessible?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'Automated tools have limitations.',
                            'Manual keyboard and screen reader testing are still required.',
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
                        items: ['Axe', 'ARC Toolkit', 'Lighthouse', 'Keyboard', 'Screen reader', 'Manual testing'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-17',
        topicId: 'accessibility',
        title: 'Axe vs ARC Toolkit.',
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
                            'Both Axe and ARC Toolkit are accessibility testing tools.',
                            'Both can help identify common accessibility problems.',
                            'They can be used during development and manual testing.',
                            'Neither tool can replace complete manual accessibility testing.',
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
                            '**Axe** is widely used for automated accessibility rules and can integrate into browser tooling, tests, and CI workflows.',
                            '**ARC Toolkit** provides accessibility inspection and testing capabilities through browser tooling.',
                            'Both can identify issues related to semantics, labels, ARIA, contrast, and other detectable rules.',
                            'Tool results can differ because accessibility engines and rule implementations are not identical.',
                            'The important point is to understand the WCAG requirement behind the reported issue rather than blindly fixing tool output.',
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
                        text: `Axe / ARC
        ↓
    Automated findings
        ↓
    Understand WCAG requirement
        ↓
    Fix
        ↓
    Keyboard + Screen Reader test`,
                    },
                    {
                        type: 'highlight',
                        text: 'Use accessibility tools as part of the testing process, not as proof that accessibility is complete.',
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
                        text: 'In Archer Review, Axe and ARC Toolkit can be used as part of accessibility audits, followed by manual keyboard, screen reader, zoom, and interaction testing.',
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
                            'Axe and ARC Toolkit are both useful accessibility testing tools.',
                            'They help identify automatically detectable accessibility issues.',
                            'I use their findings as one part of the process and then validate the behavior manually with keyboard and screen readers.',
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
                        text: '**Axe and ARC report different results. Which one should you trust?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Do not blindly choose one tool.',
                            'Understand the underlying WCAG requirement.',
                            'Inspect the actual HTML and accessibility behavior.',
                            'Use manual testing to validate the user experience.',
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
                        items: ['Axe', 'ARC Toolkit', 'Automated testing', 'WCAG', 'Manual testing'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-18',
        topicId: 'accessibility',
        title: 'How do you handle color contrast?',
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
                            'Color contrast ensures text and important visual information can be distinguished.',
                            'Normal text generally needs a contrast ratio of at least 4.5:1 for WCAG AA.',
                            'Large text generally needs at least 3:1.',
                            'Do not use color as the only way to communicate information.',
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
                            '**Normal text** generally requires 4.5:1 contrast for WCAG AA.',
                            '**Large text** generally requires 3:1 contrast for WCAG AA.',
                            'User interface components and graphical objects can have separate contrast requirements depending on the WCAG criterion.',
                            'Check contrast with browser tools, design tools, and automated accessibility tools.',
                            'Do not rely only on color for errors, status, selection, or meaning.',
                            'Consider hover, focus, disabled, visited, and different theme states as part of the design system.',
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
    <p style={{ color: '#aaa' }}>
        Error message
    </p>

    // Better:
    // Use sufficient contrast
    // and an additional error icon/text,
    // not color alone.`,
                    },
                    {
                        type: 'highlight',
                        text: 'Accessibility is not only about normal text. Check focus indicators, controls, states, and meaningful graphics too.',
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
                        text: 'In Archer Review, I would verify text, buttons, links, form errors, focus indicators, and important UI states against the required contrast criteria and ensure meaning is not communicated through color alone.',
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
                            'I check color contrast against the relevant WCAG requirements.',
                            'For WCAG AA, normal text generally needs 4.5:1 and large text 3:1.',
                            'I also make sure color is not the only way to communicate information.',
                            'I test focus and interactive states as well.',
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
                        text: '**A form shows errors only using red borders. Is that accessible?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Not by itself.',
                            'Provide text or another meaningful indicator.',
                            'Make sure the error is programmatically associated with the field.',
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
                        items: ['Contrast', '4.5:1', '3:1', 'WCAG AA', 'Focus state', 'Color is not enough'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-19',
        topicId: 'accessibility',
        title: 'How do you make a custom dropdown accessible?',
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
                            'First, use a native select if it provides the required UX.',
                            'For a custom dropdown, provide the correct role and accessible name.',
                            'Support keyboard navigation.',
                            'Manage focus correctly.',
                            'Communicate the expanded and selected state.',
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
                            '**Prefer native select** when custom behavior is not required.',
                            'For a custom pattern, follow the appropriate ARIA combobox/listbox pattern rather than inventing roles.',
                            '**Keyboard support** should include the interactions expected by the chosen pattern.',
                            '**State** such as expanded and selected should be communicated programmatically.',
                            '**Focus** should move predictably between the control and options.',
                            'Escape should close the popup when appropriate.',
                            'Do not use a collection of divs and ARIA without implementing the expected keyboard behavior.',
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
        aria-controls="options"
    >
        Select course
    </button>

    <ul id="options">
        <li>React</li>
        <li>Next.js</li>
    </ul>`,
                    },
                    {
                        type: 'highlight',
                        text: 'For a real custom dropdown, follow the correct ARIA pattern and keyboard interaction model. Use native select when possible.',
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
                        text: 'For Archer Review filters, I would first consider a native select. If the design requires a custom component, I would implement the appropriate accessible pattern with keyboard navigation, focus management, expanded state, and selected state.',
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
                            'I prefer a native select when possible because accessibility behavior is built in.',
                            'For a custom dropdown, I follow the appropriate ARIA pattern and implement keyboard navigation, focus management, expanded state, and selection state.',
                            'I also test it with keyboard and screen readers.',
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
                        text: '**The dropdown works with mouse clicks but not with arrow keys. What is missing?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The required keyboard interaction pattern.',
                            'Focus and active-option management.',
                            'Correct accessible state and selection communication.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**The designer asks you to build a fully custom dropdown. What is your first question?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Ask whether a native select can satisfy the requirement.',
                            'Native controls reduce accessibility complexity and maintenance.',
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
                            'Native select',
                            'ARIA pattern',
                            'Keyboard',
                            'Focus',
                            'aria-expanded',
                            'Selected state',
                        ],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-20',
        topicId: 'accessibility',
        title: 'Tell me about an accessibility problem you found and fixed.',
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
                            'Use a real accessibility problem from your project.',
                            'Explain how you found the issue.',
                            'Explain the root cause.',
                            'Explain the fix.',
                            'Explain how you tested the fix.',
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
                            '**Problem** - explain the actual user impact.',
                            '**Discovery** - mention Axe, ARC Toolkit, keyboard testing, screen reader testing, or manual review.',
                            '**Root cause** - explain whether it was semantic HTML, focus, ARIA, contrast, forms, or keyboard behavior.',
                            '**Solution** - explain the code or component change.',
                            '**Validation** - retest with automation and manual accessibility testing.',
                            '**Prevention** - explain how you prevented similar issues through reusable components, standards, code review, or testing.',
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
    Accessibility audit
    ↓
    Find root cause
    ↓
    Fix component
    ↓
    Keyboard + Screen Reader test
    ↓
    Prevent regression`,
                    },
                    {
                        type: 'highlight',
                        text: 'For a senior-level answer, explain not only the fix but also how you prevented the same issue from coming back.',
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
                        text: 'In Archer Review, one example is improving accessibility in interactive components during accessibility audits. I would explain how an issue was identified through keyboard or screen reader testing, how the semantic HTML/ARIA/focus behavior was corrected, and how the component was retested using tools such as Axe or ARC Toolkit.',
                    },
                    {
                        type: 'paragraph',
                        text: 'A strong example could be a custom interactive control that was usable with a mouse but not with the keyboard. I would replace it with a semantic control where possible, or implement the required keyboard and focus behavior, then validate it with keyboard and screen reader testing.',
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
                        text: 'In one of my accessibility audits, I found an interactive component that worked correctly with a mouse but was difficult to use with the keyboard. I checked the HTML and found that the component was using a custom element without the expected keyboard behavior. I changed it to a semantic HTML control where possible and fixed the focus behavior. Then I tested it with keyboard navigation, screen reader testing, and accessibility tools. This also helped us improve the reusable component so the same issue would not appear in other places.',
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
                        text: '**The interviewer asks: "How did you discover the issue?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Mention the exact testing method.',
                            'Example: keyboard testing, screen reader testing, Axe, ARC Toolkit, or manual review.',
                            'Explain what the user experienced.',
                        ],
                    },
                ],
            },
            {
                label: 'Scenario 2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**The interviewer asks: "How did you prevent the issue from happening again?"**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Improve the shared component.',
                            'Add accessibility checks to code review.',
                            'Add automated accessibility testing where practical.',
                            'Document accessibility standards.',
                            'Include keyboard and screen reader testing in QA.',
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
                            'Accessibility issue',
                            'Audit',
                            'Root cause',
                            'Semantic HTML',
                            'Keyboard',
                            'Screen reader',
                            'Axe',
                            'Prevention',
                        ],
                    },
                ],
            },
        ],
    }),
];
