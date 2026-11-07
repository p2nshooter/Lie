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
  // 7 Nov 2026 (owner): this code stays and is the primary account — the only loader; the sixteen stacked accounts are
  // added beside it (src/lib/adsense.ts: „kode adsense yg sudah ada biarkan saja, jgn di hapus, tambahin dengan kode adsense baru“).
  adClient: 'ca-pub-2271696914011881',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
