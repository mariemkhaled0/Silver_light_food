import { LocationIcon, MailIcon, PhoneIcon } from "@/assets/Icons";
import React from "react";
const Card = ({
  className,
  title,
  phoneNumber,
  textColor,
  email,
  location,
}) => {
  return (
    <div className={`${className} p-5 space-y-10 h-[300px] xl:h-auto`}>
      <h2 className={`font-bold text-4xl`}>{title}</h2>
      <div className="space-y-4">
        <div className="flex gap-4 items-center ">
          <PhoneIcon className={textColor} />
          <p>{phoneNumber}</p>
        </div>
        <div className="flex gap-4 items-center ">
          <MailIcon className={textColor} />
          <p>{email}</p>
        </div>
        <div className="flex gap-4 items-center ">
          <LocationIcon className={`${textColor} w-6 h-6`} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default function GetInTouch() {
  return (
    <section className="contanier lg:pt-28 md:pt-14 pt-10 p-bottom">
      <div className="flex justify-between gap-5 lg:items-center flex-col lg:flex-row  ">
        <div className="space-y-4">
          <p className="uppercase">Contact</p>
          <h2 className="font-bold text-5xl font-helios ">Get in Touch</h2>
        </div>
        <p className="text-lg max-w-[60ch] font-helios">
          At Silverlight Foods Group, we maintain a strong presence across Egypt
          to serve our clients with ease and efficiency.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:pt-36 md:pt-14 pt-10">
        <div>
          <p className="font-extrabold lg:text-5xl md:text-5xl text-3xl  font-helios pb-10 lg:pb-0 md:pb-0">
            You can reach us at any of our key branches
          </p>
        </div>
        <div>
          <Card
            className={"bg-black text-white"}
            title={"Cairo – Head Office"}
            phoneNumber={"+1012 3456 789"}
            textColor={"text-white"}
            email={"demo@gmail.com"}
            location={"Obour Industrial Area, B & C Block 8, Cairo, Egypt"}
          />
        </div>
        <div>
          <Card
            className={"border-2 border-black"}
            title={"Sharm El-Sheikh"}
            phoneNumber={"+1012 3456 789"}
            textColor={""}
            email={"demo@gmail.com"}
            location={"El Riwaisat Area, Sharm El-Sheikh, South Sinai, Egypt"}
          />
        </div>
        <div>
          <Card
            className={
              "border-r-2 border-b-2 lg:border-t-2 border-l-2 lg:border-l-0 md:border-l-0  border-black"
            }
            title={"Luxor"}
            phoneNumber={"+1012 3456 789"}
            textColor={""}
            email={"demo@gmail.com"}
            location={"Television Street, Block 18, Luxor, Egypt "}
          />
        </div>
      </div>
    </section>
  );
}
