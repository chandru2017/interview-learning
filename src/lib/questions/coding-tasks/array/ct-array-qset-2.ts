import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const codingTaskArrayQuestionsSet2: IQuestion[] = [
    createQuestion({
        id: 'ct-arr-6',
        topicId: 'array-task',
        title: 'Find the Second Largest Element',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given an array of numbers, find the second-largest distinct value. If there are fewer than two distinct values, return null.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: 'const nums = [12, 35, 1, 10, 34, 1];',
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '34',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const findSecondLargest = (nums) => {
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1] ?? null;
};

console.log(findSecondLargest(nums));`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Use Set to remove duplicate numbers, so the second-largest value is distinct.',
                            'Sort the unique numbers in descending numeric order with (a, b) => b - a.',
                            'The value at index 1 is the second largest. If it does not exist, return null.',
                            'Time complexity: O(n log n). Space complexity: O(n).',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://www.geeksforgeeks.org/problems/second-largest3735/1',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-7',
        topicId: 'array-task',
        title: 'Valid Anagram',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given two strings, determine whether they contain the same characters with the same frequencies. Assume the strings contain lowercase English letters.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const s = 'anagram';
const t = 'nagaram';`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: 'true',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
};

console.log(isAnagram(s, t));`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'If the strings have different lengths, they cannot contain the same characters.',
                            'split() turns each string into an array of characters, sort() puts the characters in order, and join() makes each array a string again.',
                            'The strings are anagrams when their sorted versions are equal.',
                            'For "anagram" and "nagaram", both sorted strings are "aaagmnr", so the result is true.',
                            'Time complexity: O(n log n). Space complexity: O(n).',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://leetcode.com/problems/valid-anagram/',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-8',
        topicId: 'array-task',
        title: 'First Non-Repeating Character',
        difficulty: 'Beginner',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given a string, return its first character that appears only once. Return null if every character repeats.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: "const text = 'swiss';",
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: "'w'",
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const firstNonRepeatingChar = (text) =>
    text.split('').find(
        (char) => text.indexOf(char) === text.lastIndexOf(char),
    ) ?? null;

console.log(firstNonRepeatingChar(text));`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'split() turns the string into an array of characters.',
                            'find() checks characters from left to right and returns the first one whose first and last positions match.',
                            'If a character appears only once, indexOf() and lastIndexOf() return the same position.',
                            'For "swiss", s repeats, while w appears once, so the result is "w".',
                            'If no unique character exists, find() returns undefined and ?? returns null.',
                            'Time complexity: O(n²). Space complexity: O(n).',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-9',
        topicId: 'array-task',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given a string, return the length of its longest contiguous substring that contains no repeated characters.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: "const text = 'abcabcbb';",
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '3 // "abc"',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const lengthOfLongestSubstring = (text) => {
    let currentSubstring = '';
    let maxLength = 0;

    text.split('').forEach((char) => {
        const repeatedIndex = currentSubstring.indexOf(char);

        if (repeatedIndex !== -1) {
            currentSubstring = currentSubstring.slice(repeatedIndex + 1);
        }

        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    });

    return maxLength;
};

console.log(lengthOfLongestSubstring(text));`,
                    },
                ],
            },
            {
                label: '2',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**How it works:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'split() turns the string into characters, and forEach() checks each character in order.',
                            'currentSubstring stores the current group of characters without repeats.',
                            'indexOf() checks whether the new character is already in currentSubstring. If it is, slice() removes the old copy and the characters before it.',
                            'Add the new character and update maxLength.',
                            'For "abcabcbb", the longest substring without repeats is "abc", so the length is 3.',
                            'Time complexity: O(n²) because indexOf() and slice() may scan or copy the current substring. Space complexity: O(n).',
                        ],
                    },
                ],
            },
            {
                label: '3',
                blocks: [
                    {
                        type: 'paragraph',
                        text: '**Refer this link:**',
                    },
                    {
                        type: 'link',
                        text: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                    },
                ],
            },
        ],
    }),
];
