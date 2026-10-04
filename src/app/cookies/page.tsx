import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Which cookies may be used on lie.skin, why Lie sets none of its own and how to control advertising cookies.",
  alternates: { canonical: '/cookies' }
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">Cookie Policy</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Cookies are small text files a website stores in your browser. This page explains which cookies may be used on this site and how to control them.</p>
        <h2>Cookies set by Lie</h2>
        <p>Lie does not set its own cookies to track you. Our visit statistics are counted without cookies and without identifying individual readers.</p>
        <h2>Advertising cookies from Google</h2>
        <p>The site shows ads served by Google AdSense. Google and its partners may set or read cookies to show ads, limit how often you see the same ad, measure ad performance, personalize ads where you have allowed it and prevent fraud. Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent first; if you decline, you will see non-personalized ads.</p>
        <p>You can manage personalized ads in <a href="https://www.google.com/settings/ads" className="text-gold-600 underline" target="_blank" rel="noopener">Google's Ads Settings</a> and read <a href="https://policies.google.com/technologies/ads" className="text-gold-600 underline" target="_blank" rel="noopener">how Google uses cookies in advertising</a>.</p>
        <h2>Controlling cookies in your browser</h2>
        <ul>
          <li><strong>Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.</li>
          <li><strong>Safari:</strong> Settings → Privacy → Manage Website Data.</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions.</li>
        </ul>
        <p>Blocking cookies will not stop you from reading Lie. Questions: <a href="mailto:hello@lie.skin" className="text-gold-600 underline">hello@lie.skin</a>.</p>
      </div>
    </div>
  );
}
