import { motion } from "framer-motion";
import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const categories = ["All Products", "Cleansers", "Serums", "Treatments", "Sunscreens", "Kits"];

const recommendedProducts = [
  {
    tag: "Barrier+",
    name: "Ceramide Complex",
    match: "98% Match to Skin Needs",
    background: "from-[#f6c1a1] via-[#f8dcc6] to-[#fff2e9]",
    bottleTone: "bg-[#f5e5d8]",
  },
  {
    tag: "Hydration",
    name: "Amino Acid Wash",
    match: "92% Match to Skin Needs",
    background: "from-[#f6c9a4] via-[#f8ddc3] to-[#fff3e7]",
    bottleTone: "bg-[#fbefe4]",
  },
];

const products = [
  {
    name: "Cloud Cleanser",
    price: "$42.00",
    tags: ["Glycerin", "B5", "Aloe"],
    background: "from-[#f2f4f6] via-[#eef1f5] to-[#dadee7]",
    accent: "bg-[#cadadd]",
    shape: "tall",
  },
  {
    name: "Active Repair Serum",
    price: "$68.00",
    tags: ["Niacinamide", "Zinc PCA"],
    background: "from-[#cfd49a] via-[#c2cb8b] to-[#b5be7a]",
    accent: "bg-[#543117]",
    shape: "dropper",
  },
  {
    name: "Silk Shield SPF 50",
    price: "$38.00",
    tags: ["Zinc Oxide", "Squalane"],
    background: "from-[#f8f7f2] via-[#f2efe6] to-[#ece8dc]",
    accent: "bg-[#f7f4ec]",
    shape: "round",
  },
  {
    name: "The Glow Kit",
    price: "$115.00",
    tags: ["Vitamin C", "Peptides"],
    background: "from-[#4d8b84] via-[#6aa397] to-[#88b9b2]",
    accent: "bg-white",
    shape: "kit",
  },
];

