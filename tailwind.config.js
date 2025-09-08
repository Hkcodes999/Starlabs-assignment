/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are in /components etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
