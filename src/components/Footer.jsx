import React from "react";

function Footer() {
  return (
    <footer className="border-t border-black text-center mt-20 md:mt-40 px-4 md:px-8 lg:px-16">
      {/* العنوان الصغير */}
      <p className="pt-8 pb-2 opacity-60 text-black text-[10px] sm:text-xs md:text-sm font-helios uppercase tracking-[2px] md:tracking-[2.8px]">
        SILVER LIGHT FOOD GROUP
      </p>

      {/* العنوان الرئيسي */}
      <p className="py-2 text-black text-2xl sm:text-3xl md:text-5xl font-extrabold font-mencken leading-snug">
        Quality That Build Trust
      </p>

      {/* الوصف */}
      <p className="opacity-80 py-6 text-black text-sm sm:text-base md:text-lg font-normal font-helios leading-6 md:leading-8">
        Premium Halal-Certified Frozen Foods Since 1990
      </p>

      {/* الزرار مع الخط تحته */}
      <div className="flex flex-col items-center">
        <button
          className="bg-teal-400 hover:bg-teal-500 text-white font-helios  
      px-5 py-2 text-sm sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base 
      transition-all duration-200 cursor-pointer"
        >
          Contact Us
        </button>
      </div>

      {/* الحقوق */}
      <div className="pt-11 pb-6 opacity-80 text-black text-xs  md:text-sm font-normal font-helios">
        Copyright © 2025 Silverlight Foods Group — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
