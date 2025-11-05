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
          "absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 lg:w-[400px] md:w-[300px] w-[150px] h-auto"
        }
        titleClassName={
          "text-black lg:text-9xl md:text-8xl text-6xl  xxs:text-4xl xs:text-5xl font-bold font-helios text-center uppercase"
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
