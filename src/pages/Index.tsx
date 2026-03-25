import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Brain, ShieldCheck, Star, Scan, BadgeAlert, Sparkles, Droplets, Waves, Shield, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AbstractAiImage } from "@/components/ui/abstract-ai-image";
import drJackie from "@/assets/dr-jackie.jpg";
import productsHero from "@/assets/products-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const services = [
  { icon: Scan, title: "AI Skin Analysis", desc: "Upload a photo and get an instant, AI-powered breakdown of your skin health.", link: "/skin-analysis" },
  { icon: Brain, title: "Smart Routines", desc: "Personalized morning and night routines built around your unique skin profile.", link: "/skin-analysis" },
  { icon: Calendar, title: "Expert Consults", desc: "Book a virtual appointment with Dr. Jackie for personalized treatment plans.", link: "/consult" },
  { icon: ShieldCheck, title: "Rx Products", desc: "Prescription-strength skincare available after your consultation.", link: "/shop" },
];

const testimonials = [
  { name: "Sarah M.", text: "The AI analysis was incredibly accurate. My skin has never looked better since following the personalized routine.", rating: 5 },
  { name: "Priya K.", text: "Dr. Jackie's consultation changed everything for me. Finally a dermatologist who actually listens.", rating: 5 },
  { name: "Emily R.", text: "I love that I can track my skin journey over time. The before/after comparison keeps me motivated.", rating: 5 },
];

const concernTiles = [
  { label: "Acne", icon: Waves },
  { label: "Pigmentation", icon: Sparkles },
  { label: "Aging", icon: ShieldCheck },
  { label: "Sensitivity", icon: Droplets },
];

const diagnosticHighlights = [
  {
    title: "Precision Matching",
    desc: "We don't just guess; we calculate the molecular fit for your skin.",
    icon: SearchCheck,
  },
  {
    title: "Medical Oversight",
    desc: "Every AI insight is reviewed and approved by board-certified dermatologists.",
    icon: Shield,
  },
];

const essentials = [
  {
    title: "Molecular Repair Serum",
    desc: "Concentrated formula for deep epidermal hydration.",
    price: "$64.00",
    background: "bg-[radial-gradient(circle_at_30%_20%,#cfa7ef_0%,#a46dc5_38%,#6b4b8f_72%,#3c2757_100%)]",
    type: "dropper",
  },
  {
    title: "Ceramide Barrier Cream",
    desc: "Deeply nourishing lipids to restore skin resilience.",
    price: "$58.00",
    background: "bg-[radial-gradient(circle_at_40%_25%,#b3ecf4_0%,#79ccd7_34%,#2f8b96_70%,#17505b_100%)]",
    type: "jar",
  },
  {
    title: "Invisible Shield SPF 50",
    desc: "Weightless broad-spectrum protection for all skin types.",
    price: "$42.00",
    background: "bg-[radial-gradient(circle_at_35%_20%,#7ed6e3_0%,#49a8bb_34%,#1e6e7f_68%,#124452_100%)]",
    type: "tube",
  },
];

const membershipPlans = [
  {
    title: "TID Basic",
    desc: "Monthly essentials delivered to your door.",
    price: "$49",
    cta: "Select Basic",
    featured: false,
    perks: ["Personalized 3-Step Routine", "Quarterly AI Skin Scan", "Exclusive Ingredient Guides"],
  },
  {
    title: "Concierge",
    desc: "Unlimited access to professional guidance.",
    price: "$129",
    cta: "Start Concierge",
    featured: true,
    perks: ["Everything in Basic", "Monthly 1:1 Video Consult", "Priority AI Analysis (24h)", "Custom Formulated Actives"],
  },
];

