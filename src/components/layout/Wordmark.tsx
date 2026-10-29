import Link from "next/link";

export function Wordmark({ className = "text-2xl", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="ATLAST — home" className={`font-display font-normal tracking-[0.04em] ${className}`}>
      <span className={light ? "text-cream" : "text-ink"}>[AT]</span>
      <span className="text-stone-deep" style={light ? { color: "var(--color-stone)" } : undefined}>last</span>
    </Link>
  );
}
