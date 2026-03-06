/**
 * CHALLENGE 5: ROTATE ARRAY
 * ========================
 * Rotate an array to the right by k steps.
 * 
 * Problem:
 * Given an array and a number k, rotate the array to the right by k steps.
 * Modify the array in-place.
 * 
 * Example:
 * Input: [1, 2, 3, 4, 5], k = 2
 * Output: [4, 5, 1, 2, 3]
 * 
 * Input: [1, 2], k = 3
 * Output: [2, 1] (rotated 3 times = rotated 1 time for array of length 2)
 * 
 * Constraints:
 * - Array length: 1 to 10^5
 * - k: 0 to 10^5
 * - Values: -10^4 to 10^4
 * - MUST modify in-place (O(1) space)
 * 
 * Big O Hints:
 * - Time Complexity: O(n) - Single pass solution exists
 * - Space Complexity: O(1) - In-place modification
 * 
 * NAIVE approach (avoid):
 * - Using pop() and unshift() in a loop -> O(n*k) time!
 * 
 * OPTIMAL approach (required):
 * - Rotation by k = Reverse entire array + Reverse first k + Reverse last (n-k)
 * OR
 * - Use cyclic replacement algorithm
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr
 * @param {number} k - rotation steps
 * @return {void} - modifies array in-place
 */
export function rotateArray(arr, k) {
  // TODO: Implementation required
  // Must achieve O(n) time, O(1) space
  // Do NOT use: concat, slice, spread operator, or loops with pop/unshift
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: { arr: [1, 2, 3, 4, 5], k: 2 }, expected: [4, 5, 1, 2, 3] },
  { input: { arr: [1, 2], k: 3 }, expected: [2, 1] },
  { input: { arr: [1], k: 1 }, expected: [1] },
  { input: { arr: [1, 2, 3, 4, 5], k: 0 }, expected: [1, 2, 3, 4, 5] },
];

examples.forEach(({ input, expected }) => {
  const arr = [...input.arr];
  console.log(`Input: [${input.arr}], k: ${input.k}`);
  rotateArray(arr, input.k);
  console.log(`Expected: [${expected}]`);
  console.log(`Got: [${arr}]`);
  console.log('---');
});
*/
