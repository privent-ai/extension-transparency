# Extension Privacy Policy Notes

This document covers data processing by the extension boundary only.

## Data We Process

| Field | Purpose | Retention | Location |
| --- | --- | --- | --- |
| Prompt text submitted in protected flow | Send to `/detect` for allow/warn/block decision | See `docs/data-retention.md` for exact windows | In transit to detection API |
| Extension installation identifier | Associate requests to deployment policy context | See `docs/data-retention.md` | Extension config state and API records |
| Deployment group identifier | Policy selection for correct organization controls | See `docs/data-retention.md` | Extension config state and API records |
| Decision response metadata (`allow`, `warn`, `block`) | Apply in-page extension behavior | Short-lived runtime state unless explicitly logged by backend systems | Extension runtime memory |

## Data We Explicitly Do NOT Collect

| Field | Why not |
| --- | --- |
| Browser history | Not required for prompt submission decisioning |
| Cookies | Not required for extension data-loss-prevention flow |
| Password manager vault data | Not required, high sensitivity, outside extension need |
| Content from unrelated tabs | Extension processing is limited to active supported interaction |
| Full account inbox or document repositories | Not needed for extension request and response boundary |

## Data Subject Rights

Data subject rights requests, including access, correction, deletion, and objection workflows, are documented in `compliance/gdpr-notes.md`.

Last reviewed: 2026-04-22
