import type { IQuestion } from '@/types';
import { leadershipQuestionsSet1 } from './leadership-questions-set-1';
import { leadershipQuestionsSet2 } from './leadership-questions-set-2';
import { leadershipQuestionsSet3 } from './leadership-questions-set-3';
import { leadershipQuestionsSet4 } from './leadership-questions-set-4';
import { leadershipQuestionsSet5 } from './leadership-questions-set-5';

export const leadershipQuestions: IQuestion[] = [
    ...leadershipQuestionsSet1,
    ...leadershipQuestionsSet2,
    ...leadershipQuestionsSet3,
    ...leadershipQuestionsSet4,
    ...leadershipQuestionsSet5,
];
