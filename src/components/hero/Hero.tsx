"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto text-center px-6">

        <FadeIn delay={0.05}>
          <p className="text-sm tracking-wide text-[var(--osppy-text-secondary)] uppercase">
            Seamless AI for every businesses
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4 leading-tight">
            Intelligence that elevates{" "}
            <span className="text-[var(--osppy-primary)]">your business.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 text-lg md:text-xl text-[var(--osppy-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            AI that adapts to your workflows — not the other way around.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="contact"
              className="px-8 py-4 rounded-[var(--osppy-radius)] bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] text-white text-lg font-medium shadow-[var(--osppy-shadow-soft)] transition"
            >
              Book a free AI diagnosis
            </Link>

            <Link
              href="#use-cases"
              className="px-8 py-4 rounded-[var(--osppy-radius)] border border-white/20 text-white text-lg font-medium hover:bg-white/10 transition"
            >
              Explore real use cases
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

