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
                            'Use some() to scan the array and stop once a matching pair is found.',
                            'For each number, calculate the complement needed to reach the target.',
                            'Store each number and its index in a Map. When the complement is already in the Map, save both indices.',
                            'Return true from some() to stop searching when a pair is found; otherwise return false to continue.',
                            'For [2, 7, 11, 15] with target 9, the matching values are 2 and 7, so the result is [0, 1].',
                            'If no pair is found, return an empty array.',
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
                            'some() array-la ovvoru number-aiyum check pannum; pair kidaichadhum search-ai stop pannum.',
                            'Target reach panna thevaiyana complement-ai calculate pannuvom.',
                            'Check panna number-um index-um Map-la store aagum. Complement already Map-la irundha rendu indexes-um result-la save pannuvom.',
                            'Pair kidaichadhum some()-la true return pannina search stop aagum; illana false return panni next number-ku pogum.',
                            '[2, 7, 11, 15], target 9-na, 2-oda complement 7 array-la irukku. Adhanaala indexes [0, 1] return aagum.',
                            'Pair kidaikkalana empty array return aagum.',
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
                        text: `const maxSubarraySum = (nums) => {
    let currentSum = nums[0];
    let maxSum = nums[0];

    nums.forEach((num, index) => {
        if (index === 0) return;

        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    });

    return maxSum;
};

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
                            'Start currentSum and maxSum at the first number.',
                            'Use forEach() to visit each remaining number.',
                            'Math.max(num, currentSum + num) chooses between starting a new subarray and extending the current one.',
                            'Update maxSum whenever currentSum is larger.',
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
                            '`let currentSum = nums[0]` and `let maxSum = nums[0]` - first number-ai current subarray sum and maximum sum-ah initialize pannudhu. Array-la ellame negative-a irundhaalum idhu correct-a work aagum.',
                            '`nums.forEach((num, index) => { ... })` - array values-ai one-by-one visit pannum. First value already initial state-la use pannirukkom; adhanaala `index === 0` na skip pannuvom.',
                            '`Math.max(num, currentSum + num)` - current number-la pudhu subarray start pannalama, illa previous subarray-oda continue pannalama nu compare pannum.',
                            '`Math.max(maxSum, currentSum)` - idhu varaikkum kidaicha maximum sum-ai save pannum.',
                            '`return maxSum` - array full-a check pannina piragu periya contiguous subarray sum-ai return pannum.',
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
                            'Starting state: currentSum = -2, maxSum = -2.',
                            'num = 1: pudhu subarray start panna sum 1; pazhaiya subarray continue panna sum -1. currentSum = 1, maxSum = 1.',
                            'num = -3: currentSum = -2, maxSum = 1.',
                            'num = 4: pudhu subarray start pannradhu better. currentSum = 4, maxSum = 4.',
                            'num = -1: currentSum = 3, maxSum = 4.',
                            'num = 2: currentSum = 5, maxSum = 5.',
                            'num = 1: currentSum = 6, maxSum = 6.',
                            'num = -5: currentSum = 1; maxSum 6-ah irukkum.',
                            'num = 4: currentSum = 5; maxSum 6-ah irukkum. Final answer 6; adhu [4, -1, 2, 1] subarray-lendhu varudhu.',
                            'Time complexity: O(n), array-ai oru murai scan pannum. Space complexity: O(1), rendu variables mattum use pannum.',
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
                        text: `const findMissingNumber = (nums, n) => {
    const presentNumbers = new Set(nums);
    const numbersFromOneToN = Array.from(
        { length: n },
        (_, index) => index + 1,
    );

    return numbersFromOneToN.find((num) => !presentNumbers.has(num));
};

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
                            'Create a Set from the input so checking whether a number exists is simple.',
                            'Array.from() creates the expected numbers from 1 to n.',
                            'find() returns the first number that is not in the Set.',
                            'For n = 5, the expected list is [1, 2, 3, 4, 5]. Since 3 is missing from the input, the answer is 3.',
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
                        text: 'https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1',
                    },
                ],
            },
        ],
    }),
];
