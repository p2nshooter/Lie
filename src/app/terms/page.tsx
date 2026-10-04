import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The conditions for using lie.skin: personal use of our articles, information not advice, links, advertising and changes.",
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">Terms of Use</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>By using lie.skin you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2>Using our articles</h2>
        <p>You may read, print and share links to our articles for personal use, and quote short excerpts with credit and a link. You may not republish complete articles or use them commercially without our written permission.</p>
        <h2>Information, not advice</h2>
        <p>All content is general educational information about evidence-based skincare. It is not medical advice, diagnosis or treatment. Decisions you make based on it are your own responsibility; consult a board-certified dermatologist, doctor or pharmacist for your situation. See our <a href="/disclaimer" className="text-gold-600 underline">disclaimer</a>.</p>
        <h2>Links</h2>
        <p>We link to official sources and other useful sites. We do not control them and are not responsible for their content.</p>
        <h2>Advertising</h2>
        <p>The site is supported by ads served by Google AdSense. Ads are separate from our editorial content, and their appearance is not an endorsement.</p>
        <h2>Acceptable use</h2>
        <p>Do not use the site unlawfully, attempt to access non-public systems or copy content in bulk with automated tools.</p>
        <h2>Liability</h2>
        <p>We work to keep Lie accurate, but we provide it as-is and cannot guarantee that every detail is complete or current. To the extent permitted by law, we are not liable for losses arising from use of the site.</p>
        <h2>Changes</h2>
        <p>We may update the site and these terms at any time; the review date above shows the latest version.</p>
      </div>
    </div>
  );
}
