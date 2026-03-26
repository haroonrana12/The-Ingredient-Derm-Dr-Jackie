import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Brain, ShieldCheck, Star, Scan, BadgeAlert, Sparkles, Droplets, Waves, Shield, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AbstractAiImage } from "@/components/ui/abstract-ai-image";
import drJackie from "@/assets/dr-jackie.png";
import educationOne from "@/assets/E-1.png";
import educationTwo from "@/assets/E-2.png";
import heroSection from "@/assets/hero-section.jpg";
import molecularRepairImage from "@/assets/M-1.png";
import ceramideBarrierImage from "@/assets/M-2.png";
import invisibleShieldImage from "@/assets/M-3.png";
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
  { name: "Sarah M.", text: "TID changed how I look at my vanity. No more expensive guesses, just science that works for my redness.", rating: 5 },
  { name: "Jason K.", text: "The AI analysis was incredibly accurate. It caught things my regular derm missed during a quick check.", rating: 5 },
  { name: "Elena R.", text: "Finally, a medical-grade platform that feels luxury. I love the monthly check-ins with Dr. Levin.", rating: 5 },
  { name: "Priya K.", text: "Dr. Jackie's consultation changed everything for me. Finally a dermatologist who actually listens.", rating: 5 },
  { name: "Amina S.", text: "My routine feels simple now. The ingredient guidance helped me stop over-treating my skin.", rating: 5 },
  { name: "Marcus T.", text: "The product recommendations actually made sense for my skin type, and the results showed fast.", rating: 5 },
  { name: "Noor A.", text: "I stopped wasting money on random products. The routine felt intentional from day one.", rating: 5 },
  { name: "David L.", text: "The monthly plan keeps me consistent, and that alone has made the biggest difference.", rating: 5 },
  { name: "Hiba R.", text: "My pigmentation finally started fading once I followed the ingredient guidance properly.", rating: 5 },
  { name: "Sofia N.", text: "It feels premium, but the biggest win is that everything is explained clearly and medically.", rating: 5 },
  { name: "Zara H.", text: "The report gave me clarity instantly. I finally understood why my old routine was making things worse.", rating: 5 },
  { name: "Omar F.", text: "I liked that the recommendations felt clinical, not trendy. My skin calmed down within weeks.", rating: 5 },
  { name: "Maya D.", text: "The ingredient transparency is my favorite part. Every product choice now feels intentional.", rating: 5 },
  { name: "Hassan R.", text: "The consultation and AI report together felt far more complete than any quick clinic visit I've had.", rating: 5 },
  { name: "Lina P.", text: "I used to be overwhelmed by skincare. Now my routine is shorter, smarter, and actually working.", rating: 5 },
  { name: "Areeba T.", text: "My acne marks finally started improving once I switched to the TID plan and stayed consistent.", rating: 5 },
  { name: "Daniel S.", text: "The before-and-after tracking kept me motivated. Seeing progress made it easier to trust the process.", rating: 5 },
  { name: "Sana I.", text: "The monthly follow-up made this feel like real care, not just another beauty app.", rating: 5 },
  { name: "Bilal M.", text: "My skin feels healthier overall. Less irritation, better texture, and fewer random breakouts.", rating: 5 },
  { name: "Ava J.", text: "The product pairings were perfect for me. Nothing felt harsh, but everything still felt effective.", rating: 5 },
  { name: "Muneeb A.", text: "This is the first time I've felt confident that my routine is based on science and not marketing.", rating: 5 },
  { name: "Kiara W.", text: "The platform feels polished, but more importantly the results feel real and sustainable.", rating: 5 },
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
    title: "Blemish Clarifying Serum",
    subtitle: "Intensive Corrective Treatment",
    tags: ["2% Salicylic", "Zinc PCA"],
    desc: "Targets overactive sebaceous glands without dehydrating the epidermis.",
    price: "$64.00",
    background: "bg-[radial-gradient(circle_at_28%_14%,#f7d291_0%,#efb760_32%,#d38b35_72%,#b56d1e_100%)]",
    image: molecularRepairImage,
    imageClassName: "object-cover object-center scale-[1.05]",
    href: "/shop/molecular-repair-serum",
  },
  {
    title: "Niacinamide Glow Drop",
    subtitle: "Texture & Pore Refiner",
    tags: ["10% Niacinamide", "Rice Water"],
    desc: "Stabilizes oil production and significantly reduces the appearance of enlarged pores.",
    price: "$58.00",
    background: "bg-[radial-gradient(circle_at_50%_8%,#434950_0%,#21252a_40%,#171a1f_100%)]",
    image: ceramideBarrierImage,
    imageClassName: "object-cover object-center scale-[1.05]",
    href: "/shop/niacinamide-glow-drop",
  },
  {
    title: "Lipid Restore Balm",
    subtitle: "Deep Hydration Barrier",
    tags: ["Ceramides", "Squalane"],
    desc: "Strengthens the protective barrier to prevent transepidermal water loss.",
    price: "$42.00",
    background: "bg-[radial-gradient(circle_at_50%_10%,#caa5ff_0%,#a47fdc_34%,#855fbf_72%,#7048aa_100%)]",
    image: invisibleShieldImage,
    imageClassName: "object-cover object-center scale-[1.04]",
    href: "/shop",
  },
];

