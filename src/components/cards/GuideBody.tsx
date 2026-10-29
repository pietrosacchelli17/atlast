"use client";
import Link from "next/link";
import type { Guide, Place } from "@/data/types";
import { usePurchases } from "@/lib/store";
import { AtlasMap } from "../map/AtlasMap";
import { SaveButton } from "../ui/SaveButton";
import { formatPrice } from "@/lib/content";

interface Stop { when: string; note: string; place: Place }

export function GuideBody({ guide, stops }: { guide: Guide; stops: Stop[] }) {
  const { owns, buy } = usePurchases();
  const unlocked = !guide.premium || owns(guide.slug);
  const shown = unlocked ? stops : stops.slice(0, 1);
  const first = stops[0].place;

  const download = () => {
    const text = [
      guide.title.toUpperCase(),
      `${guide.duration} · Demonstration guide`,
      "",
      ...stops.map((s, i) => `${i + 1}. ${s.place.name} (${s.when})\n   ${s.place.address}\n   ${s.note}`),
      "",
      "Demo content: not verified. Confirm hours and access with each venue.",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: `${guide.slug}.txt` });
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <ol className="lg:col-span-6">
        {shown.map((s, i) => (
          <li key={s.place.slug} className="grid grid-cols-[48px_1fr] gap-4 border-t border-line py-7">
            <span className="display text-4xl text-stone-deep">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="eyebrow">{s.when}</p>
              <h3 className="display h3 mt-1"><Link href={`/places/${s.place.slug}`} className="link-u">{s.place.name}</Link></h3>
              <p className="mt-2 text-mute">{s.note}</p>
              <div className="mt-3"><SaveButton slug={s.place.slug} name={s.place.name} className="!px-3 !py-2 !text-[0.68rem]" /></div>
            </div>
          </li>
        ))}
        {!unlocked && (
          <li className="border-t border-line bg-paper p-7">
            <p className="eyebrow">{stops.length - 1} more stops</p>
            <p className="display mt-2 text-3xl">Unlock the full route.</p>
            <p className="mt-2 max-w-[44ch] text-sm text-mute">Includes: {guide.includes.join(", ")}.</p>
            <button
              type="button"
              onClick={() => buy(guide.slug)}
              className="mt-5 bg-ink px-6 py-3.5 text-[0.78rem] font-normal uppercase tracking-[0.14em] text-cream hover:bg-stone-deep"
            >
              Buy for {formatPrice(guide.priceMinor)} (mock)
            </button>
            <p className="mt-3 text-xs text-mute">No payment is taken. This stores a mock purchase in your browser.</p>
          </li>
        )}
      </ol>
      <div className="lg:col-span-6">
        <div className="lg:sticky lg:top-24">
          <AtlasMap
            label={`Route map for ${guide.title}`}
            places={shown.map((s) => s.place)}
            route={shown.map((s) => s.place.coordinates)}
            target={{ center: first.coordinates, zoom: guide.destination === "tuscany" ? 8.8 : 11.6, key: guide.slug }}
            className="h-[460px] w-full"
          />
          {unlocked && (
            <button type="button" onClick={download} className="mt-4 border border-ink px-5 py-3 text-[0.78rem] font-normal uppercase tracking-[0.14em] hover:bg-ink hover:text-cream">
              Download itinerary (.txt)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
