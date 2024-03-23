/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)"
      },
      fontFamily: {
        custom: '"League Spartan", sans-serif'
      },
      screens: {
        desktop: "1600px"
      }
    },
  },
  plugins: [],
}

