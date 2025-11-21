"use client";

import FadeIn from "../animations/FadeIn";
import { CheckCircle2, Crown, GaugeCircle, Settings } from "lucide-react";

const reasons = [
  {
    icon: Crown,
    title: "Premium Engineering",
    description:
      "Apple-level design, senior-grade development, and flawless execution across every feature.",
    delay: 0,
  },
  {
    icon: CheckCircle2,
    title: "Proven Reliability",
    description:
      "High uptime, optimized workflows, and robust infrastructure for demanding industries.",
    delay: 0.15,
  },
  {
    icon: GaugeCircle,
    title: "Extreme Performance",
    description:
      "Fast, optimized, and scalable systems powered by modern AI and cloud engineering.",
    delay: 0.3,
  },
  {
    icon: Settings,
    title: "Custom-Built for You",
    description:
      "Solutions designed from the ground up to match your business, workflows, and long-term goals.",
    delay: 0.45,
  },
];

export default function WhyOsppy() {
  return (
    <section id="why-osppy" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Why  
            <span className="block text-[var(--osppy-primary)]">Businesses Choose OSPPY</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

          {reasons.map((reason) => (
            <FadeIn key={reason.title} delay={reason.delay}>
              <div className="p-10 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)] border border-white/10 shadow-[var(--osppy-shadow-soft)] hover:shadow-[var(--osppy-shadow-glow)] transition hover:-translate-y-1 h-full">
                
                <reason.icon className="text-[var(--osppy-primary)] w-12 h-12 mb-6" />

                <h3 className="text-xl font-medium mb-4">{reason.title}</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}

