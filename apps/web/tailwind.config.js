/** @type {import('tailwindcss').Config} */

module.exports = {
  ...require("@capstone/config/tailwind.config"),
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
}
