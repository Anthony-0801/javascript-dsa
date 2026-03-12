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

const ticketTest = new TestRunner('Challenge 2: Time Needed to Buy Tickets');

ticketTest.test('Basic example', () => {
  const t = timeNeededToBuyTickets([2,3,2], 2);
  deepEqual(t, 6);
});

const josephusTest = new TestRunner('Challenge 3: Josephus Problem');

josephusTest.test('Small example', () => {
  deepEqual(josephus(7, 3), 3);
});

const reverseTest = new TestRunner('Challenge 4: Reverse First K Elements');

reverseTest.test('Reverse first 3 of 5', () => {
  deepEqual(reverseFirstK([1,2,3,4,5], 3), [3,2,1,4,5]);
});

const hotPotatoTest = new TestRunner('Challenge 5: Hot Potato');

hotPotatoTest.test('Basic winner', () => {
  deepEqual(hotPotato(['A','B','C','D'], 3), 'A');
});

const recentCounterTest = new TestRunner('Challenge 6: Recent Counter');

recentCounterTest.test('Count in window', () => {
  const times = [100, 200, 300, 800];
  deepEqual(recentCounter(times, 500), 2); // last=800 -> window [300,800]
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

const genBinaryTest = new TestRunner('Challenge 8: Generate Binary Numbers');

genBinaryTest.test('Generate first 5 binaries', () => {
  deepEqual(generateBinaryNumbers(5), ['1','10','11','100','101']);
});

const movingAvgTest = new TestRunner('Challenge 9: Moving Average from Data Stream');

movingAvgTest.test('Basic moving averages', () => {
  deepEqual(movingAverage([1,3,2,6], 3).map(x => Number(x.toFixed(5))), [1,2,2,3.66667]);
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
