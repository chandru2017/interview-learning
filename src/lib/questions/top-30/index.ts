import type { IQuestion } from '@/types';
import { top30QuestionsSet1 } from './top-30-questions-set-1';
import { top30QuestionsSet2 } from './top-30-questions-set-2';
import { top30QuestionsSet3 } from './top-30-questions-set-3';
import { top30QuestionsSet4 } from './top-30-questions-set-4';
import { top30QuestionsSet5 } from './top-30-questions-set-5';
import { top30QuestionsSet6 } from './top-30-questions-set-6';

export const top30Questions: IQuestion[] = [
    ...top30QuestionsSet1,
    ...top30QuestionsSet2,
    ...top30QuestionsSet3,
    ...top30QuestionsSet4,
    ...top30QuestionsSet5,
    ...top30QuestionsSet6,
];
