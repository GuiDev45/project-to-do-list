/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gColor1: "#656565",
        gColor2: "#FF7D20",
        gColor3: "#CBCBCB",
        gColor4: "#ECECEC",
        gColor5: "#FFFFFF",
        gColor6: "#7E7E7E",
      },
      backgroundImage: {
        gBackground: "linear-gradient(to top right, #C33764, #1D2671)",
      },
      fontFamily: {
        guiSans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "gbody": "1rem", // 16px
        "glg": "1.25rem", // 20px
        "gxl": "1.5rem", // 24px
        "g2xl": "2rem", // 32px
        "gh1": "2.25rem", // 36px
        "gh2": "1.5rem", // 24px
        "gh3": "1.125rem", // 18px
        "gbody-s": "0.875rem", // 14px
        "gbody-l": "1.125rem", // 18px
      },
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        40: "40px",
        48: "48px",
        60: "60px",
        72: "72px",
        80: "80px",
        120: "120px",
        160: "160px",
        200: "200px",
      },
      borderRadius: {
        gborderRadius: "30px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
