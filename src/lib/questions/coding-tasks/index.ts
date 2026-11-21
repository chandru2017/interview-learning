import type { IQuestion } from '@/types';
import { codingTaskCommonQuestions } from './common';
import { codingTaskArrayQuestions } from './array';

export const codingTaskQuestions: IQuestion[] = [...codingTaskCommonQuestions, ...codingTaskArrayQuestions];
