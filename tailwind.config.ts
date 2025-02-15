import type { Config } from 'tailwindcss';


const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: "#DA9100",
        primary: {
          DEFAULT: '#013220',
          light: '#47A360F2',
        },
        text: {
          DEFAULT: '#000000',
          gold: '#DA9100',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        inika: ['Inika', 'serif'],
        inter: ['Inter', 'sans-serif'],
        inria: ['Inria Serif', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
