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
export function bestFirstSearch() {}
export function bfs() {}
export function dstarLite() {}
export function lpaStar() {}
export function getNeighborsWeighted() {}
export function getNeighborsUnit() {}
export function reconstructPath() {}
export function scoreF() {}
// --- END ALGORITHM EXPORTS ---
