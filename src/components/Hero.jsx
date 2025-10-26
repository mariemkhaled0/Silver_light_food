import Image from "next/image";
import React from "react";
import underLine from "@/assets/images/underLine.png";

export default function Hero() {
  return (
    <section className="px-20">
      <div className="pt-[100px] text-center justify-start text-black text-[100px] font-bold font-helios uppercase leading-[100px]">
        SILVER LIGHT
        <br />
        FOODS
      </div>
      <div className="relative">
        <div className="text-center pt-3 justify-start text-teal-400 text-3xl font-bold font-helios uppercase leading-[30px]">
          Trusted Halal
          <br />
          Frozen Food Importer
          <br />
          Since 1990
        </div>
        <div className="flex justify-center pl-40 -mt-2">
          <Image
            className="mx-auto"
            src={underLine}
            alt="underLineImage"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-center -mt-2 justify-start text-black text-lg font-normal font-helios uppercase leading-10 tracking-[2px]">
        Delivering quality, safety, and freshness
        <br />
        across Egypt.
      </div>
      <div className="w-[750px] h-28 text-end  text-black text-4xl font-normal font-signature leading-10">
        no stress
      </div>
      <div className="text-center justify-start text-gray-600 text-lg font-normal font-helios underline uppercase leading-10 tracking-[4px]">
        Explore Products
      </div>
    </section>
  );
}
