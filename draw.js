// Drawing and rendering logic
export const wallColor = "#222";
export const emptyColor = "#ffffff";
export const gridLineColor = "#ddd";
export const startColor = "#2ecc71";
export const goalColor = "#e74c3c";
export const openColor = "#e6ffe6";
export const closedColor = "#ffe6e6";
export const pathColor = "#3498db";
export function draw(canvas, ctx, grid, lastOpen, lastClosed, lastPath, start, goal, cellSize, cols, rows) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let fill = emptyColor;
      if (grid[y][x]) fill = wallColor;
      else if (lastClosed[y][x]) fill = closedColor;
      else if (lastOpen[y][x]) fill = openColor;
      ctx.fillStyle = fill;
      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  if (lastPath.length > 0) {
    ctx.fillStyle = pathColor;
    for (const p of lastPath) {
      ctx.fillRect(p.x * cellSize, p.y * cellSize, cellSize, cellSize);
    }
  }
  ctx.fillStyle = startColor;
  ctx.fillRect(start.x * cellSize, start.y * cellSize, cellSize, cellSize);
  ctx.fillStyle = goalColor;
  ctx.fillRect(goal.x * cellSize, goal.y * cellSize, cellSize, cellSize);
  ctx.strokeStyle = gridLineColor;
  ctx.lineWidth = 1;
  for (let x = 0; x <= cols; x++) {
    ctx.beginPath();
    ctx.moveTo(x * cellSize + 0.5, 0);
    ctx.lineTo(x * cellSize + 0.5, rows * cellSize);
    ctx.stroke();
  }
  for (let y = 0; y <= rows; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * cellSize + 0.5);
    ctx.lineTo(cols * cellSize, y * cellSize + 0.5);
    ctx.stroke();
  }
}
