/** @type {import('tailwindcss').Config} */
const halloween = require("daisyui/src/colors/themes")[
  "[data-theme=halloween]"
];
const bumblebee = require("daisyui/src/colors/themes")[
  "[data-theme=bumblebee]"
];
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          ...bumblebee,
          success: "#228B22",
          error: "#FF0000",
        },
      },
      {
        halloween: {
          ...halloween,
          success: halloween.accent,
        },
      },
    ],
    darkTheme: "halloween",
  },
};
