import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { QuestionList } from '@/components/QuestionList';
import { getTopicById, getTopicsWithCounts, TOPICS } from '@/lib/data';

interface ITopicPageProps {
    params: Promise<{ topic: string }>;
}

export const generateStaticParams = () => {
    return TOPICS.map((topic) => ({ topic: topic.id }));
};

export const generateMetadata = async ({ params }: ITopicPageProps): Promise<Metadata> => {
    const { topic: topicId } = await params;
    const topic = getTopicById(topicId);
    return {
        title: topic ? `${topic.name} Questions` : 'Topic',
    };
};

const TopicPage = async ({ params }: ITopicPageProps) => {
    const { topic: topicId } = await params;
    const topic = getTopicsWithCounts().find((item) => item.id === topicId);

    if (!topic) {
        notFound();
    }

    return <QuestionList topic={topic} />;
};

export default TopicPage;
