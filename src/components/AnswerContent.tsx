'use client';

import { InlineMarkup } from '@/components/InlineMarkup';
import { stripIndent } from '@/components/StripIndent';
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
        <ul className="flex flex-col gap-2 px-1 font-nunito-sans font-medium">
            {point.blocks.map((block, index) => {
                const isFirst = index === 0;

                if (block.type === 'paragraph' && isFirst && point.label) {
                    return (
                        <li key={`${block.type}-${index}`} className="flex gap-2.5">
                            {arrayLength > 1 ? (
                                <div className="shrink-0 text-[14px] font-bold tracking-wide text-primary/80">
                                    {keyIndex + 1}.
                                </div>
                            ) : null}
                            <div className="min-w-0 leading-7 text-foreground/90">
                                <InlineMarkup text={block.text} />
                            </div>
                        </li>
                    );
                }

                return (
                    <li key={`${block.type}-${index}`} className="ml-4 flex flex-col gap-2">
                        {isFirst && point.label ? (
                            <p>
                                <span className="text-[13px] font-semibold tracking-wide text-primary/80">
                                    {keyIndex + 1}.
                                </span>
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
            <p className="leading-7 text-foreground/90">
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'heading') {
        return (
            <p className="font-semibold text-foreground px-1">
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'code') {
        return (
            <pre className="overflow-x-auto rounded-xl border border-border/70 bg-surface-elevated p-5 font-mono text-[13.5px] leading-relaxed text-foreground shadow-inner dark:bg-black/35 dark:text-slate-100">
                <code>{stripIndent(block.text)}</code>
            </pre>
        );
    }

    if (block.type === 'highlight') {
        return (
            <p className="rounded-xl border border-amber-500/20 border-l-[3px] text-sm border-l-amber-500/70 bg-amber-500/10 px-4 py-3 text-foreground dark:bg-amber-400/10">
                <InlineMarkup text={block.text} />
            </p>
        );
    }

    if (block.type === 'keywords') {
        return (
            <ul className="flex flex-wrap gap-2">
                {block.items.map((item) => (
                    <li
                        key={item}
                        className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[13px] font-medium text-primary"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className={`list-disc space-y-1.5 marker:text-primary/50 ${contentLength > 1 ? 'ml-5 pl-4' : 'pl-3'}`}>
            {block.items.map((item) => (
                <li key={item} className="text-foreground/90">
                    <InlineMarkup text={item} />
                </li>
            ))}
        </ul>
    );
};
