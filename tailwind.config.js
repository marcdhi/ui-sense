/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",     
"./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define the font family
        playwrite: ['"Playwrite DE Grund Guides"', 'sans-serif'], // Custom font name
        poppins: ['Poppins', 'sans-serif'],                      // Poppins font
        quicksand: ['Quicksand', 'sans-serif'],                  // Quicksand font
        ubuntu: ['Ubuntu', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

