import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import logisticHeroBg from "@/assets/images/logisticHeroBg.png";

function Hero() {
  return (
    <section className="w-full h-[700px] relative overflow-hidden z-20 ">
      {/* Background Image */}
      <Image
        alt="heroAbout"
        src={logisticHeroBg}
        fill
        priority
        className="object-cover object-center z-20 "
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-transparent to-primary" />

      {/* Navbar */}
      <Navbar isWhiteLogo={true} className="absolute top-4 text-white " />

      {/* Content */}
      <div className="text-white absolute top-1/2 lg:left-20 left-6 -translate-y-1/2 z-30 space-y-6">
        <h1 className="lg:text-9xl md:text-7xl text-5xl font-extrabold font-mencken uppercase">
          Logistics
          <br /> & Facilities
        </h1>
        <p className="max-w-[65ch] px-2 text-xs lg:text-lg md:text-base font-helios">
          At Silverlight Foods Group, we know that quality depends on efficient
          storage and reliable logistics. That’s why we’ve built a robust
          infrastructure to keep our products fresh, safe, and ready for
          delivery across Egypt.
        </p>
      </div>
    </section>
  );
}

export default Hero;
