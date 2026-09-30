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
