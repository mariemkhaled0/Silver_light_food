import AboutHero from "@/components/About/AboutHero";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Cards from "@/components/About/Cards";
import OurMissionAndVision from "@/components/About/OurMissionAndVision";
import Values from "@/components/About/Values";
import React from "react";

function page() {
  return (
    <div>
      <AboutHero />
      <AboutSectionTwo />
      <OurMissionAndVision />
      <Values />
      <Cards />
    </div>
  );
}

export default page;
