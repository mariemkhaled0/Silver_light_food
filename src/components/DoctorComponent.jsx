import Image from "next/image";
import React from "react";
import doctorImage from "@/assets/images/Rectangle.png";
import window from "@/assets/images/window.png";
import CustomButton from "./CustomButton";

function DoctorComponent() {
  return (
    <section className="lg:pt-32 pt-20  pb-20 md:pb-40">
      <div className="bg-black w-full lg:h-[423px] h-auto flex  text-white">
        <div className="lg:w-2/5 w-1/2">
          <Image
            src={doctorImage}
            alt="logo"
            className=" lg:w-full lg:h-[423px] h-full "
          />
        </div>
        <div className="lg:w-[60%] w-1/2 lg:p-10 lg:pt-20 pl-5 py-5 h-full">
          <div className=" justify-start text-white lg:text-5xl md:text-3xl text-sm font-bold font-helios uppercase lg:leading-[45px]">
            Committed to Quality
            <br />
            and
            <br />
            Sustainability
          </div>
          <div className="lg:pt-20 pt-5 md:pt-10 justify-start text-white lg:text-base md:text-[10px] text-[7px] font-bold font-helios">
            Halal | White List | ISO | HACCP
          </div>
        </div>
      </div>
      <div className="lg:py-10  pt-10">
        <p className=" text-center justify-start text-black lg:text-6xl md:text-4xl  text-xl font-extrabold font-mencken lg:leading-[150px]">
          FASTER DELIVERY
        </p>
        <div className="text-center pb-20 justify-start  text-black lg:text-xl md:text-sm text-[6px] font-normal font-helios uppercase  tracking-[2px]">
          THAT MAKES AN IMPRESSION
        </div>
      </div>
      <div className="bg-black w-full lg:h-[423px] h-auto flex  text-white">
        <div className="lg:w-[60%] w-1/2 lg:p-10 lg:pt-20 pl-5 py-5 h-full">
          <div className=" justify-start text-white lg:text-5xl md:text-3xl text-sm font-bold font-helios uppercase lg:leading-[45px]">
            LET’S BUILD A<br />
            reliable
            <br />
            partnershi
          </div>
          <CustomButton className={"lg:mt-24 mt-4 md:mt-5"} />
        </div>
        <div className="lg:w-1/2 w-1/2">
          <Image
            src={window}
            alt="logo"
            className=" lg:w-full lg:h-[423px] h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default DoctorComponent;
