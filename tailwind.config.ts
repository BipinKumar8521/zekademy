import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio:{
        "authContainer":"390/379"
      },
      fontFamily: {
        "logo": ["Motley Forces", "cursive"],
      }
    },
    colors:{
      buttonBackground: "rgba(25, 39, 52, 1)",
      buttonBorder: "rgba(66, 85, 104, 1)",
      link: "#00B2FF",
      paragraph: "rgba(255, 255, 255, 0.75)",

    }
  },
  plugins: [],
};
export default config;
