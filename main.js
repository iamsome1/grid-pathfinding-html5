// Entry point and app initialization
import { draw } from './draw.js';
import { createBoolGrid, inBounds, isWalkable, grid, start, goal, cellSize, cols, rows } from './grid.js';
import { bestFirstSearch, bfs, dstarLite, lpaStar, heuristic, getNeighborsWeighted, getNeighborsUnit, reconstructPath, scoreF } from './algorithms.js';

// Get canvas and context
const canvas = document.getElementById('grid');
const ctx = canvas.getContext('2d');
canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

// State for visualization
let lastOpen = createBoolGrid(false);
let lastClosed = createBoolGrid(false);
let lastPath = [];

// Draw initial grid
draw(canvas, ctx, grid, lastOpen, lastClosed, lastPath, start, goal, cellSize, cols, rows);

// Example: connect Run button to run the selected algorithm and redraw
const runBtn = document.getElementById('runBtn');
const algoSelect = document.getElementById('algo');
const diagCheckbox = document.getElementById('diag');
const weightInput = document.getElementById('weight');

runBtn.addEventListener('click', () => {
	const allowDiag = diagCheckbox.checked;
	const algo = algoSelect.value;
	const w = Number(weightInput.value) || 1;
	let result;
	if (algo === 'bfs') {
		result = bfs(start, goal, allowDiag);
	} else if (algo === 'dstar') {
		result = dstarLite(start, goal, allowDiag);
	} else if (algo === 'lpa') {
		result = lpaStar(start, goal, allowDiag);
	} else {
		result = bestFirstSearch(start, goal, allowDiag, algo, w);
	}
	lastOpen = createBoolGrid(false);
	lastClosed = createBoolGrid(false);
	lastPath = result.path || [];
	draw(canvas, ctx, grid, lastOpen, lastClosed, lastPath, start, goal, cellSize, cols, rows);
});
