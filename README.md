# JavaScript Data Structures & Algorithms (DSA) Learning Repository

> A comprehensive, hands-on learning resource for mastering data structures and algorithms in JavaScript with **strict Big O complexity requirements**.

## 🎯 Purpose

This repository is designed to help you learn DSA through:
- **Interactive Implementation** - Write code, not just read theory
- **Rigorous Testing** - Automated validation of correctness, time complexity, and space complexity
- **Real Interview Problems** - Challenges based on actual LeetCode/interview questions
- **Progressive Difficulty** - Start easy, gradually increase complexity
- **Detailed Guidance** - Hints, explanations, and learning resources included

## ⚡ Quick Start

```bash
# 1. Implement your first challenge
# Open: challenges/(some-DSA)-challenges/0X-challenge-name.js
# Replace the "throw new Error" line with your solution

# 2. Run the tests
npm start

# 3. Check the results
# ✓ Pass = Move to next challenge
# ✗ Fail = Read hints and fix your solution
```

## 📁 Repository Structure

```
javascript-dsa/
├── index.js                          # Your coding workspace - START HERE!
├── package.json                      # Project configuration
├── README.md                         # This file
│
├── src/                              # Learning material & implementations
│   └── data-structures/
│       ├── arrays.js                 # Array concepts & operations
│       ├── hash-table.js             # Hash table concepts & operations
│       ├── linked-list.js            # Linked list concepts & operations
│       ├── queue.js                  # Queue concepts & operations
│       ├── stack.js                  # Stack concepts, operations, and examples
│       └── tree.js                   # (Placeholder for future)
│
├── challenges/                       # Problem-solving challenges
│   └── array-challenges/
│       ├── 0X-challenge-name.js        # Level: Description
│   └── linked-list-challenges/
│       ├── 0X-challenge-name.js       # Level: Description
│   └── queue-challenges/
│       ├── 0X-challenge-name.js       # Level: Description
|   └── hash-table-challenges/
│       ├── 0X-challenge-name.js       # Level: Description
|   └── stack-challenges/
│       ├── 0X-challenge-name.js       # Level: Description
│   
│
├── tests/                            # Automated test suites
│   ├── array.test.js                 # Tests for all array challenges
│   └── linked-list.test.js           # Tests for linked-list challenges
│   └── queue.test.js                 # Tests for queue challenges
│   └── hash-table.test.js            # Tests for hash table challenges
│   └── stack.test.js                 # Tests for stack challenges
│
└── docs/                               # Documentation & references
    ├── reference-links.md              # General DSA resources & links
    └── array-reference-links.md        # Array-specific references
    └── linked-list-reference-links.md  # Linked-list specific references
    └── queue-reference-links.md        # Queue specific references
    └── hash-table-reference-links.md   # Hash table specific references
    └── stack-reference-links.md        # Stack specific references
```

## 📚 Content Breakdown

This repository groups learning material, exercises, and tests by topic. Below are the three primary data-structure guides included now — each contains a compact concept file in `src/data-structures/`, a set of challenges in `challenges/*-challenges/`, and a corresponding test suite in `tests/`.

- Arrays — `src/data-structures/arrays.js`
  - Core ideas: indexed access, push/pop, iteration, search (linear/binary).
  - Typical costs: O(1) access, O(n) inserts/removes in middle, O(1) push/pop amortized.
  - Challenges focus on two-pointer, sliding-window, prefix/suffix, and sorting-adjacent patterns.

- Linked Lists — `src/data-structures/linked-list.js`
  - Core ideas: nodes with `next` (and optional `prev`), head/tail pointers.
  - Typical costs: O(1) insert/remove at head (or tail with tail pointer), O(n) access by index.
  - Challenges focus on pointer manipulation: removal, reversal, cycle detection, merging.

- Queues — `src/data-structures/queue.js`
  - Core ideas: FIFO behavior; implementations: array-with-head, linked-list, circular buffer.
  - Typical costs: O(1) enqueue/dequeue when implemented correctly (avoid repeated `shift`).
  - Challenges focus on simulations, sliding windows, and implementation variants (e.g., queue via stacks, ring buffer).

