/**
 * Purpose:
 * Prevent raw prompt payloads from being persisted through common extension storage paths.
 *
 * Wiring:
 * This guard is intended to be initialized in extension startup paths (for example service worker
 * initialization) before any persistence helper writes to chrome.storage, localStorage, or IndexedDB.
 *
 * Verification:
 * 1. Open extension DevTools.
 * 2. Create the guard with createStorageGuard().
 * 3. Attempt a write with a value tagged as raw prompt payload (see tagging convention below).
 * 4. Observe the rejection error from the guarded write method.
 *
 * Tagging convention for raw prompt payloads:
 * Any object that includes { "__priventTag": "raw_prompt" } is treated as a raw prompt payload and
 * is rejected from guarded persistence calls.
 */

const RAW_PROMPT_TAG_FIELD = "__priventTag";
const RAW_PROMPT_TAG_VALUE = "raw_prompt";

function isRawPromptTagged(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (value[RAW_PROMPT_TAG_FIELD] === RAW_PROMPT_TAG_VALUE) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.some(isRawPromptTagged);
  }

  return Object.values(value).some(isRawPromptTagged);
}

function assertSafeWrite(value, locationLabel) {
  if (isRawPromptTagged(value)) {
    throw new Error(
      `Blocked storage write to ${locationLabel}: value tagged as raw prompt payload`
    );
  }
}

/**
 * Creates guard helpers around extension storage APIs.
 *
 * @returns {{
 *   wrapChromeStorageArea: (area: { set: Function }, areaName?: string) => { set: Function },
 *   safeLocalStorageSetItem: (key: string, value: unknown) => void,
 *   safeIndexedDbPut: (store: IDBObjectStore, value: unknown, key?: IDBValidKey) => IDBRequest
 * }}
 */
export function createStorageGuard() {
  return {
    wrapChromeStorageArea(area, areaName = "chrome.storage") {
      if (!area || typeof area.set !== "function") {
        throw new TypeError("wrapChromeStorageArea expects an object with a set function");
      }

      return {
        ...area,
        set(items, callback) {
          assertSafeWrite(items, `${areaName}.set`);
          return area.set(items, callback);
        }
      };
    },

    safeLocalStorageSetItem(key, value) {
      if (typeof key !== "string" || key.length === 0) {
        throw new TypeError("safeLocalStorageSetItem expects a non-empty string key");
      }

      assertSafeWrite(value, "localStorage.setItem");
      localStorage.setItem(key, JSON.stringify(value));
    },

    safeIndexedDbPut(store, value, key) {
      if (!store || typeof store.put !== "function") {
        throw new TypeError("safeIndexedDbPut expects an IDBObjectStore");
      }

      assertSafeWrite(value, "indexedDB.put");
      return key === undefined ? store.put(value) : store.put(value, key);
    }
  };
}
