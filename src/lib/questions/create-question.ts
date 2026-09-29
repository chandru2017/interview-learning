import type { AnswerContent, ContentBlock, IAnswerPoint, IQuestion } from '@/types';

type AnswerInput = string | AnswerContent;

type QuestionInput = Omit<
    IQuestion,
    'status' | 'simpleExplanation' | 'seniorExplanation' | 'simpleExample' | 'realProjectExample' | 'interviewAnswer'
> &
    Partial<{
        status: IQuestion['status'];
        simpleExplanation: AnswerInput;
        seniorExplanation: AnswerInput;
        simpleExample: AnswerInput;
        realProjectExample: AnswerInput;
        interviewAnswer: AnswerInput;
    }>;

const toAnswerContent = (
    value: AnswerInput | undefined,
    blockType: 'paragraph' | 'code' = 'paragraph',
): AnswerContent => {
    if (value == null) {
        return [];
    }

    if (Array.isArray(value)) {
        return value;
    }

    const text = value.trim();
    if (!text) {
        return [];
    }

    const block: ContentBlock = blockType === 'code' ? { type: 'code', text } : { type: 'paragraph', text };
    return [{ blocks: [block] }];
};

/** Creates a question. Strings are normalized into structured answer points. */
export const createQuestion = (partial: QuestionInput): IQuestion => {
    return {
        status: 'not-started',
        ...partial,
        simpleExplanation: toAnswerContent(partial.simpleExplanation),
        seniorExplanation: toAnswerContent(partial.seniorExplanation),
        simpleExample: toAnswerContent(partial.simpleExample, 'code'),
        realProjectExample: toAnswerContent(partial.realProjectExample),
        interviewAnswer: toAnswerContent(partial.interviewAnswer),
    };
};

export type { AnswerInput, IAnswerPoint };
