# Trust Boundaries

This document defines extension trust boundaries for this public repository.

```mermaid
flowchart TD
    A[User Browser and Extension Runtime] -->|Request contract| B[/detect API boundary]
    B -->|Decision contract| A
    C[Backend internals and semantic engine internals]:::private
    B --> C
    classDef private fill:#f2f2f2,stroke:#999,stroke-width:1px;
```

## In Scope

- Browser extension content scripts and service worker behavior.
- Extension-side local guard patterns that prevent raw prompt persistence.
- Request and response interface contract with `/detect`.
- Manifest permissions and host permission rationale.

## Out Of Scope (Deliberate)

- Backend API internals.
- ACARS risk scoring algorithm internals.
- LLM Judge integration internals.
- Semantic engine internals.

This scope split is intentional so reviewers can verify extension-side data handling without exposing proprietary detection internals.

Last reviewed: 2026-04-22
