import type { IQuestion } from '@/types';
import { codingTaskCommonQuestions } from './common';
import { codingTaskArrayQuestions } from './array';
import { codingTaskReactQuestions } from './react';

export const codingTaskQuestions: IQuestion[] = [
    ...codingTaskCommonQuestions,
    ...codingTaskArrayQuestions,
    ...codingTaskReactQuestions,
];
