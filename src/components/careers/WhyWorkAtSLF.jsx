import React from "react";

function WhyWorkAtSLF() {
  return (
    <section className="contanier flex flex-wrap  mx-auto px-4 lg:pt-20 md:pt-10 pt-6">
      <h2 className="lg:text-5xl md:text-4xl  xl:max-w-[400px] md:w-full w-full text-2xl font-helios font-extrabold mb-12">
        Why Work at Silverlight Foods Group?
      </h2>

      <div className="flex flex-col  gap-8 justify-center mx-auto xxs:w-[300px] lg:max-w-[680px] md:max-w-[680px]">
        {/* LEFT SIDE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {/* Box 1 */}
          {/* <div className="w-full h-[230px] bg-black/20 rounded-2xl"></div> */}
          <div className="relative w-full h-[230px] border-[3px] border-black rounded-2xl flex items-center justify-center text-center p-6">
            <span className="absolute top-3 left-3 text-teal-400 lg:text-lg  md:text-lg text-xs font-extrabold  border-teal-400 px-1 rounded-sm">
              01
            </span>
            <p className="font-helios font-semibold lg:text-lg  md:text-lg text-sm">
              A strong, reputable brand with over three decades of industry
              experience.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative w-full h-[230px] border-[3px] border-black rounded-2xl flex items-center justify-center text-center p-6">
            <span className="absolute top-3 left-3 text-teal-400 text-lg  font-extrabold  border-teal-400 px-1 rounded-sm">
              02
            </span>
            <p className="font-helios font-semibold lg:text-lg  md:text-lg text-sm">
              A supportive and collaborative culture where every team member’s
              contribution matters.
            </p>
          </div>

          {/* Box 3 (Image placeholder) */}

          {/* Box 4 (Image placeholder) */}
          {/* <div className="w-full h-[230px] bg-black/20 rounded-2xl"></div> */}
        </div>

        {/* RIGHT SIDE BOX */}
        <div className="relative w-full  h-auto border-[3px] border-black rounded-2xl flex flex-col  gap-5 lg:flex-row md:flex-row   p-6">
          {/* Section 03 */}
          <div className="relative h-1/2">
            <span className="absolute top-0 left-0  text-teal-400 text-lg  font-extrabold  border-teal-400 px-1 rounded-sm">
              03
            </span>
            <p className="font-helios font-semibold lg:text-lg  md:text-lg text-sm mt-10 max-w-[50ch]">
              Opportunities to make an impact in a fast-growing company that
              serves hotels, restaurants, catering businesses, and retailers
              across Egypt.
            </p>
          </div>

          {/* Section 04 */}
          <div className="relative h-1/2 ">
            <span className="absolute top-0   left-0 text-teal-400 text-lg  font-extrabold  border-teal-400 px-1 rounded-sm">
              04
            </span>
            <p className="font-helios font-semibold lg:text-lg  md:text-lg text-sm mt-10 max-w-[50ch]">
              Stability and growth in a company that has continuously expanded
              its presence nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkAtSLF;
