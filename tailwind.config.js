/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F4EA",
      },
      fontFamily: {
        helios: ["var(--font-helios)", "sans-serif"],
        signature: ["var(--font-thesignature)", "cursive"],
        mencken: ["var(--font-mencken_Std)"],
      },
      screens: {
        xxs: { min: "320px", max: "350px" },
        xs: { min: "375px", max: "390px" },
      },
    },
  },
  plugins: [],
};
