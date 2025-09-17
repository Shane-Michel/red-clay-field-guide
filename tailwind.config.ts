import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c8102e',
          charcoal: '#2f2f2f',
          cream: '#fdf8f2'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
