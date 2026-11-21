import type { IQuestion } from '@/types';

import { createQuestion } from '@/lib/questions/create-question';

export const codingTaskArrayQuestionsSet1: IQuestion[] = [
    createQuestion({
        id: 'ct-arr-1',
        topicId: 'array-task',
        title: 'Two Sum',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given an array of numbers and a target, return the indices of two different numbers that add up to the target. Assume exactly one valid answer exists.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const nums = [2, 7, 11, 15];
const target = 9;`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '[0, 1]',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const twoSum = (nums, target) => {
    const indicesByValue = new Map();
    let result = [];

    nums.some((num, index) => {
        const complement = target - num;

        if (indicesByValue.has(complement)) {
            result = [indicesByValue.get(complement), index];
            return true;
        }

        indicesByValue.set(num, index);
        return false;
    });

    return result;
};

console.log(twoSum(nums, target));`,
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
                            'Use the built-in some() method to scan the array and stop as soon as a matching pair is found.',
                            'For each number, calculate the complement needed to reach the target.',
                            'Store each number and its index in a Map. When the complement is already stored, save and return both indices.',
                            'Inside some(), return false to keep searching and true to stop. After the scan, return the saved result.',
                            'For [2, 7, 11, 15] with target 9, when we reach 7, its complement 2 is already stored, so we return [0, 1].',
                            'Time complexity: O(n). Space complexity: O(n).',
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
                        text: 'https://leetcode.com/problems/two-sum/',
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Indha code, target-ku equal-a sum aagura rendu numbers-oda indexes-ai kandupidikkum. Example: nums = [2, 7, 11, 15], target = 9.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'indicesByValue Map-la already check pannina numbers-um avanga indexes-um store aagum. result starting-la empty array-ah irukkum.',
                            'some() array-la ovvoru number-aiyum check pannum. num current number; index adhu irukkura position.',
                            'Ovvoru number-kum complement = target - num nu calculate pannum. 2-ku complement 7.',
                            '2 check pannumbodhu 7 Map-la illa. Adhanaala Map-la 2: 0 nu store panni false return pannum; some() next number-ku pogum.',
                            'Next number 7. Adhoda complement 2 Map-la irukkaradhunaala result = [0, 1] nu save panni true return pannum.',
                            'some() true vandhadhum searching stop aagum. Kadaisila result return aagum; pair kidaikkalana empty array return aagum.',
                            'Time complexity: O(n). Space complexity: O(n).',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-2',
        topicId: 'array-task',
        title: 'Move All Zeros to the End',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Move all zeros in an array to the end while keeping the order of the non-zero numbers unchanged. Modify the array in place.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: 'const nums = [0, 1, 0, 3, 12];',
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '[1, 3, 12, 0, 0]',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const moveZeroes = (nums) => {
    const nonZeroes = nums.filter((num) => num !== 0);

    nums.fill(0);
    nonZeroes.forEach((num, index) => {
        nums[index] = num;
    });

    return nums;
};

console.log(moveZeroes(nums));`,
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
                            'Use the built-in filter() method to collect non-zero numbers in their original order.',
                            'Use fill(0) to set every element in the input array to zero.',
                            'Use forEach() to copy the non-zero numbers back to the beginning of the same array.',
                            'For [0, 1, 0, 3, 12], the non-zero numbers become [1, 3, 12], and the remaining positions are filled with zeros.',
                            'The input array is modified in place. Time complexity: O(n). Space complexity: O(n) because filter() creates a new array.',
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
                        text: 'https://leetcode.com/problems/move-zeroes/',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-3',
        topicId: 'array-task',
        title: 'Merge Two Sorted Arrays',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given two arrays that are already sorted in ascending order, merge them into one sorted array.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '[1, 2, 3, 4, 5, 6, 7, 8]',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const mergeSortedArrays = (arr1, arr2) =>
    arr1.concat(arr2).sort((a, b) => a - b);

console.log(mergeSortedArrays(arr1, arr2));`,
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
                            'concat() combines both arrays into a new array without changing the original arrays.',
                            'sort((a, b) => a - b) arranges the numbers in ascending numeric order.',
                            'For [1, 3, 5, 7] and [2, 4, 6, 8], the merged result is [1, 2, 3, 4, 5, 6, 7, 8].',
                            'Time complexity: O((n + m) log(n + m)). Space complexity: O(n + m), where n and m are the input array lengths.',
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
                        text: 'https://leetcode.com/problems/merge-sorted-array/',
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-4',
        topicId: 'array-task',
        title: "Maximum Subarray Sum (Kadane's Algorithm)",
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given a non-empty array of numbers, find the largest sum you can get from a contiguous subarray.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: 'const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];',
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '6 // from the subarray [4, -1, 2, 1]',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const maxSubarraySum = (nums) =>
    nums.reduce(
        (state, num) => {
            const currentSum = Math.max(num, state.currentSum + num);

            return {
                currentSum,
                maxSum: Math.max(state.maxSum, currentSum),
            };
        },
        { currentSum: -Infinity, maxSum: -Infinity },
    ).maxSum;

console.log(maxSubarraySum(nums));`,
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
                            'Use reduce() to process each number and keep track of the current subarray sum and the largest sum found so far.',
                            'For each number, Math.max(num, currentSum + num) decides whether to start a new subarray or extend the previous one.',
                            'Update maxSum whenever the current subarray has a larger sum.',
                            'For this input, the largest-sum contiguous subarray is [4, -1, 2, 1], which adds up to 6.',
                            'Time complexity: O(n). Space complexity: O(1).',
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
                        text: 'https://leetcode.com/problems/maximum-subarray/',
                    },
                ],
            },
        ],
        thanglishExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Indha function, array-la contiguous-ah irukkura subarray-kulla varra maximum sum-ai return pannum. Maximum sum mattum return pannum; subarray-ai return pannaadhu.',
                    },
                    {
                        type: 'bullets',
                        items: [
                            '`const maxSubarraySum = (nums) =>` - nums array-ai input-ah eduthu, maximum subarray sum-ai calculate panna function create pannudhu.',
                            '`nums.reduce(...)` - array values-ai one-by-one process panni, ovvoru step-layum accumulator state-ai next step-ku pass pannudhu.',
                            '`(state, num) => { ... }` - state-la previous step-oda currentSum and maxSum irukkum; num-na ippo process panra number.',
                            '`Math.max(num, state.currentSum + num)` - current number-lendhu pudhu subarray start pannalama, illa previous subarray-oda continue pannalama nu compare pannudhu. Rendu values-la perusa irukkuradhu currentSum aagum.',
                            '`return { currentSum, maxSum: Math.max(state.maxSum, currentSum) }` - currentSum-ai next step-ku save pannudhu. Adhe samayam, pazhaya maxSum-um currentSum-um compare panni periya value-ai maxSum-ah save pannudhu.',
                            '`{ currentSum: -Infinity, maxSum: -Infinity }` - reduce-oda initial state. First number process aagumbodhu adhuve currentSum and maxSum aagum; array-la ellame negative-ah irundhaalum correct answer kidaikkum.',
                            '`.maxSum` - reduce mudinja piragu final state-la irukkura maximum sum mattum eduthu return pannudhu.',
                            '`console.log(maxSubarraySum(nums))` - function return panna answer-ai console-la print pannudhu.',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text: '**Sample array-oda step-by-step trace:**',
                    },
                    {
                        type: 'bullets',
                        items: [
                            'Starting state: currentSum = -Infinity, maxSum = -Infinity.',
                            'num = -2: currentSum = -2, maxSum = -2.',
                            'num = 1: -2 + 1 vida 1 perusu; pudhu subarray start aagum. currentSum = 1, maxSum = 1.',
                            'num = -3: previous subarray-oda continue pannina -2; adhu -3 vida perusu. currentSum = -2, maxSum = 1.',
                            'num = 4: pudhu subarray start pannina 4; continue pannina 1. currentSum = 4, maxSum = 4.',
                            'num = -1: currentSum = 3, maxSum = 4.',
                            'num = 2: currentSum = 5, maxSum = 5.',
                            'num = 1: currentSum = 6, maxSum = 6.',
                            'num = -5: currentSum = 1, maxSum = 6. Negative value currentSum-ai kuraikkum, aana maximum sum maaradhu.',
                            'num = 4: currentSum = 5, maxSum = 6. Final answer 6; adhu [4, -1, 2, 1] subarray-lendhu varudhu.',
                            'Time complexity: O(n), array-ai oru murai scan pannum. Space complexity: O(1), fixed-size state mattum use pannum.',
                        ],
                    },
                ],
            },
        ],
    }),
    createQuestion({
        id: 'ct-arr-5',
        topicId: 'array-task',
        title: 'Find the Missing Number in 1 to N',
        difficulty: 'Intermediate',
        status: 'in-progress',
        priority: 'high',
        simpleExplanation: [
            {
                label: '1',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 'Given an array containing distinct numbers from 1 to n with exactly one number missing, find the missing number.',
                    },
                    {
                        type: 'paragraph',
                        text: '**Expected Input**',
                    },
                    {
                        type: 'code',
                        text: `const nums = [1, 2, 4, 5];
const n = 5;`,
                    },
                    {
                        type: 'heading',
                        text: '**Expected Output**',
                    },
                    {
                        type: 'code',
                        text: '3',
                    },
                    {
                        type: 'heading',
                        text: '**Simple ES6 Solution**',
                    },
                    {
                        type: 'code',
                        text: `const findMissingNumber = (nums, n) =>
    (n * (n + 1)) / 2 - nums.reduce((sum, num) => sum + num, 0);

console.log(findMissingNumber(nums, n));`,
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
                            'The sum of all numbers from 1 to n is n * (n + 1) / 2.',
                            'Use reduce() to calculate the sum of the numbers present in the array.',
                            'Subtract the array sum from the expected sum to get the missing number.',
                            'For n = 5, the expected sum is 15. The array sum is 12, so the missing number is 3.',
                            'Time complexity: O(n). Space complexity: O(1).',
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
                        text: 'https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1',
                    },
                ],
            },
        ],
    }),
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
    const result = nums.reduce(
        (state, num) => {
            if (state.largest === null || num > state.largest) {
                return { largest: num, secondLargest: state.largest };
            }

            if (
                num < state.largest &&
                (state.secondLargest === null || num > state.secondLargest)
            ) {
                return { largest: state.largest, secondLargest: num };
            }

            return state;
        },
        { largest: null, secondLargest: null },
    );

    return result.secondLargest;
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
                            'Use reduce() to scan the array once while tracking the largest and second-largest distinct values.',
                            'When a number is larger than largest, move the previous largest into secondLargest.',
                            'Otherwise, if it is smaller than largest but larger than secondLargest, update secondLargest.',
                            'The num < state.largest check ignores duplicate copies of the largest value.',
                            'If the array has fewer than two distinct values, secondLargest remains null.',
                            'Time complexity: O(n). Space complexity: O(1).',
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
];
