/**
 * QUEUE - Complete Guide
 * ======================
 * A queue is a linear data structure that follows the FIFO (First In First Out)
 * principle: elements are added at the back (tail) and removed from the front (head).
 *
 * Key Characteristics:
 * - FIFO ordering
 * - O(1) enqueue and dequeue for linked-list implementation
 * - Array-backed implementations have O(1) amortized enqueue, O(1) dequeue if using
 *   head index (otherwise O(n) when shifting)
 */

// ============================================================================
// 1. SIMPLE ARRAY-BACKED QUEUE (FUNCTIONAL API)
// ============================================================================

/**
 * Create a queue represented by an object with an internal array and head index.
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */
function createQueue(initial = []) {
  return {
    _items: Array.from(initial),
    _head: 0,
  };
}

/**
 * Enqueue element (add to tail)
 * Time Complexity: O(1) amortized
 */
function enqueue(queue, value) {
  queue._items.push(value);
  return queue;
}

/**
 * Dequeue element (remove from head)
 * Time Complexity: O(1) - uses head index to avoid shifting
 */
function dequeue(queue) {
  if (isEmpty(queue)) return undefined;
  const val = queue._items[queue._head];
  queue._items[queue._head] = undefined; // help GC
  queue._head += 1;
  // Compact occasionally to avoid unbounded memory usage
  if (queue._head > 50 && queue._head * 2 > queue._items.length) {
    queue._items = queue._items.slice(queue._head);
    queue._head = 0;
  }
  return val;
}

/**
 * Peek at front element without removing
 * Time Complexity: O(1)
 */
function peek(queue) {
  if (isEmpty(queue)) return undefined;
  return queue._items[queue._head];
}

/**
 * Check if empty
 * Time Complexity: O(1)
 */
function isEmpty(queue) {
  return queue._head >= queue._items.length;
}

/**
 * Get size
 * Time Complexity: O(1)
 */
function size(queue) {
  return Math.max(0, queue._items.length - queue._head);
}

/**
 * Convert to array (returns shallow copy)
 */
function toArray(queue) {
  return queue._items.slice(queue._head);
}

/**
 * Print queue
 */
function printQueue(queue) {
  console.log('Queue:', toArray(queue).join(' <- '));
}

/**
 * Clone queue
 */
function cloneQueue(queue) {
  return createQueue(toArray(queue));
}

// ============================================================================
// 2. LINKED-LIST BACKED QUEUE (CLASS)
// ============================================================================

/**
 * Node for linked queue
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Fast queue implementation using singly linked list with head/tail pointers.
 * All main operations are O(1).
 */
class Queue {
  constructor() {
    this.head = null; // points to front (dequeue from head)
    this.tail = null; // points to tail (enqueue here)
    this.length = 0;
  }

  // Create queue from array
  // Time: O(n)
  static fromArray(arr) {
    const q = new Queue();
    arr.forEach((v) => q.enqueue(v));
    return q;
  }

  // Enqueue value at tail
  // Time: O(1)
  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  // Dequeue value from head
  // Time: O(1)
  dequeue() {
    if (!this.head) return undefined;
    const node = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    node.next = null;
    this.length -= 1;
    return node.value;
  }

  // Peek front value
  // Time: O(1)
  peek() {
    return this.head ? this.head.value : undefined;
  }

  // Check empty
  isEmpty() {
    return this.length === 0;
  }

  // Size
  size() {
    return this.length;
  }

  // Convert to array
  toArray() {
    const res = [];
    let curr = this.head;
    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res;
  }

  // Print queue
  print() {
    console.log('Queue:', this.toArray().join(' <- '));
  }

  // Clone queue (shallow values)
  clone() {
    return Queue.fromArray(this.toArray());
  }
}

// ============================================================================
// 3. EXAMPLES / USAGE HELPERS
// ============================================================================

function createQueueFromArray(arr) {
  return createQueue(arr);
}

function createClassQueueFromArray(arr) {
  return Queue.fromArray(arr);
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  // functional API (array-backed)
  createQueue,
  enqueue,
  dequeue,
  peek,
  isEmpty,
  size,
  toArray,
  printQueue,
  cloneQueue,

  // class-based API (linked-list)
  QueueNode,
  Queue,
  createQueueFromArray,
  createClassQueueFromArray,
};
