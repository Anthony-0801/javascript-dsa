#!/usr/bin/env node

/**
 * ============================================================================
 * JAVASCRIPT DSA LEARNING - CHALLENGE RUNNER
 * ============================================================================
 * 
 * This is your coding workstation!
 * 
 * HOW TO USE:
 * 
 * 1. OPTION A - Run specific challenge tests:
 *    Simply uncomment one of the test sections below
 * 
 * 2. OPTION B - Run all array tests:
 *    Uncomment the "runAllTests();" line at the bottom
 * 
 * 3. OPTION C - Implement a challenge here:
 *    Import your challenge function and test it manually
 * 
 * 4. To run: npm start
 * 
 * ============================================================================
 */

// ============================================================================
// IMPORT TEST SUITES - Uncomment to run tests for specific data structures
// ============================================================================

// import { runAllTests as runArrayTests } from './tests/array.test.js';
// import { runAllTests as runHashTableTests } from './tests/hash-table.test.js';  // Coming soon
// import { runAllTests as runLinkedListTests } from './tests/linked-list.test.js';  // Coming soon

// ============================================================================
// IMPORT YOUR CHALLENGE IMPLEMENTATIONS HERE
// ============================================================================

// Arrays - Uncomment as you implement:
// import { findMaximum } from './challenges/array-challenges/01-find-maximum.js';
// import { countOccurrences } from './challenges/array-challenges/02-count-occurrences.js';
// import { removeElement } from './challenges/array-challenges/03-remove-element.js';
// import { mergeSortedArrays } from './challenges/array-challenges/04-merge-sorted-arrays.js';
// import { rotateArray } from './challenges/array-challenges/05-rotate-array.js';
// import { twoSum } from './challenges/array-challenges/06-two-sum.js';

// Hash Tables - Coming soon
// ...

// Linked Lists - Coming soon
// ...

// ============================================================================
// SETUP & EXECUTION
// ============================================================================

