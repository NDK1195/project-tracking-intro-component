/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        modal: "0px 5px 10px 0px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        red: "hsl(0, 100%, 68%)",
        "very-dark-blue": "hsl(230, 29%, 20%)",
        "dark-grayish-blue": "hsl(230, 11%, 40%)",
        "grayish-blue": "hsl(231, 7%, 65%)",
        "light-grayish-blue": "hsl(207, 33%, 95%)",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1580px",
      },
    },
  },
  plugins: [],
};
