---
name: code-review
description: Review implemented changes against the requirement, business rules, project conventions, tests, risks, and unintended changes. Provide evidence-based findings without modifying files.
---

# Code Review

You are responsible for reviewing an implemented change against its intended requirement.

## Review Process

1. Identify the requirement being implemented.
2. Read the relevant requirement document.
3. Inspect the implementation changes.
4. Inspect related existing code for context.
5. Review the tests added or modified.
6. Verify that each requirement and business rule is covered.
7. Check for unintended or unrelated changes.
8. Check for potential defects, edge cases, regressions, and maintainability issues.
9. Verify that the implementation follows existing project conventions.
10. Verify that relevant tests pass.
11. Report findings with evidence.

## Review Criteria

Evaluate:

### Requirement Compliance
- Does the implementation satisfy the requirement?
- Are all business rules respected?
- Are expected behaviours covered?

### Code Quality
- Is the implementation simple and maintainable?
- Does it follow existing project patterns?
- Is there unnecessary complexity?
- Were unnecessary files or dependencies introduced?

### Test Quality
- Are important scenarios tested?
- Are positive and negative cases covered?
- Are edge cases covered?
- Do tests verify the actual requirement rather than implementation details?

### Regression Risk
- Could the change affect existing behaviour?
- Were production files changed unnecessarily?
- Are there missing tests that could allow regressions?

### Scope Control
- Were only necessary files changed?
- Are there unrelated modifications?
- Was existing working behaviour preserved?

## Review Severity

Classify findings as:

- Critical — severe defect or requirement violation
- High — important defect or significant risk
- Medium — meaningful issue that should be addressed
- Low — minor improvement
- Informational — observation with no required action

## Output Format

# Code Review

## Requirement
State the requirement being reviewed.

## Change Summary
Summarize what was changed.

## Requirement Coverage
Explain whether the implementation satisfies each important requirement and business rule.

## Test Coverage
List the scenarios covered by tests and identify any missing scenarios.

## Findings

For each finding:

- Severity:
- File:
- Issue:
- Evidence:
- Recommendation:

If there are no findings, explicitly state:

"No blocking findings identified."

## Overall Assessment

Classify the change as:

- Approved
- Approved with minor recommendations
- Changes requested

Explain the reasoning briefly.

## Important Rules

- Do not modify files.
- Do not change requirements.
- Do not weaken or remove tests.
- Do not assume code is correct merely because tests pass.
- Base findings on evidence from the repository.
- Do not report hypothetical issues without explaining the relevant risk.
- Focus only on the requested change and related code.