module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/layouts/**/*.{html,js}",
    "./src/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
