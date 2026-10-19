import type { Metadata } from 'next';

/**
 * Our own promotion (owner, 18 Oct 2026): AXTO and XAA, introduced for Lie's
 * readers in Lie's own words — labelled openly, no medical claims, no ad slot.
 */
export const metadata: Metadata = {
  title: 'Digital tools for evidence-minded skincare — AXTO & XAA',
  description:
    'A clearly labelled note from our publisher: AXTO, a private AI workspace for reading studies and labels, and XAA, a studio that builds sites for clinics and skincare brands.',
  alternates: { canonical: '/digital-tools' }
};

const link = (base: string) => `${base}/?utm_source=lie.skin&utm_medium=referral&utm_campaign=ecosystem`;

export default function DigitalToolsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">✦ Our own promotion</p>
      <h1 className="mt-2 font-serif text-3xl font-black">Digital tools for evidence-minded skincare</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 19 October 2026</p>
      <div className="article-body mt-6">
        <p>
          Lie exists to look into the evidence: what a study really measured, what an ingredient list really says, and where marketing runs ahead of the
          research. This page steps aside from skincare for a moment to introduce two projects run by the same publisher as Lie. That makes it an
          advertisement for our own work, and we would rather say so in the first paragraph than in the small print.
        </p>

        <h2>AXTO — reading the fine print, privately</h2>
        <p>
          <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a> is an AI workspace that brings several tools together under one
          account. Three of them fit the way our readers already work:
        </p>
        <ul>
          <li>
            <strong>AI Studio</strong> lets you upload a long study, a product monograph or a photo of an ingredient list and ask for a plain-language summary —
            and put the same question to several AI models side by side, so you can see where they agree and where they do not.
          </li>
          <li>
            <strong>Privacy Vault</strong> finds names, dates of birth and other personal details in documents and blacks them out on your own device before an AI
            reads them — sensible when the paper in front of you is a prescription or a clinic letter.
          </li>
          <li>
            <strong>Clipper</strong> turns a long routine video into short, captioned clips, again on your own device, without uploading the footage anywhere.
          </li>
        </ul>
        <p>
          You use your own AI key and AXTO only relays requests; in Local Mode the AI runs entirely on your computer. One caution we hold to: an AI can
          summarise evidence, but it cannot examine your skin. Diagnosis and treatment belong with a dermatologist, doctor or pharmacist.
        </p>

        <h2>XAA — websites for clinics, practitioners and brands</h2>
        <p>
          <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a> is a European web development studio that builds websites and
          platforms to order. For the skincare world that might mean:
        </p>
        <ul>
          <li>a clinic or practitioner website with treatments, prices and online booking;</li>
          <li>an online shop for a small skincare brand, with ingredient pages that are honest and easy to read;</li>
          <li>a members’ area, client portal or larger platform when a business grows.</li>
        </ul>
        <p>
          Projects are split into milestones that are agreed, delivered and paid for one by one, by PayPal, bank transfer or USDT, and ready-made templates
          help smaller budgets start quickly. XAA’s own site is in English, Spanish and Indonesian.
        </p>

        <h2>What does not change</h2>
        <p>
          Lie stays independent. None of our guides to ingredients, routines or skin concerns recommends AXTO or XAA, and none was written or changed because
          of them. If either tool is useful to you, we are glad; if not, there is plenty of evidence still waiting to be read on the rest of this site.
        </p>
      </div>
    </div>
  );
}
