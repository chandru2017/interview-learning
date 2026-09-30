'use client';

import { parseInlineMarkup } from '@/lib/parse-inline-markup';

/** Renders `**bold**` and `` `code` `` (green) inside question copy. */
export const InlineMarkup = ({ text }: { text: string }) => {
    const tokens = parseInlineMarkup(text);

    return (
        <>
            {tokens.map((token, index) => {
                if (token.type === 'bold') {
                    return (
                        <strong key={index} className="font-bold text-slate-950 dark:text-white">
                            {token.value}
                        </strong>
                    );
                }

                if (token.type === 'code') {
                    return (
                        <code key={index} className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                            {token.value}
                        </code>
                    );
                }

                return <span key={index}>{token.value}</span>;
            })}
        </>
    );
};
