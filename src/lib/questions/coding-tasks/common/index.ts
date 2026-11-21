import type { IQuestion } from '@/types';
import { codingTaskCommonQuestionsSet1 } from './ct-common-qset-1';
import { codingTaskCommonQuestionsSet2 } from './ct-common-qset-2';

export const codingTaskCommonQuestions: IQuestion[] = [
    ...codingTaskCommonQuestionsSet1,
    ...codingTaskCommonQuestionsSet2,
];
