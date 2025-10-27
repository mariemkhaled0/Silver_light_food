"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LeftArrow, MenuIcon } from "@/assets/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pt-6 px-6 lg:px-20 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={100} height={94} />

      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-sm font-[400] font-helios">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">Products</li>
          <li className="cursor-pointer hover:opacity-70">
            Industries We Serve
          </li>
          <li className="cursor-pointer hover:opacity-70">
            Logistics & Facilities
          </li>
          <li className="cursor-pointer hover:opacity-70">Careers</li>
          <li className="cursor-pointer hover:opacity-70">Contact Us</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex flex-col gap-1.5"
      >
        <MenuIcon />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0  z-50 bg-primary flex flex-col items-center justify-end text-end transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute w-full flex justify-start px-8 top-6  text-3xl font-bold text-black"
        >
          <LeftArrow />
        </button>

        {/* Links */}
        <ul className="space-y-6 text-lg font-helios">
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Home
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            About
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Products
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Industries We Serve
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Logistics & Facilities
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Careers
          </li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
    </header>
  );
}
