# EU AI Act Alignment (Article 26)

This document maps extension behavior to Article 26 operator obligations for deployment support. It does not claim full EU AI Act compliance.

| Obligation | How Privent extension supports operator in meeting it | File reference |
| --- | --- | --- |
| Use according to instructions and intended purpose | Extension scope and trust boundary are documented with explicit in-scope and out-of-scope definitions | `README.md`, `docs/architecture/trust-boundaries.md` |
| Enable human oversight during operation | Extension UI presents allow, warn, or block outcomes that can guide operator action | `docs/data-flow.md`, `docs/architecture/detection-pipeline.md` |
| Maintain operational records needed for accountability | Extension-side process and reporting paths are documented for concerns and review workflows | `SECURITY.md`, `docs/threat-model.md` |
| Support risk management in deployment context | Threat categories and extension mitigations are explicitly listed | `docs/threat-model.md` |
| Support data governance expectations in operation | Extension privacy and retention notes document what is processed and excluded | `docs/privacy-policy.md`, `docs/data-retention.md` |

Last reviewed: 2026-04-22
