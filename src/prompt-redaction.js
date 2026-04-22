/**
 * This file is illustrative and runnable.
 *
 * Production detection and policy decisions are server-side in proprietary semantic-engine
 * components that are intentionally out of scope for this repository.
 *
 * These client-side helpers are a defense-in-depth layer only.
 */

const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const PHONE_PATTERN = /\b(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)\d{3,4}[-.\s]?\d{3,4}\b/g;
const CREDIT_CARD_LIKE_PATTERN = /\b(?:\d[ -]*?){13,19}\b/g;

/**
 * Redacts email addresses from text.
 *
 * @param {string} input
 * @returns {string}
 */
export function redactEmails(input) {
  return String(input).replace(EMAIL_PATTERN, "[REDACTED_EMAIL]");
}

/**
 * Redacts phone-number-like patterns from text.
 *
 * @param {string} input
 * @returns {string}
 */
export function redactPhones(input) {
  return String(input).replace(PHONE_PATTERN, "[REDACTED_PHONE]");
}

/**
 * Redacts credit-card-like patterns from text.
 *
 * @param {string} input
 * @returns {string}
 */
export function redactCreditCardLike(input) {
  return String(input).replace(CREDIT_CARD_LIKE_PATTERN, "[REDACTED_CARD]");
}

/**
 * Applies all client-side redaction helpers in deterministic order.
 *
 * @param {string} input
 * @returns {string}
 */
export function redactPromptClientSide(input) {
  const step1 = redactEmails(input);
  const step2 = redactPhones(step1);
  return redactCreditCardLike(step2);
}
