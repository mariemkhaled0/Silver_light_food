import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import Recommended from "@/components/Recommended";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GallerySection />
      <Recommended />
    </main>
  );
}
