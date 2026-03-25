import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Landmark, Lock, ShieldCheck, Smartphone, Wallet, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

type PaymentMethod = "card" | "paypal" | "apple" | "bank";
type MembershipPlan = "basic" | "concierge";

const plans = {
  basic: {
    name: "TID Basic",
    price: 49,
    desc: "Monthly essentials delivered to your door.",
    perks: ["Personalized 3-Step Routine", "Quarterly AI Skin Scan", "Exclusive Ingredient Guides"],
  },
  concierge: {
    name: "Concierge",
    price: 129,
    desc: "Unlimited access to professional guidance.",
    perks: ["Everything in Basic", "Monthly 1:1 Video Consult", "Priority AI Analysis (24h)", "Custom Formulated Actives"],
  },
} as const;

const paymentMethods: { id: PaymentMethod; label: string; desc: string; icon: typeof CreditCard }[] = [
  { id: "card", label: "Credit / Debit Card", desc: "Pay with Visa, Mastercard, or Amex", icon: CreditCard },
  { id: "paypal", label: "PayPal", desc: "Fast checkout with your PayPal account", icon: Wallet },
  { id: "apple", label: "Apple Pay", desc: "Quick secure payment on supported devices", icon: Smartphone },
  { id: "bank", label: "Bank Transfer", desc: "Manual transfer for annual / premium billing", icon: Landmark },
];

const MembershipPayment = () => {
  const location = useLocation();
  const initialPlan = new URLSearchParams(location.search).get("plan") === "concierge" ? "concierge" : "basic";

  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan>(initialPlan);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const activePlan = useMemo(() => plans[selectedPlan], [selectedPlan]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <motion.div initial="hidden" animate="visible" className="max-w-3xl">
              <motion.h1 variants={fadeUp} custom={0} className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Choose Your Membership
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-4 text-lg leading-8 text-muted-foreground">
                Select the plan you want and complete payment with the same secure checkout flow.
              </motion.p>
            </motion.div>

            <div className="mt-12 grid gap-8 xl:grid-cols-[1fr_360px]">
              <motion.section initial="hidden" animate="visible" className="rounded-[2.2rem] bg-white/70 p-6 shadow-soft sm:p-8">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Select Membership</h2>
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {(Object.keys(plans) as MembershipPlan[]).map((planKey) => {
                      const plan = plans[planKey];
                      const isSelected = selectedPlan === planKey;
                      return (
                        <button
                          key={planKey}
                          type="button"
                          onClick={() => setSelectedPlan(planKey)}
                          className={`rounded-[2rem] border px-6 py-6 text-left transition ${
                            isSelected
                              ? "border-transparent bg-[linear-gradient(135deg,#6e64d7_0%,#958cf0_100%)] text-white shadow-[0_24px_70px_rgba(111,100,216,0.24)]"
                              : "border-border bg-white text-foreground hover:border-primary/25"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-heading text-3xl font-semibold">{plan.name}</p>
                              <p className={`mt-2 text-sm ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                                {plan.desc}
                              </p>
                            </div>
                            <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${isSelected ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                              {planKey === "concierge" ? "Most Popular" : "Selected Plan"}
                            </span>
                          </div>
                          <div className="mt-6 flex items-end gap-2">
                            <span className="text-5xl font-bold">${plan.price}</span>
                            <span className={`${isSelected ? "text-white/80" : "text-muted-foreground"}`}>/mo</span>
                          </div>
                          <div className="mt-6 space-y-3">
                            {plan.perks.map((perk) => (
                              <div key={perk} className="flex items-center gap-3">
                                <Check className={`h-4 w-4 ${isSelected ? "text-white" : "text-primary"}`} />
                                <span className={`text-sm ${isSelected ? "text-white/88" : "text-foreground/85"}`}>{perk}</span>
                              </div>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">Account Details</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <input
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      placeholder="Full Name"
                      className="h-14 rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
                    />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">Payment Method</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`rounded-[1.4rem] border px-4 py-4 text-left transition ${
                          paymentMethod === method.id
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <method.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{method.label}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{method.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {paymentMethod === "card" ? (
                  <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
                    <div>
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Cardholder Name</label>
                      <input
                        value={cardName}
                        onChange={(event) => setCardName(event.target.value)}
                        placeholder="As it appears on card"
                        className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
                      />
                    </div>
                    <div className="mt-5">
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Card Number</label>
                      <div className="relative">
                        <input
                          value={cardNumber}
                          onChange={(event) => setCardNumber(event.target.value)}
                          placeholder="0000 0000 0000 0000"
                          className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 pr-12 text-foreground outline-none transition focus:border-primary/40"
                        />
                        <CreditCard className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <input
                        value={expiry}
                        onChange={(event) => setExpiry(event.target.value)}
                        placeholder="MM / YY"
                        className="h-14 rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
                      />
                      <input
                        value={cvv}
                        onChange={(event) => setCvv(event.target.value)}
                        placeholder="CVV"
                        className="h-14 rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
                      />
                    </div>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex gap-2">
                        <span className="h-4 w-6 rounded bg-[#d9d9de]" />
                        <span className="h-4 w-6 rounded bg-[#cfcfd6]" />
                        <span className="h-4 w-6 rounded bg-[#bdbdc8]" />
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Lock className="h-3.5 w-3.5" />
                        256-bit encrypted
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
                    <p className="text-base leading-8 text-muted-foreground">
                      {paymentMethod === "paypal" && "You selected PayPal. You would continue securely through PayPal after confirmation."}
                      {paymentMethod === "apple" && "You selected Apple Pay. On supported devices, checkout can be completed instantly."}
                      {paymentMethod === "bank" && "You selected bank transfer. After confirmation, our team will share the transfer instructions."}
                    </p>
                  </div>
                )}
              </motion.section>

              <motion.aside initial="hidden" animate="visible" className="space-y-5">
                <div className="rounded-[2rem] bg-white p-6 shadow-soft">
                  <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Membership Checkout
                  </div>
                  <h2 className="mt-5 font-heading text-3xl font-semibold text-foreground">{activePlan.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{activePlan.desc}</p>

                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    {activePlan.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground/85">{perk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border pt-6 text-sm">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Membership Fee</span>
                      <span className="font-medium text-foreground">${activePlan.price}.00</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-muted-foreground">
                      <span>Taxes & Fees</span>
                      <span className="font-medium text-foreground">$0.00</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                      <span className="text-lg font-semibold text-foreground">Order Total</span>
                      <span className="text-4xl font-bold text-primary">${activePlan.price}</span>
                    </div>
                  </div>

                  <Button className="mt-6 h-14 w-full rounded-2xl bg-primary text-base text-primary-foreground shadow-elevated hover:bg-primary/90">
                    Confirm & Pay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    Your payment is secure and encrypted.
                  </div>
                </div>

                <Link to="/" className="block rounded-[1.8rem] bg-white/80 p-5 text-sm text-muted-foreground shadow-soft">
                  Return to homepage
                </Link>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPayment;
