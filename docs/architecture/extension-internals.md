# Extension Internals

This file documents extension internals that are relevant to extension-side data handling and trust boundaries.

## Runtime Parts

- Content scripts execute on supported domains at `document_start` and attach capture logic to interaction flows.
- A Manifest V3 service worker acts as the background execution context.
- Managed storage schema support is enabled to allow enterprise policy injection.

## Permissions

- Manifest permission: `storage`.
- Host permissions are limited to supported AI tool domains: ChatGPT, Claude, and Gemini.

## Interaction Flow

1. Content scripts detect relevant prompt submission interactions.
2. Runtime message or direct extension API flow passes a detection payload to background logic.
3. Service worker sends request to `/detect` and returns allow, warn, or block outcome to content context.
4. Content context applies user-visible behavior in the page.

## Notes On Proprietary Internals

Decisioning internals beyond the published `/detect` interface are proprietary. This document describes only extension-observable inputs, outputs, and trust properties.

Last reviewed: 2026-04-22
