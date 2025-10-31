import Image from "next/image";
import React from "react";
import manyArrowsImg from "@/assets/images/manyArrowsImg.png";
function Values() {
  return (
    <section className="lg:pt-20  pt-10 md:max-w-[700px] sm:max-w-[700px] lg:max-w-full mx-auto">
      <div className="text-center ">
        <p className="text-teal-400 uppercase text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold font-helios leading-tight md:leading-[90px]">
          OUR Values
        </p>
        <div className="flex justify-center lg:mt-20 md:pt-10 pt-7 items-center">
          <div className="  flex flex-col gap-10">
            <div className="lg:w-96 md:w-[150px] w-[100px]  lg:pl-10  text-end">
              <p class="text-black md:text-[12px] lg:text-lg text-[8px] font-bold font-helios">
                Integrity & Trust
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios">
                Since 1990, we have earned the trust of partners and clients in
                Egypt by conducting business with honesty, transparency, and
                reliability
              </p>
            </div>
            <div className="lg:w-96 md:w-[150px] w-[100px] lg:pr-10 pr-2 text-end">
              <p class="text-black md:text-[12px] lg:text-lg  text-[8px] font-bold font-helios">
                Innovation & Excellence
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios">
                We continuously improve our cold-chain logistics, storage, and
                distribution systems to ensure freshness, efficiency, and value.
              </p>
            </div>
            <div className="lg:w-96 md:w-[150px] w-[100px] lg:pl-10 text-end ">
              <p class="text-black md:text-[12px] lg:text-lg  text-[8px] font-bold font-helios">
                Global Partnerships 
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios ">
                By building strong relationships with suppliers in Brazil,
                Australia, the USA, South Africa, and India, we guarantee
                reliable access to world-class products.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={manyArrowsImg}
              alt="arrow"
              className=" md:w-[200px] w-[150px] lg:w-[300px]  h-auto"
            />
          </div>
          <div className="flex flex-col gap-10 relative h-full">
            <div className="lg:w-96 md:w-[150px] w-[100px]  text-start">
              <p class="text-black lg:text-lg text-[8px] md:text-[12px] font-bold font-helios">
                Quality First
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios">
                We are committed to importing and supplying only premium
                halal-certified frozen meat and food products, meeting the
                highest international standards of food safety.
              </p>
            </div>
            <div className="lg:w-96  md:w-[150px] w-[100px]  pl-4 text-start">
              <p class="text-black md:text-[12px]  lg:text-lg text-[8px] font-bold font-helios">
                Customer Commitment
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios">
                We work closely with wholesalers, retailers, hotels, and
                restaurants to provide consistent supply, tailored solutions,
                and outstanding service.
              </p>
            </div>
            <div className="lg:w-96 md:w-[150px] w-[100px]  lg:pr-28 text-start">
              <p class="text-black md:text-[12px] lg:text-lg text-[8px] font-bold font-helios">
                Sustainability & Responsibility <br />
              </p>
              <p class="text-black lg:text-base md:text-[8px] text-[6px] font-normal font-helios ">
                We strive to create a more sustainable frozen food supply chain,
                supporting food security in Egypt and respecting global sourcing
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
