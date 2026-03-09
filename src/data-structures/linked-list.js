/**
 * LINKED LISTS - Complete Guide
 * ==============================
 * A linked list is a linear data structure where each element is a node
 * that contains a value and a reference (pointer) to the next node.
 * Unlike arrays, nodes are not stored in contiguous memory.
 *
 * Key Characteristics:
 * - Dynamic size (can grow/shrink easily)
 * - O(n) access time by index (must traverse)
 * - O(1) insertion/deletion at head (given the node)
 * - O(1) insertion at tail if tail pointer maintained
 */

// ============================================================================
// 1. NODE + LINKED LIST BASICS
// ============================================================================

/**
 * Node class represents an individual element in the linked list.
 * It contains `value` and a `next` pointer to the next node.
 */
class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null; // pointer to next node
	}
}

/**
 * Simple singly linked list implementation with head and tail pointers.
 * This implementation focuses on clarity and common operations.
 */
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Create list from array of elements
	// Time: O(n)
	fromArray(arr) {
		arr.forEach((el) => this.insertAtTail(el));
		return this;
	}

	// Convert list to array by traversing
	// Time: O(n)
	toArray() {
		const result = [];
		let curr = this.head;
		while (curr) {
			result.push(curr.value);
			curr = curr.next;
		}
		return result;
	}

	// Insert at head (beginning)
	// Time: O(1)
	insertAtHead(value) {
		const node = new ListNode(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length += 1;
		return this;
	}

	// Insert at tail (end)
	// Time: O(1) when tail is maintained
	insertAtTail(value) {
		const node = new ListNode(value);
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

	// Find first node with given value; returns node or null
	// Time: O(n)
	find(value) {
		let curr = this.head;
		while (curr) {
			if (curr.value === value) return curr;
			curr = curr.next;
		}
		return null;
	}

	// Remove first node with given value
	// Time: O(n)
	removeByValue(value) {
		if (!this.head) return null;

		// If head needs removal
		if (this.head.value === value) {
			const removed = this.head;
			this.head = this.head.next;
			if (!this.head) this.tail = null;
			removed.next = null;
			this.length -= 1;
			return removed;
		}

		let prev = this.head;
		let curr = this.head.next;
		while (curr) {
			if (curr.value === value) {
				prev.next = curr.next;
				if (curr === this.tail) this.tail = prev;
				curr.next = null;
				this.length -= 1;
				return curr;
			}
			prev = curr;
			curr = curr.next;
		}
		return null; // not found
	}

	// Remove node at specific index (0-based)
	// Time: O(n)
	removeAtIndex(index) {
		if (index < 0 || index >= this.length || !this.head) return null;
		if (index === 0) {
			const removed = this.head;
			this.head = this.head.next;
			if (!this.head) this.tail = null;
			removed.next = null;
			this.length -= 1;
			return removed;
		}

		let prev = this.head;
		let curr = this.head.next;
		let i = 1;
		while (curr && i <= index) {
			if (i === index) {
				prev.next = curr.next;
				if (curr === this.tail) this.tail = prev;
				curr.next = null;
				this.length -= 1;
				return curr;
			}
			prev = curr;
			curr = curr.next;
			i += 1;
		}
		return null;
	}

	// Insert at specific index (0-based). If index === length, insert at tail.
	// Time: O(n)
	insertAtIndex(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) {
			this.insertAtHead(value);
			return true;
		}
		if (index === this.length) {
			this.insertAtTail(value);
			return true;
		}

		let prev = this.head;
		let currIndex = 1;
		while (prev && currIndex < index) {
			prev = prev.next;
			currIndex += 1;
		}
		const node = new ListNode(value);
		node.next = prev.next;
		prev.next = node;
		this.length += 1;
		return true;
	}

	// Get value at index
	// Time: O(n)
	getAtIndex(index) {
		if (index < 0 || index >= this.length) return undefined;
		let curr = this.head;
		let i = 0;
		while (curr && i < index) {
			curr = curr.next;
			i += 1;
		}
		return curr ? curr.value : undefined;
	}

	// Get size of list
	// Time: O(1)
	size() {
		return this.length;
	}

	// Check if empty
	// Time: O(1)
	isEmpty() {
		return this.length === 0;
	}

	// Print list in readable format
	print() {
		console.log('LinkedList:', this.toArray().join(' -> '));
	}

	// Clone list (shallow clone of values)
	// Time: O(n)
	clone() {
		const cloned = new LinkedList();
		let curr = this.head;
		while (curr) {
			cloned.insertAtTail(curr.value);
			curr = curr.next;
		}
		return cloned;
	}
}

// ============================================================================
// 2. USAGE HELPERS (FUNCTIONAL API)
// ============================================================================

function createLinkedListFromArray(arr) {
	const list = new LinkedList();
	list.fromArray(arr);
	return list;
}

function traverse(list) {
	return list.toArray();
}

function insertHead(list, value) {
	return list.insertAtHead(value);
}

function insertTail(list, value) {
	return list.insertAtTail(value);
}

function deleteByValue(list, value) {
	return list.removeByValue(value);
}

function deleteAtIndex(list, index) {
	return list.removeAtIndex(index);
}

// ============================================================================
// 3. LINKED LIST VS ARRAY - NOTES
// ============================================================================
/*
 - Access: Arrays provide O(1) random access; linked lists require O(n) traversal.
 - Insertion/Deletion: Linked lists have O(1) insertion/deletion at head (and
	 at tail if pointer maintained); arrays require O(n) to shift elements.
 - Memory: Arrays store contiguous memory which can be more cache-friendly;
	 linked lists allocate nodes separately and require extra memory for pointers.
 - Use cases: Use arrays when you need fast random access; use linked lists
	 when you need frequent insertions/deletions at the ends or middle (and do
	 not need random access).
*/

// ============================================================================
// EXPORTS
// ============================================================================

export {
	ListNode,
	LinkedList,
	createLinkedListFromArray,
	traverse,
	insertHead,
	insertTail,
	deleteByValue,
	deleteAtIndex,
};

