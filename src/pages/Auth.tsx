import { motion } from "framer-motion";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import drJackie from "@/assets/dr-jackie.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Auth = () => {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1380px] px-4 lg:px-8">
            <div className="grid min-h-[700px] items-stretch gap-10 xl:grid-cols-[0.92fr_1.08fr]">
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex h-full flex-col justify-center"
              >
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
                >
                  TID Access
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="mt-8 font-heading text-5xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
                >
                  {isSignup ? "Create Your" : "Welcome Back to"}
                  <br />
                  <span className="text-gradient">TID Account</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-8 max-w-xl text-lg leading-9 text-muted-foreground"
                >
                  {isSignup
                    ? "Save reports, revisit routines, and unlock a personalized ingredient journey guided by Dr. Jackie."
                    : "Access your saved analysis reports, consultation details, and customized skincare recommendations."}
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="mt-10 rounded-[2rem] bg-white/75 p-4 shadow-soft">
                  <div className="overflow-hidden rounded-[1.6rem]">
                    <img src={drJackie} alt="Dr. Jackie Levin" className="h-[340px] w-full object-cover" />
                  </div>
                  <div className="mt-4 rounded-[1.4rem] bg-[linear-gradient(180deg,#f0edff_0%,#e8e2ff_100%)] px-5 py-4">
                    <p className="text-sm italic leading-7 text-foreground/80">
                      "TID is designed to make clinical guidance feel clear, personal, and actionable."
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">Dr. Jackie Levin</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2.4rem] bg-white/80 p-6 shadow-[0_30px_80px_rgba(79,81,135,0.16)] sm:p-8"
              >
                <div className="rounded-full bg-muted p-1 shadow-soft">
                  <div className="grid grid-cols-2 gap-1">
                    <Link
                      to="/login"
                      className={`rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                        !isSignup ? "bg-white text-foreground shadow-soft" : "text-muted-foreground"
                      }`}
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className={`rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                        isSignup ? "bg-white text-foreground shadow-soft" : "text-muted-foreground"
                      }`}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-4xl font-bold text-foreground">
                    {isSignup ? "Create Account" : "Log In"}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    {isSignup
                      ? "Join TID to track your progress, store consultations, and personalize your skincare path."
                      : "Use your email to securely access your TID dashboard."}
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  {isSignup ? (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                      <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-white px-4">
                        <UserRound className="h-4 w-4 text-primary" />
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                    <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-white px-4">
                      <Mail className="h-4 w-4 text-primary" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Password</label>
                    <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-white px-4">
                      <LockKeyhole className="h-4 w-4 text-primary" />
                      <input
                        type="password"
                        placeholder={isSignup ? "Create a secure password" : "Enter your password"}
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  {isSignup ? (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Confirm Password</label>
                      <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-white px-4">
                        <LockKeyhole className="h-4 w-4 text-primary" />
                        <input
                          type="password"
                          placeholder="Repeat your password"
                          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <label className="inline-flex items-center gap-2 text-muted-foreground">
                      <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                      {isSignup ? "Send me weekly skincare insights" : "Remember me"}
                    </label>
                    {!isSignup ? (
                      <button type="button" className="font-medium text-primary">
                        Forgot Password?
                      </button>
                    ) : null}
                  </div>

                  <Button className="h-14 w-full rounded-2xl bg-primary text-base text-primary-foreground shadow-elevated hover:bg-primary/90">
                    {isSignup ? "Create My Account" : "Log In to TID"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="my-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Or continue with</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <button className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-medium text-foreground transition hover:bg-muted/40">
                    Continue with Google
                  </button>
                  <button className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-medium text-foreground transition hover:bg-muted/40">
                    Continue with Apple
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
