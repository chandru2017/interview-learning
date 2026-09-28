import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { QuestionDetail } from '@/components/QuestionDetail';
import { getQuestionById, getQuestionsByTopic, getTopicById, TOPICS } from '@/lib/data';

interface IQuestionPageProps {
    params: Promise<{ topic: string; questionId: string }>;
}

export const generateStaticParams = () => {
    return TOPICS.flatMap((topic) =>
        getQuestionsByTopic(topic.id).map((question) => ({
            topic: topic.id,
            questionId: question.id,
        })),
    );
};

export const generateMetadata = async ({ params }: IQuestionPageProps): Promise<Metadata> => {
    const { topic: topicId, questionId } = await params;
    const question = getQuestionById(topicId, questionId);
    return {
        title: question?.title ?? 'Question',
    };
};

const QuestionPage = async ({ params }: IQuestionPageProps) => {
    const { topic: topicId, questionId } = await params;
    const topic = getTopicById(topicId);
    const question = getQuestionById(topicId, questionId);

    if (!topic || !question) {
        notFound();
    }

    return <QuestionDetail topic={topic} question={question} />;
};

export default QuestionPage;
