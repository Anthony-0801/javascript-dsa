/**
 * HASH-TABLE CHALLENGES TEST SUITE
 * ===============================
 * Comprehensive tests verifying correctness and basic complexity for
 * hash-table related challenge implementations.
 */

import {
  containsDuplicates
} from '../challenges/hash-table-challenges/01-contains-duplicates.js';
import { countFrequencies } from '../challenges/hash-table-challenges/02-count-frequencies.js';
import { twoSum } from '../challenges/hash-table-challenges/03-two-sum.js';
import { isAnagram } from '../challenges/hash-table-challenges/04-valid-anagram.js';
import { firstUniqueChar } from '../challenges/hash-table-challenges/05-first-unique-character.js';
import { intersection } from '../challenges/hash-table-challenges/06-intersection-of-arrays.js';
import { subarraySumEqualsK } from '../challenges/hash-table-challenges/07-subarray-sum-equals-k.js';
import { groupAnagrams } from '../challenges/hash-table-challenges/08-group-anagrams.js';
import { topKFrequent } from '../challenges/hash-table-challenges/09-top-k-frequent.js';
import { isValidSudoku } from '../challenges/hash-table-challenges/10-valid-sudoku.js';

// ============================================================================
// Test runner + helpers (borrowed from array.test.js style)
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
  if (!condition) throw new Error(message);
}

