import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { Footer } from "@/components/Footer";
import { privacy } from "@/content/site";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
};

export default function Privacy() {
  return (
    <>
      <LegalPage doc={privacy} />
      <Footer />
    </>
  );
}
