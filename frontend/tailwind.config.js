import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      maxHeight: {
        128: "42rem",
      },
      Height: {
        128: "36rem",
      },
    },
  },
  // darkMode: "class",
  darkMode: "media",
  plugins: [require("tw-elements/plugin.cjs"), flowbite.plugin()],
};
