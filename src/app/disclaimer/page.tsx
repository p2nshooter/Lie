import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "The limits of the information published on Lie about evidence-based skincare, and when to consult a professional.",
  alternates: { canonical: '/disclaimer' }
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">Disclaimer</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Lie publishes general educational information about evidence-based skincare. Please read it with the following limits in mind.</p>
        <h2>Not medical advice</h2>
        <p>Lie publishes general educational information about skincare. It is not medical advice and is not a substitute for diagnosis or treatment by a dermatologist, doctor or pharmacist. If you have a skin condition, a changing mole, a severe reaction or any health concern, see a qualified professional.</p>
        <h2>Patch test and use products as directed</h2>
        <p>Skin reacts differently from person to person. Patch test new products, introduce active ingredients gradually and follow the manufacturer's instructions. Stop using a product that causes irritation and seek advice if it persists.</p>
        <h2>Pregnancy and medication</h2>
        <p>Some ingredients are not recommended during pregnancy or breastfeeding or may interact with medications. Check with your doctor or pharmacist.</p>
        <h2>No paid endorsements</h2>
        <p>Lie does not accept payment from brands for coverage. When we mention product types or ingredients, it is for education only.</p>
        <h2>Accuracy</h2>
        <p>We research carefully and review articles regularly, but information can become outdated. If you spot an error, please <a href="/contact" className="text-gold-600 underline">tell us</a>.</p>
        <h2>Advertising</h2>
        <p>Ads on the site are served by Google AdSense. We do not choose individual advertisers and are not responsible for their offers.</p>
      </div>
    </div>
  );
}
