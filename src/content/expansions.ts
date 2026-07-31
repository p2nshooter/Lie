import type { Article } from './types';

/**
 * Additive expansions for the lie.skin library.
 *
 * Every entry here APPENDS sections to an existing article. Nothing is
 * removed, nothing is rewritten, and two articles are never merged into one
 * URL. Multiple entries may target the same slug — they apply in order, which
 * is how later top-off passes work.
 */
export interface Expansion {
  slug: string;
  title?: string;
  excerpt?: string;
  sections: Article['sections'];
}

export const EXPANSIONS: Expansion[] = [
  {
    slug: 'skincare-routine-basics',
    sections: [
      {
        h: "Why the ten-step routine became normal",
        p: [
          "The expansion from three products to ten did not follow any change in the evidence. It followed the structure of the industry, in which growth requires either more customers or more products per customer, and the second is considerably easier to achieve.",
          "Each additional category was introduced with a plausible-sounding function: something to prepare the skin, something to seal, something targeted at a specific concern. None of these is fraudulent, and very few of them have evidence that they add anything on top of a cleanser, a moisturiser and sunscreen.",
          "This is worth understanding because it reframes the question. The default assumption when reading about skincare is that a longer routine is more thorough and therefore better. The more accurate assumption is that a longer routine is more profitable, and that any individual step needs to justify itself on evidence rather than on the general principle that more care is better.",
        ],
      },
      {
        h: "How more products make skin worse",
        p: [
          "The mechanism by which additional products cause problems is not mysterious. Every product applied is an additional set of ingredients contacting the skin, and each carries some probability of irritation or allergic sensitisation. Applying twelve products multiplies that exposure.",
          "The more common problem is a damaged skin barrier, which is what results from over-cleansing, over-exfoliating, or layering multiple active ingredients. The presentation is characteristic: skin that feels tight, stings when products are applied, looks red or flushed, and is simultaneously oily and flaky. People experiencing this frequently respond by adding more products, which is precisely the wrong direction.",
          "The other cost is diagnostic. With twelve products in a routine, identifying the one causing a reaction requires removing everything and reintroducing one at a time over several weeks. With three, the culprit is usually obvious within days.",
        ],
      },
      {
        h: "Cleansing, and how much is enough",
        p: [
          "The purpose of cleansing is to remove sunscreen, makeup, excess oil and environmental deposits. It is not to make skin feel squeaky, which is a sign that the cleanser has stripped more than it needed to and disrupted the barrier in the process.",
          "For most people, once daily in the evening is sufficient, with a rinse of water in the morning. Skin does not accumulate much overnight beyond its own sebum, and a second full cleanse adds irritation without adding benefit. Anyone who works in a dusty environment or exercises heavily has a reasonable case for a second wash.",
          "The choice of cleanser matters less than the frequency, provided it is gentle and non-foaming or mildly foaming. Water temperature is worth mentioning: hot water increases the removal of skin lipids and contributes to the tight, stripped sensation that people then try to correct with more product.",
        ],
      },
      {
        h: "The order of application, and why it barely matters",
        p: [
          "A great deal of writing is devoted to the correct sequence of application, and the underlying principle is simple: thinner formulations before thicker ones, so that a heavy occlusive does not prevent a lighter product from reaching the skin.",
          "Beyond that, the precision claimed is not supported. The idea that products must be applied in a specific order to a specific timing, or that waiting a set number of minutes between them is essential, is largely marketing. Skin is not that sensitive to sequence.",
          "The two genuine considerations are that sunscreen goes on last in the morning, after anything else has absorbed, and that products with very different pH requirements are better separated in time — one in the morning and one in the evening — rather than layered. Neither requires a chart.",
        ],
      },
      {
        h: "Adding something new without confusing the picture",
        p: [
          "The single most useful discipline in skincare is to introduce one product at a time and wait before adding another. Four to six weeks is a reasonable interval, because that is roughly how long visible change takes for most active ingredients and how long a delayed irritation reaction may take to appear.",
          "Introducing three products simultaneously and observing an improvement tells you nothing about which one produced it. Observing a reaction tells you nothing about which one caused it. Both outcomes leave you with less information than you started with, despite having spent more money.",
          "Patch testing is worth doing for anything containing a new active ingredient: apply a small amount to a discreet area for several days before using it on the face. This does not eliminate the possibility of a reaction and it catches a meaningful proportion of them before they affect a visible area.",
        ],
      },
      {
        h: "What deserves a fourth step",
        p: [
          "The minimal routine handles the fundamentals, and there are circumstances where a fourth product is justified. The clearest is a specific, identified concern with an ingredient that has evidence behind it: a retinoid for photoageing or acne, a benzoyl peroxide or salicylic acid preparation for acne, azelaic acid for redness or pigmentation.",
          "The criterion is that there is a specific problem and a specific ingredient with reasonable evidence for it, rather than a general desire to do more. Products marketed for vague objectives — brightening, refining, restoring — usually lack a defined mechanism and are the ones most likely to add cost without adding effect.",
          "Where a genuine concern exists and over-the-counter options have not helped after a fair trial of several months, that is the point at which a dermatologist becomes worth the cost. Prescription options are considerably stronger than anything on a shelf, and persistent problems frequently resolve quickly once the right treatment is identified.",
        ],
      },
      {
        h: "Consistency beats optimisation",
        p: [
          "The gap between a good routine and an optimal one is small. The gap between a routine that is followed and one that is not is enormous, and it is where nearly all of the actual difference in outcomes lives.",
          "This has a design implication. A three-step routine performed every day for five years produces better results than a nine-step routine performed enthusiastically for two months and then abandoned, and the second pattern is considerably more common. Complexity is the main predictor of abandonment.",
          "So the case for the minimal version is not that elaborate routines cannot work. It is that most of the benefit comes from a small number of steps, that the remainder adds cost and irritation risk, and that simplicity is what makes daily use survive a busy month. None of this is medical advice, and anyone with a persistent or worsening skin condition should see a clinician rather than adjust products indefinitely.",
        ],
      },
    ],
  },
  {
    slug: 'sunscreen-guide',
    sections: [
      {
        h: "What the evidence actually shows",
        p: [
          "The claim that sunscreen is the best-supported anti-ageing step rests on a specific body of research rather than on general reasoning. A randomised controlled trial conducted in Australia over several years found measurably less skin ageing in participants using daily sunscreen compared with those using it discretionarily.",
          "That study design is unusual in cosmetic science, where most claims rest on short-term measurements or manufacturer testing. A randomised trial running for years, with objective assessment, is a considerably stronger form of evidence than anything supporting most serums.",
          "There is a separate and larger body of evidence on skin cancer prevention, which is the more important outcome. Regular sunscreen use has been associated with reduced incidence of melanoma and squamous cell carcinoma in trial and observational data. The cosmetic benefit is real and secondary.",
        ],
      },
      {
        h: "SPF, UVA and what the numbers mean",
        p: [
          "The SPF number describes protection against UVB radiation, which causes burning. It is not a linear scale and it is not a duration: SPF 30 filters roughly ninety-seven percent of UVB and SPF 50 roughly ninety-eight, which is a smaller difference than the numbers suggest.",
          "UVA radiation penetrates more deeply, contributes substantially to photoageing, and is not described by the SPF figure at all. Different regions label UVA protection differently — a circled UVA mark, a star rating, or the PA notation — and checking for one of these matters as much as the SPF number.",
          "The practical consequence is that a broad-spectrum product at SPF 30 or above, used properly, is more useful than a higher SPF without UVA protection. The higher numbers are worth having and the difference between them is smaller than the difference between applying enough and applying too little.",
        ],
      },
      {
        h: "The application quantity problem",
        p: [
          "The single largest gap between laboratory performance and real-world protection is quantity. Products are tested at an application density that most people do not come close to matching, and studies of actual use consistently find people applying between a quarter and half of the tested amount.",
          "Because the relationship between quantity and protection is not linear, applying half the tested amount does not give half the SPF; it gives substantially less than half. A high-SPF product applied thinly can deliver less real protection than a moderate one applied properly.",
          "The commonly cited guides — around a teaspoon for the face and neck, or the two-finger-length measure — are approximations of the tested density. They look like more product than seems necessary, which is precisely the point: the amount that feels right is reliably too little.",
        ],
      },
      {
        h: "Mineral and chemical filters",
        p: [
          "Sunscreens work through filters that either absorb ultraviolet radiation and dissipate it as heat, or reflect and scatter it. The first group is commonly called chemical or organic; the second, based on zinc oxide and titanium dioxide, is called mineral or physical. The distinction is less clean than the labels suggest, since mineral filters also absorb a substantial proportion.",
          "Neither category is inherently superior. Mineral filters are less likely to cause stinging or irritation, which makes them a reasonable default for sensitive skin, and they historically left a visible white cast, which newer formulations have reduced but not eliminated on deeper skin tones.",
          "Modern chemical filters are typically more cosmetically elegant and achieve broad-spectrum coverage more easily. Filter availability varies substantially between regulatory regions, which is why products sold in different countries can perform quite differently despite similar labelling. The best sunscreen is the one you will apply every day in adequate quantity, which is a preference question rather than a chemistry one.",
        ],
      },
      {
        h: "Reapplication in ordinary life",
        p: [
          "The standard advice to reapply every two hours is derived from conditions involving sun exposure, swimming, sweating and towelling, and it is entirely appropriate for those. Applying it unmodified to someone who works indoors produces advice that is ignored because it is impractical.",
          "The considerations that actually determine reapplication are physical removal and time outdoors. Someone commuting, sitting indoors all day and commuting home has had limited exposure and limited removal. Someone spending a lunch hour outside, or working near a window, has more.",
          "A workable approach for indoor workers is a morning application in adequate quantity and one reapplication before any substantial afternoon outdoor period. For anyone outdoors for extended stretches, the two-hour guidance applies as stated. Powder and stick formats exist specifically to make midday reapplication over makeup practical, and while they are harder to apply at the tested density, some reapplication is better than none.",
        ],
      },
      {
        h: "The myths that keep people unprotected",
        p: [
          "Several persistent beliefs reduce use, and each is worth addressing directly. That sunscreen is unnecessary on cloudy days is false: a substantial proportion of UV penetrates cloud cover, and UVA in particular passes through window glass, which is why one-sided facial photoageing is documented in drivers.",
          "That darker skin does not require it is a partial truth misapplied. Higher melanin does provide meaningful natural protection and does not eliminate photoageing, hyperpigmentation or skin cancer risk. Skin cancers in people with deeper skin tones are diagnosed later and have worse outcomes, which makes protection more rather than less relevant.",
          "That sunscreen prevents adequate vitamin D is not supported by the trial evidence, which has generally found that realistic sunscreen use does not produce deficiency. Anyone concerned about vitamin D status has a considerably safer route available through diet or supplementation, and should discuss it with a clinician rather than reduce sun protection to address it.",
        ],
      },
      {
        h: "Making daily use actually happen",
        p: [
          "Everything above is irrelevant if the product sits unused, and the reasons people stop are consistent and addressable. The most common is texture: a product that feels greasy, leaves a cast, stings the eyes or interferes with makeup will be abandoned regardless of how well it performs.",
          "This makes the search for a formulation you genuinely like a worthwhile investment rather than vanity. The range of textures available now is wide, and trying several small sizes to find one that is pleasant is a better use of money than buying a highly rated product that you will not apply.",
          "The second measure is placement. Keeping the product where the routine already happens — beside the toothbrush, in a bag, at a desk — removes the friction that causes it to be skipped on rushed mornings. As with everything on this site, this is educational rather than medical advice, and anyone with a history of skin cancer or a specific condition should follow the guidance of their own clinician.",
        ],
      },
      {
        h: "The protection that is not a product",
        p: [
          "Sunscreen is one component of sun protection and it is frequently treated as the whole of it, which leads people to rely on a product where physical measures would work better. Shade, timing and clothing all outperform sunscreen on the metric that matters, which is how much radiation reaches the skin.",
          "Ultraviolet intensity varies enormously through the day, peaking in the middle hours, which means shifting an outdoor activity by two hours can reduce exposure more than any product. A wide-brimmed hat protects the face, ears and neck continuously without needing reapplication. Tightly woven clothing, and garments rated for ultraviolet protection, do the same for the body.",
          "The practical framing is that sunscreen covers what the other measures cannot: the face, the hands, and anything exposed during ordinary daily movement. It works best as the last layer of a strategy rather than as the entirety of one, and this is particularly relevant for extended outdoor activity where reapplication is unreliable.",
        ],
      },
      {
        h: "Expiry, storage and when to replace it",
        p: [
          "Sunscreen filters degrade over time and formulations are tested to remain effective until a stated date. A product several years past that date, or one that has separated, changed colour or developed an unusual smell, should be replaced rather than trusted.",
          "Storage matters more than for most cosmetics. Heat accelerates degradation, which means a bottle left in a car through a summer is a poor bet regardless of its printed date. The same applies to leaving it in direct sun at a beach, which is where it is most likely to happen and most consequential.",
          "There is a useful implication in the other direction. Anyone applying the recommended quantity daily will get through a standard bottle in a matter of weeks, not years, which means expiry rarely becomes an issue for people using it properly. A bottle that has lasted two years is itself evidence that too little is being applied.",
        ],
      },
    ],
  },
  {
    slug: 'skincare-routine-basics',
    sections: [
      {
        h: "The morning and evening split",
        p: [
          "The three steps do not all belong at the same time of day, and separating them correctly removes most of the remaining complexity. Sunscreen is a morning product with no purpose in the evening. Cleansing is primarily an evening task, since the point is removing what accumulated during the day.",
          "That produces a simple structure: in the morning, rinse or gently cleanse, moisturise if the skin needs it, apply sunscreen. In the evening, cleanse properly, apply any treatment product, and moisturise. Two short sequences rather than one long one.",
          "Anything active generally belongs in the evening, both because several ingredients degrade in sunlight and because it avoids layering under sunscreen. This is also the practical reason the evening routine is where a fourth step usually goes, while the morning stays minimal.",
        ],
      },
      {
        h: "What a damaged barrier looks like and how to repair it",
        p: [
          "Since over-treating is the main risk of an elaborate routine, it is worth knowing the presentation. A compromised skin barrier typically causes tightness, stinging on application of products previously tolerated, visible redness, rough or flaky patches, and increased sensitivity to temperature and wind.",
          "The correction is subtraction rather than addition. Stop all active ingredients and exfoliants. Reduce to a gentle cleanser once daily and a bland moisturiser, ideally one containing ceramides or similar barrier lipids, applied as often as the skin wants it. Continue sunscreen, since damaged skin is more vulnerable rather than less.",
          "Most cases improve substantially within two to four weeks on this regimen. Actives can then be reintroduced one at a time, at lower frequency than before, with the frequency raised only if the skin tolerates it. Anything that does not improve on a simplified routine within a month warrants a clinical opinion rather than further experimentation.",
        ],
      },
      {
        h: "What the three steps cost",
        p: [
          "A minimal routine is also an inexpensive one, and it is worth stating the figures because the assumption that effective skincare is costly keeps people from starting. A gentle cleanser, a moisturiser containing standard barrier ingredients and a broad-spectrum sunscreen are all available from pharmacy brands at modest prices.",
          "The active ingredients with the strongest evidence — retinoids, benzoyl peroxide, salicylic acid, azelaic acid, niacinamide — are all off-patent, widely manufactured and cheap. The premium versions differ in texture, packaging and marketing rather than in the concentration of anything that has been shown to work.",
          "Where money is genuinely worth spending is on formulation quality for products you will use daily, since a sunscreen that feels pleasant gets applied and one that does not gets skipped. That is a real consideration and it is a preference question, which is quite different from paying for a higher concentration of something the evidence does not support at all.",
        ],
      },
    ],
  },
  {
    slug: 'retinoids-explained',
    sections: [
      {
        h: "The family, from weakest to strongest",
        p: [
          "The confusion around these products comes largely from the names, which describe several related compounds at different points in a conversion pathway. Skin converts what is applied into retinoic acid, which is the form that acts on the cell, and each conversion step reduces potency.",
          "Retinyl esters sit furthest from the active form and are correspondingly mild and slow. Retinol requires two conversions. Retinaldehyde requires one, making it stronger than retinol and gentler than the prescription form. Tretinoin is retinoic acid itself and requires none.",
          "A newer class, of which adapalene is the widely available example, binds selectively to certain receptors and is notably better tolerated. It is available without prescription in many countries, which makes it one of the more accessible starting points for anyone wanting genuine efficacy without the adjustment period associated with tretinoin.",
        ],
      },
      {
        h: "What happens at the cell level",
        p: [
          "Retinoids act by binding to receptors in the cell nucleus and altering gene expression, which is why they produce structural change rather than a surface effect. This is the mechanistic reason they have evidence where most cosmetic ingredients do not.",
          "The documented effects include increased cell turnover in the epidermis, increased collagen production in the dermis, reduced breakdown of existing collagen, normalisation of the follicular lining that contributes to acne, and dispersal of pigment granules. That is an unusually broad set of actions for a single class.",
          "It also explains the timeline. Changes in gene expression produce changes in tissue over weeks to months, not days, and the collagen effects in particular are measured over periods of six months to a year. Anyone expecting visible improvement within a fortnight is measuring against the wrong timescale and is likely to conclude prematurely that it is not working.",
        ],
      },
      {
        h: "The adjustment period, and how to shorten it",
        p: [
          "The dryness, flaking and irritation that accompany the first weeks are common and are not evidence of damage in most cases. They reflect the accelerated turnover, and they typically settle over several weeks as the skin adapts.",
          "The approaches that reduce this are well established. Start at a low frequency — twice weekly rather than nightly — and increase only once the current frequency is comfortable. Apply to completely dry skin, since damp skin increases penetration and irritation. Use a small amount; a pea-sized quantity covers the whole face.",
          "Buffering, meaning applying moisturiser before or after the retinoid, reduces irritation and appears to reduce efficacy less than might be expected. The sandwich method — moisturiser, retinoid, moisturiser — is a reasonable approach for anyone struggling. What is not reasonable is pushing through severe reactions, since a damaged barrier will eventually force a complete stop.",
        ],
      },
      {
        h: "What to stop while starting",
        p: [
          "A large proportion of retinoid failures are actually failures of the surrounding routine. Combining a new retinoid with exfoliating acids, scrubs, cleansing brushes or a strong vitamin C preparation produces cumulative irritation that neither product would cause alone.",
          "The sensible approach is to pause everything else while establishing tolerance. Cleanser, moisturiser, retinoid, sunscreen, and nothing else for several weeks. Once nightly use is comfortable, other products can be reintroduced individually if they are genuinely wanted, and many people find they are not.",
          "Sun protection becomes more important rather than less. Retinoids increase photosensitivity, and their principal benefit is to photoaged skin, which continued unprotected exposure will undo. Using a retinoid without daily sunscreen is working against yourself in both directions at once.",
        ],
      },
      {
        h: "Concentration, and why higher is not better",
        p: [
          "Products are marketed on concentration and the relationship between concentration and result is not linear. Studies comparing different strengths of tretinoin have generally found similar improvement in photoageing across a range of concentrations, with irritation rising substantially at the higher end.",
          "This means the highest concentration you can obtain is frequently the wrong choice, because it produces the irritation that causes people to stop. A lower concentration used consistently for two years outperforms a higher one used for three weeks, which is the same consistency argument that applies throughout skincare.",
          "Formulation matters as much as concentration and is harder to assess. Retinoids degrade in light and air, which is why packaging is a genuine consideration: opaque tubes and pumps preserve activity, while jars and clear containers do not. A well-formulated lower-strength product can outperform a poorly packaged stronger one.",
        ],
      },
      {
        h: "Who should not use them",
        p: [
          "There is one absolute contraindication that deserves prominence: retinoids are avoided in pregnancy and when trying to conceive. Oral retinoids are established teratogens, and while systemic absorption from topical application is low, the guidance across jurisdictions is consistently to avoid them, and it should be followed rather than reasoned around.",
          "Anyone with rosacea, eczema or a chronically compromised barrier should approach with care and preferably with clinical guidance, since these conditions involve barrier dysfunction that retinoids can worsen. That said, some retinoids are used therapeutically in rosacea under supervision, which is precisely why the supervision matters.",
          "Anyone using other topical treatments, particularly prescribed ones, should check for interactions before adding a retinoid. And anyone whose skin does not settle after two to three months of careful, low-frequency use has reasonable grounds to conclude it is not suitable, rather than continuing indefinitely in the belief that persistence is required.",
        ],
      },
      {
        h: "Setting expectations honestly",
        p: [
          "The evidence supports meaningful improvement in fine lines, skin texture, uneven pigmentation and acne. It does not support the elimination of deep wrinkles, significant lifting of sagging skin, or the reversal of structural changes that involve fat and bone rather than skin.",
          "The realistic timeline is twelve weeks before texture and tone changes become apparent, and six months to a year for effects on fine lines. Photographs taken at the start under consistent lighting are considerably more reliable than memory, which adapts to gradual change and will report no improvement even where there is some.",
          "Maintenance is indefinite. The improvements depend on continued use and regress when it stops, which makes this a long-term commitment rather than a course of treatment. That is worth knowing before starting, since it changes the calculation about which product and what frequency are sustainable. None of this is medical advice; anyone with a specific skin condition should consult a clinician, and prescription strengths in particular should be used under guidance.",
        ],
      },
      {
        h: "The purging question",
        p: [
          "A frequently discussed phenomenon is an initial worsening of breakouts after starting, commonly called purging. The proposed mechanism is plausible: accelerated turnover brings existing microcomedones to the surface faster than they would otherwise have emerged.",
          "The practical difficulty is distinguishing this from a genuine adverse reaction, and the useful signals are location and timing. Purging tends to occur where you normally break out, and to settle within six to eight weeks. New breakouts in areas that are usually clear, or a reaction persisting beyond a couple of months, is more likely to be irritation or a response to a specific ingredient.",
          "The evidence base here is thinner than the confidence with which the concept is discussed, and the concept can be used to explain away reactions that should prompt stopping. A reasonable approach is to allow up to eight weeks at a low frequency, and to treat anything beyond that as a signal rather than a stage.",
        ],
      },
      {
        h: "Where to obtain them",
        p: [
          "Availability varies considerably by country, and knowing what is accessible where you are saves a great deal of time. Retinol and retinaldehyde products are sold cosmetically almost everywhere. Adapalene is available without prescription in a number of countries, which makes it the most accessible route to a genuinely effective retinoid.",
          "Tretinoin is prescription-only in most jurisdictions, and obtaining it requires seeing a clinician, whether in person or through a legitimate remote service. This is not merely regulatory obstruction: the strength warrants an assessment, particularly for anyone with an underlying skin condition.",
          "The one route worth avoiding is unregulated online purchase of prescription-strength products from sources that do not require any assessment. Concentration cannot be verified, storage and age are unknown, and the absence of any clinical involvement removes the check that makes higher-strength use reasonable. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
    ],
  },
  {
    slug: 'moisturiser-how-it-works',
    sections: [
      {
        h: "What the skin barrier actually is",
        p: [
          "Understanding what a moisturiser is doing requires a rough picture of what it acts on. The outermost layer of skin consists of flattened dead cells embedded in a lipid matrix, an arrangement frequently compared to bricks and mortar. The cells are the bricks; ceramides, cholesterol and fatty acids are the mortar.",
          "This structure performs two jobs: keeping water in and keeping irritants and microbes out. When the lipid matrix is depleted — by harsh cleansing, cold dry air, over-exfoliation or certain skin conditions — water escapes faster and the surface becomes more permeable to things that irritate it.",
          "Every moisturiser addresses this in one or more of three ways, which is the reason the three-category framework exists rather than being an arbitrary classification. Knowing which category a product is weighted toward is more informative than any marketing description of what it does.",
        ],
      },
      {
        h: "Humectants and what they need to work",
        p: [
          "Humectants draw water toward the outer layer of skin. Glycerin is the most widely used and among the best evidenced; hyaluronic acid, urea, glycols and panthenol also fall into this group.",
          "The detail that gets omitted is where the water comes from. In humid conditions humectants draw moisture from the air; in dry conditions they draw it from deeper in the skin, which can leave the surface feeling drier than before if nothing prevents that water from evaporating.",
          "This is why a humectant-only product — most commonly a hyaluronic acid serum used alone — can make skin feel tighter in a dry climate or heated indoor environment. The fix is not to abandon it but to apply something over it that slows evaporation, which is what the third category does.",
        ],
      },
      {
        h: "Emollients and the feel of skin",
        p: [
          "Emollients fill the gaps between skin cells, smoothing the surface and improving how skin feels and looks. This group includes plant oils, squalane, fatty alcohols, esters and silicones such as dimethicone.",
          "Their contribution is partly cosmetic, in that much of the immediate improvement after applying a moisturiser is emollient effect, and partly structural, since several of them resemble the skin's own lipids closely enough to contribute to the matrix.",
          "The most useful members of this group for a compromised barrier are ceramides, cholesterol and fatty acids, because these are the actual components of the lipid matrix rather than substitutes for it. A moisturiser containing them is doing something more targeted than one relying on general oils, which is one of the few formulation distinctions with reasonable support behind it.",
        ],
      },
      {
        h: "Occlusives and where they belong",
        p: [
          "Occlusives form a physical layer that slows water loss from the surface. Petrolatum is the most effective of these by a considerable margin, followed by mineral oil, lanolin, waxes and dimethicone.",
          "Petrolatum in particular has an unusually strong evidence base for reducing water loss, and it is inexpensive and among the least allergenic ingredients in common use. Its reputation suffers from associations with the petroleum industry that have no bearing on the purified cosmetic grade, which has been used safely for well over a century.",
          "The practical application is layering: an occlusive applied over a humectant traps the water the humectant attracted, which is why the combination works better than either alone. For very dry skin, a thin layer of a heavy occlusive as the final evening step is one of the most effective and cheapest interventions available.",
        ],
      },
      {
        h: "Why price predicts so little",
        p: [
          "The active components of a moisturiser are commodity ingredients: glycerin, petrolatum, dimethicone, fatty alcohols, ceramides. None is expensive to produce, none is proprietary, and all appear in products across the full price range.",
          "What varies with price is the sensory experience, the packaging, the fragrance, the marketing and occasionally the inclusion of ingredients with limited evidence. A product costing many times another may feel considerably nicer and there is no reliable relationship between price and barrier function.",
          "The test that cuts through this is to read the first five or six ingredients, which by convention are listed in descending order of concentration. If a well-evidenced humectant, emollient and occlusive appear near the top, the product will work. If the recognisable ingredients are a botanical extract at the bottom of the list, the price is buying the story.",
        ],
      },
      {
        h: "Matching the product to the skin",
        p: [
          "Different skin types are best served by different weightings of the three categories, and this is where product selection actually matters. Oily skin generally does well with a humectant-heavy, low-occlusive formulation — a light gel or lotion — since the skin is producing its own occlusive layer.",
          "Dry skin benefits from all three, with meaningful emollient and occlusive content, in a cream or ointment base. Very dry or eczema-prone skin frequently does best with an ointment, which is unpleasant to use during the day and highly effective overnight.",
          "Combination skin does not require different products for different areas in most cases; a moderate lotion applied everywhere, with more on the drier areas, is usually sufficient. And skin that is oily and simultaneously flaky or tight is frequently a barrier problem rather than a type, which means the answer is a gentler routine rather than a different moisturiser.",
        ],
      },
      {
        h: "The hydrating and moisturising distinction",
        p: [
          "Marketing draws a distinction between hydrating and moisturising that has some basis and is usually overstated. Hydrating conventionally refers to water content, addressed by humectants; moisturising to preventing loss, addressed by occlusives and emollients.",
          "In practice almost every product contains elements of both, and the labels tell you very little about which predominates. The ingredient list does, which is why it remains the more useful thing to read.",
          "Where the distinction genuinely matters is in the failure mode described earlier: applying only a humectant in dry conditions and finding skin feels worse. Recognising that as a missing occlusive rather than a defective product saves a good deal of confusion, and the fix costs nothing beyond applying something over the top.",
        ],
      },
      {
        h: "Whether everyone needs one",
        p: [
          "It is worth saying that not everybody requires a separate moisturiser. Someone with balanced skin, using a gentle cleanser and a sunscreen with a moisturising base, may have adequate barrier function without adding anything.",
          "The indication is how skin feels an hour after cleansing. Comfortable and unremarkable suggests no need. Tight, rough or itchy suggests a moisturiser will help, and the drier the sensation the more emollient and occlusive content is likely to be useful.",
          "Seasonal variation is normal and worth accommodating: many people need considerably more in winter, when heated indoor air is dry, and little in summer. Changing product weight with the season is more sensible than using one formulation year-round and concluding it is either too heavy or insufficient. As with everything on this site, this is educational rather than medical advice, and persistent dryness that does not respond to a good moisturiser is worth having assessed.",
        ],
      },
      {
        h: "Applying it at the right moment",
        p: [
          "Timing has a modest but real effect. Applying moisturiser to skin that is still slightly damp, within a few minutes of washing, gives humectants water to work with and gives occlusives something to seal in.",
          "The effect is largest for very dry skin and for body application after bathing, where the difference between applying immediately and applying twenty minutes later is noticeable. For facial application the difference is smaller, and there is one important exception: retinoids and several other actives should go onto completely dry skin, because dampness increases penetration and irritation.",
          "The general rule is therefore moisturiser onto damp skin, actives onto dry skin. Where both are used in the same routine, applying the active first to dry skin and the moisturiser afterwards handles both requirements without any waiting around.",
        ],
      },
      {
        h: "The ingredients that add little",
        p: [
          "A moisturiser needs a humectant, an emollient and usually an occlusive. Everything beyond that is optional, and several common additions do more harm than good for a product used twice daily on a large area.",
          "Fragrance, whether synthetic or from essential oils, is among the most frequent causes of contact allergy in cosmetics and contributes nothing to barrier function. Essential oils marketed as natural are not gentler; several are among the more common sensitisers. For anyone with sensitive or reactive skin, a fragrance-free product removes a meaningful proportion of the risk.",
          "Botanical extracts present in trace amounts at the end of an ingredient list are there for the label rather than for any effect. Denatured alcohol high in a list can be drying in a leave-on product, though it is not a problem in every context. None of these makes a product unusable; they simply mean the price is buying things that are not doing the work.",
        ],
      },
    ],
  },
  {
    slug: 'understanding-acne',
    sections: [
      {
        h: "The four things happening in a pore",
        p: [
          "Acne is the result of four processes occurring together in a hair follicle, and understanding them explains why different treatments work and why combining them works better than any one alone.",
          "The first is excess sebum production, driven largely by androgen hormones. The second is abnormal shedding of the cells lining the follicle, which fail to slough off and instead accumulate. The third is proliferation of Cutibacterium acnes, a bacterium that is a normal resident of skin and multiplies in the resulting oily, blocked environment. The fourth is inflammation, which produces the redness, swelling and pain.",
          "Each treatment targets one or more of these. Retinoids address the abnormal shedding. Benzoyl peroxide addresses the bacteria. Hormonal treatments address sebum production. Anti-inflammatories address the fourth. This is why dermatologists frequently combine agents rather than escalating a single one.",
        ],
      },
      {
        h: "What does not cause it",
        p: [
          "Several persistent beliefs cause real harm by directing effort at things that do not help and by attaching blame where none belongs. Acne is not caused by poor hygiene. The blockage occurs below the surface, and washing more frequently or more vigorously irritates the skin without reaching it.",
          "Chocolate has no established causal role. The dietary evidence that does exist points elsewhere and is more modest than headlines suggest: some association with high-glycaemic-load diets and, in some studies, with skimmed milk consumption. These are associations in populations, the effect sizes are moderate, and dietary change is not a substitute for treatment.",
          "It is also not a condition of adolescence alone. Adult acne is common, particularly in women, frequently presents differently — around the jaw and chin rather than the forehead — and is not a failure to outgrow something. Framing it as such delays treatment in a group that responds well to it.",
        ],
      },
      {
        h: "The ingredients with real evidence",
        p: [
          "Four ingredients available without prescription have reasonable support. Benzoyl peroxide reduces bacterial numbers and, importantly, does not generate resistance, which makes it valuable alongside antibiotics. Lower concentrations are roughly as effective as higher ones and considerably less irritating, which is worth knowing before buying the strongest available.",
          "Salicylic acid is oil-soluble and penetrates into the follicle, which is what distinguishes it from other exfoliating acids for this purpose. Adapalene, a retinoid, normalises the follicular lining and is available over the counter in many countries. Azelaic acid has antibacterial and anti-inflammatory effects and is well tolerated, including in pregnancy where retinoids are not.",
          "What these have in common is a defined mechanism and clinical trial evidence. That is a short list, and products marketed for acne containing none of them are relying on the general appeal of clear skin rather than on anything specific.",
        ],
      },
      {
        h: "The timeline nobody warns about",
        p: [
          "A follicle takes roughly eight weeks to progress from initial blockage to a visible lesion. This single fact explains most of the frustration people experience with acne treatment.",
          "It means a treatment started today is acting on blockages that will surface in two months, while lesions appearing this week were determined before treatment began. Judging a product after two weeks is judging it on a period during which it could not have had any effect on what is visible.",
          "Twelve weeks is the minimum fair trial for any acne treatment, and it is worth knowing that before starting, since the alternative is a cycle of abandoning products at six weeks and concluding nothing works. Photographs at the start, under consistent lighting, are far more reliable than memory over that period.",
        ],
      },
      {
        h: "Not making it worse",
        p: [
          "Two behaviours reliably worsen outcomes and both are extremely common. Picking and squeezing pushes material deeper into the dermis, extends the inflammation and substantially increases the probability of a permanent scar or persistent pigmentation. The temporary improvement in appearance is bought at a lasting cost.",
          "Over-treating is the other. The instinct is to attack oily, congested skin with strong cleansers, scrubs and multiple actives simultaneously, and the result is a damaged barrier on top of the acne. Skin that is inflamed and stripped heals more slowly and tolerates the treatments that would help less well.",
          "The general principle is that acne treatment works by prevention rather than by attack. The products are preventing tomorrow's blockages, not eliminating today's lesions, which means gentleness elsewhere in the routine is not a compromise but a precondition for the treatment working.",
        ],
      },
      {
        h: "Marks left behind",
        p: [
          "Two distinct things get called scarring and they have different prognoses. Post-inflammatory hyperpigmentation or erythema — flat brown or red marks where a lesion was — is not scarring. It is pigment or vascular change that fades over months, faster with sun protection and with ingredients such as azelaic acid, niacinamide or retinoids.",
          "True scarring involves a change in the skin's texture: indentations, raised areas, or the pitted patterns that follow deeper inflammation. This does not resolve on its own and requires procedural treatment, which is effective but is a different order of intervention.",
          "The relevant implication is preventive. Since textural scarring follows severe or prolonged inflammation, treating acne promptly and effectively is the most reliable way to avoid it. This is one of the strongest arguments for seeing a clinician early rather than working through shelf products for two years.",
        ],
      },
      {
        h: "When to stop self-treating",
        p: [
          "There are reasonably clear indications for seeking clinical help rather than continuing with over-the-counter products. Nodular or cystic lesions — deep, painful lumps rather than surface spots — respond poorly to topical treatment and carry the highest scarring risk.",
          "Any acne that is already leaving textural marks, any that has not improved after three months of consistent appropriate treatment, and any that is causing significant distress all warrant an appointment. That last criterion is legitimate and frequently discounted: the psychological effect of acne is well documented and is a sufficient reason on its own.",
          "Sudden onset of severe acne in an adult, particularly with other symptoms such as irregular periods or excess hair growth, warrants investigation for an underlying cause. Prescription options — topical and oral combinations, hormonal treatments, and isotretinoin for severe cases — are substantially more effective than anything available otherwise, and the delay in accessing them is frequently the most consequential part of someone's experience of this condition. None of this is medical advice.",
        ],
      },
      {
        h: "The routine that supports the treatment",
        p: [
          "Because the active treatment is doing the work, everything else in the routine should be chosen to avoid interfering with it. That means a gentle non-foaming or mildly foaming cleanser used twice daily at most, and no scrubs, brushes or physical exfoliants.",
          "Moisturiser is not optional despite the skin being oily, because every effective acne treatment is drying and a compromised barrier reduces tolerance for the treatment. A light gel or lotion weighted toward humectants, labelled non-comedogenic, is the usual choice.",
          "Sunscreen matters for two specific reasons here rather than only the general one. Several acne treatments increase photosensitivity, and ultraviolet exposure darkens post-inflammatory pigmentation, which prolongs the marks left after lesions clear. A light fluid or gel formulation avoids the heaviness that puts people off.",
        ],
      },
      {
        h: "Things that look like acne and are not",
        p: [
          "Several conditions are commonly mistaken for acne and respond to entirely different treatment, which is one reason a persistent problem is worth having assessed rather than treated indefinitely from a shelf.",
          "Rosacea produces papules and pustules on a background of persistent redness and flushing, usually without comedones, and typically worsens with the strong treatments that help acne. Fungal folliculitis produces uniform itchy bumps, often on the chest and back, and responds to antifungal rather than antibacterial treatment. Perioral dermatitis produces small bumps around the mouth and nose and is frequently made worse by topical steroids.",
          "The distinguishing features are subtle enough that misidentification is common, including by people who have been treating what they assumed was acne for years. A condition that has not responded to appropriate acne treatment after a fair trial is a reasonable prompt to consider whether it is acne at all.",
        ],
      },
      {
        h: "Living with it while it clears",
        p: [
          "Twelve weeks is a long time to wait for improvement, and the period in between is worth addressing directly rather than treating as a gap. A few things genuinely help without interfering with treatment.",
          "Hydrocolloid patches applied over an individual lesion protect it, absorb fluid and, more usefully, physically prevent picking. Non-comedogenic makeup does not worsen acne and there is no clinical reason to go without it; the idea that skin needs to breathe has no basis in how skin obtains oxygen.",
          "The psychological dimension deserves acknowledgement rather than a brisk suggestion to be patient. The association between acne and low mood is well documented across studies, the effect is not proportional to clinical severity, and it is a legitimate reason to seek treatment sooner rather than to wait and see. Nobody needs to justify wanting this dealt with. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
    ],
  },
  {
    slug: 'niacinamide-vitamin-c',
    sections: [
      {
        h: "What niacinamide has evidence for",
        p: [
          "Niacinamide, a form of vitamin B3, is unusual in having several distinct effects supported by published trials rather than one heavily marketed claim. The best supported are improvement in barrier function, through increased ceramide production, and reduction in transepidermal water loss.",
          "Beyond that, studies have found reductions in the appearance of hyperpigmentation, apparently by interfering with the transfer of pigment from melanocytes to surrounding cells, and anti-inflammatory effects relevant to acne and rosacea. Some evidence supports a reduction in sebum production and in the visible size of pores, though these findings are less consistent.",
          "The concentrations used in this research typically sit in the range of two to five percent. Products marketed at ten percent and above are not better supported and are associated with more reports of irritation and flushing, which is an unusual case of higher concentration being a marketing decision rather than a clinical one.",
        ],
      },
      {
        h: "Why it is a reasonable default",
        p: [
          "Among ingredients with genuine evidence, niacinamide is notable for how well tolerated it is. It does not require an adjustment period, does not increase photosensitivity, is stable in formulation, and is generally suitable during pregnancy, which excludes several alternatives.",
          "That combination makes it one of the few actives that can reasonably be added without the careful introduction protocol that retinoids and acids require. It also combines with most other ingredients without conflict, including the long-standing claim that it cannot be used with vitamin C, which is discussed below.",
          "The realistic assessment is that it is a good all-rounder rather than a transformative single agent. It does several things modestly rather than one thing dramatically, and for someone wanting to add one gentle active to a minimal routine it is a defensible choice with a low probability of causing problems.",
        ],
      },
      {
        h: "Vitamin C, and the stability problem",
        p: [
          "L-ascorbic acid is the form with the strongest evidence, and it is also chemically unstable. It oxidises on exposure to light, air and heat, and the oxidised product is both inactive and capable of causing irritation. A vitamin C serum that has turned yellow or brown has degraded.",
          "This makes formulation and packaging unusually important. Effective preparations are typically at a low pH, which is necessary for penetration and contributes to irritation, and are packaged in opaque containers with minimal air exposure. Products in clear droppers left on a sunny shelf are unlikely to be delivering what the label claims.",
          "More stable derivatives exist — magnesium ascorbyl phosphate, sodium ascorbyl phosphate, ascorbyl glucoside, tetrahexyldecyl ascorbate — and they trade some evidence base for practicality. The research on these is thinner than for L-ascorbic acid, and for anyone who has found the pure form irritating or has repeatedly watched bottles oxidise, they are a reasonable compromise.",
        ],
      },
      {
        h: "What vitamin C actually does",
        p: [
          "Two effects are reasonably well supported. It functions as an antioxidant, neutralising free radicals generated by ultraviolet exposure and pollution, which is why it is frequently recommended as a morning product used under sunscreen rather than as a replacement for it.",
          "It is also a required cofactor in collagen synthesis, which is the mechanistic basis for claims about firmness and fine lines. And it interferes with an enzyme involved in melanin production, which supports the use in hyperpigmentation, though the effect is modest compared with prescription options.",
          "What it does not do is provide sun protection. The antioxidant action complements sunscreen by addressing damage that gets through, and it filters nothing. A product marketed as making sunscreen unnecessary is making a claim that no antioxidant supports.",
        ],
      },
      {
        h: "The combination question",
        p: [
          "A widely repeated claim holds that niacinamide and vitamin C should not be used together, on the basis that they react to form nicotinic acid, causing flushing. The origin of this is research from the mid-twentieth century conducted at high temperatures with pure compounds.",
          "Subsequent work has not supported it as a practical concern. The reaction requires conditions that do not occur in formulated products at room temperature, and numerous commercial products contain both without issue. Studies applying them together have not found the predicted problem.",
          "The honest position is that the two can be used together and that some people do experience flushing from niacinamide alone, particularly at higher concentrations. If flushing occurs, the sensible response is to reduce the niacinamide concentration or separate the products by time of day, rather than to accept a chemistry claim that the evidence does not support.",
        ],
      },
      {
        h: "Setting expectations for both",
        p: [
          "Neither of these is in the same category as a retinoid or a prescription treatment, and the marketing frequently implies otherwise. The effects documented in trials are real and modest: improvements in evenness, texture and barrier function measured over weeks to months.",
          "For pigmentation in particular, the honest comparison is unflattering. Vitamin C and niacinamide produce gradual, partial improvement; prescription options such as hydroquinone or tretinoin, or procedural treatments, produce considerably more. Someone with significant melasma or post-inflammatory pigmentation who relies on a serum will likely be disappointed after six months.",
          "Where they earn their place is as gentle additions to a routine that already covers the fundamentals, for someone wanting incremental improvement without the adjustment period stronger ingredients require. That is a legitimate objective and it is a smaller one than the packaging suggests. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "Fitting them into a routine",
        p: [
          "Vitamin C is conventionally a morning product, on the reasoning that its antioxidant function is most useful during the day when ultraviolet exposure generates the free radicals it neutralises. Applied to clean dry skin before moisturiser and sunscreen is the standard sequence.",
          "Niacinamide is indifferent to time of day and combines with almost anything, which makes it the easier of the two to place. Many people get it incidentally through a moisturiser or sunscreen that already contains it, which is worth checking before buying a separate serum.",
          "Where both a vitamin C and a retinoid are wanted, separating them — vitamin C in the morning, retinoid at night — avoids stacking two potentially irritating products and suits the natural timing of each. This is one of the few sequencing recommendations in skincare with a defensible reason behind it rather than a stylistic one.",
        ],
      },
      {
        h: "How to tell whether a product has gone off",
        p: [
          "Because vitamin C degrades visibly, it is one of the few skincare products where you can assess condition by looking. A fresh preparation is typically clear or very pale; progressive yellowing indicates oxidation, and a deep orange or brown colour means the active content is largely gone.",
          "Oxidised product is not merely inactive. There is some evidence that the oxidation products can generate free radicals rather than neutralise them, which makes continuing to use a browned serum potentially counterproductive rather than merely wasteful.",
          "The practical measures are to buy small sizes rather than large ones, store the bottle away from light and heat, close it promptly, and accept that a few months is a realistic working life once opened. Niacinamide has none of these problems, being stable and colourless throughout, which is another point in favour of it as the easier of the two to live with.",
        ],
      },
      {
        h: "Whether either is worth buying at all",
        p: [
          "It is worth asking the question directly, since neither is essential. Somebody with a working three-step routine and no specific concern is not missing anything important by owning neither, and the money is better spent on a sunscreen they will actually use daily.",
          "The circumstances where they earn their cost are reasonably specific. Niacinamide suits someone with a compromised barrier, mild redness, or oily skin who wants a gentle addition that will not require an adjustment period. Vitamin C suits someone with uneven tone or early photoageing who is already using sunscreen consistently and wants an antioxidant layer underneath it.",
          "Outside those cases, the honest answer is that they are pleasant optional extras with modest measured effects, sold with an enthusiasm that exceeds the evidence. That is not a criticism of the ingredients, which are among the better-supported things on a shelf; it is a comment on where they sit relative to the three steps that do most of the work.",
        ],
      },
      {
        h: "Judging whether it is working",
        p: [
          "Both of these produce gradual change, which is the hardest kind to assess because perception adapts to it. Someone using a product daily will not notice a slow improvement in evenness of tone, and will frequently conclude it did nothing.",
          "The only reliable method is photographic. A picture at the start, in consistent light, without makeup, from the same angle, compared against one taken twelve weeks later. This costs nothing and it is the difference between an assessment and a guess.",
          "The second half is patience about the interval. Twelve weeks is the minimum for either ingredient, and pigmentation changes in particular are measured over months. Abandoning at four weeks, which is common, means never having tested the product at all — and it is worth deciding the review date in advance so the decision is not made on a random morning when the skin happens to look bad.",
        ],
      },
    ],
  },
  {
    slug: 'skin-barrier-explained',
    sections: [
      {
        h: "The bricks and mortar picture",
        p: [
          "The outermost layer of skin, the stratum corneum, consists of flattened dead cells held together by a matrix of lipids. The standard analogy is bricks and mortar: the cells are the bricks and the lipid matrix, made of ceramides, cholesterol and free fatty acids in roughly balanced proportions, is the mortar.",
          "The mortar does most of the barrier work. It is what prevents water escaping outward and what prevents irritants, allergens and microbes moving inward. When it is depleted, both functions degrade simultaneously, which is why barrier damage produces dryness and sensitivity at the same time rather than one or the other.",
          "There is also an acid mantle: the surface sits at a mildly acidic pH, which supports the enzymes that maintain the lipid matrix and discourages the growth of certain organisms. Products that raise surface pH substantially, which includes traditional soap, disrupt this and take hours to recover from.",
        ],
      },
      {
        h: "Recognising the damage",
        p: [
          "The presentation is consistent enough to be recognisable. Skin feels tight, particularly after washing. Products that were previously fine begin to sting or burn on application, which is frequently the first symptom people notice. There is visible redness, sometimes diffuse and sometimes patchy.",
          "Texture changes: rough or flaky areas appear, and the skin can be simultaneously oily and flaking, which confuses people into treating it as oily skin and making it worse. Sensitivity to temperature, wind and water increases. Existing conditions such as acne or eczema frequently flare.",
          "The pattern that distinguishes this from a simple product reaction is that it develops gradually and affects the response to everything rather than to one item. Someone whose entire routine has become uncomfortable over several weeks is almost certainly dealing with a barrier problem rather than an allergy to a specific product.",
        ],
      },
      {
        h: "How people do it to themselves",
        p: [
          "Almost all barrier damage in otherwise healthy skin is self-inflicted through good intentions. Cleansing too often, or with a foaming product that strips lipids, is the most common single cause. Hot water accelerates it.",
          "Exfoliation is the second: acids used daily, scrubs, cleansing brushes, or several exfoliating products used without realising they overlap. Many cleansers, toners and serums contain acids, and a routine can easily include four exfoliating steps without anyone intending it.",
          "The third is layering multiple actives — a retinoid, an acid, a vitamin C and a benzoyl peroxide — on the theory that each addresses a different concern. Individually each may be tolerable; together they exceed what the barrier can repair between applications. The fourth, less discussed, is environmental: low humidity, heated indoor air, air travel and cold wind all deplete surface lipids without any product being involved.",
        ],
      },
      {
        h: "The repair protocol",
        p: [
          "Repair is entirely a matter of subtraction followed by support, and it is more reliable than most things in skincare. Stop every active ingredient and every exfoliant. Stop any device. Reduce to one gentle cleanse daily, with lukewarm water, and a bland moisturiser applied as often as the skin wants it.",
          "The moisturiser choice matters here more than usual. Products containing ceramides, cholesterol and fatty acids are supplying the actual components of the depleted matrix, and there is reasonable evidence that formulations with these in roughly physiological proportions perform better than general emollients. A layer of petrolatum over the top at night reduces water loss substantially.",
          "Continue sunscreen, since compromised skin is more vulnerable to ultraviolet damage rather than less, and choose a mineral or fragrance-free formulation if the usual one stings. Everything else stays out until the skin is comfortable again.",
        ],
      },
      {
        h: "How long it takes",
        p: [
          "The stratum corneum renews over roughly four weeks in a healthy adult, and that sets the timescale for recovery. Most people notice meaningful improvement within one to two weeks on a simplified routine, with full comfort returning over four to six.",
          "The mistake at this stage is reintroducing actives as soon as the skin feels better, which frequently returns it to the same state within a fortnight. The barrier being comfortable is not the same as it being restored, and giving it an additional couple of weeks before reintroduction improves the odds considerably.",
          "Reintroduction should then be one product at a time, at half the previous frequency, held there for several weeks before increasing. Someone who was using a retinoid nightly and damaged their barrier should return at twice weekly, not nightly, and may find that twice or three times weekly was always the right frequency for them.",
        ],
      },
      {
        h: "When it is not just over-treatment",
        p: [
          "Barrier dysfunction is a feature of several skin conditions rather than only a consequence of behaviour, and persistent problems that do not resolve on a simplified routine warrant assessment rather than further product changes.",
          "Atopic dermatitis involves a genetically determined barrier defect, frequently related to filaggrin, which is why it recurs regardless of how careful the routine is. Rosacea involves barrier dysfunction alongside vascular and inflammatory components. Seborrhoeic dermatitis, psoriasis and contact allergy all present with overlapping features.",
          "The distinguishing signal is failure to improve. Damage caused by over-treatment resolves reliably within a month of stopping the cause. Anything that persists, recurs without an obvious trigger, or involves significant itching, oozing or well-defined patches is a different problem and benefits from a diagnosis rather than another moisturiser.",
        ],
      },
      {
        h: "Keeping it intact afterwards",
        p: [
          "Prevention is mostly a matter of restraint, and the specific measures are few. Cleanse once daily rather than twice unless there is a reason. Use lukewarm water. Choose a gentle cleanser and judge it by whether skin feels comfortable rather than clean afterwards.",
          "Limit exfoliation to once or twice weekly at most, and audit the whole routine for overlapping acids rather than counting only the product labelled as an exfoliant. Introduce actives one at a time and hold at a frequency the skin tolerates rather than pushing toward daily use as a target.",
          "Adjust seasonally, since the same routine that suits humid summer air will be too stripping in a heated flat in winter. And treat any stinging on application as information rather than as a sign that something is working, because that particular misreading is responsible for a great deal of the damage this article describes. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "The barrier elsewhere on the body",
        p: [
          "Almost all discussion of this concerns the face, and the same mechanism operates everywhere with different vulnerabilities. Hands are the most exposed site, subject to frequent washing, detergents and temperature change, and hand dermatitis from over-washing is common in several occupations.",
          "The lower legs are the site most affected by age, since sebaceous gland activity declines and the skin there has less to begin with. Winter itching on the shins is barrier dysfunction rather than a hygiene issue, and it responds to the same approach: reduce washing temperature and frequency, and apply an emollient immediately after bathing while the skin is still damp.",
          "The general principle transfers unchanged. Long hot showers, foaming products and vigorous towelling deplete lipids everywhere, and the correction is gentler washing plus prompt emollient application. Body skin also tolerates heavier occlusives than the face, which makes the repair straightforward once the cause is removed.",
        ],
      },
      {
        h: "Why stinging feels like efficacy",
        p: [
          "One belief does more damage than any other in this area, which is the assumption that a sensation indicates activity. It is worth addressing directly because it is what converts a mild problem into a severe one.",
          "Some effective ingredients do produce sensation, which gives the belief a foothold. But sensation is not the mechanism of any of them, and plenty of the best-evidenced ingredients — niacinamide, ceramides, most moisturising agents, most sunscreen filters — produce none at all. A product that stings on skin that previously tolerated it is reporting damage, not progress.",
          "The corrected rule is simple: mild transient tingling on first use of an acid or a retinoid is common and settles. Stinging that is new, that occurs with products previously fine, or that persists rather than fading, means stop. Applying that one rule prevents most of the barrier damage described throughout this article.",
        ],
      },
      {
        h: "A four-week reset anyone can run",
        p: [
          "For anyone unsure whether their skin problems are barrier-related, there is a diagnostic worth running because it costs nothing and answers the question definitively. Reduce to three products for four weeks: a gentle cleanser, a bland moisturiser, and sunscreen. Nothing else.",
          "If the skin improves substantially over that period, the problem was the routine, and the useful information is not only that but which products caused it — established by reintroducing them singly afterwards. If it does not improve, the problem is something else and the four weeks have ruled out the most common explanation, which is genuinely useful before seeing a clinician.",
          "Either outcome is informative, which is unusual for a skincare experiment. Most product trials produce ambiguous results because too many variables move at once; this one moves everything in the same direction and reads clearly. It is the single most useful thing available to anyone whose skin has become unpredictable.",
        ],
      },
    ],
  },
  {
    slug: 'skincare-myths',
    sections: [
      {
        h: "Pores have no muscles",
        p: [
          "The belief that pores open with heat and close with cold underlies a great deal of advice about steaming, hot cloths and cold rinses. A pore is the opening of a hair follicle. It has no muscle around it and no mechanism for changing its diameter in response to temperature.",
          "What actually varies is the appearance, and the variables are real ones. A follicle containing accumulated sebum and dead cells looks larger; clearing it makes it look smaller. Loss of collagen around the opening with age makes pores appear more prominent. Warmth softens the contents, which is why extraction is easier after a shower, and cold produces temporary local vasoconstriction that slightly changes surface appearance for a few minutes.",
          "The practical consequence is that pore size is largely genetic and can be influenced modestly by keeping follicles clear — retinoids, salicylic acid and niacinamide all have some evidence — and not at all by temperature. Products promising to close pores are describing something that cannot happen.",
        ],
      },
      {
        h: "Natural does not mean gentle",
        p: [
          "The word natural has no regulatory definition in most jurisdictions and carries no information about safety. Plant extracts are complex mixtures of dozens of compounds, several of which are among the most frequent causes of contact allergy recorded in patch testing clinics.",
          "Essential oils are a specific problem in leave-on products. Fragrance components from botanical sources appear consistently among the top allergens in dermatological testing, and a product scented with lavender or citrus oil is more likely to cause a reaction than one scented synthetically or, better, not at all.",
          "The reverse assumption is equally unfounded. Ingredients that sound synthetic — petrolatum, dimethicone, glycerin, most sunscreen filters — include some of the best tolerated substances in cosmetic use. The origin of a molecule tells you nothing about how skin will respond to it, and the industry has monetised the intuition that it does.",
        ],
      },
      {
        h: "Skin does not need to breathe",
        p: [
          "The idea that skin needs to breathe, and therefore that makeup or occlusive products must be avoided periodically, is based on a misunderstanding of physiology. Skin receives its oxygen through the bloodstream, not from the atmosphere.",
          "This means occlusive products do not suffocate anything. Petrolatum, which forms one of the most effective barriers available, has been used on damaged and healing skin for well over a century precisely because it works. The concept of letting skin breathe by going without products has no mechanism behind it.",
          "There is a real observation underneath the myth, which is that some products cause congestion in some people. That is a formulation issue relating to specific ingredients rather than to occlusion in general, and the answer is a different product rather than a period without any. Someone whose skin improves during a break from makeup is reacting to something in it, which is worth identifying.",
        ],
      },
      {
        h: "Oily skin still needs moisturiser",
        p: [
          "A persistent belief holds that oily skin should not be moisturised, and that withholding moisture will reduce oil production. There is no evidence for a feedback mechanism of this kind, and the practice reliably makes things worse.",
          "Sebum production is driven principally by androgens and is not regulated by the hydration state of the stratum corneum. Stripping the skin and withholding moisturiser damages the barrier, which produces flaking, irritation and frequently more breakouts, on top of the original oiliness.",
          "The appropriate response to oily skin is a light, humectant-weighted moisturiser rather than none. The formulation should be adjusted; the step should not be removed. This is one of the more consequential myths on the list because it directly worsens the condition it claims to treat.",
        ],
      },
      {
        h: "Chemical does not mean harmful",
        p: [
          "The distinction between chemical and natural is scientifically meaningless — everything is a chemical, including water — and yet it structures an enormous amount of marketing. The framing survives because it is useful commercially rather than because it describes anything.",
          "Specific instances are worth addressing. Sunscreen filters described as chemical have been assessed by regulators across multiple jurisdictions and remain approved; the debate about systemic absorption of certain filters concerns pharmacokinetics rather than demonstrated harm, and the alternative of not using sunscreen carries a well-established risk. Preservatives prevent microbial growth in products that would otherwise become genuinely dangerous.",
          "The reasonable position is that individual ingredients deserve individual assessment on evidence, and that categorical claims about chemicals tell you about the marketing rather than about the product. Someone with a specific concern about a specific ingredient can look it up; someone avoiding a whole category on principle is filtering by vocabulary.",
        ],
      },
      {
        h: "Expensive does not predict effective",
        p: [
          "The active ingredients with the strongest evidence — retinoids, benzoyl peroxide, salicylic acid, azelaic acid, niacinamide, glycerin, petrolatum, ceramides, standard sunscreen filters — are all off-patent commodity substances available at low cost.",
          "What price buys is texture, packaging, fragrance, marketing and occasionally a proprietary complex with no independent evidence behind it. None of these is fraudulent and none of them changes what happens to the skin. Pharmacy brands routinely contain the same actives at the same concentrations as products costing many times more.",
          "There is one legitimate exception: a product that feels pleasant gets used daily and one that does not gets abandoned, so paying more for a sunscreen you will actually apply is a rational purchase. That is a preference decision, and it is quite different from the assumption that a higher price indicates a more effective formula. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "Drinking more water will not fix dry skin",
        p: [
          "The claim that increased water intake improves skin hydration is repeated constantly and the evidence for it is weak. In someone who is adequately hydrated, drinking more does not increase the water content of the stratum corneum in any measurable way, because the body regulates fluid balance and excretes the surplus.",
          "Severe dehydration does affect skin, and that is a clinical state rather than the ordinary condition of someone who could drink a bit more. For anyone in normal health, the water content of the outer skin layer is determined by the barrier's ability to retain it, not by intake.",
          "The intervention that does work is topical: humectants to attract water and occlusives to prevent its escape, as described in the moisturiser article on this site. Adequate hydration is worth having for many reasons and it is not a skincare treatment, and treating it as one delays the thing that would actually help.",
        ],
      },
      {
        h: "Detoxing and purging",
        p: [
          "The idea that skin eliminates toxins, and that a period of worsening indicates the process working, has no physiological basis. Detoxification is performed by the liver and kidneys. Skin excretes water, salts and small amounts of urea through sweat, and that is not detoxification in any meaningful sense.",
          "The related purging concept has a narrow legitimate version and a broad illegitimate one. Retinoids and other agents that accelerate follicular turnover can plausibly bring existing blockages to the surface faster, and the legitimate version is limited to those ingredients and to a period of weeks.",
          "The illegitimate version applies the term to any worsening on any product, which turns a warning sign into a reason to persist. A moisturiser does not cause purging. A cleanser does not cause purging. If a product without an accelerating mechanism makes skin worse, that is a reaction, and the appropriate response is to stop.",
        ],
      },
      {
        h: "Why these particular beliefs survive",
        p: [
          "It is worth asking why myths in this field persist so robustly, because the reasons explain how to evaluate the next one. Skin conditions fluctuate naturally, which means anything tried during a bad period will appear to help as the fluctuation reverses, regardless of whether it did anything.",
          "The timescales also work against evidence. Genuine change takes twelve weeks or more, over which many things vary, and nobody runs a controlled comparison on their own face. Attribution under those conditions is unreliable in a specific direction: toward whatever was tried most recently.",
          "And there is a commercial layer on top, in which a belief that supports a purchase is repeated by everyone who benefits from it. The useful defence is not scepticism about everything but a small number of questions: is there a proposed mechanism, is there evidence beyond testimonial, and does the claim require the product to do something skin is not capable of doing. Most of the myths on this list fail the third question immediately.",
        ],
      },
      {
        h: "Reading a claim on a package",
        p: [
          "Cosmetic claims are regulated in most jurisdictions, and the regulation constrains what can be said rather than requiring that anything works. This produces a recognisable vocabulary that is worth being able to parse.",
          "Phrases such as reduces the appearance of, helps to, visibly improves and clinically proven to improve the look of are all constructed to describe an effect on appearance rather than on structure, because a structural claim would make the product a medicine and trigger a different regulatory regime. They are not lies; they are precise statements that most readers parse as stronger than they are.",
          "Clinically proven similarly does not indicate a randomised controlled trial. It frequently refers to a manufacturer study on a small number of participants using self-reported outcomes, with no control group. Neither of these means a product is ineffective — it may contain a well-evidenced active — and both mean the phrasing on the box is not where the information lives. The ingredient list is. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
    ],
  },
  {
    slug: 'dry-skin-vs-dehydrated',
    sections: [
      {
        h: "Two different deficits",
        p: [
          "The distinction rests on which component is missing. Dry skin lacks lipids: sebaceous gland output is low, either constitutionally, because of age, or because of a condition such as eczema. It is a skin type, it tends to be lifelong, and it affects the whole face and frequently the body.",
          "Dehydrated skin lacks water in the stratum corneum. It is a condition rather than a type, it can occur in any skin including oily skin, and it is usually temporary and caused by something identifiable: over-cleansing, a harsh product, low humidity, air travel, illness or a recent change in routine.",
          "The reason this matters commercially is that the products differ. Dry skin needs lipids replaced — emollients and occlusives. Dehydrated skin needs water attracted and retained — humectants with something over the top. Buying a rich oil-based cream for dehydrated oily skin feels wrong and does not address the deficit, which is how people end up with a drawer of products that all disappointed.",
        ],
      },
      {
        h: "Telling them apart",
        p: [
          "A few observations separate them reliably. Dry skin looks and feels rough or flaky most of the time, in all conditions, and has done for years. It rarely produces visible shine anywhere. Dehydrated skin can look dull and feel tight while still producing oil, and the combination of an oily surface with tightness underneath is close to diagnostic.",
          "Timing is the second signal. Dryness is stable; dehydration appeared. Someone whose skin was fine in June and uncomfortable in January is dehydrated, not dry, and the cause is likely the heating. Someone whose skin has been rough since childhood has a type.",
          "Fine lines that appear suddenly and look more like creasing than like structural lines are typical of dehydration, because reduced water content in the outer layer makes the surface less plump. These resolve within days of correcting the hydration, which is another useful distinguishing test.",
        ],
      },
      {
        h: "Both at once",
        p: [
          "The categories are not exclusive, and a substantial number of people are both: constitutionally dry skin that has also become dehydrated through a harsh winter or an over-enthusiastic routine. This is the most uncomfortable combination and it is common.",
          "In that situation both deficits need addressing, which means a humectant to bring water in and a meaningful emollient and occlusive layer over it. The ordering matters here more than usual: humectant onto damp skin, then the richer product over the top to hold it.",
          "It is worth resolving the dehydration first, since it is the reversible component and it may be responsible for most of the discomfort. If skin remains rough and flaky once hydration is restored, the underlying dryness is the residual problem and can be treated on its own terms.",
        ],
      },
      {
        h: "Treating dry skin",
        p: [
          "Dry skin is a lipid problem and the treatment is lipid replacement, applied consistently rather than intensively. Products containing ceramides, cholesterol and fatty acids supply the actual components of the barrier matrix. Heavier emollients and occlusives — shea butter, squalane, petrolatum — reduce the water loss that low lipid content permits.",
          "Cleansing is where most improvement is available. A foaming cleanser removes lipids that dry skin cannot spare, and switching to a cream or oil cleanser used once daily frequently produces more improvement than any moisturiser change. Hot water has the same effect and is easier to fix.",
          "Environmental measures matter for a type that cannot be cured. A humidifier in heated rooms, shorter and cooler showers, and applying emollient within three minutes of washing while the skin is still damp all help. Dry skin is managed rather than resolved, and the management is consistent and unglamorous.",
        ],
      },
      {
        h: "Treating dehydration",
        p: [
          "Dehydration usually has a cause, and identifying it produces faster results than any product. The most frequent are over-cleansing, a recently introduced active, an exfoliant used too often, and a change in environment such as the heating coming on or a period of travel.",
          "Removing the cause resolves a substantial proportion of cases within a week or two. Where support is wanted, a humectant serum containing glycerin or hyaluronic acid, applied to damp skin and sealed with a moisturiser, addresses the deficit directly. The sealing step is not optional in dry air, for the reason set out in the moisturiser article on this site.",
          "Oily skin that is dehydrated needs a light formulation rather than none. A gel moisturiser weighted toward humectants with a small amount of occlusive is usually sufficient, and the instinct to skip moisturiser because the skin is oily is precisely what caused the problem in a large proportion of cases.",
        ],
      },
      {
        h: "Why the wrong diagnosis persists",
        p: [
          "The reason people stay stuck is that both conditions produce the same subjective report — my skin feels dry — and the retail response to that report is a rich cream. For genuine dryness that is correct. For dehydrated oily skin it is uncomfortable, causes congestion, and gets abandoned, after which the person concludes moisturiser does not work for them.",
          "The other direction happens too: someone with constitutionally dry skin buying a hydrating serum and using it alone, which in dry air makes the skin feel tighter rather than better, for the reasons discussed under humectants elsewhere on this site.",
          "The correction in both cases is the same question: is the missing thing oil or water. Answering it takes a moment of observation and it determines which half of the shelf is relevant. That is a small amount of diagnostic effort with an unusually direct effect on whether the next purchase helps. As with everything on this site, this is educational rather than medical advice, and persistent dryness that does not respond is worth having assessed.",
        ],
      },
      {
        h: "A simple test you can run at home",
        p: [
          "There is a rough diagnostic that takes a few hours and costs nothing. Cleanse gently in the evening, apply nothing at all, and observe the skin after a couple of hours and again in the morning.",
          "Skin that feels tight and looks flaky, with no shine developing anywhere, is dry: it has not produced enough oil to make itself comfortable. Skin that develops shine in the usual areas while still feeling tight underneath is dehydrated: the oil is there, the water is not. Skin that becomes comfortable on its own within an hour or two probably needs less product rather than a different one.",
          "This is not a laboratory measurement and it is more informative than any amount of reading, because it removes the confounding effect of whatever you have been applying. It is also the fastest way to discover that a routine is causing the problem it is trying to solve, which is the most common finding when people run it.",
        ],
      },
      {
        h: "The seasonal version of the same question",
        p: [
          "For a large number of people the answer changes twice a year, which is worth building into how the routine is arranged rather than treating as a recurring surprise. Cold outdoor air holds little moisture and heated indoor air holds less, which means winter reliably increases both water loss and lipid depletion.",
          "The practical arrangement is two versions of a routine rather than a search for one product that suits every month. A lighter moisturiser and a lower-frequency cleansing routine in summer; a richer formulation, a gentler cleanser and possibly an occlusive layer at night in winter.",
          "Anyone whose skin is comfortable for half the year and difficult for the other half is not dealing with a mysterious skin type. They are dealing with a fixed routine meeting variable conditions, and the fix is to vary the routine rather than to keep looking for a product that will hold up in both.",
        ],
      },
      {
        h: "When it is neither and needs a diagnosis",
        p: [
          "Some persistent dryness is a symptom rather than a state, and it is worth knowing the signals that warrant an assessment rather than another product. Well-defined patches, intense itching, oozing or crusting, dryness confined to specific areas, or scaling that thickens rather than flakes all point elsewhere.",
          "Eczema, psoriasis, seborrhoeic dermatitis and contact allergy all present with dryness among their features and none responds adequately to moisturiser alone. So do some systemic conditions: thyroid dysfunction is a well-recognised cause of generalised dry skin, as are certain medications including retinoids taken orally and some diuretics.",
          "The practical rule is that dryness which does not improve after a month of gentle cleansing and consistent emollient use has failed the treatment for the thing it appeared to be. That is a reasonable point to stop buying products and get a diagnosis, and it frequently turns out to be something with a specific and effective treatment. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
    ],
  },
  {
    slug: 'exfoliation-how-often',
    sections: [
      {
        h: "What exfoliation is actually doing",
        p: [
          "Skin sheds its outermost cells continuously through a process called desquamation, in which enzymes break the bonds holding corneocytes together. In healthy young skin this happens efficiently and requires no assistance whatsoever.",
          "Where exfoliation has a rationale is when that process slows or fails. Desquamation becomes less efficient with age, and certain conditions — acne, keratosis pilaris, some forms of dryness — involve retained cells that accumulate rather than shedding.",
          "This framing sets the expectation correctly. Exfoliation is a corrective measure for a specific problem rather than a general act of thoroughness, and a person whose skin sheds normally gains little from it while taking on the risk described below. The default assumption that everyone needs to exfoliate is not supported by how the skin works.",
        ],
      },
      {
        h: "Physical against chemical",
        p: [
          "Physical exfoliants remove cells by abrasion: scrubs containing particles, cloths, brushes and devices. The difficulty is that pressure is unregulated, and it is easy to apply more force than intended, particularly with irregularly shaped particles that create microscopic tears.",
          "Chemical exfoliants dissolve the bonds between cells instead. Alpha hydroxy acids — glycolic, lactic, mandelic — are water-soluble and act at the surface. Beta hydroxy acid, meaning salicylic acid, is oil-soluble and penetrates into the follicle, which is what makes it the relevant choice for congestion and acne. Polyhydroxy acids have larger molecules, penetrate less and are correspondingly gentler.",
          "The practical advantage of the chemical approach is that the dose is determined by concentration, pH and contact time rather than by how hard someone happened to rub. That is a considerably more controllable variable, which is why dermatological practice has moved toward it.",
        ],
      },
      {
        h: "The frequency question",
        p: [
          "There is no single correct interval, and the useful principle is to find the lowest frequency that achieves the effect rather than the highest the skin will tolerate. For most people that is once or twice weekly, not daily.",
          "The products themselves push in the other direction. Toners, cleansers, pads and serums containing acids are frequently marketed for daily use, and someone using three such products has an exfoliation frequency they never chose and probably have not counted. Auditing the whole routine for acids, rather than only the product labelled as an exfoliant, is the step most often skipped.",
          "The right frequency also changes. Skin that tolerated twice weekly in summer may not in winter. Adding a retinoid changes the tolerance substantially, and the correct response is to reduce exfoliation rather than to maintain both at the previous levels.",
        ],
      },
      {
        h: "What over-exfoliation looks like",
        p: [
          "The signs are the barrier damage signs described elsewhere on this site, and the reason they are worth repeating here is that people frequently misread them. Skin becomes shiny in a way that reads as glowing but is actually a thinned, over-smooth surface. It stings on application of previously tolerated products.",
          "Redness appears, sensitivity increases, and paradoxically new flaking develops — which people then treat by exfoliating more, since flaking is exactly what exfoliation is supposed to address. This loop is the single most common way skincare routines go badly wrong.",
          "Breakouts frequently increase as well, because a compromised barrier is more permeable and more inflamed. Someone who began exfoliating for congestion and finds it worse after two months is not exfoliating insufficiently; they are almost certainly exfoliating too much.",
        ],
      },
      {
        h: "Who should be careful or abstain",
        p: [
          "Several groups have a poor risk-to-benefit ratio here. Anyone with rosacea, eczema or an already reactive barrier will generally do worse with regular exfoliation, since these conditions involve barrier dysfunction that exfoliation compounds.",
          "Anyone using a retinoid is already getting accelerated turnover from a mechanism with better evidence, and adding acids on top is the most common route to the reaction that causes people to abandon retinoids entirely. If both are wanted, they belong on different nights at a low frequency.",
          "People with deeper skin tones warrant particular caution, since inflammation from over-exfoliation is a recognised trigger for post-inflammatory hyperpigmentation, which is considerably harder to resolve than the roughness that prompted the exfoliation. In that context, gentler acids at lower frequency, or none, is frequently the better choice.",
        ],
      },
      {
        h: "A sensible way to start",
        p: [
          "For anyone with a genuine reason to exfoliate, the approach that avoids most problems is unremarkable. Choose one product, at a modest concentration, and use it once weekly for a month before considering an increase.",
          "Apply it in the evening, to dry skin, and follow with moisturiser. Use sunscreen daily without exception, since exfoliated skin is more sensitive to ultraviolet and the acids themselves increase photosensitivity. Remove any other acid-containing products from the routine while establishing tolerance.",
          "Increase only if the current frequency is entirely comfortable and the intended effect has not been achieved. Many people find that once weekly is sufficient indefinitely, which is a considerably better outcome than discovering the ceiling by exceeding it. And a period of stopping entirely is a reasonable diagnostic for anyone whose skin has become unpredictable — it is the single variable most likely to be responsible. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "Choosing between the acids",
        p: [
          "The differences between the common acids are practical rather than a matter of strength ranking. Glycolic acid has the smallest molecule of the alpha hydroxy group, penetrates most readily and is correspondingly the most irritating; it has the largest body of research behind it for texture and pigmentation.",
          "Lactic acid has a larger molecule, penetrates less, and has some humectant properties, which makes it a reasonable choice for drier skin. Mandelic acid is larger still and among the gentlest, which is why it is frequently suggested for sensitive skin or deeper skin tones where irritation carries a pigmentation risk.",
          "Salicylic acid is the one to choose for congestion, blackheads and acne, because oil solubility lets it act inside the follicle where those problems originate. Someone using a glycolic product for blackheads has chosen an acid that works on the surface for a problem that is not on the surface, which is a common and easily corrected mismatch.",
        ],
      },
      {
        h: "Concentration, pH and contact time",
        p: [
          "Three variables determine how strong an acid product actually is, and the label usually shows only one. Concentration is the visible figure. The pH of the formulation determines how much of the acid is in its active free form, and a product at a higher pH is substantially milder than the same concentration at a lower one.",
          "Contact time is the third and the one entirely under your control. A cleanser containing acid is rinsed within a minute and does very little; the same acid in a leave-on serum acts for hours. This is why comparing products on concentration alone is misleading, and why a low-percentage leave-on product can outperform a high-percentage wash-off one.",
          "The practical use of this is that contact time is a dial. Someone finding a product too strong can apply it and rinse after ten minutes rather than abandoning it, and increase the duration as tolerance develops. That is a gentler route than switching to a lower concentration and starting over.",
        ],
      },
      {
        h: "The professional versions",
        p: [
          "Chemical peels performed in a clinical setting use the same acid families at concentrations and pH levels not available for home use, and they are a genuinely different intervention rather than a stronger version of the same thing.",
          "For established concerns — significant photoageing, resistant pigmentation, acne scarring — a course of professional treatment will achieve in a few sessions what home products would not achieve at all. The trade is cost, downtime and the need for a practitioner who assesses skin type properly, since peels carry a real risk of pigmentary complications in deeper skin tones when poorly chosen.",
          "What is worth avoiding is the middle ground: high-concentration peel kits sold for unsupervised home use. These carry the risks of the professional version without the assessment, the experience or the ability to neutralise a reaction promptly, and the injuries that result are not rare. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "Recovering from having overdone it",
        p: [
          "Anyone recognising themselves in the over-exfoliation description has a straightforward path back, and the main obstacle is that it involves doing nothing for longer than feels reasonable.",
          "Stop every acid, every scrub and every device completely. Reduce to a gentle cleanser once daily, a bland moisturiser with barrier lipids applied as often as wanted, and sunscreen. Expect meaningful improvement within one to two weeks and full comfort over four to six, which is the renewal time of the outer layer.",
          "The reintroduction is where people undo the recovery. Wait until the skin has been entirely comfortable for a fortnight, then return at once weekly rather than at the previous frequency, and hold there for a month. A substantial number of people discover at that point that once weekly was always sufficient, and that the higher frequency had been producing the problem it was meant to solve.",
        ],
      },
    ],
  },
  {
    slug: 'anti-ageing-realistic',
    sections: [
      {
        h: "Intrinsic and extrinsic ageing",
        p: [
          "Skin ageing has two components with quite different causes, and separating them explains why some interventions work and others cannot. Intrinsic ageing is chronological: a gradual decline in collagen production, thinning of the dermis, loss of fat and changes in bone structure. It is genetically determined and largely unmodifiable by anything topical.",
          "Extrinsic ageing is caused by external exposure, overwhelmingly ultraviolet radiation, with smoking, pollution and repeated inflammation contributing. It produces the changes people usually mean by aged skin: uneven pigmentation, coarse texture, broken capillaries, deep lines and leathery thickening.",
          "The proportions are the useful part. Estimates commonly attribute the large majority of visible facial ageing to extrinsic factors rather than to the passage of time itself. That is the entire reason sun protection outperforms every cream, and it is a claim about which component is actually being addressed rather than about product quality.",
        ],
      },
      {
        h: "The short list with evidence",
        p: [
          "Three interventions have evidence that stands up. Daily broad-spectrum sun protection is first by a considerable margin, supported by randomised trial data showing measurably less skin ageing over several years. Not smoking is second, with a well-documented effect on collagen and dermal vasculature.",
          "Topical retinoids are third and are the only cosmetic ingredient class with substantial randomised evidence for improvement in photoageing: fine lines, texture and pigmentation, measured over six to twelve months. That is a modest and genuine effect.",
          "Below those, the evidence thins considerably. Vitamin C has a plausible mechanism as a cofactor in collagen synthesis and reasonable antioxidant data. Certain peptides have preliminary evidence. Alpha hydroxy acids improve surface texture. None of these is in the same category as the first three, and no combination of them substitutes for the first.",
        ],
      },
      {
        h: "What creams cannot do",
        p: [
          "There is a category of change that no topical product addresses, and being clear about it prevents a great deal of wasted money. Sagging is caused by loss of volume — fat pads descending and diminishing, bone resorbing — and by loss of elasticity in the deeper dermis. Nothing applied to the surface reaches those structures.",
          "Deep static lines that are present when the face is at rest reflect structural change and repeated muscular folding. Creams improve their appearance marginally by improving the skin quality around them; they do not remove them.",
          "The interventions that do address these are procedural: injectables for volume and muscle activity, energy-based devices for tightening, surgery for significant laxity. Each has genuine evidence, real costs and real risks, and none of them is what a jar contains. A product promising a lifting or firming effect is describing either a temporary film-forming trick or nothing at all.",
        ],
      },
      {
        h: "Where the money actually goes",
        p: [
          "The anti-ageing category carries the highest margins in cosmetics, and the pricing has almost no relationship to the ingredients. Retinol, vitamin C, niacinamide and peptides are commodity substances available at every price point.",
          "What premium products contain that inexpensive ones do not is generally a proprietary complex with a coined name, supported by manufacturer research that has not been independently replicated. Some of these may work; none has the evidence base of the short list above, and the price difference buys the story rather than the substance.",
          "The rational allocation is therefore weighted heavily toward the things that work. A well-formulated sunscreen used daily in adequate quantity, and a retinoid at a strength you can tolerate, cover almost everything achievable topically, and both are available inexpensively. Money beyond that is buying texture, packaging and hope, in roughly that order.",
        ],
      },
      {
        h: "Prevention against correction",
        p: [
          "The asymmetry worth understanding is that preventing photoageing is straightforward and inexpensive, while correcting it is difficult, slow and expensive. Someone using sunscreen consistently from their twenties is buying an outcome that no amount of later spending fully replicates.",
          "This has an uncomfortable implication: the people for whom this advice is most valuable are the ones least motivated to follow it, since visible ageing is decades away. And the people most motivated are addressing damage already accumulated, where the available improvement is real but partial.",
          "Neither observation is a reason for anyone to stop. Photoageing continues to accumulate throughout life, so protection started at fifty prevents the damage that would otherwise occur between fifty and eighty. The best time to start was earlier and the second best is now, which is true of this in the same way it is true of most long-horizon decisions.",
        ],
      },
      {
        h: "A routine that reflects the evidence",
        p: [
          "Assembled from the above, a defensible anti-ageing routine is short and inexpensive. In the morning: gentle cleanse or rinse, moisturiser if needed, broad-spectrum sunscreen at SPF 30 or above, applied in adequate quantity and reapplied when outdoors.",
          "In the evening: gentle cleanse, a retinoid at whatever strength and frequency your skin tolerates, moisturiser. That is the whole protocol, and everything else is optional refinement with a considerably weaker justification.",
          "Alongside it, the non-product measures carry real weight: not smoking, seeking shade during peak hours, wearing a hat, and treating inflammation promptly since repeated inflammation contributes to pigmentary change. What is not on the list is a specialised product for each area of the face, which is a segmentation strategy rather than a dermatological necessity. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "The eye cream question",
        p: [
          "Eye creams are among the highest-margin products in the category and the case for them is weaker than their ubiquity suggests. The skin around the eye is thinner and has fewer sebaceous glands, which is a real difference, and it does not follow that a separate product is required.",
          "Most eye creams contain the same ingredient families as facial moisturisers at lower concentrations, in smaller containers, at higher prices. Where a genuine distinction exists it is in tolerability: the eye area is more prone to irritation, so a gentler formulation of an active is defensible, particularly for retinoids.",
          "The changes people want addressed here are largely not treatable topically. Under-eye darkness is frequently vascular or structural — visible vessels through thin skin, or a hollow casting a shadow — and neither responds to a cream. Puffiness is usually fluid or fat pad position. Fine lines improve modestly with the same ingredients that work elsewhere. A gentle moisturiser and, if tolerated, a low-strength retinoid covers what is achievable.",
        ],
      },
      {
        h: "Judging what a product did",
        p: [
          "Assessing anti-ageing products is unusually difficult because the changes are slow, the baseline is a face you see daily, and expectation shapes perception strongly. Almost nobody evaluates these accurately by memory.",
          "The method that works is photographic: a picture at the start, in consistent light, from a fixed angle, without makeup, repeated at twelve weeks and again at six months. Anything short of that is comparing a current impression against a reconstructed one, which reliably reports whatever you expected.",
          "It is also worth being clear about what would count as success before starting. Improvement in texture and evenness of tone is achievable and observable. Removal of established deep lines is not, and setting that as the standard guarantees disappointment with a product that may be doing exactly what the evidence says it does.",
        ],
      },
      {
        h: "The things that are not skincare",
        p: [
          "Several factors with reasonable evidence behind them have nothing to do with products, and they get less attention because nobody sells them. Sleep is the clearest: studies of restricted sleep have found measurable effects on skin barrier recovery and on how skin is rated by observers.",
          "Smoking has a well-documented effect on collagen degradation and dermal blood supply, and the characteristic pattern of ageing in long-term smokers is visible enough to be recognised clinically. Stopping produces improvement in skin appearance alongside everything else it improves.",
          "Diet has weaker and more contested evidence, with the most consistent findings relating to high glycaemic load and, separately, to adequate protein intake for anyone building collagen. None of these produces a dramatic effect on its own. Together they account for more of the variation between people of the same age than any cream does, which is worth knowing before spending heavily on the cream. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "Collagen supplements",
        p: [
          "Oral collagen has become one of the largest categories in this area and deserves a fair hearing rather than a dismissal. The obvious objection — that ingested collagen is digested into amino acids and peptides rather than delivered intact to skin — is correct as far as it goes.",
          "The more interesting proposed mechanism is that specific collagen peptides surviving digestion may act as signals, prompting increased synthesis. Several randomised trials have reported improvements in skin elasticity and hydration, which is more evidence than most supplement categories have.",
          "The caveats are substantial and worth stating. Many of these trials were funded by manufacturers, sample sizes are modest, measurement methods vary, and the effects reported are small. The honest summary is that the evidence is better than sceptics assume and considerably weaker than the marketing implies, and that anyone choosing to try it should treat it as an optional extra rather than as a substitute for the short list of things that are well established.",
        ],
      },
    ],
  },
  {
    slug: 'reading-ingredient-labels',
    sections: [
      {
        h: "How the list is ordered",
        p: [
          "Cosmetic ingredient lists follow an international naming convention and are ordered by concentration, in descending order, down to one percent. Below that threshold, ingredients may be listed in any order, which is the detail that makes the whole thing readable.",
          "The practical consequence is that the position of a well-known active tells you a great deal. An ingredient appearing in the first few positions is present at meaningful concentration. One appearing after the preservatives, fragrance and colourants is almost certainly below one percent and frequently far below.",
          "Locating the one percent line is easier than it sounds. Preservatives such as phenoxyethanol are typically used at around one percent, and ingredients like sodium hydroxide, xanthan gum or disodium EDTA appear well below it. Anything listed after those is present in trace amounts regardless of how prominently it appears on the front of the package.",
        ],
      },
      {
        h: "What the first five ingredients tell you",
        p: [
          "For most products, the first five entries account for the overwhelming majority of the formulation and determine how it behaves. Water is almost always first in a cream or lotion. What follows is the functional core.",
          "In a moisturiser, seeing glycerin, a fatty alcohol, a plant oil or squalane, and a silicone in those positions tells you it contains a humectant, emollients and something to improve texture and slow water loss. That is a functional product regardless of price or branding.",
          "Conversely, a product whose first five entries are water, a thickener, an emulsifier, a preservative and alcohol is a base with very little in it, and whatever is being advertised on the front is somewhere near the bottom. This single check — read five lines, ignore the front of the package — filters out a large proportion of disappointing purchases.",
        ],
      },
      {
        h: "The terms that carry no information",
        p: [
          "Several words appear constantly and are unregulated in most jurisdictions, which means they can be applied to any product. Natural, clean, pure, gentle, dermatologist-developed and non-toxic have no legal definition and no test behind them.",
          "Hypoallergenic is the most misleading, because it sounds technical. In most regions it requires no specific testing and simply indicates the manufacturer's assertion that the product is less likely to cause allergy. Fragrance-free is more meaningful than unscented, since the latter can indicate a masking fragrance used to hide a base odour.",
          "Non-comedogenic has a partial basis. Historical testing was performed on rabbit ears and translated poorly to human skin, and no standardised current test exists. It is a reasonable signal of intent rather than a guarantee, and someone prone to congestion is better served by observing their own response than by trusting the claim.",
        ],
      },
      {
        h: "Where fragrance hides",
        p: [
          "Fragrance is among the most common causes of contact allergy in cosmetics and it appears under several names. Parfum or fragrance covers a mixture that may contain dozens of individual compounds, and the composition is protected as proprietary in most regulatory regimes.",
          "It also appears under ingredient names that do not read as fragrance. Linalool, limonene, citronellol, geraniol and eugenol are individually listed in some jurisdictions because they are recognised allergens, and they are fragrance components. Essential oils named directly — lavender, tea tree, citrus — are fragrance by another route and are among the more frequent sensitisers.",
          "For anyone with sensitive or reactive skin, scanning for these is one of the higher-value things to do with an ingredient list. It also explains a recurring puzzle: a product with an otherwise excellent formulation that nonetheless causes a reaction, where the culprit is an aromatic component included for the sensory experience rather than for any effect on skin.",
        ],
      },
      {
        h: "Concentration claims and what they omit",
        p: [
          "Products increasingly advertise a percentage on the front, which is more informative than nothing and is not the whole picture. For acids, the pH of the formulation determines how much is in the active free form, and this is almost never disclosed.",
          "For vitamin C, stability determines whether the stated concentration is still present by the time you use it, which depends on packaging and age rather than on the label. For retinoids, the form matters as much as the amount, since retinyl esters and retinol at the same percentage are not equivalent.",
          "And for any ingredient, the vehicle affects delivery substantially. The same percentage in a well-designed formulation and a poor one will behave differently. This does not make percentage claims useless; it makes them one input among several, and it explains why two products with identical stated concentrations can produce different results.",
        ],
      },
      {
        h: "A practical way to shop",
        p: [
          "Pulled together, a workable approach takes about a minute per product. Decide first what you want it to do, since a product without a defined purpose cannot be evaluated. Then check whether an ingredient with evidence for that purpose is present, and whether it appears above or below the one percent line.",
          "Scan for fragrance and essential oils if you are prone to reactions. Check packaging for anything light-sensitive: opaque containers and pumps for retinoids and vitamin C, and be sceptical of jars for these. Ignore the front of the package entirely, including any coined complex name, which is a trademark rather than a claim.",
          "Then compare against the cheapest product that passes the same checks. In most categories the inexpensive option contains the same actives at the same concentrations, and the difference is texture and packaging. Sometimes the nicer texture is worth paying for, particularly for a daily sunscreen, and that is a preference decision made knowingly rather than a belief that the price bought efficacy. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "The names behind the names",
        p: [
          "The international naming convention uses standardised names that frequently do not resemble what the marketing calls the ingredient, which is a common source of confusion. Vitamin C appears as ascorbic acid or one of its derivatives. Vitamin E appears as tocopherol. Vitamin B3 appears as niacinamide.",
          "Retinoids are listed as retinol, retinyl palmitate, retinaldehyde or adapalene depending on the form. Hyaluronic acid usually appears as sodium hyaluronate, its salt form. Salicylic acid may appear under that name or, in some products marketed as natural, as willow bark extract, which contains related compounds at unpredictable and generally low concentration.",
          "That last case is worth flagging because it recurs. A botanical source of an active is not equivalent to the active: the concentration is variable, frequently much lower, and the rest of the extract adds sensitising potential. A product using an extract where the isolated ingredient exists is usually making a marketing choice rather than a formulation one.",
        ],
      },
      {
        h: "Packaging as part of the assessment",
        p: [
          "For several ingredient classes the container is as informative as the list, because the ingredient degrades on exposure to light and air. This is not a minor consideration: a well-formulated product in poor packaging can be inactive within weeks.",
          "Retinoids, vitamin C and most antioxidants belong in opaque, airless containers — tubes with narrow openings, or pump dispensers. A jar requires the product to be opened fully and exposed to air and fingers at every use, and a clear bottle admits light continuously. Any of these ingredients sold in a clear jar should be treated with suspicion regardless of what the formulation contains.",
          "The pattern holds in reverse. Ingredients that are stable — glycerin, petrolatum, ceramides, most emollients and silicones — are unaffected by packaging, which means a moisturiser in a jar is entirely reasonable. The rule is not that jars are bad; it is that jars are bad for the specific things that degrade. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "The dates and symbols on the back",
        p: [
          "Two markings govern how long a product remains usable and they mean different things. A printed expiry date applies to products with a shelf life under thirty months, including most sunscreens, and is a genuine limit rather than a suggestion.",
          "The open-jar symbol — a small container image with a figure such as 6M or 12M — indicates the period after opening during which the product is expected to remain stable and adequately preserved. That clock starts when the seal is broken, not at purchase, and a product opened two years ago is past it regardless of how full it looks.",
          "Sunscreen deserves particular attention here, since filters degrade and an expired product provides less protection than the label states while giving the user the confidence that it does. If a bottle has lasted more than a season, the more likely explanation is that too little is being applied, which is a separate problem discussed elsewhere on this site.",
        ],
      },
    ],
  },
  {
    slug: 'niacinamide-explained',
    sections: [
      {
        h: "What it is chemically",
        p: [
          "Niacinamide is the amide form of vitamin B3, also called nicotinamide. It is water-soluble, stable across a wide pH range, and inexpensive to produce, which is why it appears in such a large proportion of products across every price bracket.",
          "Its stability is a genuine practical advantage over several other actives. It does not degrade meaningfully in light or air, which means packaging is not a consideration, and it does not require the low pH that makes acids irritating. A product containing it will still contain it a year later.",
          "It is distinct from nicotinic acid, sometimes called niacin, which is a different form of the same vitamin and does cause flushing. The two are frequently confused, and that confusion underlies most of the concern about niacinamide causing redness, which is discussed below.",
        ],
      },
      {
        h: "The sebum and pore research",
        p: [
          "Among the claims made for niacinamide, the effect on oil production and pore appearance is the one most often cited and the one with the most variable evidence. Several studies have reported reductions in sebum excretion rate with topical application over several weeks.",
          "The results are not uniform. Some studies found a meaningful reduction, others found little, and the measurement methods differ enough that direct comparison is difficult. The effect appears to be real and modest rather than dramatic, and it takes weeks rather than days.",
          "Pore appearance is downstream of this and of the effect on follicular contents. A pore looks smaller when it contains less accumulated material, and there is reasonable evidence for improvement on that measure. What does not happen is any change to the actual structure of the follicle, for the reasons set out in the myths article on this site.",
        ],
      },
      {
        h: "Redness, rosacea and the anti-inflammatory effect",
        p: [
          "The anti-inflammatory action is among the better supported findings and it makes niacinamide relevant to conditions where inflammation is the driver. Studies in acne have found improvement comparable to some topical antibiotics, without the resistance concerns that antibiotics carry.",
          "In rosacea, the mechanism of interest is barrier improvement rather than direct anti-inflammatory action. Rosacea involves barrier dysfunction, and an ingredient that increases ceramide production and reduces water loss addresses one component of the condition. It is not a treatment for rosacea and it is one of the few actives that people with rosacea generally tolerate.",
          "This tolerability is the practical point. For anyone whose skin reacts to most things, niacinamide is among the small number of ingredients with genuine evidence that can usually be introduced without an adjustment period, which makes it a reasonable first active for reactive skin.",
        ],
      },
      {
        h: "The flushing question, examined",
        p: [
          "Some people do experience flushing from niacinamide, particularly at higher concentrations, and it is worth understanding what is and is not happening. Nicotinic acid causes a well-documented flush through prostaglandin-mediated vasodilation. Niacinamide does not act by that mechanism.",
          "The concern that niacinamide converts to nicotinic acid in the presence of vitamin C derives from mid-twentieth-century experiments conducted at high temperatures with pure compounds, and the conditions do not occur in formulated products at room temperature.",
          "The more likely explanation for flushing in practice is either simple irritation at high concentration, or the presence of nicotinic acid as a manufacturing impurity in poorly purified material. Either way, the response is the same and it is straightforward: reduce the concentration. Products at two to five percent, which is where the research sits, produce this reaction far less often than the ten percent and above formulations sold on the assumption that more is better.",
        ],
      },
      {
        h: "You may already be using it",
        p: [
          "Because it is cheap, stable and well tolerated, niacinamide appears in an enormous number of products where it is not the headline ingredient: moisturisers, sunscreens, cleansers and treatment products across every category.",
          "This is worth checking before buying a dedicated serum. Someone whose moisturiser and sunscreen both contain it may already be getting a reasonable dose, and adding a concentrated serum on top provides no additional benefit while increasing the chance of the irritation described above.",
          "It also means that people who believe they have never used it frequently have, and have tolerated it without incident. Reading the ingredient lists of the products already in a routine takes five minutes and occasionally makes the next purchase unnecessary, which is a good outcome that no product page will suggest.",
        ],
      },
      {
        h: "Realistic expectations and who benefits most",
        p: [
          "The honest summary is that niacinamide does several things modestly rather than one thing dramatically, and that this is a legitimate profile rather than a disappointment. It is a supporting ingredient rather than a headline one.",
          "The people who benefit most are those with a compromised barrier, mild persistent redness, oily or congested skin, or post-inflammatory pigmentation, and particularly those whose skin does not tolerate acids or retinoids. For that group it offers a genuine option where most alternatives are unavailable.",
          "The people who benefit least are those with none of those concerns, who are adding it because it appears on every recommendation list. For someone with a functioning three-step routine and no specific problem, this is an optional extra with a small measured effect, and the money is better directed at a sunscreen they will use consistently. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "How it works on pigmentation",
        p: [
          "The mechanism here is different from most brightening ingredients and worth understanding, because it explains both the effect and its limits. Melanin is produced inside melanocytes and then transferred, packaged in melanosomes, to surrounding keratinocytes where it becomes visible.",
          "Niacinamide does not inhibit melanin production. It appears to interfere with the transfer step, which means pigment already made stays where it was made rather than being distributed to the cells that display it. Studies have found reductions in the appearance of hyperpigmentation over several weeks on this basis.",
          "The limit follows directly. Since production continues, the effect is partial, and it does nothing about pigment already deposited in the epidermis, which fades on its own schedule. For post-inflammatory marks it is a reasonable adjunct. For established melasma it is not remotely a substitute for the prescription and procedural options, and treating it as one wastes months.",
        ],
      },
      {
        h: "Pairing it with everything else",
        p: [
          "One of the more useful properties is how little it conflicts with. It combines without issue alongside retinoids, where there is some evidence it reduces the associated irritation, and alongside acids, sunscreen, benzoyl peroxide and moisturisers.",
          "The stability across pH ranges is what makes this possible. Ingredients that require a low pH to work, such as most acids and pure vitamin C, can be destabilised by neighbours; niacinamide functions across a wide range and does not impose a requirement on anything else.",
          "The practical implication is that it is the easiest active to slot into an existing routine without rearranging anything. Where a retinoid is being introduced, applying niacinamide first or in the morning is a reasonable way to support the barrier through the adjustment period described in the retinoid articles on this site.",
        ],
      },
      {
        h: "Judging whether it has done anything",
        p: [
          "Because the effects are modest and gradual, this is a difficult ingredient to assess by impression, and most people who conclude it did nothing never gave it a fair test. Twelve weeks is the minimum, and the changes are the kind that perception adapts to without registering.",
          "Photographs at the start under consistent light, repeated at twelve weeks, are the only reliable method. It is also worth choosing in advance which single thing you are watching — redness, oiliness by the afternoon, the appearance of specific marks — since a vague sense of overall improvement is exactly what expectation produces regardless of what happened.",
          "One thing that makes assessment easier here than with most actives is the absence of an adjustment period. There is no initial worsening to wait out and no irritation to distinguish from effect, so anything that changes over the twelve weeks is more likely to be the ingredient than the noise around it. As with everything on this site, this is educational rather than medical advice.",
        ],
      },
      {
        h: "The barrier finding, which is the strongest one",
        p: [
          "Of everything attributed to this ingredient, the effect on barrier function has the most consistent support and receives the least attention, because it is less marketable than pores or brightness.",
          "Studies have found increased production of ceramides and other barrier lipids following topical application, with a corresponding reduction in transepidermal water loss measured instrumentally. That is a direct effect on the structure described in the barrier article on this site, rather than an inference from appearance.",
          "It also explains several of the other observed effects. Better barrier function reduces sensitivity, reduces the inflammation that drives redness, and improves tolerance of other actives. A single mechanism accounting for a scattered list of benefits is a more credible picture than a substance that happens to do six unrelated things, and it suggests that anyone with a compromised barrier is the person for whom this ingredient is genuinely worth buying.",
        ],
      },
    ],
  },
  {
    slug: 'retinoid-beginners-guide',
    sections: [
      {
        h: "A twelve-week starting schedule",
        p: [
          "Most retinoid failures happen because people start at a frequency their skin cannot sustain. A schedule decided in advance removes the nightly judgement call that leads to escalating too fast.",
          "Weeks one to three: twice weekly, on non-consecutive nights. Weeks four to six: three times weekly, but only if the previous three weeks produced no persistent redness or flaking. Weeks seven to nine: alternate nights. Weeks ten to twelve: nightly, if tolerated, and many people never reach this and do not need to.",
          "The rule governing every step is that you only increase from a position of complete comfort. Any irritation means holding at the current frequency for another two weeks rather than pushing through, and a genuine reaction means dropping back a level. Written down and stuck somewhere visible, this schedule prevents almost all of the reactions that cause people to abandon the ingredient entirely.",
        ],
      },
      {
        h: "The pea-sized amount, taken literally",
        p: [
          "The recommended quantity for the whole face is roughly the size of a pea, and it is smaller than almost everyone applies. More product does not produce faster results; it produces the same result with considerably more irritation, since the limiting factor is receptor binding rather than quantity available.",
          "The technique that distributes it properly is to place four or five small dots — forehead, each cheek, chin, nose — and then spread outward from each, rather than applying a larger amount to one area and dragging it across. This gives even coverage from a quantity that looks insufficient.",
          "Two areas deserve a lighter touch or avoidance in the early weeks: the immediate eye area and the corners of the nose and mouth, where skin is thinner or naturally moister and irritation concentrates. Applying a layer of moisturiser to these spots before the retinoid is a standard technique and it works.",
        ],
      },
      {
        h: "Distinguishing purging from a reaction",
        p: [
          "This distinction matters because the responses are opposite, and the available signals are reasonably clear even though the concept is often misused.",
          "Purging presents as an increase in breakouts in the areas where you normally break out, appearing within the first few weeks, with individual lesions running their course faster than usual. It settles within six to eight weeks.",
          "A reaction presents as burning rather than spots, or as breakouts in areas that are usually clear, or as widespread redness, swelling, or a rash-like appearance. It does not settle and frequently worsens with continued use. The practical rule is to allow up to eight weeks at a low frequency for something matching the first description, and to stop for anything matching the second. Continuing through a genuine reaction is how people end up with the barrier damage described elsewhere on this site.",
        ],
      },
      {
        h: "The moisturiser sandwich and other buffers",
        p: [
          "Applying moisturiser before the retinoid, after it, or both, reduces irritation and appears to cost less efficacy than might be expected. The sandwich method — a layer of moisturiser, then the retinoid, then moisturiser again — is worth knowing because it makes the difference between continuing and stopping for a lot of people.",
          "The reasoning is that the moisturiser slows delivery rather than blocking it, spreading the same dose over a longer period. Since irritation relates to the rate of exposure and efficacy relates to total exposure, this is a favourable trade during the adjustment period.",
          "The skin must be completely dry before the retinoid goes on if it is applied directly. Damp skin increases penetration and is one of the most common unrecognised causes of an unexpectedly harsh first week. Waiting twenty minutes after washing before applying anything solves it entirely.",
        ],
      },
      {
        h: "Choosing when to start",
        p: [
          "The timing of the start matters more than people expect. Beginning in autumn or winter means the adjustment period coincides with lower ultraviolet exposure, which reduces one of the risks, though it also coincides with dry heated air, which increases irritation.",
          "The more useful consideration is what is happening in your life. The first six weeks can involve visible flaking and redness, and starting a fortnight before a wedding, a job interview or a holiday is a decision people regret. Choosing a stretch with nothing significant in it removes the pressure that leads to abandoning at week three.",
          "It is also worth not starting alongside anything else new. One change at a time is the general principle throughout skincare, and it matters most here, because a retinoid introduced alongside a new cleanser or acid makes it impossible to know what caused any reaction that follows.",
        ],
      },
      {
        h: "Getting through a bad week",
        p: [
          "Even on a careful schedule there will be weeks where the skin is unhappy, and having a plan for those prevents an overreaction in either direction.",
          "The response is to skip the next application and to spend two or three nights on cleanser, moisturiser and nothing else. This is not a failure of the process; it is the process, and skin that recovers within a few days can resume at the same frequency. Skin that takes longer should resume at a lower one.",
          "What does not work is either continuing regardless, which turns a mild irritation into a barrier problem, or stopping permanently, which is how a twelve-week commitment ends at week four. The middle path — pause, recover, resume lower — is what people who succeed with retinoids actually do, and it is rarely described because it sounds less decisive than either alternative. As with everything on this site, this is educational rather than medical advice; retinoids are avoided in pregnancy and prescription strengths should be used under clinical guidance.",
        ],
      },
    ],
  },
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
    if (exp.title) article.title = exp.title;
    if (exp.excerpt) article.excerpt = exp.excerpt;
  }
}
