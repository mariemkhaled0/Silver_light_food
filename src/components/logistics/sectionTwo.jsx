import React from "react";

export default function IndustriesSectionTwo() {
  return (
    <section className="container text-center w-full mx-auto lg:pt-20 -mt-24 z-30 px-4">
      <h1 className="font-bold font-helios lg:text-6xl md:text-5xl text-2xl lg:leading-[90px] z-30 relative">
        Advanced Warehousing
        <br /> Facilities
      </h1>

      <p className="max-w-[80ch] text-center text-xs md:text-sm lg:text-base w-full mx-auto pt-2 font-helios relative z-30 px-6">
        Our state-of-the-art warehouses provide 8,000 tons of storage capacity,
        ensuring top cold-chain standards. Equipped with advanced refrigeration
        systems, they preserve the quality, taste, and nutritional value of our
        frozen meat, poultry, seafood, butter, and offals.
      </p>

      <div className="pt-10">
        <div className="mx-auto border-[6px] md:border-[8px] lg:border-[10px] border-teal-400 max-w-[800px] h-auto">
          <div className="flex flex-col md:flex-row w-full h-full">
            {/* Left Box */}
            <div className="md:border-r-[8px] lg:border-r-[10px] border-teal-400 h-auto md:h-[500px] md:w-1/2 w-full flex items-center justify-center">
              <h2 className="font-helios leading-8 md:leading-10 text-lg md:text-2xl lg:text-[40px] font-extrabold p-6 md:p-10">
                Temperature controlled storage at -18°C for maximum product
                safety.
              </h2>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col h-auto md:h-[500px]">
              <div className="w-full h-auto md:h-1/2 border-y-[8px] md:border-t-0 md:border-b-[8px] lg:border-b-[10px] border-teal-400 flex items-center justify-center">
                <p className="font-bold font-helios text-lg md:text-xl lg:text-2xl p-6 md:p-10">
                  Certified food safety practices across all warehousing
                  operations.
                </p>
              </div>

              <div className="w-full h-auto md:h-1/2 flex items-center justify-center">
                <p className="font-bold font-helios text-lg md:text-xl lg:text-2xl p-6 md:p-10">
                  Designed to support both bulk imports and nationwide
                  distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
