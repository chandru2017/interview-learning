import type { StaticImageData } from 'next/image';

export type QuestionDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type QuestionStatus = 'not-started' | 'in-progress' | 'completed';

export type ViewType = 'question' | 'concept';

export interface IMarkdown {
    title: string;
    description: string;
}

export type TopicSection =
    | 'ABOUT'
    | 'CORE'
    | 'FRAMEWORKS'
    | 'TANSTACk'
    | 'WEB PLATFORM'
    | 'QUALITY'
    | 'ARCHITECTURE'
    | 'ENGINEERING'
    | 'CODING'
    | 'FINAL REVISION'
    | 'COMPANY SPECIFIC'
    | 'CONCEPT';

export type ContentBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'bullets'; items: string[] }
    | { type: 'sub-items'; items: string[] }
    | { type: 'code'; text: string }
    | { type: 'highlight'; text: string }
    | { type: 'keywords'; items: string[] }
    | { type: 'markdown'; items: IMarkdown[] }
    | { type: 'link'; text: string }
    | { type: 'image'; url: StaticImageData; loading?: 'eager' | 'lazy' };

export interface IAnswerPoint {
    /** Optional letter label such as "a", "b", "c". */
    label?: string;
    blocks: ContentBlock[];
}

export type AnswerContent = IAnswerPoint[];

export interface IQuestion {
    id: string;
    topicId: string;
    title: string;
    difficulty: QuestionDifficulty;
    status: QuestionStatus;
    priority?: string;
    keyTopic?: string;
    viewType?: ViewType;
    simpleExplanation: AnswerContent;
    seniorExplanation: AnswerContent;
    simpleExample: AnswerContent;
    realProjectExample: AnswerContent;
    interviewAnswer: AnswerContent;
    interviewAnswer1?: AnswerContent;
    interviewAnswerTamil?: AnswerContent;
    conceptAsStory?: AnswerContent;
    speakingPractice?: AnswerContent;
    scenarioQuestions?: AnswerContent;
    thanglishExplanation?: AnswerContent;
    memoryTrick?: AnswerContent;
    what?: AnswerContent;
    why?: AnswerContent;
    how?: AnswerContent;
}

export interface ITopic {
    id: string;
    name: string;
    section: TopicSection;
    icon: string;
    questionCount: number;
    completedCount: number;
}

export interface ITopicSectionGroup {
    section: TopicSection;
    topics: ITopic[];
}
