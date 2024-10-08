import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "ethrome-BlackerThanPurple": "#13080E",
      },
      colors:{
        "ethrome-yellow" : "#FABB00",
        "ethrome-white" : "#F8FCFC",
        "ethrome-purple" : "#8314C7",
        "ethrome-dark-purple" : "#5b0e8b",
        "ethrome-brown" : "#261018",
        "ethrome-cotta" : "#301320",
      },
    },
  },
  plugins: [],
};
export default config;
