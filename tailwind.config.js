const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "app-primary": "#F4623A",
        "app-primary-bg": "#251F24",
        "app-primary-accent": "#F1EBE8",
      },
    },
  },
  plugins: [],
});
