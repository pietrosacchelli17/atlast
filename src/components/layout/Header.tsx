"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "./Wordmark";
import { useSaved } from "@/lib/store";

const NAV = [
  { href: "/explore", label: "Explore" },
  { href: "/destinations", label: "Destinations" },
  { href: "/guides", label: "Guides" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { saved } = useSaved();
  const active = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <span onClick={() => setOpen(false)}><Wordmark /></span>
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={`link-u py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] ${active(n.href) ? "text-ink" : "text-mute hover:text-ink"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            className="flex items-center gap-2 border border-line px-3.5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors hover:border-ink"
            aria-label={`Saved places (${saved.length})`}
          >
            Saved
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] text-cream">{saved.length}</span>
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-cream md:hidden">
          <ul className="px-5 py-3">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-line last:border-0">
                <Link href={n.href} onClick={() => setOpen(false)} className="font-display block py-3 text-3xl font-light">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
