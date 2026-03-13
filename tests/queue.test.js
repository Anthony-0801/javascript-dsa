/**
 * QUEUE CHALLENGES TEST SUITE
 * ===========================
 * Comprehensive tests for the queue challenges. Mirrors style from
 * `array.test.js` and `linked-list.test.js` to provide correctness and
 * basic complexity checks where applicable.
 */

import { simulatePrintQueue } from '../challenges/queue-challenges/01-simulate-print-queue.js';
import { timeNeededToBuyTickets } from '../challenges/queue-challenges/02-time-needed-to-buy-tickets.js';
import { josephus } from '../challenges/queue-challenges/03-josephus-problem.js';
import { reverseFirstK } from '../challenges/queue-challenges/04-reverse-first-k-elements.js';
import { hotPotato } from '../challenges/queue-challenges/05-hot-potato.js';
import { recentCounter } from '../challenges/queue-challenges/06-recent-counter.js';
import { createQueueUsingStacks } from '../challenges/queue-challenges/07-queue-using-stacks.js';
import { generateBinaryNumbers } from '../challenges/queue-challenges/08-generate-binary-numbers.js';
import { movingAverage } from '../challenges/queue-challenges/09-moving-average-from-data-stream.js';
import { createCircularQueue } from '../challenges/queue-challenges/10-circular-queue.js';

// Lightweight test runner copied style from array.test.js
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
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

// Simple performance helpers for queue tests
function measureTime(fn, input, ...args) {
  const start = performance.now();
  const res = fn(input, ...args);
  const end = performance.now();
  return { result: res, time: end - start };
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
      throw new Error(`❌ FAILED ASYMPTOTIC CHECK: expected ~O(n). Ratios: ${r1.toFixed(2)}, ${r2.toFixed(2)}`);
    }
  }
  return true;
}


// ============================================================================
// Tests
// ============================================================================

const printQueueTest = new TestRunner('Challenge 1: Simulate Print Queue');

printQueueTest.test('Basic priority case', () => {
  const res = simulatePrintQueue([2, 1, 3, 2], 2);
  deepEqual(res, 1);
});

printQueueTest.test('Ties by order preserved', () => {
  const res = simulatePrintQueue([1,1,1], 1);
  deepEqual(res, 2);
});

printQueueTest.test('Asymptotic: simulatePrintQueue ~O(n log n) worst-case', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, () => 1), callFn: proxy => simulatePrintQueue(proxy, Math.floor(proxy.length/2)), expected: 'nlogn' });
});

const ticketTest = new TestRunner('Challenge 2: Time Needed to Buy Tickets');

ticketTest.test('Basic example', () => {
  const t = timeNeededToBuyTickets([2,3,2], 2);
  deepEqual(t, 6);
});

ticketTest.test('Asymptotic: timeNeededToBuyTickets ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i % 5 + 1), callFn: proxy => timeNeededToBuyTickets(proxy, Math.floor(proxy.length/2)), expected: 'linear' });
});

const josephusTest = new TestRunner('Challenge 3: Josephus Problem');

josephusTest.test('Small example', () => {
  deepEqual(josephus(7, 3), 3);
});

josephusTest.test('Asymptotic: josephus reasonable performance', () => {
  const ns = [2000, 4000, 8000];
  const times = ns.map(n => {
    const start = performance.now();
    josephus(n, 3);
    return performance.now() - start;
  });
  const r1 = times[1] / Math.max(1, times[0]);
  const r2 = times[2] / Math.max(1, times[1]);
  if (!(r1 > 1.0 && r2 > 1.0)) throw new Error('josephus performance unexpected');
});

const reverseTest = new TestRunner('Challenge 4: Reverse First K Elements');

reverseTest.test('Reverse first 3 of 5', () => {
  deepEqual(reverseFirstK([1,2,3,4,5], 3), [3,2,1,4,5]);
});

reverseTest.test('Asymptotic: reverseFirstK ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i), callFn: proxy => reverseFirstK(proxy, Math.floor(proxy.length/3)), expected: 'linear' });
});

const hotPotatoTest = new TestRunner('Challenge 5: Hot Potato');

hotPotatoTest.test('Basic winner', () => {
  deepEqual(hotPotato(['A','B','C','D'], 3), 'A');
});

hotPotatoTest.test('Asymptotic: hotPotato ~O(n*k) bounded', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => String(i)), callFn: proxy => hotPotato(proxy, 5), expected: 'linear' });
});

const recentCounterTest = new TestRunner('Challenge 6: Recent Counter');

recentCounterTest.test('Count in window', () => {
  const times = [100, 200, 300, 800];
  deepEqual(recentCounter(times, 500), 2); // last=800 -> window [300,800]
});

recentCounterTest.test('Asymptotic: recentCounter ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i), callFn: proxy => recentCounter(proxy, 100), expected: 'linear' });
});

const stacksQueueTest = new TestRunner('Challenge 7: Queue Using Stacks');

