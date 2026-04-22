# Privent Extension Transparency

This repository exists to provide radical, verifiable transparency into how the
Privent browser extension handles user data at the extension trust boundary.
It documents observable extension behavior, data-flow contracts, and controls
that external reviewers can inspect without access to proprietary backend or
semantic-engine internals.

## What this repo is

- Documentation and reference code for browser extension data handling.
- A public record of extension-side controls, boundaries, and assumptions.
- A compliance mapping package for extension-relevant controls and evidence.

## What this repo is NOT

- Backend implementation details, APIs beyond published interface contracts, or infrastructure internals.
- ACARS scoring algorithm details, LLM Judge implementation details, or semantic engine internals.
- A claim of full platform transparency beyond the extension boundary.

## Scope Statement

This repository reflects browser extension behavior for version `1.0.5`.

Public extension listing: [Chrome Web Store - Privent](https://chromewebstore.google.com/detail/privent/nikholhjbhkdlfbpchnkipgmcefecofo).

## Repository Index

- `README.md`: Repository purpose, scope, and reviewer guidance.
- `LICENSE`: MIT license for this repository.
- `SECURITY.md`: Security reporting channels and response process.
- `CODE_OF_CONDUCT.md`: Contributor Covenant v2.1 community standards.
- `CHANGELOG.md`: Change history following Keep a Changelog.
- `docs/data-flow.md`: Extension data-flow diagram and hop-by-hop narrative.
- `docs/privacy-policy.md`: Data processed, data excluded, and rights notes.
- `docs/threat-model.md`: STRIDE-lite extension threat model and exclusions.
- `docs/data-retention.md`: Retention and deletion expectations at extension scope.
- `docs/architecture/overview.md`: Extension architecture at trust-boundary level.
- `docs/architecture/extension-internals.md`: Content script, service worker, and permissions.
- `docs/architecture/detection-pipeline.md`: Request and response contract with `/detect`.
- `docs/architecture/trust-boundaries.md`: Deliberate extension boundary definitions.
- `src/no-prompt-storage.js`: Runnable storage guard preventing raw prompt persistence.
- `src/prompt-redaction.js`: Runnable client-side redaction helpers (defense in depth).
- `src/manifest-permissions.md`: Permission-by-permission justification.
- `compliance/compliance-framework.json`: Machine-readable control mapping metadata.
- `compliance/soc2-mapping.md`: SOC 2 TSC mapping, preparation in progress.
- `compliance/eu-ai-act-alignment.md`: Article 26 alignment mapping.
- `compliance/gdpr-notes.md`: GDPR role framing, lawful basis, and DSR process.
- `audits/README.md`: Audit status and roadmap publication plan.
- `.github/ISSUE_TEMPLATE/transparency-question.md`: Template for transparency questions.
- `.github/ISSUE_TEMPLATE/security-concern.md`: Template for security concerns.
- `.github/workflows/docs-lint.yml`: Markdown, links, and JSON validation workflow.

## How To Audit Us

1. Read `docs/data-flow.md` to confirm extension-side data movement and limits.
2. Review `docs/architecture/trust-boundaries.md` to confirm what is intentionally out of scope.
3. Inspect `src/no-prompt-storage.js` and verify guard behavior locally in extension DevTools.
4. Cross-check controls in `compliance/compliance-framework.json` against file references.
5. Open a transparency question through the issue template if any claim lacks evidence.

## Reporting Concerns

For security concerns, follow `SECURITY.md` and contact [hello@privent.ai](mailto:hello@privent.ai).

## License

This repository is licensed under the MIT License. See `LICENSE`.

Last reviewed: 2026-04-22
