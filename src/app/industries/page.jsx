import Navbar from "@/components/Navbar";
import React from "react";

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesCards from "@/components/industries/industriesCards";

function page() {
  return (
    <>
      <IndustriesHero />
      <IndustriesCards />
    </>
  );
}

export default page;
