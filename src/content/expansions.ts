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
