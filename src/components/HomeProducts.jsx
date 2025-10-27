import Image from "next/image";
import React from "react";
import butter from "@/assets/images/butter.png";
import chickens from "@/assets/images/chickens.png";
import meat from "@/assets/images/meat.png";
import liver from "@/assets/images/liver.png";
import salmon from "@/assets/images/salmon.png";
import {
  ArrowIcon,
  ChickenIcon,
  LiverArrowIcon,
  MeatArrowIcon,
  SalmonArrowIcon,
} from "@/assets/Icons";

function HomeProducts() {
  return (
    <div className="lg:pt-10 ">
      <div className="flex lg:gap-4 gap-3">
        {/*Butter*/}
        <div className="lg:pt-16  md:pt-10">
          <p className=" text-center justify-start text-black lg:text-7xl text-3xl font-normal font-signature leading-10">
            Butter
          </p>
          <div className=" mb-3 lg:ml-40 ml-20">
            <ArrowIcon className="lg:w-20 lg:h-20 w-7 h-7 origin-top-left  " />
          </div>
          <Image
            className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px]  w-24 h-24"
            src={butter}
            height={288}
            width={288}
            alt="butter_image"
          />
        </div>
        {/*chicken*/}
        <div className="lg:pb-20 flex relative">
          <Image
            className="lg:w-[350px] lg:h-[400px] md:w-[250px] md:h-[280px] w-24 h-24"
            src={chickens}
            height={288}
            width={288}
            alt="chicken_image"
          />
          <div className="flex absolute -right-24 lg:-right-60">
            <div className="">
              <ChickenIcon className="lg:w-20 lg:h-20 w-7 h-7  " />
            </div>
            <div className="text-center justify-start text-black lg:text-7xl text-3xl font-normal font-signature leading-10">
              Poultry
            </div>
          </div>
        </div>
        {/*meat*/}
        <div className="lg:pt-40 md:pt-32 pt-20  relative ">
          <Image
            className="lg:w-[400px] lg:mt-10 lg:h-[320px] md:w-[230px] md:h-[230px]  w-24 h-24 "
            src={meat}
            height={288}
            width={288}
            alt="meat_image"
          />
          <div className="absolute lg:-left-36 -left-10 md:-bottom-10 bottom-0">
            <MeatArrowIcon className="lg:w-20 lg:h-20 w-7 h-7  " />
            <div className=" text-center justify-start  text-black lg:text-7xl text-4xl font-normal font-signature leading-10">
              Meat
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-16 lg:gap-20 lg:px-20 pt-2">
        {/*offals*/}
        <div className="lg:pt-10 pl-16">
          <Image
            className="lg:w-[350px] lg:h-[350px] md:w-[230px] md:h-[230px]  w-24 h-24"
            src={liver}
            height={288}
            width={288}
            alt="liver_image"
          />
          <div className="flex lg:gap-5">
            <p className="lg:ml-6 lg:mt-16 mt-4 text-center justify-start text-black lg:text-7xl text-3xl font-normal font-signature leading-10">
              Offals
            </p>
            <div className="lg:pl-9 lg:pt-3 pt-2">
              <LiverArrowIcon className="lg:w-20 lg:h-20 w-7 h-7 origin-top-left  " />
            </div>
          </div>
        </div>
        <div className="lg:pt-20 flex">
          <Image
            className="lg:w-80 lg:h-96 md:w-[230px] md:h-[230px]  w-24 h-32"
            src={salmon}
            height={288}
            width={288}
            alt="salmon_image"
          />
          <div className=" gap-5 b-10">
            <div className="lg:pl-4 pl-3">
              <SalmonArrowIcon className="lg:w-20 lg:h-20 w-7 h-7 origin-top-left  " />
            </div>
            <p className="w-20 h-6 lg:ml-20 ml-5 text-center justify-start text-black lg:text-7xl text-3xl font-normal font-signature leading-10">
              Salmon Food
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
