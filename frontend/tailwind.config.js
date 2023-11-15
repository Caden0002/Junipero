/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      // fontFamily: {
      //   mukta: ['Mukta Mahee', 'sans-serif'],
      // },



      colors: {
        // Define your color variables here
        textColorPrimary: '#ffffff', // Change this to your desired color
        textColorSecondary: '#b1b1b1',
        textColorTertiary:  '#1FBCFF',
        textColorQuaternary: "#FFA8A8",


        backgroundColorPrimary: '#ffffff',
        // backgroundColorSecondary: '#FFC38B',
        // backgroundColorTertiary: '#F6ECF5',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [],
};