import type { IQuestion } from '@/types';

import { createQuestion } from './create-question';

export const gitCicdQuestions: IQuestion[] = [
    createQuestion({
        id: 'gc-1',
        topicId: 'git-cicd',
        title: 'Conventional Commits and why they help',
        difficulty: 'Beginner',
        status: 'completed',
    }),
    createQuestion({
        id: 'gc-2',
        topicId: 'git-cicd',
        title: 'What belongs in a frontend CI pipeline?',
        difficulty: 'Intermediate',
        status: 'in-progress',
    }),
    createQuestion({
        id: 'gc-3',
        topicId: 'git-cicd',
        title: 'Trunk-based vs long-lived feature branches',
        difficulty: 'Intermediate',
    }),
];
