# Detection Pipeline Interface

This document describes the extension contract with the `/detect` endpoint. It does not describe proprietary backend scoring internals.

## Request Contract (Extension To `/detect`)

The extension sends a request payload that includes only fields required for policy decisioning at the extension boundary.

```json
{
  "prompt": "<user-submitted text>",
  "deploymentGroupKey": "<group key>",
  "apiKey": "<extension credential>",
  "context": {
    "sourceApp": "chatgpt|claude|gemini",
    "extensionVersion": "1.0.5"
  }
}
```

## Response Contract (`/detect` To Extension)

```json
{
  "decision": "allow|warn|block",
  "reason": "short machine-readable reason code",
  "riskScore": 0.0
}
```

## Trust Properties

- Transport uses HTTPS.
- The extension acts on response decision only, it does not receive proprietary model internals.
- Backend and semantic-engine internals are intentionally not documented here.

## Failure Handling

- If network calls fail, extension behavior follows configured fail-open or fail-safe policy for that deployment mode.
- Failure policy details are implementation-specific and validated during extension release testing.

Last reviewed: 2026-04-22
