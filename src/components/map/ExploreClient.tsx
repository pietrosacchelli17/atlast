"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import type { CategoryId, Destination, Place } from "@/data/types";
import { getCategories, getDestinations, getPlaces } from "@/lib/content";
import { AtlasMap, type MapTarget } from "./AtlasMap";
import { PlacePreview } from "./PlacePreview";
import { PinMark } from "../ui/bits";

const WORLD: MapTarget = { center: [30, 36], zoom: 1.9, key: "world" };

export function ExploreClient({
  variant = "page", initialPlace, initialDestination, initialCategory,
}: { variant?: "page" | "embed"; initialPlace?: string; initialDestination?: string; initialCategory?: string }) {
  const all = getPlaces();
  const cats = getCategories();
  const dests = getDestinations();
  const startPlace = all.find((p) => p.slug === initialPlace);
  const startDest = dests.find((d) => d.slug === (initialDestination ?? startPlace?.destination));

  const [active, setActive] = useState<Set<CategoryId>>(
    () => new Set(cats.some((c) => c.id === initialCategory) ? [initialCategory as CategoryId] : []),
  );
  const [dest, setDest] = useState<string | null>(startDest?.slug ?? null);
  const [selected, setSelected] = useState<string | null>(startPlace?.slug ?? null);
  const [target, setTarget] = useState<MapTarget>(() =>
    startPlace
      ? { center: startPlace.coordinates, zoom: 14, key: `p-${startPlace.slug}` }
      : startDest ? { center: startDest.center, zoom: startDest.zoom, key: `d-${startDest.slug}` } : WORLD,
  );

  const nonce = useRef(0);
  const visible = all.filter((p) => (active.size === 0 || active.has(p.category)) && (!dest || p.destination === dest));
  // markers always reflect category filter (city counts), regardless of the city focus
  const markerPlaces = all.filter((p) => active.size === 0 || active.has(p.category));
  const selectedPlace = all.find((p) => p.slug === selected) ?? null;

  const flyDest = (d: Destination | null) => {
    setDest(d?.slug ?? null);
    setSelected(null);
    setTarget(d ? { center: d.center, zoom: d.zoom, key: `d-${d.slug}-${nonce.current++}` } : { ...WORLD, key: `w-${nonce.current++}` });
  };
  const pick = (p: Place) => {
    setSelected(p.slug);
    setTarget({ center: p.coordinates, zoom: 13, key: `p-${p.slug}-${nonce.current++}` });
  };
  const toggleCat = (id: CategoryId) =>
    setActive((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  const chip = (on: boolean) =>
    `shrink-0 whitespace-nowrap border px-3.5 py-2 text-[0.72rem] font-normal uppercase tracking-[0.12em] transition-colors ${on ? "border-ink bg-ink text-cream" : "border-line hover:border-ink"}`;

  const filters = (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]" role="group" aria-label="Filter by category">
      {cats.map((c) => (
        <button key={c.id} type="button" aria-pressed={active.has(c.id)} onClick={() => toggleCat(c.id)} className={chip(active.has(c.id))}>
          {c.label}
        </button>
      ))}
      {active.size > 0 && (
        <button type="button" onClick={() => setActive(new Set())} className="shrink-0 px-2 text-xs underline underline-offset-4">Clear</button>
      )}
    </div>
  );

  const places = (
    <>
      <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Choose a destination">
        <button type="button" aria-pressed={!dest} onClick={() => flyDest(null)} className={chip(!dest)}>World</button>
        {dests.map((d) => (
          <button key={d.slug} type="button" aria-pressed={dest === d.slug} onClick={() => flyDest(d)} className={chip(dest === d.slug)}>{d.name}</button>
        ))}
      </div>
    </>
  );

  const mapEl = (
    <AtlasMap
      label="Interactive map of curated places"
      places={markerPlaces}
      destinations={dests}
      selected={selected}
      onSelect={(slug) => { const p = all.find((x) => x.slug === slug); if (p) pick(p); }}
      onSelectDestination={(slug) => flyDest(dests.find((d) => d.slug === slug) ?? null)}
      target={target}
      className={variant === "page" ? "h-[62vh] min-h-[420px] lg:h-full" : "h-[520px] lg:h-[600px]"}
    />
  );

  if (variant === "embed") {
    return (
      <div className="space-y-3">
        {filters}
        {places}
        <div className="relative">
          {mapEl}
          {selectedPlace && (
            <PlacePreview place={selectedPlace} onClose={() => setSelected(null)} className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-auto sm:left-4 sm:bottom-4 sm:w-[460px]" />
          )}
        </div>
        <p className="text-xs text-mute">{visible.length} places shown · <PinMark kind="A" /> architecture & culture · <PinMark kind="T" /> travel & lifestyle</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row">
      <section aria-label="Filters and places" className="flex flex-col border-line lg:w-[400px] lg:shrink-0 lg:border-r">
        <div className="space-y-3 border-b border-line p-4 sm:p-5">
          <h1 className="display text-3xl">Explore the atlas</h1>
          {places}
          {filters}
          <p className="text-xs text-mute" aria-live="polite">{visible.length} {visible.length === 1 ? "place" : "places"} · <PinMark kind="A" /> architecture & culture · <PinMark kind="T" /> travel & lifestyle</p>
        </div>
        <ul className="hidden flex-1 overflow-y-auto lg:block">
          {visible.map((p) => {
            const c = cats.find((x) => x.id === p.category)!;
            return (
              <li key={p.slug} className="border-b border-line">
                <button type="button" onClick={() => pick(p)} aria-current={selected === p.slug} className={`flex w-full items-start gap-3 px-5 py-3.5 text-left transition-colors hover:bg-paper ${selected === p.slug ? "bg-paper" : ""}`}>
                  <PinMark kind={c.pin} />
                  <span>
                    <span className="font-display block text-xl leading-tight">{p.name}</span>
                    <span className="text-xs text-mute">{c.label}</span>
                  </span>
                </button>
              </li>
            );
          })}
          {visible.length === 0 && <li className="p-5 text-sm text-mute">Nothing matches these filters yet.</li>}
        </ul>
      </section>
      <div className="relative min-h-0 flex-1">
        {mapEl}
        {selectedPlace && (
          <PlacePreview place={selectedPlace} onClose={() => setSelected(null)} className="absolute inset-x-3 bottom-8 z-10 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[480px]" />
        )}
      </div>
      <ul className="border-t border-line lg:hidden" aria-label="Places list">
        {visible.map((p) => (
          <li key={p.slug} className="border-b border-line">
            <Link href={`/places/${p.slug}`} className="flex items-center justify-between px-5 py-3.5">
              <span className="font-display text-xl">{p.name}</span>
              <span className="text-xs text-mute">{cats.find((x) => x.id === p.category)!.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
