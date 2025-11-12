import ProductsSection from "@/components/Products/ProductsSection";
import butterProduct from "@/assets/images/butterProduct.png";
import butterBg from "@/assets/images/ButterBg.jpg";
function page() {
  return (
    <div className="w-full">
      <ProductsSection
        bgImg={butterBg}
        imgClassName={
          "absolute top-14 right-0  xl:-top-20 md:top-6 xl:-right-40 -right-20 xl:mt-28 lg:mt-14 md:mt-10 mt-6   xl:w-[550px] lg:w-[370px] md:w-[300px] w-[200px] h-auto"
        }
        titleClassName={
          "text-black xl:text-[200px] lg:text-9xl md:text-9xl text-7xl  xxs:text-5xl xs:text-6xl font-bold font-helios text-center uppercase"
        }
        title={{ part1: "Butter", part2: "" }}
        productImg={butterProduct}
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
    </div>
  );
}

export default page;
