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

// 5. reverse linked list
const t5 = new TestRunner('05-reverse-linked-list');
t5.test('reverse', () => {
  const head = buildList([1, 2, 3, 4]);
  const rev = reverseLinkedList(head);
  deepEqual(listToArray(rev), [4, 3, 2, 1]);
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

// 8. remove duplicates (sorted)
const t8 = new TestRunner('08-remove-duplicates-sorted');
t8.test('remove duplicates', () => {
  const head = buildList([1, 1, 2, 3, 3]);
  const res = deleteDuplicates(head);
  deepEqual(listToArray(res), [1, 2, 3]);
});

// 9. middle node
const t9 = new TestRunner('09-find-middle-node');
t9.test('odd length', () => {
  const head = buildList([1, 2, 3, 4, 5]);
  const mid = middleNode(head);
  deepEqual(listToArray(mid), [3, 4, 5]);
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

// Run all tests
const suites = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
let allPassed = true;
for (const s of suites) {
  const ok = s.run();
  if (!ok) allPassed = false;
}

if (!allPassed) process.exitCode = 1;
