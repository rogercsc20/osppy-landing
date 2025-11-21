"use client";

import FadeIn from "@/components/animations/FadeIn";
import { BedDouble, Truck, ShoppingBag, Building2 } from "lucide-react";

const industries = [
  {
    icon: BedDouble,
    title: "Hospitality",
    description:
      "AI that improves guest experience, increases efficiency, and automates the repetitive work across hotels, hostels, and vacation rentals.",
    solves: [
      "Guest messaging & concierge automation",
      "WhatsApp booking flows & upsell journeys",
      "Review management & reputation insights",
      "Reservation confirmations & stay reminders",
      "Housekeeping coordination & task routing",
      "Staff communication and shift handovers",
      "PMS, channel manager, and OTA integrations",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Automation for fleet operations, documentation, dispatching, and real-time communication — built for carriers, warehouses, and last-mile teams.",
    solves: [
      "Driver communication & automated dispatch",
      "Shipment tracking & customer ETA updates",
      "Invoice, POD, and ID document extraction",
      "Route intelligence & alert notifications",
      "Incident reporting & exception workflows",
      "Warehouse task automation",
      "Integration with TMS / ERP systems",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "AI that connects sales, support, inventory, and fulfillment — helping modern retail move faster and serve customers better.",
    solves: [
      "Customer support automation (WhatsApp, chat, email)",
      "Product recommendations & guided shopping",
      "Cart recovery flows & follow-up messaging",
      "Order tracking & delivery updates",
      "Inventory triggers & restock alerts",
      "Loyalty program automations",
      "CRM & POS integrations",
    ],
  },
  {
    icon: Building2,
    title: "Professional Services",
    description:
      "Automation for agencies, clinics, consultancies, and service-based businesses that depend on scheduling, communication, and documentation.",
    solves: [
      "Appointment booking & reminders",
      "Lead qualification & intake automation",
      "Document generation & extraction",
      "Case management workflows",
      "Billing & client communication",
      "Internal team coordination",
      "CRM / practice-management integrations",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        {/* Hero */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6">
            Real AI Impact  
            <span className="block text-[var(--osppy-primary)]">
              Across Every Industry We Serve
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--osppy-text-secondary)] max-w-2xl mx-auto text-center leading-relaxed">
            OSPPY deploys AI systems that adapt to your workflows, tools, and business model —  
            creating meaningful, measurable improvements from day one.
          </p>
        </FadeIn>

        {/* Industry Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {industries.map((industry, index) => (
            <FadeIn key={industry.title} delay={index * 0.15}>
              <div className="p-10 rounded-[var(--osppy-radius)] bg-[var(--osppy-bg-elevated)] 
                              border border-white/10 shadow-[var(--osppy-shadow-soft)]
                              hover:shadow-[var(--osppy-glow-soft)] transition hover:-translate-y-1">

                <industry.icon className="text-[var(--osppy-primary)] w-12 h-12 mb-6" />

                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>

                <p className="text-[var(--osppy-text-secondary)] leading-relaxed mb-6">
                  {industry.description}
                </p>

                <h4 className="text-lg font-medium mb-3">OSPPY solves:</h4>

                <ul className="space-y-2 text-[var(--osppy-text-muted)] leading-relaxed">
                  {industry.solves.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                  <li className="text-[var(--osppy-primary)] mt-2">
                    …and additional workflows tailored to your operation.
                  </li>
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-24">
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-[var(--osppy-radius)]
                         bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)]
                         text-black font-medium text-lg shadow-[var(--osppy-shadow-glow)]
                         transition"
            >
              Book a Free AI Diagnosis
            </a>

            <p className="text-[var(--osppy-text-secondary)] mt-4">
              We&apos;ll analyze your business and show where automation delivers the highest ROI.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

