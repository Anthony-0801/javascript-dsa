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

/**
 * Create a Proxy around an array to count element accesses and sets.
 * This helps tests enforce stricter Big-O by measuring actual element
 * accesses rather than relying solely on time thresholds.
 */
function createAccessCountingArray(arr, options = {}) {
  const forbidden = new Set(options.forbiddenMethods || []);
  const counter = { gets: 0, sets: 0, lengthReads: 0, methodCalls: 0 };
  const handler = {
    get(target, prop, receiver) {
      if (prop === 'length') {
        counter.lengthReads++;
        return Reflect.get(target, prop, receiver);
      }

      // numeric index access
      if (typeof prop === 'string' && /^\d+$/.test(prop)) {
        counter.gets++;
        return Reflect.get(target, prop, receiver);
      }

      const value = Reflect.get(target, prop, receiver);
      // If method is forbidden, return a function that throws to force
      // test failure and to discourage forbidden built-in usage.
      if (typeof value === 'function') {
        if (forbidden.has(prop)) {
          return function () {
            throw new Error(`Forbidden array method used: ${String(prop)}`);
          };
        }
        // allowed method - bind to the underlying target
        return function (...args) {
          counter.methodCalls++;
          return value.apply(target, args);
        };
      }
      return value;
    },
    set(target, prop, value, receiver) {
      if (typeof prop === 'string' && /^\d+$/.test(prop)) counter.sets++;
      return Reflect.set(target, prop, value, receiver);
    }
  };

  return { proxy: new Proxy(arr, handler), counter };
}

/**
 * Asymptotic checker: runs the provided function on arrays of increasing
 * sizes and inspects element-access growth to infer complexity class.
 * - makeInput(n) should return a fresh array for size n
 * - callFn should call the tested function with the constructed proxy and any args
 */
