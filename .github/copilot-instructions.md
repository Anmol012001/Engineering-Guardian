# Engineering Guardian — Engineering Standards

## Requirement Traceability

Every implementation change must be traceable to a documented requirement.

The engineering workflow is:

Requirement
→ Analysis
→ Plan
→ Implementation
→ Tests
→ Validation
→ Code Review

Do not implement functionality that cannot be connected to the requested requirement.

## Change Control

- Make the smallest reasonable change that satisfies the requirement.
- Do not modify unrelated files.
- Do not rewrite working code unnecessarily.
- Preserve existing behaviour unless the requirement explicitly changes it.
- Prefer additive changes when they reduce regression risk.
- Do not introduce dependencies unless they are justified by the requirement or existing project conventions.

## Requirement Integrity

- Never modify a requirement merely to make an implementation or test pass.
- If the implementation conflicts with the requirement, report the conflict.
- Treat requirement documents as the source of expected behaviour.
- Clearly distinguish requirement changes from implementation changes.

## Testing

Every functional implementation change should have appropriate automated tests.

Tests should cover:

- expected behaviour
- negative behaviour
- important edge cases
- relevant business rules
- regression-sensitive behaviour

Never remove or weaken a test simply to obtain a passing result.

## Validation

Before declaring an implementation successful:

1. Run the relevant test suite.
2. Investigate failures rather than assuming success.
3. Verify the final Git working-tree scope.
4. Review the implementation against the requirement.
5. Report the actual validation results.

Never report tests as passing unless they were actually executed successfully.

## Code Review

A completed implementation should be reviewed for:

- requirement compliance
- business-rule compliance
- test coverage
- regression risk
- code quality
- unnecessary complexity
- unrelated changes
- Git scope

A passing test suite alone does not automatically mean the change is approved.

## Safety

Do not:

- delete files without explicit justification
- change requirements to make tests pass
- remove failing tests
- hide validation failures
- modify credentials or secrets
- make unrelated configuration changes
- commit or push changes unless explicitly requested
- make broad refactors when a focused change is sufficient

## Reporting

Every completed implementation should report:

- requirement addressed
- files changed
- implementation summary
- tests added or changed
- validation command
- validation result
- Git scope
- review status
- remaining risks or limitations