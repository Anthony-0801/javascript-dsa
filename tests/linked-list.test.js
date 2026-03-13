import { ListNode } from '../src/data-structures/linked-list.js';
import { removeNthFromEnd } from '../challenges/linked-list-challenges/01-remove-nth-node.js';
import { deleteAllOccurrences } from '../challenges/linked-list-challenges/02-delete-all-occurrences.js';
import { deleteNodeWithoutHead } from '../challenges/linked-list-challenges/03-delete-node-without-head.js';
import { DoublyLinkedList, DoublyListNode, createDoublyListFromArray } from '../challenges/linked-list-challenges/04-doubly-linked-list.js';
import { reverseLinkedList } from '../challenges/linked-list-challenges/05-reverse-linked-list.js';
import { hasCycle, detectCycleStart } from '../challenges/linked-list-challenges/06-detect-cycle.js';
import { mergeTwoLists } from '../challenges/linked-list-challenges/07-merge-two-sorted-lists.js';
import { deleteDuplicates } from '../challenges/linked-list-challenges/08-remove-duplicates-sorted.js';
import { middleNode } from '../challenges/linked-list-challenges/09-find-middle-node.js';
import { isPalindrome } from '../challenges/linked-list-challenges/10-is-palindrome.js';

// Reuse minimal TestRunner and helpers from array tests
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

function measureTime(fn, input, ...args) {
  const start = performance.now();
  const res = fn(input, ...args);
  const end = performance.now();
  return { result: res, time: end - start };
}

function asymptoticCheckTime({ callFn, makeInput, ns = [2000, 4000, 8000], expected = 'linear' }) {
  const times = [];
  for (const n of ns) {
    const input = makeInput(n);
    const start = performance.now();
    callFn(input);
    times.push(performance.now() - start);
  }
  const r1 = times[1] / Math.max(1, times[0]);
  const r2 = times[2] / Math.max(1, times[1]);
  if (expected === 'linear') {
    if (!(r1 > 1.2 && r1 < 3.2 && r2 > 1.2 && r2 < 3.2)) {
      throw new Error(`❌ FAILED ASYMPTOTIC TIME CHECK: ratios ${r1.toFixed(2)}, ${r2.toFixed(2)} (times: ${times.map(t=>t.toFixed(2)).join(',')})`);
    }
  }
  return true;
}


// helpers to build and convert lists
function buildList(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head, limit = 1000) {
  const result = [];
  let curr = head;
  let i = 0;
  while (curr && i < limit) {
    result.push(curr.value);
    curr = curr.next;
    i += 1;
  }
  return result;
}

// ============================================================================
// Tests
// ============================================================================

// 1. remove nth node
const t1 = new TestRunner('01-remove-nth-node');
t1.test('remove 2nd from end', () => {
  const head = buildList([1, 2, 3, 4, 5]);
  const res = removeNthFromEnd(head, 2);
  deepEqual(listToArray(res), [1, 2, 3, 5]);
});

t1.test('remove head when n equals length', () => {
  const head = buildList([1]);
  const res = removeNthFromEnd(head, 1);
  deepEqual(listToArray(res), []);
});

t1.test('Time complexity - removeNthFromEnd ~O(n)', () => {
  const n = 80000;
  const arr = Array.from({ length: n }, (_, i) => i);
  const head = buildList(arr);
  const { time } = measureTime(removeNthFromEnd, head, 10);
  assert(time < 1200, `removeNthFromEnd should run under 1200ms for ${n} nodes, took ${time.toFixed(2)}ms`);
});

t1.test('Asymptotic: removeNthFromEnd ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, (_, i) => i)), callFn: h => removeNthFromEnd(h, 5) });
});

// 2. delete all occurrences
const t2 = new TestRunner('02-delete-all-occurrences');
t2.test('remove all 2s', () => {
  const head = buildList([1, 2, 2, 3, 2]);
  const res = deleteAllOccurrences(head, 2);
  deepEqual(listToArray(res), [1, 3]);
});

t2.test('no occurrences', () => {
  const head = buildList([1, 3, 4]);
  const res = deleteAllOccurrences(head, 2);
  deepEqual(listToArray(res), [1, 3, 4]);
});

