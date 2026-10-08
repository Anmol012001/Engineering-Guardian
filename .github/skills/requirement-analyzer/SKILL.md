---
name: requirement-analyzer
description: Analyse a software requirement against the current codebase, identify implementation coverage, trace relevant files and business rules, identify missing tests, and recommend next steps.
---

# Requirement Analyzer

## Purpose

Use this skill when the user asks to analyse, trace, validate, or assess a software requirement against the existing codebase.

The goal is to establish traceability between:

Requirement → Business Rules → Code → Tests

This skill is read-only. It must not modify project files.

## Inputs

The skill may receive:

- A requirement ID such as REQ-001
- A requirement document
- A natural-language requirement
- A reference to a business rule
- A request to determine whether a requirement is implemented

## Analysis procedure

### Step 1 — Locate the requirement

Search the workspace for the supplied requirement ID or requirement text.

Read the complete relevant requirement documentation.

Extract:

- Requirement statement
- Business rules
- Expected behaviour
- Acceptance criteria
- Testing expectations
- Constraints

Do not assume information that is not present in the requirement.

### Step 2 — Identify implementation

Search the codebase for:

- Relevant class names
- Function names
- Domain terms
- Business rule keywords
- API endpoints
- Components
- Services
- Data models

Inspect the relevant source files.

Identify:

- File path
- Class/function/component
- Relevant implementation logic
- Dependencies
- Related modules

### Step 3 — Trace business rules

For each business rule:

1. Identify whether corresponding implementation exists.
2. Identify the exact code location where possible.
3. Explain how the implementation satisfies the rule.
4. Identify any ambiguity or missing implementation.

Do not consider a rule implemented merely because a similarly named function exists.

### Step 4 — Analyse tests

Search for:

- `.test.ts`
- `.test.tsx`
- `.spec.ts`
- `.spec.tsx`
- Other project-specific test conventions

Identify:

- Existing tests
- Requirements covered by tests
- Missing test scenarios
- Edge cases
- Negative cases

### Step 5 — Determine coverage

Classify the requirement as exactly one of:

- Fully covered
- Partially covered
- Not covered
- Cannot determine

Use the following logic:

### Fully covered

Use when:

- Required behaviour exists
- Business rules are implemented
- Relevant acceptance criteria are implemented
- Appropriate tests exist

### Partially covered

Use when:

- Some required behaviour exists
- But one or more requirements, rules, acceptance criteria, or tests are missing

### Not covered

Use when:

- No meaningful implementation exists

### Cannot determine

Use when:

- Available project evidence is insufficient

### Step 6 — Identify risks

Look for:

- Missing validation
- Missing error handling
- Missing authorization
- Incomplete business rules
- Edge cases
- Regression risks
- Missing tests
- Potential inconsistencies between requirement and implementation

Only report risks supported by repository evidence.

### Step 7 — Recommend next steps

Provide ordered recommendations.

Recommendations should be specific enough for another developer or agent to act on.

## Required output

Return the following structure:

# Requirement Analysis

## 1. Requirement

### Requirement
<requirement>

### Business Rules
<business rules>

### Expected Behaviour
<expected behaviour>

## 2. Implementation Trace

| Requirement / Rule | Implementation | File | Status |
|---|---|---|---|
| ... | ... | ... | Covered / Missing / Partial |

## 3. Codebase Findings

<important implementation observations>

## 4. Test Coverage

### Existing Tests
<tests found>

### Missing Tests
<tests required>

## 5. Overall Coverage

**Status:** Fully covered / Partially covered / Not covered / Cannot determine

### Reason

<evidence-based explanation>

## 6. Risks / Gaps

<identified risks>

## 7. Recommended Next Steps

1. ...
2. ...
3. ...

## Evidence Rules

- Always provide file paths.
- Include line numbers when available.
- Never invent files, classes, functions, or requirements.
- Clearly distinguish evidence from inference.
- If evidence is unavailable, say so.
- Do not modify files.
- Do not execute destructive commands.