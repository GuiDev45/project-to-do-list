/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gColor1: "#656565",
        gColor2: "#FF7D20",
        gColor2Hover: "#CC641A",
        gColor2Active: "#FF974D",
        gColor3: "#CBCBCB",
        gColor4: "#ECECEC",
        gColor5: "#FFFFFF",
        gColor6: "#7E7E7E",
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
        gborderRadiusButton: "30px",
        gborderRadiusInput: "50px",
      },
      width: {
        gButtonWidth: "136px",
        gInputWidth: "480px",
      },
      height: {
        gButtonHeight: "52px",
        gInputHeight: "48px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
