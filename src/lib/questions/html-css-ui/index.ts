import type { IQuestion } from '@/types';

import { htmlCssUIQuestionsSet1 } from './hcu-questions-set-1';
import { htmlCssUIQuestionsSet2 } from './hcu-questions-set-2';
import { htmlCssUIQuestionsSet3 } from './hcu-questions-set-3';

export const htmlCssUiQuestions: IQuestion[] = [
    ...htmlCssUIQuestionsSet1,
    ...htmlCssUIQuestionsSet2,
    ...htmlCssUIQuestionsSet3,
];