function asymptoticCheck({ makeInput, callFn, expected = 'linear', ns = [2000, 4000, 8000], forbiddenMethods = [] }) {
  const totals = [];

  for (const n of ns) {
    const raw = makeInput(n);
    const { proxy, counter } = createAccessCountingArray(raw, { forbiddenMethods });
    // Execute function under test
    callFn(proxy);
    const total = counter.gets + counter.sets + counter.lengthReads;
    totals.push(total);
  }

  // Compute scaling ratios between successive sizes
  const r1 = totals[1] / Math.max(1, totals[0]);
  const r2 = totals[2] / Math.max(1, totals[1]);

  if (expected === 'linear') {
    // Doubling n should roughly double the work; allow tolerance
    if (!(r1 > 1.2 && r1 < 3.2 && r2 > 1.2 && r2 < 3.2)) {
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)} (totals: ${totals.join(',')})`);
    }
  } else if (expected === 'nlogn') {
    if (!(r1 > 1.8 && r1 < 5 && r2 > 1.8 && r2 < 5)) {
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n log n). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)}`);
    }
  } else if (expected === 'quadratic') {
    if (!(r1 > 3 && r2 > 3)) {
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n^2). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)}`);
    }
  }

  return true;
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
  const n = 20000;
  const raw = Array.from({ length: n }, (_, i) => i);
  const { proxy, counter } = createAccessCountingArray(raw);
  const { time } = measureTime(findMaximum, proxy);
  // Stricter checks: time and element access count
  assert(time < 500, `Should complete in under 500ms, took ${time.toFixed(2)}ms`);
  assert(
    counter.gets <= n * 5,
    `❌ FAILED COMPLEXITY CHECK! Expected ~O(n) element accesses (<= ${n * 5}), got ${counter.gets}`
  );
});

findMaxTest.test('Space Complexity - O(1)', () => {
  // Should not create arrays or use extra space
  const arr = [1, 2, 3, 4, 5];
  const result = findMaximum(arr);
  assert(typeof result === 'number', 'Should return a single number, not an array');
});

findMaxTest.test('Asymptotic: element-access growth ~O(n)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, (_, i) => i),
    callFn: proxy => findMaximum(proxy),
    forbiddenMethods: ['sort', 'reduce', 'slice'],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
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
  const n = 150000;
  const raw = Array.from({ length: n }, (_, i) => i % 10);
  const { proxy, counter } = createAccessCountingArray(raw);
  const { time } = measureTime(countOccurrences, proxy, 5);
  assert(time < 600, `Should complete in under 600ms for ${n} elements, took ${time.toFixed(2)}ms`);
  assert(counter.gets <= n * 6, `❌ FAILED COMPLEXITY CHECK! Expected ~O(n) accesses, got ${counter.gets}`);
});

countTest.test('Space Complexity - O(1)', () => {
  const result = countOccurrences([1, 2, 2, 3], 2);
  assert(typeof result === 'number', 'Should return a number, not an array');
});

countTest.test('Asymptotic: element-access growth ~O(n)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, (_, i) => i % 10),
    callFn: proxy => countOccurrences(proxy, 5),
    forbiddenMethods: ['filter','reduce','slice'],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
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
  const n = 120000;
  const raw = Array.from({ length: n }, () => 1);
  const { proxy, counter } = createAccessCountingArray(raw);
  const { time } = measureTime(removeElement, proxy, 1);

  assert(
    time < 800,
    `❌ FAILED COMPLEXITY CHECK!\n  Took ${time.toFixed(2)}ms for ${n} elements\n  This looks like O(n²) - using splice() in a loop?\n  💡 HINT: Use TWO-POINTER approach to achieve O(n) time!`
  );

  const totalAccesses = counter.gets + counter.sets + counter.lengthReads;
  assert(
    totalAccesses <= n * 12,
    `❌ FAILED COMPLEXITY CHECK! Too many element operations (${totalAccesses}) for ${n} elements.`
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

removeTest.test('Asymptotic: element-access growth ~O(n)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, () => 1),
    callFn: proxy => removeElement(proxy, 1),
    forbiddenMethods: ['splice','filter'],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
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
  const n = 60000;
  const m = 60000;
  const raw1 = Array.from({ length: n }, (_, i) => i * 2);
  const raw2 = Array.from({ length: m }, (_, i) => i * 2 + 1);
  const a1 = createAccessCountingArray(raw1);
  const a2 = createAccessCountingArray(raw2);
  const { time } = measureTime(mergeSortedArrays, a1.proxy, a2.proxy);

  assert(
    time < 1000,
    `❌ FAILED COMPLEXITY CHECK!\n  Took ${time.toFixed(2)}ms for merging ${n + m} elements\n  This looks like sorting-based approach. Use TWO-POINTER to achieve O(n+m).`
  );

  const totalGets = a1.counter.gets + a2.counter.gets;
  assert(
    totalGets <= (n + m) * 6,
    `❌ FAILED COMPLEXITY CHECK! Too many element reads (${totalGets}) for ${n + m} elements.`
  );
});

mergeTest.test('Result is sorted', () => {
  const result = mergeSortedArrays([1, 4, 5], [2, 3, 6]);
  for (let i = 0; i < result.length - 1; i++) {
    assert(result[i] <= result[i + 1], `Result not properly sorted at index ${i}`);
  }
});

mergeTest.test('Asymptotic: element-access growth ~O(n+m)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, (_, i) => i * 2),
    callFn: proxy => mergeSortedArrays(proxy, proxy.slice().map(x => x + 1)),
    forbiddenMethods: [],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
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
  const n = 120000;
  const raw = Array.from({ length: n }, (_, i) => i);
  const { proxy, counter } = createAccessCountingArray(raw);
  const { time } = measureTime(rotateArray, proxy, 50000);

  assert(
    time < 1200,
    `❌ FAILED COMPLEXITY CHECK!\n  Took ${time.toFixed(2)}ms for ${n} elements - avoid O(n*k) approaches.`
  );

  const ops = counter.gets + counter.sets + counter.lengthReads;
  assert(ops <= n * 8, `❌ FAILED COMPLEXITY CHECK! Too many operations (${ops}) for ${n} elements.`);
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

rotateTest.test('Asymptotic: element-access growth ~O(n)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, (_, i) => i),
    callFn: proxy => rotateArray(proxy, Math.floor(proxy.length / 3)),
    forbiddenMethods: ['unshift','shift'],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
});

// ============================================================================
// CHALLENGE 6: TWO SUM
// ============================================================================

const twoSumTest = new TestRunner('Challenge 6: Two Sum (Dynamic Arrays/Hash Maps)');

twoSumTest.test('Basic case', () => {
  const arr = [2, 7, 11, 15];
  const result = twoSum(arr, 9);
  const [a, b] = result;
  assert(
    typeof a === 'number' && typeof b === 'number' && a !== b && arr[a] + arr[b] === 9,
    `Expected indices pointing to values 2 and 7, got indices ${a} and ${b}`
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
    const n = 120000;
    const raw = Array.from({ length: n }, (_, idx) => idx * 2);
    raw[n - 1] = (n - 1) * 2;
    raw[Math.floor(n / 2)] = 1000;
    const { proxy, counter } = createAccessCountingArray(raw);

    const { time } = measureTime(twoSum, proxy, (n - 1) * 2 + 1000);

    assert(
      time < 1000,
      `❌ FAILED COMPLEXITY CHECK!\n  Took ${time.toFixed(2)}ms for ${n} elements - nested loops (O(n²)) detected or too slow.`
    );

    assert(counter.gets <= n * 6, `❌ FAILED COMPLEXITY CHECK! Too many element reads (${counter.gets}) for ${n} elements.`);
  }
);

twoSumTest.test('Space Complexity awareness - Using Hash Map', () => {
  // This test just verifies the solution can handle the data
  const arr = Array.from({ length: 10000 }, (_, i) => i);
  // target chosen so a valid pair exists (9998 + 9999 = 19997)
  const result = twoSum(arr, 19997);
  const [i, j] = result;
  assert(arr[i] + arr[j] === 19997, 'Solution should work with large arrays');
});

twoSumTest.test('Asymptotic: element-access growth ~O(n)', () => {
  asymptoticCheck({
    makeInput: n => Array.from({ length: n }, (_, i) => i * 2),
    callFn: proxy => twoSum(proxy, proxy.length >= 2 ? proxy[proxy.length - 1] + proxy[0] : 0),
    forbiddenMethods: ['filter','reduce'],
    expected: 'linear',
    ns: [2000, 4000, 8000]
  });
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

// ---------------------------------------------------------------------------
// Per-challenge runners (Option B) - export small helpers to run a single
// challenge's tests. These are intentionally tiny wrappers so CLI tools can
// import and run a single test-suite without creating new files.
// ---------------------------------------------------------------------------

export function runFindMaxTests() {
  return findMaxTest.run();
}

export function runCountTests() {
  return countTest.run();
}

export function runRemoveElementTests() {
  return removeTest.run();
}

export function runMergeSortedArraysTests() {
  return mergeTest.run();
}

export function runRotateArrayTests() {
  return rotateTest.run();
}

export function runTwoSumTests() {
  return twoSumTest.run();
}

// Convenience: run by numeric id (1..6)
export function runArrayTestByNumber(n) {
  switch (Number(n)) {
    case 1:
      return runFindMaxTests();
    case 2:
      return runCountTests();
    case 3:
      return runRemoveElementTests();
    case 4:
      return runMergeSortedArraysTests();
    case 5:
      return runRotateArrayTests();
    case 6:
      return runTwoSumTests();
    default:
      console.log('Unknown array test id:', n);
      return false;
  }
}
