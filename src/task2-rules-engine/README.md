## Task 2 — Rules Engine

This module implements a generic rule-based data processing engine.

Key ideas:
- rule isolation
- unified rule interface
- open/closed principle
- extensibility without refactoring

Each rule operates independently and can be added without modifying the core engine.
Multiple include and exclude conditions are combined using logical AND semantics.
