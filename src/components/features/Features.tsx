"use client";

import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { ShieldCheck, Cpu, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Custom AI Architecture",
    description:
      "Purpose-built AI systems that integrate perfectly with your operations, workflows, and data stack.",
    delay: 0,
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security, compliance-first design, and robust uptime across all our AI integrations.",
    delay: 0.15,
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Optimized infrastructure, real-time execution, and instant responses across all AI-powered systems.",
    delay: 0.3,
  },
  {
    icon: Layers,
    title: "Modular & Scalable",
    description:
      "Your AI foundation grows with you — easily extend to new departments, industries, or business units.",
    delay: 0.45,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Built with
            <span className="block text-[var(--osppy-primary)]">Precision & Power</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {features.map((f) => (
            <FadeIn key={f.title} delay={f.delay}>
              <div className="p-10 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)] border border-white/10 shadow-[var(--osppy-shadow-soft)] hover:shadow-[var(--osppy-shadow-glow)] transition hover:-translate-y-1">
                
                <f.icon className="text-[var(--osppy-primary)] w-12 h-12 mb-6" />

                <h3 className="text-xl font-medium mb-4">{f.title}</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      <div className="mt-10 text-center">
        <Link
          href="/about"
          className="
            inline-block px-6 py-3
            text-sm md:text-base font-medium
            text-[var(--osppy-primary)]
            hover:text-[var(--osppy-primary-hover)]
            underline underline-offset-4 decoration-[var(--osppy-primary)]
            hover:decoration-[var(--osppy-primary-hover)]
            transition
          "
        >
          How we work →
        </Link>
      </div>

    </section>
  );
}

