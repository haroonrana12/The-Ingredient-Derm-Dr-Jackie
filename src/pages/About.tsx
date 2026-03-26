import { motion } from "framer-motion";
import { ShieldCheck, Microscope, FlaskConicalOff, Building2, BadgeAlert, FlaskConical, UserRoundSearch, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import drJackie from "@/assets/dr-jackie.png";
import b1Image from "@/assets/B-1.jpg";
import { AbstractAiImage } from "@/components/ui/abstract-ai-image";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const credentials = [
  {
    title: "Board Certified",
    desc: "Dermatology Specialist with rigorous training.",
    icon: ShieldCheck,
  },
  {
    title: "Mohs Surgeon",
    desc: "High-precision skin cancer surgery expertise.",
    icon: Microscope,
  },
  {
    title: "15+ Years",
    desc: "Clinical experience treating diverse skin types.",
    icon: FlaskConicalOff,
  },
  {
    title: "Levin Derm Founder",
    desc: "Pioneering ingredient-focused clinical care.",
    icon: Building2,
  },
];

const tidDifference = [
  {
    title: "AI-Powered Analysis",
    desc: "Our proprietary algorithms analyze ingredient lists against your specific skin profile to predict reactions before they happen.",
    icon: BadgeAlert,
    tint: "bg-[#f4ebbf] text-[#9f8921]",
  },
  {
    title: "Ingredient Transparency",
    desc: "No 'secret formulas.' We break down every active and inactive ingredient, explaining exactly why it belongs in your routine.",
    icon: FlaskConical,
    tint: "bg-primary/10 text-primary",
  },
  {
    title: "Clinical Precision",
    desc: "Every recommendation is backed by Dr. Levin's board-certified expertise and years of treating complex skin conditions.",
    icon: UserRoundSearch,
    tint: "bg-primary/10 text-primary",
  },
];

const formulationTags = ["Retinol", "Niacinamide", "Hyaluronic Acid", "Ceramides", "Vitamin C", "Peptides", "Bakuchiol"];

const successStories = [
  {
    quote:
      "Dr. Levin changed how I see my skin. For years I was buying expensive products that were actually aggravating my rosacea. Her analysis revealed the hidden culprits immediately.",
    name: "Sarah J.",
    memberSince: "TID Member Since 2022",
  },
  {
    quote:
      "The digital consultation felt as thorough as an in-person visit. The level of detail in the ingredient breakdown is something I've never seen before.",
    name: "Marcus T.",
    memberSince: "TID Member Since 2023",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <div className="grid items-center gap-12 xl:grid-cols-[0.92fr_1.08fr]">
              <motion.div initial="hidden" animate="visible" className="max-w-xl">
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary"
                >
                  Founder &amp; Chief Medical Officer
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="mt-8 font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
                >
                  Meet Dr.
                  <br />
                  Jackie Levin
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-8 max-w-lg text-lg leading-9 text-muted-foreground"
                >
                  Bridging the gap between biochemical complexity and daily skincare through radical ingredient transparency and medical precision.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="rounded-[2.2rem] bg-white/70 p-4 shadow-[0_30px_80px_rgba(79,81,135,0.16)]">
                  <div className="overflow-hidden rounded-[1.7rem] bg-white">
                    <img
                      src={drJackie}
                      alt="Dr. Jackie Levin"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 rounded-[1.6rem] bg-white px-6 py-5 shadow-[0_20px_50px_rgba(79,81,135,0.14)]">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Years of Clinical
                    <br />
                    Excellence
                  </p>
                </div>
              </motion.div>
            </div>

            <section className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {credentials.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index}
                  className="rounded-[2rem] bg-white p-8 shadow-soft"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-8 font-heading text-[1.7rem] font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                </motion.article>
              ))}
            </section>

            <section className="mt-20 grid items-start gap-12 xl:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">Her Story</h2>
                <div className="mt-6 space-y-6 text-base leading-9 text-muted-foreground">
                  <p>
                    Before becoming a board-certified dermatologist, Dr. Jackie Levin began her journey in{" "}
                    <span className="font-medium text-primary">Biochemical Engineering</span>. This foundational expertise allows her to look at skincare through a unique lens, not just as a clinician, but as a scientist who understands how formulations interact with human biology at a molecular level.
                  </p>
                  <p>
                    Throughout her 15-year career, she noticed a recurring frustration: patients were overwhelmed by "marketing fluff" and lacked the tools to understand what they were actually putting on their skin. This led to the creation of The Ingredient Derm (TID).
                  </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-primary/15 bg-[linear-gradient(180deg,#f1eeff_0%,#ece8ff_100%)] px-6 py-8 shadow-soft sm:px-8">
                  <h3 className="font-heading text-3xl font-semibold text-primary">The Mission</h3>
                  <p className="mt-5 max-w-2xl text-base leading-9 text-primary/90">
                    To bridge the gap between clinical dermatology and ingredient science. We exist to provide transparent, science-backed guidance that translates complex labels into personalized skincare success.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2.2rem] bg-[radial-gradient(circle_at_70%_15%,rgba(86,132,255,0.18),transparent_30%),linear-gradient(180deg,#0f2736_0%,#0a1821_100%)] p-4 shadow-[0_30px_80px_rgba(9,19,34,0.28)]">
                  <div className="relative h-[440px] overflow-hidden rounded-[1.7rem] border border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]">
                    <img
                      src={b1Image}
                      alt="Dr Jackie Her Story"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-20">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  The TID Difference
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  How we combine human expertise with digital precision to redefine dermatological care.
                </p>
              </div>

              <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                {tidDifference.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index}
                    className="text-left"
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.tint}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 font-heading text-3xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-4 text-base leading-9 text-muted-foreground">{item.desc}</p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-16 rounded-[2.3rem] bg-white/75 px-6 py-10 shadow-soft sm:px-10">
                <div className="grid items-center gap-10 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-wrap gap-3">
                    {formulationTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-heading text-4xl font-bold text-foreground">
                      The Philosophy of Formulation
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-9 text-muted-foreground">
                      "We don't just look for high percentages; we look for ingredient synergy and delivery systems. A hero ingredient is only as good as the formula that carries it."
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Learn our Rating Scale
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-20">
              <div className="text-center">
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Patient Success Stories
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {successStories.map((story, index) => (
                  <motion.article
                    key={story.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index}
                    className="rounded-[2.2rem] bg-white p-8 shadow-soft"
                  >
                    <div className="flex gap-1 text-[#a68a17]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span key={starIndex} className="text-xl">★</span>
                      ))}
                    </div>
                    <p className="mt-5 text-lg italic leading-9 text-foreground/80">
                      "{story.quote}"
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20" />
                      <div>
                        <p className="font-heading text-xl font-semibold text-foreground">{story.name}</p>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {story.memberSince}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="mt-20">
              <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#6f64d8_0%,#958cf0_100%)] px-6 py-16 text-center text-primary-foreground shadow-[0_35px_90px_rgba(111,100,216,0.26)] sm:px-10">
                <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Start your personalized skin
                  <br />
                  consultation today
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-primary-foreground/82 sm:text-lg">
                  Join thousands of patients who have transformed their skin health through clinical science and specialized dermatological care.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link to="/consult">
                    <button className="h-14 rounded-full bg-white px-8 text-base font-medium text-primary transition hover:bg-white/92">
                      Book Consultation
                    </button>
                  </Link>
                  <Link to="/skin-analysis">
                    <button className="h-14 rounded-full border border-white/35 bg-white/10 px-8 text-base font-medium text-white transition hover:bg-white/14">
                      Start Skin Analysis
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
