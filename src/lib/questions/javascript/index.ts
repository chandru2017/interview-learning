import type { IQuestion } from '@/types';
import { javascriptQuestionsSet1 } from './javascript-questions-set-1';
import { javascriptQuestionsSet2 } from './javascript-questions-set-2';
import { javascriptQuestionsSet3 } from './javascript-questions-set-3';
import { javascriptQuestionsSet4 } from './javascript-questions-set-4';
import { javascriptQuestionsSet5 } from './javascript-questions-set-5';
import { javascriptQuestionsSet6 } from './javascript-questions-set-6';
import { javascriptQuestionsSet7 } from './javascript-questions-set-7';

export const javascriptQuestions: IQuestion[] = [
    ...javascriptQuestionsSet1,
    ...javascriptQuestionsSet2,
    ...javascriptQuestionsSet3,
    ...javascriptQuestionsSet4,
    ...javascriptQuestionsSet5,
    ...javascriptQuestionsSet6,
    ...javascriptQuestionsSet7,
];
