import type { IQuestion } from '@/types';
import { graphQlConceptSet1 } from './graph-ql-concept-set-1';
import { graphQlConceptSet2 } from './graph-ql-concept-set-2';

export const graphQlConcept: IQuestion[] = [...graphQlConceptSet1, ...graphQlConceptSet2];
