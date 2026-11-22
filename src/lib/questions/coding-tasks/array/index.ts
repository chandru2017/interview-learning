import type { IQuestion } from '@/types';
import { codingTaskArrayQuestionsSet1 } from './ct-array-qset-1';
import { codingTaskArrayQuestionsSet2 } from './ct-array-qset-2';

export const codingTaskArrayQuestions: IQuestion[] = [...codingTaskArrayQuestionsSet1, ...codingTaskArrayQuestionsSet2];
