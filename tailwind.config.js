/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jpGreen: "#76FA93",
        jpBlue: "#76C1FF",
        jpYellow: "#FFFD7E",
      },
    },
  },
  plugins: [],
};
