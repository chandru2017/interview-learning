import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const gitCiCdQuestionsSet3: IQuestion[] = [
    createQuestion({
        id: 'gc-11',
        topicId: 'git-cicd',
        title: 'Explain the CI/CD pipeline.',
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
                            'Use ESLint with a shared config.',
                            'Run it in the editor, on commit and in CI.',
                            'Fail the CI if there are lint errors.',
                            'Block merging until it passes.',
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
                            'CI/CD stands for Continuous Integration and Continuous Delivery or Deployment.',
                            'CI automatically checks our code by running linting, tests and builds whenever we push code or create a Pull Request.',
                            'CD helps us release or deploy the tested code to different environments, such as staging and production.',
                            'In React and Next.js projects, I can use GitHub Actions for automated checks and Vercel for deployment. This process improves code quality, reduces manual errors and makes releases faster and more reliable.',
                        ],
                    },
                ],
            },
        ],
    }),
];
