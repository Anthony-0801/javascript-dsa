/**
 * CHALLENGE 4: MERGE SORTED ARRAYS
 * ================================
 * Merge two sorted arrays into a single sorted array.
 * 
 * Problem:
 * Given two sorted arrays, merge them into one sorted array.
 * 
 * Example:
 * Input: [1, 3, 5], [2, 4, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 * 
 * Input: [1, 2, 3], []
 * Output: [1, 2, 3]
 * 
 * Constraints:
 * - Array 1 length: 0 to 10^5
 * - Array 2 length: 0 to 10^5
 * - Both arrays are ALREADY SORTED in ascending order
 * - Values: -10^6 to 10^6
 * 
 * Big O Hints:
 * - Time Complexity: O(n + m) where n and m are array lengths
 * - Space Complexity: O(n + m) for the result array
 * 
 * Key Insight:
 * Use TWO POINTERS approach:
 * - One pointer at start of array1
 * - One pointer at start of array2
 * - Compare and pick the smaller element
 * This is the most efficient approach!
 * 
 * DO NOT USE: spread operator + sort -> This is O((n+m)log(n+m))
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr1 - sorted array
 * @param {number[]} arr2 - sorted array
 * @return {number[]} - merged sorted array
 */
export function mergeSortedArrays(arr1, arr2) {
  // TODO: Implementation required
  // Must use two-pointer approach for O(n+m) time
  // Do NOT sort the result - use the fact that inputs are sorted!
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: { arr1: [1, 3, 5], arr2: [2, 4, 6] }, expected: [1, 2, 3, 4, 5, 6] },
  { input: { arr1: [1, 2, 3], arr2: [] }, expected: [1, 2, 3] },
  { input: { arr1: [], arr2: [1, 2, 3] }, expected: [1, 2, 3] },
  { input: { arr1: [1, 4, 5], arr2: [2, 3, 6] }, expected: [1, 2, 3, 4, 5, 6] },
];

examples.forEach(({ input, expected }) => {
  console.log(`Input: [${input.arr1}] and [${input.arr2}]`);
  console.log(`Expected: [${expected}]`);
  const result = mergeSortedArrays(input.arr1, input.arr2);
  console.log(`Got: [${result}]`);
  console.log('---');
});
*/
