"use client";

import Link from "next/link";
import { Code, Bot, BarChart3, Workflow } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const services = [
  {
    title: "AI Strategy & Consulting",
    description:
      "We analyze your workflows, identify automation opportunities, and build a clear AI roadmap tailored to your operations.",
    icon: Workflow,
    delay: 0,
  },
  {
    title: "Custom AI Models",
    description:
      "Industry-specific LLMs, fine-tuned knowledge bases, and intelligent agents that adapt to your business.",
    icon: Bot,
    delay: 0.1,
  },
  {
    title: "Automation & Workflows",
    description:
      "Automate communication, reservations, logistics flows, and repetitive operations with precision.",
    icon: Code,
    delay: 0.2,
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Real-time insights, predictive analytics, and decision tools powered by your data.",
    icon: BarChart3,
    delay: 0.3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Powerful Services
            <span className="block text-[var(--osppy-primary)]">
              Built for Your Business
            </span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.title} delay={service.delay}>
              <div className="h-full rounded-[var(--osppy-radius)] border border-white/10 bg-[var(--osppy-bg-elevated)] p-8 shadow-[var(--osppy-shadow-soft)] hover:shadow-[var(--osppy-shadow-glow)]">
                <service.icon className="mb-5 h-9 w-9 text-[var(--osppy-primary)]" />
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-[var(--osppy-text-secondary)]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <FadeIn delay={0.2}>
  <div className="mt-10 text-center">
    <Link
      href="/services"
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
      Explore all our services →
    </Link>
  </div>
</FadeIn>

    </section>
  );
}

