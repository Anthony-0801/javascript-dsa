/**
 * CHALLENGE 10: VALID SUDOKU
 * ==========================
 * Validate a partially filled 9x9 Sudoku board.
 *
 * Problem:
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated
 * according to the rules: each row, each column, and each of the nine 3x3 sub-boxes must contain
 * the digits 1-9 without repetition. The board may contain the character '.' to represent empty cells.
 *
 * Example:
 * Input: board = [
 *  ['5','3','.','.','7','.','.','.','.'],
 *  ['6','.','.','1','9','5','.','.','.'],
 *  ['.','9','8','.','.','.','.','6','.'],
 *  ['8','.','.','.','6','.','.','.','3'],
 *  ['4','.','.','8','.','3','.','.','1'],
 *  ['7','.','.','.','2','.','.','.','6'],
 *  ['.','6','.','.','.','.','2','8','.'],
 *  ['.','.','.','4','1','9','.','.','5'],
 *  ['.','.','.','.','8','.','.','7','9']
 * ]
 * Output: true
 *
 * Constraints:
 * - board.length == 9
 * - board[i].length == 9
 * - board[i][j] is a digit or '.'
 *
 * Big O Hints:
 * - Time Complexity: O(1) since board size is fixed (or O(81))
 * - Space Complexity: O(1) (constant) for tracking seen numbers in rows/cols/boxes
 */

// ============================================================================
// YOUR SOLUTION HERE
// ============================================================================

/**
 * @param {character[][]} board
 * @return {boolean}
 */
export function isValidSudoku(board) {
  // TODO: Implementation required
  throw new Error('Not implemented');
}

// ============================================================================
// EXAMPLE USAGE (for testing)
// ============================================================================

/*
const board = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];
console.log(isValidSudoku(board)); // true
*/

export default isValidSudoku;
