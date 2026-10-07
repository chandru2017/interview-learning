import type { IQuestion } from '@/types';
import { codingTaskQuestionsSet1 } from './ct-questions-set-1';
import { codingTaskQuestionsSet2 } from './ct-questions-set-2';

export const codingTaskQuestions: IQuestion[] = [...codingTaskQuestionsSet1, ...codingTaskQuestionsSet2];
