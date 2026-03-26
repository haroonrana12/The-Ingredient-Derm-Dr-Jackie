import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CreditCard, Landmark, Lock, MessageSquare, Smartphone, Video, Wallet, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import drJackie from "@/assets/dr-jackie.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

type PaymentMethod = "card" | "paypal" | "apple" | "bank";

const paymentMethods: { id: PaymentMethod; label: string; desc: string; icon: typeof CreditCard }[] = [
  { id: "card", label: "Credit / Debit Card", desc: "Pay with Visa, Mastercard, or Amex", icon: CreditCard },
  { id: "paypal", label: "PayPal", desc: "Fast checkout with your PayPal account", icon: Wallet },
  { id: "apple", label: "Apple Pay", desc: "Quick secure payment on supported devices", icon: Smartphone },
  { id: "bank", label: "Bank Transfer", desc: "Manual transfer for concierge care", icon: Landmark },
];

const ConsultPayment = () => {
  const location = useLocation();
  const booking = (location.state as { booking?: Record<string, unknown> } | undefined)?.booking;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const concern = (booking?.selectedConcern as string) || "Acne Consultation";
  const date = (booking?.selectedDate as string) || "05";
  const time = (booking?.selectedTime as string) || "10:30 AM";
  const consultMode = ((booking?.consultMode as "video" | "chat") || "video");
  const fullName = (booking?.fullName as string) || "";
  const email = (booking?.email as string) || "";
  const phone = (booking?.phone as string) || "";

  const fee = useMemo(() => {
    if (concern === "Anti-Aging") return 189;
    if (concern === "Pigmentation") return 159;
    return 149;
  }, [concern]);

  const methodFields = (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Full Name
          </label>
          <input value={fullName} readOnly className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none" />
        </div>
        <div>
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Email Address
          </label>
          <input value={email} readOnly className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none" />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Phone Number
        </label>
        <input value={phone} readOnly className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none" />
      </div>

      <div className="mt-8">
        <h3 className="flex items-center gap-3 font-heading text-2xl font-semibold text-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <CreditCard className="h-5 w-5" />
          </span>
          Payment Details
        </h3>
      </div>

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

      {paymentMethod === "card" ? (
        <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Cardholder Name
            </label>
            <input
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
              placeholder="As it appears on card"
              className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
            />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Card Number
            </label>
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
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Expiry Date
              </label>
              <input
                value={expiry}
                onChange={(event) => setExpiry(event.target.value)}
                placeholder="MM / YY"
                className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
              />
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                CVV
              </label>
              <input
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
                placeholder="123"
                className="h-14 w-full rounded-2xl border border-border bg-[#f8f8fc] px-4 text-foreground outline-none transition focus:border-primary/40"
              />
            </div>
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
      ) : paymentMethod === "paypal" ? (
        <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-muted-foreground">
            You selected PayPal. After clicking confirm, you would be redirected to PayPal to complete your payment securely.
          </p>
        </div>
      ) : paymentMethod === "apple" ? (
        <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-muted-foreground">
            Apple Pay is selected. On supported devices, you can confirm instantly with Face ID or Touch ID.
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-[2rem] border border-border bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-muted-foreground">
            Bank transfer is selected. After confirmation, you can share the receipt with our team to reserve the session.
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <motion.div initial="hidden" animate="visible" className="max-w-3xl">
              <motion.h1 variants={fadeUp} custom={0} className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Complete Your Booking
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-4 text-lg leading-8 text-muted-foreground">
                Secure your consultation with Dr. Jackie Levin.
              </motion.p>
            </motion.div>

            <div className="mt-12 grid gap-8 xl:grid-cols-[1fr_340px]">
              <motion.section
                initial="hidden"
                animate="visible"
                className="rounded-[2.2rem] bg-white/70 p-6 shadow-soft sm:p-8"
              >
                {methodFields}
              </motion.section>

              <motion.aside
                initial="hidden"
                animate="visible"
                className="space-y-5"
              >
                <div className="rounded-[2rem] bg-white p-6 shadow-soft">
                  <div className="inline-flex rounded-full bg-[#ece3cb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68562b]">
                    Expert Consultation
                  </div>
                  <h2 className="mt-5 font-heading text-3xl font-semibold text-foreground">{concern}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">with Dr. Jackie Levin</p>

                  <div className="mt-6 space-y-5 border-t border-border pt-6">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Date & Time</p>
                        <p className="mt-1 font-medium text-foreground">Nov {date}, {time}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Mode</p>
                        <p className="mt-1 font-medium text-foreground">{consultMode === "video" ? "HD Video Call" : "Secure Chat"}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {consultMode === "video" ? <Video className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Duration</p>
                        <p className="mt-1 font-medium text-foreground">{concern === "Anti-Aging" ? "45 min session" : "30 min session"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-6 text-sm">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Consultation Fee</span>
                      <span className="font-medium text-foreground">${fee}.00</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-muted-foreground">
                      <span>Taxes & Fees</span>
                      <span className="font-medium text-foreground">$0.00</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                      <span className="text-lg font-semibold text-foreground">Order Total</span>
                      <span className="text-4xl font-bold text-primary">${fee}</span>
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

                <div className="rounded-[1.8rem] bg-white/80 p-4 shadow-soft">
                  <div className="flex items-center gap-4">
                    <img src={drJackie} alt="Dr. Jackie Levin" className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-foreground">Dr. Jackie Levin</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        "The right ingredient protocol starts with a clinical conversation. Looking forward to seeing you."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultPayment;
