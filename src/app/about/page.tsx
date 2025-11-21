"use client";

import FadeIn from "@/components/animations/FadeIn";
import { LightBulbIcon, SparklesIcon, CubeIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        {/* HERO */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Built by Engineers.
              <span className="block text-[var(--osppy-primary)]">
                Crafted for Real Operations.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--osppy-text-secondary)] leading-relaxed">
              OSPPY wasn&apos;t born from theory.  
              It grew out of years of solving real operational problems across hotels,
              logistics, retail, and service teams — one system, one integration, one workflow at a time.
            </p>
          </div>
        </FadeIn>

        {/* STORY BLOCK */}
        <FadeIn delay={0.15}>
          <div className="
            mt-24 p-10 rounded-[var(--osppy-radius)]
            bg-[var(--osppy-bg-elevated)]/70
            border border-white/10
            backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.25)]
            max-w-3xl mx-auto
          ">
            <h2 className="text-3xl font-semibold mb-6">Where We Come From</h2>

            <p className="text-[var(--osppy-text-secondary)] leading-relaxed text-lg">
              Before OSPPY, we were independent engineers working on automation, AI, and
              data systems for very different businesses. But every project revealed the
              same reality: companies were drowning in manual processes and fragmented tools
              that didn’t understand how they actually operated.

              <br /><br />

              A shared project brought us together — and the alignment was immediate.
              The standards were the same. The approach to engineering was the same.
              The obsession with building things properly was the same.

              <br /><br />

              OSPPY was formed to unify that experience under one principle:
              build technology that strengthens operations quietly, intelligently,
              and with long-term reliability.
            </p>
          </div>
        </FadeIn>

        {/* PHILOSOPHY — MODERN (mission+vision without naming them) */}
        <FadeIn delay={0.25}>
          <div className="mt-32">
            <h2 className="text-3xl font-semibold text-center mb-14">
              What Drives Our Work
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {/* CARD 1 */}
              <div className="
                p-8 rounded-[var(--osppy-radius)]
                bg-gradient-to-b from-white/5 to-transparent
                border border-white/10
                shadow-[0_0_30px_rgba(0,0,0,0.15)]
              ">
                <LightBulbIcon className="w-10 h-10 text-[var(--osppy-primary)] mb-4" />
                <h3 className="text-xl font-medium mb-2">Technology That Understands Work</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  We design systems that adapt to each business — its rhythm, patterns,
                  and real constraints. Software shouldn’t force a way of working;
                  it should enhance the one that already exists.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="
                p-8 rounded-[var(--osppy-radius)]
                bg-gradient-to-b from-white/5 to-transparent
                border border-white/10
                shadow-[0_0_30px_rgba(0,0,0,0.15)]
              ">
                <SparklesIcon className="w-10 h-10 text-[var(--osppy-primary)] mb-4" />
                <h3 className="text-xl font-medium mb-2">Clarity Over Complexity</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Modern operations generate noise.  
                  Our job is to remove it — aligning communication, data,
                  and processes into one clean, understandable system.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="
                p-8 rounded-[var(--osppy-radius)]
                bg-gradient-to-b from-white/5 to-transparent
                border border-white/10
                shadow-[0_0_30px_rgba(0,0,0,0.15)]
              ">
                <CubeIcon className="w-10 h-10 text-[var(--osppy-primary)] mb-4" />
                <h3 className="text-xl font-medium mb-2">Precision Over Assumptions</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Every automation, integration, and workflow is crafted intentionally.
                  No templates. No “one size fits all.”  
                  Just engineering done with accuracy and care.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* VALUES */}
        <FadeIn delay={0.3}>
          <div className="mt-32 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10 text-center">Values We Build With</h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="p-6 rounded-xl bg-[var(--osppy-bg-elevated)] border border-white/10">
                <h4 className="text-xl mb-2 font-medium">Reliability</h4>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Systems should run quietly and consistently — especially when people depend on them.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--osppy-bg-elevated)] border border-white/10">
                <h4 className="text-xl mb-2 font-medium">Transparency</h4>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Clear logic. Clear processes. Clear expectations.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--osppy-bg-elevated)] border border-white/10">
                <h4 className="text-xl mb-2 font-medium">Longevity</h4>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  We design for scale, future changes, and operational growth.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[var(--osppy-bg-elevated)] border border-white/10">
                <h4 className="text-xl mb-2 font-medium">Discipline</h4>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Good engineering is a craft — one we treat with seriousness and respect.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.45}>
          <div className="text-center mt-28">
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-[var(--osppy-radius)]
                         bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)]
                         text-black font-medium text-lg shadow-[var(--osppy-shadow-glow)]
                         transition"
            >
              Book a Free AI Diagnosis
            </a>

            <p className="text-[var(--osppy-text-secondary)] mt-4 text-lg">
              A focused conversation about what’s possible.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