t2.test('Time complexity - deleteAllOccurrences ~O(n)', () => {
  const n = 100000;
  const head = buildList(Array.from({ length: n }, () => 1));
  const { time } = measureTime(deleteAllOccurrences, head, 1);
  assert(time < 2000, `deleteAllOccurrences should run under 2000ms for ${n} nodes, took ${time.toFixed(2)}ms`);
});

t2.test('Asymptotic: deleteAllOccurrences ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, () => 1)), callFn: h => deleteAllOccurrences(h, 1) });
});

// 3. delete node without head
const t3 = new TestRunner('03-delete-node-without-head');
t3.test('delete middle node', () => {
  const head = buildList([4, 5, 1, 9]);
  const node = head.next; // value 5
  const ok = deleteNodeWithoutHead(node);
  assert(ok, 'delete should return true');
  deepEqual(listToArray(head), [4, 1, 9]);
});

t3.test('cannot delete tail', () => {
  const head = buildList([1, 2, 3]);
  const tail = head.next.next;
  const ok = deleteNodeWithoutHead(tail);
  assert(!ok, 'should not delete tail');
});

t3.test('Time complexity - deleteNodeWithoutHead ~O(1) typical', () => {
  const head = buildList([1,2,3,4,5]);
  const node = head.next; // middle node
  const { time } = measureTime(deleteNodeWithoutHead, node);
  assert(time < 50, `deleteNodeWithoutHead should be constant-time-ish, took ${time.toFixed(2)}ms`);
});

// 4. doubly linked list
const t4 = new TestRunner('04-doubly-linked-list');
t4.test('insert and remove', () => {
  const dll = createDoublyListFromArray([1, 2, 3]);
  dll.insertAtHead(0);
  dll.insertAtTail(4);
  const arr = [];
  let cur = dll.head;
  while (cur) {
    arr.push(cur.value);
    cur = cur.next;
  }
  deepEqual(arr, [0, 1, 2, 3, 4]);
  // remove middle node
  dll.remove(dll.head.next.next); // remove 2
  deepEqual(listToArray(dll.head), [0, 1, 3, 4]);
});

t4.test('Doubly list operations should be fast for many nodes', () => {
  const n = 50000;
  const arr = Array.from({ length: n }, (_, i) => i);
  const dll = createDoublyListFromArray(arr);
  const start = performance.now();
  dll.insertAtHead(-1);
  dll.insertAtTail(n+1);
  dll.remove(dll.head.next.next);
  const end = performance.now();
  assert(end - start < 1000, `Doubly list ops took too long: ${(end - start).toFixed(2)}ms`);
});

// 5. reverse linked list
const t5 = new TestRunner('05-reverse-linked-list');
t5.test('reverse', () => {
  const head = buildList([1, 2, 3, 4]);
  const rev = reverseLinkedList(head);
  deepEqual(listToArray(rev), [4, 3, 2, 1]);
});

t5.test('Time complexity - reverseLinkedList ~O(n)', () => {
  const n = 100000;
  const head = buildList(Array.from({ length: n }, (_, i) => i));
  const { time } = measureTime(reverseLinkedList, head);
  assert(time < 1500, `reverseLinkedList should run under 1500ms for ${n} nodes, took ${time.toFixed(2)}ms`);
});

t5.test('Asymptotic: reverseLinkedList ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, (_, i) => i)), callFn: h => reverseLinkedList(h) });
});

// 6. detect cycle
const t6 = new TestRunner('06-detect-cycle');
t6.test('no cycle', () => {
  const head = buildList([1, 2, 3]);
  assert(!hasCycle(head), 'should detect no cycle');
  deepEqual(detectCycleStart(head), null);
});

t6.test('cycle exists', () => {
  const head = buildList([1, 2, 3, 4]);
  head.next.next.next.next = head.next; // create cycle at node 2
  assert(hasCycle(head), 'should detect cycle');
  const start = detectCycleStart(head);
  assert(start && start.value === 2, 'cycle start should be value 2');
});

// 7. merge two sorted lists
const t7 = new TestRunner('07-merge-two-sorted-lists');
t7.test('merge', () => {
  const a = buildList([1, 3, 5]);
  const b = buildList([2, 4, 6]);
  const m = mergeTwoLists(a, b);
  deepEqual(listToArray(m), [1, 2, 3, 4, 5, 6]);
});