const ProductIllustration = ({
  shape,
  accent,
}: {
  shape: "tall" | "dropper" | "round" | "kit";
  accent: string;
}) => {
  if (shape === "dropper") {
    return (
      <div className="relative flex h-full items-end justify-center pb-8">
        <div className="absolute bottom-7 h-32 w-20 rounded-[2rem_2rem_1.2rem_1.2rem] bg-[#6e3e1f] shadow-[0_20px_35px_rgba(58,29,7,0.25)]" />
        <div className="absolute bottom-36 h-6 w-10 rounded-t-md bg-[#23160f]" />
        <div className="absolute bottom-[11.2rem] h-7 w-1 rounded-full bg-[#23160f]" />
        <div className="absolute bottom-14 flex h-16 w-14 items-center justify-center rounded-sm bg-[#f7f0e9] text-center text-[10px] font-medium uppercase tracking-[0.25em] text-[#3b2414]">
          Product
          <br />
          2
        </div>
      </div>
    );
  }

  if (shape === "round") {
    return (
      <div className="relative flex h-full items-end justify-center pb-7">
        <div className="absolute bottom-4 h-5 w-28 rounded-full bg-[#cfae7f]/70 blur-[1px]" />
        <div className="absolute bottom-5 h-6 w-24 rounded-full bg-[#d7b88a]" />
        <div className="absolute bottom-10 h-36 w-20 rounded-[2rem_2rem_1.1rem_1.1rem] bg-white shadow-[0_18px_32px_rgba(163,144,115,0.18)]" />
        <div className="absolute bottom-[10.5rem] h-6 w-10 rounded-md bg-[#f3f2ef]" />
        <div className="absolute bottom-20 flex h-16 w-12 items-center justify-center rounded-sm bg-[#faf7f2] text-center text-[10px] font-medium uppercase tracking-[0.15em] text-[#5e4d39]">
          SPF
          <br />
          50
        </div>
      </div>
    );
  }

  if (shape === "kit") {
    return (
      <div className="relative flex h-full items-end justify-center pb-8">
        <div className="absolute bottom-7 left-10 h-24 w-12 rounded-[1rem_1rem_0.7rem_0.7rem] bg-[#66422d] shadow-[0_20px_30px_rgba(32,23,17,0.25)]" />
        <div className="absolute bottom-28 left-[3.6rem] h-5 w-5 rounded-sm bg-[#f6f6f4]" />
        <div className="absolute bottom-9 right-9 flex h-40 w-24 items-center justify-center rounded-sm bg-white text-6xl font-light text-[#26252c] shadow-[0_24px_40px_rgba(30,31,43,0.18)]">
          4
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-end justify-center pb-8">
      <div className="absolute bottom-7 left-4 h-16 w-10 rounded-[1rem_1rem_0.7rem_0.7rem] bg-[#d2d9dc] shadow-[0_15px_24px_rgba(78,86,95,0.18)]" />
      <div className="absolute bottom-22 left-[1.55rem] h-4 w-3 rounded-sm bg-[#f2f2f0]" />
      <div className="absolute bottom-7 right-5 h-48 w-28 rounded-[1.7rem] border border-[#7f828b] bg-[#f7f7f4] shadow-[0_20px_35px_rgba(131,137,149,0.15)]" />
      <div className="absolute right-[2.35rem] top-10 h-7 w-12 rounded-b-lg bg-[#202127]" />
      <div className={`absolute bottom-16 right-[2.55rem] flex h-14 w-20 items-center justify-center rounded-sm text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#4d555a] ${accent}`}>
        Padut
      </div>
    </div>
  );
};

const MiniBottle = ({ tone }: { tone: string }) => (
  <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.1rem] bg-white/50">
    <div className={`absolute bottom-3 h-14 w-7 rounded-[0.9rem_0.9rem_0.5rem_0.5rem] shadow-sm ${tone}`} />
    <div className="absolute bottom-16 h-4 w-4 rounded-sm bg-white" />
    <div className="absolute bottom-20 h-2 w-1 rounded-full bg-[#9f7448]" />
  </div>
);

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="pb-20 pt-12">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="max-w-2xl">
                <motion.h1
                  variants={fadeUp}
                  custom={0}
                  className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                >
                  Smart <span className="text-gradient">Curations.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
                >
                  Clinically backed ingredients, curated by Dr. Jackie Levin for your unique skin chemistry.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex max-w-2xl flex-wrap gap-3 lg:justify-end"
              >
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`rounded-full px-5 py-3 text-sm font-medium transition-all ${
                      index === 0
                        ? "bg-primary text-primary-foreground shadow-elevated"
                        : "bg-muted text-foreground hover:bg-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,#ece8ff_0%,#e5e7ff_100%)] p-6 shadow-soft lg:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.6fr]">
                <motion.div variants={fadeUp} custom={0} className="flex flex-col justify-between">
                  <div>
                    <Badge className="rounded-full border-0 bg-[#ece3cb] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#332b1d]">
                      <Sparkles className="mr-2 h-3.5 w-3.5" />
                      AI Skin Analysis
                    </Badge>
                    <h2 className="mt-6 max-w-sm text-3xl font-bold leading-tight text-foreground lg:text-[2.35rem]">
                      Recommended for your <span className="text-gradient">Skin Score</span>
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                      Based on your recent analysis, these formulations target your specific hydration and barrier needs.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-primary text-xl font-bold text-primary">
                      84
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Overall Score</p>
                      <p className="text-xs text-muted-foreground">Updated 2 days ago</p>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-4 xl:grid-cols-2">
                  {recommendedProducts.map((item, index) => (
                    <motion.article
                      key={item.name}
                      variants={fadeUp}
                      custom={index + 1}
                      className="grid gap-4 rounded-[1.75rem] bg-white/90 p-4 shadow-[0_20px_40px_rgba(136,128,196,0.12)] sm:grid-cols-[132px_1fr]"
                    >
                      <div className={`flex min-h-[128px] items-center justify-center rounded-[1.1rem] bg-gradient-to-br ${item.background}`}>
                        <MiniBottle tone={item.bottleTone} />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <span className="rounded-full bg-[#f3eedf] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6a573d]">
                            {item.tag}
                          </span>
                          <h3 className="mt-3 text-2xl font-semibold text-foreground">{item.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.match}</p>
                        </div>
                        <Link
                          to="/consult"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
                        >
                          Shop Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.section>

            <section className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  custom={index}
                  className="group"
                >
                  <div className={`relative h-[290px] overflow-hidden rounded-[1.9rem] bg-gradient-to-br ${product.background} p-4 shadow-soft transition-transform duration-300 group-hover:-translate-y-1`}>
                    <Badge className="rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground shadow-sm">
                      <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      Dr. Jackie Approved
                    </Badge>
                    <ProductIllustration shape={product.shape} accent={product.accent} />
                  </div>

                  <div className="pt-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                      <p className="pt-1 text-lg font-semibold text-primary">{product.price}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="mt-16 overflow-hidden rounded-[2rem] bg-[#191d31] px-6 py-14 text-center text-primary-foreground shadow-[0_24px_60px_rgba(25,29,49,0.26)] lg:px-10"
            >
              <motion.div variants={fadeUp} custom={0} className="mx-auto max-w-2xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <LockKeyhole className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">Prescription Products</h2>
                <p className="mt-4 text-base leading-8 text-primary-foreground/75">
                  To access our clinical-grade Tretinoin and specialized active treatments, you must complete a professional consultation.
                </p>
                <Link to="/consult" className="mt-8 inline-flex">
                  <Button className="h-12 rounded-2xl bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90">
                    Book Consultation to Unlock
                  </Button>
                </Link>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
                  <span>1:1 Session</span>
                  <span>Script Generation</span>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
