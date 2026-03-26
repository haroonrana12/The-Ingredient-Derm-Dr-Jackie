import { motion } from "framer-motion";
import { BadgeCheck, Beaker, Leaf, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AbstractAiImage } from "@/components/ui/abstract-ai-image";
import drJackie from "@/assets/dr-jackie.png";
import { useParams } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const productContent = {
  "niacinamide-glow-drop": {
    badge: "Dr. Jackie Approved",
    bestFor: "Best For Acne/Oily Skin",
    titleTop: "Niacinamide",
    titleAccent: "Glow Drop",
    description: "Clinically backed formula for acne-prone skin. A potent concentrate designed to balance, brighten, and clarify.",
    price: "$48.00",
    ingredientLine:
      "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.",
    mechanismA: "Niacinamide at a 10% concentration stabilizes the skin barrier and restricts excess sebum flow, preventing the follicular clogging that leads to breakouts.",
    mechanismB: "Encapsulated Salicylic Acid works in tandem to dissolve keratin plugs and neutralize blemish-causing bacteria without the irritation of traditional acids.",
    am: "Apply 2-3 drops to cleansed skin. Follow with a moisturizer and a broad-spectrum sunscreen (SPF 30+). Provides all-day shine control.",
    pm: "Apply to cleansed skin before heavier creams. Focus on areas of congestion like the T-zone and chin to calm inflammation overnight.",
    quote:
      "I formulated the Glow Drop because I saw too many patients stripping their skin with harsh actives in an attempt to cure acne.",
  },
  "molecular-repair-serum": {
    badge: "Dr. Jackie Approved",
    bestFor: "Best For Dry/Dehydrated Skin",
    titleTop: "Molecular Repair",
    titleAccent: "Serum",
    description: "A deeply replenishing hydration serum designed to reinforce barrier resilience and restore bounce to stressed skin.",
    price: "$64.00",
    ingredientLine:
      "Aqua (Water), Glycerin, Panthenol, Betaine, Sodium Hyaluronate, Polyglutamic Acid, Ceramide NP, Allantoin, Phenoxyethanol, Ethylhexylglycerin.",
    mechanismA: "Low and high molecular humectants pull water into the epidermis while panthenol reduces transepidermal water loss for immediate comfort.",
    mechanismB: "Barrier-supporting ceramides and soothing agents help minimize tightness, flaking, and post-treatment sensitivity over time.",
    am: "Apply 2 pumps after cleansing to damp skin. Layer beneath moisturizer to lock in hydration throughout the day.",
    pm: "Use as your first treatment serum at night to cushion active ingredients and support overnight recovery.",
    quote:
      "Molecular Repair Serum was built for patients whose skin feels dehydrated, reactive, and constantly overwhelmed by too many steps.",
  },
  "ceramide-barrier-cream": {
    badge: "Dr. Jackie Approved",
    bestFor: "Best For Barrier Repair",
    titleTop: "Ceramide Barrier",
    titleAccent: "Cream",
    description: "A cushion-rich moisturizer engineered to strengthen the skin barrier, reduce sensitivity, and seal in lasting comfort.",
    price: "$58.00",
    ingredientLine:
      "Aqua (Water), Caprylic/Capric Triglyceride, Glycerin, Ceramide NP, Ceramide AP, Cholesterol, Fatty Acids, Squalane, Allantoin, Phenoxyethanol.",
    mechanismA: "Multi-ceramide lipids replenish depleted barrier reserves and reduce water loss, improving softness and resilience.",
    mechanismB: "Cholesterol and fatty acids mimic the skin's natural composition, allowing damaged skin to recover with less irritation.",
    am: "Massage a pea-sized amount over serum to create a breathable seal that keeps moisture in all day.",
    pm: "Apply generously as your final step at night to support overnight repair and reduce morning tightness.",
    quote:
      "This barrier cream was created for patients who need real recovery, not just temporary softness that disappears by morning.",
  },
  "invisible-shield-spf-50": {
    badge: "Dr. Jackie Approved",
    bestFor: "Best For Daily Protection",
    titleTop: "Invisible Shield",
    titleAccent: "SPF 50",
    description: "A weightless broad-spectrum mineral sunscreen that protects, calms, and blends seamlessly without a white cast.",
    price: "$42.00",
    ingredientLine:
      "Zinc Oxide, Aqua (Water), Squalane, C12-15 Alkyl Benzoate, Niacinamide, Bisabolol, Silica, Tocopherol, Phenoxyethanol, Ethylhexylglycerin.",
    mechanismA: "Micronized zinc oxide provides reliable UV protection while niacinamide helps support tone and visible clarity.",
    mechanismB: "Squalane and soothing botanicals counter the dryness often associated with daily SPF, keeping skin comfortable and balanced.",
    am: "Apply generously as the final step of your morning routine, 15 minutes before sun exposure.",
    pm: "No night use required. Cleanse thoroughly in the evening to remove sunscreen and daily buildup.",
    quote:
      "I wanted an SPF patients would actually wear every day, because the best sunscreen is the one that feels invisible on skin.",
  },
} as const;

