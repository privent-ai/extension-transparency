# Extension Architecture Overview

This document describes the browser extension architecture only. Backend and semantic-engine internals are proprietary and intentionally out of scope for this repository.

```mermaid
flowchart LR
    A[User in supported web app] --> B[Content script capture adapters]
    B --> C[Extension service worker]
    C --> D[/detect API interface]
    D --> C
    C --> E[In-page decision UI behavior]
```

## Component Summary

- Content scripts run on supported domains and observe submission interactions.
- A service worker coordinates detection requests and response handling.
- The extension calls a public request and response interface at `/detect`.
- The extension enforces extension-side controls such as local storage guards.

## Deliberate Scope Boundary

This repository does not document backend implementation internals, ACARS scoring internals, LLM Judge internals, or semantic engine internals. The trust goal is to make extension behavior and extension data boundary auditable while keeping proprietary detection internals private.

Last reviewed: 2026-04-22
