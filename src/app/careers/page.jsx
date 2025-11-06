import Hero from "@/components/careers/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import WhyWorkAtSLF from "./WhyWorkAtSLF";
import TrainingAndDevelopment from "./TrainingAndDevelopment";
import CustomButton from "@/components/CustomButton";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyWorkAtSLF />
      <TrainingAndDevelopment />
      <div className="xl:px-56 px-6 lg:pt-20 md:pt-10 pt-6 p-bottom">
        <div className="max-w-[90ch] my-10 lg:text-lg md:text-lg text-sm  text-center">
          <p className="font-helios ">
            By joining Silverlight Foods Group, you’re not just taking a job —
            you’re building a career with a company that values your success and
            growth as much as its own.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <CustomButton title={"Join our team"} />
        </div>
      </div>
    </>
  );
}

export default page;
