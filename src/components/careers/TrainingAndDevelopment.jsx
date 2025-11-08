import Image from "next/image";
import React from "react";
import engImg from "@/assets/images/Eng.png";
import workSpace from "@/assets/images/workspace.png";
import meeting from "@/assets/images/meeting.png";

function TrainingAndDevelopment() {
  return (
    <section className="w-full contanier pt-20">
      <div className="  ">
        <h2 className="lg:text-5xl md:text-4xl  lg:text-start text-center text-2xl font-helios font-extrabold lg:mb-12 mb-6">
          Training & Development
        </h2>
        <div className=" my-10 lg:text-lg md:text-lg text-sm lg:text-start text-center">
          <p className="font-helios ">
            At Silverlight Foods Group, we invest in our people as much as we
            invest in our business. We offer ongoing training and development
            programs designed to help employees reach their full potential and
            build long-term careers in the food industry.
          </p>
        </div>
      </div>
      <div className="w-full  ">
        <div className="flex lg:gap-28 gap-6 justify-between items-center w-full">
          <div className="lg:space-y-4 space-y-2">
            <Image src={engImg} alt="eng_img" className="w-full h-auto" />
            <div className="lg:space-y-6 space-y-2">
              <h3 className="font-bold font-helios text-xs lg:text-base">
                On-the-job training
              </h3>
              <p className="font-helios text-[9px] lg:text-base md:text-[sm]">
                To develop practical skills in warehousing, logistics, sales,
                and management.
              </p>
            </div>
          </div>
          <div className="lg:space-y-4 space-y-2">
            <Image src={workSpace} alt="eng_img" className="w-full h-full" />
            <div className="lg:space-y-6 space-y-2">
              <h3 className="font-bold font-helios text-xs lg:text-base">
                Workshops and development sessions 
              </h3>
              <p className="font-helios text-[9px] lg:text-base md:text-[sm]">
                Focused on leadership, communication, and technical expertise.
              </p>
            </div>
          </div>
          <div className="lg:space-y-4 space-y-2">
            <Image
              src={meeting}
              alt="eng_img"
              className="w-full xl:h-[270px] h-auto"
            />
            <div className="lg:space-y-6 space-y-2">
              <h3 className="font-bold font-helios text-xs lg:text-base">
                Growth opportunities
              </h3>
              <p className="font-helios text-[9px] lg:text-base md:text-[sm]">
                For high-performing employees to take on leadership and
                managerial roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingAndDevelopment;
