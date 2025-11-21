"use client";

import FadeIn from "@/components/animations/FadeIn";
import { useState } from "react";

export default function CareersPage() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        {/* HERO */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6">
            Build the Future of  
            <span className="block text-[var(--osppy-primary)]">
              Intelligent Operations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--osppy-text-secondary)] max-w-3xl mx-auto text-center leading-relaxed">
            At OSPPY, we’re building technology that helps real businesses work better —
            not by replacing people, but by supporting them.  
            If you want to build meaningful systems with a small, focused, deeply caring team,
            you’re in the right place.
          </p>
        </FadeIn>

        {/* PHILOSOPHY */}
        <FadeIn delay={0.2}>
          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">Why Join OSPPY?</h2>

            <p className="text-[var(--osppy-text-secondary)] text-lg leading-relaxed">
              We believe that great work comes from great environments: places where people
              feel trusted, respected, and encouraged to grow. At OSPPY, you’ll work on problems
              that matter — building AI and automation that genuinely improves people’s lives
              and gives businesses the clarity they deserve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {[
                {
                  title: "Autonomy with Support",
                  description:
                    "We give smart people space to do their best work — with a team that always has their back.",
                },
                {
                  title: "Real Impact",
                  description:
                    "Your work won’t disappear into a corporate maze. It will directly empower businesses worldwide.",
                },
                {
                  title: "Human-Centered Culture",
                  description:
                    "We believe in empathy, honesty, and long-term thinking — in work and in life.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="p-8 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)]
                             border border-white/10 shadow-[var(--osppy-shadow-soft)]"
                >
                  <h3 className="text-xl font-medium mb-3">{v.title}</h3>
                  <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* WHAT TO EXPECT */}
        <FadeIn delay={0.3}>
          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">What You Can Expect</h2>

            <ul className="text-lg text-[var(--osppy-text-secondary)] space-y-4 leading-relaxed">
              <li>• Clear goals and thoughtful leadership.</li>
              <li>• A calm environment without pointless meetings.</li>
              <li>• High-impact projects across AI, automation, and operations.</li>
              <li>• Freedom to explore new ideas and improve systems proactively.</li>
              <li>• Respect, transparency, and honest communication.</li>
              <li>• A team that genuinely cares about doing things right — ethically and technically.</li>
            </ul>
          </div>
        </FadeIn>

        {/* OPEN ROLES */}
        <FadeIn delay={0.4}>
          <div className="mt-28">
            <h2 className="text-3xl font-semibold mb-10">Open Positions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "AI Solutions Architect",
                "Full-Stack Engineer (Next.js + FastAPI)",
                "Backend Engineer (Go)",
                "Automation Engineer (Zapier, Make, APIs)",
                "Machine Learning Engineer",
                "Prompt Engineer / LLM Researcher",
                "SRE / Cloud Engineer (AWS)",
                "Technical Project Manager",
                "Customer Success Lead",
                "Business Analyst (AI Workflows)",
                "UI/UX Designer (AI Interfaces)",
                "Data Engineer",
                "LLM Pipeline Engineer",
                "Operations Automation Specialist",
                "Integrations Engineer (APIs)",
                "Sales Lead – AI/Automation",
                "Enterprise Partnerships Manager",
                "Technical Writer (AI Systems)",
              ].map((role) => (
                <div
                  key={role}
                  className="p-8 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)]
                             border border-white/10 shadow-[var(--osppy-shadow-soft)]
                             hover:shadow-[var(--osppy-shadow-glow)] hover:-translate-y-1 transition"
                >
                  <h3 className="text-xl font-medium mb-2">{role}</h3>
                  <p className="text-[var(--osppy-text-secondary)] leading-relaxed mb-4">
                    Remote • Full-time • Competitive compensation
                  </p>

                  <a
                    href="/contact"
                    className="inline-block px-5 py-2 rounded-[var(--osppy-radius)]
                               bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)]
                               text-black font-medium transition"
                  >
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* EMAIL CAPTURE CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Not Seeing the Right Role?
            </h2>

            <p className="text-lg text-[var(--osppy-text-secondary)] max-w-xl mx-auto leading-relaxed mb-6">
              We’re always looking for thoughtful, driven people.  
              Join our talent list and we’ll reach out when new opportunities open.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Email submitted:", email);
                setEmail("");
              }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-6"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)]
                           border border-white/10 w-full md:w-[320px]
                           text-white outline-none"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-[var(--osppy-radius)]
                           bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)]
                           text-black font-medium shadow-[var(--osppy-shadow-glow)]
                           transition"
              >
                Join Talent List
              </button>
            </form>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

