/**
 * CHALLENGE 2: COUNT OCCURRENCES
 * ==============================
 * Count how many times a target value appears in an array.
 * 
 * Problem:
 * Given an array and a target value, count how many times the target appears.
 * 
 * Example:
 * Input: [1, 2, 2, 3, 2, 4], target = 2
 * Output: 3
 * 
 * Input: [5, 5, 5, 5], target = 5
 * Output: 4
 * 
 * Constraints:
 * - Array length: 0 to 10^5
 * - Values: -10^6 to 10^6
 * 
 * Big O Hints:
 * - Time Complexity: O(n) - Must check every element
 * - Space Complexity: O(1) - Only need a counter variable
 * 
 * Approach:
 * - Simple iteration with counter
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
export function countOccurrences(arr, target) {
  // TODO: Implementation required
  // Count how many times target appears in arr
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: { arr: [1, 2, 2, 3, 2, 4], target: 2 }, expected: 3 },
  { input: { arr: [5, 5, 5, 5], target: 5 }, expected: 4 },
  { input: { arr: [1, 2, 3, 4], target: 5 }, expected: 0 },
  { input: { arr: [], target: 1 }, expected: 0 },
];

examples.forEach(({ input, expected }) => {
  console.log(`Input: [${input.arr}], target: ${input.target}`);
  console.log(`Expected: ${expected}`);
  console.log(`Got: ${countOccurrences(input.arr, input.target)}`);
  console.log('---');
});
*/
