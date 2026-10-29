import type { Metadata } from "next";
import { Container } from "@/components/ui/bits";
import { GuideCard } from "@/components/cards/cards";
import { getGuides } from "@/lib/content";

export const metadata: Metadata = { title: "Guides & itineraries", description: "Curated itineraries, some free and some premium." };

export default function GuidesPage() {
  const guides = getGuides();
  return (
    <Container className="py-14 sm:py-20">
      <p className="eyebrow mb-4">Guides & itineraries</p>
      <h1 className="display h1 max-w-[16ch]">Routes worth following.</h1>
      <p className="mt-6 max-w-[56ch] text-mute">
        Free guides give you the route. Premium guides add the interactive map, timings and a downloadable itinerary. Purchases are simulated in this prototype.
      </p>
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => <GuideCard key={g.slug} g={g} />)}
      </div>
    </Container>
  );
}
