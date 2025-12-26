## Task 4 — Dynamic Survey Engine

### Overview

This module implements a **dynamic survey engine** where the order and presence of questions depend entirely on user answers.

The survey logic is fully **configuration-driven** and does not rely on hardcoded flows.  
All possible survey paths are generated programmatically without requiring a user interface.

---

### Problem Description

- The survey consists of **multiple-choice questions only**
- Each answer determines the next question
- The structure and logic of the survey are defined via configuration
- The system must generate **all possible valid question–answer paths**
- No UI is required — only the survey logic and traversal script

---

### Solution Approach

The survey is modeled as a **directed acyclic graph (DAG)**:

- Each question represents a node
- Each answer option represents a directed edge to the next node
- A complete survey path is a path from the `start` node to a terminal node

To generate all possible survey outcomes, the implementation performs a **depth-first traversal (DFS)** of the dialog graph.

---

### Architecture Overview

The module is intentionally split into isolated responsibilities:

- **Configuration (`dialogTree.json`)**
  - Defines questions, answers, and transitions
  - Contains no logic

- **Traversal logic**
  - Performs a recursive DFS over the dialog graph
  - Generates all possible paths as sequences of question–answer pairs

- **Formatting layer**
  - Normalizes output format
  - Ensures all keys and values are strings
  - Keeps presentation concerns separate from traversal logic

- **Public API (`index.js`)**
  - Orchestrates traversal and formatting
  - Exposes a single entry point

This separation ensures clarity, testability, and extensibility.

---

### Algorithm Highlights

- Depth-first traversal of a graph-like configuration
- Each path is generated independently
- No shared mutable state between paths
- Deterministic and exhaustive exploration of all valid survey flows

---

### Output Format

The engine returns:
- the total number of possible survey paths
- a list of all question–answer sequences

Example output:
```json
{
  "paths": {
    "number": 3,
    "list": [
      [
        { "What is your marital status?": "Single" },
        { "Are you planning on getting married next year?": "Yes/No" }
      ],
      [
        { "What is your marital status?": "Married" },
        { "How long have you been married?": "Less than a year" }
      ],
      [
        { "What is your marital status?": "Married" },
        { "How long have you been married?": "More than a year" },
        { "Have you celebrated your one year anniversary?": "Yes/No" }
      ]
    ]
  }
}
```

### Design Considerations

- The survey flow is entirely data-driven
- Business logic is decoupled from configuration
- The traversal algorithm is reusable for other dialog-based systems
- The solution assumes an acyclic configuration (as defined by the task)

### Key Engineering Concepts Demonstrated

- Graph traversal (DFS)
- Finite-state–like modeling
- Configuration-driven workflows
- Separation of concerns
- Deterministic path generation without UI