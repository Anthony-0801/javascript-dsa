/**
 * ARRAYS - Complete Guide
 * ========================
 * An array is a linear data structure that stores a collection of elements in contiguous memory locations.
 * Each element is at a specific index position, starting from 0.
 * 
 * Key Characteristics:
 * - Fixed size (in traditional arrays)
 * - O(1) access time by index
 * - O(n) insertion/deletion in middle
 * - O(1) insertion/deletion at end
 */

// ============================================================================
// 1. WHAT IS AN ARRAY - BASIC OPERATIONS
// ============================================================================

/**
 * Create an array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function createArray(elements) {
  return [...elements];
}

// ============================================================================
// 2. READ AND UPDATE OPERATIONS
// ============================================================================

/**
 * Read element at specific index
 * Time Complexity: O(1) - Direct access
 * Space Complexity: O(1)
 */
function readElement(arr, index) {
  if (index < 0 || index >= arr.length) {
    return undefined;
  }
  return arr[index];
}

/**
 * Update element at specific index
 * Time Complexity: O(1) - Direct access
 * Space Complexity: O(1)
 */
function updateElement(arr, index, value) {
  if (index < 0 || index >= arr.length) {
    return false;
  }
  arr[index] = value;
  return true;
}

// ============================================================================
// 3. ITERATE THROUGH ARRAYS
// ============================================================================

/**
 * Forward iteration using for loop
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function forwardIterate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Backward iteration using for loop
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function backwardIterate(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

/**
 * Iterate with forEach
 * Time Complexity: O(n)
 * Space Complexity: O(1) - if not creating new array
 */
function iterateWithForEach(arr, callback) {
  arr.forEach((element, index) => {
    callback(element, index);
  });
}

// ============================================================================
// 4. SEARCH IN ARRAYS
// ============================================================================

/**
 * Linear Search - Find first occurrence
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Best for: Unsorted arrays or when you need the first match
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

/**
 * Binary Search - Only works on sorted arrays
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Best for: Sorted arrays - MUCH faster than linear search
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}

/**
 * Check if element exists using indexOf
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function elementExists(arr, target) {
  return arr.indexOf(target) !== -1;
}

// ============================================================================
// 5. ARRAY END OPERATIONS (Push/Pop)
// ============================================================================

/**
 * Add element at end (Push)
 * Time Complexity: O(1) amortized
 * Space Complexity: O(1)
 * Most efficient insertion when adding to end
 */
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}

/**
 * Remove element from end (Pop)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * Most efficient deletion when removing from end
 */
function removeFromEnd(arr) {
  if (arr.length === 0) return null;
  return arr.pop();
}

// ============================================================================
// 6. ARRAY MIDDLE OPERATIONS (Insert/Remove)
// ============================================================================

/**
 * Insert element at specific index
 * Time Complexity: O(n) - must shift all elements after insertion point
 * Space Complexity: O(1) if modifying in place, O(n) if creating new array
 * Inefficient for operations in the middle
 */
function insertAtIndex(arr, index, value) {
  if (index < 0 || index > arr.length) {
    return false;
  }
  arr.splice(index, 0, value);
  return true;
}

/**
 * Remove element at specific index
 * Time Complexity: O(n) - must shift remaining elements
 * Space Complexity: O(1) if modifying in place
 * Inefficient for operations in the middle
 */
function removeAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    return undefined;
  }
  const removed = arr.splice(index, 1);
  return removed[0];
}

/**
 * Insert multiple elements at index
 * Time Complexity: O(n)
 * Space Complexity: O(1) if modifying in place
 */
function insertMultipleAtIndex(arr, index, elements) {
  if (index < 0 || index > arr.length) {
    return false;
  }
  arr.splice(index, 0, ...elements);
  return true;
}

/**
 * Remove range of elements
 * Time Complexity: O(n)
 * Space Complexity: O(1) if modifying in place
 */
function removeRange(arr, startIndex, endIndex) {
  if (startIndex < 0 || endIndex >= arr.length || startIndex > endIndex) {
    return false;
  }
  arr.splice(startIndex, endIndex - startIndex + 1);
  return true;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Print array in readable format
 */
function printArray(arr) {
  console.log('[' + arr.join(', ') + ']');
}

/**
 * Clone array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function cloneArray(arr) {
  return [...arr];
}

// ============================================================================
// EXPORT ALL FUNCTIONS
// ============================================================================

export {
  createArray,
  readElement,
  updateElement,
  forwardIterate,
  backwardIterate,
  iterateWithForEach,
  linearSearch,
  binarySearch,
  elementExists,
  addToEnd,
  removeFromEnd,
  insertAtIndex,
  removeAtIndex,
  insertMultipleAtIndex,
  removeRange,
  printArray,
  cloneArray,
};
