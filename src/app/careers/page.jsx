import Hero from "@/components/careers/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import WhyWorkAtSLF from "../../components/careers/WhyWorkAtSLF";
import TrainingAndDevelopment from "../../components/careers/TrainingAndDevelopment";
import CustomButton from "@/components/CustomButton";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyWorkAtSLF />
      <TrainingAndDevelopment />
      <div className="contanier px-6 lg:pt-10 md:pt-10  pt-6 p-bottom flex justify-center items-center flex-col">
        <div className="max-w-[90ch] my-10 lg:text-lg md:text-lg text-sm w-full  ">
          <p className="font-helios text-center">
            By joining Silverlight Foods Group, you’re not just taking a job —
            you’re building a career with a company that values your success and
            growth as much as its own.
          </p>
        </div>
        <div className="">
          <CustomButton title={"Join our team"} />
        </div>
      </div>
    </>
  );
}

export default page;
