import React from "react";

function CustomButton({ className,title }) {
  return (
    <button
      className={`inline-flex justify-center items-center bg-teal-400 text-white font-helios  cursor-pointer 
  px-4 py-2 text-xs md:px-6 md:py-3 md:text-base hover:bg-teal-500 transition-all duration-200 ${className}`}
    >
      {title || "Get In Touch"}
    </button>
  );
}

export default CustomButton;
