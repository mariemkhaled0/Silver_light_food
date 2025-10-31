import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import farm from "@/assets/images/farm.png";
import farm2 from "@/assets/images/farm2.png";

function page() {
  return (
    <>
      <Navbar />
      <section className="lg:pt-20 pt-10 ">
        <div className="flex lg:flex-row flex-col  xl:gap-10 ">
          <div className="relative w-full lg:max-w-[500px]">
            <Image src={farm} alt="farm_Image" className="w-full h-full" />
            <p className="absolute w-full lg:pr-10 px-6 top-[40%] text-white text-center  text-5xl font-extrabold font-mencken uppercase ">
              Our products &
              <br />
              solutions
            </p>
          </div>
          <div className="w-full h-full">
            <div className="lg:px-5 xl:px-10 md:px-10  xl:gap-10  md:gap-2 lg:gap-5 flex justify-between w-full md:pt-10 pt-10 px-5 gap-10 ">
              <div className="max-w-[350px] lg:pt-10  space-y-5 text-black xl:text-lg lg:text-sm text-[9px] md:text-sm font-normal font-helios ">
                <p>
                  <strong> Since 1990</strong> , Silverlight Foods Group has
                  been Egypt’s trusted importer and distributor of premium
                  frozen foods, serving top hotels, restaurants, retailers, and
                  caterers. Through strong
                </p>
                <p>
                  partnerships with global suppliers from Brazil, Australia, the
                  USA, and South Africa, we deliver products that meet the
                  highest international and Halal standards.
                </p>
              </div>
              <Image src={farm2} alt="farm_Image" className="w-full h-auto" />
            </div>
            <div className="w-full">
              <p className="font-signature flex justify-end text-teal-400 text-5xl px-20 pt-10">
                Explore by
                <br /> industry
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
