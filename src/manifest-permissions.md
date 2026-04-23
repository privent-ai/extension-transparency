# Manifest Permissions Rationale

This file documents permission intent for the extension manifest.

| Permission | Why we need it | What would break without it | Alternative considered |
| --- | --- | --- | --- |
| `storage` | Persist extension activation and configuration metadata required for policy routing | Extension cannot retain activation state or deployment metadata between sessions | Use only runtime memory, rejected because state would reset every browser restart |
| `https://chatgpt.com/*` host permission | Run content scripts in supported ChatGPT domain flows | Prompt capture and decision UI wiring would not run on ChatGPT pages | User script injection model, rejected due to weaker control and reliability |
| `https://chat.openai.com/*` host permission | Support legacy and alternate OpenAI chat domain paths | Detection flow would miss supported OpenAI interactions on that domain | Remove support for this domain, rejected to avoid coverage regression |
| `https://claude.ai/*` host permission | Run extension controls on Claude web app pages | Prompt capture and enforcement would not execute on Claude | Ask users to switch domains, rejected as operationally unrealistic |
| `https://gemini.google.com/*` host permission | Run extension controls on Gemini web app pages | Prompt capture and enforcement would not execute on Gemini | Separate extension build per provider, rejected for operational complexity |

Last reviewed: 2026-04-22
