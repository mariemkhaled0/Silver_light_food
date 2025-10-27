import React from "react";
import HomeProducts from "./HomeProducts";

function Recommended() {
  return (
    <section className="lg:pt-36  pt-12 contanier">
      <div className=" h-28 justify-start text-black lg:text-6xl md:text-4xl text-xl font-bold font-helios lg:leading-[50px] leading-5">
        RECOMMENDED
        <br />
        FOR YOU
      </div>
      <HomeProducts />
    </section>
  );
}

export default Recommended;
