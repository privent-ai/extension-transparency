# Extension Data Retention Notes

This document covers extension-side retention at the trust boundary.

## Retention Principles

- The extension does not intentionally persist raw prompt content.
- Extension local persistence is limited to operational metadata required for activation and policy routing.
- Any backend-side retention of detection events is out of this repository scope and must be documented in private platform controls.

## Extension-Side Retention Categories

| Data category | Stored by extension? | Purpose | Retention window |
| --- | --- | --- | --- |
| Raw prompt text | No | Not stored by design | Not applicable |
| Activation state | Yes | Keep extension active and associated to deployment context | 2026-04-22 policy update required |
| Deployment configuration metadata | Yes | Route requests to correct policy context | 2026-04-22 policy update required |
| Runtime decision state (`allow`, `warn`, `block`) | In memory only | Apply immediate UI behavior | Session runtime only |

## Deletion Behavior

- Clearing browser extension storage removes locally persisted extension metadata.
- Uninstalling the extension removes extension storage from the browser profile.

## Reviewer Notes

Exact retention windows are organization policy inputs and must be updated before production publication.

Last reviewed: 2026-04-22
