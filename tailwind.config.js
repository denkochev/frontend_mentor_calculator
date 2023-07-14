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
        purpleBg: "hsl(268, 75%, 9%)",
        /*
        // BACKGROUNDS
        */
        // main background
        lightBg: "hsl(0, 0%, 90%)",
        // keypad background
        lightKeyPadBG: "hsl(0, 5%, 81%)",
        // screen background
        lightGrayDspl: "hsl(0, 0%, 93%)",
        /*
        // KEYS COLORS
        */
        // key background
        lightKeyBg: "hsl(185, 42%, 37%)",
        lightKeyShadow: "hsl(185, 58%, 25%)",
        lighKeyHover: "hsl(184, 40%, 56%)",
        lightOrange: "hsl(25, 98%, 40%)",
        lightDarkOrange: "hsl(25, 99%, 27%)",
        lightOrangeHover: "hsl(25, 100%, 60%)",
        controlYellow: "hsl(45, 7%, 89%)",
        controlOrange: "hsl(35, 11%, 61%)",
        /*
        // TEXT COLORS
        */
        darkYellow: "hsl(60, 10%, 19%)",
        prjWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [
  ],
};
