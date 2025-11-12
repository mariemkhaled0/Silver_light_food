import ProductsSection from "@/components/Products/ProductsSection";
import Productschicken from "@/assets/images/Productschicken.png";
import chickenBg from "@/assets/images/chickenBg.png";
function page() {
  return (
    <>
      <ProductsSection
        bgImg={chickenBg}
        imgClassName={
          " absolute top-36 -right-10 xxs:-right-4  xl:top-28  xl:-right-20 xl:w-[450px] lg:w-[400px] md:w-[250px] xxs:w-[100px] xs:[130px] w-[150px] h-auto"
        }
        titleClassName={
          "text-black lg:text-[150px] md:text-8xl text-6xl  xxs:text-4xl xs:text-5xl font-bold font-helios text-center uppercase"
        }
        title={{ part1: "Poultry", part2: "&chicken" }}
        productImg={Productschicken}
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
