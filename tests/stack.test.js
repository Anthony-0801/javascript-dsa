/**
 * STACK CHALLENGES TEST SUITE
 * ===========================
 * Tests verify correctness and basic complexity hints for stack challenges.
 */

import { isValidParentheses } from '../challenges/stack-challenges/01-valid-parentheses.js';
import { removeAdjacentDuplicates } from '../challenges/stack-challenges/02-remove-adjacent-duplicates.js';
import { backspaceCompare } from '../challenges/stack-challenges/03-backspace-string-compare.js';
import { evalRPN } from '../challenges/stack-challenges/04-evaluate-reverse-polish-notation.js';
import { createStack, push, pop, peek, isEmpty as stIsEmpty, size as stSize } from '../challenges/stack-challenges/05-implement-stack-using-array.js';
import { detectDataStructure } from '../challenges/stack-challenges/06-stack-vs-queue.js';
import { createMinStack, minPush, minPop, minTop, getMin } from '../challenges/stack-challenges/07-min-stack.js';
import { sortStack } from '../challenges/stack-challenges/08-sort-stack.js';
import { infixToPostfix } from '../challenges/stack-challenges/09-infix-to-postfix.js';
import { nextGreaterElement } from '../challenges/stack-challenges/10-next-greater-element.js';

// ============================================================================
// TEST FRAMEWORK (copied/adapted from array.test.js)
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

