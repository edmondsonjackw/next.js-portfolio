/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC5A5",
        textColor: "#14FF8E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["DM Sans"],
        secondary: ["Nova Square"],
        third: ["MuseoModerno"],
      },
    },
  },
  plugins: [],
};
