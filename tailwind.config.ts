import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        kumar: ["Kumar", "sans-serif"],
        abhaya: ["Abhaya Libre", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        btnShadow: "0px 0px 30px 10px rgba(0, 0, 0, 0.3)",
        headerImg: "0px 4px 20px 20px rgba(255, 255, 255, 0.6)",
      },
      borderRadius: {
        btnBorder: "0px 40px 40px 40px",
        imgBorder: "130px 0px 130px 130px",
        imgBorder2: "130px 130px 130px 0px",
      },
      backgroundImage: {
        header1: "url('/header/header-1.jpeg')",
        header2: "url('/header/header-2.jpeg')",
      },
      screens: {
        mlg: "1024px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
