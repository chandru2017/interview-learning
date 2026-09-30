export type InlineMarkupToken = {
    type: 'text' | 'bold' | 'code' | 'active';
    value: string;
};

/**
 * Parses simple inline markup in question copy:
 * - **bold**
 * - `code` (rendered in accent green)
 */
export const parseInlineMarkup = (text: string): InlineMarkupToken[] => {
    const tokens: InlineMarkupToken[] = [];
    let buffer = '';
    let i = 0;

    const flushText = () => {
        if (buffer) {
            tokens.push({ type: 'text', value: buffer });
            buffer = '';
        }
    };

    while (i < text.length) {
        if (text.startsWith('**', i)) {
            const end = text.indexOf('**', i + 2);
            if (end !== -1) {
                flushText();
                tokens.push({ type: 'bold', value: text.slice(i + 2, end) });
                i = end + 2;
                continue;
            }
        }

        if (text[i] === '`') {
            const end = text.indexOf('`', i + 1);
            if (end !== -1) {
                flushText();
                tokens.push({ type: 'active', value: text.slice(i + 1, end) });
                i = end + 1;
                continue;
            }
        }

        buffer += text[i];
        i += 1;
    }

    flushText();
    return tokens;
};
