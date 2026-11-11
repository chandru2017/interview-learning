import type { IQuestion } from '@/types';
import { reduxConceptSet1 } from './redux-concept-set-1';
import { reduxConceptSet2 } from './redux-concept-set-2';

export const reduxConcept: IQuestion[] = [...reduxConceptSet1, ...reduxConceptSet2];
