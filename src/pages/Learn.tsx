import { motion } from "framer-motion";
import { BookOpen, Beaker, ArrowRight, Search, Sparkles, ShieldCheck, Droplets, ScanFace, Waves, FlaskConical, SlidersHorizontal, GraduationCap, Wand2, Shield, FlaskRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AbstractAiImage } from "@/components/ui/abstract-ai-image";
import productsHero from "@/assets/products-hero.jpg";
import drJackie from "@/assets/dr-jackie.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const articles = [
  { title: "The Complete Guide to Retinol", category: "Ingredients", readTime: "8 min", excerpt: "Everything you need to know about retinol — when to start, how to use it, and what to expect." },
  { title: "SPF Myths Debunked", category: "Sun Protection", readTime: "5 min", excerpt: "Still confused about sunscreen? We break down the biggest myths backed by science." },
  { title: "Niacinamide: The All-Rounder", category: "Ingredients", readTime: "6 min", excerpt: "Why niacinamide belongs in every routine and how to pair it with your actives." },
  { title: "Building a Barrier-First Routine", category: "Routines", readTime: "7 min", excerpt: "Why barrier health is the foundation of great skin and how to build your routine around it." },
  { title: "Acne at 30+: What Changed?", category: "Conditions", readTime: "6 min", excerpt: "Adult acne is different from teenage acne. Here's how to treat it effectively." },
  { title: "Ingredient Interactions Cheat Sheet", category: "Ingredients", readTime: "4 min", excerpt: "Which actives play well together and which combinations to avoid." },
];

const ingredients = [
  { name: "Retinol", benefit: "Anti-aging, cell turnover" },
  { name: "Niacinamide", benefit: "Barrier, pores, brightening" },
  { name: "Hyaluronic Acid", benefit: "Deep hydration" },
  { name: "Vitamin C", benefit: "Antioxidant, brightening" },
  { name: "Salicylic Acid", benefit: "Exfoliation, acne" },
  { name: "Ceramides", benefit: "Barrier repair" },
];

const featuredTopics = [
  { title: "Acne", icon: Sparkles },
  { title: "Anti-Aging", icon: ShieldCheck },
  { title: "Pigmentation", icon: Droplets },
  { title: "Sensitive Skin", icon: ScanFace },
  { title: "Hair & Scalp", icon: Waves },
];

const editorPicks = [
  {
    title: "Hormonal Acne: Causes & Clinical Treatments",
    tag: "Acne Care",
    readTime: "8 min read",
    excerpt: "Understanding the endocrine system's impact on your complexion and the routines that actually help.",
    variant: "editor-acne" as const,
  },
  {
    title: "The Do-Not-Mix List: Skincare Conflicts",
    tag: "Ingredients",
    readTime: "12 min read",
    excerpt: "Why pairing Vitamin C and Retinol might be hindering your results and what to do instead.",
    variant: "editor-conflict" as const,
  },
  {
    title: "How to Build a Custom Skincare Routine",
    tag: "Routine",
    readTime: "6 min read",
    excerpt: "A step-by-step guide to identifying your skin type and layering products with confidence.",
    variant: "editor-routine" as const,
  },
];

const ingredientTags = ["Retinol", "Hyaluronic Acid", "Niacinamide", "Salicylic Acid", "Bakuchiol", "Peptides"];

