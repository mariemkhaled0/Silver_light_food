import Image from "next/image";
import React from "react";
import mrRomany from "@/assets/images/mrRomany.png";
import Kareem from "@/assets/images/Kareem.png";

const Card = ({ imgSrc, title, number, desc, firstName, lastName }) => {
  return (
    <div className="bg-black relative max-w-[600px] max-h-[289px] w-full">
      <div className="flex lg:gap-5 md:gap-4 gap-2 items-start">
        {/* Image or Placeholder */}
        <div className="w-auto h-auto flex items-center justify-center bg-transparent">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt="person_image"
              className="lg:w-auto md:w-auto w-[170px] h-auto "
            />
          ) : (
            // Invisible placeholder box to keep layout consistent
            <div className="lg:w-[250px] w-[100px] lg:h-[260px] md:h-[289px] h-[188px] bg-transparent" />
          )}
        </div>

        {/* Text content */}
        <div className="lg:pt-6 md:pt-5 pt-2">
          <h3 className="text-white md:text-xl lg:text-xl text-base max-[350px]:text-sm font-bold font-helios uppercase">
            {title}
          </h3>
          <div className="lg:pt-5 pt-3 text-xs md:text-base lg:text-sm max-[350px]:text-[10px]">
            <p className="text-white font-helios font-normal">{number}</p>
            <p className="text-white font-helios font-normal">{desc}</p>
          </div>
        </div>
      </div>

      {/* Name text at bottom */}
      <div
        className={`text-start flex ${
          imgSrc ? "justify-center" : "pl-6"
        } w-full absolute lg:bottom-5 md:bottom-4 bottom-2
        text-white lg:text-3xl md:text-xl text-sm max-[350px]:text-[10px] max-[350px]:leading-3
        font-bold font-helios`}
      >
        {firstName}
        <br />
        {lastName}
      </div>
    </div>
  );
};
function Cards() {
  return (
    <section className="contanier">
      <p className=" lg:py-20 md:py-10 py-5 text-center text-black lg:text-5xl md:text-3xl text-xl font-bold font-helios leading-[120px]">
        FROM VISION TO REALITY
      </p>
      <div className="flex flex-col gap-10 w-full">
        <Card
          imgSrc={mrRomany}
          title={"ChairMan"}
          number={"+20122248233"}
          desc={"Romany@silverlight-group.net"}
          firstName={"Romany"}
          lastName={"Ramzy Agaiby"}
        />
        <div className="flex lg:justify-end md:justify-end w-full">
          <Card
            title={"CEO"}
            number={"+201270585858"}
            desc={"Beshoy.agaiby@silverlight-group.net"}
            firstName={"Beshoy"}
            lastName={" Romany Ramzy "}
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;
