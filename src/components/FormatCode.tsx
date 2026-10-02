'use client';

/** Removes the minimum amount of leading whitespace from a string. */
export const stripIndent = (str: string | undefined | null): string => {
    if (!str) return '';

    const lines = str.split('\n');
    if (lines.length <= 1) return str;

    // Measure indentation from lines starting from line index 1 (ignoring empty lines)
    const indents = lines
        .slice(1)
        .filter((line) => line.trim().length > 0)
        .map((line) => line.match(/^(\s*)/)?.[0].length ?? 0);

    if (indents.length === 0) return str;

    // Find the base indentation offset
    const baseIndent = Math.min(...indents);

    // Strip the extra base indentation from line 1 onwards
    return lines
        .map((line, index) => {
            if (index === 0) return line;
            return line.trim().length > 0 ? line.slice(baseIndent) : '';
        })
        .join('\n');
};

export const formatCode = (codeString: string, language: string = 'auto', indentSize: number = 4): string => {
    const code = codeString.trim();
    if (!code) return '';

    let lang = language.toLowerCase();

    // Auto-detect language
    if (lang === 'auto') {
        if (code.includes('<meta') || code.includes('<style') || code.includes('<script')) {
            lang = 'mixed';
        } else if (code.trim().startsWith('<') && !code.includes('function') && !code.includes('const')) {
            lang = 'html';
        } else if (
            code.includes('{') &&
            !code.includes('function') &&
            !code.includes('const') &&
            !code.includes('let') &&
            !code.includes('var') &&
            !code.includes('return')
        ) {
            lang = 'css';
        } else {
            lang = 'jsx';
        }
    }

    // JSX / JS Formatter with Multi-line Tag Tracking
    if (lang === 'jsx' || lang === 'js' || lang === 'javascript') {
        const indent = ' '.repeat(indentSize);
        let depth = 0;
        let inTag = false; // Tracks multi-line JSX tags

        return code
            .split('\n')
            .map((line) => line.trim())
            .map((line) => {
                if (line === '') return '';

                // Check if line starts with closing tokens or closing JSX tag
                const isClosingTag = line.startsWith('</');
                const startsWithClose =
                    line.startsWith('}') ||
                    line.startsWith(']') ||
                    line.startsWith(');') ||
                    line.startsWith(')') ||
                    isClosingTag;

                if (startsWithClose) {
                    depth = Math.max(0, depth - 1);
                }

                let formattedLine = indent.repeat(depth) + line;

                // If we are inside an unclosed multi-line tag (e.g. multi-line attributes), indent extra space
                if (inTag && !line.includes('<')) {
                    formattedLine = indent.repeat(depth + 1) + line;
                }

                // Determine if line opens a block ({, [, () or JSX tag (<tag>)
                const opensBlock = line.endsWith('{') || line.endsWith('[') || line.endsWith('(');
                const opensTag = line.includes('<') && !line.includes('</') && !line.endsWith('/>');
                const closesTagOnSameLine = line.endsWith('>') || line.endsWith('/>');

                // Track multi-line opening tags
                if (opensTag && !closesTagOnSameLine) {
                    inTag = true;
                } else if (inTag && closesTagOnSameLine) {
                    inTag = false;
                }

                // Increase depth for JS blocks or fully opened JSX tags
                if (opensBlock || (opensTag && closesTagOnSameLine)) {
                    depth++;
                }

                return formattedLine;
            })
            .join('\n');
    }

    // Pure CSS
    if (lang === 'css') {
        const indent = ' '.repeat(indentSize);
        let depth = 0;

        return code
            .split('\n')
            .map((line) => line.trim())
            .map((line) => {
                if (line === '') return '';

                if (line.startsWith('}')) {
                    depth = Math.max(0, depth - 1);
                }

                const formattedLine = indent.repeat(depth) + line;

                if (line.endsWith('{') && !line.includes('}')) {
                    depth++;
                }

                return formattedLine;
            })
            .join('\n');
    }

    // Pure HTML
    if (lang === 'html') {
        const indent = ' '.repeat(indentSize);
        let depth = 0;
        const tokenRegex = /(<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[^\s>]+[^>]*>|[^<]+)/gi;
        const rawTokens = code.match(tokenRegex) || [];
        const lines = [];

        for (let i = 0; i < rawTokens.length; i++) {
            const token = rawTokens[i].trim();
            if (!token) continue;

            if (token.startsWith('</')) {
                depth = Math.max(0, depth - 1);
                lines.push(indent.repeat(depth) + token);
                continue;
            }

            if (token.startsWith('<')) {
                const isComment = token.startsWith('<!--');
                const isDocType = token.toUpperCase().startsWith('<!DOCTYPE');
                const isSelfClosing =
                    token.endsWith('/>') ||
                    /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i.test(token);

                lines.push(indent.repeat(depth) + token);

                if (!isComment && !isDocType && !isSelfClosing) {
                    depth++;
                }
                continue;
            }

            lines.push(indent.repeat(depth) + token);
        }

        return lines.join('\n');
    }

    return codeString;
};
