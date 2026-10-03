import type { IQuestion } from '@/types';
import { securityQuestionsSet1 } from './security-questions-set-1';
import { securityQuestionsSet2 } from './security-questions-set-2';
import { securityQuestionsSet3 } from './security-questions-set-3';

export const securityQuestions: IQuestion[] = [
    ...securityQuestionsSet1,
    ...securityQuestionsSet2,
    ...securityQuestionsSet3,
];
