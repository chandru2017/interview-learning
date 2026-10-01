export type QuestionDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type QuestionStatus = 'not-started' | 'in-progress' | 'completed';

export type TopicSection =
    'ABOUT' | 'CORE' | 'FRAMEWORKS' | 'WEB PLATFORM' | 'QUALITY' | 'ARCHITECTURE' | 'ENGINEERING' | 'FINAL REVISION';

export type ContentBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'bullets'; items: string[] }
    | { type: 'code'; text: string }
    | { type: 'highlight'; text: string }
    | { type: 'keywords'; items: string[] };

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
    simpleExplanation: AnswerContent;
    seniorExplanation: AnswerContent;
    simpleExample: AnswerContent;
    realProjectExample: AnswerContent;
    interviewAnswer: AnswerContent;
    conceptAsStory?: AnswerContent;
    speakingPractice?: AnswerContent;
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
