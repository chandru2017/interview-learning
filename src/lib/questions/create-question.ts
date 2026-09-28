import type { IQuestion } from '@/types';

type QuestionInput = Omit<
    IQuestion,
    'status' | 'simpleExplanation' | 'seniorExplanation' | 'simpleExample' | 'realProjectExample' | 'interviewAnswer'
> &
    Partial<
        Pick<
            IQuestion,
            | 'status'
            | 'simpleExplanation'
            | 'seniorExplanation'
            | 'simpleExample'
            | 'realProjectExample'
            | 'interviewAnswer'
        >
    >;

/** Creates a question. Omitted sections get sensible defaults. */
export const createQuestion = (partial: QuestionInput): IQuestion => {
    return {
        status: 'not-started',
        simpleExplanation: partial.simpleExplanation ?? `A clear, beginner-friendly explanation of: ${partial.title}.`,
        seniorExplanation:
            partial.seniorExplanation ??
            `A senior-level take on ${partial.title}: trade-offs, edge cases, and how you would defend the decision in a system design or deep-dive interview.`,
        simpleExample: partial.simpleExample ?? `// Minimal example for: ${partial.title}\nconsole.log('example');`,
        realProjectExample:
            partial.realProjectExample ??
            `In production, apply ${partial.title} when building scalable UI — measure impact, document the decision, and keep accessibility intact.`,
        interviewAnswer:
            partial.interviewAnswer ??
            `In interviews I explain ${partial.title} with a short definition, one concrete example, the trade-offs I considered, and how I validated the result (tests, metrics, or user impact).`,
        ...partial,
    };
};
