import type { IQuestion } from '@/types';

import { nextQuestionsSet1 } from './next-questions-set-1';
import { nextQuestionsSet2 } from './next-questions-set-2';
import { nextQuestionsSet3 } from './next-questions-set-3';
import { nextQuestionsSet4 } from './next-questions-set-4';

export const nextQuestions: IQuestion[] = [
    ...nextQuestionsSet1,
    ...nextQuestionsSet2,
    ...nextQuestionsSet3,
    ...nextQuestionsSet4,
];
