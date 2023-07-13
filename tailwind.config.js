import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(222, 26%, 31%)",
        lightBg: "hsl(0, 0%, 90%)",
        purpleBg: "hsl(268, 75%, 9%)",
      },
    },
  },
  plugins: [
  ],
};