stacksQueueTest.test('Enqueue and dequeue order', () => {
  const q = createQueueUsingStacks();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  deepEqual(q.dequeue(), 1);
  deepEqual(q.peek(), 2);
});

stacksQueueTest.test('Asymptotic: queueUsingStacks operations amortized ~O(1)', () => {
  const q = createQueueUsingStacks();
  const n = 50000;
  const start = performance.now();
  for (let i=0;i<n;i++) q.enqueue(i);
  for (let i=0;i<n;i++) q.dequeue();
  const end = performance.now();
  assert(end - start < 2000, `queueUsingStacks should be amortized O(1) per op; took ${(end - start).toFixed(2)}ms`);
});

const genBinaryTest = new TestRunner('Challenge 8: Generate Binary Numbers');

genBinaryTest.test('Generate first 5 binaries', () => {
  deepEqual(generateBinaryNumbers(5), ['1','10','11','100','101']);
});

genBinaryTest.test('Asymptotic: generateBinaryNumbers ~O(n)', () => {
  const ns = [2000, 4000, 8000];
  const times = ns.map(n => {
    const start = performance.now();
    generateBinaryNumbers(n);
    return performance.now() - start;
  });
  const r1 = times[1] / Math.max(1, times[0]);
  const r2 = times[2] / Math.max(1, times[1]);
  if (!(r1 > 1.2 && r1 < 3.2 && r2 > 1.2 && r2 < 3.2)) {
    throw new Error(`❌ FAILED ASYMPTOTIC CHECK (generateBinaryNumbers): ratios ${r1.toFixed(2)}, ${r2.toFixed(2)}`);
  }
});

const movingAvgTest = new TestRunner('Challenge 9: Moving Average from Data Stream');

movingAvgTest.test('Basic moving averages', () => {
  deepEqual(movingAverage([1,3,2,6], 3).map(x => Number(x.toFixed(5))), [1,2,2,3.66667]);
});

movingAvgTest.test('Asymptotic: movingAverage ~O(n)', () => {
  asymptoticCheck({ makeInput: n => Array.from({ length: n }, (_, i) => i), callFn: proxy => movingAverage(proxy, Math.max(1, Math.floor(proxy.length/10))), expected: 'linear' });
});

const circularTest = new TestRunner('Challenge 10: Circular Queue');

circularTest.test('Basic circular queue operations', () => {
  const q = createCircularQueue(3);
  assert(q.isEmpty(), 'Should start empty');
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  assert(q.isFull(), 'Should be full');
  deepEqual(q.dequeue(), 1);
  q.enqueue(4);
  deepEqual(q.peek(), 2);
});

circularTest.test('Performance: circular queue enqueue/dequeue should be fast', () => {
  const n = 200000;
  const q = createCircularQueue(n);
  const start = performance.now();
  for (let i = 0; i < n; i++) q.enqueue(i);
  for (let i = 0; i < n; i++) q.dequeue();
  const end = performance.now();
  assert(end - start < 2000, `Queue operations should be fast; took ${ (end - start).toFixed(2)}ms`);
});

// ============================================================================
// RUN ALL QUEUE TESTS
// ============================================================================

export function runAllQueueTests() {
  const suites = [
    printQueueTest,
    ticketTest,
    josephusTest,
    reverseTest,
    hotPotatoTest,
    recentCounterTest,
    stacksQueueTest,
    genBinaryTest,
    movingAvgTest,
    circularTest,
  ];

  const results = suites.map(s => s.run());
  const allPassed = results.every(r => r === true);
  console.log(`${'='.repeat(70)}`);
  console.log(`OVERALL QUEUE TESTS: ${allPassed ? '✓ ALL PASSED' : '✗ SOME FAILED'}`);
  console.log(`${'='.repeat(70)}`);
  return allPassed;
}

// Per-challenge runners (1..10)
export function runQueueTest1() { return printQueueTest.run(); }
export function runQueueTest2() { return ticketTest.run(); }
export function runQueueTest3() { return josephusTest.run(); }
export function runQueueTest4() { return reverseTest.run(); }
export function runQueueTest5() { return hotPotatoTest.run(); }
export function runQueueTest6() { return recentCounterTest.run(); }
export function runQueueTest7() { return stacksQueueTest.run(); }
export function runQueueTest8() { return genBinaryTest.run(); }
export function runQueueTest9() { return movingAvgTest.run(); }
export function runQueueTest10() { return circularTest.run(); }

export function runQueueTestByNumber(n) {
  switch(Number(n)) {
    case 1: return runQueueTest1();
    case 2: return runQueueTest2();
    case 3: return runQueueTest3();
    case 4: return runQueueTest4();
    case 5: return runQueueTest5();
    case 6: return runQueueTest6();
    case 7: return runQueueTest7();
    case 8: return runQueueTest8();
    case 9: return runQueueTest9();
    case 10: return runQueueTest10();
    default: console.log('Unknown queue test id:', n); return false;
  }
}
