// Adsterra direct-tag ad configuration for lie.skin.
// highperformanceformat.com = iframe display banners (isolated per slot);
// effectivecpmnetwork.com = native banner, social bar and smart link.
// Rendered by src/components/Ads.tsx.
export type BannerSlot = 'leaderboard' | 'rectangle' | 'banner468' | 'halfpage' | 'skyscraper' | 'mobile';
type Banner = { key: string; width: number; height: number };
interface AdsConfig {
  banners: Partial<Record<BannerSlot, Banner>>;
  native: { container: string; src: string } | null;
  socialBar: string | null;
  smartLink: string | null;
}

export const ADS: AdsConfig = {
  banners: {
    leaderboard: { key: '21c0e42e4102bd5f19fd8088a2f2c1c0', width: 728, height: 90 },
    rectangle: { key: 'ee5d1a6bb35c9002c296663bda79f72a', width: 300, height: 250 },
    banner468: { key: '233f7c2fadc106ccfba8b5ca3f16cfe8', width: 468, height: 60 },
    halfpage: { key: 'fd382b1572dcfab1029383d9c382d0fc', width: 160, height: 600 },
    skyscraper: { key: '46db6608027af16a5e04d885d8726bf2', width: 160, height: 300 },
    mobile: { key: 'b2886fd978c77971de385c9d7170a57e', width: 320, height: 50 },
  },
  native: {
    container: '4e742d186be4582c99aeb2026f00f144',
    src: 'https://pl30477739.effectivecpmnetwork.com/4e742d186be4582c99aeb2026f00f144/invoke.js',
  },
  socialBar: 'https://pl30477740.effectivecpmnetwork.com/b8/9c/b8/b89cb8860d966ecda6cb9b8296db83a6.js',
  smartLink: 'https://www.effectivecpmnetwork.com/i5155uumbt?key=484b2359efe54f9e1b837d6f6af4cc19',
};
