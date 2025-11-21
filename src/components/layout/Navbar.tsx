"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

type PanelId =
  | "services"
  | "features"
  | "usecases"
  | "about"
  | "careers"
  | null;

export default function Navbar() {
  const [openPanel, setOpenPanel] = useState<PanelId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLeaveHeader = () => {
    setOpenPanel(null);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-[var(--osppy-bg)]/80 backdrop-blur-xl border-b border-white/10"
      onMouseLeave={handleLeaveHeader}
    >
      {/* TOP BAR */}
      <nav className="mx-auto flex h-16 max-w-[var(--osppy-max-width)] items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <DesktopNavItem label="Services" panelId="services" href="/services" openPanel={openPanel} setOpenPanel={setOpenPanel} />
          <DesktopNavItem label="Features" panelId="features" href="/features" openPanel={openPanel} setOpenPanel={setOpenPanel} />
          <DesktopNavItem label="Use Cases" panelId="usecases" href="/use-cases" openPanel={openPanel} setOpenPanel={setOpenPanel} />
          <DesktopNavItem label="About" panelId="about" href="/about" openPanel={openPanel} setOpenPanel={setOpenPanel} />
          <DesktopNavItem label="Careers" panelId="careers" href="/careers" openPanel={openPanel} setOpenPanel={setOpenPanel} />
        </div>

        {/* DESKTOP CTAS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[var(--osppy-text-secondary)] hover:text-white transition-colors text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/5"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-[var(--osppy-primary)] text-white text-sm px-5 py-2 rounded-full shadow-[var(--osppy-shadow-soft)] hover:bg-[var(--osppy-primary-hover)]"
          >
            Book a free AI diagnosis
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white border border-white/20 rounded-full h-9 w-9 flex items-center justify-center"
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* DESKTOP MEGA PANELS */}
      <MegaPanel openPanel={openPanel} />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/10 bg-[var(--osppy-bg-elevated)]"
          >
            <div className="mx-auto max-w-[var(--osppy-max-width)] px-6 py-4 space-y-3 text-sm">

              <MobileNavItem href="/services" label="Services" />
              <MobileNavItem href="/features" label="Features" />
              <MobileNavItem href="/use-cases" label="Use Cases" />
              <MobileNavItem href="/about" label="About" />
              <MobileNavItem href="/careers" label="Careers" />

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="text-[var(--osppy-text-secondary)] hover:text-white px-3 py-2 rounded-lg border border-white/15 transition"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="bg-[var(--osppy-primary)] text-white px-3 py-2 rounded-lg text-center shadow-[var(--osppy-shadow-soft)] hover:bg-[var(--osppy-primary-hover)]"
                >
                  Book a free AI diagnosis
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

/* ---------------- DESKTOP NAV ITEM ---------------- */

function DesktopNavItem({
  label,
  href,
  panelId,
  openPanel,
  setOpenPanel
}: {
  label: string;
  href: string;
  panelId: PanelId;
  openPanel: PanelId;
  setOpenPanel: (id: PanelId) => void;
}) {
  const active = openPanel === panelId;

  return (
    <Link
      href={href}
      onMouseEnter={() => setOpenPanel(panelId)}
      className={`px-2 py-1 rounded-md transition-colors ${
        active
          ? "bg-white/10 text-white"
          : "text-[var(--osppy-text-secondary)] hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );
}

/* ---------------- MOBILE NAV ITEM ---------------- */

function MobileNavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="w-full text-left text-[var(--osppy-text-secondary)] hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition"
    >
      {label}
    </Link>
  );
}

/* ---------------- MEGA PANEL ---------------- */

function MegaPanel({ openPanel }: { openPanel: PanelId }) {
  return (
    <AnimatePresence>
      {openPanel && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="hidden md:block w-full border-t border-white/10 bg-[var(--osppy-bg-elevated)] shadow-2xl"
        >
          <div className="mx-auto max-w-[1100px] px-10 py-12">
            {openPanel === "services" && <ServicesPanel />}
            {openPanel === "features" && <FeaturesPanel />}
            {openPanel === "usecases" && <UseCasesPanel />}
            {openPanel === "about" && <AboutPanel />}
            {openPanel === "careers" && <CareersPanel />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- PANEL CONTENT ---------------- */

function ServicesPanel() {
  return (
    <MegaSection
      title1="AI strategy & design"
      desc1="We map your workflows and identify where intelligence creates real leverage."
      title2="Automation & operations"
      desc2="From reservations to back office, we automate repetitive tasks with control and clarity."
      title3="Data & custom models"
      desc3="Data pipelines, tuned prompts, and models grounded in your real business."
      link="/services"
      linkLabel="View all services →"
    />
  );
}

function FeaturesPanel() {
  return (
    <MegaSection
      title1="Unified AI layer"
      desc1="We connect your tools into a single intelligence layer, not isolated bots."
      title2="Human-friendly interfaces"
      desc2="AI that feels natural and reduces mental load for your team."
      title3="Monitoring & reliability"
      desc3="We track quality, latency, and edge cases — your AI stays stable over time."
      link="/features"
      linkLabel="Explore all features →"
    />
  );
}

function UseCasesPanel() {
  return (
    <MegaSection
      title1="Hospitality"
      desc1="Concierge chat, reservations, upsells, cleaning coordination, and more."
      title2="Logistics & operations"
      desc2="Tracking, routing, document automation, dispatch support, and more."
      title3="Other industries"
      desc3="Retail, services, data-heavy operations, workflow optimization, and more."
      link="/use-cases"
      linkLabel="See detailed use cases →"
    />
  );
}

function AboutPanel() {
  return (
    <MegaSection
      title1="Vision & values"
      desc1="We build systems that feel calm, reliable, and genuinely helpful."
      title2="How we work"
      desc2="Close collaboration with direct access to builders — no intermediaries."
      title3="Our story"
      desc3="Born from frustration with tools that didn’t match how teams actually work."
      link="/about"
      linkLabel="Read our full story →"
    />
  );
}

function CareersPanel() {
  return (
    <MegaSection
      title1="Work with us"
      desc1="Help shape the future of applied intelligence for real businesses."
      title2="Who we hire"
      desc2="People who love clarity, ownership, and building meaningful systems."
      title3="Open roles"
      desc3="Engineering, AI research, operations, client implementation, and more."
      link="/careers"
      linkLabel="View all positions →"
    />
  );
}

/* -------- Shared MegaPanel Template -------- */

function MegaSection({
  title1,
  desc1,
  title2,
  desc2,
  title3,
  desc3,
  link,
  linkLabel
}: Record<string, string>) {
  return (
    <div className="space-y-8 text-sm text-[var(--osppy-text-secondary)]">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-[17px] font-semibold text-white mb-2">
            {title1}
          </h3>
          <p>{desc1}</p>
        </div>

        <div>
          <h3 className="text-[17px] font-semibold text-white mb-2">
            {title2}
          </h3>
          <p>{desc2}</p>
        </div>

        <div>
          <h3 className="text-[17px] font-semibold text-white mb-2">
            {title3}
          </h3>
          <p>{desc3}</p>
        </div>
      </div>

      <Link
        href={link}
        className="inline-flex items-center gap-1 text-[var(--osppy-primary)] hover:text-[var(--osppy-primary-hover)] font-medium text-sm"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

