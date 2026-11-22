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
  // 7 Nov 2026 (owner): this code stays and is the primary account — the only loader; the sixteen stacked accounts are
  // added beside it (src/lib/adsense.ts: „kode adsense yg sudah ada biarkan saja, jgn di hapus, tambahin dengan kode adsense baru“).
  // 22 Nov 2026 (pemilik): „hapus seluruh kode adsense tumpuk dan meta tag nya … sisakan 3 adsense saja“: akun utama = ca-pub-4906992051458194 (adsense-stack.json di ulyah.com).
  adClient: 'ca-pub-4906992051458194',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
