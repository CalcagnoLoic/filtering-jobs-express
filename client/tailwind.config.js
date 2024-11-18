/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aquaSpring: "#EFFAFA",
        aquaHaze: "#EEF6F6",
        blueSmoke: "#7B8E8E",
        outerSpace: "#2C3A3A",
        breakerBay: "#5BA4A4",
        torchRed: "#FA0F3C"
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
