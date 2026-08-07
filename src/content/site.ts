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

export const footerNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

/**
 * Labels for the theme toggle. Both are rendered at once and one is
 * hidden by CSS, so the button never has to wait for JavaScript to know
 * which theme is active.
 */
export const themeToggle = {
  ariaLabel: "Switch between light and dark",
  toDark: "Dark",
  toLight: "Light",
} as const;

/* ---- Legal pages ------------------------------------------------------
 * These are plain-language documents written for a static site that
 * collects nothing. They will need revisiting when the tap list ships and
 * the site starts reading from Supabase.
 */

export type LegalSection = {
  readonly heading: string;
  readonly body: readonly string[];
};

export type LegalDoc = {
  readonly title: string;
  readonly description: string;
  readonly lastUpdated: string;
  readonly intro: string;
  readonly sections: readonly LegalSection[];
};

export const legal = {
  backToHome: "Back to home",
  lastUpdatedLabel: "Last updated",
} as const;

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  description: "How Joho Brewing Co. handles information on this site.",
  lastUpdated: "August 6, 2026",
  intro:
    "This is a small site and it is built to stay that way. We set no cookies, we sell nothing about you, and we count visits without working out who you are.",
  sections: [
    {
      heading: "The short version",
      body: [
        "We do not ask you for personal information. There are no accounts, no forms, and no newsletter signup. We count page views with a tool that sets no cookies and does not follow you anywhere else.",
      ],
    },
    {
      heading: "What our host records",
      body: [
        "The site is served by Vercel, our hosting provider. Like any web host, Vercel records basic technical information about requests, such as an IP address, the browser used, and the page requested. This happens for every website you visit and it is used to keep the site running and secure.",
        "We do not combine that information with anything else, and we do not use it to build a profile of you.",
      ],
    },
    {
      heading: "How we count visits",
      body: [
        "We use Vercel Web Analytics to see which pages people read and roughly where they arrive from. It records the page, the site that linked you here, and general things like browser, device type, and country.",
        "It sets no cookies and stores nothing on your device. To avoid counting the same visit twice it makes a short lived hash from your request instead, and that hash is thrown away within a day. We see totals and trends, never a person.",
        "If you would rather not be counted, most browser tracking protections and content blockers stop it, and you are welcome here either way.",
      ],
    },
    {
      heading: "Fonts and other assets",
      body: [
        "Our fonts are served from our own domain rather than from a third party, so loading this page does not tell anyone else that you were here.",
      ],
    },
    {
      heading: "When you write to us",
      body: [
        "If you email the address in the footer, we keep your message and address so we can reply and follow up. We do not add you to a mailing list and we do not share your message with anyone outside the brewery.",
      ],
    },
    {
      heading: "Links to other places",
      body: [
        "The footer links to our Instagram. Once you land there you are on their site, under their privacy policy, not ours.",
      ],
    },
    {
      heading: "Age",
      body: [
        "This site is about beer and it is meant for people who are old enough to drink it where they live. It is not directed at children.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "As the site grows we will add to this page and update the date at the top. If a change ever means we start collecting something, we will say so plainly here before we do.",
      ],
    },
    {
      heading: "Getting in touch",
      body: [
        "Questions about any of this are welcome. Write to us at the address in the footer.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  description: "The terms for using the Joho Brewing Co. site.",
  lastUpdated: "August 6, 2026",
  intro:
    "These are the terms for using this site. They are short, because right now the site is one page and a promise.",
  sections: [
    {
      heading: "Using this site",
      body: [
        "You are welcome to read and share this site. By using it you agree to these terms. If you do not agree with them, please do not use the site.",
      ],
    },
    {
      heading: "What is here",
      body: [
        "The site is a placeholder while the brewery gets going. Anything on it may change or go away without notice, and we cannot promise every detail is current or complete.",
      ],
    },
    {
      heading: "Our words and marks",
      body: [
        "The name Joho Brewing Co., the wordmark, and the text and images on this site belong to us. You may link to the site and quote it in the ordinary way. Please ask before using our name or marks on anything of your own.",
      ],
    },
    {
      heading: "Places we link to",
      body: [
        "We link out to our Instagram and may link elsewhere later. We do not control those sites and we are not responsible for what is on them.",
      ],
    },
    {
      heading: "No promises",
      body: [
        "The site is provided as it is. We do not warrant that it will always be available, error free, or fit for any particular purpose.",
      ],
    },
    {
      heading: "Limits",
      body: [
        "To the extent the law allows, we are not liable for any loss or damage arising from your use of this site.",
      ],
    },
    {
      heading: "Which law applies",
      body: [
        "These terms are governed by the laws of the State of North Carolina, without regard to its conflict of laws rules.",
        "If a dispute about them ever needs a court, it belongs in the state or federal courts sitting in North Carolina, and we both agree to that.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "We will update these terms as the site grows, and the date at the top will change with them. Continuing to use the site after that means you accept the new version.",
      ],
    },
    {
      heading: "Getting in touch",
      body: [
        "If something here is unclear, write to us at the address in the footer.",
      ],
    },
  ],
};
