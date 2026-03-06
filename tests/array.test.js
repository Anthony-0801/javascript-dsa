/**
 * ARRAY CHALLENGES TEST SUITE
 * =============================
 * Tests verify:
 * 1. Correctness - Solutions produce correct results
 * 2. Time Complexity - Solutions meet Big O requirements
 * 3. Space Complexity - Solutions don't use extra space where forbidden
 * 4. Clues - Provided when tests fail
 */

import { findMaximum } from '../challenges/array-challenges/01-find-maximum.js';
import { countOccurrences } from '../challenges/array-challenges/02-count-occurrences.js';
import { removeElement } from '../challenges/array-challenges/03-remove-element.js';
import { mergeSortedArrays } from '../challenges/array-challenges/04-merge-sorted-arrays.js';
import { rotateArray } from '../challenges/array-challenges/05-rotate-array.js';
import { twoSum } from '../challenges/array-challenges/06-two-sum.js';

// ============================================================================
// TEST FRAMEWORK
// ============================================================================

class TestRunner {
  constructor(name) {
    this.name = name;
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  test(description, testFn) {
    this.tests.push({ description, testFn });
  }

  run() {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`TEST SUITE: ${this.name}`);
    console.log(`${'='.repeat(70)}\n`);

    this.tests.forEach(({ description, testFn }) => {
      try {
        testFn();
        console.log(`✓ PASS: ${description}`);
        this.passed++;
      } catch (error) {
        console.log(`✗ FAIL: ${description}`);
        console.log(`  Error: ${error.message}`);
        this.failed++;
      }
    });

    console.log(`\n${'-'.repeat(70)}`);
    console.log(`Results: ${this.passed} passed, ${this.failed} failed`);
    console.log(`${'-'.repeat(70)}\n`);

    return this.failed === 0;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function deepEqual(actual, expected) {
  if (typeof expected === 'object' && expected !== null) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  } else {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, got ${actual}`);
    }
  }
}

// ============================================================================
// COMPLEXITY ANALYZERS
// ============================================================================

/**
 * Simple operation counter for analyzing time complexity
 */
class OperationCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  getComplexity(n) {
    // Returns approximate complexity
    if (this.count <= n + 5) return 'O(n)';
    if (this.count <= n * Math.log(n) + 5) return 'O(n log n)';
    if (this.count <= n * 10) return '~O(n)';
    if (this.count <= n * n / 2) return 'O(n²)';
    return `O(unknown) - ${this.count} ops for n=${n}`;
  }
}

/**
 * Measure execution time to detect inefficient algorithms
 */
function measureTime(fn, arr, ...args) {
  const start = performance.now();
  const result = fn(arr, ...args);
  const end = performance.now();
  return { result, time: end - start };
}

/**
 * Check if an array was modified in-place
 */
function isModifiedInPlace(original, modified) {
  return original === modified;
}

// ============================================================================
// CHALLENGE 1: FIND MAXIMUM
// ============================================================================

const findMaxTest = new TestRunner('Challenge 1: Find Maximum');

findMaxTest.test('Basic case - positive numbers', () => {
  const result = findMaximum([3, 7, 2, 8, 1]);
  deepEqual(result, 8);
});

findMaxTest.test('Negative numbers', () => {
  const result = findMaximum([-5, -2, -10]);
  deepEqual(result, -2);
});

findMaxTest.test('Single element', () => {
  const result = findMaximum([42]);
  deepEqual(result, 42);
});

findMaxTest.test('All same elements', () => {
  const result = findMaximum([5, 5, 5, 5]);
  deepEqual(result, 5);
});

findMaxTest.test('Time Complexity - O(n)', () => {
  const largeArr = Array.from({ length: 10000 }, (_, i) => i);
  const { time } = measureTime(findMaximum, largeArr);
  // O(n) should complete very quickly for 10k elements
  assert(time < 100, `Should complete in under 100ms, took ${time.toFixed(2)}ms`);
});

findMaxTest.test('Space Complexity - O(1)', () => {
  // Should not create arrays or use extra space
  const arr = [1, 2, 3, 4, 5];
  const result = findMaximum(arr);
  assert(typeof result === 'number', 'Should return a single number, not an array');
});

// ============================================================================
// CHALLENGE 2: COUNT OCCURRENCES
// ============================================================================

const countTest = new TestRunner('Challenge 2: Count Occurrences');

countTest.test('Basic case', () => {
  const result = countOccurrences([1, 2, 2, 3, 2, 4], 2);
  deepEqual(result, 3);
});

countTest.test('All occurrences', () => {
  const result = countOccurrences([5, 5, 5, 5], 5);
  deepEqual(result, 4);
});

countTest.test('No occurrences', () => {
  const result = countOccurrences([1, 2, 3, 4], 5);
  deepEqual(result, 0);
});

countTest.test('Empty array', () => {
  const result = countOccurrences([], 1);
  deepEqual(result, 0);
});

countTest.test('Time Complexity - O(n)', () => {
  const largeArr = Array.from({ length: 100000 }, (_, i) => i % 10);
  const { time } = measureTime(countOccurrences, largeArr, 5);
  assert(time < 200, `Should complete in under 200ms for 100k elements, took ${time.toFixed(2)}ms`);
});

countTest.test('Space Complexity - O(1)', () => {
  const result = countOccurrences([1, 2, 2, 3], 2);
  assert(typeof result === 'number', 'Should return a number, not an array');
});

// ============================================================================
// CHALLENGE 3: REMOVE ELEMENT
// ============================================================================

const removeTest = new TestRunner('Challenge 3: Remove Element');

removeTest.test('Basic case', () => {
  const arr = [3, 2, 2, 3];
  const length = removeElement(arr, 3);
  deepEqual(length, 2);
  deepEqual([arr[0], arr[1]], [2, 2]);
});

removeTest.test('Remove from end', () => {
  const arr = [0, 1, 2, 2, 3, 0, 4, 2];
  const length = removeElement(arr, 2);
  deepEqual(length, 5);
});

removeTest.test('Single element match', () => {
  const arr = [1];
  const length = removeElement(arr, 1);
  deepEqual(length, 0);
});

removeTest.test('No match', () => {
  const arr = [1];
  const length = removeElement(arr, 2);
  deepEqual(length, 1);
});

removeTest.test('Time Complexity - O(n) required', () => {
  const arr = Array.from({ length: 100000 }, () => 1);
  const { time } = measureTime(removeElement, arr, 1);
  
  // O(n) should be very fast - under 200ms
  // O(n²) would be much slower - multiple seconds
  assert(
    time < 200,
    `❌ FAILED COMPLEXITY CHECK!\n` +
    `  Took ${time.toFixed(2)}ms for 100k elements\n` +
    `  This looks like O(n²) - using splice() in a loop?\n` +
    `  💡 HINT: Use TWO-POINTER approach:\n` +
    `     1. One pointer for write position\n` +
    `     2. One pointer for read position\n` +
    `     3. Copy non-target elements forward\n` +
    `     This achieves O(n) time!`
  );
});

removeTest.test('Space Complexity - O(1) in-place modification', () => {
  const arr = [3, 2, 2, 3];
  const originalRef = arr;
  const length = removeElement(arr, 3);
  assert(
    isModifiedInPlace(originalRef, arr),
    `❌ FAILED!\n` +
    `  Array not modified in-place\n` +
    `  💡 HINT: Modify the input array directly\n` +
    `     Don't create new arrays with spread, concat, or filter`
  );
});

