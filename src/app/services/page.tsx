"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

const servicePillars = [
  {
    id: "ai-cx",
    label: "Pillar 01",
    title: "AI Customer Experience",
    summary:
      "Modern, intelligent assistants that handle conversations across WhatsApp, web, and voice – always on, always consistent.",
    bullets: [
      "AI WhatsApp agents for sales, support and reservations",
      "Web chatbots that understand your business context",
      "AI reception and call routing for phone inquiries",
      "Multi-language guest and customer support",
      "Review monitoring and automatic smart replies",
    ],
  },
  {
    id: "workflow-automation",
    label: "Pillar 02",
    title: "Intelligent Workflow Automation",
    summary:
      "Automate repetitive tasks and hand-offs so your team can focus on decisions, not manual clicks.",
    bullets: [
      "End-to-end process automation across departments",
      "Document workflows for invoices, contracts and IDs",
      "Smart approval flows with notifications and tracking",
      "Task routing to the right team or person in real time",
      "HR workflows for onboarding, scheduling and requests",
    ],
  },
  {
    id: "data-intelligence",
    label: "Pillar 03",
    title: "Data & Analytics Intelligence",
    summary:
      "Turn your data into a live system of insight with dashboards, alerts and AI-driven forecasts.",
    bullets: [
      "Live KPI dashboards for operations, finance and sales",
      "Demand and volume forecasting to plan ahead",
      "Anomaly detection on key metrics and events",
      "Executive summaries and AI-generated insights",
      "Self-serve reporting for teams without analysts",
    ],
  },
  {
    id: "integrations",
    label: "Pillar 04",
    title: "AI Integrations & API Engineering",
    summary:
      "Connect the tools you already use and let data flow smoothly between systems without manual work.",
    bullets: [
      "Integrations with PMS, TMS, CRM, ERP and booking tools",
      "Custom API design and implementation",
      "Data syncing pipelines between platforms",
      "Automation via webhooks and serverless functions",
      "Secure, monitored integrations with clear logging",
    ],
  },
  {
    id: "custom-ai",
    label: "Pillar 05",
    title: "Custom AI Systems & LLMs",
    summary:
      "AI that understands your business, trained on your data and workflows – not just generic answers.",
    bullets: [
      "AI assistants trained on your internal knowledge",
      "Retrieval-augmented generation (RAG) for documents",
      "Fine-tuned language models for your use cases",
      "Semantic search across tickets, emails and logs",
      "Evaluation and monitoring of AI quality over time",
    ],
  },
  {
    id: "industry-solutions",
    label: "Pillar 06",
    title: "Industry Solutions",
    summary:
      "Pre-designed accelerators for hospitality, logistics, retail and more – ready to adapt to your reality.",
    bullets: [
      "Hospitality: AI concierge, reservations and upsells",
      "Logistics: fleet coordination and route intelligence",
      "Retail: dynamic offers and customer journey automation",
      "Real estate and property: lead handling and follow-up",
      "Custom playbooks for your specific industry",
    ],
  },
  {
    id: "governance",
    label: "Pillar 07",
    title: "AI Governance, Safety & Deployment",
    summary:
      "Deploy AI safely with the right controls, observability and guardrails for your organization.",
    bullets: [
      "Secure cloud or on-premise deployment strategies",
      "Access control, roles and permissions for AI tools",
      "Monitoring, logging and incident response around AI",
      "Risk assessment for automation and decision-support",
      "Foundations aligned with privacy and compliance needs",
    ],
  },
  {
    id: "strategy",
    label: "Pillar 08",
    title: "Strategy & AI Consulting",
    summary:
      "A partner to help you think clearly about where AI fits, what to build first and how to scale safely.",
    bullets: [
      "AI and automation roadmap design",
      "Current systems and workflow assessment",
      "Prioritization of high-impact opportunities",
      "Pilot design, measurement and iteration",
      "Training and enablement for your teams",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--osppy-bg)] text-white">
      {/* Hero */}
      <section className="relative py-28 md:py-32">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <FadeIn>
            <p className="text-sm tracking-wide text-[var(--osppy-text-secondary)] uppercase">
              Services
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
              Intelligence at Every Layer of Your Business
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-[var(--osppy-text-secondary)] max-w-2xl leading-relaxed">
              From customer conversations to internal workflows, OSPPY automates
              the essential parts of your business — so your team can focus on
              what matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="contact"
                className="px-8 py-4 rounded-[var(--osppy-radius)] bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] text-lg font-medium shadow-[var(--osppy-shadow-soft)] transition-colors"
              >
                Book a Free AI Diagnosis
              </Link>
              <span className="text-[var(--osppy-text-muted)] text-sm md:text-base">
                We review your operations and highlight where AI can create
                immediate value.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">
          <FadeIn>
            <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2]">
                  A full stack of AI and automation services.
                </h2>
                <p className="mt-3 text-[var(--osppy-text-secondary)] max-w-xl">
                  OSPPY works across the whole lifecycle: from strategy and
                  design to automation, integration, and ongoing improvement.
                </p>
              </div>
              <p className="text-sm text-[var(--osppy-text-muted)] max-w-sm">
                Start small with one pillar or design a roadmap that gradually
                brings intelligence to every part of your business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {servicePillars.map((pillar, index) => (
              <FadeIn key={pillar.id} delay={index * 0.05}>
                <div className="group relative p-8 rounded-[var(--osppy-radius)] border border-white/10 bg-[var(--osppy-bg-elevated)] shadow-[var(--osppy-shadow-soft)] hover:bg-[var(--osppy-card-hover)] hover:border-[var(--osppy-card-border-hover)] hover:shadow-[var(--osppy-shadow-glow)] transition-all duration-300">
                  {/* subtle radial glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[var(--osppy-radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,var(--osppy-primary-soft),transparent_65%)]" />

                  <div className="relative z-10">
                    <p className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--osppy-text-muted)]">
                      {pillar.label}
                    </p>
                    <h3 className="mt-2 text-xl md:text-2xl font-semibold leading-[1.2]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[var(--osppy-text-secondary)] text-sm md:text-base leading-relaxed">
                      {pillar.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm text-[var(--osppy-text-secondary)]">
                      {pillar.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[var(--osppy-primary)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-[var(--osppy-primary)] hover:text-[var(--osppy-primary-hover)] underline-offset-4 hover:underline"
                      >
                        Talk to us about this pillar
                      </Link>
                    </div>
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
                  Explore how these services align with your operations.
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