// Reuse complexity helpers for a couple of tests
function createAccessCountingArray(arr, options = {}) {
  const forbidden = new Set(options.forbiddenMethods || []);
  const counter = { gets: 0, sets: 0, lengthReads: 0, methodCalls: 0 };
  const handler = {
    get(target, prop, receiver) {
      if (prop === 'length') {
        counter.lengthReads++;
        return Reflect.get(target, prop, receiver);
      }
      if (typeof prop === 'string' && /^\d+$/.test(prop)) {
        counter.gets++;
        return Reflect.get(target, prop, receiver);
      }
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === 'function') {
        if (forbidden.has(prop)) {
          return function () { throw new Error(`Forbidden array method used: ${String(prop)}`); };
        }
        return function (...args) { counter.methodCalls++; return value.apply(target, args); };
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
  }
  return true;
}

// ============================================================================
// CHALLENGE 1: VALID PARENTHESES
// ============================================================================

const validParensTests = new TestRunner('Challenge 1: Valid Parentheses');

validParensTests.test('Simple valid', () => {
  deepEqual(isValidParentheses('()[]{}'), true);
});

validParensTests.test('Simple invalid', () => {
  deepEqual(isValidParentheses('(]'), false);
});

validParensTests.test('Empty string', () => {
  deepEqual(isValidParentheses(''), true);
});

validParensTests.test('Nested valid', () => {
  deepEqual(isValidParentheses('([{}])'), true);
});

// ============================================================================
// CHALLENGE 2: REMOVE ADJACENT DUPLICATES
// ============================================================================

const removeAdjTests = new TestRunner('Challenge 2: Remove Adjacent Duplicates');

removeAdjTests.test('Example case', () => {
  deepEqual(removeAdjacentDuplicates('abbaca'), 'ca');
});

removeAdjTests.test('No duplicates', () => {
  deepEqual(removeAdjacentDuplicates('abcd'), 'abcd');
});

removeAdjTests.test('All duplicates collapse', () => {
  deepEqual(removeAdjacentDuplicates('aaaa'), '');
});

removeAdjTests.test('Asymptotic: O(n) expected', () => {
  asymptoticCheck({ makeInput: n => 'a'.repeat(n).split(''), callFn: proxy => removeAdjacentDuplicates(proxy.join('')), expected: 'linear' });
});

// ============================================================================
// CHALLENGE 3: BACKSPACE STRING COMPARE
// ============================================================================

const backspaceTests = new TestRunner('Challenge 3: Backspace String Compare');

backspaceTests.test('Basic equal', () => {
  deepEqual(backspaceCompare('ab#c', 'ad#c'), true);
});

backspaceTests.test('Different results', () => {
  deepEqual(backspaceCompare('a#c', 'b'), false);
});

backspaceTests.test('Empty after backspaces', () => {
  deepEqual(backspaceCompare('##a#', ''), true);
});

// ============================================================================
// CHALLENGE 4: EVALUATE RPN
// ============================================================================

const rpnTests = new TestRunner('Challenge 4: Evaluate RPN');

rpnTests.test('Example 1', () => {
  deepEqual(evalRPN(['2','1','+','3','*']), 9);
});

rpnTests.test('Example 2', () => {
  deepEqual(evalRPN(['4','13','5','/','+']), 6);
});

rpnTests.test('Single number', () => {
  deepEqual(evalRPN(['42']), 42);
});

// ============================================================================
// CHALLENGE 5: IMPLEMENT STACK USING ARRAY
// ============================================================================

const implStackTests = new TestRunner('Challenge 5: Implement Stack Using Array');

implStackTests.test('Create and basic ops', () => {
  const st = createStack();
  push(st, 1);
  push(st, 2);
  deepEqual(size(st), 2);
  deepEqual(peek(st), 2);
  deepEqual(pop(st), 2);
  deepEqual(pop(st), 1);
  deepEqual(stIsEmpty(st), true);
});

implStackTests.test('LIFO ordering', () => {
  const st = createStack();
  push(st, 'a'); push(st, 'b'); push(st, 'c');
  deepEqual(pop(st), 'c'); deepEqual(pop(st), 'b'); deepEqual(pop(st), 'a');
});

// ============================================================================
// CHALLENGE 6: STACK VS QUEUE
// ============================================================================

const svqTests = new TestRunner('Challenge 6: Stack vs Queue');

svqTests.test('Detect stack', () => {
  const input = { ops: ['push 1','push 2','pop'], outputs: [2] };
  deepEqual(detectDataStructure(input), 'stack');
});

svqTests.test('Detect queue', () => {
  const input = { ops: ['push 1','push 2','pop'], outputs: [1] };
  deepEqual(detectDataStructure(input), 'queue');
});

svqTests.test('Detect both (single push/pop)', () => {
  const input = { ops: ['push 1','pop'], outputs: [1] };
  deepEqual(detectDataStructure(input), 'both');
});

// ============================================================================
// CHALLENGE 7: MIN STACK
// ============================================================================

const minStackTests = new TestRunner('Challenge 7: Min Stack');

minStackTests.test('Min operations', () => {
  const ms = createMinStack();
  minPush(ms, -2);
  minPush(ms, 0);
  minPush(ms, -3);
  deepEqual(getMin(ms), -3);
  minPop(ms);
  deepEqual(minTop(ms), 0);
  deepEqual(getMin(ms), -2);
});

// ============================================================================
// CHALLENGE 8: SORT STACK
// ============================================================================

const sortStackTests = new TestRunner('Challenge 8: Sort Stack');

sortStackTests.test('Sort ascending with smallest on top', () => {
  const input = [1, 3, 2, 4]; // bottom->top: 1 is bottom, 4 is top
  const sorted = sortStack(input);
  // after sorting smallest on top, top element should be smallest (1)
  deepEqual(sorted[sorted.length - 1], Math.min(...input));
});

// ============================================================================
// CHALLENGE 9: INFIX TO POSTFIX
// ============================================================================

const infixTests = new TestRunner('Challenge 9: Infix to Postfix');

infixTests.test('Simple expression', () => {
  deepEqual(infixToPostfix('(a+b)*c'), 'ab+c*');
});

infixTests.test('With precedence', () => {
  deepEqual(infixToPostfix('a+b*c'), 'abc*+');
});

// ============================================================================
// CHALLENGE 10: NEXT GREATER ELEMENT
// ============================================================================

const ngeTests = new TestRunner('Challenge 10: Next Greater Element');

ngeTests.test('Basic case', () => {
  deepEqual(nextGreaterElement([4,5,2,25]), [5,25,25,-1]);
});

ngeTests.test('All decreasing', () => {
  deepEqual(nextGreaterElement([5,4,3,2,1]), [-1,-1,-1,-1,-1]);
});

// ============================================================================
// RUN ALL TESTS
// ============================================================================

const suites = [
  validParensTests,
  removeAdjTests,
  backspaceTests,
  rpnTests,
  implStackTests,
  svqTests,
  minStackTests,
  sortStackTests,
  infixTests,
  ngeTests,
];

let allPassed = true;
for (const s of suites) {
  const ok = s.run();
  allPassed = allPassed && ok;
}

if (!allPassed) process.exit(1);
