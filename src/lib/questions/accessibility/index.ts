import type { IQuestion } from '@/types';

import { accessibilityQuestionsSet1 } from './ax-questions-set-1';
import { accessibilityQuestionsSet2 } from './ax-questions-set-2';
import { accessibilityQuestionsSet3 } from './ax-questions-set-3';
import { accessibilityQuestionsSet4 } from './ax-questions-set-4';

export const accessibilityQuestions: IQuestion[] = [
    ...accessibilityQuestionsSet1,
    ...accessibilityQuestionsSet2,
    ...accessibilityQuestionsSet3,
    ...accessibilityQuestionsSet4,
];
