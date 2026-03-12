# Queue Reference Links & Resources

> **Data Structure:** Queue  
> **Last Updated:** March 12, 2026  
> **Related Files:** `src/data-structures/queue.js`, `challenges/queue-challenges/`, `tests/queue.test.js`

---

## Table of Contents
- [Core Concepts](#core-concepts)
- [Challenge References](#challenge-references)
- [Learning Paths](#learning-paths)
- [Complexity Quick Reference](#complexity-quick-reference)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [External Resources](#external-resources)

---

## Core Concepts

### 1. What is a Queue
- A queue is a FIFO (First-In-First-Out) linear data structure where elements
	are added at the tail and removed from the head.
- Common implementations:
	- Array-backed (with a head index to avoid shifting)
	- Singly linked list with head/tail pointers
	- Circular buffer (ring) for fixed-capacity queues

**References:**
- [Queue (FIFO) - GeeksforGeeks](https://www.geeksforgeeks.org/queue-data-structure/)
- [MDN: Array (for array-backed queues)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 2. Operations
- `enqueue` (add to tail): O(1)
- `dequeue` (remove from head): O(1) for linked-list or circular buffer; O(1) amortized for array with head index
- `peek` (front): O(1)
- `isEmpty` / `size`: O(1)

**Notes:**
- Avoid using `Array.prototype.shift()` repeatedly — it is O(n) per call and will cause O(n²) behavior in loops. Prefer using a head index, linked list, or circular buffer.

---

## Challenge References

Files: `challenges/queue-challenges/01-simulate-print-queue.js` → `10-circular-queue.js`

### Challenge 01: Simulate Print Queue
**File:** `challenges/queue-challenges/01-simulate-print-queue.js`

- **Concept:** Simulate a printer queue where jobs have priorities; determine the order at which a target job will be printed.
- **Difficulty:** Easy → Medium
- **Big O:** Time O(n * p) naive; can be improved to O(n log n) using a priority structure for repeated max queries. Space O(n).

**Similar Problems & Resources:**
- LeetCode: printer queue-type problems
- [Priority Queue / Heap - GeeksforGeeks](https://www.geeksforgeeks.org/priority-queue-set-1-introduction/)

---

### Challenge 02: Time Needed to Buy Tickets
**File:** `challenges/queue-challenges/02-time-needed-to-buy-tickets.js`

- **Concept:** Simulate a ticket counter where each person buys one ticket per turn and re-enters the queue if they still need more; compute the time for a target person.
- **Difficulty:** Easy
- **Big O:** Time O(totalTickets), Space O(n)

---

### Challenge 03: Josephus Problem
**File:** `challenges/queue-challenges/03-josephus-problem.js`

- **Concept:** Classic elimination game; use the iterative recurrence (O(n)) or simulate with a queue to find the survivor index.
- **Difficulty:** Medium
- **Big O:** Time O(n) for recurrence solution, Space O(1); simulation uses O(n) space.

**References:**
- Josephus problem articles and LeetCode discussions

---

### Challenge 04: Reverse First K Elements
**File:** `challenges/queue-challenges/04-reverse-first-k-elements.js`

- **Concept:** Reverse the order of the first `k` elements of a queue using a stack as temporary storage.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(k)

---

### Challenge 05: Hot Potato
**File:** `challenges/queue-challenges/05-hot-potato.js`

- **Concept:** Simulate circular elimination after a fixed number of passes; return the winner.
- **Difficulty:** Easy
- **Big O:** Time O(n * m) where m is passes per elimination; Space O(n)

---

### Challenge 06: Recent Counter
**File:** `challenges/queue-challenges/06-recent-counter.js`

- **Concept:** Count requests that occurred within the last `t` time units relative to the most recent request. Implement with a deque (pop from front while older than threshold) or binary search on a sorted list.
- **Difficulty:** Easy
- **Big O:** Time O(1) amortized per request using deque; O(log n) per query with binary search; Space O(n).

**Related Problem:**
- LeetCode #933: Number of Recent Calls

---

### Challenge 07: Implement Queue Using Stacks
**File:** `challenges/queue-challenges/07-queue-using-stacks.js`

- **Concept:** Two-stack technique: one stack for enqueues, one for dequeues; transfer elements lazily to achieve amortized O(1) operations.
- **Difficulty:** Easy → Medium
- **Big O:** Amortized O(1) enqueue/dequeue, Space O(n)

**Reference:**
- [Implement Queue using Stacks - GeeksforGeeks](https://www.geeksforgeeks.org/implement-queue-using-stacks/)

---

### Challenge 08: Generate Binary Numbers
**File:** `challenges/queue-challenges/08-generate-binary-numbers.js`

- **Concept:** Generate binary strings for numbers 1..n using BFS-style expansion (enqueue current string + '0' and + '1').
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(n)

---

### Challenge 09: Moving Average from Data Stream
**File:** `challenges/queue-challenges/09-moving-average-from-data-stream.js`

- **Concept:** Maintain a running sum and a fixed-size queue (or circular buffer) to compute moving averages efficiently.
- **Difficulty:** Easy
- **Big O:** Time O(1) per element, Space O(k)

---

### Challenge 10: Circular Queue (Ring Buffer)
**File:** `challenges/queue-challenges/10-circular-queue.js`

- **Concept:** Fixed-capacity queue using modulo arithmetic for head/tail indices. Handle empty/full conditions carefully.
- **Difficulty:** Medium
- **Big O:** All operations O(1), Space O(capacity)

---

## Learning Paths

### Path 1: Absolute Beginner
1. Read `src/data-structures/queue.js` to understand array-backed and linked-list-backed queues
2. Implement basic `enqueue`, `dequeue`, `peek`
3. Complete Challenge 01 and 02

**Estimated Time:** 1-2 hours

---

### Path 2: Intermediate Learner
1. Implement two-stack queue (Challenge 07)
2. Build a ring buffer and test boundary cases (Challenge 10)
3. Practice sliding-window problems (Challenges 06 and 09)

**Estimated Time:** 2-4 hours

---

## Complexity Quick Reference

| Operation | Array (head index) | Linked List | Circular Buffer |
|-----------|--------------------:|------------:|----------------:|
| Enqueue   | O(1) amortized     | O(1)        | O(1)            |
| Dequeue   | O(1) (with head idx)| O(1)       | O(1)            |
| Peek      | O(1)               | O(1)        | O(1)            |

---

## Common Mistakes to Avoid

- Using `shift()` inside large loops — leads to O(n²) time.
- Not compacting array-backed queues (unbounded head index growth) when appropriate.
- Failing to correctly detect full vs empty in circular buffers (head == tail ambiguity).

---

## External Resources

- [Queue - GeeksforGeeks](https://www.geeksforgeeks.org/queue-data-structure/)
- [Circular Buffer - Wikipedia](https://en.wikipedia.org/wiki/Circular_buffer)
- [Two Stacks Implementing a Queue - GeeksforGeeks](https://www.geeksforgeeks.org/implement-queue-using-stacks/)
- [LeetCode - Queue tag](https://leetcode.com/tag/queue/)

