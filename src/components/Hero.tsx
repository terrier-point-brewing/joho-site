import { home } from "@/content/site";
import { Wordmark } from "./Wordmark";

/**
 * The coming-soon hero: wordmark, one short line beneath it, generous
 * cream space around both. The only motion allowed by the brief is a
 * subtle fade-in on load, defined once as a token in tokens.css.
 */
export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-page-y text-center animate-fade-in">
      <Wordmark />
      <p className="mt-10 max-w-sm font-body text-base text-indigo-ink/80 sm:text-lg">
        {home.comingSoon}
      </p>
    </section>
  );
}
