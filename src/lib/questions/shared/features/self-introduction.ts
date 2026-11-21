import { createQuestion } from '../../create-question';

interface ISelfIntroductionQuestionOptions {
    id: string;
    topicId: string;
}

const getCompletedYearsSince = (startYear: number, startMonth: number) => {
    const now = new Date();
    const years = now.getFullYear() - startYear;

    return now.getMonth() + 1 < startMonth ? years - 1 : years;
};

export const createSelfIntroductionQuestion = ({ id, topicId }: ISelfIntroductionQuestionOptions) => {
    const softwareExperienceYears = getCompletedYearsSince(2015, 3);
    const handsOnExperienceYears = getCompletedYearsSince(2020, 9);

    return createQuestion({
        id,
        topicId,
        title: 'Tell me about yourself?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        keyTopic: 'self-introduction',
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Hello, my name is Chandrasekaran.',
                            `I have over ${softwareExperienceYears} years of experience in software development, including more than ${handsOnExperienceYears} years of hands-on experience with React.js.`,
                            'Currently, I am working as a Senior Frontend Engineer and Frontend Lead at Tartlabs.',
                            'My main technical skills are React.js, Next.js, JavaScript, TypeScript, and Tailwind CSS.',
                            'I have experience in building scalable web applications, developing reusable components, integrating REST APIs, and improving application performance.',
                            'I have also worked on frontend architecture, technical SEO, and WCAG accessibility.',
                            'One of my major projects is Archer Review, where I worked as a Frontend Team Lead.',
                            'I enjoy solving technical problems, improving application performance, and building maintainable frontend applications.',
                            'I am looking forward to contributing my experience and technical skills to your team.',
                        ],
                    },
                ],
            },
        ],
    });
};

export const createRoleAndResponsibility = ({ id, topicId }: ISelfIntroductionQuestionOptions) => {
    return createQuestion({
        id: id,
        topicId: topicId,
        title: 'Can you explain your current role and responsibilities?',
        difficulty: 'Advanced',
        status: 'in-progress',
        priority: 'high',
        interviewAnswer: [
            {
                label: '',
                blocks: [
                    {
                        type: 'bullets',
                        items: [
                            'Currently, I work as a Senior Frontend Engineer and Frontend Lead at Tartlabs.',
                            'My main responsibility is to design and develop scalable frontend applications using React.js, Next.js, TypeScript and Tailwind CSS.',
                            'I work on reusable component development, API integration, frontend architecture, and performance optimization.',
                            'I also review code, mentor junior developers, and coordinate with backend developers and designers.',
                            'Apart from development, I focus on accessibility, SEO, responsive design, and maintaining code quality.',
                            'I also participate in Agile meetings and support the team in delivering features on time.',
                        ],
                    },
                ],
            },
        ],
    });
};
