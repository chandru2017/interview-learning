import type { IQuestion } from '@/types';
import { javascriptQuestionsSet1 } from './javascript-questions-set-1';
import { javascriptQuestionsSet2 } from './javascript-questions-set-2';

export const javascriptQuestions: IQuestion[] = [...javascriptQuestionsSet1, ...javascriptQuestionsSet2];
