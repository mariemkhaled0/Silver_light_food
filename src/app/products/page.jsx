import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import farm from "@/assets/images/farm.png";
import farm2 from "@/assets/images/farm2.png";
import ProductsArrowDown from "@/assets/images/ProductsArrowDown.png";
import butter from "@/assets/images/butterProductPage.png";
import chickens from "@/assets/images/checkinProductPage.png";
import meat from "@/assets/images/meetProductsPage.png";
import liver from "@/assets/images/offalsForProductPage.png";
import salmon from "@/assets/images/salmonForProductPage.png";

function page() {
  const categories = [
    { label: "Frozen Meat", href: "/FrozenMeat", src: meat },
    { label: "Poultry & Chicken", href: "/PoultryChicken", src: chickens },
    { label: "Offals", href: "/Offals", src: liver },
    { label: "Butter", href: "/Butter", src: butter },
    { label: "Seafood", href: "/Seafood", src: salmon },
  ];

  return (
    <>
      <Navbar />
      <section className="lg:pt-20 pt-10 p-bottom">
        <div className="flex lg:flex-row flex-col xl:gap-10">
          <div className="relative w-full lg:max-w-[500px]">
            <Image src={farm} alt="farm_Image" className="w-full h-full" />
            <p className="absolute w-full lg:pr-10 px-6 top-[40%] text-white text-center text-5xl font-extrabold font-mencken uppercase">
              Our products &
              <br />
              solutions
            </p>
          </div>

          <div className="w-full h-full">
            <div className="lg:px-5 xl:px-10 md:px-10 xl:gap-10 md:gap-2 lg:gap-5 flex justify-between xxs:flex-wrap w-full md:pt-10 pt-10 px-5 gap-10">
              <div className="max-w-[350px] lg:pt-10 space-y-5 text-black xl:text-lg lg:text-sm text-[9px] md:text-sm font-normal font-helios">
                <p>
                  <strong>Since 1990</strong>, Silverlight Foods Group has been
                  Egypt’s trusted importer and distributor of premium frozen
                  foods, serving top hotels, restaurants, retailers, and
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
          </div>
        </div>
        <div className="w-full">
          <p className="font-signature flex justify-end text-teal-400 lg:text-7xl text-4xl px-20 lg:pt-10 md:pt-5 pt-5">
            Explore by
          </p>
          <div className="flex justify-end items-center gap-3">
            <Image
              src={ProductsArrowDown}
              alt="arrow_down"
              className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] pt-4"
            />
            <p className="text-teal-400 lg:text-5xl text-4xl pr-20 font-signature">
              industry
            </p>
          </div>

          {/* ✅ Updated part below */}
        </div>
        <div className="w-full flex justify-center pt-6 px-4">
          <div className="flex flex-col lg:gap-20 md:gap-10 gap-6">
            {/* First row */}
            <div className="flex lg:gap-20 md:gap-10 gap-4">
              {categories.slice(0, 3).map((item) => (
                <div
                  key={item.href}
                  className="flex-shrink-0 lg:w-[300px] lg:h-[180px] md:w-[200px] md:h-[200px] w-[120px] h-[100px] xs:w-[110px] xxs:w-[90px] xxs:h-[90px] relative"
                >
                  <Link
                    href={item.href}
                    className="block w-full h-full relative"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover object-center"
                    />
                    <p className="absolute inset-0 flex text-center items-center justify-center text-white font-bold text-base lg:text-3xl  md:text-2xl">
                      {item.label.toUpperCase()}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div className="flex lg:gap-20 gap-4 justify-center">
              {categories.slice(3).map((item) => (
                <div
                  key={item.href}
                  className="flex-shrink-0 lg:w-[300px] lg:h-[180px] md:w-[220px] md:h-[180px] w-[120px] h-[100px] xs:w-[110px] xxs:w-[90px] xxs:h-[90px] relative"
                >
                  <Link
                    href={item.href}
                    className="block w-full h-full relative"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover object-center"
                    />
                    <p className="absolute inset-0 text-center flex items-center justify-center text-white font-bold lg:text-4xl md:text-2xl">
                      {item.label.toUpperCase()}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
