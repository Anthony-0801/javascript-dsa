/**
 * CHALLENGE 1: SIMULATE PRINT QUEUE
 * ================================
 * Given a list of print jobs with their priorities, determine the order in
 * which a specific job will be printed. This mirrors the classic printer
 * * queue problem where higher-priority jobs are printed before lower-priority
 * ones; ties are resolved by order in the queue.
 *
 * Problem:
 * - `jobs` is an array of integers representing priorities (higher = print
 *   sooner).
 * - `targetIndex` is the index of the job we care about.
 * Return the 1-based position at which the target job will be printed.
 *
 * Example:
 * Input: jobs = [2, 1, 3, 2], targetIndex = 2
 * Output: 1 (the job at index 2 has highest priority and prints first)
 *
 * Big O Hints:
 * - Time: O(n log n) or O(n * p) depending on approach (use a queue + max check)
 * - Space: O(n)
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} jobs
 * @param {number} targetIndex
 * @return {number}  // 1-based print order
 */
export function simulatePrintQueue(jobs, targetIndex) {
  throw new Error('Not implemented');
}