- Hash Tables — `src/data-structures/hash-table.js`
  - Core ideas: key→value storage, hashing, collision handling (chaining/probing)
  - Typical costs: average O(1) lookup/insert/delete, worst-case O(n) with poor hashing
  - Challenges focus on frequency maps, complements (Two Sum), prefix-sum + hashmap patterns, and top-k frequency problems.

- Stacks — `src/data-structures/stack.js`
  - Core ideas: Last-In-First-Out (LIFO), push/pop, peek/top, auxiliary stacks for extra info
  - Typical costs: O(1) push/pop/peek (amortized for dynamic arrays)
  - Challenges focus on parentheses validation, expression evaluation (RPN), min-stack design, monotonic stacks (next greater), and conversion algorithms (infix→postfix)

  Each topic includes tests that validate correctness and check asymptotic behavior; read problem hints before implementing solutions.

## 🚀 How to Use This Repository

### Step 1: Understand the Concepts
```bash
# Read the documentation
1. Open: src/data-structures/
2. Read through all the concepts and examples
3. Understand the Big O analysis for each operation
```

### Step 2: Work on Challenges (In Order)
```bash
# For each challenge:
1. Open: challenges/array-challenges/XX-challenge-name.js
2. Read the problem description carefully
3. Look at the Big O hints
4. Implement the solution
5. Uncomment the import in index.js
6. Run: npm start
7. Review results
```

### Step 3: Understand Your Results
```
✓ PASS: Your solution is correct and efficient!
        Move to the next challenge.

✗ FAIL: Read the error message and hint.
        The hint tells you what's wrong and how to fix it.
```

### Step 4: Learn More
```bash
# After passing all tests:
1. Check docs/reference-links.md for similar problems
2. Practice related problems on LeetCode
3. Understand variations of the algorithm
4. Move to other data structures
```

## 💡 How Tests Work

Tests have three layers of validation:

### Layer 1: Correctness
Does your solution produce the correct output for given inputs?

### Layer 2: Complexity (Time)
Is your solution fast enough?
- Tests with 10k, 100k, or more elements
- Measures execution time
- Catches O(n²) vs O(n) differences instantly

**Example:**
```javascript
// Good (linear scan - O(n))
function maxLinear(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;  // O(n) ✓
}

// Bad (sort-based - O(n log n))
function maxUsingSort(arr) {
  return arr.slice().sort((a, b) => b - a)[0];  // O(n log n) ❌
}
```

### Layer 3: Complexity (Space) & Approach
Are you using the right approach efficiently?

**Example:**
```javascript
// ✓ PASS: Two-pointer, O(n) time, O(1) space
function removeTwoPointer(arr, target) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[k++] = arr[i];
    }
  }
  return k;
}

// ❌ FAIL: splice() in loop is O(n²) time!
function removeSpliceNaive(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      arr.splice(i, 1);  // This is O(n) for each element!
    }
  }
}
```

## 🧪 Commands

```bash
# Run the main environment (shows challenges + guidance)
npm start

# Run all tests
npm run test

# Run array tests specifically
npm run test:array
```

### Run a single data structures and algorithm challenge

You can run a single challenge by using the dedicated npm scripts added to the project. Replace `X` with the challenge number (1-10):

```bash
# Example: Run all array tests
npm run test:array

# Example: Run a specific array challenge by number
npm run test:array-1   # Challenge 01 - Find Maximum
npm run test:array-2   # Challenge 02 - Count Occurrences
npm run test:array-3   # Challenge 03 - Remove Element
npm run test:array-4   # Challenge 04 - Merge Sorted Arrays
npm run test:array-5   # Challenge 05 - Rotate Array
npm run test:array-6   # Challenge 06 - Two Sum
npm run test:array-7   # Challenge 07 - Longest Subarray Sum K
npm run test:array-8   # Challenge 08 - Product Except Self
npm run test:array-9   # Challenge 09 - Maximum Subarray
npm run test:array-10  # Challenge 10 - Longest Increasing Subsequence
```

These scripts import and run a small exported helper from `tests/(data-structure or algorithm).test.js` (for example `runFindMaxTests`) so you can test a single challenge without editing or creating files.

## 📖 Documentation Files

### docs/reference-links.md
Contains:
- ✓ External learning resources
- ✓ LeetCode problem references
- ✓ Related problems and variations
- ✓ YouTube channel recommendations
- ✓ Textbook references
- ✓ Algorithm visualization tools

