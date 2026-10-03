import type { IQuestion } from '@/types';

import { frontendArchitectureQuestionsSet1 } from './fa-questions-set-1';
import { frontendArchitectureQuestionsSet2 } from './fa-questions-set-2';
import { frontendArchitectureQuestionsSet3 } from './fa-questions-set-3';
import { frontendArchitectureQuestionsSet4 } from './fa-questions-set-4';
import { frontendArchitectureQuestionsSet5 } from './fa-questions-set-5';

export const frontendArchitectureQuestions: IQuestion[] = [
    ...frontendArchitectureQuestionsSet1,
    ...frontendArchitectureQuestionsSet2,
    ...frontendArchitectureQuestionsSet3,
    ...frontendArchitectureQuestionsSet4,
    ...frontendArchitectureQuestionsSet5,
];
