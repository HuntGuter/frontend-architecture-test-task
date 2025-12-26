# Anonymized Technical Assignment — Software Engineering Case Study

## Overview

This repository contains an **anonymized technical assignment** implemented as a set of independent tasks.

The project demonstrates core software engineering principles, including:
- modular architecture
- extensibility and configurability
- clean data processing
- algorithmic problem solving
- separation of concerns
- scalability-oriented design decisions

All company-specific details have been removed or generalized.  
The code is published solely for **portfolio demonstration purposes**.

---

## Tech Stack

- **JavaScript (ES6+)**
- No external frameworks or libraries
- Configuration-driven design
- Modular architecture

---

## Task 1 — Distance Unit Converter

### Description

An extensible application for converting distances between **metric** and **imperial** measurement systems.

### Supported Features

- Conversion between multiple units (e.g. meters, centimeters, inches, feet)
- Conversion between any supported unit pairs
- Output rounding to two decimal places
- Configuration-driven unit definitions

### Extensibility

The application supports adding new units **without modifying the core logic**.  
All conversion rules are defined via an external configuration file, allowing the system to scale naturally as new units are introduced.

### Input Example

```json
{
  "distance": { "unit": "m", "value": 0.5 },
  "convert_to": "ft"
}
```

### Output Example

```json
{
  "unit": "ft",
  "value": 1.64
}
```

### Key Engineering Focus

- separation of logic and configuration
- precision handling
- predictable data contracts
- future-proof design

---

## Task 2 — Data Filtering and Sorting Engine

### Description

A generic engine for filtering and sorting collections of objects with arbitrary structure, based on predefined rules.

### Supported Rules

- include — select objects matching key–value conditions

- exclude — remove objects matching key–value conditions

- sort_by — sort objects using natural ordering

### Architecture

Each rule is implemented as an independent module with a unified interface.
The core engine orchestrates rule execution without depending on concrete implementations.

### This design enables:

- easy addition of new rules
- zero coupling between rules
- predictable execution flow

### Input Example

```json
{
  "data": [
    { "user": "mike@mail.com", "rating": 20, "disabled": false },
    { "user": "greg@mail.com", "rating": 14, "disabled": false },
    { "user": "john@mail.com", "rating": 25, "disabled": true }
  ],
  "condition": {
    "exclude": [{ "disabled": true }],
    "sort_by": ["rating"]
  }
}
```

### Output Example

```json
{
  "result": [
    { "user": "greg@mail.com", "rating": 14, "disabled": false },
    { "user": "mike@mail.com", "rating": 20, "disabled": false }
  ]
}
```

### Key Engineering Focus

- modular rule engine
- open/closed principle
- data-agnostic processing
- extensible design

---

## Task 3 — Asteroid Localization Algorithm

### Description

A computational problem focused on determining the location of a stationary asteroid using distance measurements from single-use probes.

### Problem Constraints

- 3D space represented as a cube with edge length 100
- asteroid located at integer coordinates within the cube
- probes return only the distance to the asteroid
- objective: minimize the number of probes used

### Solution Overview

- random generation of asteroid coordinates
- distance function calculating Euclidean distance
- algorithmic strategy to converge on the asteroid’s position
- tracking probe usage and coordinates

### Output Example

```json
{
  "result": {
    "asteroidLocation": { "x": 34, "y": 50, "z": 60 },
    "zondCoordinates": [
      { "x": 10, "y": 9, "z": 21 }
    ],
    "zondsSpent": 44
  }
}
```

### Key Engineering Focus

- algorithm design
- vector-based reasoning
- optimization under constraints
- transparent result reporting

---

## Task 4 — Dynamic Survey Engine

### Description

A configurable survey system where the order and presence of questions depend on user answers.

### Features

- multiple-choice questions only
- dynamic question flow
- configuration-driven logic
- full traversal of all possible answer paths

### Design

- survey logic is decoupled from configuration
- configuration defines: questions, possible answers, transitions between questions, testing script automatically explores all valid paths

### Output Example

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

### Key Engineering Focus

- finite-state-like modeling
- configuration-driven workflows
- exhaustive path exploration
- testability without UI

---

### General Design Principles Applied

- modularity and isolation
- extensibility without refactoring
- predictable data contracts
- clean separation of responsibilities
- scalability-oriented thinking

---

This repository contains an anonymized version of a technical assignment.

All identifying details have been removed or modified.

The project is published exclusively as a portfolio case study.

---

GitHub: https://github.com/HuntGuter

LinkedIn: https://www.linkedin.com/in/huntguter/
