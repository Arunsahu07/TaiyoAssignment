/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "15rem auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
        input: "8rem auto", // 👈 for input layout. adds grid-cols-input class
      },
      gridTemplateRows: {
        header: "3rem auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
  },
  plugins: [],
};
