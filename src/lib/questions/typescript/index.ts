import type { IQuestion } from '@/types';

import { typescriptQuestionsSet1 } from './typescript-questions-set-1';
import { typescriptQuestionsSet2 } from './typescript-questions-set-2';
import { typescriptQuestionsSet3 } from './typescript-questions-set-3';
import { typescriptQuestionsSet4 } from './typescript-questions-set-4';

export const typescriptQuestions: IQuestion[] = [
    ...typescriptQuestionsSet1,
    ...typescriptQuestionsSet2,
    ...typescriptQuestionsSet3,
    ...typescriptQuestionsSet4,
];
