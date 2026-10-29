"use client";
import Link from "next/link";
import type { Place } from "@/data/types";
import { Picture } from "../ui/Picture";
import { SaveButton } from "../ui/SaveButton";
import { DemoBadge } from "../ui/bits";
import { getCategory, getDestination } from "@/lib/content";

export function PlacePreview({ place, onClose, className = "" }: { place: Place; onClose: () => void; className?: string }) {
  const cat = getCategory(place.category);
  const dest = getDestination(place.destination);
  return (
    <aside aria-label={`Preview: ${place.name}`} className={`bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.18)] ${className}`}>
      <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[150px_1fr]">
        <Picture src={place.image} alt={place.name} seed={place.slug} quiet className="min-h-[150px]" />
        <div className="relative flex flex-col p-4 sm:p-5">
          <button type="button" onClick={onClose} aria-label="Close preview" className="absolute right-2 top-2 grid h-8 w-8 place-items-center text-mute hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
          <p className="eyebrow pr-8">{cat.label} · {dest?.name}</p>
          <h3 className="display mt-1 text-2xl leading-tight sm:text-[1.7rem]">{place.name}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-mute">{place.summary}</p>
          {place.architect && <p className="mt-2 text-xs text-ink/75">{place.architect}{place.year ? `, ${place.year}` : ""}</p>}
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
            <Link href={`/places/${place.slug}`} className="bg-ink px-4 py-2.5 text-[0.7rem] font-normal uppercase tracking-[0.14em] text-cream transition-colors hover:bg-stone-deep">
              Read the place
            </Link>
            <SaveButton slug={place.slug} name={place.name} className="!px-3.5 !py-2.5 !text-[0.7rem]" />
            {place.demo && <DemoBadge className="text-mute" />}
          </div>
        </div>
      </div>
    </aside>
  );
}
