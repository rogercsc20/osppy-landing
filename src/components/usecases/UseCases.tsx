"use client";

import FadeIn from "../animations/FadeIn";
import { BedDouble, Truck, ShoppingBag } from "lucide-react";

const useCases = [
  {
    icon: BedDouble,
    title: "Hospitality",
    description:
      "AI concierges, WhatsApp automation, guest communication, upsells, reservations, and review management.",
    delay: 0,
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Fleet coordination, intelligent routing, document automation, dashboard insights, and driver communication.",
    delay: 0.15,
  },
  {
    icon: ShoppingBag,
    title: "Retail & SMBs",
    description:
      "Customer support automation, predictive sales analytics, CRM integration, and workflow optimization.",
    delay: 0.3,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        {/* Title */}
        <FadeIn>
          <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight mb-16 leading-[1.2]">
            Transforming
            <span className="block text-[var(--osppy-primary)]">
              Key Industries with AI
            </span>
          </h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          {useCases.map((item) => (
            <FadeIn key={item.title} delay={item.delay}>
              <div
                className="
                  p-10 
                  rounded-[var(--osppy-radius)] 
                  bg-[var(--osppy-bg-elevated)]
                  border border-white/10 
                  shadow-[var(--osppy-shadow-soft)] 
                  hover:shadow-[var(--osppy-shadow-glow)]
                  transition 
                  hover:-translate-y-1 
                  h-full
                "
              >
                <item.icon className="text-[var(--osppy-primary)] w-12 h-12 mb-6" />

                <h3 className="text-xl font-medium mb-4 leading-[1.3]">
                  {item.title}
                </h3>

                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

