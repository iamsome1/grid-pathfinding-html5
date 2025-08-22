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
// ...existing code from main.js for algorithms...
