/**
 * CHALLENGE 3: REMOVE ELEMENT
 * ===========================
 * Remove all occurrences of a value, modify array in-place.
 * 
 * Problem:
 * Given an array and a target value, remove all occurrences of the target
 * and return the new length of the array. Modify the array in-place.
 * Do not allocate new arrays - rearrange the array so target values are removed.
 * 
 * Example:
 * Input: [3, 2, 2, 3], target = 3
 * Output: 2 (array becomes [2, 2, ...])
 * 
 * Input: [0, 1, 2, 2, 3, 0, 4, 2], target = 2
 * Output: 5 (array becomes [0, 1, 4, 0, 3, ...])
 * 
 * Constraints:
 * - Array length: 0 to 10^5
 * - Values: 0 to 50
 * - MUST modify in-place (no extra array allocation)
 * 
 * Big O Hints:
 * - Time Complexity: O(n) - Single pass required
 * - Space Complexity: O(1) - In-place modification only
 * 
 * Key Insight:
 * Use TWO POINTERS approach:
 * - One pointer for position to write
 * - One pointer for reading
 * This is much more efficient than splice() inside a loop!
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number} - new length of array
 */
export function removeElement(arr, target) {
  // TODO: Implementation required
  // Must use two-pointer approach for O(n) time, O(1) space
  // Do NOT use: splice() in a loop - this is O(n²) !
  // The array items after the returned length don't matter
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const examples = [
  { input: { arr: [3, 2, 2, 3], target: 3 }, expected: 2 },
  { input: { arr: [0, 1, 2, 2, 3, 0, 4, 2], target: 2 }, expected: 5 },
  { input: { arr: [1], target: 1 }, expected: 0 },
  { input: { arr: [1], target: 2 }, expected: 1 },
];

examples.forEach(({ input, expected }) => {
  const arr = [...input.arr];
  console.log(`Input: [${input.arr}], target: ${input.target}`);
  const result = removeElement(arr, input.target);
  console.log(`Expected length: ${expected}`);
  console.log(`Got length: ${result}`);
  console.log(`Array: [${arr.slice(0, result)}]`);
  console.log('---');
});
*/