**Why it matters:** When you understand a concept, immediately see related problems to practice!

## 🎯 Key Principles

### 1. Big O Compliance is Non-Negotiable
Simple passing of test cases is not enough. Your solution must:
- Meet the specified time complexity
- Meet the specified space complexity
- Use the correct algorithm approach

Tests will fail if you use inefficient algorithms, even if the answer is correct.

### 2. Algorithm > Implementation
The algorithm choice matters more than clean code:
- Hash map vs nested loop
- Two-pointer vs splice in loop
- Reverse vs pop/unshift

### 3. In-Place Modifications
Some challenges require O(1) space, meaning:
- Don't create new arrays
- Don't use extra data structures
- Modify the input array directly

### 4. Learn from Failures
When a test fails:
1. Don't just try random changes
2. Read the hint carefully
3. Understand what's wrong
4. Research the proper approach
5. Then implement

## 🔄 Workflow Example

**Challenge 3: Remove Element**

```javascript
// Step 1: Read the challenge
// "Remove all occurrences of a value, modify array in-place"
// "Time: O(n), Space: O(1)"

// Step 2: Try naive approach
export function removeSpliceNaive(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);  // ← This is inefficient!
      i--;
    }
  }
  return arr.length;
}

// Step 3: Run tests
// npm start
// ❌ FAIL: Time Complexity - Too slow!
// 💡 HINT: Use two-pointer approach...

// Step 4: Learn two-pointer technique
// Read: docs/reference-links.md -> Two Pointer Technique

// Step 5: Implement correct solution
export function removeTwoPointer(arr, target) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[k++] = arr[i];
    }
  }
  return k;
}

// Step 6: Run tests again
// npm start
// ✓ PASS: All tests passed!

// Step 7: Move to next challenge
```

## 🤔 Common Mistakes

### ❌ Mistake 1: Using sort() for searching
```javascript
// Bad - O(n log n)
function maxUsingSort(arr) {
  return arr.slice().sort()[arr.length - 1];
}

// Good - O(n)
function maxLinear(arr) {
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

// Good - O(n) with two-pointer
let k = 0;
for (let i = 0; i < arr.length; i++) {
  if (condition) arr[k++] = arr[i];
}
```

### ❌ Mistake 3: Nested loops for searching pairs
```javascript
// Bad - O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) return [i, j];
  }
}

// Good - O(n) with hash map
const map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(target - arr[i])) {
    return [map.get(target - arr[i]), i];
  }
  map.set(arr[i], i);
}


## 🚀 Future Enhancements

This repository is designed to be expandable:

```
- Phase 1: Arrays ✓
- Phase 2: Hash Tables ✓
- Phase 3: Linked Lists ✓
- Phase 4: Queues ✓
- Phase 5 (Coming): Trees & Graphs
- Phase 6 (Coming): Advanced Algorithms
```

Each phase will follow the same structure:
- Concepts in src/
- Challenges in challenges/
- Tests in tests/
- References in docs/

## 💬 How to Extend This Repository

Want to add more data structures?

1. Create `src/data-structures/[structure].js` with concepts
2. Create `challenges/[structure]-challenges/` folder with problem files
3. Create `tests/[structure].test.js` with test suite
4. Update `docs/reference-links.md` with references
5. Update `index.js` with new instructions

## 📚 External Resources

### Recommended Sites
- [LeetCode](https://leetcode.com/) - Practice problems
- [GeeksforGeeks](https://www.geeksforgeeks.org/) - Explanations
- [VisuAlgo](https://visualgo.net/) - Algorithm visualization

### Recommended Books
- "Introduction to Algorithms" (CLRS) - Comprehensive
- "Cracking the Coding Interview" - Interview focused
- "Elements of Programming Interviews" - Advanced

### YouTube Channels
- Abdul Bari - Data Structures & Algorithms
- William Fiset - Algorithm tutorials
- FreeCodeCamp - Full courses


## 📝 License

ISC (See package.json)

## 👤 Author

Anthony AC

---

**Happy Learning! 🚀**

Remember: The goal is not just to solve problems, but to understand the algorithms and trade-offs behind them. Take your time, read the hints, and master each concept before moving on.

**Last Updated:** March 23, 2026
