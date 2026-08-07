/**
 * All copy for the site lives here as typed constants. Components take
 * content as props (or import directly from here) — no strings should be
 * hardcoded in JSX. This keeps voice and wording centrally editable as the
 * site grows from a single coming-soon page into the full brewery site.
 *
 * Voice: plain, warm, image-first. No irony. Minimal dashes/colons/semicolons.
 */

export const site = {
  name: "Joho Brewing Co.",
  title: "Joho Brewing Co.",
  description: "Joho Brewing Co. is coming soon.",
} as const;

export const wordmark = {
  line1: "Joho",
  line2: "Brewing Co.",
} as const;

export const home = {
  comingSoon: "Something good is on the way.",
} as const;

export const contact = {
  email: "contact@johobrewing.com",
  instagramHandle: "@johobrewing",
  instagramUrl: "https://instagram.com/johobrewing",
} as const;
