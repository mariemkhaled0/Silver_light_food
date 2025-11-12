import ProductsSection from "@/components/Products/ProductsSection";
import Offals from "@/assets/images/liverProduct.png";
import chickenBg from "@/assets/images/chickenBg.png";
import offalsBg from "@/assets/images/OffalsBg.jpg";
function page() {
  return (
    <>
      <ProductsSection
        bgImg={offalsBg}
        imgClassName={
          "absolute   top-36  xl:-right-28 lg:-right-20 md:-right-20 -right-10 lg:w-[400px] xl:w-[500px] md:w-[300px] w-[150px] h-auto"
        }
        titleClassName={
          "text-black lg:text-[180px] md:text-9xl text-6xl  xxs:text-4xl xs:text-5xl font-bold font-helios text-center uppercase"
        }
        title={{ part1: "Offals", part2: "" }}
        productImg={Offals}
        leftContent={
          "We import and supply premium quality butter to support the foodservice and retail sectors across Egypt."
        }
        productDetails="Salted and unsalted butter, available in bulk and foodservice portions."
        temperature={"Fresh"}
        temperatureDesc="Stored under optimal refrigeration conditions to maintain quality and freshness."
        packagingDesc=" Available in blocks and cartons designed for bakeries, restaurants, and retail outlets."
        packagingType="Block"
        industries="Bakeries, confectioneries, hotels, restaurants, and catering businesses."
      />
    </>
  );
}

export default page;
