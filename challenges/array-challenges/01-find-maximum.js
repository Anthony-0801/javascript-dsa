/**
 * CHALLENGE 1: FIND MAXIMUM
 * =========================
 * Find the maximum value in an array of numbers.
 * 
 * Problem:
 * Given an array of integers, return the maximum value.
 * 
 * Example:
 * Input: [3, 7, 2, 8, 1]
 * Output: 8
 * 
 * Input: [-5, -2, -10]
 * Output: -2
 * 
 * Constraints:
 * - Array length: 1 to 10^5
 * - Values: -10^6 to 10^6
 * 
 * Big O Hints:
 * - Time Complexity: O(n) - Must check every element
 * - Space Complexity: O(1) - Only need variable to track max
 * 
 * DO NOT USE: Math.max() - you need to implement the logic
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr
 * @return {number}
 */
export function findMaximum(arr) {
  // TODO: Implementation required
  // Remember: You must iterate through the array once O(n)
  // Track the maximum value using a single variable
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: [3, 7, 2, 8, 1], expected: 8 },
  { input: [-5, -2, -10], expected: -2 },
  { input: [42], expected: 42 },
  { input: [1, 1, 1, 1], expected: 1 },
];

examples.forEach(({ input, expected }) => {
  console.log(`Input: ${JSON.stringify(input)}`);
  console.log(`Expected: ${expected}`);
  console.log(`Got: ${findMaximum(input)}`);
  console.log('---');
});
*/
