import Image from "next/image";
import React from "react";
import careersHeroImg from "@/assets/images/carrerHeroImg.png";

function Hero() {
  return (
    <section className="w-full  pt-20 contanier ">
      <div className=" mx-auto flex items-center flex-col">
        <div className="relative lg:w-[1000px] ">
          <Image
            src={careersHeroImg}
            alt="careers_hero"
            className="w-full h-auto"
          />
          <div className="lg:w-[350px] md:w-[350px] w-[250px] font-mencken p-6 text-teal-400 h-[80px] bg-orange-50 rounded-tl-[50px] rounded-bl-[0px] rounded-br-[20px] absolute -top-3 -left-4 flex items-center justify-start lg:text-6xl text-4xl md:text-6xl">
            <h2 className=" uppercase"> Careers</h2>
          </div>
        </div>
        <div className="max-w-[85ch] my-10 lg:text-xl md:text-lg text-sm text-center">
          <p className="font-helios ">
            At Silverlight Foods Group, we believe that our greatest strength is
            our people. Since 1990, we have built a reputation as one of Egypt’s
            leading importers and distributors of frozen meat, poultry, seafood,
            and butter. And this success has been made possible by the
            dedication, expertise, and passion of our team.
          </p>
          <p className="pt-6 font-bold">
            Joining Silverlight means becoming part of a company that values
            growth, innovation, and excellence at every level.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
