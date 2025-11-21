"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

const featureBlocks = [
  {
    id: "omnichannel",
    label: "Feature 01",
    title: "Omni-Channel AI Engine",
    summary:
      "One intelligent layer that understands your business and responds consistently across WhatsApp, web chat, email and voice.",
    bullets: [
      "Shared memory and context across every channel",
      "Consistent tone of voice aligned with your brand",
      "Cross-channel handoff between chat, WhatsApp and calls",
      "Supports multilingual conversations out of the box",
    ],
    tag: "Customer Experience",
  },
  {
    id: "orchestration",
    label: "Feature 02",
    title: "Workflow Orchestration Layer",
    summary:
      "Automate multi-step processes – not just single messages – with clear logic, routing and human-in-the-loop control.",
    bullets: [
      "Event-based triggers for key actions and states",
      "Conditional logic and branching for complex flows",
      "Human review steps for sensitive decisions",
      "Automatic notifications, reminders and escalations",
    ],
    tag: "Operations",
  },
  {
    id: "knowledge",
    label: "Feature 03",
    title: "Knowledge & Retrieval System",
    summary:
      "Give your AI access to the documents, SOPs and data it needs to answer precisely in your context.",
    bullets: [
      "Secure ingestion of PDFs, docs, FAQs and SOPs",
      "Context-aware answers grounded in your content",
      "Version-aware knowledge so answers stay current",
      "Searchable workspace for your team and your AI",
    ],
    tag: "Knowledge",
  },
  {
    id: "analytics",
    label: "Feature 04",
    title: "Analytics & Insight Layer",
    summary:
      "A live view of conversations, workflows and performance – with AI highlighting what deserves your attention.",
    bullets: [
      "Dashboards for volume, response times and resolutions",
      "Funnel views of automations across departments",
      "Trend detection on issues, topics and demand",
      "AI summaries for leadership and weekly reviews",
    ],
    tag: "Visibility",
  },
  {
    id: "integrations",
    label: "Feature 05",
    title: "Integrations Hub",
    summary:
      "Connect OSPPY to the systems you already rely on – without adding another source of complexity.",
    bullets: [
      "Connectors for PMS, TMS, CRM, ERP and booking tools",
      "Custom API and webhook integrations where needed",
      "Two-way sync of key entities and status updates",
      "Clear logging and monitoring of integration health",
    ],
    tag: "Connectivity",
  },
  {
    id: "blocks",
    label: "Feature 06",
    title: "Reusable Automation Blocks",
    summary:
      "Pre-built building blocks for common patterns so you move from idea to live automation quickly.",
    bullets: [
      "Templates for reservations, onboarding and follow-ups",
      "Ready-made flows for confirmations and reminders",
      "Document extraction for IDs, invoices and forms",
      "Configurable components instead of custom code every time",
    ],
    tag: "Speed",
  },
  {
    id: "security",
    label: "Feature 07",
    title: "Security, Safety & Permissions",
    summary:
      "Enterprise-aware foundations so AI automation is controlled, auditable and aligned with your policies.",
    bullets: [
      "Role-based access and granular permissions",
      "Audit trails for actions and configuration changes",
      "Data separation across brands, regions or clients",
      "Guardrails around sensitive content and actions",
    ],
    tag: "Trust",
  },
  {
    id: "optimization",
    label: "Feature 08",
    title: "Continuous Optimization Engine",
    summary:
      "Your automations and assistants do not stay static. They learn from feedback, data and outcomes over time.",
    bullets: [
      "Feedback loops from users and operators",
      "Performance scoring for flows and conversations",
      "Suggestions for new automations and improvements",
      "Safe rollout of updated versions and experiments",
    ],
    tag: "Improvement",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-[var(--osppy-bg)] text-white">
      {/* Hero */}
      <section className="relative py-28 md:py-32">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <FadeIn>
            <p className="text-sm tracking-wide text-[var(--osppy-text-secondary)] uppercase">
              Features
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
              A Smarter Foundation for Automated Operations
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-[var(--osppy-text-secondary)] max-w-2xl leading-relaxed">
              OSPPY brings intelligence, memory and automation together – creating a single system that powers conversations, workflows, decisions and insights across your business.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="px-8 py-4 rounded-[var(--osppy-radius)] bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] text-lg font-medium shadow-[var(--osppy-shadow-soft)] transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="text-[var(--osppy-text-secondary)] text-sm md:text-base underline-offset-4 hover:underline"
              >
                Book a Free AI Diagnosis
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Overview Intro */}
      <section className="relative pb-10 md:pb-12">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2]">
                  Built to span channels, teams and systems.
                </h2>
                <p className="mt-3 text-[var(--osppy-text-secondary)] max-w-xl">
                  The OSPPY feature set is designed to feel simple on the surface and deeply capable underneath – so your teams get clarity, not another complicated tool.
                </p>
              </div>
              <p className="text-sm text-[var(--osppy-text-muted)] max-w-sm">
                Each feature can stand on its own, or work together as part of a full-stack AI and automation layer for your business.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featureBlocks.map((feature, index) => (
              <FadeIn key={feature.id} delay={index * 0.05}>
                <div className="group relative p-8 rounded-[var(--osppy-radius)] border border-white/10 bg-[var(--osppy-bg-elevated)] shadow-[var(--osppy-shadow-soft)] hover:bg-[var(--osppy-card-hover)] hover:border-[var(--osppy-card-border-hover)] hover:shadow-[var(--osppy-shadow-glow)] transition-all duration-300">
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[var(--osppy-radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,var(--osppy-primary-soft),transparent_65%)]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--osppy-text-muted)]">
                        {feature.label}
                      </p>
                      <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--osppy-text-secondary)] bg-black/20 backdrop-blur-sm">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-[1.2]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[var(--osppy-text-secondary)] text-sm md:text-base leading-relaxed">
                      {feature.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm text-[var(--osppy-text-secondary)]">
                      {feature.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[var(--osppy-primary)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[var(--osppy-radius)] border border-white/10 bg-[var(--osppy-bg-elevated)] shadow-[var(--osppy-shadow-soft)] px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,var(--osppy-primary-soft),transparent_65%)]" />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2]">
                  See how these features map to your operations.
                </h2>
                <p className="mt-3 text-[var(--osppy-text-secondary)]">
                  Share how your business runs today and we&apos;ll highlight where OSPPY can bring clarity, automation and intelligence – step by step.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-[var(--osppy-radius)] bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] text-sm md:text-base font-medium shadow-[var(--osppy-shadow-soft)] text-center transition-colors"
                >
                  Book a Free AI Diagnosis
                </Link>
                <span className="text-xs text-[var(--osppy-text-muted)] text-center md:text-right">
                  A short, focused conversation with someone from our Team.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

