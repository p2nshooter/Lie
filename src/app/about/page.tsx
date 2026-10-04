import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Lie",
  description: "Who we are, what Lie covers, how we research every guide on evidence-based skincare and why we stay independent.",
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">About Lie</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Lie — short for Look Into the Evidence — is an independent publication about skincare that separates what the research actually shows from what marketing promises. We explain ingredients, routines, skin conditions and common myths in plain language, so you can make calm, informed choices about your skin.</p>
        <h2>What we cover</h2>
        <ul>
          <li>Ingredients: what retinoids, acids, vitamin C, niacinamide and sunscreen filters do, and what the evidence says.</li>
          <li>Routines: building a simple routine that suits your skin type and budget.</li>
          <li>Skin concerns: acne, pigmentation, sensitivity, dryness and aging, and when to see a professional.</li>
          <li>Sun protection: how sunscreen works and how to use it properly.</li>
          <li>Myths: claims that sound scientific but are not supported by evidence.</li>
        </ul>
        <h2>How we work</h2>
        <p>Every article is researched and written by our editorial team and checked against reliable sources before it is published. We explain technical terms in plain language, say clearly when evidence is limited or mixed, and update articles when the facts change. Our full standards are set out in our <a href="/editorial-policy" className="text-gold-600 underline">editorial policy</a>.</p>
        <h2>Independence</h2>
        <p>Lie is free to read and supported by advertising served by Google AdSense, which is kept clearly separate from our articles. We do not accept payment for coverage, and advertisers have no say in what we publish.</p>
        <h2>What we are not</h2>
        <p>Our articles are general information, not medical advice, diagnosis or treatment. For decisions about your own situation, speak with a board-certified dermatologist, doctor or pharmacist.</p>
        <h2>Contact</h2>
        <p>Corrections, questions and topic ideas are welcome. See our <a href="/contact" className="text-gold-600 underline">contact page</a> or email <a href="mailto:hello@lie.skin" className="text-gold-600 underline">hello@lie.skin</a>.</p>
      </div>
    </div>
  );
}
