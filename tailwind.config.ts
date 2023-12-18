import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#FFC107",
        accent: "#607D8B",
        background: "#FFFFFF",
        text: "#757575",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Edu: "Edu VIC WA NT Beginner, cursive",
        Poppins: "Poppins",
        DanceScript: "Dancing Script",
      },
    },
  },
  plugins: [],
};
export default config;