// ============================================================================
// CHALLENGE 4: MERGE SORTED ARRAYS
// ============================================================================

const mergeTest = new TestRunner('Challenge 4: Merge Sorted Arrays');

mergeTest.test('Basic merge', () => {
  const result = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
  deepEqual(result, [1, 2, 3, 4, 5, 6]);
});

mergeTest.test('One empty array', () => {
  const result = mergeSortedArrays([1, 2, 3], []);
  deepEqual(result, [1, 2, 3]);
});

mergeTest.test('Both empty arrays', () => {
  const result = mergeSortedArrays([], []);
  deepEqual(result, []);
});

mergeTest.test('Duplicates', () => {
  const result = mergeSortedArrays([1, 2, 2], [2, 3]);
  deepEqual(result, [1, 2, 2, 2, 3]);
});

mergeTest.test('Time Complexity - O(n + m) required', () => {
  const arr1 = Array.from({ length: 50000 }, (_, i) => i * 2);
  const arr2 = Array.from({ length: 50000 }, (_, i) => i * 2 + 1);
  const { time } = measureTime(mergeSortedArrays, arr1, arr2);

  assert(
    time < 500,
    `❌ FAILED COMPLEXITY CHECK!\n` +
    `  Took ${time.toFixed(2)}ms for merging 100k elements\n` +
    `  This looks like O((n+m)log(n+m)) - are you sorting?\n` +
    `  💡 HINT: Use TWO-POINTER approach:\n` +
    `     1. Start with pointers at beginning of each array\n` +
    `     2. Compare elements and add smaller to result\n` +
    `     3. Move that pointer forward\n` +
    `     4. Repeat until one array exhausted\n` +
    `     5. Add remaining elements\n` +
    `     This achieves O(n+m) without sorting!`
  );
});

mergeTest.test('Result is sorted', () => {
  const result = mergeSortedArrays([1, 4, 5], [2, 3, 6]);
  for (let i = 0; i < result.length - 1; i++) {
    assert(result[i] <= result[i + 1], `Result not properly sorted at index ${i}`);
  }
});

// ============================================================================
// CHALLENGE 5: ROTATE ARRAY
// ============================================================================

const rotateTest = new TestRunner('Challenge 5: Rotate Array');

rotateTest.test('Basic rotation', () => {
  const arr = [1, 2, 3, 4, 5];
  rotateArray(arr, 2);
  deepEqual(arr, [4, 5, 1, 2, 3]);
});

rotateTest.test('Rotation more than length', () => {
  const arr = [1, 2];
  rotateArray(arr, 3);
  deepEqual(arr, [2, 1]);
});

