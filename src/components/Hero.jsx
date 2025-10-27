import Image from "next/image";
import React from "react";
import underLine from "@/assets/images/underLine.png";

export default function Hero() {
  return (
    <section className="lg:px-20 px-6">
      <h1 className="pt-[100px] text-4xl text-center justify-start text-black lg:text-[100px] md:text-6xl font-bold font-helios uppercase lg:leading-[100px] leading-10">
        SILVER LIGHT
        <br />
        FOODS
      </h1>
      <div className="relative">
        <p className="text-center pt-3 justify-start text-teal-400 lg:text-3xl md:text-xl text-sm font-bold font-helios uppercase lg:leading-[30px] leading-4">
          Trusted Halal
          <br />
          Frozen Food Importer
          <br />
          Since 1990
        </p>
        <div className="flex   justify-center lg:pl-40 md:pl-24 pl-16 lg:-mt-2 -mt-1">
          <Image
            className="mx-auto w-11 lg:w-20 h-5 md:w-16"
            src={underLine}
            alt="underLineImage"
            width={100}
            height={100}
          />
        </div>
      </div>
      <p className="text-center text-[6px] lg:-mt-2 mt-4 justify-start text-black lg:text-lg md:text-base font-normal font-helios uppercase lg:leading-10 leading-[10px] tracking-wide lg:tracking-[2px]">
        Delivering quality, safety, and freshness
        <br />
        across Egypt.
      </p>
      <div>
        <p className="text-sm  lg:h-28 h-16 pl-20 lg:pl-56 text-center text-black lg:text-4xl md:text-2xl font-normal font-signature leading-10">
          no stress
        </p>
      </div>
      <p className="text-center justify-start text-gray-600 lg:text-lg md:text-base text-[6px]  font-normal font-helios underline uppercase lg:leading-10  md:leading-10 leading-4 lg:tracking-[4px] tracking-[2px] ">
        Explore Products
      </p>
    </section>
  );
}