const ProductDetail = () => {
  const { slug = "niacinamide-glow-drop" } = useParams();
  const product = productContent[slug as keyof typeof productContent] ?? productContent["niacinamide-glow-drop"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-16">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="grid items-start gap-10 xl:grid-cols-[0.92fr_1.08fr]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2.4rem] bg-[radial-gradient(circle_at_45%_30%,rgba(63,178,211,0.38),rgba(9,24,34,0.96)_50%,#061017_100%)] p-4 shadow-[0_34px_90px_rgba(7,18,28,0.34)]"
              >
                <div className="relative min-h-[720px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(92,214,236,0.16),transparent_28%),linear-gradient(180deg,#06141d_0%,#071822_100%)]">
                  <div className="absolute right-6 top-6 rounded-full bg-white/85 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary shadow-soft">
                    <span className="inline-flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4" />
                      Dermatologist Recommended
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-[12%] h-[52%] w-[34%] -translate-x-1/2 rounded-[45%_45%_35%_35%] bg-[radial-gradient(circle_at_52%_18%,rgba(240,251,255,0.92),rgba(181,223,232,0.74)_28%,rgba(125,178,191,0.34)_56%,rgba(67,112,126,0.06)_100%)] blur-[0.8px]" />
                  <div className="absolute left-1/2 top-[21%] h-[18%] w-[12%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_48%_30%,rgba(237,247,252,0.95),rgba(174,209,220,0.62)_42%,rgba(61,95,108,0.12)_100%)]" />
                  <div className="absolute left-[44%] top-[37%] h-[16%] w-[8%] rotate-[18deg] rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(227,243,248,0.9),rgba(135,179,193,0.52)_50%,rgba(55,93,107,0.08)_100%)]" />
                  <div className="absolute right-[43%] top-[39%] h-[14%] w-[7%] rotate-[-16deg] rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(227,243,248,0.88),rgba(135,179,193,0.48)_52%,rgba(55,93,107,0.08)_100%)]" />
                  <div className="absolute left-1/2 bottom-[22%] h-10 w-44 -translate-x-1/2 rounded-full bg-[#69bbcb]/28 blur-md" />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-[58px] font-bold uppercase tracking-[0.08em] text-[#4f9eb1]/38 [text-shadow:0_10px_30px_rgba(53,140,166,0.25)]">
                      Safe For Work
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" animate="visible" className="max-w-3xl">
                <motion.div variants={fadeUp} custom={0} className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-muted px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/75">
                    {product.badge}
                  </span>
                  <span className="rounded-full bg-muted px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/75">
                    {product.bestFor}
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={1} className="mt-6 font-heading text-6xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-7xl">
                  {product.titleTop}
                  <br />
                  <span className="text-gradient">{product.titleAccent}</span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={2} className="mt-8 max-w-2xl text-[1.95rem] leading-[1.7] text-muted-foreground sm:text-[2rem]">
                  {product.description}
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap items-center gap-4 text-lg">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                    <Star className="h-5 w-5 fill-current opacity-40" />
                  </div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span className="text-muted-foreground underline underline-offset-4">850 Clinical Reviews</span>
                </motion.div>

                <motion.div variants={fadeUp} custom={4} className="mt-10 space-y-4">
                  <Button className="h-16 w-full max-w-[560px] rounded-[1.2rem] bg-[linear-gradient(135deg,#6e64d7_0%,#958cf0_100%)] text-xl text-primary-foreground shadow-elevated hover:opacity-95">
                    Add to Cart - {product.price}
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 w-full max-w-[560px] rounded-[1.2rem] border-0 bg-white text-xl text-primary shadow-soft hover:bg-white/90"
                  >
                    Buy Now
                  </Button>
                  <p className="max-w-[560px] text-center text-sm text-muted-foreground">
                    Free shipping on orders over $50 - 30-day clinical guarantee
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} custom={5} className="mt-10 grid max-w-[620px] gap-8 border-t border-border pt-10 sm:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Beaker className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Lab Tested</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Vegan</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">PH Balanced</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="grid items-center gap-10 xl:grid-cols-[1fr_0.95fr]">
              <div className="max-w-3xl">
                <h2 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                  The Synergistic
                  <br />
                  Mechanism of Action
                </h2>

                <div className="mt-10 space-y-10">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Beaker className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold text-foreground">Pore Regulation</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-9 text-muted-foreground">
                        {product.mechanismA}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold text-foreground">Microbial Defense</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-9 text-muted-foreground">
                        {product.mechanismB}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.2rem] bg-white p-4 shadow-[0_24px_70px_rgba(79,81,135,0.14)]">
                <div className="h-[420px] overflow-hidden rounded-[1.7rem] grayscale">
                  <AbstractAiImage variant="lab-blue" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                Full Ingredient Transparency
              </h2>
              <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-muted-foreground">
                {product.ingredientLine}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {["Vegan", "Cruelty-Free", "Fragrance-Free", "Paraben-Free"].map((item) => (
                  <span
                    key={item}
                    className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-24 grid items-center gap-12 xl:grid-cols-[1fr_0.95fr]">
              <div>
                <h2 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Clinical Application
                </h2>

                <div className="mt-10 space-y-10">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold uppercase text-primary-foreground">
                      AM
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold text-foreground">Morning Routine</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-9 text-muted-foreground">
                        {product.am}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold uppercase text-primary-foreground">
                      PM
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold text-foreground">Night Routine</h3>
                      <p className="mt-3 max-w-2xl text-lg leading-9 text-muted-foreground">
                        {product.pm}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.4rem] bg-white/70 p-6 shadow-[0_24px_70px_rgba(79,81,135,0.12)]">
                <div className="relative h-[540px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_52%_46%,rgba(183,214,160,0.36),rgba(20,28,18,0.92)_30%,#050805_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,220,165,0.14),transparent_26%)]" />
                  <div className="absolute left-1/2 top-1/2 h-[42%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(170,209,151,0.5),rgba(67,88,54,0.32)_48%,transparent_78%)] blur-sm" />
                  <div className="absolute left-1/2 top-1/2 h-[2px] w-[18%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] bg-[#5e6d54]/75" />
                  <div className="absolute left-[46%] top-[38%] h-[18%] w-[2px] rotate-[14deg] bg-[#58674f]/72" />
                  <div className="absolute left-[56%] top-[41%] h-[16%] w-[2px] rotate-[-18deg] bg-[#58674f]/72" />
                  <div className="absolute left-[41%] top-[48%] h-[12%] w-[2px] rotate-[36deg] bg-[#56614e]/70" />
                  <div className="absolute left-[60%] top-[50%] h-[14%] w-[2px] rotate-[-36deg] bg-[#56614e]/70" />
                  <div className="absolute left-[48%] top-[56%] h-[12%] w-[2px] rotate-[-22deg] bg-[#51604a]/68" />
                  <div className="absolute left-[54%] top-[58%] h-[11%] w-[2px] rotate-[26deg] bg-[#51604a]/68" />
                  <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1d2025] py-20 text-white">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">Real Results</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-white/60">
                Case Study: 24-year-old female, 4 weeks of consistent use.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-[920px] gap-6 lg:grid-cols-2">
              <div className="relative h-[520px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_48%_34%,rgba(130,115,91,0.2),rgba(30,24,18,0.82)_28%,#0f0d0b_100%)]">
                <div className="absolute left-[18%] top-[12%] h-[64%] w-[30%] border-[10px] border-[#26211b] bg-[linear-gradient(180deg,rgba(46,40,32,0.88),rgba(16,14,12,0.98))]" />
                <div className="absolute left-[20.8%] top-[15%] h-[58%] w-[24%] border border-[#8f836f]/35 bg-[radial-gradient(circle_at_52%_42%,rgba(206,186,160,0.18),rgba(53,46,38,0.92)_56%,#171411_100%)]" />
                <div className="absolute left-[28%] top-[15%] h-[58%] w-[2px] bg-[#8b816d]/35" />
                <div className="absolute left-[18%] top-[44%] h-[2px] w-[30%] bg-[#5f5547]/35" />
                <div className="absolute left-[10%] bottom-[16%] h-[12%] w-[80%] bg-[linear-gradient(180deg,rgba(30,28,25,0.08),rgba(10,10,10,0.4))]" />
                <div className="absolute left-0 right-0 top-0 h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.24),rgba(0,0,0,0.42))]" />
                <span className="absolute bottom-5 left-5 rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Day 0
                </span>
              </div>

              <div className="relative h-[520px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_28%,rgba(63,157,255,0.2),rgba(14,28,60,0.9)_42%,#111a2f_100%)]">
                <div className="absolute left-1/2 top-[16%] h-[52%] w-[52%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.98),rgba(215,239,255,0.94)_42%,rgba(102,182,227,0.58)_66%,rgba(37,76,124,0.08)_100%)] shadow-[0_0_80px_rgba(132,208,255,0.22)]" />
                <div className="absolute left-1/2 top-[36%] h-[20%] w-[24%] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(167,225,255,0.95),rgba(84,160,198,0.9))] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]" />
                <div className="absolute left-[22%] top-[56%] h-[16%] w-[56%] bg-[linear-gradient(180deg,rgba(54,104,156,0.9),rgba(24,58,94,0.92))] [clip-path:polygon(0%_100%,14%_58%,28%_74%,40%_38%,58%_62%,74%_42%,100%_100%)]" />
                <div className="absolute bottom-[16%] left-[18%] h-[18%] w-[64%] bg-[linear-gradient(180deg,rgba(18,45,74,0.96),rgba(8,25,41,1))] [clip-path:polygon(0%_100%,8%_54%,16%_100%,24%_48%,32%_100%,40%_52%,48%_100%,56%_48%,64%_100%,72%_54%,80%_100%,88%_60%,96%_100%,100%_100%)]" />
                <p className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl font-light uppercase tracking-[0.12em] text-white/80">
                  After
                </p>
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-4xl uppercase tracking-[0.08em] text-[#9cd4f0]">Safe Work</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[#b9e6ff]">Safer Work</p>
                </div>
                <span className="absolute bottom-5 right-5 rounded-[0.7rem] bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                  Day 28
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="rounded-[2.4rem] bg-[#eef1f8] px-6 py-8 shadow-soft sm:px-10 sm:py-12">
              <div className="grid items-center gap-10 xl:grid-cols-[320px_1fr]">
                <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_10%,#50b9b4_0%,#2d8a89_42%,#1a5b64_100%)] shadow-[0_24px_50px_rgba(37,95,121,0.18)]">
                  <img
                    src={drJackie}
                    alt="Dr. Jackie Levin"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-6xl font-bold leading-none text-primary/90">"</p>
                  <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold italic leading-tight text-foreground sm:text-5xl">
                    {product.quote}
                  </h2>
                  <p className="mt-8 max-w-4xl text-lg leading-10 text-muted-foreground">
                    Most blemish-prone skin is actually compromised and inflamed. We don't need more aggression; we need better intelligence. The Glow Drop uses a medical-grade 10% Niacinamide to soothe while it works, ensuring you don't have to choose between clarity and hydration. It's the cornerstone of a healthy, long-term routine.
                  </p>

                  <div className="mt-10">
                    <p className="font-heading text-3xl font-semibold text-foreground">Dr. Jackie Levin, MD</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                      Board Certified Dermatologist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <h2 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Complete Your Routine
            </h2>

            <div className="mt-10 grid gap-8 xl:grid-cols-3">
              {[
                {
                  name: "Amino Acid Cleanser",
                  desc: "Gentle, pH-balanced wash for sensitive skin.",
                  cta: "+ Add - $24",
                  selected: false,
                  visual: (
                    <div className="relative h-[190px] w-full">
                      <div className="absolute left-1/2 top-8 h-28 w-20 -translate-x-1/2 rounded-[1.2rem] bg-[linear-gradient(180deg,#b9f7f3_0%,#80ded9_38%,#57b8bd_100%)] shadow-[0_18px_40px_rgba(88,182,189,0.22)]" />
                      <div className="absolute left-1/2 top-3 h-9 w-10 -translate-x-1/2 rounded-t-[0.8rem] bg-white" />
                      <div className="absolute left-[56%] top-2 h-5 w-9 rounded-full border-[4px] border-white border-l-transparent border-b-transparent" />
                      <div className="absolute left-1/2 top-[4.35rem] h-10 w-14 -translate-x-1/2 rounded-sm bg-white/70" />
                    </div>
                  ),
                },
                {
                  name: "Niacinamide Glow Drop",
                  desc: "Clinical pore-refining and brightening serum.",
                  cta: "In Cart",
                  selected: true,
                  visual: (
                    <div className="relative mx-auto h-[190px] w-[190px] overflow-hidden rounded-[1.8rem] bg-[radial-gradient(circle_at_50%_18%,rgba(70,211,255,0.26),rgba(11,16,25,0.98)_44%,#05070c_100%)] shadow-[0_20px_50px_rgba(15,21,35,0.3)]">
                      <div className="absolute left-1/2 top-[18%] h-[62%] w-[42%] -translate-x-1/2 rounded-[50%_50%_58%_58%] border-[4px] border-[#72d9ff] shadow-[0_0_30px_rgba(114,217,255,0.36)]" />
                      <div className="absolute left-1/2 top-[24%] h-[50%] w-[30%] -translate-x-1/2 rounded-[50%_50%_58%_58%] border-[4px] border-[#ff5577] shadow-[0_0_28px_rgba(255,85,119,0.28)]" />
                      <div className="absolute left-1/2 top-[36%] h-[22%] w-[15%] -translate-x-1/2 rounded-[50%_50%_58%_58%] bg-[radial-gradient(circle_at_50%_20%,#6b1024_0%,#5e0d1f_45%,#2d0813_100%)]" />
                    </div>
                  ),
                },
                {
                  name: "Mineral Defense SPF 50",
                  desc: "Weightless protection with zero white cast.",
                  cta: "+ Add - $32",
                  selected: false,
                  visual: (
                    <div className="relative h-[190px] w-full">
                      <div className="absolute left-1/2 top-7 h-28 w-16 -translate-x-1/2 rounded-[1.1rem_1.1rem_0.8rem_0.8rem] bg-[linear-gradient(180deg,#ffa92a_0%,#ff8f14_45%,#ef7412_100%)] shadow-[0_18px_40px_rgba(255,148,28,0.24)]" />
                      <div className="absolute left-1/2 top-[8.7rem] h-4 w-10 -translate-x-1/2 rounded-b-lg bg-[#f8d7a6]" />
                      <div className="absolute left-1/2 top-[4.35rem] h-8 w-9 -translate-x-1/2 rounded-full border border-white/50" />
                      <div className="absolute left-1/2 top-[4.95rem] h-0.5 w-4 -translate-x-1/2 bg-white/90" />
                    </div>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className={`relative rounded-[2rem] bg-white p-6 text-center shadow-soft ${
                    item.selected ? "border border-primary/25 shadow-[0_20px_60px_rgba(101,92,205,0.18)]" : ""
                  }`}
                >
                  {item.selected ? (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                      Selected
                    </span>
                  ) : null}

                  {item.visual}

                  <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-3 min-h-[64px] text-base leading-8 text-muted-foreground">{item.desc}</p>

                  <Button
                    variant={item.selected ? "default" : "outline"}
                    className={`mt-6 h-14 w-full rounded-[1rem] text-base ${
                      item.selected
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-0 bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {item.cta}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
