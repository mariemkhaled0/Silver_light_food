// src/lib/fonts.js
import localFont from "next/font/local";

export const heliosExt = localFont({
  src: [
    {
      path: "../../public/fonts/heliosext.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/heliosext_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helios",
  display: "swap",
  preload: true,
});

export const theSignature = localFont({
  src: [
    {
      path: "../../public/fonts/Thesignature.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Thesignature.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-thesignature",
  display: "swap",
  preload: true,
});
export const Mencken_Std = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Mencken-Std-Text-Extra-Bold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mencken_Std",
  display: "swap",
  preload: true,
});
