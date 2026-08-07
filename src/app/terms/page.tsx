import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { Footer } from "@/components/Footer";
import { terms } from "@/content/site";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
};

export default function Terms() {
  return (
    <>
      <LegalPage doc={terms} />
      <Footer />
    </>
  );
}
