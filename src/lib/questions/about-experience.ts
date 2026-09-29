import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const aboutExperienceQuestions: IQuestion[] = [
    createQuestion({
        id: 'ae-1',
        topicId: 'about-experience',
        title: 'Tell me about your professional journey',
        difficulty: 'Advanced',
        status: 'completed',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'My name is Chandrasekaran, and I have over 10 years of experience in frontend development. I started my career building responsive websites using HTML, CSS, JavaScript, jQuery, PHP, and MySQL. Over time, I transitioned to modern frontend technologies such as React.js, Next.js, TypeScript, Tailwind CSS, and Material UI.',
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Throughout my career, I have worked on enterprise-level web applications in the healthcare and education domains. As my experience grew, I moved beyond feature development into frontend architecture, performance optimization, accessibility, technical SEO, reusable component libraries, and mentoring junior developers.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Currently, I work as a Senior Frontend Engineer where I design scalable frontend solutions, review code, improve application performance, collaborate with designers and backend teams, and ensure high-quality releases. I enjoy solving complex frontend problems and building applications that are fast, accessible, and maintainable.',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ae-2',
        topicId: 'about-experience',
        title: 'What kind of projects have you worked on?',
        difficulty: 'Intermediate',
        status: 'in-progress',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'I have worked on multiple enterprise-scale web applications, mainly in the healthcare and education sectors.',
                    },
                    {
                        type: 'heading',
                        text: 'Some of the major projects include:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Healthcare learning platforms built with React.js and Next.js.',
                            'Student dashboards and learning management systems.',
                            'Video streaming and course management applications.',
                            'Admin portals with role-based access control.',
                            'SEO-focused public websites.',
                            'Design systems and reusable component libraries.',
                            'Accessibility (WCAG) compliance projects.',
                            'Frontend performance optimization initiatives.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'These projects involved server-side rendering, responsive design, API integration, authentication, state management, technical SEO, Core Web Vitals optimization, and reusable UI architecture.',
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Most of the applications served thousands of users, so scalability, performance, and maintainability were always important considerations.',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ae-3',
        topicId: 'about-experience',
        title: 'Which project are you most proud of?',
        difficulty: 'Intermediate',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `I'm most proud of the Archer Review platform that I worked on.`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `This project allowed me to contribute not only as a frontend developer but also as someone responsible for architecture and technical improvements.`,
                    },
                    {
                        type: 'heading',
                        text: 'Some of my key contributions were:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Building new features using React.js and Next.js.',
                            'Improving Core Web Vitals and overall application performance.',
                            'Implementing technical SEO improvements.',
                            'Building reusable components to reduce duplicate code.',
                            'Migrating parts of the application from Material UI to Tailwind CSS.',
                            'Improving accessibility to meet WCAG standards.',
                            'Participating in architecture discussions and mentoring developers.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `One achievement I'm particularly proud of is improving performance and user experience while keeping the application scalable and easy to maintain.`,
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ae-4',
        topicId: 'about-experience',
        title: 'What was your biggest technical challenge?',
        difficulty: 'Intermediate',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `One of the biggest technical challenges was improving the performance of a large Next.js application that had grown significantly over time.`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `The application had issues such as slow page loading, large JavaScript bundles, unnecessary re-renders, and poor Lighthouse scores.`,
                    },
                    {
                        type: 'heading',
                        text: 'To solve these problems, I:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Analyzed the application using Lighthouse and Chrome DevTools.',
                            'Implemented code splitting and lazy loading.',
                            'Reduced unnecessary React re-renders using memoization.',
                            'Optimized images using Next.js Image Optimization.',
                            'Improved caching strategies.',
                            'Removed unused dependencies.',
                            'Improved SEO metadata rendering.',
                            'Refactored reusable components.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `These optimizations significantly improved loading speed, Core Web Vitals, and the overall user experience.`,
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ae-5',
        topicId: 'about-experience',
        title: 'What is your current role and responsibility?',
        difficulty: 'Intermediate',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `Currently, I work as a Senior Frontend Engineer.`,
                    },
                    {
                        type: 'heading',
                        text: 'My responsibilities include:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Designing scalable frontend architecture.',
                            'Developing new features using React.js, Next.js, and TypeScript.',
                            'Reviewing (PR) pull requests and maintaining code quality.',
                            'Collaborating with designers, QA engineers, backend developers, and product managers.',
                            'Optimizing application performance.',
                            'Implementing accessibility and technical SEO best practices.',
                            'Building reusable UI components.',
                            'Mentoring junior developers.',
                            'Participating in sprint planning and technical discussions.',
                            'Troubleshooting production issues and delivering timely fixes.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `I also take ownership of frontend technical decisions to ensure the application remains maintainable and scalable.`,
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ae-6',
        topicId: 'about-experience',
        title: 'Describe your daily work.',
        difficulty: 'Intermediate',
        interviewAnswer: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `My typical day starts with the team's stand-up meeting, where we discuss progress, priorities, and any blockers.`,
                    },
                    {
                        type: 'heading',
                        text: 'After that, I usually:',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Review Jira tasks and plan my work.',
                            'Develop new frontend features.',
                            'Review pull requests from team members.',
                            'Participate in technical discussions and architecture planning.',
                            'Collaborate with UI/UX designers to ensure accurate implementation.',
                            'Work with backend developers on API integration.',
                            'Fix bugs reported by QA.',
                            'Optimize application performance when needed.',
                            'Write reusable and maintainable code.',
                            'Test my changes before creating a pull request.',
                            'Support junior developers whenever they need technical guidance.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: `At the end of the day, I update task progress and prepare for the next sprint activities`,
                    },
                ],
            },
        ],
    }),
];
