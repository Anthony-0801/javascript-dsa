/**
 * CHALLENGE 6: RECENT COUNTER
 * ===========================
 * Implement a function that given a list of request timestamps (in ms) and a
 * window `t` returns how many requests are within the last `t` milliseconds
 * relative to the most recent request.
 *
 * Example:
 * requests = [1, 100, 300, 301, 600], t = 300 => returns 3 (requests at 301, 600?)
 * (Note: adapt examples to consistent units in tests.)
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {number[]} requestTimes // sorted ascending
 * @param {number} t // time window (same units as requestTimes)
 * @return {number} count within last t of last request
 */
export function recentCounter(requestTimes, t) {
  throw new Error('Not implemented');
}
