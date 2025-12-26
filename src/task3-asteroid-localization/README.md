## Task 3 — Asteroid Localization Algorithm

### Overview

This module solves a three-dimensional localization problem using distance measurements from single-use probes.

A stationary asteroid is hidden within a cubic space. Each probe, when activated at a chosen coordinate, returns only the distance to the asteroid. The objective is to determine the exact asteroid coordinates while minimizing the number of probes used.

No direct access to the asteroid location is available — the distance function acts as an external measurement oracle.

---

### Problem Constraints

- The search space is a 3D cube with edge length **100**
- Asteroid coordinates are integer values within the cube
- A probe can be activated at any coordinate
- Each probe returns only the **Euclidean distance** to the asteroid
- Probes are single-use and counted as a limited resource

---

### Solution Approach

The problem is approached as an **optimization task**, not a brute-force search. The problem was intentionally decomposed into three independent one-dimensional searches to achieve deterministic convergence and minimize oracle calls.

Key ideas:
- Treat the distance function as a black-box oracle
- Reduce the 3D localization problem to three independent 1D searches
- Apply **binary search** along each axis
- Fix already-discovered coordinates when searching the next axis
- Minimize the total number of distance measurements

This reduces the probe usage from potentially millions (brute force) to **O(log N)** per axis.

---

### Architecture Overview

The implementation is intentionally split into focused modules:

- **Asteroid generator** — produces a random hidden location
- **Distance calculation** — pure mathematical logic
- **Probe system** — simulates an external measurement oracle and tracks probe usage
- **Search algorithm** — contains the coordinate-finding logic
- **Index (orchestration)** — wires everything together and exposes the public API

This separation keeps the algorithm reusable, testable, and easy to reason about.

---

### Algorithm Highlights

- Binary search is used to determine each coordinate independently
- Distance comparisons determine the search direction
- The algorithm converges deterministically to the exact integer coordinates
- Probe usage is tracked transparently for analysis

---

### Output Format

The module returns:
- the detected asteroid location
- the number of probes used
- the coordinates where probes were activated

Example:
```json
{
  "result": {
    "location": { "x": 34, "y": 50, "z": 60 },
    "probes": {
      "count": 44,
      "coordinates": [
        { "x": 10, "y": 9, "z": 21 },
        { "x": 10, "y": 4, "z": 11 }
      ]
    }
  }
}
```
### Design Considerations

- Global state is avoided; probe tracking is encapsulated
- The search algorithm is isolated from measurement infrastructure
- Dependencies are injected explicitly to keep logic pure
- The solution prioritizes correctness, determinism, and efficiency

### Key Engineering Concepts Demonstrated

- Algorithmic optimization
- Vector-based reasoning
- Binary search in multi-dimensional space
- Resource-aware design
- Clean separation of concerns