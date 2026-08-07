import type { Metadata } from "next";
import { Marcellus, Lato } from "next/font/google";
import { site } from "@/content/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${lato.variable} h-full antialiased`}
      // The inline script below sets data-theme before React hydrates, so
      // the server markup and the live DOM differ by design here.
      suppressHydrationWarning
    >
      <head>
        {/* Must run before first paint, otherwise the page paints light and
            then snaps to dark. Inline and synchronous for that reason. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
