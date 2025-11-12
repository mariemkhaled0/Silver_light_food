import ProductsSection from "@/components/Products/ProductsSection";
import chickenBg from "@/assets/images/chickenBg.png";
import seaFood from "@/assets/images/seaFood.png";
import seaFoodBg from "@/assets/images/SeaFoodBg.jpg";
function page() {
  return (
    <>
      <ProductsSection
        bgImg={seaFoodBg}
        imgClassName={
          "absolute lg:top-20  md:top-20 top-36 xl:-right-10 lg:-right-28 xl:top-36 md:-right-10 -right-10 lg:w-[400px] md:w-[300px] xxs:w-[150px] xs:[130px] w-[180px] h-auto"
        }
        titleClassName={
          "text-black xl:text-[220px]  lg:text-[180px] md:text-[150px] text-8xl  xxs:text-7xl font-bold font-helios xl:text-center lg:text-left text-left pl-6  uppercase"
        }
        title={{ part1: "Sea", part2: "food" }}
        productImg={seaFood}
        leftContent={
          "Our frozen seafood range brings the freshness of the ocean straight to your kitchen."
        }
        productDetails="A wide variety of frozen fish, shrimp, and squid."
        temperature={"Peak"}
        temperatureDesc="Processed and frozen at peak freshness to maintain natural flavor and nutrition."
        packagingDesc=" Offered in bulk cartons and portion-controlled packs."
        packagingType="Bulk"
        industries=" Resorts, seafood restaurants, hotels, supermarkets, and catering companies."
      />
    </>
  );
}

export default page;
