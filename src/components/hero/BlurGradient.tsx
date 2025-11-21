export default function BlurGradient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--osppy-primary)] opacity-20 blur-[140px]" />
    </div>
  );
}

