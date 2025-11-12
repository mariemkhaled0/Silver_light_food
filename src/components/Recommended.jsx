import React from "react";
import HomeProducts from "./HomeProducts";
import Link from "next/link";

function Recommended() {
  return (
    <section className="lg:pt-36  pt-12 contanier">
      <div className=" h-28 justify-start text-black lg:text-6xl md:text-4xl text-xl font-bold font-helios lg:leading-[50px] leading-5">
        RECOMMENDED
        <br />
        FOR YOU
      </div>
      <HomeProducts />
      <p className="text-center justify-start text-gray-600 lg:text-lg md:text-base text-[6px]  font-normal font-helios underline uppercase lg:leading-10  md:leading-10 leading-4 lg:tracking-[4px] tracking-[2px] ">
        <Link href={"/products"}> Know More about our products</Link>
      </p>
    </section>
  );
}

export default Recommended;
