// Entry point and app initialization
import { draw } from './draw.js';
import { createBoolGrid, inBounds, isWalkable, grid, start, goal, cellSize, cols, rows } from './grid.js';
import { bestFirstSearch, bfs, dstarLite, lpaStar, heuristic, getNeighborsWeighted, getNeighborsUnit, reconstructPath, scoreF } from './algorithms.js';
import * as controls from './controls.js';

// Initialize app here, set up canvas, controls, and event listeners using imported modules
