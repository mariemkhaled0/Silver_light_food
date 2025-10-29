import { CamadaIcon, MirascoIcon, PrimaIcon } from "@/assets/Icons";
import React from "react";
import marhabaLogo from "@/assets/images/marhaba-logo.png";
import marfrigLogo from "@/assets/images/logo-marfrig.png";
import croppedMasterLogo from "@/assets/images/croppedMasterLogo.png";
import logo31 from "@/assets/images/logo-31.png";
import logo21 from "@/assets/images/logo-21.png";
import logoDaMinerva from "@/assets/images/Logo_da_Minerva_Foods.svg 1.png";
import logoAllana from "@/assets/images/logo_allana_white.png";
import frialto from "@/assets/images/frialto.png";
import Clippath from "@/assets/images/Clippath.png";

import Image from "next/image";

function Brands() {
  return (
    <section className="contanier lg:pt-24 pt-10">
      <p className="justify-start text-black lg:text-6xl md:text-4xl text-xl font-bold font-helios lg:leading-[60px] md:leading-9 leading-6">
        Supplying Egypt’s Trusted
        <br /> Food Brands
      </p>
      <p className="lg:pt-10 md:pt-5 max-w-[794px] justify-start text-black lg:text-base md:text-[12px] text-[6px] font-normal font-helios">
        For over three decades, Silverlight Foods Group has proudly supplied
        premium halal-certified frozen meat and food products to Egypt’s most
        respected hotels, restaurants, and retailers.
      </p>

      <div className="pt-7 mx-auto lg:max-w-[900px]">
        {/* Row 1 - only three items */}
        <div className="grid grid-cols-3 justify-center items-center">
          <CamadaIcon className="w-[100px] md:w-[120px] lg:w-[189px] h-auto" />
          <MirascoIcon className="w-[100px] md:w-[120px] lg:w-[183px] h-auto" />
          <div>
            <Image
              src={marhabaLogo}
              alt="logo"
              width={256}
              height={42}
              className="w-[120px] md:w-[180px] lg:w-[256px] h-auto"
            />
          </div>
        </div>

        {/* Row 2+ */}
        <div className="grid grid-cols-4 justify-items-center gap-y-5 mt-5">
          <Image
            src={marfrigLogo}
            alt="logo"
            width={189}
            height={51}
            className="w-[80px] md:w-[130px] lg:w-[189px] h-auto"
          />
          <Image
            src={croppedMasterLogo}
            alt="logo"
            width={182}
            height={62}
            className="w-[90px] md:w-[130px] lg:w-[182px] h-auto"
          />
          <Image
            src={logo31}
            alt="logo"
            width={95}
            height={74}
            className="w-[60px] md:w-[80px] lg:w-[95px] h-auto"
          />
          <Image
            src={logo21}
            alt="logo"
            width={95}
            height={74}
            className="w-[60px] md:w-[80px] lg:w-[95px] h-auto"
          />
          <Image
            src={logoDaMinerva}
            alt="logo"
            width={186}
            height={78}
            className="w-[70px] md:w-[140px] lg:w-[186px] h-auto"
          />
          <Image
            src={logoAllana}
            alt="logo"
            width={178}
            height={87}
            className="w-[70px] md:w-[130px] lg:w-[178px] h-auto"
          />
          <Image
            src={frialto}
            alt="logo"
            width={123}
            height={78}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src={Clippath}
            alt="logo"
            width={99}
            height={91}
            className="w-[50px] md:w-[85px] lg:w-[99px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Brands;
