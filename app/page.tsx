"use client";

import VoiceWidget from "@/components/VoiceWidget";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE = "(303) 758-6237";
const PHONE_HREF = "tel:+13037586237";

/* ── Inline SVG Icons ── */

type IconProps = { className?: string; style?: React.CSSProperties };

function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UsersIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WrenchIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function DropletIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function ThermometerIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function ZapIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function AlertIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function MicIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ── Data ── */

const SERVICES = [
  {
    icon: DropletIcon,
    title: "Plumbing",
    accent: "#1a4b8c",
    items: [
      "Emergency Repairs (24/7)",
      "Drain Cleaning & Hydro Jetting",
      "Sewer Line Repair (Trenchless)",
      "Repiping (PEX & Copper)",
      "Water Heater Replacement",
      "Backflow & Sump Pumps",
    ],
  },
  {
    icon: ThermometerIcon,
    title: "Heating & Cooling",
    accent: "#e85d04",
    items: [
      "Furnace Repair & Replacement",
      "AC Repair & Replacement",
      "Boiler & Steam Boiler Service",
      "Heat Pumps & Mini-Splits",
      "Gas Line Repair & Installation",
      "Maintenance Plans",
    ],
  },
  {
    icon: ZapIcon,
    title: "Electrical",
    accent: "#1a4b8c",
    items: [
      "Panel Upgrades & Wiring",
      "EV Charging Installation",
      "Generator Installation",
      "Whole-House Surge Protection",
      "Ceiling Fan Installation",
      "Landscape Lighting",
    ],
  },
];

const TRUST_BADGES = [
  { icon: StarIcon, label: "4.9", sublabel: "Google Stars" },
  { icon: ShieldIcon, label: "Since 1980", sublabel: "46 Years Licensed" },
  { icon: UsersIcon, label: "10,000+", sublabel: "Clients Served" },
  { icon: WrenchIcon, label: "Flat-Rate", sublabel: "No Surprises" },
];

const EMERGENCIES = [
  { icon: DropletIcon, text: "Burst pipe flooding your home" },
  { icon: ThermometerIcon, text: "No heat in a Denver winter" },
  { icon: DropletIcon, text: "Sewage backup or overflow" },
  { icon: ZapIcon, text: "Gas smell or breaker tripping" },
  { icon: DropletIcon, text: "Dead water heater — no hot water" },
  { icon: ZapIcon, text: "Power outage in your home" },
];

const OFFERS = [
  { amount: "$52 Off", desc: "Any Service" },
  { amount: "$100 Off", desc: "Water Heater Install" },
  { amount: "$300 Off", desc: "New Furnace, Boiler, or AC" },
  { amount: "$18.99/mo", desc: "Time Saver Maintenance Plan" },
];

