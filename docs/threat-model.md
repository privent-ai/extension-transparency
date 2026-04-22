# Extension Threat Model

This threat model covers the browser extension boundary only. It does not describe the full Privent platform threat model.

| Threat | STRIDE category | In scope? | Mitigation | Reference |
| --- | --- | --- | --- | --- |
| Unauthorized local storage of raw prompt text | Information Disclosure | Yes | Storage guard rejects writes tagged as raw prompt payloads | `src/no-prompt-storage.js` |
| Tampering with extension runtime message flow | Tampering | Yes | Validate message origin and expected schema before action | `docs/architecture/extension-internals.md` |
| Extension configuration misuse by untrusted actor | Elevation of Privilege | Yes | Managed config and activation controls, minimal privileges | `docs/architecture/trust-boundaries.md` |
| Replay or misuse of stale extension credentials | Spoofing | Yes | Credential rotation and bounded activation flow | `docs/architecture/detection-pipeline.md` |
| Prompt interception by unsupported page scripts | Information Disclosure | Partially | Scope processing to supported interaction patterns, do not expose prompt in extension logs | `docs/data-flow.md` |
| Lack of event traceability for security investigations | Repudiation | Yes | Security reporting and evidence references in compliance mappings | `SECURITY.md` |
| Denial of extension decision service from network outage | Denial of Service | Yes | Defined degraded behavior and operational runbooks outside this repository | `docs/architecture/overview.md` |

## Out Of Scope

- Compromised operating system.
- Malicious browser extensions running alongside this extension.
- User endpoint already controlled by malware.
- State-level adversaries with hardware or firmware control.
- Proprietary backend internals, ACARS scoring internals, LLM Judge internals, and semantic engine internals.

Last reviewed: 2026-04-22
