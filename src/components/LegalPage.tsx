import Link from "next/link";

import { legal, type LegalDoc } from "@/content/site";
import { Wordmark } from "./Wordmark";

/**
 * Shared shell for the reading pages (privacy, terms). Takes a whole
 * document from site content and renders it, so adding another legal page
 * means adding copy rather than adding a layout.
 *
 * Centered to match the hero. The wordmark doubles as the link home,
 * which is the usual convention and saves a separate back link.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main className="mx-auto w-full max-w-prose flex-1 px-6 py-page-y-sm text-center animate-fade-in">
      <Link
        href="/"
        aria-label={legal.backToHome}
        className="inline-block"
      >
        <Wordmark />
      </Link>

      <h1 className="mt-16 font-display text-3xl uppercase tracking-display text-display sm:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-4 font-body text-xs uppercase tracking-display text-ink-muted">
        {legal.lastUpdatedLabel} {doc.lastUpdated}
      </p>

      <p className="mt-10 font-body text-lg text-ink">{doc.intro}</p>

      <div className="mt-14 flex flex-col gap-10 border-t border-line pt-10">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-body text-sm font-bold uppercase tracking-display text-display">
              {section.heading}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="font-body text-base text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
