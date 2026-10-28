// Per-site brand config — the one file (plus tailwind colors, globals.css
// variables and content/articles.ts) that changes between sibling sites.
export const SITE = {
  id: 'lie-skin',
  name: 'Lie',
  domain: 'lie.skin',
  url: 'https://lie.skin',
  tagline: 'Skincare, evidence-first',
  description:
    "Independent, dermatology-informed skincare guides: what the evidence says about ingredients, routines and conditions, with no brand spin or miracle claims.",
  locale: 'en',
  heroLead: 'Skincare,',
  heroAccent: 'evidence-first',
  // 28 Oct 2026 (owner): lie.skin — google.com, pub-2271696914011881, DIRECT, f08c47fec0942fa0.
  adClient: 'ca-pub-2271696914011881',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
