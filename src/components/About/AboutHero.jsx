import React from "react";
import Navbar from "../Navbar";
import AboutHeroimg from "@/assets/images/AboutMeat.png";
import Image from "next/image";

function AboutHero() {
  return (
    <section className="w-full relative">
      <Image
        alt="heroAbout"
        className="w-full h-auto relative z-30"
        src={AboutHeroimg}
      />
      <Navbar isWhiteLogo={true} className="absolute top-4 text-white" />
      <div className="lg:-mt-11 -mt-4 md:-mt-6  w-full  ">
        <p class="text-3xl  w-full z-0 relative text-center  text-black lg:text-[90px] md:text-5xl font-bold font-helios uppercase lg:leading-[100px] leading-10">
          Quality That Build
          <br />
        </p>
        <p class="text-teal-400 text-end w-full lg:pr-20 pr-10 md:pr-20 font-mencken lg:text-[100px] md:text-6xl text-3xl font-bold ">
          Trust
        </p>
      </div>
      <div>
        <p className="p_text text-center w-full lg:px-40 md:px-20 px-10 pt-10">
          Silverlight Foods Group, established in <strong>1990</strong>, is a
          leading frozen food and frozen meat importer in Egypt. With more than
          three decades of experience, the company has built strong partnerships
          with trusted suppliers in Brazil, Australia, the USA, South Africa,
          and India, ensuring the Egyptian market has access to
          <strong> premium halal-certified</strong> beef,Poultry and frozen
          Product
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
