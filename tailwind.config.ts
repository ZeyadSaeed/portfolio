import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        sectionFullPhone: "calc(100vh - 53px)",
        sectionFullDesktop: "calc(100vh - 96px)",
      },
      screens: {
        xs: "375px",
        xxs: "290px",
      },
      colors: {
        "light-white": "rgba(255,255,255, 0.04)",
        cyan: "#00AAA9",
        background: "#0A0A0A",
      },
      boxShadow: {
        "cyan-glow": "0px 0px 15px 1px #00AAA9",
        "hovered-glow": "0px 0px 25px 2px #00AAA9",
      },
      textShadow: {
        DEFAULT: "0 0px 15px #00AAA9, 0 0px 70px #00AAA9",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc((-42px * 11) + (-16px * 10) - 3px))",
          },
        },
        type: {
          "0%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "#00AAA9",
          },
        },
      },
      animation: {
        slider: "slider 10s linear infinite",
        type: "type 0.4s linear 0.3s 5",
      },
    },
  },
  plugins: [],
};
export default config;
