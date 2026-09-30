import type { IQuestion } from '@/types';

import { aboutExperienceQuestions } from './about-experience';
import { htmlCssUiQuestions } from './html-css-ui';
import { javascriptQuestions } from './javascript';
import { typescriptQuestions } from './typescript';
import { reactQuestions } from './react';
import { nextjsQuestions } from './nextjs';
import { browserWebApisQuestions } from './browser-web-apis';
import { frontendPerformanceQuestions } from './frontend-performance';
import { accessibilityQuestions } from './accessibility';
import { seoQuestions } from './seo';
import { frontendArchitectureQuestions } from './frontend-architecture';
import { securityQuestions } from './security';
import { gitCicdQuestions } from './git-cicd';
import { leadershipQuestions } from './leadership';
import { highestPriorityQuestions } from './highest-priority.ts';

export const QUESTIONS: IQuestion[] = [
    ...aboutExperienceQuestions,
    ...htmlCssUiQuestions,
    ...javascriptQuestions,
    ...typescriptQuestions,
    ...reactQuestions,
    ...nextjsQuestions,
    ...browserWebApisQuestions,
    ...frontendPerformanceQuestions,
    ...accessibilityQuestions,
    ...seoQuestions,
    ...frontendArchitectureQuestions,
    ...securityQuestions,
    ...gitCicdQuestions,
    ...leadershipQuestions,
    ...highestPriorityQuestions,
];

export {
    aboutExperienceQuestions,
    htmlCssUiQuestions,
    javascriptQuestions,
    typescriptQuestions,
    reactQuestions,
    nextjsQuestions,
    browserWebApisQuestions,
    frontendPerformanceQuestions,
    accessibilityQuestions,
    seoQuestions,
    frontendArchitectureQuestions,
    securityQuestions,
    gitCicdQuestions,
    leadershipQuestions,
    highestPriorityQuestions,
};
