# Engineering Guardian

Engineering Guardian is a GitHub Copilot custom agent designed to provide
requirement-driven engineering governance across the software development
lifecycle.

It connects:

**Requirement → Analysis → Planning → Implementation → Testing → Validation → Review**

The goal is to ensure that software changes remain traceable to the current
requirement, properly tested, validated, and reviewed before being considered
complete.

---

## Why Engineering Guardian?

Software changes can easily drift away from the original requirement.

Engineering Guardian helps prevent this by continuously checking:

- What the current requirement actually says
- What has already been implemented
- What needs to change
- Which files are affected
- Whether tests cover the requirement
- Whether validation actually passes
- Whether unintended files were changed
- Whether the final implementation still satisfies the requirement

The agent is designed around evidence rather than assumptions.

---

## Core Capabilities

### 1. Requirement Analysis

Analyses a requirement against the current codebase.

Identifies:

- Business rules
- Expected behaviour
- Existing implementation
- Missing functionality
- Existing tests
- Requirement-to-code traceability

---

### 2. Change Planning

Creates an evidence-based implementation plan before code changes.

The plan identifies:

- Affected files
- Required changes
- Dependencies
- Risks
- Testing strategy
- Implementation order
- Definition of Done

---

### 3. Controlled Implementation

Implements only the changes required by the current requirement.

Engineering Guardian follows a minimal-change principle:

> Change only what is necessary to satisfy the current requirement.

---

### 4. Test Generation

Creates or updates automated tests based on:

- Requirement behaviour
- Business rules
- Existing test conventions
- Edge cases
- Regression scenarios

Tests are executed rather than simply generated.

---

### 5. Validation

The agent verifies the implementation using actual project commands.

Examples:

- Type checking
- Unit tests
- Integration tests
- Build validation
- Other project-specific checks

A test that was not actually executed is not treated as validated.

---

### 6. Git Scope Check

Engineering Guardian checks what changed in Git.

This helps identify:

- Expected changes
- Unexpected files
- Unrelated modifications
- Changes that existed before the current task

The agent does not automatically commit or push changes.

---

### 7. Code Review

The final implementation is reviewed against:

- Current requirement
- Business rules
- Tests
- Risks
- Unintended changes
- Regression concerns

Findings are classified by severity.

---

### 8. Final Requirement Reconciliation

Before finishing, Engineering Guardian performs a final comparison:

**Current Requirement  
↓  
Implementation  
↓  
Tests  
↓  
Validation  
↓  
Final Review**

This ensures that the requirement has not changed during the implementation
process.

---

# Architecture

```text
                    ┌─────────────────────┐
                    │     Requirement     │
                    └──────────┬──────────┘
                               │
                               ▼
                  ┌────────────────────────┐
                  │ Requirement Analyzer    │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Change Planner          │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Implementation          │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Test Generator          │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Validation              │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Git Scope Check         │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Code Review             │
                  └──────────┬─────────────┘
                             │
                             ▼
                  ┌────────────────────────┐
                  │ Requirement             │
                  │ Reconciliation          │
                  └──────────┬─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Final Status  │
                    └─────────────────┘