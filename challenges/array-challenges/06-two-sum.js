/**
 * CHALLENGE 6: DYNAMIC ARRAYS (Two Sum)
 * ===================================
 * Find two numbers that add up to a target sum.
 * 
 * Problem:
 * Given an array of integers and a target sum, find TWO different indices
 * whose values add up to the target. Return the indices [i, j].
 * You cannot use the same index twice.
 * 
 * Example:
 * Input: [2, 7, 11, 15], target = 9
 * Output: [0, 1] (because arr[0] + arr[1] = 2 + 7 = 9)
 * 
 * Input: [3, 2, 4], target = 6
 * Output: [1, 2] (because arr[1] + arr[2] = 2 + 4 = 6)
 * 
 * Constraints:
 * - Array length: 2 to 10^5
 * - Each target has exactly ONE solution
 * - Cannot use same index twice
 * - Values: -10^9 to 10^9
 * 
 * Big O Analysis:
 * 
 * NAIVE approach (avoid):
 * - Nested loops: O(n²) time, O(1) space
 * - Too slow for large arrays!
 * 
 * OPTIMAL approach (required):
 * - Hash Map: O(n) time, O(n) space
 * - For each number, check if (target - number) exists in hash map
 * - If yes, we found the pair!
 * - If no, add current number to hash map
 * 
 * You MUST use a hash map approach (or similar O(n) solution) to pass tests!
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]} - two indices [i, j] where arr[i] + arr[j] = target
 */
export function twoSum(arr, target) {
  // TODO: Implementation required
  // MUST use hash map for O(n) time complexity
  // DO NOT use nested loops - that's O(n²) and will fail tests!
  // 
  // Algorithm:
  // 1. Create a hash map to store value -> index
  // 2. For each element, check if (target - element) exists in map
  // 3. If found, return both indices
  // 4. If not found, add current element to map
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: { arr: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
  { input: { arr: [3, 2, 4], target: 6 }, expected: [1, 2] },
  { input: { arr: [3, 3], target: 6 }, expected: [0, 1] },
];

examples.forEach(({ input, expected }) => {
  console.log(`Input: [${input.arr}], target: ${input.target}`);
  console.log(`Expected: [${expected}]`);
  const result = twoSum(input.arr, input.target);
  console.log(`Got: [${result}]`);
  console.log('---');
});
*/
