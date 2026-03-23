# Stack Reference Links & Resources

> **Data Structure:** Stack  
> **Last Updated:** March 23, 2026  
> **Related Files:** `src/data-structures/stack.js`, `challenges/stack-challenges/`, `tests/stack.test.js`

---

## Table of Contents
- [Core Concepts](#core-concepts)
- [Primary Operations](#primary-operations)
- [Common Applications](#common-applications)
- [Challenge References](#challenge-references)
- [Learning Paths](#learning-paths)
- [Complexity Quick Reference](#complexity-quick-reference)

---

## Core Concepts

- Last-In-First-Out (LIFO): elements added/removed from the top.
- Typical implementations: dynamic array (JS `Array`), linked list, or fixed-size array.
- Use when you need to reverse order, backtrack, or maintain call-return semantics.

**References:**
- [MDN: Array (use as stack)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Stack Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/stack-data-structure/)
- CLRS / Introduction to Algorithms — call stack and recursion sections

---

## Primary Operations

- `push(x)` — add item to top. Time: O(1) amortized
- `pop()` — remove and return top. Time: O(1)
- `peek()` / `top()` — inspect top without removing. Time: O(1)
- `isEmpty()` — check if stack has elements. Time: O(1)
- `size()` — return number of elements. Time: O(1)

**Notes:** In JavaScript, an `Array` backed stack uses `push`/`pop` for O(1) amortized operations. Avoid using `shift`/`unshift` for stack behavior.

---

## Common Applications

- Expression evaluation (infix → postfix, postfix evaluation)
- Parentheses/bracket validation (balanced parentheses)
- Backtracking: DFS, maze solvers, recursion simulation
- Function call stacks and managing state rollback
- Undo/Redo features in editors

**Learning Problems:**
- LeetCode #20: Valid Parentheses
- LeetCode #150: Evaluate Reverse Polish Notation
- LeetCode #682: Baseball Game (stack simulation)

---

## Challenge References

The repository includes the following stack challenges in `challenges/stack-challenges/`.

---

### Challenge 1: Valid Parentheses
**File:** `challenges/stack-challenges/01-valid-parentheses.js`

- **Concept:** Use a stack to ensure every opening bracket has a matching closing bracket in the correct order.
- **Difficulty:** Easy
- **LeetCode:** #20 Valid Parentheses
- **Big O:** Time O(n), Space O(n)

**Similar Problems:** Bracket matching variations, HTML/XML tag validation

**Resources:**
- [Valid Parentheses - LeetCode](https://leetcode.com/problems/valid-parentheses/)

---

### Challenge 2: Remove Adjacent Duplicates
**File:** `challenges/stack-challenges/02-remove-adjacent-duplicates.js`

- **Concept:** Use a stack (or simulate with a result array) to remove adjacent equal characters repeatedly.
- **Difficulty:** Easy
- **LeetCode:** #1047 Remove All Adjacent Duplicates In String
- **Big O:** Time O(n), Space O(n)

**Similar Problems:** String reduction problems, duplicate removal

**Resources:**
- [Remove Adjacent Duplicates - LeetCode](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

---

### Challenge 3: Backspace String Compare
**File:** `challenges/stack-challenges/03-backspace-string-compare.js`

- **Concept:** Simulate typing with backspaces using a stack or use two-pointer backward traversal to compare without extra space.
- **Difficulty:** Easy
- **LeetCode:** #844 Backspace String Compare
- **Big O:** Time O(n), Space O(1) (two-pointer) or O(n) (stack)

**Resources:**
- [Backspace String Compare - LeetCode](https://leetcode.com/problems/backspace-string-compare/)

---

### Challenge 4: Evaluate Reverse Polish Notation
**File:** `challenges/stack-challenges/04-evaluate-reverse-polish-notation.js`

- **Concept:** Use a stack to evaluate postfix expressions: push operands, pop two for each operator, push result.
- **Difficulty:** Easy to Medium
- **LeetCode:** #150 Evaluate Reverse Polish Notation
- **Big O:** Time O(n), Space O(n)

**Resources:**
- [Evaluate Reverse Polish Notation - LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

---

### Challenge 5: Implement Stack Using Array
**File:** `challenges/stack-challenges/05-implement-stack-using-array.js`

- **Concept:** Implement `push`, `pop`, `peek`, `isEmpty`, `size` using JavaScript `Array` primitives.
- **Difficulty:** Easy
- **LeetCode:** Educational (no single LeetCode id) — basics of API design
- **Big O:** `push`/`pop` O(1) amortized, other ops O(1)

**Resources:**
- [MDN Array - push/pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

---

### Challenge 6: Stack vs Queue
**File:** `challenges/stack-challenges/06-stack-vs-queue.js`

- **Concept:** Simulate both data structures for a sequence of operations to determine which ordering produced observed outputs. Teaches behavioral differences (LIFO vs FIFO).
- **Difficulty:** Easy
- **LeetCode:** Conceptual / educational
- **Big O:** Time O(n), Space O(n)

**Resources:**
- Articles comparing stacks and queues; basic queue/stack tutorials

---

### Challenge 7: Min Stack
**File:** `challenges/stack-challenges/07-min-stack.js`

- **Concept:** Maintain auxiliary information (another stack or store pair values) to retrieve minimum in O(1) time.
- **Difficulty:** Medium
- **LeetCode:** #155 Min Stack
- **Big O:** Time O(1) per op, Space O(n)

**Resources:**
- [Min Stack - LeetCode](https://leetcode.com/problems/min-stack/)

---

### Challenge 8: Sort Stack
**File:** `challenges/stack-challenges/08-sort-stack.js`

- **Concept:** Sort a stack using only one extra stack by repeatedly moving elements between stacks to maintain order.
- **Difficulty:** Medium
- **LeetCode:** Variants exist; educational
- **Big O:** Time O(n^2) worst-case, Space O(n)

**Resources:**
- Tutorials on sorting with stacks and in-place stack sorting techniques

---

### Challenge 9: Infix to Postfix (Shunting Yard)
**File:** `challenges/stack-challenges/09-infix-to-postfix.js`

- **Concept:** Use the shunting-yard algorithm to convert infix expressions to postfix using operator precedence and a stack for operators.
- **Difficulty:** Medium
- **LeetCode:** Educational / algorithmic (no single canonical id)
- **Big O:** Time O(n), Space O(n)

**Resources:**
- [Shunting-yard algorithm - Wikipedia](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

---

### Challenge 10: Next Greater Element (Monotonic Stack)
**File:** `challenges/stack-challenges/10-next-greater-element.js`

- **Concept:** Use a monotonic (decreasing) stack to find the next greater element to the right for each array element.
- **Difficulty:** Medium
- **LeetCode:** #496 Next Greater Element I
- **Big O:** Time O(n), Space O(n)

**Resources:**
- [Next Greater Element - LeetCode](https://leetcode.com/problems/next-greater-element-i/)

---

Each challenge contains constraints, Big-O hints, and example usage. See `tests/stack.test.js` for test expectations and complexity checks.

---

## Learning Paths

### Beginner
1. Read `src/data-structures/stack.js` for basic operations.
2. Implement `05-implement-stack-using-array.js`.
3. Solve `01-valid-parentheses.js` and `03-backspace-string-compare.js`.

### Intermediate
1. Implement postfix evaluation in `04-evaluate-reverse-polish-notation.js`.
2. Implement `07-min-stack.js` to learn auxiliary-stack tricks.
3. Solve `10-next-greater-element.js` to learn monotonic stacks.

### Interview Prep
1. Master `09-infix-to-postfix.js` (shunting-yard algorithm).
2. Be able to explain when to prefer stack vs queue or deque.
3. Practice stack-based DFS and backtracking problems.

---

## Complexity Quick Reference

| Operation | Time | Space |
|-----------|------|-------|
| push | O(1) amortized | O(1) |
| pop | O(1) | O(1) |
| peek | O(1) | O(1) |
| using auxiliary stack (min stack) | O(1) per op | O(n) extra |

---

## Additional Resources

- [LeetCode: Stack Problems](https://leetcode.com/tag/stack/)
- [GeeksforGeeks: Stack Applications](https://www.geeksforgeeks.org/applications-of-stack-data-structure/)
- [Shunting Yard Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

---

## Related Files

- `src/data-structures/stack.js` — implementation guide and example functions
- `challenges/stack-challenges/` — practice problems
- `tests/stack.test.js` — automated tests and complexity checks
