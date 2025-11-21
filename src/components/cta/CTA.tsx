"use client";

import FadeIn from "../animations/FadeIn";
import BlurGradient from "../hero/BlurGradient";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="relative py-40 text-center">
      <BlurGradient />

      <FadeIn>
        <h2 className="text-5xl font-semibold tracking-tight">
          Ready to Transform  
          <span className="block text-[var(--osppy-primary)]">
            Your Business with AI?
          </span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 text-xl text-[var(--osppy-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Let OSPPY build intelligent workflows, automations, and AI systems  
          that scale with your business — effortlessly.
        </p>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="mt-10 flex justify-center">
          <Link
            href="#pricing"
            className="px-10 py-5 rounded-[var(--osppy-radius)] bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] text-white text-xl font-medium shadow-[var(--osppy-shadow-glow)] transition"
          >
            Get Started
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}

