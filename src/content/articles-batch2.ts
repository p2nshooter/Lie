import type { Article } from './types';

/**
 * lie.skin editorial library — batch 2. Ten original, dermatology-informed
 * explainers, including a family strand (children's and teens' skin).
 * Educational only, evidence-based, no diagnosis, no cure claims; every
 * article defers to professionals for personal concerns.
 */
export const ARTICLES_BATCH2: Article[] = [
  {
    slug: "niacinamide-explained",
    category: "ingredients",
    title: "Niacinamide: The Quiet Multitasker That Suits Almost Everyone",
    excerpt:
      "It doesn't tingle, it rarely irritates, and it shows up in half the products on the shelf. What niacinamide actually does, what it can't, and how to use it well.",
    date: "2026-07-14",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "Every few years an ingredient becomes the industry's darling, and for good reason or bad it ends up in everything. Niacinamide — a form of vitamin B3 — earned its ubiquity more honestly than most. It is one of the best-studied cosmetic ingredients there is, it plays politely with nearly every other active, and it addresses several common concerns at once at concentrations most skins tolerate easily.",
        "As always: this is general education, not medical advice. Persistent redness, breakouts or texture changes deserve a professional's eyes, not a longer shopping list."] },
      { h: "What the evidence supports", p: [
        "Research on topical niacinamide supports several modest, real effects: it strengthens the skin barrier by encouraging ceramide production, which helps skin hold water and tolerate the world; it visibly calms mild redness and blotchiness over weeks of use; it helps regulate the look of enlarged pores and excess oil; and it can soften the appearance of uneven tone alongside other measures. Modest and real is the theme — improvements accumulate over six to twelve weeks, not overnight.",
        "What it will not do is replace the heavy hitters. It does not resurface like retinoids, protect like sunscreen, or clear significant acne on its own. Its role is the reliable supporting actor: it makes a simple routine more comfortable and slightly more effective across several fronts at once."] },
      { h: "Concentration: more is not better", p: [
        "Marketing has pushed niacinamide percentages upward — ten, fifteen, twenty percent — as if it were a strength contest. The studies behind its reputation mostly used two to five percent, and higher concentrations mainly raise the odds of flushing and irritation without adding proportional benefit. A moisturiser or serum in the two-to-five range, used daily, is the evidence-aligned sweet spot.",
        "If a high-percentage product makes your face feel hot or look flushed, that is not the product 'working' — it is a signal to step down. Effective skincare is overwhelmingly boring and comfortable."] },
      { h: "Fitting it into a routine", p: [
        "Niacinamide's superpower is compatibility. It sits happily alongside retinoids (and can reduce their dryness), alongside exfoliating acids, under sunscreen in the morning, and over most serums at night. The old warning against combining it with vitamin C stems from decades-old lab conditions, not modern formulations; today's combined products and layered routines are considered fine for most users.",
        "The simplest placements: a niacinamide-containing moisturiser morning and night, or a 5% serum after cleansing and before moisturiser. Give it two to three months of daily use before judging, photograph your skin at the start if you want an honest comparison, and let it do what it does best — make everything else easier to live with."] },
    ],
  },
  {
    slug: "retinoid-beginners-guide",
    category: "ingredients",
    title: "Starting a Retinoid Without Wrecking Your Face: A Beginner's Map",
    excerpt:
      "Retinoids are the most evidence-backed anti-ageing and anti-acne ingredients in skincare — and the most commonly abandoned. The slow-start method that gets you through the hard weeks.",
    date: "2026-07-15",
    minutes: 8,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "If dermatology had a hall of fame, retinoids — the vitamin-A family that includes retinol and prescription tretinoin — would occupy the first plinth. Decades of studies support what they do for acne and for the visible signs of sun ageing: smoother texture, softened fine lines, more even tone. No other cosmetic ingredient category comes close in weight of evidence.",
        "And yet bathroom drawers everywhere hold abandoned tubes, discarded in week three when the flaking started. The failure is almost never the ingredient; it is the on-ramp. Retinoids demand a slow start, and nobody tells beginners how slow slow means."] },
      { h: "Why the first weeks are rough", p: [
        "Retinoids speed up skin cell turnover and dial up collagen activity — that is the point — but skin needs time to adapt to the new pace. The adjustment period, often called retinisation, can bring dryness, flaking, tightness and mild redness for two to six weeks. It is common, it is temporary, and it is the stage at which most people either quit or, worse, scrub the flakes with exfoliants and make everything angrier.",
        "The single most useful reframe: irritation is not proof of effectiveness, and comfort is not proof of failure. The studies that made retinoids famous ran for months. Whatever gets you to month four gently is the correct protocol."] },
      { h: "The slow-start protocol", p: [
        "Start with a low-strength over-the-counter retinol or retinal. Apply a pea-sized amount — genuinely pea-sized, for the entire face — at night, onto dry skin, twice a week. Keep that frequency for two weeks; if skin stays calm, move to every other night for a few weeks, then nightly if and only if comfort holds. Some skins thrive at three nights a week forever, and that is a perfectly effective destination.",
        "Two comfort tricks earn their popularity. The sandwich: moisturiser first, retinoid on top, moisturiser again — it slows absorption slightly and dramatically improves tolerance, especially for dry or sensitive skin. And the buffer zone: keep the product away from the corners of the nose, mouth and eyes, where skin is thinnest and irritation starts first."] },
      { h: "The non-negotiables", p: [
        "Sunscreen every morning stops being optional the day a retinoid enters your evenings — fresh, faster-renewing skin is more sun-sensitive, and unprotected sun exposure cancels the very benefits you are chasing. Pause the retinoid around cosmetic procedures and during any barrier meltdown, and park your exfoliating acids in the early months; the retinoid is doing the resurfacing now.",
        "Retinoids are not appropriate during pregnancy or breastfeeding — this is a firm medical convention, and anyone in that season should ask a professional about alternatives. And if what you are treating is more than mild — painful acne, deep scarring, anything worsening — skip the trial-and-error entirely: prescription options exist, and a dermatologist will get you there years faster than the skincare aisle."] },
    ],
  },
  {
    slug: "skin-barrier-repair",
    category: "concerns",
    title: "Your Skin Barrier: What It Is, How It Breaks, How It Heals",
    excerpt:
      "'Damaged barrier' has become skincare's favourite diagnosis. Here is what the barrier actually is, the honest signs yours is struggling, and the boring two-week fix that almost always works.",
    date: "2026-07-16",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "The outermost layer of your skin is a wall barely thicker than a sheet of paper: flattened cells as the bricks, and a precise mix of lipids — ceramides, cholesterol, fatty acids — as the mortar. This wall keeps water in and the world out. When it is intact, skin feels calm and looks quietly luminous. When it is compromised, everything stings, nothing sits right, and products that worked for years suddenly 'burn'.",
        "The internet calls this a damaged barrier, and for once the buzzword points at something real and well-described in dermatological science: increased water loss through a disrupted outer layer. The good news is that for most people it is self-inflicted and self-repairing — once you stop the inflicting."] },
      { h: "How barriers actually get broken", p: [
        "The great modern barrier-breaker is enthusiasm. Daily acid toners plus a retinoid plus a vitamin C plus a clay mask plus a scrub — each defensible alone, catastrophic as a stack. Add hot showers, harsh foaming cleansers that strip lipids, winter air and central heating, and the mortar dissolves faster than skin can rebuild it. Overwashing is a quieter culprit: cleansing is subtraction, and skin has a daily budget for it.",
        "The signs are consistent: tightness minutes after washing, stinging when bland moisturiser goes on, sudden 'reactions' to old favourites, flaky patches beside oily shine, and a dull, rough look no glow product fixes. If several of those are familiar, the fix is not a new active. It is a ceasefire."] },
      { h: "The two-week ceasefire", p: [
        "Strip the routine to three things. Morning: rinse or gentle cleanse, a simple fragrance-free moisturiser with barrier lipids (ceramides high on the list), sunscreen. Evening: gentle cleanse, the same moisturiser, nothing else. No acids, no retinoids, no vitamin C, no masks, no scrubs — a full pause, not a reduction. Keep water lukewarm and cleansing brief.",
        "Most compromised barriers calm dramatically within one to two weeks of this regimen, because the skin's repair machinery is excellent when nobody keeps kicking the wall. Reintroduce actives afterwards one at a time, at lower frequency than before — the crash was the evidence that the old schedule exceeded your skin's budget. If burning, weeping, spreading redness or real pain are in the picture, that is beyond routine repair: see a professional rather than nursing it with products."] },
      { h: "Keeping it strong", p: [
        "Long-term barrier care is unglamorous: a cleanser that doesn't leave you tight, moisturiser every day whether skin 'feels dry' or not, sunscreen every morning, actives at the lowest frequency that delivers results, and one new product at a time so problems stay traceable. Skins differ enormously in how much activity they tolerate — the goal is finding your budget, not maxing out a influencer's.",
        "A useful annual habit: each winter, preemptively drop active frequency a notch and thicken the moisturiser. Barriers break seasonally on schedule, and the repair is much cheaper before the crash than after it."] },
    ],
  },
  {
    slug: "acne-myths-that-make-it-worse",
    category: "myths",
    title: "Five Acne Myths That Are Actively Making Skin Worse",
    excerpt:
      "Acne attracts more folklore than any other skin concern — and much of it multiplies the problem. The five most damaging myths, and what the evidence says instead.",
    date: "2026-07-17",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "Acne is the most common skin condition on earth, which means it also carries the largest folklore library: advice from relatives, influencers, and the corner of the internet where everything is either a toothpaste hack or a detox. Some myths are harmless. Five of them reliably make skin worse, and they deserve individual demolition.",
        "Standing disclaimer, doubly important here: moderate and severe acne — painful, deep, scarring, or simply persistent — is a medical condition with genuinely effective treatments. A doctor's visit beats a decade of trial and error, and nothing below replaces one."] },
      { h: "Myth one and two: dirt and scrubbing", p: [
        "Myth one says acne means skin is dirty. It is false at the mechanism level: acne begins inside the pore, with a mix of excess oil, sticky dead cells, bacteria that live on everyone, and inflammation — heavily steered by hormones and genetics. Faces with acne are not less washed than clear ones. The myth's damage is the behaviour it triggers: washing harder and more often, which strips the barrier, and a stressed barrier makes inflammation worse, not better.",
        "Myth two follows: if dirt is the cause, scrubbing is the cure. In reality, physical scrubs and rough cloths on inflamed skin rupture spots, spread bacteria, prolong redness, and raise the odds of marks that outlive the pimple by months. Gentle twice-daily cleansing is the ceiling. Anything that makes an angry face angrier is subtracting, not adding."] },
      { h: "Myth three and four: toothpaste, popping, and 'natural' cures", p: [
        "Myth three is the emergency hack: toothpaste, lemon juice, undiluted essential oils. All are irritants with no anti-acne design; lemon juice in particular can trigger burns and long-lasting dark patches, especially with sun exposure. The pharmacy shelf holds actual evidence-backed spot ingredients — benzoyl peroxide and salicylic acid — for the price of a tube of toothpaste.",
        "Myth four is that a good pop speeds things up. Squeezing drives the pore's contents deeper as often as outward, converting a three-day surface spot into a two-week inflamed lump and, in darker skin especially, a mark that lingers for months. The disciplined alternative — a spot treatment, a hydrocolloid patch, and patience — wins on every timescale that matters."] },
      { h: "Myth five: acne is a teenage problem you must outgrow", p: [
        "The final myth is temporal: acne belongs to teenagers, so adults should just wait it out, and teens should be embarrassed until they do. Adult acne — particularly along the jaw and chin, particularly in women, often hormone-linked — is extremely common and entirely treatable. Waiting is not a treatment plan at any age, and scarring accumulated while waiting is the least reversible part of the whole condition.",
        "What the evidence actually supports fits in a sentence: gentle cleansing, one or two proven actives introduced slowly, non-comedogenic moisturiser and sunscreen, hands off the spots, and a doctor when it is more than mild. Boring, unbranded, and it works — which is precisely why the folklore is louder."] },
    ],
  },
  {
    slug: "teen-first-skincare-routine",
    category: "routine",
    title: "A Teenager's First Skincare Routine: A Guide for Teens and Their Parents",
    excerpt:
      "Puberty flips the skin's settings overnight, and the internet answers with 20-step hauls. What actually belongs in a first routine, what to skip, and how parents can help without hovering.",
    date: "2026-07-18",
    minutes: 8,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "At some point between eleven and fifteen, skin changes its own settings: oil production jumps, pores announce themselves, and the first spots arrive — often right when self-consciousness peaks. A generation ago the response was a harsh soap and hoping. Today's teenager instead meets an algorithm serving twelve-step routines, £60 serums and anti-ageing actives marketed at children. Both eras got it wrong in different directions.",
        "This one is written for teens and for the parents watching trolleys fill with glass bottles. The evidence-supported answer is glorious in its smallness: three steps, a handful of pounds, and a few habits that matter more than any product."] },
      { h: "The whole routine", p: [
        "Morning: wash with a gentle, fragrance-free cleanser — not a scrub, not a 'deep-cleansing' foam that leaves skin squeaky. Follow with a light, oil-free, non-comedogenic moisturiser; yes, even oily skin, because stripped skin often answers with more oil. Finish with sunscreen, the one genuinely anti-ageing product on earth — habits built now pay off for fifty years. A moisturiser with SPF combines the last two steps and lowers the morning's activation energy.",
        "Evening: cleanse again — the day's sweat, sunscreen and, where relevant, makeup come off — and moisturise. That is the entire routine. If mild spots are part of the picture, one targeted active earns its place: a salicylic-acid cleanser or a benzoyl-peroxide spot treatment from the pharmacy, introduced alone, a few times a week to start. One active. Not five."] },
      { h: "What teens should skip — and why that's good news", p: [
        "The anti-ageing aisle is not early-bird savings; teen skin does not need retinol, and strong acids stack irritation onto already-turbulent skin. Multi-step layering multiplies cost, breakout triggers and, when something goes wrong, the impossibility of knowing which product did it. Physical scrubs on inflamed spots spread trouble and leave marks. And the algorithm's haul culture itself deserves naming: the person recommending a tenth product is usually paid per product, not per clear face.",
        "The good news inside all this restraint: the boring routine wins on results, not just on price. Consistency with three steps outperforms enthusiasm with twelve so reliably that dermatologists have been saying it in unison for years."] },
      { h: "For the parents in the room", p: [
        "Help by lowering friction, not by supervising: keep the cleanser and SPF stocked, treat the routine as normal hygiene rather than vanity, and resist mocking the interest — skin anxiety at fourteen is real, and the interest is an opening for good habits. When the haul requests come, agree the three-step core is covered first, and let discretionary money learn its own lessons on one shiny serum rather than ten.",
        "Above all, know the escalation line. Blackheads and a few spots are puberty. Painful, deep, scarring or mood-crushing acne is medicine's territory — modern treatments are excellent, and a GP or dermatologist visit at the right time can spare years of scarring, physical and otherwise. Booking that appointment is the single most powerful skincare purchase a parent can make."] },
    ],
  },
  {
    slug: "childrens-skin-sun-story",
    category: "sun",
    title: "The Sunhat Lesson: A Family Story About Skin That Children Remember",
    excerpt:
      "Sun protection habits are set in childhood, when the skin is most vulnerable and the lessons stick deepest. A story to read with kids — and the science for parents underneath it.",
    date: "2026-07-19",
    minutes: 6,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "Some skin lessons are best delivered as stories, because children remember stories long after they forget instructions. This one is for reading aloud on a summer morning, with the science for grown-ups following after. It begins, as the best summer stories do, at a grandmother's garden gate.",
        "Mira was seven, and she did not want the hat. 'Hats are for babies,' she announced. Her grandmother, who had the most interesting face in the family — soft lines around the eyes like a map of every smile — sat down on the step beside her. 'Let me tell you about my friend the tomato,' she said, and Mira, who knew a good beginning when she heard one, sat down too."] },
      { h: "The story of the two tomatoes", p: [
        "'When I was your age,' Grandmother said, 'I grew two tomato plants. One grew under the big net that shades young plants; one grew out in the open, because I wanted it to be strong and brave. The sun in our valley is friendly in the morning and fierce at midday. My open-air tomato ripened fast — and then its skin grew tough patches and cracks, and by August it was wrinkled like an old boot. The shaded one grew slower, and stayed smooth and glossy right until picking day.'",
        "'Your skin is a little like the tomato's,' she said, tapping Mira's nose. 'It remembers every hour of fierce sun, even when you forget. Not the morning walks and the playing in the shade — skin loves being outdoors. The burning hours, the red-shoulder days. It writes them all down in a secret notebook, and it reads the notebook back to you when you are my age.' Mira looked at the map of lines around her grandmother's eyes. 'Did your skin write things down?' — 'Plenty,' laughed Grandmother. 'Sunhats hadn't been invented as far as I was concerned. I would like your notebook to be mostly empty, that's all. Wearing the hat isn't being a baby. It's being the gardener.'"] },
      { h: "The science under the story", p: [
        "For the grown-ups: the tomato is doing honest work. Childhood is when skin is thinnest and most vulnerable, and research consistently links sunburns in childhood to substantially higher lifetime skin-cancer risk — the 'notebook' is real, and it is cumulative. The protective playbook for children is well established: shade in the peak hours, cover-ups and wide-brim hats as the first line, and a broad-spectrum SPF 30+ on what remains exposed, reapplied after swimming and sweat.",
        "Babies under six months are a special case — direct sun and sunscreen are both to be avoided; shade and clothing do the whole job. And the most powerful intervention of all is unglamorous: children copy adults. A parent who wears a hat and applies sunscreen without commentary teaches more in a summer than every lecture combined."] },
      { h: "Making it stick", p: [
        "Habits outperform rules. Keep the sunscreen next to the breakfast things in summer so it joins the leaving-the-house ritual; let children choose their own hat, because ownership beats compliance; name the shade-hours in family language ('tomato hours') so the concept has a handle a child can grab. None of this needs fear — the sun is not the villain of the story, the burning hours are.",
        "Mira, for the record, wore the hat — a yellow one she chose herself, with a brim like a sunflower. And on the way to the beach she explained tomatoes, at length, to her little brother. Lessons that arrive as stories leave as stories, which is exactly how they travel best."] },
    ],
  },
  {
    slug: "spf-in-makeup-enough",
    category: "sun",
    title: "Is the SPF in Your Makeup Actually Protecting You?",
    excerpt:
      "SPF 30 foundation sounds like sunscreen you can wear as a face. The arithmetic of application amounts says otherwise — here's the honest math and the routine that fixes it.",
    date: "2026-07-20",
    minutes: 6,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "It is one of the most comforting labels in the beauty aisle: foundation with SPF 30, cushion compact with SPF 50, tinted moisturiser promising sun protection and coverage in one step. The implication is that makeup can be your sunscreen. The chemistry is not lying — the arithmetic is where the comfort falls apart.",
        "An SPF rating is measured at a standardised, surprisingly generous application: two milligrams of product per square centimetre of skin. For a face, that is roughly a quarter teaspoon — about two full fingers' length of cream. Now picture how much foundation anyone actually wears."] },
      { h: "The application gap", p: [
        "Typical foundation application is a fraction of the tested amount — often a fifth to a tenth. And SPF does not scale kindly: applying half the tested amount does not give you half the protection, it can drop an SPF 30 to the effective ballpark of a single-digit SPF. A thin veil of SPF 30 foundation, beautifully blended, may be providing less real protection than its wearer believes by an order of magnitude.",
        "Powders and cushion compacts fare even worse, because the amounts deposited are smaller still. None of this makes SPF in makeup useless — it is a genuine bonus layer. The error is arithmetic: a bonus layer cannot be the foundation of protection, pun fully intended."] },
      { h: "The routine that actually works", p: [
        "The evidence-aligned order is simple: a dedicated broad-spectrum sunscreen, SPF 30 or higher, applied generously as the last skincare step — the full quarter-teaspoon for the face, plus ears and neck — given a few minutes to set, and then makeup on top, SPF-labelled or not. The dedicated layer does the protecting; the makeup does the makeup.",
        "Modern sunscreen textures have made this dramatically easier than a decade ago — fluid, invisible finishes sit under foundation without pilling for most people. Finding the one your skin likes is a genuine errand worth running, because the sunscreen you enjoy wearing is the one that ends up on your face daily."] },
      { h: "Topping up without ruining your face", p: [
        "The awkward truth of sunscreen is reapplication — every couple of hours in real sun — and nobody wants to smear cream over finished makeup. The workarounds are real: SPF setting sprays and powder-brush sunscreens are imperfect but far better than nothing for midday top-ups, and a cushion sunscreen pressed over makeup works well for many. On heavy-sun days, the humble answers still win: the brimmed hat, the sunglasses, the shaded table.",
        "The honest summary: keep buying makeup with SPF if you like it — it is a small free extra. Just never let the label do the job of the quarter-teaspoon. Your foundation is an accessory to protection, not the protection."] },
    ],
  },
  {
    slug: "sensitive-skin-or-irritated-skin",
    category: "concerns",
    title: "Sensitive Skin or Just Irritated Skin? How to Tell the Difference",
    excerpt:
      "Half the people who describe their skin as sensitive are actually describing skin they've irritated. The distinction matters, because the fixes point in opposite directions.",
    date: "2026-07-21",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "'I have sensitive skin' may be the most common self-diagnosis in skincare, and surveys keep finding that a majority of adults claim it. Genuine skin sensitivity absolutely exists. But dermatologists quietly observe that a large share of self-described sensitivity is something else: ordinary skin, irritated by an over-ambitious routine, hard water, fragrance overload or seasonal assault — skin that would behave beautifully if its circumstances changed.",
        "The distinction is not pedantry. Truly sensitive skin needs a permanently gentle, minimal approach and sometimes medical support. Irritated skin needs its irritants removed — after which it can often enjoy actives that 'sensitive' labels would forbid forever. Treating one as the other means either enduring needless flare-ups or needlessly banning half of skincare for life."] },
      { h: "The signatures of each", p: [
        "Chronically sensitive skin tends to have a long history: reactions since youth, family patterns, links with conditions like eczema, rosacea or allergies, and flare-ups triggered by a wide range of unrelated things — weather, fabrics, stress, foods, most products regardless of price. Reactions arrive fast and repeat consistently. If a patch of untouched skin (inner arm, behind the ear) reacts to a product too, the sensitivity is likely constitutional.",
        "Irritated skin, by contrast, usually has a start date. Skin that was fine until three months ago — coincidentally when the new acid toner, the vitamin C, the retinol and the jade-roller enthusiasm all arrived — is telling a different story. The reactions cluster around the face where the routine happens, spare the covered skin, and often ease dramatically during holidays away from the full routine. That pattern points at the products, not the person."] },
      { h: "The elimination experiment", p: [
        "The diagnostic is the same two-week ceasefire that repairs barriers: gentle fragrance-free cleanser, plain ceramide moisturiser, sunscreen, and nothing else — no actives, no masks, no tools, no 'just this one serum'. Skin that calms substantially within two weeks was irritated, not sensitive, and the old routine simply exceeded its budget. Reintroduce products one at a time, a week apart, and the culprit identifies itself with unusual honesty.",
        "Skin that remains reactive on the bare-minimum routine — stinging at bland moisturiser, flushing at lukewarm water — is expressing something constitutional. That is worth a professional conversation rather than another shopping trip, both because prescription-grade help exists and because persistent reactivity can be the surface of an underlying condition with a name and a treatment."] },
      { h: "Living well with either answer", p: [
        "If the experiment says 'irritated', the prize is freedom with a speed limit: actives are available, introduced one at a time at low frequency, with the barrier's comfort as the permanent dashboard warning light. Most skins can hold one or two actives happily; few can hold five. The crash was information, not identity.",
        "If the answer is genuinely sensitive, the winning strategy is unapologetic minimalism — short ingredient lists, no fragrance, patch-testing as ritual, new products in quiet seasons — plus professional allies rather than internet hauls. Either way, the label matters less than the method: change one variable at a time, listen to the skin's answer, and let evidence beat identity."] },
    ],
  },
  {
    slug: "skincare-marketing-decoder",
    category: "myths",
    title: "Clean, Natural, Chemical-Free: A Decoder for Skincare Marketing",
    excerpt:
      "The most persuasive words on a skincare label are the ones with no agreed meaning at all. What 'clean', 'natural', 'non-toxic' and 'dermatologist-tested' actually tell you — and what to read instead.",
    date: "2026-07-13",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "Walk the skincare aisle and the loudest words are the emptiest ones. 'Clean.' 'Natural.' 'Chemical-free.' 'Detoxifying.' 'Dermatologist-tested.' They feel like information — reassurance, even — but most have no regulated definition anywhere in the world. They are mood, priced as meaning. Learning to read past them is the single most money-saving skill in all of skincare.",
        "None of this is a claim that brands are villains; marketing speaks the language that sells. It is a claim that your decisions deserve better inputs than vibes — and that the truthful information is printed on the same box, in smaller letters."] },
      { h: "The empty words, one by one", p: [
        "'Chemical-free' is the easiest to retire: water is a chemical; so is vitamin C, so is everything in the jar and in your body. The phrase is scientifically meaningless by construction. 'Natural' has no binding definition in cosmetics — a product can lead with one botanical extract and be otherwise synthetic — and natural is not synonymous with gentle: poison ivy is natural, and essential oils are among the most common cosmetic allergens dermatologists see. Meanwhile many 'synthetic' ingredients are the best-tested, most-tolerated molecules in the industry.",
        "'Clean' is a marketing category invented by retailers, with a different definition at every till. 'Non-toxic' implies competitors are poison — cosmetics regulation already forbids that. 'Detox' describes a thing skin does not do through products; livers and kidneys handle detoxification. And 'dermatologist-tested' means at least one dermatologist was involved in some testing — it specifies neither the test, the result, nor the number of dermatologists. 'Hypoallergenic', similarly, has no standardised legal threshold in most markets."] },
      { h: "What to read instead", p: [
        "The ingredient list (INCI) is the box's only sworn testimony. You do not need to parse all of it: check whether the actives you are paying for appear in the top half of the list, note 'fragrance/parfum' if your skin dislikes it, and treat a short list as a genuine feature for reactive skin. Percentages, where declared, beat adjectives — '5% niacinamide' is information; 'powered by vitamins' is weather.",
        "Two more honest signals: sunscreen filters and their SPF/broad-spectrum ratings are regulated claims backed by mandated testing, and so are genuine drug-status actives in some markets (like certain acne ingredients) — the boring regulated corner of the label is the trustworthy corner. Price, packaging weight and scent are not signals at all; some of the best-evidenced products in dermatology cost pocket change and smell of nothing."] },
      { h: "A buyer's checklist", p: [
        "Before paying premium for a promise, run four questions. Is the key claim about an ingredient with published evidence (retinoids, niacinamide, salicylic acid, sunscreen filters) — or about an aura ('clean', 'pure', 'detox')? Is the hero ingredient present at a stated, sensible concentration? Would a plainer product with the same INCI essentials cost a third as much? And is the person recommending it paid per sale?",
        "Skincare is one of the few aisles where the humble option is so often the evidence option. The industry sells hope in beautiful jars, and there is no shame in enjoying beautiful jars — but buy the hope knowingly, and let the ingredient list, not the adjectives, spend your money."] },
    ],
  },
  {
    slug: "night-skin-repair-sleep",
    category: "routine",
    title: "Night Shift: What Skin Actually Does While You Sleep",
    excerpt:
      "The 'beauty sleep' cliché turns out to be solid chronobiology. What happens to skin at night, why sleep loss shows on your face by morning, and how to build an evening routine around the biology.",
    date: "2026-07-12",
    minutes: 7,
    author: "The Lie.skin Desk",
    sections: [
      { h: "", p: [
        "Of all the folk beliefs in skincare, 'beauty sleep' is the one science keeps validating. Skin runs on a circadian clock like the rest of the body, and its night programme is genuinely different from its day programme: daytime is defence mode — barrier tightened against UV, pollution and weather — while night is the repair shift, when cell division accelerates, blood flow rises and the day's damage gets processed.",
        "That rhythm has two practical consequences: sleep itself is a skincare intervention with visible effects, and the evening routine lands on skin at its most receptive hours. Both deserve more attention than the average serum gets."] },
      { h: "The overnight repair shift", p: [
        "Research on skin chronobiology shows cell proliferation peaking in the late-night hours at rates far above midday — the skin literally schedules its rebuilding for when UV is absent. Growth hormone released in deep sleep supports tissue repair; overnight, skin temperature rises slightly and permeability increases, which is also why night-time water loss is higher and why skin can feel drier by morning.",
        "Cut the sleep and the shift gets cancelled. Experimental sleep-restriction studies have documented what mirrors already knew: after short nights, observers rate faces as more tired, less healthy and less attractive; dark circles deepen, skin tone dulls, and measured barrier recovery slows. Chronic short sleep keeps stress hormones elevated, which degrades collagen over time and aggravates inflammatory conditions — acne, eczema and psoriasis all tend to flare on exhaustion."] },
      { h: "An evening routine built on the biology", p: [
        "The night's increased permeability makes evening the natural slot for the hardworking actives: retinoids exist almost exclusively as night products (UV degrades them and they raise sun sensitivity), and repair-focused formulas rich in ceramides simply have more hours of elevated skin activity to work with. The sequence stays simple: cleanse away the day — sunscreen, sebum, city — then the active if you use one, then a moisturiser weighted a little richer than your daytime one to blunt the overnight water loss.",
        "Two unglamorous accessories outperform many serums: a humidifier in heated or air-conditioned bedrooms keeps the overnight dehydration gentle, and a clean pillowcase changed regularly is cheap insurance for breakout-prone skin. Silk pillowcases are pleasant and reduce friction creasing, but the changing matters more than the fabric."] },
      { h: "The cheapest active you own", p: [
        "It is worth saying plainly: seven to nine hours of regular sleep produces visible skin effects that no over-the-counter product reliably matches, because it is not an additive — it is the operating window for every repair process the products merely assist. A £200 shelf applied to a chronically under-slept face is decorating a construction site where the workers never arrive.",
        "None of this is a guilt engine — parents of newborns and shift workers cannot simply choose more sleep, and their skin will forgive them eventually. It is a priority order. Before the next serum, audit the night: consistent hours, a dark cool room, screens dimmed late. The routine's most powerful step is the one where you're unconscious."] },
    ],
  },
];
