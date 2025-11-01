import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products/ProductsSection";
import meatBg from "@/assets/images/meatBg.png";
import React from "react";
import MeatProductPage from "@/assets/images/MeatProductPage.png";

function page() {
  return (
    <>
      <ProductsSection
        imgClassName={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[500px] md:w-[400px] w-[250px] h-auto"
        }
        titleClassName={
          "text-black lg:text-9xl md:text-9xl text-7xl font-bold font-helios text-center uppercase"
        }
        bgImg={meatBg}
        title={{ part1: "Frozen", part2: "Meat" }}
        productImg={MeatProductPage}
        leftContent={
          "Our frozen meat selection is carefully sourced to meet the needs of Egypt’s food industry, delivering both quality and variety."
        }
        productDetails="Beef forequarters, hindquarters, striploins, tenderloins, briskets, and lamb carcasses."
        temperature={"-18"}
        temperatureDesc="Frozen at -18°C with strict cold-chain management to preserve
                  flavor and texture."
        packagingDesc=" Bulk cartons and vacuum sealed options for both wholesale and
                  retail."
        packagingType="Bulk"
        industries=" Hotels, restaurants, supermarkets, catering companies, and food
                processors."
      />
    </>
  );
}

export default page;
