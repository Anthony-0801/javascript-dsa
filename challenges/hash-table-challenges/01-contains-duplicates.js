/**
 * CHALLENGE 1: CONTAINS DUPLICATES
 * ================================
 * Determine if the input array contains any duplicate values.
 *
 * Problem:
 * Given an array of integers `nums`, return `true` if any value appears at least twice in the array,
 * and return `false` if every element is distinct.
 *
 * Example:
 * Input: [1, 2, 3, 1]
 * Output: true
 *
 * Input: [1, 2, 3, 4]
 * Output: false
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^6 <= nums[i] <= 10^6
 *
 * Big O Hints:
 * - Time Complexity: O(n) expected using a hash set
 * - Space Complexity: O(n) for the set
 *
 * DO NOT USE: library methods that trivialize the check (e.g., converting to a Set and comparing lengths is fine for testing,
 * but implement the intended approach using a set or map explicitly)
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function containsDuplicates(nums) {
  // TODO: Implementation required
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
console.log(containsDuplicates([1,2,3,1])); // true
console.log(containsDuplicates([1,2,3,4])); // false
*/

export default containsDuplicates;