function deepEqual(actual, expected) {
  if (typeof expected === 'object' && expected !== null) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  } else {
    if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`);
  }
}

class OperationCounter {
  constructor() { this.count = 0; }
  increment() { this.count++; }
  getComplexity(n) {
    if (this.count <= n + 5) return 'O(n)';
    if (this.count <= n * Math.log(n) + 5) return 'O(n log n)';
    if (this.count <= n * 10) return '~O(n)';
    if (this.count <= n * n / 2) return 'O(n²)';
    return `O(unknown) - ${this.count} ops for n=${n}`;
  }
}

function measureTime(fn, arr, ...args) {
  const start = performance.now();
  const result = fn(arr, ...args);
  const end = performance.now();
  return { result, time: end - start };
}

function createAccessCountingArray(arr, options = {}) {
  const forbidden = new Set(options.forbiddenMethods || []);
  const counter = { gets: 0, sets: 0, lengthReads: 0, methodCalls: 0 };
  const handler = {
    get(target, prop, receiver) {
      if (prop === 'length') { counter.lengthReads++; return Reflect.get(target, prop, receiver); }
      if (typeof prop === 'string' && /^\d+$/.test(prop)) { counter.gets++; return Reflect.get(target, prop, receiver); }
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === 'function') {
        if (forbidden.has(prop)) return function () { throw new Error(`Forbidden array method used: ${String(prop)}`); };
        return function (...args) { counter.methodCalls++; return value.apply(target, args); };
      }
      return value;
    },
    set(target, prop, value, receiver) { if (typeof prop === 'string' && /^\d+$/.test(prop)) counter.sets++; return Reflect.set(target, prop, value, receiver); }
  };
  return { proxy: new Proxy(arr, handler), counter };
}

function asymptoticCheck({ makeInput, callFn, expected = 'linear', ns = [2000, 4000, 8000], forbiddenMethods = [] }) {
  const totals = [];
  for (const n of ns) {
    const raw = makeInput(n);
    const { proxy, counter } = createAccessCountingArray(raw, { forbiddenMethods });
    callFn(proxy);
    const total = counter.gets + counter.sets + counter.lengthReads;
    totals.push(total);
  }
  const r1 = totals[1] / Math.max(1, totals[0]);
  const r2 = totals[2] / Math.max(1, totals[1]);
  if (expected === 'linear') {
    if (!(r1 > 1.2 && r1 < 3.2 && r2 > 1.2 && r2 < 3.2)) {
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)} (totals: ${totals.join(',')})`);
    }
  } else if (expected === 'nlogn') {
    if (!(r1 > 1.8 && r1 < 5 && r2 > 1.8 && r2 < 5)) {
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n log n). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)}`);
    }
  }
  return true;
}

// ============================================================================
// CHALLENGE TESTS
// ============================================================================

const t1 = new TestRunner('01-Contains Duplicates');
t1.test('basic true/false', () => { deepEqual(containsDuplicates([1,2,3,1]), true); deepEqual(containsDuplicates([1,2,3]), false); });
t1.test('type handling', () => { deepEqual(containsDuplicates([]), false); });
t1.test('Asymptotic: containsDuplicates ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i % 2), callFn: proxy => containsDuplicates(proxy), expected: 'linear' });
});

const t2 = new TestRunner('02-Count Frequencies');
t2.test('basic counts', () => { deepEqual(countFrequencies(['a','b','a','c','b','a']), { a: 3, b: 2, c: 1 }); });
t2.test('asymptotic check - linear', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i % 10), callFn: proxy => countFrequencies(proxy), expected: 'linear' });
});

const t3 = new TestRunner('03-Two Sum');
t3.test('basic solution', () => { const ans = twoSum([2,7,11,15], 9); assert(Array.isArray(ans) && ans.length === 2, 'should return two indices'); });
t3.test('time complexity - ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i), callFn: proxy => twoSum(proxy, -1), expected: 'linear' });
});

const t4 = new TestRunner('04-Valid Anagram');
t4.test('anagram cases', () => { deepEqual(isAnagram('anagram','nagaram'), true); deepEqual(isAnagram('rat','car'), false); });
t4.test('Asymptotic: isAnagram ~O(n)', () => {
  asymptoticCheck({ makeInput: n => 'a'.repeat(n), callFn: proxy => isAnagram(proxy, proxy), expected: 'linear' });
});

const t5 = new TestRunner('05-First Unique Character');
t5.test('basic indices', () => { deepEqual(firstUniqueChar('leetcode'), 0); deepEqual(firstUniqueChar('loveleetcode'), 2); deepEqual(firstUniqueChar('aabb'), -1); });
t5.test('Asymptotic: firstUniqueChar ~O(n)', () => {
  asymptoticCheck({ makeInput: n => 'a'.repeat(n), callFn: proxy => firstUniqueChar(proxy), expected: 'linear' });
});

const t6 = new TestRunner('06-Intersection of Arrays');
t6.test('basic intersection', () => { deepEqual(new Set(intersection([1,2,2,1],[2,2])).has(2), true); });
t6.test('Asymptotic: intersection ~O(n+m)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i % 100), callFn: proxy => intersection(proxy, proxy.slice(0, Math.floor(proxy.length/2))), expected: 'linear' });
});

const t7 = new TestRunner('07-Subarray Sum Equals K');
t7.test('basic count', () => { deepEqual(subarraySumEqualsK([1,1,1],2), 2); });
t7.test('complexity - linear', () => { asymptoticCheck({ makeInput: n => Array.from({ length: n }, () => 1), callFn: proxy => subarraySumEqualsK(proxy, Math.floor(proxy.length/2)), expected: 'linear' }); });

const t8 = new TestRunner('08-Group Anagrams');
t8.test('grouping', () => { const out = groupAnagrams(['eat','tea','tan','ate','nat','bat']); assert(Array.isArray(out)); assert(out.flat().length === 6); });
t8.test('Asymptotic: groupAnagrams reasonable performance', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => String(i)), callFn: proxy => groupAnagrams(proxy), expected: 'nlogn' });
});

const t9 = new TestRunner('09-Top K Frequent');
t9.test('basic top k', () => { deepEqual(new Set(topKFrequent([1,1,1,2,2,3],2)), new Set([1,2])); });
t9.test('complexity - nlogn allowed', () => { asymptoticCheck({ makeInput: n => { const arr = []; for (let i=0;i<n;i++) arr.push(i%100); return arr; }, callFn: proxy => topKFrequent(proxy, 10), expected: 'nlogn' }); });

const t10 = new TestRunner('10-Valid Sudoku');
t10.test('valid board', () => { const board = [ ['5','3','.','.','7','.','.','.','.'], ['6','.','.','1','9','5','.','.','.'], ['.','9','8','.','.','.','.','6','.'], ['8','.','.','.','6','.','.','.','3'], ['4','.','.','8','.','3','.','.','1'], ['7','.','.','.','2','.','.','.','6'], ['.','6','.','.','.','.','2','8','.'], ['.','.','.','4','1','9','.','.','5'], ['.','.','.','.','8','.','.','7','9'] ]; deepEqual(isValidSudoku(board), true); });

export function runHashTableTest1() { return t1.run(); }
export function runHashTableTest2() { return t2.run(); }
export function runHashTableTest3() { return t3.run(); }
export function runHashTableTest4() { return t4.run(); }
export function runHashTableTest5() { return t5.run(); }
export function runHashTableTest6() { return t6.run(); }
export function runHashTableTest7() { return t7.run(); }
export function runHashTableTest8() { return t8.run(); }
export function runHashTableTest9() { return t9.run(); }
export function runHashTableTest10() { return t10.run(); }

export function runAllHashTableTests() {
  const suites = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10];
  let allPassed = true;
  for (const s of suites) if (!s.run()) allPassed = false;
  if (!allPassed) process.exitCode = 1;
  return allPassed;
}

export default runAllHashTableTests;
