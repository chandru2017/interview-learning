import type { IQuestion } from '@/types';
import { srmInfoTechQuestionsSet1 } from './srm-questions-set-1';
import { srmInfoTechQuestionsSet2 } from './srm-questions-set-2';

export const srmInfoTechQuestions: IQuestion[] = [...srmInfoTechQuestionsSet1, ...srmInfoTechQuestionsSet2];
