"use client";

import FadeIn from "../animations/FadeIn";
import Link from "next/link";

const pricing = [
  {
    name: "Starter",
    price: "$299/mo",
    description:
      "Your first step into operational intelligence — perfect for small teams ready to eliminate repetitive work, improve response times, and adopt AI without changing their existing tools.",
    features: [
      "AI chatbot for WhatsApp or Web trained on your business",
      "Automated replies for common questions & tasks",
      "Weekly operational insights with simple recommendations",
      "Human-backed support from our team",
    ],
    delay: 0,
  },
  {
    name: "Business",
    price: "$799/mo",
    highlighted: true,
    description:
      "Designed for companies that want AI embedded across conversations, operations, and decision-making. This is where teams begin feeling the compounding effect of automation.",
    features: [
      "Full custom AI workflows aligned to your internal processes",
      "Cross-department automations (sales, ops, support, logistics)",
      "Real-time dashboards with actionable insights",
      "Priority support + workflow optimization sessions",
      "Industry-specific models tuned to your sector",
    ],
    delay: 0.15,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For organizations using AI as a strategic advantage. Enterprise includes deeper integrations, model customization, and a fully managed AI layer aligned with your architecture and compliance needs.",
    features: [
      "Dedicated AI models and custom embeddings",
      "Full integration into internal systems and databases",
      "Multi-brand, multi-region automation at scale",
      "24/7 support with uptime guarantees",
      "Cloud or on-premise deployment",
    ],
    delay: 0.3,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Simple, Transparent  
            <span className="block text-[var(--osppy-primary)]">
              Pricing for Every Business
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          {pricing.map((p) => (
            <FadeIn key={p.name} delay={p.delay}>

              {/* Card */}
              <div
                className={`group relative p-10 rounded-[var(--osppy-radius)] border border-white/10 bg-[var(--osppy-bg-elevated)] shadow-[var(--osppy-shadow-soft)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-2 hover:border-[var(--osppy-card-border-hover)] hover:bg-[var(--osppy-card-hover)] hover:shadow-[var(--osppy-glow-soft)]`}
              >

                {/* Radial Highlight — FIXED SINGLE LINE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--osppy-radius)] bg-[radial-gradient(circle_at_center,var(--osppy-primary-soft),transparent_70%)]" />

                {/* Highlighted glow — FIXED SINGLE LINE */}
                {p.highlighted && (
                  <div className="absolute inset-0 rounded-[var(--osppy-radius)] shadow-[var(--osppy-glow-strong)] opacity-40 group-hover:opacity-60 transition-opacity" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-medium">{p.name}</h3>
                  <p className="text-4xl font-bold mt-4">{p.price}</p>

                  <p className="mt-4 text-[var(--osppy-text-secondary)] leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="text-[var(--osppy-text-secondary)]">
                        • {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <button
                      className={`relative z-10 mt-8 w-full py-4 rounded-[var(--osppy-radius)] text-lg font-medium transition-all duration-300 ${
                        p.highlighted
                          ? "bg-white/15 hover:bg-white/25"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      Talk to an AI Specialist
                    </button>
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}