t7.test('Time complexity - mergeTwoLists ~O(n+m)', () => {
  const aArr = Array.from({ length: 40000 }, (_, i) => i * 2 + 1);
  const bArr = Array.from({ length: 40000 }, (_, i) => i * 2 + 2);
  const a = buildList(aArr);
  const b = buildList(bArr);
  const { time } = measureTime(mergeTwoLists, a, b);
  assert(time < 1200, `mergeTwoLists should be linear-ish, took ${time.toFixed(2)}ms`);
});

t7.test('Asymptotic: mergeTwoLists ~O(n+m)', () => {
  asymptoticCheckTime({ makeInput: n => [buildList(Array.from({ length: n }, (_, i) => i)), buildList(Array.from({ length: n }, (_, i) => i))], callFn: lists => mergeTwoLists(lists[0], lists[1]) });
});

// 8. remove duplicates (sorted)
const t8 = new TestRunner('08-remove-duplicates-sorted');
t8.test('remove duplicates', () => {
  const head = buildList([1, 1, 2, 3, 3]);
  const res = deleteDuplicates(head);
  deepEqual(listToArray(res), [1, 2, 3]);
});

t8.test('Time complexity - deleteDuplicates ~O(n)', () => {
  const n = 100000;
  const head = buildList(Array.from({ length: n }, (_, i) => Math.floor(i/2)));
  const { time } = measureTime(deleteDuplicates, head);
  assert(time < 1500, `deleteDuplicates should be linear, took ${time.toFixed(2)}ms`);
});

t8.test('Asymptotic: deleteDuplicates ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, (_, i) => Math.floor(i/2))), callFn: h => deleteDuplicates(h) });
});

// 9. middle node
const t9 = new TestRunner('09-find-middle-node');
t9.test('odd length', () => {
  const head = buildList([1, 2, 3, 4, 5]);
  const mid = middleNode(head);
  deepEqual(listToArray(mid), [3, 4, 5]);
});

t9.test('Time complexity - middleNode ~O(n)', () => {
  const n = 120000;
  const head = buildList(Array.from({ length: n }, (_, i) => i));
  const { time } = measureTime(middleNode, head);
  assert(time < 1200, `middleNode should be linear, took ${time.toFixed(2)}ms`);
});

t9.test('Asymptotic: middleNode ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, (_, i) => i)), callFn: h => middleNode(h) });
});

t9.test('even length returns second middle', () => {
  const head = buildList([1, 2, 3, 4]);
  const mid = middleNode(head);
  deepEqual(listToArray(mid), [3, 4]);
});

// 10. is palindrome
const t10 = new TestRunner('10-is-palindrome');
t10.test('palindrome true', () => {
  const head = buildList([1, 2, 3, 2, 1]);
  assert(isPalindrome(head), 'should be palindrome');
});

t10.test('palindrome false', () => {
  const head = buildList([1, 2, 3, 4]);
  assert(!isPalindrome(head), 'should not be palindrome');
});

t10.test('Time complexity - isPalindrome ~O(n)', () => {
  const n = 100000;
  const arr = Array.from({ length: n }, (_, i) => (i < n/2 ? i : n - i));
  const head = buildList(arr);
  const { time } = measureTime(isPalindrome, head);
  assert(time < 2000, `isPalindrome should be linear, took ${time.toFixed(2)}ms`);
});

t10.test('Asymptotic: isPalindrome ~O(n)', () => {
  asymptoticCheckTime({ makeInput: n => buildList(Array.from({ length: n }, (_, i) => (i < n/2 ? i : n - i))), callFn: h => isPalindrome(h) });
});

// Exported runners: allow running individual linked-list challenge suites
export function runLinkedListTest1() { return t1.run(); }
export function runLinkedListTest2() { return t2.run(); }
export function runLinkedListTest3() { return t3.run(); }
export function runLinkedListTest4() { return t4.run(); }
export function runLinkedListTest5() { return t5.run(); }
export function runLinkedListTest6() { return t6.run(); }
export function runLinkedListTest7() { return t7.run(); }
export function runLinkedListTest8() { return t8.run(); }
export function runLinkedListTest9() { return t9.run(); }
export function runLinkedListTest10() { return t10.run(); }

export function runAllLinkedListTests() {
  const suites = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
  let allPassed = true;
  for (const s of suites) {
    const ok = s.run();
    if (!ok) allPassed = false;
  }
  if (!allPassed) process.exitCode = 1;
  return allPassed;
}