const Index = () => {
  const [selectedMembershipPlan, setSelectedMembershipPlan] = useState("Concierge");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden gradient-hero pt-16">
        <div className="container mx-auto max-w-[1440px] px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 xl:grid-cols-[0.92fr_1.08fr]">
            <motion.div initial="hidden" animate="visible" className="max-w-xl space-y-8">
              <motion.h1
                variants={fadeUp}
                custom={0}
                className="font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
              >
                Feel Good
                <br />
                About
                <br />
                <span className="text-gradient">Every</span>
                <br />
                <span className="text-gradient">Ingredient</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="max-w-lg text-lg leading-9 text-muted-foreground">
                Personalized skincare powered by science, ingredients, and AI. Experience clinical expertise from the comfort of your home.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4">
                <Link to="/skin-analysis">
                  <Button size="lg" className="h-14 rounded-full bg-primary px-8 text-base text-primary-foreground shadow-elevated hover:bg-primary/90">
                    Start Skin Analysis
                  </Button>
                </Link>
                <Link to="/consult">
                  <Button size="lg" className="h-14 rounded-full bg-primary/20 px-8 text-base text-primary hover:bg-primary/25">
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2.2rem] bg-white p-4 shadow-[0_30px_80px_rgba(79,81,135,0.18)]">
                <div className="relative overflow-hidden rounded-[1.7rem]">
                  <img
                    src={productsHero}
                    alt="Ingredient-focused skincare products"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.1)_0%,rgba(22,22,22,0.2)_100%)]" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-5 left-5 rounded-[1.4rem] bg-white/88 px-5 py-4 shadow-[0_18px_40px_rgba(79,81,135,0.16)] backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BadgeAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      AI Diagnostic Active
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      98.4% Accuracy in Ingredient Matching
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              What's your biggest skin concern?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Select your primary focus area to begin your ingredient journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {concernTiles.map((item) => (
              <Link
                key={item.label}
                to="/skin-analysis"
                className="rounded-[1.75rem] bg-white px-6 py-7 text-center shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-heading text-xl font-semibold text-foreground">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="grid items-center gap-14 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex justify-center xl:justify-start">
              <div className="w-full max-w-[430px] rounded-[2.4rem] bg-[#ececf4] p-8 shadow-[0_25px_70px_rgba(86,91,140,0.16)]">
                <div className="flex items-center justify-between">
                  <p className="font-heading text-xl font-semibold text-foreground">Skin Analysis Result</p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    AI Verified
                  </span>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-primary/25 bg-white">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-primary">78</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Score</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { label: "Upload", width: "95%" },
                    { label: "Analysis", width: "92%" },
                    { label: "Results", width: "74%" },
                  ].map((item, index) => (
                    <div key={item.label} className="rounded-[1.3rem] bg-white px-4 py-4 shadow-soft">
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {index === 0 ? <ArrowRight className="h-4 w-4 rotate-90" /> : index === 1 ? <Waves className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                        </div>
                        <div className="h-2 flex-1 rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: item.width }} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Advanced AI
                <br />
                Diagnostic In Seconds
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-muted-foreground">
                Our proprietary algorithm analyzes your skin's texture, pores, and tone from a simple selfie. We cross-reference your results with over 15,000 clinically studied ingredients to curate your perfect routine.
              </p>

              <div className="mt-10 space-y-6">
                {diagnosticHighlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 max-w-xl text-base leading-8 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-hero py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="grid items-center gap-14 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="flex justify-center xl:justify-start">
              <div className="w-full max-w-[450px] overflow-hidden rounded-[2rem] bg-[#d8d0f3] shadow-[0_24px_65px_rgba(96,92,158,0.16)]">
                <img
                  src={drJackie}
                  alt="Dr. Jackie Levin"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Meet Your Derm
              </p>
              <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Dr. Jackie Levin
              </h2>
              <p className="mt-8 text-lg leading-10 text-muted-foreground">
                Board-certified dermatologist with over 15 years of experience in clinical and cosmetic dermatology. Dr. Jackie founded The Ingredient Derm to make expert skincare accessible to everyone.
              </p>
              <p className="mt-8 text-lg leading-10 text-muted-foreground">
                Her philosophy is simple: understand what goes on your skin. Every product recommendation is backed by peer-reviewed science and tailored to your unique skin profile.
              </p>
              <div className="mt-10">
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="h-14 rounded-full border-white bg-white px-8 text-base text-foreground shadow-soft hover:bg-white/95"
                  >
                    Learn More About Dr. Jackie
                    <ArrowRight size={18} className="ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-hero py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Visible Transformation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Real patients, real ingredients, real results over 12 weeks.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[1120px] overflow-hidden rounded-[2.4rem] bg-white p-2 shadow-[0_25px_70px_rgba(79,81,135,0.14)]">
            <div className="relative grid min-h-[420px] md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2rem_0_0_2rem]">
                <AbstractAiImage variant="skin-before" />
                <span className="absolute left-4 top-4 rounded-full bg-[#5b3228] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden rounded-[0_2rem_2rem_0]">
                <AbstractAiImage variant="skin-after" />
                <span className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                  After Week 12
                </span>
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(79,81,135,0.18)]">
                <div className="flex flex-col items-center justify-center text-primary">
                  <ArrowRight className="h-4 w-4 -rotate-90" />
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </div>
              </div>
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/60" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Your Personal Dermatologist, Every Month
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Continuous care designed to evolve with your skin's needs.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[980px] gap-8 lg:grid-cols-2">
            {membershipPlans.map((plan) => (
              <article
                key={plan.title}
                onClick={() => setSelectedMembershipPlan(plan.title)}
                className={`cursor-pointer rounded-[2.4rem] px-8 py-8 shadow-soft transition-transform hover:-translate-y-1 ${
                  selectedMembershipPlan === plan.title
                    ? "bg-[linear-gradient(135deg,#6e64d7_0%,#958cf0_100%)] text-white shadow-[0_30px_80px_rgba(111,100,216,0.26)]"
                    : "bg-[#f3f4fa] text-foreground"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-4xl font-semibold">{plan.title}</h3>
                    <p className={`mt-3 text-base ${selectedMembershipPlan === plan.title ? "text-white/75" : "text-muted-foreground"}`}>
                      {plan.desc}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      selectedMembershipPlan === plan.title ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {plan.featured ? "Most Popular" : "Selected Plan"}
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <p className="text-5xl font-bold">{plan.price}</p>
                  <p className={`pb-1 text-lg ${selectedMembershipPlan === plan.title ? "text-white/75" : "text-muted-foreground"}`}>/mo</p>
                </div>

                <div className="mt-8 space-y-5">
                  {plan.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <span className={`text-lg ${selectedMembershipPlan === plan.title ? "text-white" : "text-primary"}`}>+</span>
                      <span className={`text-base ${selectedMembershipPlan === plan.title ? "text-white/88" : "text-foreground/85"}`}>{perk}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/membership/payment?plan=${plan.featured ? "concierge" : "basic"}`}
                  onClick={(event) => event.stopPropagation()}
                  className={`mt-10 flex h-14 w-full items-center justify-center rounded-full border text-base font-medium transition ${
                    selectedMembershipPlan === plan.title
                      ? "border-white bg-white text-primary hover:bg-white/92"
                      : "border-primary bg-transparent text-primary hover:bg-primary/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Evidence-Based
              <br />
              Skincare Education
            </h2>
            <Link to="/learn" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Read the Journal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                label: "Medical Insight",
                title: "Understanding Hormonal Acne: A Dermatologist's Guide",
                variant: "journal-blue" as const,
              },
              {
                label: "Ingredient Library",
                title: "The Retinol Handbook: Concentration, Frequency, and Care",
                variant: "journal-gold" as const,
              },
            ].map((item) => (
              <article key={item.title}>
                <div className="h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
                  <AbstractAiImage variant={item.variant} />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {item.label}
                </p>
                <h3 className="mt-3 font-heading text-4xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Curated Essentials
            </h2>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {essentials.map((item) => (
              <article key={item.title} className="group">
                <div className={`relative h-[360px] overflow-hidden rounded-[2rem] p-4 shadow-soft ${item.background}`}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f4d257] px-3 py-1.5 text-[11px] font-semibold text-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Dr. Jackie Approved
                  </span>

                  {item.type === "dropper" ? (
                    <div className="absolute bottom-8 left-1/2 h-52 w-24 -translate-x-1/2 rounded-[1.4rem] bg-white shadow-[0_25px_45px_rgba(46,30,73,0.26)]" />
                  ) : item.type === "jar" ? (
                    <div className="absolute bottom-12 left-1/2 h-28 w-32 -translate-x-1/2 rounded-[1.4rem_1.4rem_2rem_2rem] bg-white shadow-[0_25px_45px_rgba(11,52,67,0.28)]" />
                  ) : (
                    <div className="absolute bottom-8 left-1/2 h-56 w-24 -translate-x-1/2 rounded-[1.2rem_1.2rem_0.8rem_0.8rem] bg-white shadow-[0_25px_45px_rgba(11,52,67,0.28)]" />
                  )}

                  {item.type === "dropper" ? (
                    <>
                      <div className="absolute bottom-[16.2rem] left-1/2 h-8 w-8 -translate-x-1/2 rounded-md bg-[#d8d5de]" />
                      <div className="absolute bottom-[17.8rem] left-1/2 h-10 w-2 -translate-x-1/2 rounded-full bg-[#73532e]" />
                    </>
                  ) : item.type === "jar" ? (
                    <div className="absolute bottom-[8.6rem] left-1/2 h-8 w-28 -translate-x-1/2 rounded-full bg-[#f6f7f7]" />
                  ) : (
                    <div className="absolute bottom-10 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-[#e6e8eb]" />
                  )}
                </div>

                <h3 className="mt-6 font-heading text-3xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">{item.desc}</p>
                <p className="mt-4 text-2xl font-bold text-primary">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold text-foreground lg:text-5xl">
              Your Skin, Understood
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link to={s.link} className="group block h-full glass-card p-8 transition-all hover:shadow-elevated">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Loved by Thriving Skin
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-[2rem] bg-white p-8 shadow-soft"
              >
                <div className="mb-5 flex gap-1 text-[#b28f17]">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-current text-current" />
                  ))}
                </div>
                <p className="min-h-[110px] text-lg italic leading-8 text-foreground/80">"{t.text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <p className="font-heading text-xl font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto max-w-[1440px] px-4 text-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl space-y-6"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              Start your skin journey
              <br />
              today.
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg leading-9 text-muted-foreground">
              Discover the ingredients your skin has been waiting for with our AI diagnostic.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
              <Link to="/skin-analysis">
                <Button size="lg" className="h-14 rounded-full bg-primary px-10 shadow-elevated hover:bg-primary/90">
                  Start Skin Analysis Now
                </Button>
              </Link>
              <Link to="/consult">
                <Button size="lg" className="h-14 rounded-full bg-primary/20 px-10 text-primary hover:bg-primary/25">
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
