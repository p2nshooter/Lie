import type { Config } from 'tailwindcss';

// lie.skin — 'Pearl basins & rosewater': iridescent pearl, rose and silver
// (docs/ADSENSE-BLUEPRINT.md §4 in ulyah.com). Unique to this site.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#21141b', 900: '#2f1f29', 800: '#45303c', 700: '#5d4452' },
        ivory: { 50: '#fdf9f9', 100: '#f6edf0', 200: '#eadde3' },
        gold: { 300: '#f4bccb', 400: '#e69aae', 500: '#cf7891', 600: '#a2566d' }
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
