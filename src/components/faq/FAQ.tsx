"use client";

import FadeIn from "../animations/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to implement AI in my business?",
    a: "Most clients get a working AI system within 7–21 days depending on complexity.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No — we handle everything from strategy to development and integration.",
  },
  {
    q: "Can I integrate with my existing tools?",
    a: "Yes. We integrate with PMS systems, CRMs, WhatsApp, email, databases, logistics platforms, and more.",
  },
  {
    q: "What makes OSPPY different?",
    a: "We build custom, intelligent, fully automated workflows — not generic templates or basic bots.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12">
            Frequently Asked  
            <span className="block text-[var(--osppy-primary)]">Questions</span>
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-2xl space-y-6">
          {faqs.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)] border border-white/10 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{item.q}</p>
                  <ChevronDown
                    className={`transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {open === i && (
                  <p className="mt-4 text-[var(--osppy-text-secondary)] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

