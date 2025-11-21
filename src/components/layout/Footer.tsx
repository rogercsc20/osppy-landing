export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-[var(--osppy-max-width)] flex-col items-center justify-between gap-4 px-6 text-sm text-[var(--osppy-text-muted)] md:flex-row">
        <p>© {new Date().getFullYear()} OSPPY. All rights reserved.</p>
        <p>Seamless AI for every business.</p>
      </div>
    </footer>
  );
}

