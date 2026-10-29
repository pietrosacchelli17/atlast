import Link from "next/link";
import { HeroGlobe } from "@/components/home/HeroGlobe";
import { LazyMap } from "@/components/home/LazyMap";
import { Container, SectionHeading, ButtonLink } from "@/components/ui/bits";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard, GuideCard, ArticleCard } from "@/components/cards/cards";
import { getArticles, getCategories, getDestinations, getGuides, getPlaces, getPlacesByDestination } from "@/lib/content";

export default function Home() {
  const dests = getDestinations();
  const cats = getCategories();
  const places = getPlaces();
  const guides = getGuides().slice(0, 3);
  const articles = getArticles().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-6 py-12 lg:grid-cols-12 lg:py-0">
          <div className="relative z-10 lg:col-span-7">
            <p className="eyebrow mb-6">The Architecture Travelbook · Always updated</p>
            <h1 className="display text-[clamp(5.2rem,17vw,15rem)] leading-[0.82] tracking-[-0.03em]">
              <span className="sr-only">ATLAST</span>
              <span aria-hidden>[AT]<span className="text-stone-deep">last</span></span>
            </h1>
            <p className="display mt-8 max-w-[18ch] text-[clamp(1.9rem,3.6vw,3rem)] italic leading-[1.05]">
              Explore the world through a different perspective.
            </p>
            <p className="mt-5 max-w-[44ch] text-base text-mute">
              A curated atlas of architecture, design, culture and places worth discovering.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/explore">Explore the Map →</ButtonLink>
              <ButtonLink href="/guides" variant="outline">Discover Our Guides</ButtonLink>
            </div>
          </div>
          <div className="relative -mr-10 text-ink lg:col-span-5 lg:-mr-24">
            <HeroGlobe className="mx-auto w-full max-w-[640px]" />
            <p className="eyebrow mt-2 text-center">{places.length} demonstration places · {dests.length} destinations</p>
          </div>
        </Container>
      </section>

      {/* Explore the world */}
      <section className="py-20 sm:py-28" aria-labelledby="explore-h">
        <Container>
          <SectionHeading eyebrow="Explore the world" title="One atlas, drawn place by place." href="/explore" linkLabel="Open the full map" />
          <h2 id="explore-h" className="sr-only">Explore the world</h2>
          <LazyMap />
        </Container>
      </section>

      {/* Selected destinations */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Selected destinations" title="Cities and regions, read slowly." href="/destinations" />
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
            {dests.map((d, i) => {
              const span = [ "lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-12" ][i] ?? "lg:col-span-4";
              return (
                <Reveal key={d.slug} className={span} delay={(i % 3) * 80}>
                  <DestinationCard d={d} count={getPlacesByDestination(d.slug).length} tall={i === 1} priority={i < 2} />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Discover by interest */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Discover by interest" title="Start from what you care about." />
          <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {cats.map((c) => {
              const n = places.filter((p) => p.category === c.id).length;
              return (
                <li key={c.id} className="border-b border-r border-line">
                  <Link href={`/explore?category=${c.id}`} className="group flex h-full min-h-[190px] flex-col justify-between p-6 transition-colors duration-300 hover:bg-ink hover:text-cream">
                    <span className="flex items-center justify-between">
                      <span className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-medium ${c.pin === "A" ? "bg-ink text-cream group-hover:bg-cream group-hover:text-ink" : "bg-stone text-ink"}`}>{c.pin}</span>
                      <span className="text-xs tabular-nums opacity-70">{n}</span>
                    </span>
                    <span>
                      <span className="display block text-[1.7rem] leading-[1.05]">{c.label}</span>
                      <span className="mt-2 block text-sm opacity-70">{c.blurb}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Perspective */}
      <section className="on-ink bg-ink py-24 text-cream sm:py-36">
        <Container className="grid gap-12 lg:grid-cols-12">
          <p className="eyebrow text-cream/60 lg:col-span-3">The ATLAST perspective</p>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="display text-[clamp(2.2rem,5.2vw,4.6rem)] leading-[1.02]">
                Travel is better when you know what to look at. We choose fewer places, and say more about each.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-10 text-cream/75 sm:grid-cols-3">
              {[
                ["Selected, not scraped", "Every place is chosen by an editor. Quality over volume."],
                ["Architecture first", "Buildings, rooms and materials lead. Cafés and hotels earn their place by design."],
                ["Honest about what we know", "Demonstration entries are labelled until they have been verified on the ground."],
              ].map(([t, b]) => (
                <div key={t}>
                  <h3 className="font-display mb-2 text-2xl text-cream">{t}</h3>
                  <p className="text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="link-u mt-12 inline-block text-sm tracking-wide">About ATLAST →</Link>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Curated guides" title="Itineraries with a point of view." href="/guides" />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 80}><GuideCard g={g} /></Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Journal */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="The Journal" title="Stories, interviews and photography." href="/journal" />
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7"><ArticleCard a={articles[0]} large /></Reveal>
            <div className="grid gap-10 lg:col-span-5">
              {articles.slice(1).map((a, i) => (
                <Reveal key={a.slug} delay={(i + 1) * 80}><ArticleCard a={a} /></Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
