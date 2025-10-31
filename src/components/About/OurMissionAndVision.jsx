import React from "react";
import AboutBackground from "@/assets/images/AboutBackground.png";
import ArrowDown from "@/assets/images/ArrowDown.png";
import Image from "next/image";

export default function OurMissionAndVision() {
  return (
    <section
      className="bg-cover w-full bg-center h-auto min-h-screen lg:pt-10 pt-5 lg:mt-20 md:mt-10 mt-6 px-6 sm:px-10 md:px-20 lg:px-40"
      style={{ backgroundImage: `url(${AboutBackground.src})` }}
    >
      <div className="flex flex-col lg:gap-20 gap-10">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 items-center md:items-start">
          <div className="text-center md:text-left">
            <p className="text-teal-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-helios uppercase leading-tight md:leading-[90px]">
              OUR
              <br />
              VISION
            </p>
            <div className="w-full flex justify-center md:justify-end mt-2">
              <Image
                src={ArrowDown}
                alt="arrow"
                className="w-28 lg:w-[200px] rotate-[10deg] h-auto bg-blend-darken"
              />
            </div>
          </div>

          <p className="p_text text-center md:text-end text-sm  max-w-[600px]">
            Silverlight Foods Group aims to be the leading frozen food and meat
            importer in Egypt and the Middle East, offering premium halal
            products while ensuring quality, reliability, and food safety. By
            connecting global suppliers with the Egyptian market and investing
            in innovation and modern cold-chain logistics, they strive to make
            the frozen food supply chain efficient, transparent, and
            customer-focused.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between w-full gap-10 md:gap-10 items-center md:items-start pt-2">
          <p className="p_text text-center md:text-start text-sm  max-w-[600px]">
            Silverlight Foods Group aims to be the leading frozen food and meat
            importer in Egypt and the Middle East, offering premium halal
            products while ensuring quality, reliability, and food safety. By
            connecting global suppliers with the Egyptian market and investing
            in innovation and modern cold-chain logistics, they strive to make
            the frozen food supply chain efficient, transparent, and
            customer-focused.
          </p>

          <div className="text-center md:text-right lg:text-left">
            <p className="text-teal-400 text-4xl sm:text-5xl uppercase md:text-6xl lg:text-7xl font-bold font-helios leading-tight md:leading-[90px]">
              OUR
              <br />
              Mission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
