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
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[350px] md:w-[250px] xxs:w-[100px] xs:[130px] w-[150px] h-auto"
        }
        titleClassName={
          "text-black xl:text-[140px] lg:text-9xl md:text-8xl text-6xl xxs:text-4xl xs:text-5xl font-bold font-helios text-center uppercase"
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