const membershipPlans = [
  {
    title: "Free",
    desc: "Explore TID essentials after creating your account.",
    price: "$0",
    cta: "Login or Sign Up",
    featured: false,
    perks: ["Save your skin reports", "Access free education", "Build a starter routine"],
    href: "/signup",
  },
  {
    title: "TID Basic",
    desc: "Monthly essentials delivered to your door.",
    price: "$49",
    cta: "Select Basic",
    featured: false,
    perks: ["Personalized 3-Step Routine", "Quarterly AI Skin Scan", "Exclusive Ingredient Guides"],
    href: "/membership/payment?plan=basic",
  },
  {
    title: "Concierge",
    desc: "Unlimited access to professional guidance.",
    price: "$129",
    cta: "Start Concierge",
    featured: true,
    perks: ["Everything in Basic", "Monthly 1:1 Video Consult", "Priority AI Analysis (24h)", "Custom Formulated Actives"],
    href: "/membership/payment?plan=concierge",
  },
];

const TiltConcernCard = ({
  label,
  icon: Icon,
}: {
  label: string;
  icon: typeof Waves;
}) => {
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 8;
    const rotateX = ((50 - y) / 50) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const resetCard = () => {
    setHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Link
      to="/skin-analysis"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={resetCard}
      style={{
        transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${hovered ? 1.02 : 1})`,
        boxShadow: hovered
          ? "0 28px 48px rgba(112, 107, 202, 0.18), 0 0 0 1px rgba(126, 118, 237, 0.22)"
          : "0 14px 35px rgba(79,81,135,0.08)",
        background: "white",
      }}
      className="relative rounded-[1.75rem] border border-[#ebeaf8] px-6 py-7 text-center transition-[transform,box-shadow,background-image] duration-200 ease-out"
    >
      <div
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: "0 0 0 1.5px rgba(129, 121, 241, 0.55), 0 0 22px rgba(129, 121, 241, 0.18)",
        }}
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] transition-opacity duration-200"
      />
      <div className="relative z-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <p className="mt-5 font-heading text-xl font-semibold text-foreground">{label}</p>
      </div>
    </Link>
  );
};

const AnalysisPreviewCard = () => {
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const nextScore = Math.round((78 * frame) / totalFrames);
      setScore(nextScore);

      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, []);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 6;
    const rotateX = ((50 - y) / 50) * 6;
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        y: hovered ? -4 : 0,
        scale: hovered ? 1.012 : 1,
      }}
      transition={{ type: "spring", stiffness: 130, damping: 20, mass: 0.9 }}
      style={{ transformPerspective: 1400 }}
      className="w-full max-w-[430px] rounded-[2.4rem] bg-[#ececf4] p-8 shadow-[0_25px_70px_rgba(86,91,140,0.16)]"
    >
      <div className="flex items-center justify-between">
        <p className="font-heading text-xl font-semibold text-foreground">Skin Analysis Result</p>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          AI Verified
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          animate={{ boxShadow: hovered ? "0 0 0 10px rgba(126,118,237,0.08)" : "0 0 0 0 rgba(126,118,237,0)" }}
          transition={{ duration: 0.5 }}
          className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-primary/25 bg-white"
        >
          <div className="text-center">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-5xl font-bold text-primary"
            >
              {score}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Score
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 space-y-4">
        {[
          { label: "Upload", width: "95%" },
          { label: "Analysis", width: "92%" },
          { label: "Results", width: "74%" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 + index * 0.12, duration: 0.45 }}
            className="rounded-[1.3rem] bg-white px-4 py-4 shadow-soft"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.22 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                {index === 0 ? <ArrowRight className="h-4 w-4 rotate-90" /> : index === 1 ? <Waves className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
              </motion.div>
              <div className="h-2 flex-1 rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item.width }}
                  transition={{ delay: 0.3 + index * 0.14, duration: 0.75, ease: "easeOut" }}
                  className="h-2 rounded-full bg-primary"
                />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const BeforeAfterShowcase = () => {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX: number, rect: DOMRect) => {
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-[1320px] overflow-hidden rounded-[2.8rem] bg-white p-3 shadow-[0_25px_70px_rgba(79,81,135,0.14)]">
      <div
        className="relative h-[360px] overflow-hidden rounded-[2.3rem] sm:h-[460px] lg:h-[560px]"
        onPointerMove={(event) => {
          if (!dragging) return;
          updatePosition(event.clientX, event.currentTarget.getBoundingClientRect());
        }}
        onPointerUp={() => setDragging(false)}
        onPointerLeave={() => setDragging(false)}
      >
        <div className="absolute inset-0">
          <AbstractAiImage variant="skin-after" />
          <span className="absolute right-5 top-5 rounded-full bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
            After
          </span>
        </div>

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-[1320px] max-w-none">
            <AbstractAiImage variant="skin-before" />
            <span className="absolute left-5 top-5 rounded-full bg-[#5b3228] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Before
            </span>
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-20"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative h-full w-[2px] bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          <button
            type="button"
            onPointerDown={(event) => {
              setDragging(true);
              updatePosition(event.clientX, event.currentTarget.parentElement!.parentElement!.getBoundingClientRect());
            }}
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_16px_36px_rgba(79,81,135,0.2)]"
            aria-label="Drag before and after comparison"
          >
            <div className="flex items-center gap-1 text-primary">
              <ArrowRight className="h-4 w-4 rotate-180" />
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const MembershipTiltCard = ({
  plan,
  selected,
  onSelect,
}: {
  plan: (typeof membershipPlans)[number];
  selected: boolean;
  onSelect: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setRotation({
      x: ((50 - y) / 50) * 5,
      y: ((x - 50) / 50) * 5,
    });
  };

  const isAccent = selected || hovered;

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1400px) rotateX(${selected ? rotation.x : 0}deg) rotateY(${selected ? rotation.y : 0}deg) scale(${selected && hovered ? 1.012 : 1})`,
        boxShadow: selected
          ? "0 30px 80px rgba(111,100,216,0.22)"
          : hovered
            ? "0 24px 65px rgba(79,81,135,0.14)"
            : "0 14px 35px rgba(79,81,135,0.08)",
      }}
      className={`group relative cursor-pointer rounded-[2.4rem] border px-8 py-8 transition-[transform,box-shadow,background] duration-300 ease-out ${
        selected
          ? "border-transparent bg-[linear-gradient(135deg,#6e64d7_0%,#958cf0_100%)] text-white"
          : "border-[#e8e8f5] bg-[#f3f4fa] text-foreground"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[2.4rem] transition-opacity duration-300 ${
          hovered && !selected ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "0 0 0 1px rgba(126,118,237,0.16), 0 0 28px rgba(126,118,237,0.08)" }}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-4xl font-semibold">{plan.title}</h3>
          <p className={`mt-3 text-base ${selected ? "text-white/75" : "text-muted-foreground"}`}>
            {plan.desc}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            selected
              ? "bg-white/20 text-white"
              : isAccent
                ? "bg-primary/12 text-primary"
                : "bg-primary/10 text-primary"
          }`}
        >
          {plan.featured ? "Most Popular" : plan.title === "Free" ? "Starter" : "Selected Plan"}
        </span>
      </div>

      <div className="relative z-10 mt-8 flex items-end gap-2">
        <p className="text-5xl font-bold">{plan.price}</p>
        <p className={`pb-1 text-lg ${selected ? "text-white/75" : "text-muted-foreground"}`}>/mo</p>
      </div>

      <div className="relative z-10 mt-8 space-y-5">
        {plan.perks.map((perk) => (
          <div key={perk} className="flex items-center gap-3">
            <span className={`text-lg ${selected ? "text-white" : "text-primary"}`}>+</span>
            <span className={`text-base ${selected ? "text-white/88" : "text-foreground/85"}`}>{perk}</span>
          </div>
        ))}
      </div>

      <Link
        to={plan.href}
        onClick={(event) => event.stopPropagation()}
        className={`relative z-10 mt-10 flex h-14 w-full items-center justify-center rounded-full border text-base font-medium transition ${
          selected
            ? "border-white bg-white text-primary hover:bg-white/92"
            : "border-primary bg-transparent text-primary hover:bg-primary/5"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
};

const Index = () => {
  const [selectedMembershipPlan, setSelectedMembershipPlan] = useState("Concierge");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden gradient-hero pt-16">
        <div className="container mx-auto max-w-[1440px] px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 xl:grid-cols-[0.88fr_1.12fr]">
            <motion.div initial="hidden" animate="visible" className="max-w-xl space-y-8">
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Dermatologist-Led AI
              </motion.div>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
              >
                Feel Good
                <br />
                About
                <br />
                <span className="text-gradient">Every</span>
                <br />
                Ingredient.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="max-w-lg text-lg leading-9 text-muted-foreground">
                Stop guessing your skincare routine. Get clinical-grade analysis of your unique skin chemistry powered by Dr. Jackie Levin&apos;s proprietary AI.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Link to="/skin-analysis">
                  <Button size="lg" className="h-14 rounded-full bg-primary px-8 text-base text-primary-foreground shadow-elevated hover:bg-primary/90">
                    Start Skin Analysis
                  </Button>
                </Link>
                <Link to="/consult">
                  <Button size="lg" className="h-14 rounded-full bg-white px-8 text-base text-primary shadow-soft hover:bg-white/90">
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {["from-[#f2c9a8] to-[#cb8d67]", "from-[#f6dfb2] to-[#cf9569]", "from-[#9f93f3] to-[#7065d8]"].map((tone, index) => (
                    <div
                      key={index}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${tone} text-[10px] font-semibold text-white shadow-sm`}
                    >
                      {index === 2 ? "500+" : ""}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 50,000+ patients worldwide
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative mx-auto w-full max-w-[760px]"
            >
              <div className="relative mx-auto aspect-[1.05/0.82] max-w-[620px] overflow-hidden rounded-[2.6rem] bg-white p-4 shadow-[0_34px_90px_rgba(112,87,177,0.22)]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img
                    src={heroSection}
                    alt="Hero skincare showcase"
                    className="h-full w-full object-cover object-center scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(100,73,153,0.04)_0%,rgba(58,34,110,0.18)_100%)]" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: [0.33, 1, 0.68, 1] }}
                className="absolute left-[2%] top-[16%] rounded-[1.25rem] bg-white/92 px-5 py-4 shadow-[0_18px_40px_rgba(79,81,135,0.16)] backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4db68] text-foreground">
                    <BadgeAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Analysis Engine
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      99.8% Accuracy
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0], x: [0, -4, 0] }}
                transition={{ duration: 8.2, repeat: Infinity, ease: [0.33, 1, 0.68, 1], delay: 0.6 }}
                className="absolute bottom-[8%] right-[-2%] rounded-[1.25rem] bg-white/92 px-5 py-4 shadow-[0_18px_40px_rgba(79,81,135,0.16)] backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Scan className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Active Bio-Match
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Ingredient Verified
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
              <TiltConcernCard key={item.label} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="grid items-center gap-14 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex justify-center xl:justify-start">
              <AnalysisPreviewCard />
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
                    className="h-14 rounded-full border-white bg-white px-8 text-base text-foreground shadow-soft hover:bg-white/95 hover:text-foreground"
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

          <BeforeAfterShowcase />
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

          <div className="mx-auto mt-14 grid max-w-[1280px] gap-8 lg:grid-cols-3">
            {membershipPlans.map((plan) => (
              <MembershipTiltCard
                key={plan.title}
                plan={plan}
                selected={selectedMembershipPlan === plan.title}
                onSelect={() => setSelectedMembershipPlan(plan.title)}
              />
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
                image: educationOne,
              },
              {
                label: "Ingredient Library",
                title: "The Retinol Handbook: Concentration, Frequency, and Care",
                image: educationTwo,
              },
            ].map((item) => (
              <article key={item.title}>
                <div className="h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center scale-[1.02]"
                  />
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
              <Link key={item.title} to={item.href} className="group block">
                <article className="rounded-[2rem] bg-white p-4 shadow-soft">
                  <div className="relative h-[285px] overflow-hidden rounded-[1.5rem] bg-white">
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                      Dr. Jackie Approved
                    </span>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`h-full w-full ${item.imageClassName}`}
                    />
                  </div>

                  <div className="px-1 pb-2 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-[2rem] font-semibold leading-tight text-foreground">{item.title}</h3>
                      <p className="pt-1 text-xl font-semibold text-primary">{item.price}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{item.subtitle}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="gradient-hero py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-[1440px] px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Loved by Thriving Skin
            </h2>
          </div>
        </div>

        <div className="mt-8 space-y-6 overflow-hidden">
          {[
            { items: testimonials.slice(0, 11), direction: [0, -50], offset: "" },
            { items: testimonials.slice(11), direction: [-50, 0], offset: "pt-4" },
          ].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.12 }}
              className={`relative left-1/2 flex w-screen -translate-x-1/2 justify-center ${row.offset}`}
            >
              <motion.div
                animate={{ x: row.direction }}
                transition={{ duration: rowIndex === 0 ? 24 : 28, repeat: Infinity, ease: "linear" }}
                className="flex w-max items-stretch gap-6 px-3 md:px-4"
              >
                {[...row.items, ...row.items, ...row.items].map((t, i) => (
                  <article
                    key={`${rowIndex}-${t.name}-${i}`}
                    className="flex min-h-[210px] w-full max-w-[360px] flex-col justify-between rounded-[1.75rem] bg-white px-4 py-6 text-left shadow-soft mx-auto"
                  >
                    <div className="mb-4 flex gap-1 text-[#b28f17]">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={16} className="fill-current text-current" />
                      ))}
                    </div>
                    <p className="text-base italic leading-7 text-foreground/80">"{t.text}"</p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-muted" />
                      <div>
                        <p className="font-heading text-lg font-semibold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">Verified Patient</p>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-[1440px] px-3 sm:px-4 md:px-6 text-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl space-y-6"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
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