const learningGuides = [
  {
    title: "Beginner Skincare Routine",
    desc: "Everything you need to know to start your journey.",
    meta: "6 Lessons - 45 min",
    icon: GraduationCap,
  },
  {
    title: "Advanced Ingredient Layering",
    desc: "How to mix actives for high-performance results.",
    meta: "12 Lessons - 90 min",
    icon: Wand2,
  },
];

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="grid items-center gap-12 xl:grid-cols-[0.95fr_1.05fr]">
              <motion.div initial="hidden" animate="visible" className="max-w-xl">
                <motion.h1
                  variants={fadeUp}
                  custom={0}
                  className="font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
                >
                  Learn What
                  <br />
                  Your
                  <br />
                  <span className="text-gradient">Skin Really</span>
                  <br />
                  Needs
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="mt-8 max-w-lg text-lg leading-9 text-muted-foreground"
                >
                  Science-backed skincare education, ingredient transparency, and personalized guidance from top dermatologists.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="mt-10 flex flex-col gap-4 rounded-[1.8rem] bg-white p-3 shadow-soft sm:flex-row sm:items-center"
                >
                  <div className="flex flex-1 items-center gap-3 px-3">
                    <Search className="h-5 w-5 text-primary" />
                    <input
                      type="text"
                      placeholder="Search ingredients, concerns, or routines..."
                      className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button className="h-12 rounded-2xl bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                    Search
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[2.2rem] bg-white p-4 shadow-[0_30px_80px_rgba(79,81,135,0.16)]">
                  <div className="relative overflow-hidden rounded-[1.7rem]">
                    <img
                      src={productsHero}
                      alt="Clinical skincare bottles"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,30,26,0.18)_0%,rgba(18,20,18,0.25)_100%)]" />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-6 max-w-[320px] rounded-[1.6rem] bg-[linear-gradient(180deg,#e8e2ff_0%,#dcd2ff_100%)] px-5 py-4 shadow-[0_20px_50px_rgba(109,100,215,0.22)] backdrop-blur-sm">
                  <p className="text-sm italic leading-7 text-foreground/80">
                    "The key to glowing skin isn't more products, it's the right ingredients."
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">- Dr. Jackie Levin</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-24" />

            <section className="mb-20">
              <div className="mb-8 flex items-center gap-2 text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">Featured Topics</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {featuredTopics.map((topic, index) => (
                  <motion.button
                    key={topic.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index}
                    className="rounded-[1.6rem] bg-white/80 p-6 text-left shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <topic.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-6 font-heading text-xl font-semibold text-foreground">{topic.title}</p>
                  </motion.button>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">Editor's Picks</h2>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View all Articles
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {editorPicks.map((pick, index) => (
                  <motion.article
                    key={pick.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    variants={fadeUp}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-soft"
                  >
                    <div className="h-[220px]">
                      <AbstractAiImage variant={pick.variant} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {pick.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">{pick.readTime}</span>
                      </div>
                      <h3 className="mt-5 font-heading text-3xl font-semibold leading-tight text-foreground">
                        {pick.title}
                      </h3>
                      <p className="mt-4 text-sm leading-8 text-muted-foreground">{pick.excerpt}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="mb-20 rounded-[2.5rem] bg-white/70 px-6 py-14 shadow-soft sm:px-10">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Explore Ingredients
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                  Our clinical database explains what's inside your products. Search over 2,000+ compounds.
                </p>
              </div>

              <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4 lg:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-4 shadow-soft">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Search Vitamin C, Retinol, Niacinamide..."
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <Button className="h-14 rounded-full bg-foreground px-8 text-primary-foreground hover:bg-foreground/92">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filter by Concern
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {ingredientTags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                Step-by-Step Guides
              </h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {learningGuides.map((guide, index) => (
                  <motion.article
                    key={guide.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index}
                    className="flex items-start gap-5 rounded-[2rem] bg-white p-6 shadow-soft"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-primary/10 text-primary">
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">{guide.title}</h3>
                      <p className="mt-3 text-sm leading-8 text-muted-foreground">{guide.desc}</p>
                      <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        {guide.meta}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <div className="mb-20">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                <Beaker size={24} className="text-primary" />
                Ingredient Database
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ingredients.map((ing, i) => (
                  <motion.div
                    key={ing.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i % 3}
                    variants={fadeUp}
                    className="glass-card p-5 flex items-center justify-between cursor-pointer hover:shadow-elevated transition-all group"
                  >
                    <div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{ing.name}</h3>
                      <p className="text-xs text-muted-foreground">{ing.benefit}</p>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>

            <section className="mb-20 border-t border-border/60 pt-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="flex shrink-0 justify-center lg:justify-start">
                  <div className="rounded-full border-4 border-primary/50 p-1 shadow-soft">
                    <img
                      src={drJackie}
                      alt="Dr. Jackie Levin"
                      className="h-28 w-28 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                    All content reviewed by Dr. Jackie Levin
                  </h2>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Board Certified Dermatologist - MD, FAAD
                  </p>
                  <p className="mt-5 max-w-4xl text-lg italic leading-9 text-foreground/80">
                    "Skincare doesn't have to be confusing. My mission with TID is to provide clinical clarity so you can make informed decisions about your skin's health."
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-foreground/85">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Clinical Evidence
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Patient Safety First
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FlaskRound className="h-4 w-4 text-primary" />
                      Zero-Bias Analysis
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-14 rounded-[2.3rem] bg-white/75 px-6 py-10 shadow-soft sm:px-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <h3 className="font-heading text-4xl font-bold text-foreground">Weekly Skincare Insights</h3>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      Deep dives into new ingredients, myth-busting, and clinical studies delivered to your inbox.
                    </p>
                  </div>
                  <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 flex-1 rounded-full bg-white px-5 text-sm text-foreground outline-none placeholder:text-muted-foreground shadow-soft"
                    />
                    <Button className="h-14 rounded-full bg-foreground px-8 text-primary-foreground hover:bg-foreground/92">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[2.5rem] bg-[linear-gradient(135deg,#6f64d8_0%,#958cf0_100%)] px-6 py-16 text-center text-primary-foreground shadow-[0_35px_90px_rgba(111,100,216,0.26)] sm:px-10">
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Not sure where to
                <br />
                start?
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-primary-foreground/82 sm:text-lg">
                Answer a few questions about your skin concerns and get a personalized learning path curated by Dr. Jackie.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button className="h-14 rounded-full bg-white px-8 text-base text-primary hover:bg-white/92">
                  Start Skin Analysis
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-full border border-white/35 bg-white/10 px-8 text-base text-white hover:bg-white/14 hover:text-white"
                >
                  Get Personalized Routine
                </Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
