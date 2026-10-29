import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, DemoBadge, ButtonLink, SectionHeading } from "@/components/ui/bits";
import { Picture } from "@/components/ui/Picture";
import { PlaceCard, GuideCard } from "@/components/cards/cards";
import { AtlasMap } from "@/components/map/AtlasMap";
import { getCategories, getDestination, getDestinations, getGuidesByDestination, getPlacesByDestination } from "@/lib/content";

export function generateStaticParams() {
  return getDestinations().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const d = getDestination((await params).slug);
  return d ? { title: d.name, description: d.tagline } : {};
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const places = getPlacesByDestination(d.slug);
  const guides = getGuidesByDestination(d.slug);
  const cats = getCategories().filter((c) => places.some((p) => p.category === c.id));

  return (
    <>
      <Container className="grid gap-10 pb-14 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{d.kind === "region" ? "Region" : "City"} · {d.country}</p>
          <h1 className="display h1">{d.name}</h1>
          <p className="display mt-6 text-3xl italic leading-tight">{d.tagline}</p>
          <div className="mt-8 space-y-4 text-mute">{d.intro.map((t, i) => <p key={i}>{t}</p>)}</div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {d.character.map((c) => <li key={c} className="border border-line px-3 py-1 text-xs uppercase tracking-[0.12em]">{c}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={`/explore?destination=${d.slug}`}>See {d.name} on the map →</ButtonLink>
            {d.demo && <DemoBadge className="text-mute" />}
          </div>
        </div>
        <div className="lg:col-span-7">
          <Picture src={d.image} alt={`${d.name}`} seed={d.slug} priority className="aspect-[4/3] w-full" />
        </div>
      </Container>

      <section className="border-t border-line py-16">
        <Container>
          <SectionHeading eyebrow="Places" title={`Worth finding in ${d.name}.`} />
          <p className="-mt-6 mb-10 text-sm text-mute">{places.length} places across {cats.map((c) => c.label).join(", ")}.</p>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((p) => <PlaceCard key={p.slug} p={p} />)}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          <p className="eyebrow mb-4">On the map</p>
          <AtlasMap label={`Map of places in ${d.name}`} places={places} target={{ center: d.center, zoom: d.zoom - 0.4, key: d.slug }} className="h-[420px] w-full" />
        </Container>
      </section>

      {guides.length > 0 && (
        <section className="py-16">
          <Container>
            <SectionHeading eyebrow="Guides" title={`Itineraries for ${d.name}.`} href="/guides" />
            <div className="grid gap-8 md:grid-cols-3">{guides.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
          </Container>
        </section>
      )}
      <Container className="pt-4"><Link href="/destinations" className="link-u text-sm">← All destinations</Link></Container>
    </>
  );
}
