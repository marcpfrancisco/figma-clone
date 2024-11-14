import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#006FF9',
        },
      },
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
};
export default config;
