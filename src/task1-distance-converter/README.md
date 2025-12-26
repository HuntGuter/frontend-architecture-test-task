## Task 1 — Distance Unit Converter

This module implements an extensible distance conversion engine.

Key ideas:
- normalization through a base unit (meters)
- configuration-driven unit definitions
- separation of I/O and business logic
- predictable input/output contract

## Testing

As part of the original assignment, the solution was required to strictly satisfy a predefined automated test.

To ensure compliance with the expected public API and output format, basic tests are executed using **Jest**.

Tests can be run locally with:

```bash
npm test
