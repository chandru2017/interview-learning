import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const accessibilityQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'ax-11',
        topicId: 'accessibility',
        title: 'What are ARIA labels?',
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
                            'ARIA labels provide an accessible name for an element.',
                            'They are useful when an interactive element does not have a visible text label.',
                            'A common example is an icon-only button.',
                            'The label can be announced by screen readers.',
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
                            'An accessible name tells assistive technology what an interactive element represents.',
                            '**aria-label** provides a direct text name.',
                            '**aria-labelledby** references another element containing the name.',
                            'Do not use aria-label to unnecessarily replace useful visible text.',
                            'The accessible name should be meaningful, concise, and describe the control purpose.',
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
                        text: `<button aria-label="Close dialog">
        <XIcon />
    </button>`,
                    },
                    {
                        type: 'highlight',
                        text: 'The icon may be visually clear, but the accessible name tells a screen reader what the button does.',
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
                        text: 'In Archer Review, icon-only controls such as close, search, menu, and media controls should have meaningful accessible names when the visual icon does not provide an accessible name by itself.',
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
                            'ARIA labels provide an accessible name for an element.',
                            'I commonly use aria-label for icon-only buttons.',
                            'For visible text, I prefer semantic text or aria-labelledby instead of unnecessarily replacing the visible label.',
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
                        text: '**An icon-only close button is announced only as "button". What would you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Give it an accessible name such as "Close dialog".',
                            'Use aria-label or an appropriate visible label/reference.',
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
                        items: ['Accessible name', 'aria-label', 'Icon button', 'Screen reader', 'Close dialog'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-12',
        topicId: 'accessibility',
        title: 'aria-label vs aria-labelledby.',
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
                            'aria-label directly provides the accessible name as a string.',
                            'aria-labelledby gets the accessible name from another element.',
                            'Use aria-labelledby when a visible heading or label already exists.',
                            'Use aria-label when there is no suitable visible text to reference.',
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
                            '**aria-label** is useful for concise names when no visible naming element exists.',
                            '**aria-labelledby** creates a relationship between the control and an existing visible label or heading.',
                            'For dialogs, aria-labelledby is often useful because the dialog heading is already visible.',
                            'Do not duplicate visible text unnecessarily with aria-label.',
                            'Accessible naming should be intentional because naming affects what screen readers announce.',
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
                        text: `// aria-label
    <button aria-label="Close">
        <XIcon />
    </button>

    // aria-labelledby
    <div
        role="dialog"
        aria-labelledby="dialog-title"
    >
        <h2 id="dialog-title">
            Delete account
        </h2>
    </div>`,
                    },
                    {
                        type: 'highlight',
                        text: 'aria-label gives the name directly. aria-labelledby gets the name from another element.',
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
                        text: 'For Archer Review dialogs, I would normally use aria-labelledby to connect the dialog to its visible heading. For icon-only controls, aria-label can provide a concise accessible name.',
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
                            'aria-label provides the accessible name directly.',
                            'aria-labelledby references another element that provides the name.',
                            'If a visible heading already exists, I prefer aria-labelledby because it connects the accessible name to visible content.',
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
                        text: '**A modal already has a visible heading. Which would you prefer?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use aria-labelledby to reference the existing heading.',
                            'This avoids maintaining duplicate naming text.',
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
                        items: ['aria-label', 'aria-labelledby', 'Accessible name', 'Visible heading', 'Reference'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-13',
        topicId: 'accessibility',
        title: 'What is aria-live?',
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
                            'aria-live tells assistive technologies that content may change dynamically.',
                            'It allows screen readers to announce important updates without requiring the user to move focus.',
                            'It is useful for status messages, validation updates, and notifications.',
                            'Common values are polite and assertive.',
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
                            '**polite** waits for a suitable point before announcing the update.',
                            '**assertive** interrupts more quickly and should be used carefully.',
                            'Use live regions for meaningful dynamic updates that the user needs to know.',
                            'Avoid putting constantly changing content inside a live region because it can overwhelm screen reader users.',
                            'A status or alert pattern may be more appropriate depending on the type and urgency of the message.',
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
                        text: `<div aria-live="polite">
                                {message}
                            </div>

                            // Example:
                            // "Your changes have been saved."`,
                    },
                    {
                        type: 'highlight',
                        text: `aria-live helps announce dynamic updates without moving the user's focus.`,
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
                        text: 'In Archer Review forms and search interfaces, aria-live can be useful for announcing important dynamic status messages such as successful updates or result-count changes when the user needs that information.',
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
                            'aria-live tells screen readers that a region can update dynamically.',
                            'Polite waits for a suitable time, while assertive announces more urgently.',
                            'I use live regions carefully for important status or notification messages.',
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
                        text: '**A search result count changes after filtering, but screen reader users do not know about it. What could you do?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Provide an appropriate status message or live region.',
                            'Announce the updated result count without moving focus unnecessarily.',
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
                        items: ['aria-live', 'Dynamic content', 'polite', 'assertive', 'Status', 'Screen reader'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-14',
        topicId: 'accessibility',
        title: 'How do you make forms accessible?',
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
                            'Every form field should have a clear label.',
                            'Use the correct input type.',
                            'Group related fields when appropriate.',
                            'Provide clear instructions and error messages.',
                            'Make sure the entire form works with the keyboard.',
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
                            '**Labels** should be programmatically associated with inputs.',
                            '**Input types** such as email, tel, number, and date provide useful semantics and browser behavior.',
                            '**Required fields** should be communicated appropriately, not only through color.',
                            '**Instructions** should be associated with fields when they provide important information.',
                            '**Validation errors** should identify the field and explain how to fix it.',
                            '**Keyboard and focus** should support the complete form workflow.',
                            'Use fieldsets and legends for logically grouped controls such as radio buttons and checkboxes.',
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
                        text: `<label htmlFor="email">
        Email address
    </label>

    <input
        id="email"
        type="email"
        aria-describedby="email-help"
    />

    <p id="email-help">
        Use your work email.
    </p>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A form field should have a programmatic relationship with its label and supporting information.',
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
                        text: 'For Archer Review login, signup, search, and student forms, I would ensure labels, required fields, instructions, keyboard navigation, validation messages, and focus behavior are accessible.',
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
                            'I associate every form control with a proper label.',
                            'I use semantic input types and group related controls correctly.',
                            'I provide accessible instructions and validation errors.',
                            'I also verify keyboard navigation and screen reader announcements.',
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
                        text: '**A form uses placeholder text instead of labels. Is that enough?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'No.',
                            'Placeholder text is not a replacement for a proper label.',
                            'Use a persistent visible label associated with the input.',
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
                        items: ['Label', 'Input type', 'Required', 'Instructions', 'Validation', 'Keyboard'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-15',
        topicId: 'accessibility',
        title: 'How do you handle accessible validation errors?',
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
                            'The error should clearly explain what went wrong.',
                            'The error should be associated with the correct input.',
                            'Do not depend only on red color.',
                            'Move focus to the first invalid field when appropriate.',
                            'Screen reader users should be able to discover the error.',
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
                            'Use aria-describedby to associate an input with its error message when appropriate.',
                            'Use aria-invalid to communicate that a field currently has an invalid value.',
                            'When submitting a large form, focus the first invalid field so the user knows where to start.',
                            'Provide clear, specific correction instructions.',
                            'A summary of errors can be useful for large forms.',
                            'Ensure error messages are announced appropriately without creating excessive live-region noise.',
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
                        text: `<input
        id="email"
        aria-invalid={!!error}
        aria-describedby="email-error"
    />

    {error && (
        <p id="email-error">
            Enter a valid email address.
        </p>
    )}`,
                    },
                    {
                        type: 'highlight',
                        text: 'The input and error message should have a clear programmatic relationship.',
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
                        text: 'For Archer Review forms, I would connect validation messages to their fields, communicate invalid state, avoid relying only on color, and move focus to the first invalid field when that improves the user experience.',
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
                            'I associate each error message with the related field.',
                            'I use aria-invalid and aria-describedby when appropriate.',
                            'I provide clear correction instructions and move focus to the first invalid field when needed.',
                            'I never communicate errors using color alone.',
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
                        text: '**A form displays red borders but screen readers do not announce the errors. What would you change?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Add programmatic error relationships.',
                            'Use aria-invalid on the field.',
                            'Use aria-describedby for the error text.',
                            'Consider an accessible error summary for large forms.',
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
                            'aria-invalid',
                            'aria-describedby',
                            'Error message',
                            'Focus',
                            'Error summary',
                            'Do not use color alone',
                        ],
                    },
                ],
            },
        ],
    }),
];
