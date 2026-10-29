import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow, title, href, linkLabel, className = "",
}: { eyebrow: string; title: string; href?: string; linkLabel?: string; className?: string }) {
  return (
    <div className={`mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14 ${className}`}>
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display h2 max-w-[18ch]">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="link-u pb-1 text-sm tracking-wide">
          {linkLabel ?? "View all"} →
        </Link>
      )}
    </div>
  );
}

export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      title="Demonstration content. Not verified by ATLAST editors."
      className={`inline-block border border-current px-1.5 py-[1px] text-[9px] font-medium uppercase tracking-[0.14em] ${className}`}
    >
      Demo content
    </span>
  );
}

export function ButtonLink({
  href, children, variant = "solid", className = "",
}: { href: string; children: React.ReactNode; variant?: "solid" | "outline" | "light"; className?: string }) {
  const styles = {
    solid: "bg-ink text-cream hover:bg-stone-deep",
    outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
    light: "border border-cream/60 text-cream hover:bg-cream hover:text-ink",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center gap-2 px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function PinMark({ kind }: { kind: "A" | "T" }) {
  return (
    <span aria-hidden className={`inline-grid h-5 w-5 place-items-center rounded-full text-[10px] font-medium ${kind === "A" ? "bg-ink text-cream" : "bg-stone text-ink"}`}>
      {kind}
    </span>
  );
}
