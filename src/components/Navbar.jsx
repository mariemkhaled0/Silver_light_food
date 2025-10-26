import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className={"pt-6 px-20 flex items-center justify-between"}>
      <Image src="/logo.png" alt="Logo" width={100} height={94} />
      <nav>
        <ul className="flex gap-5 text-sm font-[400] font-helios">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Industries We Serve</li>
          <li>Logistics & Facilities</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
