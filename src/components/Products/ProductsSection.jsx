import React from "react";

import Image from "next/image";
import CustomButton from "../CustomButton";
import Link from "next/link";
import Navbar from "../Navbar";

function ProductsSection({
  imgClassName,
  bgImg,
  title,
  productImg,
  leftContent,
  productDetails,
  temperature,
  temperatureDesc,
  packagingType,
  packagingDesc,
  industries,
  titleClassName,
}) {
  return (
    <section
      className="w-full h-full bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <Navbar className="absolute top-4" />
      {/* Container for text + overlay image */}
      <div className="pt-40 lg:px-20 md:px-10 px-6 relative pb-10">
        <div className="relative text-center">
          <p className={titleClassName}>
            {title.part1}
            <br />
            {title.part2}
          </p>
          <Image src={productImg} alt="product_img" className={imgClassName} />
        </div>
        <div className="lg:pt-10 pt-14 flex items-center h-full flex-wrap gap-6 lg:gap-0 justify-between">
          <div className="">
            <h3 className="uppercase font-helios font-bold lg:text-6xl  text-4xl">
              {title.part1}
              <br />
              {title.part2}
            </h3>
            <p className="max-w-[400px] text-black text-lg  font-normal font-helios  mt-4">
              {leftContent}
            </p>
            <CustomButton className={"mt-10"} />
          </div>
          <div className="flex justify-end md:justify-end  lg:justify-end xl:justify-start md:w-full lg:w-full xl:w-auto max-h-[550px]">
            <div className="max-w-[500px]  border-[10px] p-10 border-black">
              <p className="border-b-[1.5px] lg:pb-7 pb-5 font-helios text-sm lg:text-base border-black">
                <strong> Product Details </strong>
                <br />
                {productDetails}
              </p>

              <div className="pt-3 flex items-center justify-between border-b-[1.5px] lg:pb-7 pb-5 border-black">
                <h3 className="lg:text-5xl text-2xl font-bold font-helios ">
                  {temperature}
                </h3>
                <p className="lg:max-w-[240px] max-w-[180px] text-black  text-xs lg:text-base font-normal font-helios">
                  {temperatureDesc}
                </p>
              </div>
              <div className="pt-3 flex items-center gap-5 justify-between border-b-[1.5px] pb-7 border-black">
                <h3 className="lg:text-5xl text-2xl  font-bold font-helios uppercase ">
                  {packagingType}
                </h3>
                <p className="lg:max-w-[240px] max-w-[180px] text-black  text-xs lg:text-base font-normal font-helios">
                  {packagingDesc}
                </p>
              </div>
              <p className=" lg:py-7 py-5 text-sm lg:text-base ">
                <strong> Industries served </strong>
                <br />
                {industries}
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:justify-start md:justify-center justify-center md:pt-10 pt-6 lg:pt-0 text-sm lg:text-base flex items-end font-normal font-helios underline uppercase leading-10 tracking-[4px]">
          <Link
            className="hover:text-gray-800 text-gray-600 "
            href={"/products"}
          >
            back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
