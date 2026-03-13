# Hash Table Reference Links & Resources

> **Data Structure:** Hash Tables / Hash Maps  
> **Last Updated:** March 13, 2026  
> **Related Files:** `src/data-structures/hash-table.js`, `challenges/hash-table-challenges/`, `tests/hash-table.test.js`

---

## Table of Contents
- [Core Concepts](#core-concepts)
- [Challenge References](#challenge-references)
- [Learning Paths](#learning-paths)
- [Complexity Quick Reference](#complexity-quick-reference)
- [Foundational Algorithms](#foundational-algorithms)
- [When to Use Hash Tables](#when-to-use-hash-tables)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [External Resources](#external-resources)

---

## Core Concepts

### 1. What is a Hash Table
- A hash table (hash map) stores key → value pairs and uses a hash function to map keys to buckets.
- Average-case lookup/insert/delete: O(1); worst-case O(n) with poor hashing or collisions.

**References:**
- [Hash Table - GeeksforGeeks](https://www.geeksforgeeks.org/hash-data-structure/)
- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### 2. Collision Handling
- Common strategies: chaining (linked lists or arrays per bucket) or open addressing (probing).
- For learning implementations, separate chaining is simple and robust.

**References:**
- [Collision Resolution - GeeksforGeeks](https://www.geeksforgeeks.org/hashing-set-1-introduction/)

### 3. Hash Functions
- Good hash functions distribute keys uniformly; for strings, common methods include polynomial rolling hash.

**References:**
- [String Hashing - GeeksforGeeks](https://www.geeksforgeeks.org/string-hashing-assignments/)

---

## Challenge References

Each challenge file lives in `challenges/hash-table-challenges/`.

### Challenge 01: Contains Duplicates
**File:** `challenges/hash-table-challenges/01-contains-duplicates.js`

- **Concept:** Use a `Set`/map to detect duplicates in a single pass.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(n)

**Similar Problems:**
- LeetCode variations on duplicate detection

**Resources:**
- [Detect Duplicates - GeeksforGeeks](https://www.geeksforgeeks.org/check-if-array-elements-are-consecutive/)

---

### Challenge 02: Count Frequencies
**File:** `challenges/hash-table-challenges/02-count-frequencies.js`

- **Concept:** Count occurrences using a map/object.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(n)

**Similar Problems:**
- Frequency counting challenges on LeetCode

**Resources:**
- [Counting Frequencies - GeeksforGeeks](https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/)

---

### Challenge 03: Two Sum
**File:** `challenges/hash-table-challenges/03-two-sum.js`

- **Concept:** Hash map of value → index to find complements in O(n).
- **Difficulty:** Medium
- **Big O:** Time O(n), Space O(n)
- **LeetCode:** #1 Two Sum

**Key Insight:** Use a map for O(1) complement lookups; nested loops are O(n²) and too slow.

**Resources:**
- [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/)

---

### Challenge 04: Valid Anagram
**File:** `challenges/hash-table-challenges/04-valid-anagram.js`

- **Concept:** Character counts via map or fixed-size alphabet array.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1) (alphabet bounded) or O(n)

**Resources:**
- [Valid Anagram - LeetCode](https://leetcode.com/problems/valid-anagram/)

---

### Challenge 05: First Unique Character
**File:** `challenges/hash-table-challenges/05-first-unique-character.js`

- **Concept:** Two-pass counting: first count characters, then find first with count 1.
- **Difficulty:** Easy
- **Big O:** Time O(n), Space O(1)/O(n)

**Resources:**
- [First Unique Character - LeetCode](https://leetcode.com/problems/first-unique-character-in-a-string/)

---

### Challenge 06: Intersection of Arrays
**File:** `challenges/hash-table-challenges/06-intersection-of-arrays.js`

- **Concept:** Use sets to compute unique intersection.
- **Difficulty:** Easy
- **Big O:** Time O(n + m), Space O(min(n,m))

**Resources:**
- [Intersection of Two Arrays - LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/)

---

### Challenge 07: Subarray Sum Equals K
**File:** `challenges/hash-table-challenges/07-subarray-sum-equals-k.js`

- **Concept:** Prefix sum + hashmap storing counts of prefix sums.
- **Difficulty:** Medium
- **Big O:** Time O(n), Space O(n)
- **LeetCode:** #560 Subarray Sum Equals K

**Resources:**
- [Subarray Sum Equals K - LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/)

---

### Challenge 08: Group Anagrams
**File:** `challenges/hash-table-challenges/08-group-anagrams.js`

- **Concept:** Use canonical key (sorted string or char counts) to group anagrams.
- **Difficulty:** Medium
- **Big O:** Time O(n * k log k) if sorting each string, or O(n * k) with counting, Space O(n * k)

**Resources:**
- [Group Anagrams - LeetCode](https://leetcode.com/problems/group-anagrams/)

---

### Challenge 09: Top K Frequent Elements
**File:** `challenges/hash-table-challenges/09-top-k-frequent.js`

- **Concept:** Frequency map + bucket sort or heap to retrieve top k.
- **Difficulty:** Medium
- **Big O:** Time O(n) (bucket) or O(n log k) (heap), Space O(n)

**Resources:**
- [Top K Frequent Elements - LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)

---

### Challenge 10: Valid Sudoku
**File:** `challenges/hash-table-challenges/10-valid-sudoku.js`

- **Concept:** Use sets to validate rows, columns, and 3x3 boxes.
- **Difficulty:** Medium
- **Big O:** Time O(1) (board size fixed) or O(81), Space O(1)

**Resources:**
- [Valid Sudoku - LeetCode](https://leetcode.com/problems/valid-sudoku/)

---

## Learning Paths

### Path 1: Beginner
1. Read `src/data-structures/hash-table.js` to understand maps and sets in JS
2. Implement Challenge 01 and 02
3. Practice character-counting and set membership

**Estimated Time:** 1-2 hours

---

### Path 2: Interview Prep
1. Master Challenge 03: Two Sum
2. Practice prefix-sum + hashmap problems (Challenge 07)
3. Study top-k patterns (heap vs bucket)

**Estimated Time:** 2-3 hours

---

### Path 3: Complete Hash Table Mastery
1. Complete all challenges in order
2. Implement both chaining and open-addressing toy implementations
3. Analyze edge cases that cause worst-case behavior

**Estimated Time:** 4-6 hours

---

## Complexity Quick Reference

| Operation | Average | Worst-case |
|-----------|--------:|-----------:|
| Lookup | O(1) | O(n) |
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |

---

## Foundational Algorithms

- Use hash maps for counting, membership tests, and complement lookups.
- Prefix-sum + hashmap pattern for subarray problems.
- Bucket sort / counting + frequency map for top-k problems.

---

## When to Use Hash Tables

### ✅ Good Use Cases
- Frequency counting
- Fast membership tests
- Caching / memoization
- Indexing by keys (value → index)

### ❌ Avoid When
- You need ordered traversal with guaranteed order (use Trees or Arrays)
- You must iterate in insertion order reliably (use `Map` when needed)

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Using nested loops instead of a map for complements
```javascript
// Bad - O(n²)
for (let i = 0; i < n; i++) {
	for (let j = i + 1; j < n; j++) {
		if (arr[i] + arr[j] === target) return [i, j];
	}
}

// Good - O(n)
const map = new Map();
for (let i = 0; i < n; i++) {
	const comp = target - arr[i];
	if (map.has(comp)) return [map.get(comp), i];
	map.set(arr[i], i);
}
```

### ❌ Mistake 2: Assuming constant worst-case time
- Hash tables are average-case O(1); adversarial inputs or poor hash functions can degrade performance.

---

## External Resources

- [Hash Tables - GeeksforGeeks](https://www.geeksforgeeks.org/hash-data-structure/)
- [Maps - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [LeetCode Problem List (Hash Table tag)](https://leetcode.com/tag/hash-table/)

---

For full descriptions, constraints, example inputs/outputs and Big-O hints, open the corresponding file in `challenges/hash-table-challenges/`.
