import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

// Near-zero logic: this page composes content components and nothing more.
export default function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
