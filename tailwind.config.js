/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Merriweather: ["Merriweather"],
        Unlock: ["Unlock"]

      },
      colors:{
        'background-color': '#343A40',
        'primary': "#1DBF73",
        'primary-light': '#189A5E',
        'gray': "#ABB2BF",
        
      }
    },
  },
  plugins: [],
}

