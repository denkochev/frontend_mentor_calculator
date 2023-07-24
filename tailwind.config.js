const plugin = require('tailwindcss/plugin')

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
      fontFamily: {
        primary: ['League Spartan', 'sans-serif'],
      },
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
        purpleDarkViolet: "hsl(268, 71%, 12%)",
        // screen background
        lightGrayDspl: "hsl(0, 0%, 93%)",
        desaturedBlue: "hsl(224, 36%, 15%)",
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
        hoverRed: "hsl(6, 92%, 66%)",
        desterBlue: "hsl(223, 31%, 20%)",
        graylishOrange: "hsl(30, 25%, 89%)",
        graylishOrangeHover: "hsl(28, 16%, 65%)",
        darkDarkBlue: "hsl(225, 21%, 49%)",
        darkShadowBlue: "hsl(224, 28%, 35%)",
        darkHoverBlue: "hsl(223, 52%, 75%)",
        darkRed: "hsl(6, 63%, 50%)",
        darkShadowRed: "hsl(6, 70%, 34%)",
        darkHoverRed: "hsl(6, 92%, 66%)",
        pureCyan: "hsl(176, 100%, 44%)",
        pureCyanShadow: "hsl(177, 92%, 70%)",
        pureCyanHover: "hsl(176, 100%, 79%)",
        darkPurpleViolet: "hsl(268, 47%, 21%)",
        darkMagenta: "hsl(290, 70%, 36%)",
        darkVioletPurple: "hsl(281, 89%, 26%)",
        shadowPurple: "hsl(285, 91%, 52%)",
        purpleHoverViolet: "hsl(267, 53%, 43%)",
        purpleHoverControl: "hsl(280, 56%, 44%)",
        /*
        // TEXT COLORS
        */
        darkYellow: "hsl(60, 10%, 19%)",
        prjWhite: "hsl(0, 0%, 100%)",
        darkGraylish: "hsl(221, 14%, 31%)",
        lightYellow: "hsl(52, 100%, 62%)",
        purpleDarkBlue: "hsl(198, 20%, 13%)",
      },
    },
  },
  plugins: [
    plugin(function({addVariant}) {
      // here is your CSS selector - could be anything
      // in this case it is `.theme` element
      // with `.theme--red` class (both present)
      addVariant('purple', '.purple.purple &')
    }),
  ],
};
