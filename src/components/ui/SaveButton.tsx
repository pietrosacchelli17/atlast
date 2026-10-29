"use client";
import { useSaved } from "@/lib/store";

export function SaveButton({ slug, name, variant = "pill", className = "" }: { slug: string; name: string; variant?: "pill" | "icon"; className?: string }) {
  const { isSaved, toggle } = useSaved();
  const on = isSaved(slug);
  const heart = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5 6.5 5c2 0 3.7 1.2 5.5 3.3C13.8 6.2 15.5 5 17.5 5 21 5 22.8 8.6 21.5 11.8 19.5 16.4 12 21 12 21Z" />
    </svg>
  );
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={() => toggle(slug)}
        aria-pressed={on}
        aria-label={on ? `Remove ${name} from saved places` : `Save ${name}`}
        className={`grid h-10 w-10 place-items-center bg-cream/90 text-ink transition-colors hover:bg-ink hover:text-cream ${className}`}
      >
        {heart}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={on}
      className={`inline-flex items-center gap-2 border border-ink px-5 py-3 text-[0.78rem] font-normal uppercase tracking-[0.14em] transition-colors ${on ? "bg-ink text-cream" : "hover:bg-ink hover:text-cream"} ${className}`}
    >
      {heart}
      {on ? "Saved" : "Save place"}
    </button>
  );
}
