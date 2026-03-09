# Linked List Reference Links & Resources

> **Data Structure:** Linked Lists  
> **Last Updated:** March 9, 2026  
> **Related Files:** `src/data-structures/linked-list.js`, `challenges/linked-list-challenges/`, `tests/linked-list.test.js`

---

## Table of Contents
- [Core Concepts](#core-concepts)
- [Challenge References](#challenge-references)
- [Learning Paths](#learning-paths)
- [Complexity Quick Reference](#complexity-quick-reference)

---

## Core Concepts

### 1. What is a Linked List
- A linear collection of nodes where each node contains a value and a pointer
  to the next (and optionally previous) node.
- Dynamic size, nodes are not stored in contiguous memory.

**References:**
- [Linked List - GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Singly vs Doubly vs Circular Linked Lists - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-linked-list/)

### 2. Node & Pointers
- Node: `{ value, next }` for singly-linked; `{ value, next, prev }` for doubly.
- Pointer manipulation is key: rewire `.next` (and `.prev`) when inserting/removing.

**References:**
- [ListNode explanation - LeetCode Discuss](https://leetcode.com/discuss/general-discussion/)

### 3. Traversal
- Must start from `head` and follow `.next` until `null` (or back to head for circular).
- Time: O(n)

### 4. Insert / Delete
- Insert at head: O(1)
- Insert at tail: O(1) if `tail` pointer maintained; otherwise O(n)
- Delete head: O(1)
- Delete arbitrary node: O(n) if you only have head (need traversal to find previous)
- Delete when given only node (not head): O(1) by copying next node's value (cannot delete tail)

### 5. Doubly Linked Lists
- Have `prev` pointers; simplify deletion when you have node reference.
- Slightly more memory overhead (extra pointer per node).

---

## Challenge References

Each challenge file lives in `challenges/linked-list-challenges/`.

---

### Challenge 01: Remove Nth Node From End
**File:** `challenges/linked-list-challenges/01-remove-nth-node.js`

- **Concept:** Two-pointer (fast/slow) one-pass approach to remove the n-th
  node from the end.
- **Difficulty:** Easy → Medium
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #19 Remove Nth Node From End of List
- **Why This Matters:** Teaches two-pointer technique and careful pointer rewiring.
- **Resources:**
  - https://leetcode.com/problems/remove-nth-node-from-end-of-list/
  - https://www.geeksforgeeks.org/remove-nth-node-from-end-of-a-linked-list/

---

### Challenge 02: Delete All Occurrences
**File:** `challenges/linked-list-challenges/02-delete-all-occurrences.js`

- **Concept:** Sentinel/dummy node to simplify head removals, single-pass removal
  of matching values.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #203 Remove Linked List Elements
- **Resources:**
  - https://leetcode.com/problems/remove-linked-list-elements/
  - https://www.geeksforgeeks.org/delete-nodes-occurring-more-than-x-times-in-a-linked-list/

---

### Challenge 03: Delete Node Without Head
**File:** `challenges/linked-list-challenges/03-delete-node-without-head.js`

- **Concept:** In-place deletion by copying the next node's value into the
  target node and skipping the next node. Not applicable to tail node.
- **Difficulty:** Easy
- **Big O:** Time O(1), Space O(1)
- **LeetCode:** #237 Delete Node in a Linked List
- **Resources:**
  - https://leetcode.com/problems/delete-node-in-a-linked-list/
  - https://www.geeksforgeeks.org/delete-a-node-in-linked-list-without-head-pointer/

---

### Challenge 04: Doubly Linked List
**File:** `challenges/linked-list-challenges/04-doubly-linked-list.js`

- **Concept:** Implement `prev` and `next` pointers, O(1) insertion/removal at
  both ends and O(1) removal when node reference is available.
- **Difficulty:** Easy → Medium (implementation details)
- **Big O:** Insert/remove head/tail O(1); traversal O(n)
- **Resources:**
  - https://www.geeksforgeeks.org/doubly-linked-list/

---

### Challenge 05: Reverse Linked List
**File:** `challenges/linked-list-challenges/05-reverse-linked-list.js`

- **Concept:** Iterative in-place reversal by re-pointing `.next` pointers.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #206 Reverse Linked List
- **Resources:**
  - https://leetcode.com/problems/reverse-linked-list/
  - https://www.geeksforgeeks.org/reverse-a-linked-list/

---

### Challenge 06: Detect Cycle
**File:** `challenges/linked-list-challenges/06-detect-cycle.js`

- **Concept:** Floyd's Tortoise and Hare for detection and cycle-start finding
  (move one pointer to head after meeting point and advance both at 1x).
- **Difficulty:** Medium
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #141 Linked List Cycle, #142 Linked List Cycle II
- **Resources:**
  - https://leetcode.com/problems/linked-list-cycle/
  - https://leetcode.com/problems/linked-list-cycle-ii/

---

### Challenge 07: Merge Two Sorted Lists
**File:** `challenges/linked-list-challenges/07-merge-two-sorted-lists.js`

- **Concept:** Two-pointer merge similar to merge step in merge sort; reuse
  node pointers to avoid extra space.
- **Difficulty:** Easy
- **Big O:** Time O(n + m), Space O(1)
- **LeetCode:** #21 Merge Two Sorted Lists
- **Resources:**
  - https://leetcode.com/problems/merge-two-sorted-lists/

---

### Challenge 08: Remove Duplicates (Sorted)
**File:** `challenges/linked-list-challenges/08-remove-duplicates-sorted.js`

- **Concept:** Single-pass compare current node with next; skip duplicates.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #83 Remove Duplicates from Sorted List
- **Resources:**
  - https://leetcode.com/problems/remove-duplicates-from-sorted-list/

---

### Challenge 09: Find Middle Node
**File:** `challenges/linked-list-challenges/09-find-middle-node.js`

- **Concept:** Slow and fast pointers; when fast reaches end, slow is middle.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #876 Middle of the Linked List
- **Resources:**
  - https://leetcode.com/problems/middle-of-the-linked-list/

---

### Challenge 10: Is Palindrome
**File:** `challenges/linked-list-challenges/10-is-palindrome.js`

- **Concept:** Find middle, reverse second half in-place, compare halves, then
  (optionally) restore list.
- **Difficulty:** Medium
- **Big O:** Time O(n), Space O(1)
- **LeetCode:** #234 Palindrome Linked List
- **Resources:**
  - https://leetcode.com/problems/palindrome-linked-list/

---

For full descriptions, constraints, example inputs/outputs and Big-O hints,
open the corresponding file in `challenges/linked-list-challenges/`.

---

## Learning Paths

### Path 1: Beginner
1. Read `src/data-structures/linked-list.js` basics
2. Implement Challenge 01 and 05
3. Practice traversal and pointer manipulation

### Path 2: Interview Prep
1. Implement two-pointer and cycle-detection problems (Challenges 06, 09)
2. Master in-place reversal and palindrome checks (Challenges 05, 10)

---

## Complexity Quick Reference

| Operation | Singly (w/o tail) | Singly (w/ tail) | Doubly |
|-----------|-------------------:|-----------------:|-------:|
| Access by index | O(n) | O(n) | O(n) |
| Insert head | O(1) | O(1) | O(1) |
| Insert tail | O(n) | O(1) | O(1) |
| Delete head | O(1) | O(1) | O(1) |
| Delete arbitrary (by value) | O(n) | O(n) | O(n) |

---

## When to Use Linked Lists vs Arrays

- Use Linked Lists when you need frequent O(1) insertions/deletions at ends
  or middle and random access is not required.
- Use Arrays for O(1) random access and cache-friendly operations.

---

## Common Mistakes to Avoid

- Forgetting to update `tail` when removing the last node
- Not handling empty list or single-node edge cases
- Attempting to delete tail using the "copy next node" trick

---

## External Resources

- [GeeksforGeeks - Linked List](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [LeetCode Explore: Linked List](https://leetcode.com/explore/learn/card/linked-list/)
- [MIT OpenCourseWare - Data Structures](https://ocw.mit.edu/)
