import type { IQuestion } from '@/types';
import { seoQuestionsSet1 } from './seo-questions-set-1';
import { seoQuestionsSet2 } from './seo-questions-set-2';
import { seoQuestionsSet3 } from './seo-questions-set-3';
import { seoQuestionsSet4 } from './seo-questions-set-4';

export const seoQuestions: IQuestion[] = [
    ...seoQuestionsSet1,
    ...seoQuestionsSet2,
    ...seoQuestionsSet3,
    ...seoQuestionsSet4,
];
