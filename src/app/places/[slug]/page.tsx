import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, DemoBadge, ButtonLink } from "@/components/ui/bits";
import { Picture } from "@/components/ui/Picture";
import { SaveButton } from "@/components/ui/SaveButton";
import { AtlasMap } from "@/components/map/AtlasMap";
import { PlaceCard } from "@/components/cards/cards";
import { getCategory, getDestination, getNearby, getPlace, getPlaces } from "@/lib/content";

export function generateStaticParams() {
  return getPlaces().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/places/[slug]">): Promise<Metadata> {
  const p = getPlace((await params).slug);
  return p ? { title: p.name, description: p.summary } : {};
}

const ACCESS = { open: "Open to visitors", ticketed: "Ticketed", exterior: "Best seen from outside", private: "By arrangement", varies: "Varies" } as const;

export default async function PlacePage({ params }: PageProps<"/places/[slug]">) {
  const p = getPlace((await params).slug);
  if (!p) notFound();
  const cat = getCategory(p.category);
  const dest = getDestination(p.destination);
  const nearby = getNearby(p);

  return (
    <article>
      <Container className="pt-8">
        <nav aria-label="Breadcrumb" className="text-xs text-mute">
          <Link href="/destinations" className="link-u">Destinations</Link> / <Link href={`/destinations/${p.destination}`} className="link-u">{dest?.name}</Link>
        </nav>
        <header className="mt-6 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="eyebrow mb-3">{cat.label}</p>
            <h1 className="display h1">{p.name}</h1>
          </div>
          <div className="flex items-center gap-3 lg:col-span-3 lg:justify-end">
            <SaveButton slug={p.slug} name={p.name} />
          </div>
        </header>
        <Picture src={p.image} alt={`${p.name}, ${dest?.name}`} seed={p.slug} priority className="mt-8 aspect-[16/9] w-full max-h-[78vh]" />
      </Container>

      <Container className="grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="display text-3xl italic leading-tight sm:text-4xl">{p.summary}</p>
          <div className="prose-ed mt-10 text-lg leading-relaxed">{p.description.map((t, i) => <p key={i}>{t}</p>)}</div>
          {p.demo && (
            <p className="mt-8 border-l-2 border-stone pl-4 text-sm text-mute">
              <DemoBadge className="mr-2 text-ink" />
              Demonstration entry. Details have not been verified by ATLAST editors and hours or prices are deliberately not listed.
            </p>
          )}
        </div>
        <aside className="lg:col-span-4 lg:col-start-9" aria-label="Details">
          <dl className="divide-y divide-line border-y border-line text-sm">
            {p.architect && <Row k="Architect / designer" v={p.architect} />}
            {p.year && <Row k="Date" v={p.year} />}
            <Row k="Address" v={p.address} />
            <Row k="Access" v={`${ACCESS[p.visit.access]}. ${p.visit.note}`} />
            <Row k="Tags" v={p.tags.join(" · ")} />
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`/explore?place=${p.slug}`} variant="outline">Open on the map</ButtonLink>
          </div>
        </aside>
      </Container>

      <Container className="pb-14">
        <p className="eyebrow mb-4">Location</p>
        <AtlasMap label={`Map showing ${p.name}`} places={[p]} selected={p.slug} target={{ center: p.coordinates, zoom: 14, key: p.slug }} className="h-[360px] w-full" />
      </Container>

      {nearby.length > 0 && (
        <section className="bg-paper py-16">
          <Container>
            <p className="eyebrow mb-3">Nearby</p>
            <h2 className="display h2 mb-10">Also close by.</h2>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-3">
              {nearby.map(({ place, km }) => (
                <div key={place.slug}>
                  <PlaceCard p={place} />
                  <p className="mt-2 text-xs text-mute">{km < 1 ? "Under 1 km" : `${km.toFixed(1)} km`} away (straight line)</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-3.5">
      <dt className="eyebrow pt-0.5">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
