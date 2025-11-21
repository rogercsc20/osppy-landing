"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[var(--osppy-max-width)] px-6">

        {/* HERO */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6">
            Built with Care.  
            <span className="block text-[var(--osppy-primary)]">
              Designed for Real Businesses.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--osppy-text-secondary)] max-w-3xl mx-auto text-center leading-relaxed">
            OSPPY was created with a simple belief: people deserve technology that truly helps them.
            Not systems that add confusion or tools that demand complexity.  
            Just clarity. Support. And intelligence that quietly makes work easier.
          </p>
        </FadeIn>

        {/* OUR STORY */}
        <FadeIn delay={0.2}>
          <div className="mt-20">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

            <p className="text-[var(--osppy-text-secondary)] leading-relaxed text-lg">
              We started OSPPY after years of watching businesses struggle with tools that were
              supposed to make life easier — but instead created even more work.  
              Teams drowned in messages, processes, spreadsheets, and manual tasks.  
              Everyone was overwhelmed, but nobody had the time or support to fix it.  

              <br /><br />

              So we built something different:  
              **An AI-driven operations layer that actually understands your business — and cares about it.**

              <br /><br />

              No pressure.  
              No unrealistic promises.  
              Just thoughtful, honest technology made by people who listen first and automate second.
            </p>
          </div>
        </FadeIn>

        {/* OUR VALUES */}
        <FadeIn delay={0.3}>
          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">What We Believe</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-medium mb-2">1. Intelligence Should Feel Natural</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  AI shouldn’t be intimidating.  
                  It shouldn’t replace people.  
                  It should **support** them — quietly, intelligently, in the background.  
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">2. Every Business Deserves Clarity</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  When information is scattered and workflows are chaotic, people suffer.  
                  Decision-making slows down. Communication breaks.  
                  OSPPY is built to bring everything together into one calm, organized system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">3. Support Should Be Human</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  We don’t believe in selling something and disappearing.  
                  When we work with a client, we care about their goals — their real goals.  
                  The people behind the business matter, and our technology is built for them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">4. No Pressure. Ever.</h3>
                <p className="text-[var(--osppy-text-secondary)] leading-relaxed">
                  Our approach is simple:  
                  **A short, honest conversation with someone technical who understands operations.**  
                  No obligation, no commitments, no sales scripts.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* HOW WE WORK */}
        <FadeIn delay={0.4}>
          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">How We Work</h2>

            <p className="text-[var(--osppy-text-secondary)] leading-relaxed text-lg mb-8">
              Every company is different, so we take a simple approach:
            </p>

            <ul className="space-y-6 text-[var(--osppy-text-secondary)] text-lg leading-relaxed">
              <li>• We listen closely to understand your pains and priorities.</li>
              <li>• We map your operations and find the bottlenecks that drain time.</li>
              <li>• We design smart automations that feel natural and helpful.</li>
              <li>• We integrate with your tools, your workflows, and your team.</li>
              <li>• We stay with you — improving, optimizing, adjusting.</li>
              <li>• And we keep everything simple, stable, and reliable.</li>
            </ul>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.6}>
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

