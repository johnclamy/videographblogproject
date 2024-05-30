import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appGrey: {
          200: "#E8EDDF",
          300: "#CFDBD5",
          800: "#333533",
          900: "#242423",
        },
        appYellow: {
          200: "#F5CB5C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
