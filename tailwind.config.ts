import type { Config } from 'tailwindcss';

// lie.skin — skincare theme: soft plum ink, blush paper, rose-gold accent.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#2a151f', 900: '#3a2230', 800: '#4d2f3f', 700: '#664154' },
        ivory: { 50: '#fbf6f4', 100: '#f5e9e6', 200: '#ecd6d2' },
        gold: { 300: '#e8a9b8', 400: '#d88a9c', 500: '#c9748a', 600: '#a85870' }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose2: '44rem' }
    }
  },
  plugins: []
};
export default config;
