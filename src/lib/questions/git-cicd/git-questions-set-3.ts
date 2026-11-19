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
        interviewAnswer1: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'CI code push pannumbothu automatically lint, test, and build run pannum.',
                            'CD tested code ah staging or production kku deploy pannum.',
                            'GitHub Actions CI checks run panna and Vercel deployment automate panna use pannalam.',
                            'Manual mistakes kammi, and release fast and reliable-a irukkum.',
                        ],
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Continuous Integration**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Pull Request or push varumbothu pipeline start aagum.',
                            'Lint, type check, tests, and build run pannuvom.',
                            'Check fail aana merge or release block aagum.',
                        ],
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Continuous Delivery**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Tested build staging kku deploy aagum.',
                            'Production deployment manual approval oda nadakkalam.',
                            'Same tested artifact use pannuvom.',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Continuous Deployment**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'All checks pass aana production automatically deploy aagum.',
                            'Smoke test, rollback, and monitoring follow pannuvom.',
                            'GitHub Actions and Vercel madhiri tools pipeline automate pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
];