const FAQS = [
  {
    q: "Do you charge extra for nights and weekends?",
    a: "No. Our flat-rate pricing means the price we quote is the price you pay — whether it's Tuesday at noon or Saturday at midnight. No overtime surcharges, ever.",
  },
  {
    q: "How fast can you get here for an emergency?",
    a: "For true emergencies — flooding, gas leaks, no heat in winter — we aim for same-day dispatch. Most emergency calls during business hours are out the door within the hour.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Continuously licensed since 1980 — 46 years. Fully insured, bonded, and compliant with all Denver metro codes and regulations.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. For larger projects like HVAC replacements, repiping, or panel upgrades, we offer financing options. Ask when we quote your job.",
  },
  {
    q: "What's the Time Saver Maintenance Plan?",
    a: "For $18.99/month you get annual tune-ups for plumbing, HVAC, and electrical systems, plus priority scheduling and member discounts. It pays for itself by catching problems before they become emergencies.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="noise-overlay" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-section min-h-[92vh] flex flex-col justify-center">
        <div className="hero-topo" />
        <div className="hero-pipe-accent" />

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 z-[1]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-[80px]"
            fill="rgba(255,255,255,0.02)"
          >
            <path d="M0,100 L0,70 L100,40 L220,60 L350,25 L500,50 L620,10 L760,35 L880,18 L1020,55 L1140,30 L1280,58 L1380,38 L1440,55 L1440,100 Z" />
          </svg>
        </div>

        {/* Bottom angled edge */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="w-full h-[48px]"
            fill="#fdfaf5"
          >
            <path d="M0,48 L0,24 Q720,0 1440,24 L1440,48 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          {/* Eyebrow badge */}
          <div className="anim-up anim-d1 mb-7">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium text-white/85 border border-white/12 bg-white/[0.04]">
              <ShieldIcon className="w-4 h-4 text-copper-500" />
              Denver&apos;s Trusted Choice Since 1980
            </span>
          </div>

          {/* Headline */}
          <h1 className="anim-up anim-d2 font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-[-0.02em] max-w-[800px] mb-6">
            We Were Fixing Denver Pipes{" "}
            <span className="text-copper-500">
              Before Your House Was Built
            </span>
          </h1>

          {/* Subheadline */}
          <p className="anim-up anim-d3 text-lg sm:text-xl text-white/65 max-w-2xl mb-10 leading-relaxed">
            46 years. 10,000+ homes. One promise — fixed right the first time.
            Plumbing, heating & electrical. We answer at 2 AM when it matters
            most.
          </p>

          {/* CTAs */}
          <div className="anim-up anim-d4 flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-copper-600 hover:bg-copper-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cta-glow"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE}
            </a>
            <a
              href="#ai-receptionist"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-300"
            >
              <MicIcon className="w-5 h-5" />
              Talk to AI Receptionist
            </a>
          </div>

          {/* Trust badges */}
          <div className="anim-up anim-d5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TRUST_BADGES.map((b) => (
              <div
                key={b.label}
                className="trust-pill rounded-xl px-4 py-3 text-center"
              >
                <b.icon className="w-5 h-5 text-copper-500 mx-auto mb-1.5" />
                <div className="text-white font-heading font-bold text-lg leading-tight">
                  {b.label}
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">
                  {b.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EMERGENCY STRIP ═══════════ */}
      <section className="py-12 sm:py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="rounded-2xl p-6 sm:p-8 border-2 border-copper-600/15 bg-gradient-to-r from-orange-50/80 to-amber-50/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-copper-600/10">
                <AlertIcon className="w-6 h-6 text-copper-600" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
                Emergency? We&apos;re on our way.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {EMERGENCIES.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0 text-navy-700" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-copper-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-copper-500 transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now — 24/7 Emergency Line
              </a>
              <span className="text-sm text-gray-500">
                Flat-rate pricing. No overtime charges. No surprises.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="py-16 sm:py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-copper-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Full-Service Home Experts
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              One Call. Three Trades.{" "}
              <span className="text-navy-700">Done Right.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Why juggle three contractors? We handle plumbing, HVAC, and
              electrical under one roof — same quality, same guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="service-tile rounded-2xl p-7 sm:p-8"
              >
                <div
                  className="p-3 rounded-xl inline-flex mb-5"
                  style={{ background: `${svc.accent}0D` }}
                >
                  <svc.icon
                    className="w-7 h-7"
                    style={{ color: svc.accent }}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-5">
                  {svc.title}
                </h3>
                <ul className="space-y-3">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <CheckCircleIcon
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: svc.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Copper divider ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          className="h-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #e85d04, #1a4b8c, #e85d04, transparent)",
            opacity: 0.18,
          }}
        />
      </div>

      {/* ═══════════ TRUST / PROOF ═══════════ */}
      <section className="py-16 sm:py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Trust points */}
            <div>
              <span className="inline-block text-copper-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
                Why Denver Trusts Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                46 Years of Getting It Right the First Time
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Licensed Since 1980",
                    desc: "Brad Apple has been doing this for 46 years. We've outlasted trends, recessions, and every fly-by-night competitor in Denver.",
                  },
                  {
                    title: "4.9 Google Rating",
                    desc: "Not from 12 reviews — from thousands of Denver homeowners who trusted us with their homes and came back again.",
                  },
                  {
                    title: "Flat-Rate Pricing",
                    desc: "We quote the price before we start. The number on the estimate is the number on the invoice. Period.",
                  },
                  {
                    title: "One-Trip Resolution",
                    desc: "Our trucks carry 3,000+ parts. Most jobs are done same-day, same-visit. No return trips, no waiting around.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 p-1.5 rounded-lg flex-shrink-0 bg-navy-700/5">
                      <CheckCircleIcon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial callout */}
              <div className="mt-8 p-5 rounded-xl bg-white border border-navy-700/8 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;KC was out today for a drain issue, outstanding
                  customer service! And lots of knowledgeable information. I will
                  be having him come back to do other services at two locations!
                  This young man is an Asset to Time Plumbing!&rdquo;
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  — Verified Google Review
                </p>
              </div>
            </div>

            {/* Right: Offers */}
            <div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-700/6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-copper-600/10">
                    <StarIcon className="w-5 h-5 text-copper-600" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    Current Offers
                  </h3>
                </div>

                <div className="space-y-3">
                  {OFFERS.map((offer) => (
                    <div
                      key={offer.amount}
                      className="offer-row flex items-center gap-4 rounded-xl px-5 py-4"
                    >
                      <span className="font-heading font-extrabold text-2xl text-copper-600 whitespace-nowrap">
                        {offer.amount}
                      </span>
                      <span className="text-gray-700 font-medium">
                        {offer.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 w-full bg-navy-700 text-white font-bold py-3.5 rounded-xl hover:bg-navy-600 transition-all"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Claim Your Discount — Call Now
                  </a>
                </div>
              </div>

              {/* Mini trust badges */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <ShieldIcon className="w-5 h-5 text-navy-700" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Fully Licensed
                    </div>
                    <div className="text-xs text-gray-400">
                      Bonded & Insured
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <ClockIcon className="w-5 h-5 text-copper-600" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      24/7 Emergency
                    </div>
                    <div className="text-xs text-gray-400">
                      Always Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AI RECEPTIONIST ═══════════ */}
      <section id="ai-receptionist" className="dark-section py-16 sm:py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium text-white/75 border border-white/10 bg-white/[0.04] mb-6">
              <MicIcon className="w-4 h-4 text-copper-500" />
              New — AI-Powered
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Your After-Hours Receptionist{" "}
              <span className="text-copper-500">Never Sleeps</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Pipe burst at midnight? Our AI voice receptionist picks up
              instantly — books your emergency visit, collects your info, and
              dispatches help. No hold music. No voicemail.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: ClockIcon,
                title: "24/7 Availability",
                desc: "Answers every call — nights, weekends, holidays. Your customers never hit voicemail again.",
              },
              {
                icon: MicIcon,
                title: "Natural Conversation",
                desc: "Talks like a real receptionist. Asks the right questions, captures job details, handles emergencies.",
              },
              {
                icon: PhoneIcon,
                title: "Instant Booking",
                desc: "Schedules visits on the spot. Collects name, address, urgency, and preferred time slot.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6"
              >
                <item.icon className="w-8 h-8 text-copper-500 mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/40 text-sm mb-3">
              Try it now — tap the microphone button in the corner
            </p>
            <div className="inline-flex items-center gap-2 text-copper-500 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              AI Receptionist Online
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 sm:py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-500">
              Straight answers from 46 years of experience.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-gray-900 py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="dark-section py-16 sm:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            The Number Denver Has Trusted Since 1980
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a midnight emergency or a Monday morning tune-up,
            we pick up. 303-PLUMBER — one call, and it&apos;s handled.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-copper-600 hover:bg-copper-500 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cta-glow"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
            <a
              href="#ai-receptionist"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold text-lg px-10 py-4 rounded-xl border border-white/15 hover:border-white/25 transition-all"
            >
              <MicIcon className="w-5 h-5" />
              Talk to AI Receptionist
            </a>
          </div>

          <p className="text-white/30 text-sm">
            $52 off your first service &middot; Flat-rate pricing &middot; No
            overtime charges
          </p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="py-12 sm:py-16" style={{ background: "#06101f" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Time Plumbing, Heating &amp; Electric
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Family-owned and operated since 1980. Serving Denver metro with
                plumbing, HVAC, and electrical — three trades under one roof.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-copper-500 font-semibold hover:text-copper-400 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {PHONE}
              </a>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 text-sm tracking-wider uppercase">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Emergency Plumbing</li>
                <li>Drain Cleaning</li>
                <li>HVAC Repair</li>
                <li>Electrical</li>
                <li>Water Heaters</li>
                <li>Sewer Lines</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 text-sm tracking-wider uppercase">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Licensed Since 1980</li>
                <li>Owner: Brad Apple</li>
                <li>Denver Metro Area</li>
                <li>24/7 Emergency Service</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 text-sm tracking-wider uppercase">
                Get In Touch
              </h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Phone: {PHONE}</li>
                <li>Email: service@303plumber.com</li>
                <li>Denver, CO</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-sm">
              &copy; 2024 Time Plumbing, Heating &amp; Electric Inc. All rights
              reserved.
            </p>
            <div className="flex items-center gap-1.5 text-white/25 text-sm">
              <span>4.9</span>
              <StarIcon className="w-3.5 h-3.5 text-amber-500" />
              <span>on Google &middot; 10,000+ clients served</span>
            </div>
          </div>
        </div>
      </footer>

      <VoiceWidget />
    </main>
  );
}
