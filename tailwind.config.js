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
        'background-color': '#1d3557',
        'primary': "#fa9500",
        'primary-light': '#ffa641',
        'gray': "#ABB2BF",
        
      }
    },
  },
  plugins: [],
}

