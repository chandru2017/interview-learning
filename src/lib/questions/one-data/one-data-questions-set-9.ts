import type { IQuestion } from '@/types';

import { createQuestion } from '../create-question';

export const oneIndiaQuestionsSet9: IQuestion[] = [
    createQuestion({
        id: 'one-india-41',
        topicId: 'one-india',
        title: 'How do you use Git in your projects?',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'git',
        simpleExplanation: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Git is a version control system used to track code changes and collaborate with other developers.',
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
                            'Git use pannina code changes track panna mudiyum.',
                            'Team-la multiple developers work pannumbodhu branch create panni separate-ah develop pannalaam.',
                            'Changes commit panni push pannuvom. Pull request create panni code review pannuvom.',
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
                            'Branching strategy.',
                            'Commit history.',
                            'Pull requests.',
                            'Code reviews.',
                            'Merge conflict resolution.',
                            'Reverting changes.',
                            'Collaboration workflows.',
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
                        text: `git checkout -b feature/course-list
git add .
git commit -m \"feat: add course list\"
git push origin feature/course-list`,
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
                            'At Tartlabs, Git-based workflows help frontend developers collaborate, review code, manage feature branches, and maintain application stability.',
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
                            'Git is a version control system used to track code changes and support collaboration.',
                            'I use feature branches to develop new functionality.',
                            'After completing changes, I commit and push them to the remote repository.',
                            'I create pull requests for code reviews and resolve merge conflicts when required.',
                            'Git helps maintain code history, improve collaboration, and manage frontend development safely.',
                        ],
                    },
                ],
            },
        ],
    }),
];
