import { wordmark } from "@/content/site";

/**
 * The Joho wordmark, set in styled type for now.
 *
 * This will eventually be replaced by an SVG lockup from the brand system,
 * so it's kept isolated as its own component with no styling assumptions
 * leaking into callers — swapping the internals for an <svg> later should
 * not require touching Hero or page.tsx.
 *
 * The period is the chop, and it is the only seal red on the page.
 */
export function Wordmark() {
  const line2Period = wordmark.line2.slice(-1);
  const line2Rest = wordmark.line2.slice(0, -1);

  return (
    <div className="select-none text-center">
      <div className="font-display text-5xl uppercase tracking-display-wide text-display sm:text-6xl md:text-7xl">
        {wordmark.line1}
      </div>
      <div className="mt-3 font-body text-sm uppercase tracking-display text-display sm:text-base">
        {line2Rest}
        <span className="text-accent">{line2Period}</span>
      </div>
    </div>
  );
}
