/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          light: 'var(--color-secondary-light)',
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
      },
        'accent-one': {
          light: 'var(--color-accent-one-light)',
          DEFAULT: 'var(--color-accent-one)',
          dark: 'var(--color-accent-one-dark)',
        },
        'accent-two': {
          light: 'var(--color-accent-two-light)',
          DEFAULT: 'var(--color-accent-two)',
          dark: 'var(--color-accent-two-dark)'
        },
        'color-text': 'var(--color-text)'
      },
      transitionProperty: {
        'opacity': 'opacity',
        height: 'height',
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