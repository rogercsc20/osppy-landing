"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Laura Gomez", role: "Hotel Owner, Casa Meridian", text: "OSPPY completely transformed guest communication. Bookings increased, and our front desk finally has time for real hospitality." },
  { name: "Carlos Ramirez", role: "Logistics Director, MoviFreight", text: "Our dispatch coordination became 10x more efficient. The AI workflows feel like an extra operations analyst." },
  { name: "Ana Martinez", role: "Retail Founder, Urbania", text: "Customer support went from chaos to clarity. Automations are elegant and incredibly reliable." },
  { name: "David Perez", role: "Ops Lead, HoriZen Foods", text: "We finally have real-time insights we can trust. The dashboards are stunning and the AI suggestions are spot-on." },
  { name: "Daniela Torres", role: "COO, BlueWave Boutique", text: "Our team saves hours every day. OSPPY integrated perfectly with our PMS and WhatsApp channels." },
  { name: "Luis Hernandez", role: "Fleet Manager, RutaExpress", text: "Vehicle tracking, communication, and document flows run smoother than ever. It feels like magic." },
  { name: "Monica Rios", role: "Founder, Luna Wellness", text: "Setup was fast and the improvements were immediate. This is what business automation should feel like." },
  { name: "Jorge Sanchez", role: "GM, Madero Suites", text: "Response times improved, staff stress dropped, and guests noticed the difference instantly." },
  { name: "Fernanda Ortiz", role: "E-commerce Director, NovaStyle", text: "Our AI assistant handles 70% of inquiries automatically — and customers love it." },
  { name: "Ricardo Alvarez", role: "Plant Manager, InduManufactura", text: "OSPPY helped us automate reporting and incident handling. Operational clarity skyrocketed." },
  { name: "Sofia Navarro", role: "CEO, Ristra Hotels", text: "The AI concierge is better than any solution we tried before. Clean, friendly, and incredibly smart." },
  { name: "Marco Delgado", role: "Head of Operations, MegaTrans", text: "Document automation alone is saving us hundreds of hours each month." },
  { name: "Gabriela Ruiz", role: "Operations Consultant", text: "I recommend OSPPY to every team I work with — the implementation quality is exceptional." },
  { name: "Pablo Medina", role: "Owner, Café Viento", text: "Reservations, customer messages, schedule management — all automated beautifully." },
  { name: "Elena Cabrera", role: "Director of Service, Solari Retail Group", text: "Our customer service team is finally calm and organized. The AI layer just works." },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect client to avoid SSR hydration mismatches
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  /** Smooth wheel scrolling */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY * 0.6;
      }
    };

    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-14 leading-[1.2]">
            What Our Clients Say
            <span className="block text-[var(--osppy-primary)]">
              Honest Results. Real Impact.
            </span>
          </h2>
        </FadeIn>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--osppy-bg)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--osppy-bg)] to-transparent z-10" />

        {/* Scroll / Drag container */}
        <motion.div
          ref={scrollRef}
          drag={isClient ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          className="
            flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory
            scrollbar-none select-none md:cursor-grab cursor-default
            -mx-4 px-4
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((t, i) =>
            isClient ? (
              /** CLIENT VERSION WITH ANIMATIONS */
              <motion.div
                key={i}
                className="
                  min-w-[280px] md:min-w-[360px] snap-start p-8
                  rounded-[var(--osppy-radius)]
                  bg-[var(--osppy-bg-elevated)]
                  border border-white/10
                  shadow-[var(--osppy-shadow-soft)]
                "
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  “{t.text}”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[var(--osppy-text-muted)]">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ) : (
              /** SERVER VERSION (NO MOTION, FIXED CLASSES) */
              <div
                key={i}
                className="
                  min-w-[280px] md:min-w-[360px] snap-start p-8
                  rounded-[var(--osppy-radius)]
                  bg-[var(--osppy-bg-elevated)]
                  border border-white/10
                  shadow-[var(--osppy-shadow-soft)]
                "
              >
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  “{t.text}”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[var(--osppy-text-muted)]">
                    {t.role}
                  </p>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

