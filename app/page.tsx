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

function CheckIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

function HeartIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function FlagIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

/* ── Data ── */

const SERVICES = [
  {
    icon: DropletIcon,
    title: "Plumbing",
    accent: "#1a2f5e",
    items: [
      "Emergency Repairs (24/7)",
      "Drain Cleaning & Hydro-Jetting",
      "Sewer Line Repair (Trenchless)",
      "Whole-House Repiping",
      "Water Heater Replacement",
      "Sump Pump Installation",
    ],
  },
  {
    icon: ThermometerIcon,
    title: "Heating & Cooling",
    accent: "#c0392b",
    items: [
      "Furnace Repair & Replacement",
      "AC Repair & Installation",
      "Boiler & Steam Boiler Service",
      "Heat Pumps & Mini-Splits",
      "Gas Line Repair & Installation",
      "Maintenance Plans",
    ],
  },
  {
    icon: ZapIcon,
    title: "Electrical",
    accent: "#1a2f5e",
    items: [
      "Panel Upgrades & Rewiring",
      "EV Charging Installation",
      "Generator Installation",
      "Whole-House Surge Protection",
      "Ceiling Fan & Lighting",
      "Landscape Lighting",
    ],
  },
];

const EMERGENCIES = [
  { icon: DropletIcon, text: "Burst pipe flooding your home" },
  { icon: ThermometerIcon, text: "No heat on a Denver winter night" },
  { icon: DropletIcon, text: "Sewage backup or slow drains" },
  { icon: ZapIcon, text: "Gas smell or sparking outlet" },
  { icon: DropletIcon, text: "No hot water — dead water heater" },
  { icon: ZapIcon, text: "Tripped breaker or power loss" },
];

const OFFERS = [
  { amount: "$52 Off", desc: "Any Service Call" },
  { amount: "$100 Off", desc: "Water Heater Install" },
  { amount: "$300 Off", desc: "New Furnace, Boiler, or AC" },
  { amount: "$18.99/mo", desc: "Time Saver Maintenance Plan" },
];

