module.exports = {
  // mode: `jit`,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"]
      },
      padding: {
        inherit: 'inherit'
      },
      colors: {
        purple: {
          light: "hsl(257, 43%, 45%)",
          DEFAULT: "hsl(259, 38%, 28%)",
          medium: "hsl(257, 44%, 35%",
          dark: "hsl(258, 38%, 23%)",
          footer: "hsl(256, 42%, 32%)",
        },
        pink: {
          light: "hsl(320, 42%, 54%)",
          DEFAULT: "hsl(322, 42%, 51%)"
        },
        "text-white": "hsla(0, 0%, 100%, 0.6)"
      }
    },
  },
  plugins: [],
};
