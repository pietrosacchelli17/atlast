import type { Metadata } from "next";
import { Container } from "@/components/ui/bits";
import { DestinationCard } from "@/components/cards/cards";
import { getDestinations, getPlacesByDestination } from "@/lib/content";

export const metadata: Metadata = { title: "Destinations", description: "Cities and regions in the ATLAST atlas." };

export default function DestinationsPage() {
  const dests = getDestinations();
  return (
    <Container className="py-14 sm:py-20">
      <p className="eyebrow mb-4">Destinations</p>
      <h1 className="display h1 max-w-[16ch]">Where to begin.</h1>
      <p className="mt-6 max-w-[52ch] text-mute">A small, growing set of cities and regions. Each is read through its buildings, rooms and the people who make them.</p>
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {dests.map((d, i) => <DestinationCard key={d.slug} d={d} count={getPlacesByDestination(d.slug).length} priority={i < 3} />)}
      </div>
    </Container>
  );
}
