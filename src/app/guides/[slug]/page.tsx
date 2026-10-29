import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, DemoBadge } from "@/components/ui/bits";
import { Picture } from "@/components/ui/Picture";
import { GuideBody } from "@/components/cards/GuideBody";
import { formatPrice, getDestination, getGuide, getGuides, getPlace } from "@/lib/content";
import type { Place } from "@/data/types";

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const g = getGuide((await params).slug);
  return g ? { title: g.title, description: g.summary } : {};
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const dest = getDestination(g.destination);
  const stops = g.stops.flatMap((s) => {
    const place = getPlace(s.place);
    return place ? [{ when: s.when, note: s.note, place: place as Place }] : [];
  });

  return (
    <>
      <Container className="grid gap-10 pb-14 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-4">
            <Link href={`/destinations/${g.destination}`} className="link-u">{dest?.name}</Link> · {g.duration} · {g.premium ? `Premium ${formatPrice(g.priceMinor)}` : "Free"}
          </p>
          <h1 className="display h1">{g.title}</h1>
          <p className="display mt-6 text-3xl italic leading-tight">{g.summary}</p>
          <div className="mt-6 space-y-4 text-mute">{g.intro.map((t, i) => <p key={i}>{t}</p>)}</div>
          {g.demo && <DemoBadge className="mt-6 inline-block text-mute" />}
        </div>
        <div className="lg:col-span-6"><Picture src={g.image} alt={g.title} seed={g.slug} priority className="aspect-[4/3] w-full" /></div>
      </Container>
      <Container className="pb-8"><GuideBody guide={g} stops={stops} /></Container>
    </>
  );
}
