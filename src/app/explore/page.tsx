import type { Metadata } from "next";
import { ExploreClient } from "@/components/map/ExploreClient";

export const metadata: Metadata = {
  title: "Explore the map",
  description: "An interactive atlas of architecture, design, culture and places worth discovering.",
};

export default async function ExplorePage({ searchParams }: PageProps<"/explore">) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);
  return (
    <ExploreClient
      initialPlace={one(sp.place)}
      initialDestination={one(sp.destination)}
      initialCategory={one(sp.category)}
    />
  );
}
