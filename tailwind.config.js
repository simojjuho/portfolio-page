/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
      duration: {
        '500': '500ms',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    scale: {
      '200': '2000%'
    },
    maxWidth: {
      '1/5': '20%',
      '1/4': '25%',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      '3/4': '75%',
      '4/5': '80%',
            }
      
  },
  plugins: [],
}