/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white-1": "rgba(255, 255, 255)",
        "primary-white-2": "rgba(247, 247, 247)",
        "primary-white-3": "rgba(229, 229, 229)",
        "primary-black-1": "rgba(0,0,0)",
        "primary-black-2": "rgba(75,75,75)",
        "primary-black-3": "rgba(119,119,119)",
        "primary-black-4": "rgba(175, 175, 175)",
        "primary-green-1": "rgba(88,204,2)",
        "primary-green-2": "rgba(137,226,25)",

        "secondary-blue-1": "rgba(43, 112, 201)",
        "secondary-blue-2": "rgba(28, 176, 246)",
        "secondary-red-1": "rgba(255, 75, 75)",
        "secondary-orange-1": "rgba(255, 200, 0)",
        "secondary-orange-2": "rgba(255, 150, 0)",
        "secondary-purple-1": "rgba(206, 130, 255)",
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
        2: "rgba(56, 161, 105, 1)0px 4px 0px 0px",

        unit: "inset 0 -10px 0px #28282830,inset 0 -9px 10px rgb(20 16 35 / 12%)",
        inset: "inset 0px -1px 0px 3px #27492b66",
        unit_btn: "0px 8px 0px 0px",
        border_1: "0px 0px 0px 1px",
        border_2: "0px 0px 0px 2px",
        border_3: "0px 0px 0px 3px",
        border_4: "0px 0px 0px 4px",
      },
      screens: {
        "c-sm": {
          max: "767px",
        },
        "c-md": {
          max: "991px",
        },
        "c-lg": {
          max: "1199px",
        },
        "c-xl": {
          max: "1200px",
        },
        "c-max-lg": {
          max: "1159.9999px",
        },
        "c-max-td": {
          max: "919.9998px",
        },
        "c-max-tm": {
          max: "740.9999px",
        },
        "c-min-lg": {
          min: "1160.9999px",
        },
        "c-max-md": {
          max: "699.9999px",
        },
        "c-min-md": {
          min: "700.9999px",
        },
      },
    },
    lineHeight: {
      10: "10px",
      17: "17px",
      16: "16px",
      15: "15px",
    },
  },
  plugins: [],
}
