import Image from "next/image";
import React from "react";
import engImg from "@/assets/images/Eng.png";
import workSpace from "@/assets/images/workspace.png";
import meeting from "@/assets/images/meeting.jpg";
import lab from "@/assets/images/lab2.jpg";

function TrainingAndDevelopment() {
  return (
    <section className="w-full contanier pt-20">
      <div>
        <h2 className="lg:text-5xl md:text-4xl lg:text-start text-center text-2xl font-helios font-extrabold lg:mb-12 mb-6">
          Training & Development
        </h2>
        <div className="my-10 lg:text-lg md:text-lg text-sm lg:text-start text-center">
          <p className="font-helios">
            At Silverlight Foods Group, we invest in our people as much as we
            invest in our business. We offer ongoing training and development
            programs designed to help employees reach their full potential and
            build long-term careers in the food industry.
          </p>
        </div>
      </div>

      {/* Scrollable section */}
      <div className="w-full overflow-x-auto scrollable-container pb-10">
        <div className="flex gap-8 lg:gap-16 items-start w-max px-4">
          {[
            {
              img: engImg,
              title: "On-the-job training",
              desc: "To develop practical skills in warehousing, logistics, sales, and management.",
            },
            {
              img: workSpace,
              title: "Workshops and development sessions",
              desc: "Focused on leadership, communication, and technical expertise.",
            },
            {
              img: meeting,
              title: "Growth opportunities",
              desc: "For high-performing employees to take on leadership and managerial roles.",
            },
            {
              img: lab,
              title: "Exposure to international standards ",
              desc: "n food safety, cold-chain logistics, and global supply management",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] lg:w-[430px] space-y-3 lg:space-y-4"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] rounded-2xl"
              />
              <div className="space-y-2">
                <h3 className="font-bold font-helios text-xs lg:text-base">
                  {item.title}
                </h3>
                <p className="font-helios text-[9px] lg:text-base md:text-sm text-gray-700">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingAndDevelopment;
