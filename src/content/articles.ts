import type { Article, Category } from './types';
import { ARTICLES_BATCH2 } from './articles-batch2';

/**
 * lie.skin editorial library — original, independent, dermatology-informed
 * skincare explainers. Educational only, evidence-based, no diagnosis, no
 * cure claims. Every article reminds readers to see a professional for
 * personal concerns; all published under a site-wide medical disclaimer.
 */

export const CATEGORIES: Category[] = [
  { slug: 'ingredients', name: 'Ingredients', tagline: 'What actually works, from retinoids to niacinamide', icon: '🧪' },
  { slug: 'routine', name: 'Routines', tagline: 'Building a simple, effective routine that lasts', icon: '🧴' },
  { slug: 'concerns', name: 'Skin Concerns', tagline: 'Acne, ageing, dryness and sensitivity', icon: '🔍' },
  { slug: 'sun', name: 'Sun & Protection', tagline: 'SPF, UV and protecting your skin barrier', icon: '☀️' },
  { slug: 'myths', name: 'Myths & Facts', tagline: 'Separating evidence from marketing', icon: '💡' },
];

export const ARTICLES: Article[] = [
  {
    slug: 'skincare-routine-basics',
    category: 'routine',
    title: 'The Only Three Steps a Skincare Routine Really Needs',
    excerpt:
      'The industry sells ten-step routines; the evidence supports three. What a genuinely effective, minimal routine looks like — and why more products often mean worse skin.',
    date: '2026-07-02',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Walk into any beauty aisle and you will be sold the idea that good skin requires an elaborate ritual: cleanser, toner, essence, serum, ampoule, three creams and a mask, in a precise order. It is a lucrative story, but it is not what the evidence supports. For most people, a genuinely effective routine has three steps, and adding more often makes skin worse, not better.',
        'This is general skincare education, not medical advice. For any persistent or worsening skin problem, a qualified dermatologist is the right person to see — nothing here replaces that.'] },
      { h: 'The three steps that matter', p: [
        'The core of almost every dermatologist-endorsed routine is the same: cleanse, moisturise, and protect from the sun. Cleansing removes dirt, excess oil and the day\'s grime with a gentle, non-stripping cleanser. Moisturising supports the skin\'s barrier and keeps it hydrated. And a broad-spectrum sunscreen every morning is, by a wide margin, the single most effective anti-ageing and skin-health step there is.',
        'Those three, done consistently, deliver the large majority of the benefit that skincare can offer. Everything beyond them is optional refinement for specific goals, not a requirement for healthy skin.'] },
      { h: 'Why more can be worse', p: [
        'Piling on products carries real downsides. Layering many active ingredients — acids, retinoids, vitamin C, exfoliants — can irritate and inflame the skin, damaging the very barrier you are trying to support. Much visible "problem" skin in enthusiastic routines is not a disease but irritation from overuse, which clears up when the routine is simplified.',
        'More products also mean more cost, more chances for a reaction, and more difficulty identifying what caused a problem when something goes wrong. A short routine is not just cheaper and easier; it is often objectively kinder to your skin.'] },
      { h: 'How to add anything extra, carefully', p: [
        'If you do want to target a specific concern — say a retinoid for ageing or acne, or vitamin C for tone — add one new active at a time, start with a low frequency, and give your skin weeks to adjust before judging or adding anything else. Introducing several actives at once is the fastest route to irritation and the hardest situation to troubleshoot.',
        'The reassuring truth is that beautiful, healthy skin does not require an intimidating shelf of products. Cleanse gently, moisturise, wear sunscreen daily, and be patient — that unglamorous trio outperforms most ten-step rituals, and it is far easier to actually keep up.'] },
    ],
  },
  {
    slug: 'sunscreen-guide',
    category: 'sun',
    title: 'Sunscreen: The Most Effective Anti-Ageing Product You Already Own',
    excerpt:
      'No serum comes close. Why daily sun protection is the best-supported skincare step of all, how much to use, and the myths that stop people wearing it.',
    date: '2026-07-04',
    minutes: 8,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'If skincare had a single, undisputed champion, it would not be an expensive serum or a trendy acid — it would be sunscreen. Among everything sold to improve skin, daily broad-spectrum sun protection has by far the strongest evidence behind it, both for preventing visible ageing and, far more importantly, for reducing skin cancer risk.',
        'This is educational information, not medical advice; for concerns about specific spots, changes or conditions, see a doctor or dermatologist.'] },
      { h: 'Why it outperforms everything', p: [
        'A large share of what we recognise as "ageing" skin — wrinkles, uneven tone, rough texture, dark spots — is not simply the passage of years but cumulative sun damage, known as photoageing. Ultraviolet light breaks down the skin\'s collagen and elastin over time and drives pigment changes. Sunscreen slows that process at the source, which is why it does more for long-term skin appearance than products applied to repair damage after the fact.',
        'And its most important job is not cosmetic at all. Regular sun protection is one of the clearest, best-supported ways to reduce the risk of skin cancers, which makes it a health measure first and an anti-ageing product second.'] },
      { h: 'How to use it properly', p: [
        'Most people undermine their sunscreen by using far too little. Research consistently finds that people apply a fraction of the amount used in testing, which means they get a fraction of the stated protection. Use a generous amount on all exposed skin, and reapply through the day if you are outdoors, sweating or swimming, since protection wears off. Choose a broad-spectrum product, which guards against both the UVA that ages skin and the UVB that burns it.',
        'The best sunscreen is ultimately the one you will actually wear every day, so finding a texture and finish you like matters more than chasing the highest possible number on a product you will avoid.'] },
      { h: 'The myths that keep people unprotected', p: [
        'Several persistent myths stop people protecting their skin. "I don\'t burn, so I don\'t need it" ignores that UVA ageing and cellular damage happen without a visible burn. "It\'s cloudy" ignores that a significant amount of UV passes through cloud. "I\'m indoors" underestimates UVA through windows and the cumulative effect of daily incidental exposure. And darker skin, while it burns less easily, is not immune to UV damage or skin cancer and still benefits from protection.',
        'The practical takeaway is simple and boring, which is exactly why it works: make daily sunscreen the one non-negotiable step of your routine. No serum, acid or cream will ever do as much for your skin.'] },
    ],
  },
  {
    slug: 'retinoids-explained',
    category: 'ingredients',
    title: 'Retinoids: The Most Studied Anti-Ageing Ingredient, Explained Simply',
    excerpt:
      'Behind the confusing names sits one of the few skincare ingredients with decades of evidence. What retinoids do, how to start without wrecking your skin, and who should be careful.',
    date: '2026-07-06',
    minutes: 8,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Among the endless ingredients marketed for better skin, only a handful have decades of solid research behind them, and retinoids are the standout. Derived from vitamin A, they are among the best-studied topical ingredients in dermatology for both ageing and acne — which is exactly why they are worth understanding properly rather than fearing or overusing.',
        'This is general education, not a prescription or medical advice. Prescription-strength retinoids and any use during pregnancy or on sensitive conditions should be guided by a doctor.'] },
      { h: 'What they actually do', p: [
        'Retinoids work by influencing how skin cells behave — encouraging faster, more orderly cell turnover and supporting collagen production over time. In practice, the well-documented effects include smoother texture, a gradual softening of fine lines, more even tone, and, in the case of acne, fewer clogged pores. These are not overnight results; the meaningful changes appear over months of consistent use, which is why patience is essential.',
        'The names cause much confusion. There is a spectrum from gentler over-the-counter forms to stronger prescription versions, and they differ in strength and how quickly the skin converts them to their active form. Stronger is not automatically better — it simply tends to work faster and irritate more.'] },
      { h: 'How to start without the horror stories', p: [
        'Retinoids have a reputation for causing redness, flaking and irritation, but most of that comes from starting too strong, too fast. The gentle approach is to begin with a low strength, apply a small amount only two or three nights a week, and build up slowly as your skin adjusts over weeks. Applying to dry skin and buffering with moisturiser can reduce irritation while your skin acclimatises.',
        'Because retinoids can make skin more sensitive to sunlight, daily sunscreen becomes non-negotiable alongside them — otherwise you undo the benefit. Use them at night, introduce nothing else new at the same time, and give your skin the weeks it needs before judging.'] },
      { h: 'Who should be cautious', p: [
        'Retinoids are not for everyone or every moment. They are generally advised against during pregnancy and while breastfeeding, so anyone in that situation should stop and speak to a doctor. People with very sensitive skin, or conditions like eczema or rosacea, may not tolerate them well and should proceed only with professional guidance. And if irritation is severe or persistent rather than the mild, settling adjustment period, that is a signal to scale back and, if needed, seek advice.',
        'Used sensibly — low and slow, at night, with sunscreen by day, and patience measured in months — retinoids are one of the few ingredients whose reputation is genuinely earned by the evidence. Used impatiently, they are one of the fastest ways to irritate your skin.'] },
    ],
  },
  {
    slug: 'moisturiser-how-it-works',
    category: 'ingredients',
    title: 'How Moisturiser Actually Works (and Why Price Rarely Predicts Quality)',
    excerpt:
      'Humectants, emollients and occlusives — the three jobs a moisturiser does, why a good one can be inexpensive, and what "hydrating" really means.',
    date: '2026-07-08',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Moisturiser is the most-used skincare product and one of the least understood. The marketing surrounds it with luxury and high prices, yet the science of how it works is well established and refreshingly simple — and it turns out that an effective moisturiser can be inexpensive, while an expensive one is not automatically better.',
        'Understanding the three basic jobs a moisturiser can do lets you see past the packaging and choose what your skin actually needs.'] },
      { h: 'The three jobs: humectants, emollients, occlusives', p: [
        'Moisturisers work through three types of ingredient, often combined. Humectants, such as glycerin and hyaluronic acid, draw water into the outer skin and hold it there. Emollients, such as many plant oils and fatty acids, smooth and soften by filling gaps between skin cells. Occlusives, such as petrolatum and certain waxes, form a light barrier that slows water escaping from the skin.',
        'Most good moisturisers blend these to both add hydration and help the skin retain it. That combination — bringing in water and stopping it leaving — is essentially all a moisturiser needs to do, and it is not a job that requires exotic or costly ingredients.'] },
      { h: 'Why price rarely predicts quality', p: [
        'Because the core ingredients that make a moisturiser work are inexpensive and widely available, a modestly priced product can be every bit as effective as a luxury one. Much of the price difference in premium moisturisers reflects packaging, fragrance, marketing and brand positioning rather than superior function. Independent comparisons repeatedly find affordable moisturisers performing as well as far pricier ones.',
        'This is genuinely good news: caring well for your skin does not require expensive products. It requires the right kind of product used consistently, and that is available at every price point.'] },
      { h: 'Matching moisturiser to your skin', p: [
        'The main thing to match is texture to skin type and season. Drier skin generally does better with richer creams higher in emollients and occlusives; oilier or acne-prone skin often prefers lighter, non-comedogenic gels or lotions that hydrate without heaviness. Skin can also change with the seasons, needing more in cold, dry weather and less in humidity.',
        'If your skin is persistently irritated, very reactive, or has a condition like eczema, that is worth discussing with a professional, since the right choice can be more specific. But for everyday healthy skin, the rule is simple: pick a well-formulated moisturiser whose texture suits you, ignore the price prestige, and use it consistently.'] },
    ],
  },
  {
    slug: 'understanding-acne',
    category: 'concerns',
    title: 'Understanding Acne: Why It Happens and What Genuinely Helps',
    excerpt:
      'Acne is not a hygiene problem or a punishment for eating chocolate. What actually causes it, the ingredients with real evidence, and when to see a professional.',
    date: '2026-07-10',
    minutes: 8,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Few skin conditions carry as much misinformation and misplaced shame as acne. It is often blamed on being unclean, on diet, or on some personal failing — none of which captures what is really going on. Acne is a common medical condition with understood mechanisms, and understanding it replaces blame with a plan.',
        'This is educational information, not a diagnosis or treatment plan. Moderate to severe acne, or acne that scars or distresses you, deserves a doctor or dermatologist, who can offer options far beyond anything on a shop shelf.'] },
      { h: 'What actually causes it', p: [
        'Acne develops from a combination of factors inside the pore: excess oil, skin cells that shed unevenly and clog the follicle, a particular bacteria that flourishes in that environment, and inflammation. Hormones strongly influence oil production, which is why acne is so common in adolescence and around hormonal shifts. Genetics play a large role too — much of who gets acne, and how badly, is inherited.',
        'Notice what is largely absent from that list: being dirty. Acne is not caused by poor washing, and over-scrubbing to "clean it away" typically irritates the skin and makes things worse. The relationship with diet is far weaker and more individual than folklore suggests.'] },
      { h: 'Ingredients with real evidence', p: [
        'Several over-the-counter ingredients have genuine support for milder acne. Benzoyl peroxide targets the bacteria and helps clear pores. Salicylic acid, a type that penetrates oil, helps unclog pores. Certain retinoids normalise how skin cells shed and are effective for many people. The key with all of them is gentle, consistent use over weeks — acne treatments work slowly, and impatience or overuse leads to irritation that masquerades as worse acne.',
        'Gentleness is a theme. A mild cleanser, a light non-comedogenic moisturiser, one appropriate active introduced slowly, and daily sunscreen form a sensible base. Harsh scrubbing, drying the skin out, and piling on multiple strong actives all tend to backfire.'] },
      { h: 'When to seek help', p: [
        'Mild acne can often be managed with patience and the right basic products, but there is no need to struggle alone with anything more. If acne is moderate to severe, is leaving marks or scars, is not improving after consistent effort, or is affecting your confidence and wellbeing, a professional can help. Dermatologists have effective prescription options that are simply not available over the counter, and earlier treatment reduces the risk of lasting scarring.',
        'Above all, drop the shame. Acne is a common, treatable medical condition, not a verdict on your habits or worth — and treating it as the medical matter it is, is what actually leads to clearer skin.'] },
    ],
  },
  {
    slug: 'niacinamide-vitamin-c',
    category: 'ingredients',
    title: 'Niacinamide and Vitamin C: Two Gentle Ingredients Worth Knowing',
    excerpt:
      'Not every effective ingredient is harsh. What niacinamide and vitamin C do, the evidence behind the claims, and realistic expectations.',
    date: '2026-07-12',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Much of skincare\'s reputation for irritation comes from its strongest actives, but not every worthwhile ingredient is harsh. Niacinamide and vitamin C are two of the better-supported, generally well-tolerated ingredients, and they are worth understanding for anyone who wants results without the reactivity of stronger acids or retinoids.',
        'As always, this is general education rather than personal advice, and individual skin varies — patch-test new products and see a professional for persistent concerns.'] },
      { h: 'Niacinamide: the quiet multitasker', p: [
        'Niacinamide, a form of vitamin B3, is a genuinely versatile ingredient with a good safety profile. The evidence supports several modest but real benefits: it can help strengthen the skin\'s barrier, improve hydration, calm some redness, and over time help even out tone and reduce the appearance of pores. It is generally gentle enough for most skin types, including sensitive and acne-prone skin, and tends to layer well with other ingredients.',
        'The honest framing is "modest but real". Niacinamide is not a dramatic overnight transformer; it is a dependable, low-risk ingredient that supports skin health and pairs well within a simple routine.'] },
      { h: 'Vitamin C: brightening with caveats', p: [
        'Vitamin C is an antioxidant with a reasonable body of evidence for helping with tone, brightness, and protecting skin from some environmental damage, particularly when used in the morning under sunscreen. It can complement sun protection rather than replace it. The main practical caveats are that some forms are unstable and degrade with light and air, and that stronger concentrations can irritate sensitive skin.',
        'Because of that instability, storage and formulation matter, and a product that has oxidised (often turning darker) has lost potency. Start with a lower concentration if your skin is reactive, and treat vitamin C as a helpful supporting player, not a miracle brightener.'] },
      { h: 'Realistic expectations', p: [
        'The value of both ingredients lies in being effective enough to matter and gentle enough to actually keep using — consistency being where most skincare succeeds or fails. Neither will erase deep pigmentation, remove scars, or replace the fundamentals of cleansing, moisturising and sun protection. They refine and support; they do not rebuild.',
        'Used with realistic expectations, introduced one at a time, and given weeks to show their modest benefits, niacinamide and vitamin C are sensible, low-drama additions for those who want a little more from a routine without risking the irritation that harsher actives can bring.'] },
    ],
  },
  {
    slug: 'skin-barrier-explained',
    category: 'concerns',
    title: 'The Skin Barrier: The Wall You Keep Accidentally Damaging',
    excerpt:
      'Redness, stinging, sudden sensitivity — often the sign of a damaged skin barrier from over-doing skincare. What the barrier is, how to spot the damage, and how to repair it.',
    date: '2026-07-14',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'One of the most common problems in the age of elaborate skincare is not a disease at all — it is self-inflicted. Enthusiastic routines full of acids, scrubs and strong actives frequently damage the very thing they are meant to improve: the skin barrier. Understanding this wall, and how easily it is breached, prevents a great deal of unnecessary suffering.',
        'This is general information; persistent or severe skin problems should be seen by a professional, who can distinguish a damaged barrier from an underlying condition.'] },
      { h: 'What the barrier is and does', p: [
        'The skin\'s outermost layer works like a brick wall — skin cells as the bricks, held together by lipids as the mortar. This barrier does two vital jobs: it keeps water in, so skin stays hydrated, and it keeps irritants, allergens and microbes out. When it is intact, skin is comfortable and resilient. When it is compromised, water escapes and irritants get in, and the skin becomes reactive, dry and easily inflamed.',
        'Much of what people experience as "sensitive skin" is not an inborn trait but a temporarily damaged barrier — which is encouraging, because a damaged barrier can heal.'] },
      { h: 'How people damage it', p: [
        'The usual culprit is overdoing it. Frequent exfoliation, layering multiple acids or actives, harsh scrubbing, very hot water, stripping cleansers, and introducing several strong products at once all wear down the barrier faster than it can repair. The irony is that these are often attempts to achieve perfect skin, and the result is redness, stinging, tightness, flaking and new sensitivity — the signs of a wall breached.',
        'Environmental factors — cold, dry air, wind, over-washing — can contribute too, but for many people the biggest factor is simply doing too much to their skin.'] },
      { h: 'How to repair it', p: [
        'Barrier repair is mostly about subtraction. Stop the actives, acids and exfoliation, and strip the routine back to the gentle basics: a mild cleanser, a good moisturiser (ingredients like ceramides, glycerin and fatty acids support barrier lipids), and sunscreen. Avoid hot water and anything that stings. Then give it time — the barrier typically recovers over days to a few weeks of this calm treatment.',
        'Once the skin is comfortable again, reintroduce actives slowly and one at a time, and treat the earlier over-enthusiasm as the lesson it is. The counterintuitive truth of skincare is that doing less, more gently, is often what finally gives people the calm, healthy skin the complicated routine could not.'] },
    ],
  },
  {
    slug: 'skincare-myths',
    category: 'myths',
    title: 'Skincare Myths That Refuse to Die',
    excerpt:
      'Pores that "open and close", the need to feel a tingle, natural meaning safe — a clear-eyed look at the beliefs that waste money and harm skin.',
    date: '2026-07-16',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Skincare is fertile ground for myths, partly because skin is complicated and partly because there is money in confusion. Some myths are harmless; others waste money or actively damage skin. Clearing away a few of the most persistent ones is one of the most useful things a skincare guide can do.',
        'None of this is medical advice; for specific conditions, a professional beats any general rule of thumb.'] },
      { h: 'Pores do not open and close', p: [
        'A remarkably durable myth is that pores "open" with heat or steam and "close" with cold water, and that you can shrink them permanently. Pores do not have muscles and cannot open and close like doors. Their apparent size is largely genetic and influenced by oil and sun damage, and while keeping them clear of debris and protecting skin from sun can affect how prominent they look, no product or temperature trick physically opens or closes them.',
        'The practical upshot is to be sceptical of anything promising to "close your pores" — you can make them look less noticeable, but the dramatic claims are marketing, not physiology.'] },
      { h: 'Tingling is not "working"', p: [
        'Another costly belief is that a product must sting, tingle or feel active to be doing something. In reality, a tingle or burn is often a sign of irritation — of the product mildly damaging your skin — not of efficacy. Many of the most effective ingredients feel like nothing at all. Chasing sensation leads people to over-exfoliate and over-treat, damaging the barrier in pursuit of a feeling that signals harm rather than help.',
        'Judge products by results over weeks, not by how much they announce themselves on application. Gentle and unremarkable is frequently what healthy skin actually wants.'] },
      { h: '"Natural" does not mean safe, and expensive does not mean better', p: [
        'Two marketing myths deserve retiring together. "Natural" tells you nothing about safety or efficacy — plenty of natural substances irritate or sensitise skin, and plenty of effective ingredients are synthesised. And price is a poor guide to quality: inexpensive products routinely match luxury ones in independent comparisons, because the ingredients that work are often cheap. Paying more frequently buys packaging and prestige, not better results.',
        'The through-line of all these myths is the same lesson: be guided by evidence and your skin\'s actual response, not by sensation, buzzwords or price. Skin does not read the marketing.'] },
    ],
  },
  {
    slug: 'dry-skin-vs-dehydrated',
    category: 'concerns',
    title: 'Dry Skin vs Dehydrated Skin: The Difference That Changes What You Buy',
    excerpt:
      'They sound the same and need opposite things. How to tell whether your skin lacks oil or water — and why getting it wrong keeps skin uncomfortable.',
    date: '2026-07-18',
    minutes: 6,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'People use "dry" and "dehydrated" interchangeably, but in skincare they mean two different things that call for different solutions — which is why so many people keep buying products that never quite fix the discomfort. Learning to tell them apart is one of the more useful distinctions in everyday skincare.',
        'This is general education; if your skin is persistently uncomfortable, cracking, or you suspect a condition like eczema, a professional can give you a proper assessment.'] },
      { h: 'Dry skin lacks oil', p: [
        'Dry skin is a skin type: skin that produces less oil (sebum) than it needs, often lifelong and influenced by genetics, age and environment. Because it lacks oil, it tends to feel rough, flaky, and tight all over, and may look dull. It is a matter of what your skin produces, and it usually needs richer, more emollient and occlusive moisturisers to replace the oils it does not make enough of.',
        'People with genuinely dry skin generally do better avoiding harsh, stripping cleansers and leaning into creamier, more nourishing textures, especially in cold or dry weather.'] },
      { h: 'Dehydrated skin lacks water', p: [
        'Dehydrated skin is a temporary condition, not a type, and any skin — even oily skin — can be dehydrated. It means the skin is short of water rather than oil, and it can result from weather, over-exfoliation, harsh products, or a damaged barrier. Dehydrated skin can feel tight and look a little lacklustre or show fine surface lines, yet still be oily elsewhere, which confuses people who assume oiliness rules out a hydration problem.',
        'Because the issue is water, dehydrated skin benefits from humectant ingredients that draw in and hold moisture, a gentler routine, and often simply doing less — since over-treating is a frequent cause.'] },
      { h: 'Why getting it right matters', p: [
        'The distinction matters because the fixes differ. Treating dehydrated, oily skin with heavy oils can feel greasy and clog pores without solving the water problem; treating genuinely dry skin with only a light water-based product may never provide the oils it lacks. Many people cycle through products that address the wrong deficit and conclude that "nothing works", when the real issue is a mismatch.',
        'A simple approach: if your skin is oil-deficient all over and lifelong, think dry and reach for richer moisturisers; if it is temporarily tight, possibly alongside oiliness, think dehydrated and prioritise gentle hydration and a calmer routine. And if you are unsure or uncomfortable, a professional can settle it quickly.'] },
    ],
  },
  {
    slug: 'exfoliation-how-often',
    category: 'routine',
    title: 'Exfoliation: How Much Is Helpful, and How Much Is Too Much',
    excerpt:
      'Exfoliation can smooth and brighten — or wreck your skin barrier. The difference between physical and chemical exfoliants, and how to avoid the most common mistake.',
    date: '2026-07-20',
    minutes: 6,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'Exfoliation is one of the most oversold and overused steps in skincare. Done in moderation it can genuinely help skin look smoother and more even; done too often — which is extremely common — it is one of the fastest ways to damage the skin barrier and create the very problems people were trying to fix.',
        'This is general information; if your skin is irritated, reactive or you have a condition, get personalised guidance rather than following a generic frequency.'] },
      { h: 'Physical vs chemical exfoliation', p: [
        'There are two broad approaches. Physical exfoliation uses friction — scrubs, brushes, grainy cleansers — to slough off surface cells. Chemical exfoliation uses acids (such as alpha- and beta-hydroxy acids) to loosen the bonds between dead cells so they shed more easily. Chemical exfoliants are often gentler and more even than harsh scrubs, which can cause micro-tears, though strong acids used too often carry their own risk of irritation.',
        'Neither is inherently better; both can help in moderation and both can harm in excess. Gentle, well-formulated options used sparingly are the goal, whichever type you choose.'] },
      { h: 'The over-exfoliation trap', p: [
        'The single most common exfoliation mistake is doing it too frequently in pursuit of ever-smoother skin. Over-exfoliation strips the barrier, leading to redness, stinging, tightness, flaking and heightened sensitivity — signs people often misread as needing more exfoliation, which deepens the damage. It is a self-reinforcing spiral that leaves skin worse than if it had never been exfoliated at all.',
        'Most people need far less exfoliation than they think. For many, once or twice a week is plenty, and some skin does perfectly well with very little. There is no benefit to daily aggressive exfoliation, and considerable risk.'] },
      { h: 'A sensible approach', p: [
        'Start low and infrequent, watch how your skin responds over a couple of weeks, and only increase if your skin is clearly tolerating it well. Never combine aggressive exfoliation with other strong actives all at once, and always keep sunscreen in the routine, since freshly exfoliated skin can be more sun-sensitive. If your skin becomes red, tight or stinging, that is a signal to stop and let the barrier recover, not to push harder.',
        'Exfoliation is a refinement, not a foundation. The basics — gentle cleansing, moisturising and sun protection — do the heavy lifting, and a little occasional exfoliation is the polish on top, valuable only when it stays gentle and restrained.'] },
    ],
  },
  {
    slug: 'anti-ageing-realistic',
    category: 'concerns',
    title: 'Anti-Ageing Skincare: What Genuinely Helps, and What Is Just Hope in a Jar',
    excerpt:
      'The anti-ageing aisle sells miracles; the evidence supports a short list. What actually slows visible ageing, and the realistic limits of any cream.',
    date: '2026-07-22',
    minutes: 7,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'No corner of skincare is more crowded with extravagant promises than anti-ageing. Jars costing a fortune promise to erase years, reverse time and rebuild skin — and most of the promises far outrun the evidence. The honest picture is more modest, but it is also genuinely useful, because a short list of things really does help.',
        'This is educational information, not medical advice; procedures and prescription treatments are matters for qualified professionals.'] },
      { h: 'What genuinely helps', p: [
        'The best-supported anti-ageing step is not a cream at all: it is sun protection. Since a large share of visible skin ageing is cumulative UV damage, daily broad-spectrum sunscreen does more to preserve skin over the years than any repair product. After that, retinoids have the strongest evidence among topical ingredients for gradually improving texture and fine lines over months. A good moisturiser keeps skin hydrated and looking plumper and healthier in the near term. Antioxidants like vitamin C offer modest supporting benefits.',
        'That is close to the whole evidence-based list. It is short, largely affordable, and unglamorous — sunscreen, a retinoid, a moisturiser — and it outperforms the vast majority of expensive "miracle" products.'] },
      { h: 'The realistic limits', p: [
        'It is worth being clear-eyed about what topical products cannot do. Creams work on the surface and outer layers of skin; they cannot rebuild deep structural changes, remove deep folds, or truly turn back the clock. Claims of dramatic reversal are marketing, and the higher the price and the bolder the promise, the more scepticism is warranted. Much of the cost of luxury anti-ageing products buys packaging and prestige, not superior results.',
        'Ageing is also natural and universal, and framing it as a problem to be defeated sells a lot of products while making people feel worse. Skincare can keep skin healthy and slow some visible changes; it cannot stop time, and any product that claims otherwise is selling hope in a jar.'] },
      { h: 'A sensible anti-ageing routine', p: [
        'The practical routine follows the evidence: sunscreen every morning without fail, a moisturiser suited to your skin, and — if you want to target fine lines and texture — a retinoid introduced slowly at night, with patience measured in months. That is a genuinely effective anti-ageing regimen, and it need not be expensive.',
        'For anything beyond what good skincare offers — significant concerns, or an interest in professional procedures — a dermatologist can advise on options and their real risks and benefits. But for most people, the boring, affordable basics, done consistently over years, are the honest answer the marketing tries to complicate.'] },
    ],
  },
  {
    slug: 'reading-ingredient-labels',
    category: 'myths',
    title: 'How to Read a Skincare Label Without Being Fooled',
    excerpt:
      'Ingredient lists are informative and marketing claims mostly are not. How to read what a product actually contains, and the buzzwords that mean nothing.',
    date: '2026-07-24',
    minutes: 6,
    author: 'The Lie.skin Desk',
    sections: [
      { h: '', p: [
        'The front of a skincare product is advertising; the back is information. Learning to glance past the promises on the label and read the ingredient list instead is a quiet superpower that saves money and protects skin, because it lets you judge a product by what is in it rather than by what it claims.',
        'This is general guidance, not a substitute for professional advice on specific ingredients or reactions.'] },
      { h: 'Order tells you a lot', p: [
        'Ingredients are generally listed in order of concentration, from most to least, at least for the higher-percentage ingredients. That order is revealing: if a product boasts about a star ingredient that appears near the very end of a long list, it is present in a token amount, and the marketing is running ahead of the formula. Water, basic emollients and thickeners usually dominate the top of the list, which is normal.',
        'You do not need to recognise every chemical name — many are simply the technical terms for common, safe ingredients. The useful skill is spotting whether a heavily-promoted "hero" ingredient is actually present in a meaningful position, or is just there for the label.'] },
      { h: 'The buzzwords that mean nothing', p: [
        'Many prominent claims are unregulated marketing terms with no fixed meaning. "Natural", "clean", "chemical-free" (everything is chemicals, including water), "dermatologist-approved" without context, and "clinically proven" without saying what was proven or how — these sound reassuring and tell you almost nothing. They are designed to signal quality without committing to anything measurable.',
        'A few label terms are more useful. "Non-comedogenic" suggests a product is formulated to be less likely to clog pores, and "fragrance-free" or "for sensitive skin" can matter for reactive skin, since fragrance is a common irritant. But treat glossy virtue-words with the scepticism they deserve.'] },
      { h: 'A practical way to shop', p: [
        'Put it together into a simple habit. Decide what your skin actually needs — a gentle cleanser, a suitable moisturiser, sunscreen, perhaps one targeted active — then turn products over and read the back. Check that any ingredient you are buying the product for is meaningfully present, watch for fragrance if your skin is sensitive, and ignore the front-of-pack theatre. Price and prestige are not on the ingredient list for a reason.',
        'Reading labels will not make you a chemist, and you do not need to be one. It simply moves your decision from the marketing department\'s claims to the formula\'s reality — and that shift alone leads to better, cheaper, kinder choices for your skin.'] },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export function getArticlesByCategory(cat: string): Article[] {
  return ARTICLES.filter((a) => a.category === cat).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Batch 2 merges into the same library; all lists sort by date.
ARTICLES.push(...ARTICLES_BATCH2);
