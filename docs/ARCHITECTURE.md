# Engineering Guardian — Architecture

## 1. Overview

Engineering Guardian is a project-level GitHub Copilot custom agent designed
to provide controlled, requirement-driven software engineering.

It combines:

- A custom Copilot agent
- Specialized Agent Skills
- Project-wide Copilot instructions
- Requirements
- Source code
- Automated tests
- Git-based change tracking

The architecture is designed around a simple principle:

> Every implementation change should be traceable back to a current
> requirement and validated before completion.

---

# 2. High-Level Architecture

```text
                         Developer
                             │
                             ▼
                  ┌─────────────────────┐
                  │ GitHub Copilot Chat │
                  └──────────┬──────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │ Engineering Guardian    │
                │ Custom Agent             │
                └────────────┬────────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
      Requirements        Codebase          Git
            │                │                │
            └────────────────┼────────────────┘
                             │
                             ▼
                   Agent Orchestration
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
 Requirement           Change Planner     Test Generator
 Analyzer
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                       Implementation
                             │
                             ▼
                         Validation
                             │
                             ▼
                       Git Scope Check
                             │
                             ▼
                        Code Review
                             │
                             ▼
                  Requirement Reconciliation
                             │
                             ▼
                       Final Status