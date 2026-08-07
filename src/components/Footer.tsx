import Link from "next/link";

import { contact, footerNav } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Quiet footer: legal links, contact, and the theme switch. Everything
 * here comes from site content so it can be updated in one place as the
 * site grows.
 */
export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-6 py-10 text-center font-body text-sm text-ink-muted">
      <div className="flex flex-col items-center gap-2">
        <a href={`mailto:${contact.email}`} className="hover:text-ink">
          {contact.email}
        </a>
        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink"
        >
          {contact.instagramHandle}
        </a>
      </div>

      <nav
        aria-label="Legal"
        className="flex items-center gap-6 border-t border-line pt-6 text-xs uppercase tracking-display"
      >
        {footerNav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>

      <ThemeToggle />
    </footer>
  );
}
