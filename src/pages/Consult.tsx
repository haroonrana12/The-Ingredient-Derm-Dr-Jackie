import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Video, MessageSquare, Clock, Shield, ArrowRight, Sparkles, Stethoscope, ChevronDown, Upload, CheckCircle2, BadgeCheck, Microscope, BriefcaseMedical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import drJackie from "@/assets/dr-jackie.png";
import c3Image from "@/assets/C-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { title: "Acne Treatment", desc: "Comprehensive management for adult, hormonal, or cystic acne including prescription strategies.", price: "$149", duration: "30 Minutes", icon: Stethoscope },
  { title: "Anti-Aging", desc: "Evidence-based protocols targeting fine lines, laxity, and photo-damage with clinical ingredients.", price: "$189", duration: "45 Minutes", icon: Sparkles },
  { title: "Pigmentation", desc: "Focused analysis and treatment plans for melasma, sun spots, and post-inflammatory marks.", price: "$159", duration: "30 Minutes", icon: Shield },
];

const processSteps = [
  {
    title: "01. Select Concern",
    desc: "Identify your primary skin goals: from cystic acne and aging to specialized pigmentation treatments.",
    icon: ArrowRight,
  },
  {
    title: "02. Clinical Data",
    desc: "Upload high-resolution clinical photos and complete a comprehensive dermatological health history.",
    icon: Calendar,
  },
  {
    title: "03. Secure Booking",
    desc: "Choose a preferred modality - secure video or private chat - and confirm your session with Dr. Jackie.",
    icon: Clock,
  },
  {
    title: "04. Expert Plan",
    desc: "Receive a custom clinical protocol including ingredient breakdowns and prescription referrals if needed.",
    icon: Shield,
  },
];

const availabilityDays = [
  { label: "27", muted: true },
  { label: "28", muted: true },
  { label: "29", muted: true },
  { label: "30", muted: true },
  { label: "01" },
  { label: "02" },
  { label: "03" },
  { label: "04" },
  { label: "05", active: true },
  { label: "06" },
  { label: "07" },
  { label: "08" },
  { label: "09" },
  { label: "10" },
];

const availableSlots = [
  { label: "09:00 AM" },
  { label: "10:30 AM", active: true },
  { label: "11:00 AM", muted: true },
  { label: "01:00 PM" },
  { label: "02:30 PM" },
  { label: "04:00 PM" },
];

const authorityPoints = [
  {
    title: "Board-Certified Excellence",
    desc: "Fellow of the American Academy of Dermatology (FAAD) with rigorous clinical standards.",
    icon: BadgeCheck,
  },
  {
    title: "Mohs Surgery Specialization",
    desc: "Advanced expertise in precise surgical oncology and skin health structural integrity.",
    icon: Microscope,
  },
  {
    title: "15+ Years Experience",
    desc: "Dedicated career focused on the intersection of pharmaceutical chemistry and patient care.",
    icon: BriefcaseMedical,
  },
];

const testimonials = [
  {
    quote:
      "Dr. Jackie's approach is unlike any other. She broke down the ingredients in my routine and fixed my cystic acne in weeks.",
    name: "Sarah M.",
  },
  {
    quote:
      "The online consultation was so smooth. I received a prescription and a detailed guide that actually worked.",
    name: "David L.",
  },
  {
    quote:
      "Professional, clinical, and empathetic. Finally a doctor who understands the science behind the marketing.",
    name: "Elena R.",
  },
];

