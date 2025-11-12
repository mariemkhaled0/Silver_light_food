import Image from "next/image";
import React from "react";
import mrRomany from "@/assets/images/MrRomany.png";
import mrBeshoy from "@/assets/images/MrBeshoy.png";
import { CircleIcon } from "@/assets/Icons";

const Card = ({ imgSrc, title, className, number, desc, email }) => {
  return (
    <div className="text-black relative  w-full">
      <div
        className={`flex justify-between gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap items-center ${className}`}
      >
        <div className="">
          <h3 className="font-signature lg:text-6xl md:text-6xl text-4xl py-4">
            {title}
            <br />
            Message
          </h3>
          <div>
            <p className="max-w-prose lg:text-base md:text-base text-sm">
              {desc}
            </p>
          </div>
        </div>
        <div className={`flex ${className}`}>
          <div className="flex items-end">
            <CircleIcon className={"md:w-[60px] lg:w-[70px] w-[40px]"} />
          </div>
          <div>
            <Image
              src={imgSrc}
              alt="person_img"
              className="w-[450px]  h-auto object-contain"
            />

            <div className="pt-4 text-center font-extrabold">
              <p>{number}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Cards() {
  return (
    <section className="contanier  p-bottom">
      <p className=" lg:py-20 md:py-10 py-5 text-center text-black lg:text-5xl md:text-3xl text-xl font-bold font-helios leading-[120px]">
        FROM VISION TO REALITY
      </p>
      <div className="flex flex-col gap-10 w-full">
        <Card
          imgSrc={mrRomany}
          title={"Chairman’s"}
          number={"+20122248233"}
          email={"Romany@silverlight-group.net"}
          firstName={"Romany"}
          lastName={"Ramzy Agaiby"}
          desc="Since 1990, Silver Light Foods has been committed to providing premium Halal frozen meat and food products across Egypt.
Our success is built on trust, quality, and long-term partnerships with leading global suppliers.
We remain dedicated to excellence, sustainability, and food safety, ensuring Silver Light Foods continues to be a trusted name in Egypt’s frozen food industry."
        />
        <div className="flex lg:justify-end md:justify-end w-full">
          <Card
            imgSrc={mrBeshoy}
            className={"flex-row-reverse"}
            title={"CEO"}
            number={"+201270585858"}
            email={"Beshoy.agaiby@silverlight-group.net"}
            desc="At Silver Light Foods, our vision is to lead Egypt’s frozen food industry through innovation, reliability, and quality.
Building on over three decades of experience, we continue to strengthen our global partnerships and enhance our logistics network to ensure consistent supply, premium Halal products, and trusted service.
Our commitment is simple — to deliver excellence from our sources to every table in Egypt, while driving growth and sustainability across the food sector."
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;
