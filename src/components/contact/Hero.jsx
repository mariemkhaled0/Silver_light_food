import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import contact from "@/assets/images/contactUs.png";

export default function Hero() {
  return (
    <div className="relative w-full">
      <Navbar isWhiteLogo={true} className="absolute top-4 text-white " />
      <section className="w-full h-[500px] relative  z-20 ">
        {/* Background Image */}
        <Image
          alt="contact"
          src={contact}
          fill
          priority
          className="object-cover object-center z-20 "
        />

        {/* Gradient overlay */}

        <div className="absolute inset-0 z-20  bg-black/40 " />

        {/* Navbar */}

        {/* Content */}
        <div className="text-white absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-30 w-full">
          <h1 className="lg:text-8xl md:text-7xl text-5xl w-full font-extrabold font-mencken uppercase text-center">
            Contact us
          </h1>
        </div>
      </section>
    </div>
  );
}
