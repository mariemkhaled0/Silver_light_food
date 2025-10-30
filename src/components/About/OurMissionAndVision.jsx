import React from "react";
import AboutBackground from "@/assets/images/AboutBackground.png";
import BigArrowDown from "@/assets/images/BigArrowDown.png";
import Image from "next/image";
export default function OurMissionAndVision() {
  return (
    <section
      className="bg-cover w-full bg-center h-screen pt-10  mt-20 px-40"
      style={{ backgroundImage: `url(${AboutBackground.src})` }}
    >
      <div>
        <div className="flex justify-between w-full gap-20">
          <div>
            <p className=" justify-start text-teal-400 text-7xl font-bold font-helios leading-[90px]">
              OUR
              <br />
              VISION
            </p>
            <Image src={BigArrowDown} alt="arrow" className="w-auto h-auto " />
          </div>

          <p className="p_text text-end">
            Silverlight Foods Group aims to be the leading frozen food and meat
            importer in Egypt and the Middle East, offering premium halal
            products while ensuring quality, reliability, and food safety. By
            connecting global suppliers with the Egyptian market and investing
            in innovation and modern cold-chain logistics, they strive to make
            the frozen food supply chain efficient, transparent, and
            customer-focused.
          </p>
        </div>
      </div>
    </section>
  );
}
