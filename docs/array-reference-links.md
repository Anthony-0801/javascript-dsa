# Array Reference Links & Resources

> **Data Structure:** Arrays  
> **Last Updated:** March 6, 2026  
> **Related Files:** `src/data-structures/arrays.js`, `challenges/array-challenges/`, `tests/array.test.js`

---

## Table of Contents
- [Core Concepts](#core-concepts)
- [Challenge References](#challenge-references)
- [Learning Paths](#learning-paths)
- [Complexity Quick Reference](#complexity-quick-reference)

---

## Core Concepts

### 1. What is an Array
- Linear data structure with contiguous memory
- Fixed-size allocation (in traditional languages)
- Dynamic arrays in JavaScript (automatic resizing)

**References:**
- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- "Introduction to Algorithms" - Cormen, Leiserson, Rivest, Stein (Chapter 10)
- [Array Data Structure - GeeksforGeeks](https://www.geeksforgeeks.org/array-data-structure/)

### 2. Read and Update Operations
- Direct access by index: O(1)
- Modification: O(1)

**References:**
- [Array Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- LeetCode Problems: Easy problems on array access

### 3. Iteration Through Arrays
- Forward iteration: for, forEach, map
- Backward iteration: reverse for loop

**References:**
- [Loops and Iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Array Methods: forEach, map, filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 4. Search in Arrays
- Linear search: O(n) - unsorted arrays
- Binary search: O(log n) - sorted arrays only

**References:**
- [Binary Search - GeeksforGeeks](https://www.geeksforgeeks.org/binary-search/)
- LeetCode #704: Binary Search
- [Linear Search - GeeksforGeeks](https://www.geeksforgeeks.org/linear-search/)

### 5. Array End Operations
- Push: O(1) amortized
- Pop: O(1)
- Most efficient insertion/deletion point

**References:**
- [Array.prototype.push() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.prototype.pop() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

### 6. Array Middle Operations
- Insert: O(n) - requires shifting
- Remove: O(n) - requires shifting
- Very inefficient for middle operations
- **Alternative:** Use Linked Lists for frequent middle operations

**References:**
- [Array.prototype.splice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [When to Use Arrays vs Linked Lists](https://www.geeksforgeeks.org/linked-list-vs-array/)

---

## Challenge References

### Challenge 1: Find Maximum
**File:** `challenges/array-challenges/01-find-maximum.js`

- **Concept:** Simple linear search with tracking
- **Difficulty:** Easy
- **LeetCode:** Similar to multiple problems
- **Big O:** Time O(n), Space O(1)

**Similar Problems:**
- LeetCode #53: Maximum Subarray
- LeetCode #414: Third Maximum Number
- HackerRank: Simple Array Sum

**Why This Matters:** Teaches fundamental iteration and comparison

**Resources:**
- [Finding Maximum - GeeksforGeeks](https://www.geeksforgeeks.org/c-program-find-largest-element-array/)

---

### Challenge 2: Count Occurrences
**File:** `challenges/array-challenges/02-count-occurrences.js`

- **Concept:** Counting pattern with linear scan
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)

**Similar Problems:**
- LeetCode #1512: Number of Good Pairs
- HackerRank: Counting Sort
- GeeksforGeeks: Frequencies in a Sorted Array

**Why This Matters:** Basic counting technique used in many problems

**Resources:**
- [Counting Occurrences - GeeksforGeeks](https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/)

---

### Challenge 3: Remove Element
**File:** `challenges/array-challenges/03-remove-element.js`

- **Concept:** Two-pointer in-place modification
- **Difficulty:** Easy to Medium
- **LeetCode:** #27 Remove Element
- **Big O:** Time O(n), Space O(1)

**Key Insight:** Two-pointer technique is crucial!
- ❌ Wrong: Using splice in a loop → O(n²)
- ✅ Right: Two pointers → O(n)

**Similar Problems:**
- LeetCode #26: Remove Duplicates from Sorted Array
- LeetCode #80: Remove Duplicates from Sorted Array II
- LeetCode #283: Move Zeroes

**Resources:**
- [Two Pointer Technique - GeeksforGeeks](https://www.geeksforgeeks.org/two-pointers-technique/)
- [LeetCode #27 Solution Discussion](https://leetcode.com/problems/remove-element/)

---

### Challenge 4: Merge Sorted Arrays
**File:** `challenges/array-challenges/04-merge-sorted-arrays.js`

- **Concept:** Two-pointer merging (merge step from Merge Sort)
- **Difficulty:** Medium
- **LeetCode:** #88 Merge Sorted Array
- **Big O:** Time O(n+m), Space O(n+m)

**Key Insight:** Don't sort the result! Input is already sorted.
- ❌ Wrong: Concatenate + sort → O((n+m)log(n+m))
- ✅ Right: Two pointers → O(n+m)

**Similar Problems:**
- LeetCode #21: Merge Two Sorted Lists (Linked List version)
- LeetCode #1537: Get the Maximum Score
- Merge Sort algorithm (uses this as subroutine)

**Resources:**
- [Merge Sort - GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort/)
- [Two Pointer Merging Techniques](https://www.geeksforgeeks.org/merge-two-sorted-arrays/)

---

### Challenge 5: Rotate Array
**File:** `challenges/array-challenges/05-rotate-array.js`

- **Concept:** In-place array rotation with reversal
- **Difficulty:** Medium
- **LeetCode:** #189 Rotate Array
- **Big O:** Time O(n), Space O(1)

**Algorithms:**
1. ❌ Naive: O(n*k) - rotating k times (won't pass)
2. ✅ Reverse approach: O(n) - reverse subarrays (required)
3. ✅ Cyclic rotation: O(n) - gcd-based approach

**Reverse Algorithm Explained:**
```
Original: [1,2,3,4,5], k=2
Step 1: Reverse all → [5,4,3,2,1]
Step 2: Reverse first k → [4,5,3,2,1]
Step 3: Reverse last n-k → [4,5,1,2,3] ✓
```

**Similar Problems:**
- LeetCode #1567: Maximum Length of Subarray with Positive Product
- Array rotation variants

**Resources:**
- [Rotate Array - GeeksforGeeks](https://www.geeksforgeeks.org/array-rotation/)
- [LeetCode #189 Solutions](https://leetcode.com/problems/rotate-array/)

---

### Challenge 6: Two Sum
**File:** `challenges/array-challenges/06-two-sum.js`

- **Concept:** Hash map for finding pairs (Classic problem!)
- **Difficulty:** Medium
- **LeetCode:** #1 Two Sum (★★★ Most popular interview problem!)
- **Big O:** Time O(n), Space O(n)

**Key Insight:** Hash Map is REQUIRED
- ❌ Wrong: Nested loops O(n²) (Too slow, won't pass tests)
- ✅ Right: Hash map O(n) (Fast, passes all constraints)

**Algorithm:**
```javascript
1. Create a Map: value → index
2. For each element:
   - complement = target - element
   - If complement exists in map → return indices
   - Else → add element to map
3. Time: O(n), Space: O(n)
```

**Similar Problems:**
- LeetCode #167: Two Sum II (sorted array variant)
- LeetCode #653: Two Sum IV (BST variant)
- LeetCode #1099: Two Sum Less Than K
- LeetCode #15: Three Sum
- LeetCode #18: Four Sum

**Resources:**
- [Hash Tables/Maps - GeeksforGeeks](https://www.geeksforgeeks.org/hash-table-and-hashing/)
- [LeetCode #1 Discussions](https://leetcode.com/problems/two-sum/) (Most discussed problem!)
- [Hash Map vs Nested Loops](https://medium.com/algorithms-digest/what-is-hash-table-66be5c0b3a39)

---

## Learning Paths

### Path 1: Absolute Beginner
1. Read `src/data-structures/arrays.js` sections 1-3
2. Complete Challenge 1: Find Maximum
3. Complete Challenge 2: Count Occurrences
4. Review Big O complexity basics
5. Continue to Challenge 3

**Estimated Time:** 2-3 hours

---

### Path 2: Intermediate Learner
1. Understand two-pointer technique
2. Complete Challenge 3: Remove Element
3. Complete Challenge 4: Merge Sorted Arrays
4. Study how these are used in Merge Sort
5. Complete Challenge 5: Rotate Array

**Estimated Time:** 3-4 hours

---

### Path 3: Interview Preparation
1. Master Challenge 6: Two Sum (★ Most common interview question!)
2. Understand hash map/set data structures deeply
3. Practice related problems:
   - Three Sum (LeetCode #15)
   - Four Sum (LeetCode #18)
   - Two Sum variants
4. Review all solutions for optimal time/space complexity

**Estimated Time:** 2-3 hours

---

### Path 4: Complete Mastery
1. Go through all challenges in order
2. Ensure each passes all tests (time + space complexity)
3. Extend challenges:
   - Add error handling
   - Add input validation
   - Optimize further if possible
4. Implement similar problems from LeetCode
5. Compare your solutions with others

**Estimated Time:** 6-8 hours

---

## Complexity Quick Reference

### Array Challenge Complexity Table

| Challenge | Bad Approach | Good Approach | Required |
|-----------|-------------|---------------|----------|
| Find Max | O(n²) sort | O(n) iteration | O(n) |
| Count | O(n²) nested | O(n) iteration | O(n) |
| Remove | O(n²) splice loop | O(n) two-pointer | O(n) |
| Merge | O((n+m)log(n+m)) sort | O(n+m) two-pointer | O(n+m) |
| Rotate | O(n*k) pop/unshift | O(n) reverse | O(n) |
| Two Sum | O(n²) nested loops | O(n) hash map | O(n) |

---

## Foundational Algorithms for Arrays

- **Linear Search:** O(n) time - Check every element
- **Binary Search:** O(log n) time - Requires sorted array
- **Two-Pointer Technique:** Efficient for various in-place problems
- **Hash Map/Set:** O(n) average for lookups, O(n) space
- **Reverse:** O(n) time, O(1) space for arrays

---

## When to Use Arrays

### ✅ Arrays are GREAT for:
- Random access by index (O(1))
- Iterating through all elements
- Sorted data with binary search
- Adding/removing at the end (O(1))
- Cache-friendly operations (contiguous memory)

### ❌ Arrays are BAD for:
- Frequent insertions/deletions in the middle (O(n))
- Unknown or highly variable size
- Frequent resizing operations
- When you need O(1) insertion at beginning

### 💡 Alternative: Use Linked Lists when you need O(1) middle operations

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Using sort() for finding max/min
```javascript
// Bad - O(n log n)
function findMax(arr) {
  return arr.sort((a, b) => b - a)[0];
}

// Good - O(n)
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### ❌ Mistake 2: Using splice() in a loop
```javascript
// Bad - O(n²)
for (let i = 0; i < arr.length; i++) {
  if (condition) arr.splice(i, 1);
}

// Good - O(n)
let k = 0;
for (let i = 0; i < arr.length; i++) {
  if (condition) arr[k++] = arr[i];
}
```

### ❌ Mistake 3: Nested loops for pair finding
```javascript
// Bad - O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) return [i, j];
  }
}

// Good - O(n)
const map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(target - arr[i])) {
    return [map.get(target - arr[i]), i];
  }
  map.set(arr[i], i);
}
```

---

## Additional Resources

### Video Tutorials
- [Arrays - CS50](https://www.youtube.com/watch?v=tI_tIZFyKBw)
- [Array Data Structure - FreeCodeCamp](https://www.youtube.com/watch?v=QJNwK2uJyGs)
- [Two Pointer Technique - NeetCode](https://www.youtube.com/watch?v=On03HbrWCCk)

### Practice Platforms
- [LeetCode - Array Problems](https://leetcode.com/tag/array/)
- [HackerRank - Arrays](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=arrays)
- [CodeWars - Array Challenges](https://www.codewars.com/)

---

**Next:** After mastering arrays, move to [Hash Tables](./hash-table-reference-links.md) or [Linked Lists](./linked-list-reference-links.md)

**Back to:** [Main Reference Links](./reference-links.md)
