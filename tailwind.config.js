/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "count-hill": ["count-hill", "sans-serif"],
        "paris-forbel": ["paris-forbel", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      screens: {
        xxl: "992px",
      },
      keyframes: {
        slideDown: {
          "0%": { top: "-200px" },
          "100%": { top: "0" },
        }
      },
      animation: {
        slideDown: "slideDown 1.2s ease-in-out forwards",
      }
    },
  },
  plugins: [],
}
