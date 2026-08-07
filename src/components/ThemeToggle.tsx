"use client";

import { themeToggle } from "@/content/site";
import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Light/dark switch, drawn as an actual toggle rather than a text link.
 *
 * Holds no React state on purpose. The current theme already lives on the
 * <html> attribute (put there before paint by the inline script), so this
 * reads it from the DOM on click and lets CSS position the knob via the
 * `dark:` variant. That means no hydration mismatch and no flash of the
 * wrong position on first load, which a useState/useEffect version would
 * both have.
 *
 * It stays a plain <button> rather than role="switch" for the same
 * reason. A switch must announce its on/off state, and that state cannot
 * be rendered correctly on a static page before JavaScript runs. The
 * button's accessible name describes the action instead, which is honest
 * at every point in the page lifecycle.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next =
      root.getAttribute(THEME_ATTRIBUTE) === "dark" ? "light" : "dark";

    root.setAttribute(THEME_ATTRIBUTE, next);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing modes can refuse writes. The theme still applies
      // for this page view, it just will not be remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={themeToggle.ariaLabel}
      title={themeToggle.ariaLabel}
      className="group inline-flex cursor-pointer items-center gap-3"
    >
      <span className="font-body text-xs uppercase tracking-display text-ink-muted group-hover:text-ink">
        <span className="dark:hidden">{themeToggle.toDark}</span>
        <span className="hidden dark:inline">{themeToggle.toLight}</span>
      </span>

      {/* The track. Decorative — the button above carries the label. */}
      <span
        aria-hidden="true"
        className="relative inline-flex h-6 w-11 items-center rounded-full border border-line-strong bg-surface"
      >
        {/* The knob. Sits left on light, travels right on dark. */}
        <span className="ml-0.5 size-4 rounded-full bg-accent transition-transform duration-toggle ease-toggle dark:translate-x-5" />
      </span>
    </button>
  );
}
