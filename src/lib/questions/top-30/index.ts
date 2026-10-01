import type { IQuestion } from '@/types';
import { top30QuestionsSet1 } from './top-30-questions-set-1';
import { top30QuestionsSet2 } from './top-30-questions-set-2';
import { top30QuestionsSet3 } from './top-30-questions-set-3';

export const top30Questions: IQuestion[] = [...top30QuestionsSet1, ...top30QuestionsSet2, ...top30QuestionsSet3];
