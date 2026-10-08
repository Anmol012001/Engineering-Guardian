---
name: code-change-planner
description: Create an evidence-based implementation plan for a software requirement by identifying affected files, required changes, dependencies, risks, and validation steps without modifying the codebase.
---

# Code Change Planner

## Purpose

Use this skill when a requirement has been analysed and the user wants to understand how it should be implemented in the existing codebase.

This skill is planning-only.

It must NOT modify files.

The goal is to create a safe, traceable implementation plan before code changes are made.

## Inputs

The skill may receive:

- A requirement ID
- A requirement document
- A natural-language change request
- An existing requirement analysis
- A business rule that needs implementation

## Planning procedure

### Step 1 — Understand the requirement

Identify:

- Requirement
- Business rules
- Expected behaviour
- Acceptance criteria
- Testing expectations

If the requirement is ambiguous, explicitly identify the ambiguity.

### Step 2 — Inspect the existing implementation

Search the repository for relevant:

- Files
- Functions
- Classes
- Components
- Services
- Models
- APIs
- Tests

Understand how the current implementation works before proposing changes.

### Step 3 — Identify affected files

Classify files into:

- Files that must change
- Files that may change
- Files that should be tested
- Files that should remain unchanged

Always provide file paths.

### Step 4 — Determine required changes

For each affected file, describe:

- What needs to change
- Why it needs to change
- Which requirement or business rule drives the change

Do not write code during this step.

### Step 5 — Identify dependencies

Check whether the change affects:

- Other modules
- APIs
- Data models
- UI components
- Validation
- Authorization
- Existing workflows
- Tests

### Step 6 — Identify risks

Look for:

- Regression risk
- Breaking changes
- Missing validation
- Security implications
- Backward compatibility concerns
- Missing tests
- Unclear requirements

Only report risks supported by repository evidence.

### Step 7 — Define validation strategy

Specify:

- Unit tests
- Integration tests
- Regression tests
- Edge cases
- Negative scenarios

where applicable.

## Required output

Return:

# Code Change Plan

## 1. Requirement

<requirement summary>

## 2. Current Implementation

<current behaviour>

## 3. Affected Files

| File | Change Type | Reason |
|---|---|---|
| ... | Must change / May change / Test | ... |

## 4. Proposed Changes

### File: <path>

- Change:
- Reason:
- Related requirement:

Repeat for every affected file.

## 5. Dependencies

<dependencies and downstream impact>

## 6. Risks

<identified risks>

## 7. Testing Plan

### Unit Tests
<tests>

### Integration Tests
<tests>

### Regression Tests
<tests>

### Edge Cases
<tests>

## 8. Implementation Order

1. ...
2. ...
3. ...

## 9. Definition of Done

The change is considered complete only when:

- Required implementation exists
- Business rules are satisfied
- Required tests exist
- Tests pass
- No unrelated files are changed
- Requirement traceability can be demonstrated

## Rules

- Do not modify files.
- Do not invent project architecture.
- Do not assume a file needs modification without evidence.
- Prefer existing project patterns over introducing new patterns.
- Always identify the smallest reasonable change.
- Explicitly state uncertainty.