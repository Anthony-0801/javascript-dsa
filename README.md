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
# Open: challenges/array-challenges/01-find-maximum.js
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
│       ├── hash-table.js             # (Placeholder for future)
│       ├── linked-list.js            # (Placeholder for future)
│       ├── queue.js                  # (Placeholder for future)
│       ├── stack.js                  # (Placeholder for future)
│       └── tree.js                   # (Placeholder for future)
│
├── challenges/                       # Problem-solving challenges
│   └── array-challenges/
│       ├── 01-find-maximum.js        # Easy: Find max value
│       ├── 02-count-occurrences.js   # Easy: Count occurrences
│       ├── 03-remove-element.js      # Medium: Two-pointer technique
│       ├── 04-merge-sorted-arrays.js # Medium: Merge operation
│       ├── 05-rotate-array.js        # Medium: In-place rotation
│       └── 06-two-sum.js             # Medium: Hash map approach
│
├── tests/                            # Automated test suites
│   └── array.test.js                 # Tests for all array challenges
│
└── docs/                             # Documentation & references
    ├── reference-links.md            # General DSA resources & links
    └── array-reference-links.md      # Array-specific references
```

## 📚 Content Breakdown

### src/data-structures/arrays.js
**What You'll Learn:**
- ✓ What is an array and how it works
- ✓ Read and update operations (O(1))
- ✓ Iteration techniques (forward, backward, forEach)
- ✓ Search methods (linear O(n), binary O(log n))
- ✓ Array end operations (push/pop - O(1))
- ✓ Array middle operations (insert/remove - O(n))

**Key Insight:** Arrays are efficient for end operations but terrible for middle operations. This is why linked lists exist!

### challenges/array-challenges/

| # | Challenge | Difficulty | Concepts | Time | Space |
|---|-----------|-----------|----------|------|-------|
| 1 | Find Maximum | Easy | Iteration | O(n) | O(1) |
| 2 | Count Occurrences | Easy | Counter Pattern | O(n) | O(1) |
| 3 | Remove Element | Medium | Two-Pointer | O(n) | O(1) |
| 4 | Merge Sorted Arrays | Medium | Two-Pointer Merge | O(n+m) | O(n+m) |
| 5 | Rotate Array | Medium | In-Place, Reverse | O(n) | O(1) |
| 6 | Two Sum | Medium | Hash Map | O(n) | O(n) |

**Important:** Tests will reject solutions that don't meet the required Big O complexity!

### tests/array.test.js
**What Gets Tested:**
- ✓ Correctness - Does it produce the right answer?
- ✓ Time Complexity - Is it fast enough?
- ✓ Space Complexity - Does it use extra memory?
- ✓ Algorithm Conformance - Is the right approach used?

**Special Features:**
- Performance timing to catch O(n²) algorithms
- Operation counting to verify complexity
- Detailed error messages with hints
- Large input tests (10k-100k+ elements)

## 🚀 How to Use This Repository

### Step 1: Understand the Concepts
```bash
# Read the documentation
1. Open: src/data-structures/arrays.js
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
// This will pass:
function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;  // O(n) ✓
}

// This might work but will FAIL:
function findMaximum(arr) {
  return arr.sort((a, b) => b - a)[0];  // O(n log n) ❌
}
```

### Layer 3: Complexity (Space) & Approach
Are you using the right approach efficiently?

**Example:**
```javascript
// ✓ PASS: Two-pointer, O(n) time, O(1) space
function removeElement(arr, target) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[k++] = arr[i];
    }
  }
  return k;
}

// ❌ FAIL: splice() in loop is O(n²) time!
function removeElement(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      arr.splice(i, 1);  // This is O(n) for each element!
    }
  }
}
```

## 🎓 Learning Path Recommendations

### For Beginners
1. Challenge 1: Find Maximum
2. Challenge 2: Count Occurrences
3. Read about Big O complexity
4. Challenge 3: Remove Element (learn two-pointer)

### For Intermediate
1. Challenge 3: Remove Element
2. Challenge 4: Merge Sorted Arrays
3. Challenge 5: Rotate Array
4. Review algorithm variations

### For Interview Prep
1. Challenge 6: Two Sum (★★★ Most important!)
2. Understand hash map approach deeply
3. Practice similar problems (3Sum, TwoSum variants)
4. Time yourself solving these problems

### Complete Learning
Do all challenges in order 1-6, ensuring each passes all tests.

## 🧪 Commands

```bash
# Run the main environment (shows challenges + guidance)
npm start

# Run all tests
npm run test

# Run array tests specifically
npm run test:array
```

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
export function removeElement(arr, target) {
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
export function removeElement(arr, target) {
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
function findMaximum(arr) {
  return arr.sort()[arr.length - 1];
}

// Good - O(n)
function findMaximum(arr) {
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
```

## 📊 Progress Tracking

Track your progress:

```
Challenge 1: Find Maximum         [ ] Not Started  [ ] In Progress  [x] Complete ✓
Challenge 2: Count Occurrences    [ ] Not Started  [ ] In Progress  [ ] Complete
Challenge 3: Remove Element       [ ] Not Started  [ ] In Progress  [ ] Complete
Challenge 4: Merge Sorted Arrays  [ ] Not Started  [ ] In Progress  [ ] Complete
Challenge 5: Rotate Array         [ ] Not Started  [ ] In Progress  [ ] Complete
Challenge 6: Two Sum              [ ] Not Started  [ ] In Progress  [ ] Complete
```

## 🚀 Future Enhancements

This repository is designed to be expandable:

```
Phase 1 (Current): Arrays ✓
Phase 2 (Coming): Hash Tables / Hash Maps
Phase 3 (Coming): Linked Lists
Phase 4 (Coming): Stacks & Queues
Phase 5 (Coming): Trees & Graphs
Phase 6 (Coming): Advanced Algorithms
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

## 🎓 Learning Outcomes

After completing all challenges, you will understand:

- ✓ Array operations and their complexities
- ✓ Two-pointer technique (critical for interviews!)
- ✓ Hash map usage for optimization
- ✓ In-place array modifications
- ✓ Big O analysis and optimization
- ✓ How to approach algorithm problems
- ✓ How to recognize algorithm patterns
- ✓ Interview problem-solving strategies

## 📝 License

ISC (See package.json)

## 👤 Author

Anthony AC

---

**Happy Learning! 🚀**

Remember: The goal is not just to solve problems, but to understand the algorithms and trade-offs behind them. Take your time, read the hints, and master each concept before moving on.

**Last Updated:** March 6, 2026
