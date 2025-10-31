import Image from "next/image";
import React from "react";
import forkMeat from "@/assets/images/MeatonFork.png";

function AboutSectionTwo() {
  return (
    <section className="pt-10 lg:pt-0 ">
      <div className="flex items-center">
        <p className="text-xl lg:pl-20  pl-10 w-full z-0 relative   text-black lg:text-3xl md:text-3xl font-bold font-helios uppercase">
          the finest quality meats to meet the standards of hotels and high end
          restaurants
        </p>
        <Image
          src={forkMeat}
          alt="meat_Image"
          className="lg:w-auto md:w-[300px] w-[150px] h-auto"
        />
      </div>
      <p className="p_text text-center pt-10 lg:pt-0 w-full lg:px-40 md:px-20 px-10">
        Guided by Chairman <strong>Mr. Romany Ramzy</strong> and CEO{" "}
        <strong>Mr. Beshoy Romany Ramzy</strong>, Silverlight Foods Group has
        grown into a trusted name in the Egyptian food industry, recognized
        for quality, reliability, and competitive supply solutions. Through a
        modern cold-chain system and strict food safety standards, the company
        proudly serves wholesalers, retailers, hotels, and restaurants across
        Egypt, delivering products that meet international standards while
        supporting local demand
      </p>
    </section>
  );
}

export default AboutSectionTwo;
