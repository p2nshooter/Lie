/** @type {import('next').NextConfig} */
// Sixteen machine-written articles were removed (owner rule: hand-written only;
// each duplicated a hand-written guide). Their urls go to that guide so no
// link or index entry dies.
const REMOVED_MACHINE_ARTICLES = {
  'polyphenol-antioxidants-in-skincare': 'vitamin-c-serums-guide',
  'the-role-of-ceramides-in-skin-barrier-repair': 'ceramides-and-the-barrier',
  'the-complexities-of-niacinamide-in-skincare': 'niacinamide-vitamin-c',
  'hormesis-in-skincare': 'skincare-myths',
  'glycerin-moisturization-strategies': 'moisturiser-how-it-works',
  'the-science-behind-squalane-in-skincare': 'squalane-lightweight-oil',
  'the-science-of-exfoliation-for-different-skin-types': 'exfoliation-how-often',
  'the-role-of-polyunsaturated-fatty-acids-in-skin-barrier-repair': 'skin-barrier-explained',
  'the-complexities-of-skin-aging-and-the-role-of-glycation': 'anti-ageing-realistic',
  'the-skin-barrier-and-the-role-of-sphingolipids': 'skin-barrier-explained',
  'the-skin-benefits-of-phytosterols': 'skin-barrier-explained',
  'the-science-behind-skin-brightening-ingredients': 'hyperpigmentation-guide',
  'the-science-behind-skin-elasticity': 'anti-ageing-realistic',
  'the-science-behind-skin-microbiome-modulation': 'skin-barrier-explained',
  'the-science-behind-skin-whitening-ingredients': 'hyperpigmentation-guide',
  'the-science-of-hyaluronic-acid-in-skincare': 'hyaluronic-acid-truth',
};
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return Object.entries(REMOVED_MACHINE_ARTICLES).map(([from, to]) => ({
      source: `/articles/${from}`,
      destination: `/articles/${to}`,
      permanent: true,
    }));
  },
};
module.exports = nextConfig;
const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
initOpenNextCloudflareForDev();
