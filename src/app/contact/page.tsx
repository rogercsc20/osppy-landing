"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
    }
  };

  return (
    <section className="py-32 px-6 mx-auto max-w-[800px]">
      <h1 className="text-4xl font-semibold mb-8 tracking-tight">
        Contact Us
      </h1>

      <p className="text-[var(--osppy-text-secondary)] max-w-xl mb-8">
        Write us a message and a member of our team will reach out shortly.
        For direct inquiries:{" "}
        <span className="text-white font-medium">hello@osppy.com</span>
      </p>

      {sent ? (
        <p className="text-green-400 text-lg">
          Thank you — your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-[var(--osppy-bg-elevated)] border border-white/15 rounded-lg px-4 py-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full bg-[var(--osppy-bg-elevated)] border border-white/15 rounded-lg px-4 py-3"
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            rows={5}
            className="w-full bg-[var(--osppy-bg-elevated)] border border-white/15 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--osppy-primary)] hover:bg-[var(--osppy-primary-hover)] px-6 py-3 rounded-full font-medium text-white disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
}