const FAQS = [
  {
    q: "Do you charge extra for nights and weekends?",
    a: "No. Flat-rate pricing means the quote is the invoice — Tuesday at noon or Saturday at midnight. No overtime surcharges.",
  },
  {
    q: "How fast can you get here for an emergency?",
    a: "For flooding, gas leaks, or no heat in winter — same-day dispatch. Most emergency calls during business hours are out the door within the hour.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Continuously licensed since 1980. Fully insured, bonded, and compliant with all Denver metro codes and regulations.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. For larger jobs like HVAC replacements, repiping, or panel upgrades, we offer financing. Ask when we quote your job.",
  },
  {
    q: "What's the Time Saver Maintenance Plan?",
    a: "For $18.99/month you get annual tune-ups for plumbing, HVAC, and electrical, plus priority scheduling and member discounts. Catches problems before they become emergencies.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="noise-overlay" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-section min-h-[94vh] flex flex-col justify-center">
        <div className="hero-watermark" aria-hidden="true">42</div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[60px] sm:h-[80px]"
          >
            <path d="M0,80 L0,55 L120,38 L280,52 L400,20 L540,45 L680,12 L820,32 L960,18 L1100,48 L1240,28 L1360,50 L1440,40 L1440,80 Z" fill="rgba(255,255,255,0.015)" />
            <path d="M0,80 L0,65 Q720,40 1440,65 L1440,80 Z" fill="#faf8f5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          {/* Eyebrow */}
          <div className="anim-up anim-d1 mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium text-white/80 border border-white/10 bg-white/[0.04]">
              <ShieldIcon className="w-4 h-4 text-crimson-500" />
              Family-Owned &middot; Denver, Colorado &middot; Est. 1980
            </span>
          </div>

          {/* Headline */}
          <h1 className="anim-up anim-d2 font-heading text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.06] tracking-[-0.015em] max-w-[820px] mb-7">
            Your Pipes Don&apos;t Care What Time It Is.{" "}
            <span className="text-crimson-500">Neither Do We.</span>
          </h1>

          {/* Subheadline */}
          <p className="anim-up anim-d3 text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-body">
            42 years. 10,000+ Denver homes. One promise — fixed right the first
            time. Plumbing, heating, and electrical under one roof. Call
            303-PLUMBER — we answer at 2&nbsp;AM.
          </p>

          {/* CTAs */}
          <div className="anim-up anim-d4 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-lg px-9 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cta-glow"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE}
            </a>
            <a
              href="#ai-receptionist"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-lg px-9 py-4 rounded-xl border border-white/12 hover:border-white/22 transition-all duration-300"
            >
              <MicIcon className="w-5 h-5" />
              Talk to AI Receptionist
            </a>
          </div>

          {/* Trust Stats */}
          <div className="anim-up anim-d5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { value: "42", label: "Years in Denver", icon: ShieldIcon },
              { value: "4.9", label: "Google Stars", icon: StarIcon },
              { value: "10K+", label: "Clients Served", icon: UsersIcon },
              { value: "Flat", label: "Rate Pricing", icon: WrenchIcon },
            ].map((stat) => (
              <div key={stat.label} className="trust-stat rounded-xl px-4 py-4 text-center">
                <stat.icon className="w-5 h-5 text-crimson-400 mx-auto mb-2" />
                <div className="text-white font-heading font-extrabold text-2xl sm:text-3xl leading-none">
                  {stat.value}
                </div>
                <div className="text-white/45 text-xs tracking-wide uppercase mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EMERGENCY BAND ═══════════ */}
      <section className="emergency-band py-8 sm:py-10">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-2 rounded-lg bg-white/10">
                <AlertIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Emergency? We answer at 2&nbsp;AM.
                </h2>
                <p className="text-white/70 text-sm mt-0.5">
                  Flat-rate pricing. No overtime charges. No surprises.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-1">
              {EMERGENCIES.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2.5"
                >
                  <item.icon className="w-4 h-4 flex-shrink-0 text-white/70" />
                  <span className="text-xs sm:text-sm font-medium text-white/85">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-crimson-700 font-bold px-6 py-3.5 rounded-xl hover:bg-white/95 transition-all flex-shrink-0"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now — 24/7
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="py-20 sm:py-28 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-crimson-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3 font-body">
              Full-Service Home Experts
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              One Call. Three Trades.{" "}
              <span className="text-navy-700">Done Right.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-body">
              Why juggle three contractors? We handle plumbing, HVAC, and
              electrical under one roof — same quality, same guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="service-card rounded-2xl p-7 sm:p-8"
                style={{ "--card-accent": svc.accent } as React.CSSProperties}
              >
                <div
                  className="p-3 rounded-xl inline-flex mb-5"
                  style={{ background: `${svc.accent}0D` }}
                >
                  <svc.icon className="w-7 h-7" style={{ color: svc.accent }} />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-5">
                  {svc.title}
                </h3>
                <ul className="space-y-3">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 font-body">
                      <CheckIcon
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

      {/* ═══════════ TRUST / PROOF ═══════════ */}
      <section className="py-20 sm:py-28 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Divider */}
          <div className="h-[3px] rounded-full mb-20" style={{ background: "linear-gradient(90deg, transparent, #1a2f5e20, #c0392b30, #1a2f5e20, transparent)" }} />

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left: Trust points */}
            <div>
              <span className="inline-block text-crimson-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3 font-body">
                Why Denver Trusts Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                42 Years of Getting It Right the First Time
              </h2>

              <div className="space-y-7">
                {[
                  {
                    title: "Licensed Since 1980",
                    desc: "Brad Apple built this company from the ground up. We've outlasted trends, recessions, and every fly-by-night competitor in Denver.",
                  },
                  {
                    title: "4.9-Star Google Rating",
                    desc: "Not from a dozen reviews. From thousands of Denver homeowners who trusted us and came back again.",
                  },
                  {
                    title: "Flat-Rate Pricing, Always",
                    desc: "We quote the price before we start. The number on the estimate is the number on the invoice. Period.",
                  },
                  {
                    title: "One-Trip Resolution",
                    desc: "Our trucks carry 3,000+ parts. Most jobs finished same-day, same-visit. No return trips, no waiting.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 bg-navy-700/6 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-1 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Named Technicians */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  {
                    name: "KC",
                    review: "Outstanding customer service! This young man is an Asset to Time Plumbing!",
                    reviewer: "Michael Blackwood",
                  },
                  {
                    name: "Chad",
                    review: "Got the job done right and was knowledgeable and very helpful! We have used Time Plumbing for years.",
                    reviewer: "Lytisha M.",
                  },
                ].map((tech) => (
                  <div key={tech.name} className="tech-card rounded-xl p-5">
                    <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-white font-heading font-bold text-lg mb-3">
                      {tech.name[0]}
                    </div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-gray-400 mb-2 font-body">Denver Technician</p>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-3 h-3 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 italic leading-relaxed font-body">
                      &ldquo;{tech.review}&rdquo;
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1.5 font-body">
                      — {tech.reviewer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Offers + Community */}
            <div>
              {/* Offers Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-700/6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-crimson-600/10">
                    <StarIcon className="w-5 h-5 text-crimson-600" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    Current Offers
                  </h3>
                </div>

                <div className="space-y-3">
                  {OFFERS.map((offer) => (
                    <div key={offer.amount} className="offer-card flex items-center gap-4 rounded-xl px-5 py-4">
                      <span className="font-heading font-extrabold text-2xl text-crimson-600 whitespace-nowrap">
                        {offer.amount}
                      </span>
                      <span className="text-gray-700 font-medium font-body">
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

              {/* Community section */}
              <div className="mt-6 community-badge rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FlagIcon className="w-6 h-6 text-navy-700" />
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    Denver Proud
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-body mb-4">
                  Owner Brad Apple doesn&apos;t just serve Denver — he invests in it.
                  Time Plumbing donates 2% of income to local causes, flies
                  Colorado&apos;s largest American flag, and has been a fixture of
                  the community since 1980.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <HeartIcon className="w-4 h-4 text-crimson-600 flex-shrink-0" />
                    <span className="text-gray-600 font-body">2% Income to Charity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FlagIcon className="w-4 h-4 text-navy-700 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Colorado&apos;s Largest Flag</span>
                  </div>
                </div>
              </div>

              {/* Mini trust badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <ShieldIcon className="w-5 h-5 text-navy-700" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">Fully Licensed</div>
                    <div className="text-xs text-gray-400 font-body">Bonded &amp; Insured</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <ClockIcon className="w-5 h-5 text-crimson-600" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">24/7 Emergency</div>
                    <div className="text-xs text-gray-400 font-body">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AI RECEPTIONIST ═══════════ */}
      <section id="ai-receptionist" className="dark-section py-20 sm:py-28">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium text-white/70 border border-white/8 bg-white/[0.03] mb-6 font-body">
              <MicIcon className="w-4 h-4 text-crimson-400" />
              New — AI-Powered
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Your After-Hours Receptionist{" "}
              <span className="text-crimson-400">Never Sleeps</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-lg leading-relaxed font-body">
              Pipe burst at midnight? Our AI voice receptionist picks up
              instantly — books your emergency visit, collects your info, and
              dispatches help. No hold music. No voicemail.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: ClockIcon,
                title: "24/7 Availability",
                desc: "Answers every call — nights, weekends, holidays. Your emergency is never sent to voicemail.",
              },
              {
                icon: MicIcon,
                title: "Natural Conversation",
                desc: "Talks like a real receptionist. Asks the right questions, captures job details, handles emergencies.",
              },
              {
                icon: PhoneIcon,
                title: "Instant Booking",
                desc: "Schedules visits on the spot. Collects name, address, urgency, and preferred time — no delays.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-panel rounded-xl p-7">
                <item.icon className="w-8 h-8 text-crimson-400 mb-5" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/35 text-sm mb-3 font-body">
              Try it now — tap the microphone button in the corner
            </p>
            <div className="inline-flex items-center gap-2 text-crimson-400 font-semibold text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "badge-pulse 2s ease-in-out infinite" }} />
              AI Receptionist Online
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 sm:py-28 bg-warm-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-500 font-body">
              Straight answers from 42 years of experience.
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
                <AccordionContent className="text-gray-500 leading-relaxed pb-5 font-body">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="dark-section py-20 sm:py-28">
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            The Number Denver Has Called Since 1980
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Whether it&apos;s a midnight pipe burst or a Monday morning tune-up,
            we pick up. 303-PLUMBER — one call, and it&apos;s handled.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cta-glow"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
            <a
              href="#ai-receptionist"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-lg px-10 py-4 rounded-xl border border-white/12 hover:border-white/22 transition-all"
            >
              <MicIcon className="w-5 h-5" />
              Talk to AI Receptionist
            </a>
          </div>

          <p className="text-white/25 text-sm font-body">
            $52 off your first service &middot; Flat-rate pricing &middot; No
            overtime charges
          </p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="py-14 sm:py-18" style={{ background: "#060d1a" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Time Plumbing, Heating &amp; Electric
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4 font-body">
                Family-owned and operated since 1980. Three trades under one
                roof — plumbing, HVAC, and electrical for the Denver metro.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-crimson-400 font-semibold hover:text-crimson-300 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {PHONE}
              </a>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 text-sm tracking-wider uppercase">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-white/35 font-body">
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
              <ul className="space-y-2 text-sm text-white/35 font-body">
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
              <ul className="space-y-2 text-sm text-white/35 font-body">
                <li>Phone: {PHONE}</li>
                <li>Email: service@303plumber.com</li>
                <li>Denver, CO</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-sm font-body">
              &copy; 2025 Time Plumbing, Heating &amp; Electric Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-white/20 text-sm font-body">
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
