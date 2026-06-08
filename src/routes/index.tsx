import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  Zap,
  CheckCircle2,
  UserCheck,
  Send,
  Hammer,
  Scale,
  Calculator,
  Building2,
  Clock,
  TrendingUp,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import blackbirdLogo from "@/assets/blackbird-logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackbird — Every enquiry answered in under 90 seconds" },
      {
        name: "description",
        content:
          "Blackbird responds instantly, qualifies the enquiry, and hands it to your team — so you never lose work to a slower reply.",
      },
      { property: "og:title", content: "Blackbird — The Hybrid Reply System" },
      {
        property: "og:description",
        content:
          "AI speed. Human control. Every enquiry receives a response in under 90 seconds.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans antialiased selection:bg-cyan-400 selection:text-black">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <QuoteStrip />
      <Industries />
      <Results />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src={blackbirdLogo} alt="Blackbird" className="w-8 h-8 object-contain" />
          <span className="font-semibold tracking-tight text-lg">Blackbird</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <a href="#how" className="hover:text-white transition">How it Works</a>
          <a href="#who" className="hover:text-white transition">Businesses We Help</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition group"
        >
          Get a Free Audit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.18em] text-neutral-300"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              The Hybrid Reply System
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]"
            >
              Every enquiry answered in{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                under 90 seconds.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed"
            >
              Blackbird responds instantly, qualifies the enquiry, and hands it to your team —
              so you never lose work to a slower reply.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-cyan-400 text-black px-6 py-3.5 rounded-full font-medium hover:bg-cyan-300 transition group"
              >
                See how many enquiries you're missing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 rounded-full font-medium hover:bg-white/5 transition"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500"
            >
              <span className="h-px w-8 bg-neutral-700" />
              Trades · Legal · Accountancy · UAE Real Estate
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const steps = [
    { icon: Phone, title: "New enquiry arrives", sub: "Call · WhatsApp · Email" },
    { icon: Zap, title: "Instant reply", sub: "Under 90 seconds", accent: true },
    { icon: CheckCircle2, title: "Qualification", sub: "Service · Location · Timeline" },
    { icon: Send, title: "Summary delivered", sub: "Everything your team needs" },
    { icon: UserCheck, title: "Human takes over", sub: "Call · Quote · Book" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl rounded-3xl" />
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Live flow</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-neutral-400">Active</span>
          </div>
        </div>
        <div className="space-y-2">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition ${
                s.accent
                  ? "border-cyan-400/30 bg-cyan-400/5"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  s.accent ? "bg-cyan-400 text-black" : "bg-white/5 text-neutral-300"
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{s.title}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{s.sub}</div>
              </div>
              {s.accent && (
                <span className="text-[10px] uppercase tracking-widest text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded">
                  &lt; 90s
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- SECTION HELPERS ---------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-400/90">
      <span className="h-px w-6 bg-cyan-400/60" />
      {children}
    </div>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] ${className}`}>
      {children}
    </h2>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const cards = [
    {
      title: "Missed calls go nowhere.",
      body: "Most callers don't leave a voicemail. They simply contact the next business on the list.",
    },
    {
      title: "Slow replies cost opportunities.",
      body: "The longer someone waits for a response, the more likely they are to choose someone else.",
    },
    {
      title: "Follow-up rarely happens.",
      body: "Warm enquiries often disappear because nobody gets around to checking back in.",
    },
  ];
  return (
    <section className="border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <SectionLabel>The Problem</SectionLabel>
          <SectionHeading>
            You're not losing work to bad service.<br />
            <span className="text-neutral-500">You're losing it to silence.</span>
          </SectionHeading>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
            A missed call. A slow reply. A WhatsApp left unread. That's not a technology problem.
            That's a lost customer.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
            >
              <div className="text-5xl font-semibold text-cyan-400/30 group-hover:text-cyan-400/60 transition">
                0{i + 1}
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{c.title}</h3>
              <p className="mt-3 text-neutral-400 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Capture", body: "Calls, WhatsApp messages, emails, and contact forms arrive in one place." },
    { n: "02", title: "Instant Reply", body: "A fast, professional response is sent automatically." },
    { n: "03", title: "Qualification", body: "We gather the key details your team needs before taking over." },
    { n: "04", title: "Human Handoff", body: "A summary is delivered directly to your team." },
    { n: "05", title: "Follow-Up", body: "If needed, Blackbird keeps the conversation warm until you're ready to respond." },
  ];
  return (
    <section id="how" className="border-t border-white/5 py-28 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading>
            AI speed. <span className="text-neutral-500">Human control.</span>
          </SectionHeading>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Every enquiry receives an immediate response and basic qualification before being handed to a real person on your team.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-[#111]/60"
            >
              <div className="text-xs font-mono text-cyan-400 tracking-widest">{s.n}</div>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px overflow-hidden"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(34,211,238,0.5) 1px, transparent 1.2px)",
                    backgroundSize: "6px 1px",
                    backgroundRepeat: "repeat-x",
                    animation: "flow-dots 1.6s linear infinite",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUOTE STRIP ---------------- */
function QuoteStrip() {
  return (
    <section className="border-y border-white/5 py-20 bg-[#070707]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-tight"
        >
          "You stay in control.<br />
          <span className="text-cyan-400">We just make sure no enquiry goes cold."</span>
        </motion.blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Blackbird Hybrid Reply System
        </p>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const items = [
    { icon: Hammer, title: "Trades & Contractors", body: "Never miss opportunities while you're on-site." },
    { icon: Scale, title: "Legal Services", body: "Respond to potential clients without interrupting client work." },
    { icon: Calculator, title: "Accountancy", body: "Stay responsive during busy periods and deadlines." },
    { icon: Building2, title: "UAE Real Estate", body: "Reply first on WhatsApp before competitors do." },
  ];
  return (
    <section id="who" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel>Who It's For</SectionLabel>
          <SectionHeading>Built for businesses where speed matters.</SectionHeading>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan-400 group-hover:text-black flex items-center justify-center transition">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */
function Results() {
  const cards = [
    { icon: CheckCircle2, title: "No missed enquiries", body: "Every customer receives a response." },
    { icon: Clock, title: "Faster response times", body: "Reply before competitors have the chance." },
    { icon: MessageSquare, title: "Better conversations", body: "Receive qualified enquiries instead of starting from scratch." },
  ];
  return (
    <section className="border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel>Results</SectionLabel>
          <SectionHeading>What faster replies actually create.</SectionHeading>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-cyan-400/[0.08] to-transparent border border-cyan-400/10"
            >
              <c.icon className="w-7 h-7 text-cyan-400" />
              <h3 className="mt-6 text-xl font-medium tracking-tight">{c.title}</h3>
              <p className="mt-2 text-neutral-400 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const cards = [
    { icon: Zap, title: "Instant response", body: "Customers hear back in under 90 seconds." },
    { icon: UserCheck, title: "Human handoff", body: "You remain in control of every conversation." },
    { icon: TrendingUp, title: "No new software", body: "Works with your existing phone number, WhatsApp, email, and contact forms." },
  ];
  return (
    <section className="border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionHeading className="max-w-3xl">Why businesses choose Blackbird.</SectionHeading>
        </motion.div>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {cards.map((c, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <c.icon className="w-6 h-6 text-cyan-400" />
              <h3 className="mt-5 text-lg font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      tag: "Trades",
      quote: "We used to miss calls every day while working on-site. Now every enquiry gets a response before we even see it.",
      author: "James R., Director",
    },
    {
      tag: "Legal",
      quote: "The biggest difference is consistency. Every enquiry gets acknowledged immediately and nothing slips through the cracks.",
      author: "Sarah M., Partner",
    },
    {
      tag: "Accountancy",
      quote: "Busy season used to mean delayed replies. Now clients hear back straight away and our team only handles qualified conversations.",
      author: "Michael T., Managing Director",
    },
  ];
  return (
    <section className="border-t border-white/5 py-28 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col"
            >
              <span className="self-start text-[10px] uppercase tracking-[0.2em] text-cyan-400 border border-cyan-400/30 rounded-full px-2.5 py-1">
                {t.tag}
              </span>
              <blockquote className="mt-6 text-lg leading-relaxed text-neutral-200 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-neutral-500">— {t.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "£1,200",
      sub: "One-time setup",
      body: "For businesses that need reliable first replies and qualification.",
      featured: false,
    },
    {
      name: "Growth",
      price: "£1,800",
      sub: "Most popular",
      body: "For businesses that want qualification and automated follow-up.",
      featured: true,
    },
    {
      name: "Always-On",
      price: "£350",
      sub: "per month",
      body: "Ongoing optimisation, monitoring, and support.",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="border-t border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading>
            Start simple.<br />
            <span className="text-neutral-500">Scale when you're ready.</span>
          </SectionHeading>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                t.featured
                  ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/[0.08] to-transparent"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.2em] bg-cyan-400 text-black px-3 py-1 rounded-full font-medium">
                  Most popular
                </span>
              )}
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-400">{t.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">{t.price}</span>
                <span className="text-sm text-neutral-500">{t.sub}</span>
              </div>
              <p className="mt-4 text-neutral-400 leading-relaxed">{t.body}</p>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full text-sm font-medium transition ${
                  t.featured
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-white/15 hover:bg-white/5"
                }`}
              >
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          Works with your existing phone number, WhatsApp account, email inbox, and contact forms.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "Will customers know it's automated?",
      a: "Messages are designed to feel natural and professional while gathering the information your team needs.",
    },
    {
      q: "Does it work with my existing number?",
      a: "Yes. Blackbird works with your existing communication channels.",
    },
    {
      q: "What channels does it cover?",
      a: "Phone enquiries, WhatsApp, email, and website contact forms.",
    },
    {
      q: "Can I take over at any time?",
      a: "Yes. Your team can step in whenever needed.",
    },
    {
      q: "Is this replacing my receptionist or sales team?",
      a: "No. Blackbird handles the first response and qualification. Your team remains responsible for conversations, quotes, bookings, and customer relationships.",
    },
    {
      q: "How quickly can it go live?",
      a: "Most businesses can be up and running within days.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-white/5 py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>Questions, answered.</SectionHeading>
        </motion.div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6"
                >
                  <span className="text-lg font-medium">{it.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition ${
                      isOpen ? "bg-cyan-400 text-black border-cyan-400 rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-neutral-400 leading-relaxed max-w-2xl">{it.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.05]"
        >
          How many enquiries did you{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            miss last week?
          </span>
        </motion.h2>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          We'll show you where potential customers are slipping through the cracks and how much
          those missed opportunities may be costing you.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-2 bg-cyan-400 text-black px-7 py-4 rounded-full font-medium hover:bg-cyan-300 transition group text-lg"
        >
          Get My Free Audit
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </a>
        <p className="mt-6 text-sm text-neutral-500">
          No obligation. No technical setup. No jargon.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={blackbirdLogo} alt="Blackbird" className="w-8 h-8 object-contain" />
          <div>
            <div className="font-semibold tracking-tight">Blackbird</div>
            <div className="text-xs text-neutral-500">Never miss an enquiry.</div>
          </div>
        </div>
        <div className="text-xs text-neutral-500">© 2026 Blackbird · London, UK</div>
      </div>
    </footer>
  );
}
