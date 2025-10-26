import Image from "next/image";
import React from "react";
import quality from "@/assets/images/Quality.png";
import exper from "@/assets/images/Experience.png";
import reach from "@/assets/images/Reach.png";

function GallerySection() {
  return (
    <section className="w-full">
      <div className="w-full pt-[60px] h-44 text-center  text-black text-6xl font-bold font-mencken leading-[177px]">
        PARTNERS IN EVERY DISH
      </div>
      <div className="text-center pb-20 justify-start mt-2 text-black text-xl font-normal font-helios uppercase leading-10 tracking-[2px]">
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
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white text-4xl font-bold z-50">
            Quality
          </p>
        </div>
        <div className="relative mb-14 h-full w-[420px]">
          <Image
            src={exper}
            width={420}
            height={600}
            className="h-full"
            alt="quality_image"
          />
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white text-4xl font-bold z-50">
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
          <p className="inset-x-0  absolute font-helios uppercase bottom-3 text-center flex items-center justify-center text-white text-4xl font-bold z-50">
            Reach
          </p>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
