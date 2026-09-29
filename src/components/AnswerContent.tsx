import type { AnswerContent as AnswerContentType, ContentBlock, IAnswerPoint } from '@/types';

interface IAnswerContentProps {
    content: AnswerContentType;
}

export const AnswerContent = ({ content }: IAnswerContentProps) => {
    if (content.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4">
            {content.map((point, index) => (
                <AnswerPoint key={point.label ?? index} point={point} keyIndex={index} />
            ))}
        </div>
    );
};

const AnswerPoint = ({ point, keyIndex }: { point: IAnswerPoint; keyIndex: number }) => {
    return (
        <ul className="flex flex-col gap-2 px-2 font-nunito-sans font-semibold">
            {point.blocks.map((block, index) => {
                const isFirst = index === 0;

                if (block.type === 'paragraph' && isFirst && point.label) {
                    return (
                        <li key={`${block.type}-${index}`} className="flex gap-2">
                            <div className="font-bold text-black dark:text-slate-100">{keyIndex + 1}. </div>
                            <div>{block.text}</div>
                        </li>
                    );
                }

                return (
                    <li key={`${block.type}-${index}`} className="flex flex-col gap-2 ml-4">
                        {isFirst && point.label ? (
                            <p>
                                <span className="font-medium text-black dark:text-slate-100">{keyIndex + 1}.</span>
                            </p>
                        ) : null}
                        <ContentBlockView block={block} />
                    </li>
                );
            })}
        </ul>
    );
};

const ContentBlockView = ({ block }: { block: ContentBlock }) => {
    if (block.type === 'paragraph') {
        return <p>{block.text}</p>;
    }

    if (block.type === 'heading') {
        return <p className="font-bold text-slate-900 dark:text-slate-100">{block.text}</p>;
    }

    if (block.type === 'code') {
        return (
            <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-[14px] leading-relaxed text-slate-100">
                <code>{block.text}</code>
            </pre>
        );
    }

    return (
        <ul className="list-disc space-y-1.5 ml-5 pl-5 marker:text-slate-500">
            {block.items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};
