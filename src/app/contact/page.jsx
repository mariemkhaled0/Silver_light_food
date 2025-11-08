import Navbar from "@/components/Navbar";
import Image from "next/image";

import contact from "@/assets/images/contactUs.png";
import Hero from "@/components/contact/Hero";
import GetInTouch from "@/components/contact/GetInTouch";

export default function page() {
  return (
    <>
      <Hero />
      <GetInTouch />
    </>
  );
}
