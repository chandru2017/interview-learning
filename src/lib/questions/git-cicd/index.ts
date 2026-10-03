import type { IQuestion } from '@/types';
import { gitCiCdQuestionsSet1 } from './git-questions-set-1';
import { gitCiCdQuestionsSet2 } from './git-questions-set-2';

export const gitCiCdQuestions: IQuestion[] = [...gitCiCdQuestionsSet1, ...gitCiCdQuestionsSet2];
