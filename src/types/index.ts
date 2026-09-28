export type QuestionDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type QuestionStatus = 'not-started' | 'in-progress' | 'completed';

export type TopicSection =
    'ABOUT' | 'CORE' | 'FRAMEWORKS' | 'WEB PLATFORM' | 'QUALITY' | 'ARCHITECTURE' | 'ENGINEERING' | 'FINAL REVISION';

export interface IQuestion {
    id: string;
    topicId: string;
    title: string;
    difficulty: QuestionDifficulty;
    status: QuestionStatus;
    simpleExplanation: string;
    seniorExplanation: string;
    simpleExample: string;
    realProjectExample: string;
    interviewAnswer: string;
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
