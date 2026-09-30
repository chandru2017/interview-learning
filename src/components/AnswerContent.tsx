'use client';

import { InlineMarkup } from '@/components/InlineMarkup';
import type { AnswerContent as AnswerContentType, ContentBlock, IAnswerPoint } from '@/types';
import { stripIndent } from '@/components/StripIndent';

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
                <AnswerPoint key={point.label ?? index} point={point} keyIndex={index} arrayLength={content.length} />
            ))}
        </div>
    );
};

const AnswerPoint = ({
    point,
    keyIndex,
    arrayLength,
}: {
    point: IAnswerPoint;
    keyIndex: number;
    arrayLength: number;
}) => {
    return (
        <ul className="flex flex-col gap-2 px-2 font-nunito-sans font-semibold">
            {point.blocks.map((block, index) => {
                const isFirst = index === 0;

                if (block.type === 'paragraph' && isFirst && point.label) {
                    return (
                        <li key={`${block.type}-${index}`} className="flex gap-2">
                            {arrayLength > 1 ? (
                                <div className="font-bold text-black dark:text-slate-100">{keyIndex + 1}. </div>
                            ) : null}
                            <div>
                                <InlineMarkup text={block.text} />
                            </div>
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
                        <ContentBlockView block={block} contentLength={arrayLength} />
                    </li>
                );
            })}
        </ul>
    );
};

const ContentBlockView = ({ block, contentLength }: { block: ContentBlock; contentLength: number }) => {
    if (block.type === 'paragraph') {
        return (
            <p>
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'heading') {
        return (
            <p className="font-bold text-slate-900 dark:text-slate-100">
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'code') {
        return (
            <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-[14px] leading-relaxed text-slate-100 font-medium">
                <code>{stripIndent(block.text)}</code>
            </pre>
        );
    }

    if (block.type === 'highlight') {
        return (
            <p className="bg-yellow-100 text-black rounded-sm p-3 border-l-6 border-orange-500/80 italic">
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'keywords') {
        return (
            <ul className="flex flex-wrap gap-2">
                {block.items.map((item) => (
                    <li key={item} className="bg-amber-100 rounded-2xl px-3 text-black">
                        {item}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className={`list-disc space-y-1.5 marker:text-slate-500 ${contentLength > 1 ? 'pl-4 ml-5' : 'pl-3'}`}>
            {block.items.map((item) => (
                <li key={item}>
                    <InlineMarkup text={item} />
                </li>
            ))}
        </ul>
    );
};
