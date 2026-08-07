import { contact } from "@/content/site";

/**
 * Quiet footer: contact email and Instagram handle, nothing else. Both
 * come from site content so they can be updated in one place as the
 * site grows.
 */
export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-6 py-10 text-center font-body text-sm text-indigo-ink/70">
      <a href={`mailto:${contact.email}`} className="hover:text-indigo-ink">
        {contact.email}
      </a>
      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-ink"
      >
        {contact.instagramHandle}
      </a>
    </footer>
  );
}