const Consult = () => {
  const navigate = useNavigate();
  const [selectedConcern, setSelectedConcern] = useState("Acne Treatment");
  const [consultMode, setConsultMode] = useState<"video" | "chat">("video");
  const [selectedDate, setSelectedDate] = useState("05");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const concernOptions = useMemo(() => services.map((service) => service.title), []);
  const confirmationLabel = `${selectedConcern} - Nov ${selectedDate} at ${selectedTime}`;
  const bookingReady = fullName.trim() && email.trim() && phone.trim();

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
                  Expert Care
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="mt-8 font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
                >
                  Consult a
                  <br />
                  <span className="text-gradient">Board-Certified</span>
                  <br />
                  Dermatologist
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-8 max-w-lg text-lg leading-9 text-muted-foreground"
                >
                  Get personalized, science-backed skincare guidance from Dr. Jackie. Professional medical expertise meets high-end clinical luxury.
                </motion.p>
                <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-4">
                  <Button className="h-14 rounded-full bg-primary px-8 text-base text-primary-foreground shadow-elevated hover:bg-primary/90">
                    Book Your Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 rounded-full border-0 bg-muted px-8 text-base text-foreground hover:bg-muted/80"
                  >
                    View Clinical Standards
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="rounded-[2.2rem] border border-white/70 bg-white/60 p-4 shadow-[0_30px_80px_rgba(79,81,135,0.18)] backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
                    <img
                      src={drJackie}
                      alt="Dr. Jackie Levin"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(17,21,43,0.12)_100%)]" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] bg-white/72 px-5 py-4 backdrop-blur-md">
                      <p className="text-sm font-semibold text-primary">Dr. Jackie Levin, MD</p>
                      <p className="mt-1 text-sm text-foreground/75">
                        Board-Certified Dermatologist &amp; Mohs Surgeon
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div initial="hidden" animate="visible" className="mx-auto mb-16 mt-20 max-w-2xl text-center">
              <motion.p variants={fadeUp} custom={4} className="text-lg text-muted-foreground">
                Expert dermatology consultations from the comfort of your home. Video or chat, your choice.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" className="mb-16 flex flex-wrap justify-center gap-6">
              {[
                { icon: Video, label: "HD Video Calls" },
                { icon: Shield, label: "Board Certified" },
                { icon: Clock, label: "Same-Week Availability" },
                { icon: MessageSquare, label: "Follow-up Support" },
              ].map((b, i) => (
                <motion.div key={b.label} variants={fadeUp} custom={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon size={18} className="text-primary" />
                  {b.label}
                </motion.div>
              ))}
            </motion.div>

            <section className="mb-20 rounded-[2.2rem] bg-white/70 px-6 py-14 shadow-soft sm:px-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
                <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Science-Backed Process
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  Our four-step methodology ensures every patient receives the highest clinical standard of care through a seamless digital experience.
                </motion.p>
              </motion.div>

              <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index + 2}
                    className="text-left"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-soft">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-4 text-sm leading-8 text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                    Specialized Pathways
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    Targeted expertise for every dermatological need, from clinical pathologies to aesthetic optimization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["All Types", "Clinical", "Cosmetic"].map((filter, index) => (
                    <button
                      key={filter}
                      className={`rounded-full px-5 py-2.5 text-sm ${
                        index === 0
                          ? "border border-primary/20 bg-white text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="rounded-[2rem] bg-white p-8 shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <p className="font-heading text-2xl font-bold text-foreground">{s.price}</p>
                    </div>
                    <h3 className="mt-8 font-heading text-3xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-4 min-h-[96px] text-sm leading-8 text-muted-foreground">{s.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {s.duration}
                    </div>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => {
                        setSelectedConcern(s.title);
                        setBookingConfirmed(false);
                      }}
                      className="mt-8 h-12 w-full rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Select Path
                    </Button>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-20 grid gap-10 xl:grid-cols-[1fr_0.95fr]">
              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">Patient Details</h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                    <input
                      type="text"
                      placeholder="Dr. Jane Smith"
                      value={fullName}
                      onChange={(event) => {
                        setFullName(event.target.value);
                        setBookingConfirmed(false);
                      }}
                      className="h-14 w-full rounded-2xl border border-border bg-white px-4 text-foreground outline-none transition focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setBookingConfirmed(false);
                      }}
                      className="h-14 w-full rounded-2xl border border-border bg-white px-4 text-foreground outline-none transition focus:border-primary/40"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setBookingConfirmed(false);
                    }}
                    className="h-14 w-full rounded-2xl border border-border bg-white px-4 text-foreground outline-none transition focus:border-primary/40"
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-foreground">Skin Concern</label>
                  <div className="relative">
                    <select
                      value={selectedConcern}
                      onChange={(event) => {
                        setSelectedConcern(event.target.value);
                        setBookingConfirmed(false);
                      }}
                      className="h-14 w-full appearance-none rounded-2xl border border-border bg-white px-4 pr-12 text-foreground outline-none transition focus:border-primary/40"
                    >
                      {concernOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-foreground">Optional Notes</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your current routine or medical history..."
                    value={notes}
                    onChange={(event) => {
                      setNotes(event.target.value);
                      setBookingConfirmed(false);
                    }}
                    className="w-full rounded-2xl border border-border bg-white px-4 py-4 text-foreground outline-none transition focus:border-primary/40"
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-foreground">Clinical Images</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    multiple
                    className="hidden"
                    onChange={(event) => {
                      const files = Array.from(event.target.files ?? []);
                      if (!files.length) return;
                      setUploadedImages(files.map((file) => file.name));
                      setBookingConfirmed(false);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full rounded-[1.8rem] border border-dashed border-border bg-white px-6 py-12 text-center transition hover:border-primary/35 hover:bg-muted/30"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <Upload className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-base font-medium text-foreground">
                      {uploadedImages.length ? `${uploadedImages.length} image(s) uploaded` : "Click to upload or drag & drop"}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">High-res front and side views recommended</p>
                    {uploadedImages.length ? (
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {uploadedImages.map((image) => (
                          <span key={image} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                            {image}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </button>
                </div>

                <div className="mt-5">
                  <label className="mb-3 block text-sm font-medium text-foreground">Consultation Mode</label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => {
                        setConsultMode("video");
                        setBookingConfirmed(false);
                      }}
                      className={`rounded-[1.4rem] px-5 py-4 text-left ${
                        consultMode === "video"
                          ? "border border-primary bg-primary/5 shadow-soft"
                          : "border border-border bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-4 w-4 items-center justify-center rounded-full ${consultMode === "video" ? "border border-primary" : "border border-muted-foreground/40"}`}>
                          {consultMode === "video" ? <span className="h-2 w-2 rounded-full bg-primary" /> : null}
                        </span>
                        <div>
                          <p className="font-heading text-lg font-semibold text-foreground">Video Call</p>
                          <p className="text-sm text-muted-foreground">Real-time clinical review</p>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setConsultMode("chat");
                        setBookingConfirmed(false);
                      }}
                      className={`rounded-[1.4rem] px-5 py-4 text-left ${
                        consultMode === "chat"
                          ? "border border-primary bg-primary/5 shadow-soft"
                          : "border border-border bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-4 w-4 items-center justify-center rounded-full ${consultMode === "chat" ? "border border-primary" : "border border-muted-foreground/40"}`}>
                          {consultMode === "chat" ? <span className="h-2 w-2 rounded-full bg-primary" /> : null}
                        </span>
                        <div>
                          <p className="font-heading text-lg font-semibold text-foreground">Secure Chat</p>
                          <p className="text-sm text-muted-foreground">Async expert guidance</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">Availability</h2>

                <div className="mt-8 rounded-[2.2rem] bg-white/80 p-6 shadow-soft sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-3xl font-semibold text-foreground">November 2024</h3>
                    <div className="flex gap-3">
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
                        <ArrowRight className="h-4 w-4 rotate-180 text-foreground" />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
                        <ArrowRight className="h-4 w-4 text-foreground" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-7 gap-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-7 gap-3">
                    {availabilityDays.map((day) => (
                      <button
                        key={`${day.label}-${day.muted ? "muted" : "active"}`}
                        type="button"
                        disabled={day.muted}
                        onClick={() => {
                          if (day.muted) return;
                          setSelectedDate(day.label);
                          setBookingConfirmed(false);
                        }}
                        className={`h-12 rounded-xl text-sm font-medium ${
                          selectedDate === day.label && !day.muted
                            ? "bg-primary text-primary-foreground shadow-soft"
                            : day.muted
                              ? "bg-transparent text-muted-foreground/45"
                              : "bg-white text-foreground shadow-soft"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Available Slots
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot.label}
                          type="button"
                          disabled={slot.muted}
                          onClick={() => {
                            if (slot.muted) return;
                            setSelectedTime(slot.label);
                            setBookingConfirmed(false);
                          }}
                          className={`h-12 rounded-xl border text-sm font-semibold transition ${
                            selectedTime === slot.label && !slot.muted
                              ? "border-primary bg-primary/5 text-primary"
                              : slot.muted
                                ? "border-transparent bg-muted text-muted-foreground/60"
                                : "border-primary/40 bg-white text-primary hover:bg-primary/5"
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.6rem] bg-[linear-gradient(180deg,#f1efff_0%,#ebe8ff_100%)] p-5">
                    <p className="text-sm font-medium text-primary">
                      Selected: {confirmationLabel} via {consultMode === "video" ? "Video Call" : "Secure Chat"}
                    </p>
                    {uploadedImages.length ? (
                      <p className="mt-2 text-xs text-muted-foreground">{uploadedImages.length} clinical image(s) attached</p>
                    ) : null}
                    <Button
                      className="mt-5 h-14 w-full rounded-2xl bg-primary text-base text-primary-foreground shadow-elevated hover:bg-primary/90"
                      disabled={!bookingReady}
                      onClick={() => {
                        setBookingConfirmed(true);
                        navigate("/consult/payment", {
                          state: {
                            booking: {
                              fullName,
                              email,
                              phone,
                              notes,
                              selectedConcern,
                              selectedDate,
                              selectedTime,
                              consultMode,
                              uploadedImages,
                            },
                          },
                        });
                      }}
                    >
                      Continue to Payment
                    </Button>
                    {bookingConfirmed ? (
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        Booking details confirmed for {selectedDate} November at {selectedTime}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20 grid items-center gap-10 xl:grid-cols-[1fr_1fr]">
              <div className="rounded-[2.2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(89,169,255,0.42),rgba(21,43,76,0.94)_48%,#050913_100%)] shadow-[0_30px_90px_rgba(11,22,40,0.35)]">
                <div className="relative h-[420px] overflow-hidden rounded-[1.8rem] flex items-center justify-center bg-white/80">
                  <img
                    src={c3Image}
                    alt="Clinical authority - dermatologist"
                    className="h-full w-full object-cover object-center rounded-[1.8rem] shadow-lg border border-white/60"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Unmatched Clinical Authority
                </h2>
                <div className="mt-10 space-y-8">
                  {authorityPoints.map((point, index) => (
                    <motion.div
                      key={point.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={index}
                      className="flex gap-4"
                    >
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <point.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-foreground">{point.title}</h3>
                        <p className="mt-2 text-base leading-8 text-muted-foreground">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-20">
              <div className="text-center">
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Patient Experiences
                </h2>
                <div className="mt-4 flex items-center justify-center gap-2 text-[#a68a17]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Sparkles key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index}
                    className="relative rounded-[2rem] bg-white/75 p-8 shadow-soft"
                  >
                    <p className="text-lg italic leading-9 text-foreground/80">"{item.quote}"</p>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20" />
                      <div>
                        <p className="font-heading text-lg font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Verified Patient</p>
                      </div>
                    </div>
                    <span className="absolute right-6 top-6 text-5xl text-primary/10">"</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#6e64d7_0%,#9288ef_100%)] px-6 py-16 text-center text-primary-foreground shadow-[0_35px_90px_rgba(110,100,215,0.28)] sm:px-10">
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Start your personalized skin consultation today
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="mx-auto mt-6 max-w-3xl text-base leading-8 text-primary-foreground/80 sm:text-lg"
                >
                  Join thousands of patients who have transformed their skin health through clinical science and specialized dermatological care.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                  <Button className="h-14 rounded-full bg-white px-8 text-base text-primary hover:bg-white/92">
                    Book Consultation
                  </Button>
                  <Link to="/skin-analysis">
                    <Button
                      variant="outline"
                      className="h-14 rounded-full border border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    >
                      Start Skin Analysis
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consult;
