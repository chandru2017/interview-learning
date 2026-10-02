import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const accessibilityQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'ax-6',
        topicId: 'accessibility',
        title: 'What is keyboard accessibility?',
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
                            'Keyboard accessibility means users can use the application without a mouse.',
                            'Users should be able to reach interactive elements using Tab and Shift+Tab.',
                            'Enter and Space should activate appropriate controls.',
                            'Focus should always be visible and logical.',
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
                            'All interactive controls must be reachable and operable using the keyboard.',
                            '**Focus order** should follow a logical reading and interaction order.',
                            '**Visible focus** should not be removed without providing an accessible replacement.',
                            '**Custom components** need keyboard behavior that matches their expected pattern.',
                            'Avoid positive tabindex values because they can create confusing focus order.',
                            'Keyboard testing should include Tab, Shift+Tab, Enter, Space, Escape, and arrow keys where the component pattern requires them.',
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
        onClick={handleSave}
    >
        Save
    </button>

    // Native button automatically supports
    // keyboard interaction.`,
                    },
                    {
                        type: 'highlight',
                        text: 'A keyboard user should be able to complete the same important actions as a mouse user.',
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
                        text: 'In Archer Review accessibility testing, I would verify that header navigation, menus, forms, dialogs, video controls, and other interactive components can be completed using only the keyboard.',
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
                            'Keyboard accessibility means the application can be used without a mouse.',
                            'All interactive elements should be reachable, operable, and have a visible focus state.',
                            'I test Tab, Shift+Tab, Enter, Space, Escape, and component-specific keyboard interactions.',
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
                        text: '**A custom dropdown works with a mouse but not with the keyboard. What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Focus management.',
                            'Keyboard interaction pattern.',
                            'Arrow key support where required.',
                            'Enter/Space selection.',
                            'Escape behavior.',
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
                        items: ['Keyboard', 'Focus', 'Tab', 'Shift+Tab', 'Enter', 'Space', 'Escape'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-7',
        topicId: 'accessibility',
        title: 'How do you make a modal accessible?',
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
                            'A modal should have a clear accessible name.',
                            'Focus should move into the modal when it opens.',
                            'Keyboard users should be able to interact with all controls.',
                            'Escape should normally close the modal when appropriate.',
                            'Focus should return to the element that opened the modal.',
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
                            'Use an appropriate dialog pattern and accessible name.',
                            'Connect the dialog to a visible heading using aria-labelledby when appropriate.',
                            'Move focus to a logical element inside the modal when it opens.',
                            'Keep keyboard focus within the modal while it is active.',
                            'Prevent interaction with the underlying page using the appropriate modal/inert behavior.',
                            'Restore focus to the triggering element when the modal closes.',
                            'Handle Escape and ensure the close button itself is accessible.',
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
        aria-labelledby="dialog-title"
    >
        <h2 id="dialog-title">
            Delete account
        </h2>
    
        <button onClick={close}>
            Close
        </button>
    </div>`,
                    },
                    {
                        type: 'highlight',
                        text: 'A modal needs correct semantics, focus management, keyboard support, and background interaction handling.',
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
                        text: 'For Archer Review dialogs such as confirmation, video, or form modals, I would ensure the dialog has an accessible name, focus moves inside, keyboard navigation works, Escape behaves correctly, and focus returns to the trigger after closing.',
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
                            'I give the modal an accessible name using a heading and aria-labelledby when appropriate.',
                            'When it opens, I move focus inside and keep keyboard focus within the modal.',
                            'Escape should close it when appropriate, and focus should return to the trigger after closing.',
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
                        text: '**A user opens a modal and presses Tab. Focus moves to the page behind the modal. What is wrong?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'The modal does not manage focus correctly.',
                            'Implement a focus trap or use a well-tested accessible dialog component.',
                            'The background should not remain interactable while the modal is active.',
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
                        items: ['Dialog', 'aria-modal', 'Focus', 'Focus trap', 'Escape', 'Restore focus'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-8',
        topicId: 'accessibility',
        title: 'How do you manage focus inside a modal?',
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
                            'Save the element that opened the modal.',
                            'Move focus into the modal when it opens.',
                            'Keep focus inside the modal while it is active.',
                            'When the modal closes, return focus to the original element.',
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
                            '**Before opening** store the currently focused element.',
                            '**On open** move focus to the first appropriate interactive element or another logical target.',
                            '**During interaction** prevent Tab from moving into the underlying page.',
                            '**On close** restore focus to the original trigger when it still exists and is appropriate.',
                            'Be careful with nested dialogs and cases where the original trigger has been removed.',
                            'Prefer a tested dialog/focus-management utility instead of creating complex focus logic from scratch.',
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
                        text: `const triggerRef = useRef(null);

    const openModal = () => {
        triggerRef.current = document.activeElement;
        setOpen(true);
    };

    // After close:
    triggerRef.current?.focus();`,
                    },
                    {
                        type: 'highlight',
                        text: 'The focus journey is: Trigger → Modal → Trigger.',
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
                        text: 'For accessible Archer Review modals, I would preserve the triggering element, move focus into the dialog, keep focus within it, and restore focus when the dialog closes.',
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
                            'Before opening the modal, I store the currently focused element.',
                            'When the modal opens, I move focus inside and keep it within the dialog.',
                            'When it closes, I return focus to the original trigger if it is still available.',
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
                        text: '**The modal closes and focus disappears. What should happen?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Restore focus to the element that opened the modal.',
                            'If that element no longer exists, move focus to the next logical location.',
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
                        items: ['Save focus', 'Move focus', 'Focus trap', 'Restore focus', 'Trigger', 'Dialog'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-9',
        topicId: 'accessibility',
        title: 'What is a focus trap?',
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
                            'A focus trap keeps keyboard focus inside a specific UI area.',
                            'It is commonly used for modal dialogs.',
                            'When the user presses Tab at the last focusable element, focus moves to the first one.',
                            'This prevents the user from accidentally reaching the page behind the modal.',
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
                            'A focus trap creates a controlled keyboard navigation cycle within a modal.',
                            'It should include all relevant focusable elements inside the dialog.',
                            'Shift+Tab should work correctly in the reverse direction.',
                            'The trap should be activated only while the modal requires it.',
                            'Focus management should also include initial focus and focus restoration.',
                            'Modern dialog/focus-management libraries can reduce implementation mistakes.',
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
                        text: `Modal focus order:

    [Close] → [Input] → [Save]
    ↑                   ↓
    └───────────────────┘`,
                    },
                    {
                        type: 'highlight',
                        text: 'The user can cycle through modal controls without escaping into the background page.',
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
                        text: 'For Archer Review confirmation dialogs and form modals, a focus trap ensures keyboard users stay within the active dialog until they close or complete it.',
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
                            'A focus trap keeps keyboard focus inside a component, usually a modal.',
                            'Tab cycles through the focusable elements inside the modal instead of moving to the background page.',
                            'It should also support Shift+Tab and restore focus when the modal closes.',
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
                        text: '**Why is a focus trap important for a modal?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'It prevents keyboard users from interacting with hidden or inactive page content.',
                            'It keeps navigation predictable while the dialog is open.',
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
                        items: ['Focus trap', 'Modal', 'Tab', 'Shift+Tab', 'Keyboard', 'Focus cycle'],
                    },
                ],
            },
        ],
    }),

    createQuestion({
        id: 'ax-10',
        topicId: 'accessibility',
        title: 'How do screen readers interpret HTML?',
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
                            'Screen readers do not simply read the raw HTML source.',
                            'Browsers expose an accessibility tree based on the DOM, semantics, roles, names, states, and properties.',
                            'Screen readers use this information to announce content and controls.',
                            'Semantic HTML makes this information easier for assistive technologies to understand.',
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
                            'The browser creates an **accessibility tree** from the DOM and accessibility semantics.',
                            'The tree contains information such as role, accessible name, state, value, and relationships.',
                            'Assistive technologies consume this accessibility information through platform accessibility APIs.',
                            'Semantic elements such as button, heading, nav, and input provide useful information automatically.',
                            'ARIA can modify or add accessibility semantics when required.',
                            'CSS visual appearance alone does not determine what a screen reader understands.',
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
                        text: `<button>
        Save
    </button>
    
    // Screen reader can understand:
    // Role: button
    // Name: Save`,
                    },
                    {
                        type: 'highlight',
                        text: 'Think: HTML → Browser accessibility tree → Assistive technology → User.',
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
                        text: 'When testing Archer Review with screen readers, I would verify that headings, landmarks, buttons, links, form fields, dialogs, and dynamic updates are announced with the expected role and accessible name.',
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
                            'The browser builds an accessibility tree from the DOM and its semantics.',
                            'Screen readers use this tree through accessibility APIs.',
                            'Semantic HTML provides roles and names automatically, while ARIA can add or modify semantics when needed.',
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
                        text: '**A button looks correct visually but the screen reader announces only "button". What would you check?**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Check the accessible name.',
                            'Check visible text.',
                            'Check aria-label or aria-labelledby if used.',
                            'Check whether the button content is hidden from the accessibility tree.',
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
                        items: ['Accessibility tree', 'DOM', 'Semantics', 'Accessible name', 'Role', 'Screen reader'],
                    },
                ],
            },
        ],
    }),
];
