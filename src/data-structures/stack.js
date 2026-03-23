/**
 * STACKS - Complete Guide
 * ======================
 * A stack is a linear data structure that follows Last-In-First-Out (LIFO) order.
 * Elements are added and removed from the same end (the "top").
 *
 * Key Characteristics:
 * - LIFO ordering
 * - O(1) push/pop/peek operations (using underlying array)
 * - Useful for function call stacks, backtracking, and expression evaluation
 */

// ============================================================================
// 1. WHAT IS A STACK - BASIC OPERATIONS
// ============================================================================

/**
 * Create a stack
 * Time Complexity: O(n) - to clone initial elements
 * Space Complexity: O(n)
 */
function createStack(initialElements) {
  return initialElements ? [...initialElements] : [];
}

// ============================================================================
// 2. STACK MUTATION & ACCESS
// ============================================================================

/**
 * Push a value onto the stack
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function push(stack, value) {
  stack.push(value);
  return stack;
}

/**
 * Pop a value from the stack
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function pop(stack) {
  if (stack.length === 0) return null;
  return stack.pop();
}

/**
 * Peek at the top value without removing
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function peek(stack) {
  if (stack.length === 0) return undefined;
  return stack[stack.length - 1];
}

/**
 * Check if stack is empty
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function isEmpty(stack) {
  return stack.length === 0;
}

/**
 * Get current stack size
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function size(stack) {
  return stack.length;
}

// ============================================================================
// 3. HELPER FUNCTIONS
// ============================================================================

/**
 * Convert stack to an array (bottom -> top)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function toArray(stack) {
  return [...stack];
}

/**
 * Clone a stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function cloneStack(stack) {
  return [...stack];
}

/**
 * Clear a stack in-place
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function clearStack(stack) {
  stack.length = 0;
  return stack;
}

/**
 * Print stack for human-readable output (Top shown first)
 */
function printStack(stack) {
  console.log('Top -> [' + stack.slice().reverse().join(', ') + '] <- Bottom');
}

// ============================================================================
// 4. STACK-BASED APPLICATIONS
// ============================================================================

/**
 * Check if brackets in a string are balanced
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isBalancedParentheses(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
      continue;
    }
    if (ch === ')' || ch === '}' || ch === ']') {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (pairs[ch] !== top) return false;
    }
  }
  return stack.length === 0;
}

/**
 * Reverse a string using a stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseStringUsingStack(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) stack.push(s[i]);
  let res = '';
  while (stack.length) res += stack.pop();
  return res;
}

/**
 * Evaluate a postfix (Reverse Polish) expression.
 * Tokens can be space-separated (recommended) or contiguous single-character tokens.
 * Supports +, -, *, / operators.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function evaluatePostfix(expression) {
  if (!expression || expression.length === 0) return null;
  const tokens = expression.includes(' ') ? expression.trim().split(/\s+/) : expression.split('');
  const stack = [];

  for (const t of tokens) {
    if (!isNaN(t)) {
      stack.push(Number(t));
      continue;
    }
    const b = stack.pop();
    const a = stack.pop();
    if (a === undefined || b === undefined) return null;
    switch (t) {
      case '+':
        stack.push(a + b);
        break;
      case '-':
        stack.push(a - b);
        break;
      case '*':
        stack.push(a * b);
        break;
      case '/':
        stack.push(a / b);
        break;
      default:
        // unsupported token
        return null;
    }
  }
  return stack.pop();
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  createStack,
  push,
  pop,
  peek,
  isEmpty,
  size,
  toArray,
  cloneStack,
  clearStack,
  printStack,
  isBalancedParentheses,
  reverseStringUsingStack,
  evaluatePostfix,
};
