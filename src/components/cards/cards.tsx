import Link from "next/link";
import type { Article, Destination, Guide, Place } from "@/data/types";
import { Picture } from "../ui/Picture";
import { DemoBadge } from "../ui/bits";
import { SaveButton } from "../ui/SaveButton";
import { formatDate, formatPrice, getCategory, getDestination } from "@/lib/content";

export function DestinationCard({ d, count, tall = false, priority = false }: { d: Destination; count: number; tall?: boolean; priority?: boolean }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="group block">
      <Picture src={d.image} alt={`${d.name}, ${d.country}`} seed={d.slug} priority={priority} className={tall ? "aspect-[4/5]" : "aspect-[4/3]"} />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display h3">{d.name}</h3>
        <span className="eyebrow shrink-0">{d.country}</span>
      </div>
      <p className="mt-2 max-w-[40ch] text-sm text-mute">{d.tagline}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-stone-deep">{count} places</p>
    </Link>
  );
}

export function PlaceCard({ p }: { p: Place }) {
  const cat = getCategory(p.category);
  return (
    <article className="group relative">
      <Link href={`/places/${p.slug}`} className="block">
        <Picture src={p.image} alt={p.name} seed={p.slug} className="aspect-[4/5]" />
        <p className="eyebrow mt-4">{cat.label}</p>
        <h3 className="display h3 mt-1">{p.name}</h3>
        <p className="mt-2 text-sm text-mute">{p.summary}</p>
      </Link>
      <div className="absolute right-3 top-3"><SaveButton slug={p.slug} name={p.name} variant="icon" /></div>
      {p.demo && <DemoBadge className="mt-3 text-mute" />}
    </article>
  );
}

export function GuideCard({ g, wide = false }: { g: Guide; wide?: boolean }) {
  const dest = getDestination(g.destination);
  return (
    <Link href={`/guides/${g.slug}`} className="group block">
      <Picture src={g.image} alt={g.title} seed={g.slug} className={wide ? "aspect-[16/10]" : "aspect-[4/3]"} />
      <div className="mt-4 flex items-center gap-3">
        <span className={`px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] ${g.premium ? "bg-ink text-cream" : "border border-ink"}`}>
          {g.premium ? `Premium · ${formatPrice(g.priceMinor)}` : "Free"}
        </span>
        <span className="eyebrow">{dest?.name} · {g.duration}</span>
      </div>
      <h3 className="display h3 mt-3">{g.title}</h3>
      <p className="mt-2 max-w-[44ch] text-sm text-mute">{g.summary}</p>
    </Link>
  );
}

export function ArticleCard({ a, large = false }: { a: Article; large?: boolean }) {
  return (
    <Link href={`/journal/${a.slug}`} className="group block">
      <Picture src={a.image} alt={a.title} seed={a.slug} className={large ? "aspect-[16/10]" : "aspect-[3/2]"} />
      <p className="eyebrow mt-4">{a.type} · {a.readMinutes} min</p>
      <h3 className={`display mt-2 ${large ? "h2" : "h3"}`}>{a.title}</h3>
      <p className="mt-2 max-w-[52ch] text-sm text-mute">{a.excerpt}</p>
      <p className="mt-3 text-xs text-mute">{formatDate(a.date)}</p>
    </Link>
  );
}
