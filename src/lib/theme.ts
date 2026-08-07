/**
 * Theme plumbing shared between the pre-paint inline script and the
 * toggle component. Both need to agree on the storage key and the
 * attribute name, so they live here rather than being repeated.
 */

export const THEME_STORAGE_KEY = "joho-theme";
export const THEME_ATTRIBUTE = "data-theme";

export type Theme = "light" | "dark";

/**
 * Runs synchronously in <head> before first paint, so the correct theme is
 * on <html> by the time anything is drawn. Without this the page would
 * paint light and then snap to dark on hydration.
 *
 * Deliberately terse and dependency free, since it ships as an inline
 * string rather than as a compiled module. Wrapped in try/catch because
 * localStorage throws in some privacy modes, and a theme preference is
 * never worth breaking the page over.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute(${JSON.stringify(
  THEME_ATTRIBUTE,
)},t);}catch(e){}})();`;
