import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import Recommended from "@/components/Recommended";
import Brands from "@/components/Brands";
import DoctorComponent from "@/components/DoctorComponent";
import Values from "@/components/About/Values";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GallerySection />
      <Recommended />
      <Brands />
      <DoctorComponent />
    </main>
  );
}
