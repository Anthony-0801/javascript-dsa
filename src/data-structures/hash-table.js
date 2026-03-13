/**
 * HASH TABLE - Complete Guide
 * ==========================
 * A hash table (hash map) stores key-value pairs and provides (amortized)
 * constant-time lookup, insertion, and deletion on average. Keys are mapped
 * to buckets via a hash function; collisions are handled with chaining here.
 *
 * Key Characteristics:
 * - Average-case O(1) for `get`/`set`/`delete`
 * - Worst-case O(n) when many collisions occur (rare with a good hash)
 * - Space: O(n) for storing entries
 */

// ============================================================================
// 1. SIMPLE HASH + CHAINED BUCKET IMPLEMENTATION
// ============================================================================

/**
 * Basic string/number hash function (djb2-like but simple) that returns an
 * integer in the range [0, capacity).
 */
function _hash(key, capacity) {
	if (typeof key === 'number') return Math.abs(key) % capacity;
	const s = String(key);
	let h = 5381;
	for (let i = 0; i < s.length; i++) {
		h = (h * 33) ^ s.charCodeAt(i);
	}
	return Math.abs(h) % capacity;
}

/**
 * Hash table using separate chaining (array of buckets). Each bucket is an
 * array of [key, value] pairs. This implementation focuses on clarity.
 */
class HashTable {
	constructor(initialCapacity = 53) {
		this._capacity = Math.max(3, initialCapacity);
		this._buckets = Array.from({ length: this._capacity }, () => []);
		this._size = 0;
	}

	// Insert or update
	// Time: O(1) average
	set(key, value) {
		const idx = _hash(key, this._capacity);
		const bucket = this._buckets[idx];
		for (let i = 0; i < bucket.length; i++) {
			if (Object.is(bucket[i][0], key)) {
				bucket[i][1] = value;
				return this;
			}
		}
		bucket.push([key, value]);
		this._size += 1;
		return this;
	}

	// Retrieve value or undefined
	// Time: O(1) average
	get(key) {
		const idx = _hash(key, this._capacity);
		const bucket = this._buckets[idx];
		for (let i = 0; i < bucket.length; i++) {
			if (Object.is(bucket[i][0], key)) return bucket[i][1];
		}
		return undefined;
	}

	// Check presence
	has(key) {
		return this.get(key) !== undefined;
	}

	// Delete key, return true if removed
	// Time: O(1) average
	delete(key) {
		const idx = _hash(key, this._capacity);
		const bucket = this._buckets[idx];
		for (let i = 0; i < bucket.length; i++) {
			if (Object.is(bucket[i][0], key)) {
				bucket.splice(i, 1);
				this._size -= 1;
				return true;
			}
		}
		return false;
	}

	// Get number of entries
	size() {
		return this._size;
	}

	// Get keys as array
	keys() {
		const out = [];
		for (const bucket of this._buckets) {
			for (const [k] of bucket) out.push(k);
		}
		return out;
	}

	// Get values as array
	values() {
		const out = [];
		for (const bucket of this._buckets) {
			for (const [, v] of bucket) out.push(v);
		}
		return out;
	}

	// Print readable representation
	print() {
		console.log('HashTable:', this.keys().map(k => `${String(k)}:${String(this.get(k))}`).join(', '));
	}

	// Shallow clone
	clone() {
		const h = new HashTable(this._capacity);
		for (const bucket of this._buckets) {
			for (const [k, v] of bucket) h.set(k, v);
		}
		return h;
	}
}

// ============================================================================
// 2. FUNCTIONAL / HELPER API
// ============================================================================

function createHashTable(initialCapacity) {
	return new HashTable(initialCapacity);
}

function setHash(table, key, value) {
	return table.set(key, value);
}

function getHash(table, key) {
	return table.get(key);
}

function deleteHash(table, key) {
	return table.delete(key);
}

function hashKeys(table) {
	return table.keys();
}

function hashValues(table) {
	return table.values();
}

// ============================================================================
// NOTES / COLLISIONS
// ============================================================================
/*
 - Collision handling: This implementation uses separate chaining (arrays in buckets).
 - Alternative: open addressing (linear/quadratic probing) reduces memory overhead
	 but requires careful resizing and tombstone handling.
 - Resizing: For production-grade hash tables, grow/shrink when load factor
	 passes thresholds (e.g., >0.7) to maintain O(1) performance.
*/

// ============================================================================
// EXPORTS
// ============================================================================

export {
	HashTable,
	createHashTable,
	setHash,
	getHash,
	deleteHash,
	hashKeys,
	hashValues,
};

