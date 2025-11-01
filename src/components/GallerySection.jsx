import Image from "next/image";
import React from "react";
import quality from "@/assets/images/Quality.png";
import exper from "@/assets/images/Experience.png";
import reach from "@/assets/images/Reach.png";

function GallerySection() {
  return (
    <section className="w-full">
      <div className="w-full lg:pt-[60px]  lg:h-44 text-center  text-black lg:text-6xl md:text-4xl text-xl font-bold font-mencken lg:leading-[177px] mt-10">
        PARTNERS IN EVERY DISH
      </div>
      <div className="text-center pb-20 justify-start mt-2 text-black lg:text-xl md:text-sm text-[6px] font-normal font-helios uppercase lg:leading-10 tracking-[2px]">
        THAT MAKES AN IMPRESSION
      </div>
      <div className="flex gap-3 justify-center">
        <div className="relative mb-14 w-[420px]">
          <Image
            src={quality}
            width={420}
            height={500}
            className=""
            alt="quality_image"
          />
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white lg:text-4xl text-base font-bold z-40">
            Quality
          </p>
        </div>
        <div className="relative mb-14 xl:h-[664px] lg-h-auto w-[420px]">
          <Image
            src={exper}
            width={420}
            height={1000}
            className="h-full"
            alt="quality_image"
          />
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white lg:text-4xl text-base font-bold z-40">
            Experience
          </p>
        </div>
        <div className="relative mb-14 w-[420px]">
          <Image
            src={reach}
            width={420}
            height={500}
            className=""
            alt="quality_image"
          />
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white lg:text-4xl text-base font-bold z-40">
            Reach
          </p>
        </div>
      </div>
      <div className="text-center justify-start text-gray-600 lg:text-sm md:text-sm text-[10px] font-normal font-helios underline uppercase leading-10 tracking-[2.90px]">
        Read Our Story
      </div>
    </section>
  );
}

export default GallerySection;
