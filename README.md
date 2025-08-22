# Grid Pathfinding (HTML5 Canvas)

A single-page, dependency-free demo of grid pathfinding on an occupancy-like grid using HTML5 Canvas. It includes:

- A*
- Weighted A* (f = g + w·h)
- Dijkstra
- Greedy Best-First Search
- BFS (unit weights)

All algorithms support optional diagonal motion (with octile distance heuristic and corner-cutting prevention).

## Live demo (GitHub Pages)

Once GitHub Pages is enabled for this repository, your demo will be available at:

- https://iamsome1.github.io/grid-pathfinding-html5/

Enable Pages in: Settings → Pages → Build and deployment → Source: "Deploy from a branch"; Branch: "main" and "/ (root)". Save, then wait ~1–2 minutes.

## Run locally

- Download or clone this repo.
- Open index.html in any modern browser. No build step required.

## Usage

- Tools:
  - Draw walls: click/drag on the grid to place obstacles.
  - Erase: remove walls.
  - Set Start / Set Goal: click to place start/goal cells.
- Randomize: create random walls with a chosen density; clears a small area around start/goal.
- Algorithm dropdown: choose A*, Weighted A*, Dijkstra, Greedy, or BFS.
- w slider: weight for Weighted A* (ignored by other algorithms).
- Diagonals: toggles 8-directional movement with octile heuristic and corner-cutting prevention.
- Run: executes the selected algorithm and visualizes open/closed sets and the final path.
- Clear path: clears previous visualization results.

Colors:
- Start: green
- Goal: red
- Walls: black
- Open set: light green
- Closed set: light red
- Path: blue

## Notes

- A*, Dijkstra, Greedy share a common best-first-search loop; BFS is a separate unit-cost queue-based search.
- For performance clarity this implementation uses a simple array as the open list (linear scan). For larger grids, replacing it with a binary heap priority queue will speed things up.
- Diagonal moves use cost √2 and prevent corner cutting when both adjacent orthogonals are blocked.

## License

MIT — see LICENSE.
MIT License

Copyright (c) 2025 iamsome1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
