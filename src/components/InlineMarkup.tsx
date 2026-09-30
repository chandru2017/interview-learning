'use client';

import { parseInlineMarkup } from '@/lib/parse-inline-markup';

/** Renders `**bold**` and `` `active` `` inside question copy. */
export const InlineMarkup = ({ text }: { text: string }) => {
    const tokens = parseInlineMarkup(text);

    return (
        <>
            {tokens.map((token, index) => {
                if (token.type === 'bold') {
                    return (
                        <strong key={index} className="font-semibold text-foreground">
                            {token.value}
                        </strong>
                    );
                }

                if (token.type === 'active') {
                    return (
                        <code
                            key={index}
                            className="rounded-md px-1.5 py-0.5 font-mono text-[0.92em] font-medium text-green-700"
                        >
                            {token.value}
                        </code>
                    );
                }

                return <span key={index}>{token.value}</span>;
            })}
        </>
    );
};