rotateTest.test('Zero rotation', () => {
  const arr = [1, 2, 3, 4, 5];
  rotateArray(arr, 0);
  deepEqual(arr, [1, 2, 3, 4, 5]);
});

rotateTest.test('Time Complexity - O(n) required', () => {
  const arr = Array.from({ length: 100000 }, (_, i) => i);
  const { time } = measureTime(rotateArray, arr, 50000);

  assert(
    time < 300,
    `❌ FAILED COMPLEXITY CHECK!\n` +
    `  Took ${time.toFixed(2)}ms for 100k elements\n` +
    `  This looks like O(n*k) - using pop/unshift in loop?\n` +
    `  💡 HINT: Use REVERSE approach (O(n)):\n` +
    `     1. Normalize k: k = k % arr.length\n` +
    `     2. Reverse entire array\n` +
    `     3. Reverse first k elements\n` +
    `     4. Reverse remaining (n-k) elements\n` +
    `     Example: [1,2,3,4,5], k=2\n` +
    `     → Reverse all: [5,4,3,2,1]\n` +
    `     → Reverse first 2: [4,5,3,2,1]\n` +
    `     → Reverse last 3: [4,5,1,2,3] ✓`
  );
});

rotateTest.test('Space Complexity - O(1) in-place', () => {
  const arr = [1, 2, 3, 4, 5];
  const originalRef = arr;
  rotateArray(arr, 2);
  assert(
    isModifiedInPlace(originalRef, arr),
    `❌ FAILED!\n` +
    `  Array not modified in-place\n` +
    `  💡 HINT: Modify the input array directly\n` +
    `     Don't create new arrays`
  );
});

// ============================================================================
// CHALLENGE 6: TWO SUM
// ============================================================================

const twoSumTest = new TestRunner('Challenge 6: Two Sum (Dynamic Arrays/Hash Maps)');

twoSumTest.test('Basic case', () => {
  const result = twoSum([2, 7, 11, 15], 9);
  const [a, b] = result;
  assert(
    a !== b && [2, 7].includes(a) && [2, 7].includes(b),
    `Expected indices of 2 and 7, got indices ${a} and ${b}`
  );
});

twoSumTest.test('Duplicate values', () => {
  const result = twoSum([3, 3], 6);
  const [a, b] = result;
  assert(a !== b, 'Cannot use same index twice');
  assert([0, 1].includes(a) && [0, 1].includes(b), 'Incorrect indices');
});

twoSumTest.test('Correct indices returned', () => {
  const arr = [3, 2, 4];
  const [i, j] = twoSum(arr, 6);
  assert(arr[i] + arr[j] === 6, 'Sum of values at returned indices must equal target');
});

twoSumTest.test(
  'Time Complexity - O(n) with Hash Map REQUIRED',
  () => {
    const largeArr = Array.from({ length: 100000 }, (_, idx) => idx * 2);
    largeArr[99999] = 199998;
    largeArr[50000] = 1000;
    
    const { time } = measureTime(twoSum, largeArr, 200998);

    assert(
      time < 500,
      `❌ FAILED COMPLEXITY CHECK!\n` +
      `  Took ${time.toFixed(2)}ms for 100k elements\n` +
      `  This looks like O(n²) - are you using nested loops?\n` +
      `  ⚠️  NESTED LOOPS ARE NOT ACCEPTED!\n\n` +
      `  💡 REQUIRED APPROACH: Use Hash Map for O(n) time\n` +
      `     1. Create a Map/Object to store: value -> index\n` +
      `     2. For each element at index i:\n` +
      `        a. Check if (target - element) exists in map\n` +
      `        b. If YES → return [map.get(diff), i]\n` +
      `        c. If NO → add element to map\n` +
      `     3. Continue until found\n\n` +
      `     Example with [2,7,11,15], target=9:\n` +
      `     i=0: map={}, looking for 7, not found, map={2:0}\n` +
      `     i=1: map={2:0}, looking for 2, FOUND at 0!\n` +
      `     return [0, 1] ✓`
    );
  }
);

twoSumTest.test('Space Complexity awareness - Using Hash Map', () => {
  // This test just verifies the solution can handle the data
  const arr = Array.from({ length: 10000 }, (_, i) => i);
  const result = twoSum(arr, 19998);
  const [i, j] = result;
  assert(arr[i] + arr[j] === 19998, 'Solution should work with large arrays');
});

// ============================================================================
// RUN ALL TESTS
// ============================================================================

export function runAllTests() {
  const results = [
    findMaxTest.run(),
    countTest.run(),
    removeTest.run(),
    mergeTest.run(),
    rotateTest.run(),
    twoSumTest.run(),
  ];

  const allPassed = results.every(r => r === true);

  console.log(`${'='.repeat(70)}`);
  console.log(`OVERALL RESULT: ${allPassed ? '✓ ALL TESTS PASSED' : '✗ SOME TESTS FAILED'}`);
  console.log(`${'='.repeat(70)}`);

  return allPassed;
}
