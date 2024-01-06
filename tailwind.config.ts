import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: "JetBrains Mono",
      },
      colors: {
        darkGray: "#24232C",
        gray: "#817D92",
        almostWhite: "#E6E5EA",
        veryDarkGray: "#18171F",
        neonGreen: "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
      },
      fontSize: {
        headerL: [
          "32px",
          {
            lineHeight: "43px",
            fontWeight: "700",
          },
        ],
        headerM: [
          "24px",
          {
            lineHeight: "31px",
            fontWeight: "700",
          },
        ],
        body: [
          "18px",
          {
            lineHeight: "23px",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
