import type { IQuestion } from '@/types';
import { reduxConcept } from './redux';
import { zustandConcept } from './zustand';
import { tanstackQueryConcept } from './tanstack-query';
import { restApiIntegrationConcept } from './rest-api-integration';
import { graphQlConcept } from './graphQl';

export const CONCEPT: IQuestion[] = [
    ...reduxConcept,
    ...zustandConcept,
    ...tanstackQueryConcept,
    ...restApiIntegrationConcept,
    ...graphQlConcept,
];
