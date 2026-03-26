import { motion } from "framer-motion";
import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import c1Image from "@/assets/C-1.jpg";
import c2Image from "@/assets/C-2.png";
import molecularRepairImage from "@/assets/M-1.png";
import ceramideBarrierImage from "@/assets/M-2.png";
import invisibleShieldImage from "@/assets/M-3.png";

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
    image: c1Image,
  },
  {
    tag: "Hydration",
    name: "Amino Acid Wash",
    match: "92% Match to Skin Needs",
    background: "from-[#f6c9a4] via-[#f8ddc3] to-[#fff3e7]",
    bottleTone: "bg-[#fbefe4]",
    image: c2Image,
  },
];

const products = [
  {
    name: "Blemish Clarifying Serum",
    subtitle: "Intensive Corrective Treatment",
    price: "$42.00",
    description: "Targets overactive sebaceous glands without dehydrating the epidermis.",
    background: "from-[#f6d39a] via-[#f0bc73] to-[#d28a38]",
    image: molecularRepairImage,
    imageClassName: "object-cover object-center scale-[1.05]",
    tags: ["2% Salicylic", "Zinc PCA"],
    href: "/shop",
  },
  {
    name: "Niacinamide Glow Drop",
    subtitle: "Texture & Pore Refiner",
    price: "$48.00",
    description: "Refining serum designed to support smoother texture and a more balanced-looking tone.",
    background: "from-[#2d3237] via-[#16191c] to-[#4b5258]",
    image: ceramideBarrierImage,
    imageClassName: "object-cover object-center scale-[1.06]",
    tags: ["10% Niacinamide", "Rice Water"],
    href: "/shop/niacinamide-glow-drop",
  },
  {
    name: "Lipid Restore Balm",
    subtitle: "Deep Hydration Barrier",
    price: "$38.00",
    description: "Strengthens the protective barrier to prevent transepidermal water loss.",
    background: "from-[#8a66bf] via-[#ac8ee2] to-[#d5c0ff]",
    image: invisibleShieldImage,
    imageClassName: "object-cover object-center scale-[1.04]",
    tags: ["Ceramides", "Squalane"],
    href: "/shop",
  },
];

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
                      <div className={`relative min-h-[128px] overflow-hidden rounded-[1.1rem] bg-gradient-to-br ${item.background}`}>
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <MiniBottle tone={item.bottleTone} />
                          </div>
                        )}
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

            <section className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  custom={index}
                  className="group"
                >
                  <Link to={product.href} className="group block">
                    <article className="rounded-[2rem] bg-white p-4 shadow-soft transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="relative h-[285px] overflow-hidden rounded-[1.5rem] bg-white">
                        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                          Dr. Jackie Approved
                        </span>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`h-full w-full ${product.imageClassName}`}
                        />
                      </div>

                      <div className="px-1 pb-2 pt-5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-heading text-[2rem] font-semibold leading-tight text-foreground">{product.name}</h3>
                          <p className="pt-1 text-xl font-semibold text-primary">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">{product.subtitle}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                </motion.div>
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
