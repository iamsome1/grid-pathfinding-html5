// Grid data structure and related functions
export const cellSize = 24;
export const cols = 32;
export const rows = 22;
export let grid = Array.from({ length: rows }, () => Array(cols).fill(false));
export let start = { x: 2, y: 2 };
export let goal = { x: cols - 3, y: rows - 3 };
export function createBoolGrid(val) {
  return Array.from({ length: rows }, () => Array(cols).fill(val));
}
export function inBounds(x, y) { return x >= 0 && x < cols && y >= 0 && y < rows; }
export function isWalkable(x, y) { return inBounds(x, y) && !grid[y][x]; }
