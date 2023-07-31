/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-1": "rgb(255, 255, 255)",
        "white-2": "rgb(229, 229, 229)",
        "black-1": "rgba(0, 0, 0, 0.5)",
        "black-2": "rgb(75, 75, 75)",
        "green-1": "rgb(88, 204, 2)",
        "green-2": "rgb(137, 226, 25)",
        "blue-1": "rgb(27, 153, 214)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        1: "2px",
        2: "12px",
      },
      boxShadow: {
        1: "rgba(0, 0, 0, 0.2) 0px 0px 18px",
      },
    },
    screens: {
      "c-sm": { max: "767px" },
      "c-md": { max: "991px" },
      "c-lg": { max: "1199px" },
      "c-xl": { max: "1200px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
