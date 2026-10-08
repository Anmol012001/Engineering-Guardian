---
name: test-generator
description: Create focused automated tests for implemented software requirements using the project's existing testing patterns and conventions.
---

# Test Generator

## Purpose

Use this skill when a requirement has an existing implementation but lacks sufficient automated verification.

The skill creates or updates tests to verify the requirement.

## Core principle

Tests must verify the requirement, not merely reproduce the implementation.

## Procedure

### Step 1 — Understand the requirement

Identify:

- Requirement
- Business rules
- Expected behaviour
- Acceptance criteria
- Required scenarios

### Step 2 — Inspect the implementation

Identify:

- Function/class/component under test
- Input types
- Output types
- Existing error handling
- Existing project patterns

Do not change the implementation unless explicitly requested.

### Step 3 — Inspect existing tests

Search for existing test conventions.

Look for:

- `.test.ts`
- `.test.tsx`
- `.spec.ts`
- `.spec.tsx`
- Existing test framework configuration
- Existing package scripts

Follow the project's existing testing conventions whenever possible.

### Step 4 — Identify test scenarios

At minimum consider:

- Happy path
- Negative cases
- Boundary cases
- Empty input
- Invalid input when specified
- Business-rule violations
- Regression scenarios
- Immutability when required

Only add scenarios supported by the requirement or existing project behaviour.

### Step 5 — Implement tests

Create or update the smallest appropriate test file.

Do not modify production code merely to make tests easier to write.

### Step 6 — Run tests

Run the project's appropriate test command.

If no test framework exists:

1. Identify a lightweight suitable framework.
2. Configure it with minimal changes.
3. Run the tests.

### Step 7 — Report results

Report:

- Test files created/updated
- Scenarios covered
- Test command executed
- Number of tests passed
- Number of tests failed
- Any remaining gaps

## Required output

# Test Generation Report

## Requirement
<requirement>

## Test File
<path>

## Scenarios Covered
- ...

## Changes Made
- ...

## Test Execution
<command>

## Result
<passed/failed>

## Remaining Gaps
<gaps>

## Rules

- Do not remove tests to make the suite pass.
- Do not weaken assertions.
- Do not change production behaviour unless explicitly requested.
- Do not create duplicate tests unnecessarily.
- Follow existing project conventions.
- Keep tests deterministic.
- Keep changes focused on the requirement.