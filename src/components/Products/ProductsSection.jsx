import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import CustomButton from "../CustomButton";

const DetailRow = ({ title, description }) => (
  <div className="pt-3 flex items-center justify-between border-b-[1.5px] border-black pb-5  lg:gap-5 md:gap-5 lg:pb-7 xxs:pb-2 gap-2">
    <h3 className="font-helios font-bold lg:text-5xl md:text-4xl text-2xl xxs:text-[16px] xs:text-[18px]">
      {title}
    </h3>
    <p className="font-helios font-normal text-black lg:text-base md:text-base xxs:text-[10px] xs:text-[11px] lg:max-w-[240px] max-w-[180px]">
      {description}
    </p>
  </div>
);

export default function ProductsSection({
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
      className="w-full h-full bg-cover bg-center bg-no-repeat  overflow-hidden"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Navbar className="absolute top-4" />

      <div className="relative pt-40 pb-10 w-full  md:px-10 ">
        {/* Title + Product Image */}
        <div className="relative text-center">
          <p className={titleClassName}>
            {title.part1}
            <br />
            {title.part2}
          </p>
        </div>

        <Image src={productImg} alt="product image" className={imgClassName} />

        {/* Content Section */}
        <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-0 pt-16 lg:pt-10 contanier">
          {/* Left Text */}
          <div>
            <h3 className="uppercase font-helios font-bold lg:text-6xl text-4xl">
              {title.part1}
              <br />
              {title.part2}
            </h3>
            <p className="font-helios font-normal text-lg text-black mt-4 max-w-[400px]">
              {leftContent}
            </p>
            <CustomButton className="mt-10" />
          </div>

          {/* Product Details Card */}
          <div className="flex justify-end xl:justify-start xl:mt-20 md:w-full lg:w-full xl:w-auto max-h-[590px]">
            <div className="max-w-[500px] border-[10px] border-black p-10">
              <p className="font-helios text-sm lg:text-base md:text-base xxs:text-[12px] xs:text-[14px] border-b-[1.5px] border-black pb-5 lg:pb-7">
                <strong>Product Details</strong>
                <br />
                {productDetails}
              </p>

              <DetailRow title={temperature} description={temperatureDesc} />
              <DetailRow title={packagingType} description={packagingDesc} />

              <p className="font-helios text-sm lg:text-base md:text-base xxs:text-[12px] xs:text-[14px] border-black lg:py-7 py-5">
                <strong>Industries Served</strong>
                <br />
                {industries}
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex contanier justify-center md:justify-center lg:justify-start items-end pt-6 md:pt-10 lg:pt-0 font-helios text-sm lg:text-base font-normal underline uppercase leading-10 tracking-[4px]">
          <Link href="/products" className="text-gray-600 hover:text-gray-800">
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
