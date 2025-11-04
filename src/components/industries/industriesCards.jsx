import Image from "next/image";
import React from "react";
import RetailWholesale from "@/assets/images/Retail&Wholesale.png";
import RestaurantsCafés from "@/assets/images/RestaurantsCafés.png";
import CateringCompanies from "@/assets/images/CateringCompanies.png";
import HotelsResorts from "@/assets/images/HotelsResorts.png";
import CustomButton from "../CustomButton";

const Card = ({ img, title, desc, className }) => {
  return (
    <div className={`flex w-full justify-between items-center ${className}`}>
      <div className="relative">
        <Image src={img} alt="industry_image" className="w-[600px] h-auto" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold lg:text-5xl md:text-xl text-lg xxs:text-[12px] uppercase font-helios">
          {title}
        </h2>
      </div>
      <div className="lg:px-20 md:px-6 px-4">
        <p className="max-w-[550px] lg:text-base text-[8px]  font-helios">
          {desc}
        </p>
        <CustomButton className={"mt-10"} title={"Become Our Partner"} />
      </div>
    </div>
  );
};

export default function IndustriesCards() {
  return (
    <section className="w-full">
      <Card
        img={RetailWholesale}
        title={"Retail & Wholesale"}
        desc={
          "Silverlight Foods Group supplies supermarkets, hypermarkets, and wholesalers with premium frozen products at competitive prices. With flexible options, from bulk cartons to retail-ready packs and a reliable nationwide network, we keep shelves stocked and customers satisfied."
        }
      />
      <Card
        img={RestaurantsCafés}
        className={"flex-row-reverse mt-20"}
        title={"Restaurants & Cafés"}
        desc={
          "We proudly serve Egypt’s expanding restaurant and café scene, from fine dining to casual spots. With our premium range of frozen beef, poultry, and seafood, Silverlight Foods Group helps chefs craft flavorful, high-quality menus that delight diners and elevate every kitchen."
        }
      />
      <Card
        img={CateringCompanies}
        className={"mt-20"}
        title={"Catering Companies"}
        desc={
          "Silverlight Foods Group delivers the precision, reliability, and quality needed for large-scale catering. We supply high volume, Halal-certified frozen meat, poultry, seafood, and butter , all stored under strict safety standards and delivered on time to support weddings, banquets, and corporate events across Egypt."
        }
      />
      <Card
        img={HotelsResorts}
        className={"flex-row-reverse mt-20 p-bottom"}
        title={"Hotels & Resorts"}
        desc={
          "In hospitality, consistency and quality are key, and that’s why Egypt’s leading hotels and resorts trust Silverlight Foods Group. We supply premium beef, lamb, seafood, and Halal certified chicken that help chefs craft world-class dining experiences. With nationwide distribution across Cairo, Sharm El-Sheikh, Luxor, and the Red Sea, we proudly serve both luxury resorts and boutique hotels"
        }
      />
    </section>
  );
}
