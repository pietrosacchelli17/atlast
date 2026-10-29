"use client";
import Link from "next/link";
import { useSaved, usePurchases } from "@/lib/store";
import { getDestination, getGuide, getPlace } from "@/lib/content";
import { PlaceCard, GuideCard } from "./cards";
import type { Place } from "@/data/types";

export function ProfileClient() {
  const { saved, clear } = useSaved();
  const { purchases, reset } = usePurchases();
  const places = saved.map(getPlace).filter((p): p is Place => !!p);
  const groups = Array.from(new Set(places.map((p) => p.destination)));
  const guides = purchases.map(getGuide).filter((g) => !!g);

  return (
    <>
      <div className="grid gap-6 border-y border-line py-8 sm:grid-cols-3">
        <div><p className="eyebrow">Account</p><p className="display mt-1 text-3xl">Guest</p><p className="mt-1 text-sm text-mute">Sign-in is not connected in this prototype. Your data stays in this browser.</p></div>
        <div><p className="eyebrow">Saved places</p><p className="display mt-1 text-3xl">{places.length}</p></div>
        <div><p className="eyebrow">Guides owned</p><p className="display mt-1 text-3xl">{guides.length}</p></div>
      </div>

      <section className="mt-14" aria-labelledby="saved-h">
        <div className="mb-8 flex items-end justify-between">
          <h2 id="saved-h" className="display h2">Saved places</h2>
          {places.length > 0 && <button onClick={clear} className="link-u text-sm text-mute">Clear all</button>}
        </div>
        {places.length === 0 ? (
          <div className="border border-dashed border-line p-10 text-center">
            <p className="display text-3xl">Nothing saved yet.</p>
            <p className="mx-auto mt-2 max-w-[40ch] text-sm text-mute">Use the heart on any place, or the Save button in a map preview, to build a personal collection.</p>
            <Link href="/explore" className="mt-6 inline-block bg-ink px-6 py-3.5 text-[0.78rem] font-normal uppercase tracking-[0.14em] text-cream hover:bg-stone-deep">Explore the Map →</Link>
          </div>
        ) : (
          groups.map((g) => (
            <div key={g} className="mb-14">
              <h3 className="eyebrow mb-5">{getDestination(g)?.name}</h3>
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {places.filter((p) => p.destination === g).map((p) => <PlaceCard key={p.slug} p={p} />)}
              </div>
            </div>
          ))
        )}
      </section>

      <section className="mt-10" aria-labelledby="owned-h">
        <div className="mb-8 flex items-end justify-between">
          <h2 id="owned-h" className="display h2">Your guides</h2>
          {guides.length > 0 && <button onClick={reset} className="link-u text-sm text-mute">Reset mock purchases</button>}
        </div>
        {guides.length === 0 ? (
          <p className="text-sm text-mute">No premium guides yet. <Link href="/guides" className="underline underline-offset-4">Browse guides</Link>.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">{guides.map((g) => <GuideCard key={g!.slug} g={g!} />)}</div>
        )}
      </section>
    </>
  );
}
