import React from "react";
import Navbar from "../Navbar";
import bgImg from "@/assets/images/industries.png";
import CustomButton from "../CustomButton";
import salmonIndustries from "@/assets/images/salmonIndustries.png";
import Image from "next/image";
export default function IndustriesHero() {
  return (
    <section
      className="w-full h-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Navbar className="absolute top-4" />
      <div className=" pt-40 ">
        <p className=" w-full text-center px-2 text-black xl:text-[120px] lg:text-7xl md:text-6xl text-[34px] xs:text-3xl xxs:text-2xl  font-extrabold font-mencken uppercase ">
          Industries We Serve
        </p>
        <div className="flex flex-wrap w-full justify-between">
          <div className="lg:px-20 px-6 lg:pt-20 pt-6">
            <p className="max-w-[560px] md:text-base text-xs lg:text-base  font-helios">
              Since 1990, Silverlight Foods Group has been a trusted partner in
              Egypt’s food sector, supplying high quality frozen meat, poultry,
              seafood, and butter. With operations in Cairo, Obour, Luxor, Sharm
              El-Sheikh, and the Red Sea, we ensure a reliable supply chain that
              helps businesses deliver excellence nationwide.
            </p>
            <CustomButton title={"Become Our Partner"} className={"mt-10"} />
          </div>
          <div className="w-full flex justify-end -mt-10 md:-mt-40 lg:-mt-80">
            <Image
              src={salmonIndustries}
              alt="industries_image"
              className="lg:max-w-[500px] xl:max-w-[600px] md:w-[400px] w-[270px] xxs:w-[200px] xs:w-[250px]
          h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