console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                   JAVASCRIPT DSA LEARNING ENVIRONMENT                      ║
║                                                                            ║
║  Purpose: Practice data structures and algorithms with strict Big O        ║
║           complexity requirements and automated testing                    ║
╚════════════════════════════════════════════════════════════════════════════╝
`);

// ============================================================================
// HOWTO: WORKING ON CHALLENGES
// ============================================================================

console.log(`
┌─ HOW TO USE THIS ENVIRONMENT ─────────────────────────────────────────────┐
│                                                                           │
│  WORKFLOW:                                                                │
│  ─────────                                                                │
│  1. Open a challenge file in challenges/[structure]-challenges/           │
│  2. Implement the solution function (replacing the "throw" statement)     │
│  3. Import the function at top of this file (uncomment import)            │
│  4. Run test command: npm start                                           │
│  5. Read test results carefully - they include hints!                     │
│  6. Fix your solution and repeat                                          │
│                                                                           │
│  IMPORTANT NOTES:                                                         │
│  ────────────────                                                         │
│  ✓ Tests check time complexity - O(n²) solutions will FAIL               │
│  ✓ Tests check space complexity - Extra arrays will cause FAIL           │
│  ✓ Must implement exactly as specified in challenge files                │
│  ✓ Focus on algorithm efficiency, not just correctness                   │
│                                                                           │
│  INCLUDED FEATURES:                                                       │
│  ──────────────────                                                       │
│  • Comprehensive test suite for each challenge                            │
│  • Big O complexity validation                                            │
│  • Helpful clues when tests fail                                          │
│  • Performance timing analysis                                            │
│  • Input/output verification                                              │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
`);

// ============================================================================
// MANUAL TESTING AREA (Optional)
// ============================================================================

/**
 * If you want to manually test a challenge, do it here.
 * Example:
 * 
 *   console.log("Testing findMaximum:");
 *   console.log(findMaximum([3, 7, 2, 8, 1]));  // Should print 8
 */

// ============================================================================
// AUTO TEST RUNNER
// ============================================================================

/**
 * Uncomment the test runner for the data structure you're working on:
 * 
 * - runArrayTests() - Run all array challenges
 * - runHashTableTests() - Run all hash table challenges (coming soon)
 * - runLinkedListTests() - Run all linked list challenges (coming soon)
 * 
 * Each will:
 * - Test correctness of your implementations
 * - Verify Big O time complexity
 * - Verify Big O space complexity
 * - Provide hints if tests fail
 */

// runArrayTests();  // Currently testing arrays

// ---------------------------------------------------------------------------
// NEW: Per-challenge test helpers
// You can run a single array challenge from npm using the scripts added to
// package.json (example: `npm run test:array-1` runs challenge 01-find-maximum).
// The package.json scripts import small exported helpers from
// `tests/array.test.js` (e.g. `runFindMaxTests`). This avoids creating new
// files and keeps single-test execution lightweight.
// ---------------------------------------------------------------------------

// Examples (from the shell):
//  npm run test:array       # run all array tests
//  npm run test:array-1     # run challenge 01 - find maximum
//  npm run test:array-2     # run challenge 02 - count occurrences
//  npm run test:array-3     # run challenge 03 - remove element
//  npm run test:array-4     # run challenge 04 - merge sorted arrays
//  npm run test:array-5     # run challenge 05 - rotate array
//  npm run test:array-6     # run challenge 06 - two-sum

// ============================================================================
// CHALLENGE SELECTION (Uncomment to run specific challenge tests)
// ============================================================================

/**
 * To run tests for a specific challenge, create a test runner:
 * 
 * Example:
 *   const tester = new ChallengeTest('Challenge 1: Find Maximum');
 *   tester.test('Basic case', () => {
 *     const result = findMaximum([3, 7, 2, 8, 1]);
 *     assert(result === 8, `Expected 8, got ${result}`);
 *   });
 *   tester.run();
 */

// ============================================================================
// SUGGESTED LEARNING ORDER
// ============================================================================

console.log(`
┌─ CURRENT FOCUS: ARRAYS ───────────────────────────────────────────────────┐
│                                                                           │
│  ARRAYS - 6 Challenges (4-8 hours total)                                  │
│  ────────────────────────────────────────────────────────────────         │
│  1. Find Maximum           (01-find-maximum.js)                           │
│     • Easy - Linear scan and comparison                                   │
│     • Time: O(n), Space: O(1)                                             │
│                                                                           │
│  2. Count Occurrences      (02-count-occurrences.js)                      │
│     • Easy - Counting pattern                                             │
│     • Time: O(n), Space: O(1)                                             │
│                                                                           │
│  3. Remove Element         (03-remove-element.js)                         │
│     • Medium - Two-pointer technique (★ Important!)                       │
│     • Time: O(n), Space: O(1)                                             │
│                                                                           │
│  4. Merge Sorted Arrays    (04-merge-sorted-arrays.js)                    │
│     • Medium - Merge operation (foundation of Merge Sort)                 │
│     • Time: O(n+m), Space: O(n+m)                                         │
│                                                                           │
│  5. Rotate Array           (05-rotate-array.js)                           │
│     • Medium - In-place rotation with reversal                            │
│     • Time: O(n), Space: O(1)                                             │
│                                                                           │
│  6. Two Sum                (06-two-sum.js)                                │
│     • Medium - Hash map approach (★★ Critical for interviews!)           │
│     • Time: O(n), Space: O(n)                                             │
│                                                                           │
│  See docs/array-reference-links.md for detailed information               │
│                                                                           │
│  NEXT DATA STRUCTURES (Coming Soon):                                      │
│  • Hash Tables - O(1) lookups and insertions                              │
│  • Linked Lists - O(1) middle operations                                  │
│  • Stacks & Queues - LIFO and FIFO structures                             │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
`);

// ============================================================================
// TESTING FRAMEWORK EXPLANATION
// ============================================================================

console.log(`
┌─ WHAT TO EXPECT FROM TESTS ────────────────────────────────────────────────┐
│                                                                            │
│  Each test will verify:                                                    │
│                                                                            │
│  ✓ CORRECTNESS                                                             │
│    - Does your solution produce the right output?                         │
│    - Are edge cases handled?                                              │
│                                                                            │
│  ✓ TIME COMPLEXITY                                                        │
│    - Is your solution fast enough?                                        │
│    - Tests with large inputs to catch O(n²) vs O(n)                       │
│    - Provides hints if you're too slow                                    │
│                                                                            │
│  ✓ SPACE COMPLEXITY                                                        │
│    - Are you using extra arrays/objects when not needed?                  │
│    - Some challenges require O(1) space (in-place modification)          │
│    - Tests will fail if you create unnecessary data structures            │
│                                                                            │
│  ✓ ALGORITHM APPROACH                                                      │
│    - Certain problems REQUIRE specific algorithms                         │
│    - Example: Two Sum MUST use hash map, not nested loops                │
│    - Tests will catch and reject non-optimal approaches                   │
│                                                                            │
│  WHEN TESTS FAIL:                                                          │
│    → Read the error message carefully                                      │
│    → Look for the 💡 HINT section                                         │
│    → Hints explain what's wrong and how to fix it                         │
│    → Check docs/reference-links.md for learning resources                │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
`);

// ============================================================================
// NEXT STEPS
// ============================================================================

console.log(`
┌─ YOUR NEXT STEPS ─────────────────────────────────────────────────────────┐
│                                                                            │
│  GETTING STARTED:                                                          │
│                                                                            │
│  1. Choose your data structure (currently: Arrays)                        │
│     → Read: src/data-structures/arrays.js                                │
│     → Understand operations and Big O complexity                          │
│                                                                            │
│  2. Start with the first challenge                                        │
│     → Open: challenges/array-challenges/01-find-maximum.js               │
│     → Implement the solution function                                     │
│     → Uncomment the import at top of this file                           │
│     → Run: npm start                                                      │
│                                                                            │
│  3. Check results and iterate                                              │
│     → If tests pass ✓ → Move to next challenge                            │
│     → If tests fail ✗ → Read hints and fix                               │
│                                                                            │
│  4. Deep dive into resources                                               │
│     → Check: docs/array-reference-links.md for detailed references        │
│     → Review: docs/reference-links.md for general DSA resources           │
│     → Practice similar problems on LeetCode                               │
│                                                                            │
│  5. After mastering one data structure                                     │
│     → Move to the next (Hash Tables, Linked Lists, etc.)                  │
│     → Build on previous knowledge                                         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
`);

console.log('\n' + '═'.repeat(80) + '\n');
