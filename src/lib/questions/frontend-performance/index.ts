import type { IQuestion } from '@/types';
import { fpQuestionsSet1 } from './fp-questions-set-1';
import { fpQuestionsSet2 } from './fp-questions-set-2';
import { fpQuestionsSet3 } from './fp-questions-set-3';
import { fpQuestionsSet4 } from './fp-questions-set-4';

export const frontendPerformanceQuestions: IQuestion[] = [
    ...fpQuestionsSet1,
    ...fpQuestionsSet2,
    ...fpQuestionsSet3,
    ...fpQuestionsSet4,
];
