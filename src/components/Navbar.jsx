"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LeftArrow,
  LinkedinIcon,
  MenuIcon,
} from "@/assets/Icons";
import whiteLogo from "@/assets/images/whiteLogo.png";

export default function Navbar({ className, isWhiteLogo = false }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries We Serve", path: "/industries" },
    { name: "Logistics & Facilities", path: "/logistics" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className={` w-full ${className}`}>
      <div
        className={`px-6 pt-3 lg:px-20 w-full flex items-center justify-between relative z-[999] `}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={isWhiteLogo ? whiteLogo : "/logo.png"}
              alt="Logo"
              width={100}
              height={94}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex lg:gap-4 xl:gap-6 text-sm font-[400] font-helios">
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer hover:opacity-70">
                <Link
                  href={link.path}
                  className={`transition-all duration-200 ${
                    pathname === link.path
                      ? ` ${
                          isWhiteLogo ? "font-extrabold" : "text-black"
                        }  font-extrabold`
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <MenuIcon
            className={`w-6 md:w-7 ${
              isWhiteLogo ? "text-white" : "text-black"
            }`}
          />
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 text-black z-50 bg-primary flex flex-col pt-5 text-end transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute w-full flex justify-start px-8 top-6 text-3xl font-bold text-black"
          >
            <LeftArrow />
          </button>

          {/* Links */}
          <div className="max-h-[100vh] overflow-y-auto">
            <ul className="space-y-6 pe-10 pt-20 text-[15px] md:text-2xl font-helios">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  <Link
                    href={link.path}
                    className={`transition-all duration-200 ${
                      pathname === link.path ? "font-extrabold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <li className="flex justify-end gap-5 bottom-0 right-0 pt-32 pe-10 pb-4">
              <LinkedinIcon />
              <FacebookIcon />
              <InstagramIcon />
            </li>
          </div>
        </div>
      </div>
    </header>
  );
}
