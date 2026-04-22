# SOC 2 Mapping (Extension Scope)

Status: preparation in progress. Not yet audited.

This mapping is limited to extension boundary controls and evidence in this repository.

## CC6

| Control | Current state | Evidence reference | Gap |
| --- | --- | --- | --- |
| Logical and access controls for extension configuration state | Implemented at extension boundary, verification ongoing | `docs/architecture/extension-internals.md` | Formal third-party audit evidence pending |

## CC7

| Control | Current state | Evidence reference | Gap |
| --- | --- | --- | --- |
| Monitoring and response process for extension security concerns | Reporting process documented and active | `SECURITY.md` | Operational metrics publication process still being formalized |

## CC8

| Control | Current state | Evidence reference | Gap |
| --- | --- | --- | --- |
| Change management and control communication for extension docs and references | Changelog and lint workflow in place | `CHANGELOG.md`, `.github/workflows/docs-lint.yml` | External attestation not available yet |

## CC9

| Control | Current state | Evidence reference | Gap |
| --- | --- | --- | --- |
| Risk mitigation for extension-side data handling | Threat model and trust boundaries documented | `docs/threat-model.md`, `docs/architecture/trust-boundaries.md` | Independent control test reports pending |

Last reviewed: 2026-04-22
