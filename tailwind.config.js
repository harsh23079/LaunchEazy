/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: [{ min: "0px", max: "600px" }],
        md: "601px",
        lg: "1328px",
      },
    },
  },
  plugins: [],
});
