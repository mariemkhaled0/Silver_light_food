import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import farm from "@/assets/images/farm.png";
import farm2 from "@/assets/images/farm2.png";
import ProductsArrowDown from "@/assets/images/ProductsArrowDown.png";

function page() {
  const categories = [
    { label: "Frozen Meat", href: "/FrozenMeat" },
    { label: "Poultry & Chicken", href: "/PoultryChicken" },
    { label: "Seafood", href: "/Seafood" },
    { label: "Butter", href: "/Butter" },
    { label: "Offals", href: "/Offals" },
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
            <div className="lg:px-5 xl:px-10 md:px-10 xl:gap-10 md:gap-2 lg:gap-5 flex justify-between w-full md:pt-10 pt-10 px-5 gap-10">
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

            <div className="w-full">
              <p className="font-signature flex justify-end text-teal-400 lg:text-5xl text-4xl px-20 lg:pt-10 md:pt-5 pt-5">
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
              <div className="w-full text-center">
                <p className="font-helios lg:text-sm md:text-sm text-[9px] uppercase leading-8 lg:pt-6 md:pt-4 pt-3 lg:pl-4 px-3 lg:px-0">
                  {categories.map((item, index) => (
                    <span key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:underline hover:text-teal-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                      {index < categories.length - 1 && " | "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
