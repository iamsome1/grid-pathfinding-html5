// Pathfinding algorithms and helpers
export function heuristic(ax, ay, bx, by, diag) {
  const dx = Math.abs(ax - bx);
  const dy = Math.abs(ay - by);
  if (diag) {
    const D = 1, D2 = Math.SQRT2;
    return D * (dx + dy) + (D2 - 2 * D) * Math.min(dx, dy);
  } else {
    return dx + dy;
  }
}
// Export all other algorithm functions here (bestFirstSearch, bfs, dstarLite, lpaStar, getNeighborsWeighted, getNeighborsUnit, reconstructPath, scoreF)
// --- BEGIN ALGORITHM EXPORTS ---
export function bestFirstSearch(start, goal, allowDiag, mode = "astar", weight = 1.0) {
  // ...full implementation from main.js...
  // (Copy the actual code for bestFirstSearch here)
}
export function bfs(start, goal, allowDiag) {
  // ...full implementation from main.js...
}
export function dstarLite(start, goal, allowDiag) {
  // ...full implementation from main.js...
}
export function lpaStar(start, goal, allowDiag) {
  // ...full implementation from main.js...
}
export function getNeighborsWeighted(x, y, diag) {
  // ...full implementation from main.js...
}
export function getNeighborsUnit(x, y, diag) {
  // ...full implementation from main.js...
}
export function reconstructPath(cameFrom, x, y) {
  // ...full implementation from main.js...
}
export function scoreF(g, h, mode, w) {
  // ...full implementation from main.js...
}
// --- END ALGORITHM EXPORTS ---
