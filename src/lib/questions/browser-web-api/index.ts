import type { IQuestion } from '@/types';

import { bwaQuestionsSet1 } from './bwa-questions-set-1';
import { bwaQuestionsSet2 } from './bwa-questions-set-2';
import { bwaQuestionsSet3 } from './bwa-questions-set-3';
import { bwaQuestionsSet4 } from './bwa-questions-set-4';

export const browserWebApisQuestions: IQuestion[] = [
    ...bwaQuestionsSet1,
    ...bwaQuestionsSet2,
    ...bwaQuestionsSet3,
    ...bwaQuestionsSet4,
];
