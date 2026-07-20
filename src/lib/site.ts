// Per-site brand config — the one file (plus tailwind colors, globals.css
// variables and content/articles.ts) that changes between sibling sites.
export const SITE = {
  id: 'lie-skin',
  name: 'Lie',
  domain: 'lie.skin',
  url: 'https://lie.skin',
  tagline: 'Skincare, evidence-first',
  description:
    "Independent, dermatology-informed skincare guides — what the evidence actually says about ingredients, routines and conditions, with no brand spin and no miracle claims.",
  locale: 'en',
  heroLead: 'Skincare,',
  heroAccent: 'evidence-first',
  adClient: 'ca-pub-6371903555702163',
  analyticsEndpoint: 'https://api.ulyah.com/track',
  adConfigEndpoint: 'https://api.ulyah.com/content/ad-config',
} as const;
