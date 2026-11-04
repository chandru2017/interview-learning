import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet8: IQuestion[] = [
    createQuestion({
        id: 'one-india-36',
        topicId: 'one-india',
        title: 'How do you handle API errors?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'rest-api',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'API errors happen when a request fails, such as network issues, invalid input, or server problems.',
                            'We need to handle these errors and show meaningful feedback to users.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'API call pannumbodhu different errors varalaam (Network issue, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error).',
                            'Error vandha application crash aagama handle pannanum.',
                            'User-ku understandable message show pannanum. Developer-ku debugging details log pannanum.',
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
                            'Check HTTP response status.',
                            'Handle network errors.',
                            'Use appropriate error messages.',
                            'Implement retry only for suitable failures.',
                            'Avoid exposing sensitive server details.',
                            'Handle authentication errors appropriately.',
                            'Use centralized error handling where beneficial.',
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
                        text: `const response = await fetch("/api/users");

    if (!response.ok) {
    throw new Error(\`HTTP Error: \${response.status}\`);
    }`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Fetch does not automatically reject for HTTP errors such as 404 or 500. We must check response.ok.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In an application, if a course API fails, I can display an error message with a retry option rather than leaving the page blank.',
                        ],
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
                            'I handle API errors by checking HTTP status codes and managing network failures.',
                            'I show meaningful error messages to users and log relevant information for debugging.',
                            'For appropriate errors, I can implement retry mechanisms.',
                            "In React applications, I use TanStack Query's error states and centralized error handling when required.",
                            'This helps improve application reliability and user experience.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-37',
        topicId: 'one-india',
        title: 'What are HTTP methods and status codes?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'rest-api',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'HTTP methods define what operation we want to perform.',
                            'HTTP status codes tell us the result of the request.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'API request send pannumbodhu enna operation perform pannanum nu HTTP method decide pannum (GET – Data fetch, POST – New data create, PUT – Full update, PATCH – Partial update, DELETE – Data delete).',
                            'Response vandha status code request success-ah fail-ah nu indicate pannum.',
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
                        type: 'paragraph',
                        text: '**HTTP Status Codes:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '**200**: OK',
                            '**201**: Created',
                            '**204**: No Content',
                            '**400**: Bad Request',
                            '**401**: Unauthorized',
                            '**403**: Forbidden',
                            '**404**: Not Found',
                            '**500**: Internal Server Error',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: 'Remember: 401 authentication-related; 403 means access is forbidden.',
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
                        text: `fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John" }),
    });`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This sends a POST request to create a user.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In a frontend application, GET requests fetch course data, POST requests create enrollments, PATCH requests update user details, and DELETE requests remove records.',
                        ],
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
                            'HTTP methods define the type of operation performed on a resource.',
                            'GET is used to retrieve data, POST to create data, PUT to replace data, PATCH to partially update data, and DELETE to remove data.',
                            'HTTP status codes indicate the result of the request.',
                            'For example, 200 means success, 201 means created, 401 means unauthorized, 404 means not found, and 500 indicates a server error.',
                            'I use these methods and status codes when integrating REST APIs in frontend applications.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-38',
        topicId: 'one-india',
        title: 'What is Tailwind CSS, and why do we use it?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'tailwind-css',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Tailwind CSS is a utility-first CSS framework used to style user interfaces using predefined utility classes.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Tailwind CSS-la normal CSS file-la separate class create pannuradhukku badhila predefined utility classes use pannuvom.',
                            'Example: flex – Flexbox, p-4 – Padding, text-lg – Font size, bg-blue-500 – Background color.',
                            'Idhunaala UI fast-ah develop panna mudiyum. Design consistency maintain panna easy-ah irukkum.',
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
                            'Utility-first approach.',
                            'Responsive design utilities.',
                            'State variants like hover and focus.',
                            'Consistent spacing and styling.',
                            'Reduced custom CSS for many use cases.',
                            'Design tokens and theme customization.',
                            'Reusable component patterns.',
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
                        text: `<button className=\"rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600\">\n  Submit\n</button>`,
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In Archer Review or other frontend applications, Tailwind can help build responsive layouts and maintain consistent spacing, colors, and typography across reusable components.',
                        ],
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
                            'Tailwind CSS is a utility-first CSS framework.',
                            'It provides predefined utility classes for layout, spacing, typography, colors, and responsive design.',
                            'Instead of writing separate CSS for every element, we can apply utility classes directly to components.',
                            'It helps speed up UI development and maintain consistent styling.',
                            'I use Tailwind CSS to build responsive and reusable frontend components.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-39',
        topicId: 'one-india',
        title: 'What is Responsive Design and Mobile-First Approach?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'tailwind-css',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Responsive design means a website adjusts its layout based on different screen sizes.',
                            'Mobile-first means we design for smaller screens first and then enhance the layout for larger screens.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Responsive design-na mobile, tablet, desktop ellathulayum website correct-ah display aaganum.',
                            'Mobile-first approach-la first mobile screen-ku design pannuvom. Adhukku appuram tablet and desktop-ku additional styles add pannuvom.',
                            'Idhunaala mobile experience improve aagum.',
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
                            'Use flexible layouts.',
                            'Use CSS Grid and Flexbox.',
                            'Apply responsive breakpoints.',
                            'Optimize images.',
                            'Avoid fixed-width layouts.',
                            'Test different screen sizes.',
                            'Ensure touch targets and accessibility.',
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
                        text: `<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\">\n  {/* Cards */}\n</div>`,
                    },
                    {
                        type: 'paragraph',
                        text: 'This creates one column on mobile, two on medium screens, and three on large screens.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'In Archer Review, responsive design is important because students access learning content from desktops, tablets, and mobile devices.',
                            'I ensure layouts, navigation, and content remain usable across screen sizes.',
                        ],
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
                            'Responsive design means building interfaces that adapt to different screen sizes and devices.',
                            'Mobile-first is an approach where we design for smaller screens first and then enhance the layout for larger screens.',
                            'I use flexible layouts, CSS Grid, Flexbox, and responsive breakpoints.',
                            'I also test layouts across different screen sizes to ensure usability and consistency.',
                            'This approach helps provide a better user experience across mobile, tablet, and desktop devices.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'one-india-40',
        topicId: 'one-india',
        title: 'What is Web Accessibility?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'accessibility',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Web accessibility means building websites that everyone can use, including people with disabilities.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Web Accessibility-na disability irukkura users-um website use panna mudiyura maadhiri design and develop pannuradhu.',
                            'Screen reader, keyboard navigation use pannura users-ku website accessible-ah irukkanum.',
                            'Semantic HTML, correct labels, keyboard support and ARIA use pannuvom.',
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
                            'Semantic HTML.',
                            'Keyboard accessibility.',
                            'Accessible form labels.',
                            'Correct focus management.',
                            'Screen reader support.',
                            'WCAG guidelines.',
                            'Proper contrast.',
                            'ARIA only when necessary.',
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
                        text: `<button type=\"button\">\n  Submit\n</button>`,
                    },
                    {
                        type: 'paragraph',
                        text: 'Native button already provides keyboard and accessibility behavior. So clickable div use pannuradhukku badhila native button use pannuvom.',
                    },
                ],
            },
        ],
        realProjectExample: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Archer Review-la accessibility improvements implement pannumbodhu semantic HTML, keyboard navigation, ARIA attributes and accessible form controls use pannalaam.',
                        ],
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
                            'Web accessibility means building websites that can be used by people with different abilities.',
                            'I follow WCAG guidelines and use semantic HTML, keyboard navigation, accessible form labels, and proper focus management.',
                            'I use ARIA attributes when necessary to provide additional accessibility information.',
                            'My goal is to make the application usable for keyboard users and screen reader users.',
                        ],
                    },
                ],
            },
        ],
    }),
];
