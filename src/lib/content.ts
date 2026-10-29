/**
 * Content access layer. Everything reads through these functions, so swapping
 * local files for a database or CMS later means changing only this module
 * (and making the functions async).
 */
import { categories } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { places } from "@/data/places";
import { guides } from "@/data/guides";
import { articles } from "@/data/journal";
import type { CategoryId, Place } from "@/data/types";

export const getCategories = () => categories;
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
export const getDestinations = () => destinations;
export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const getPlaces = () => places;
export const getPlace = (slug: string) => places.find((p) => p.slug === slug);
export const getPlacesByDestination = (slug: string) => places.filter((p) => p.destination === slug);
export const getGuides = () => guides;
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const getGuidesByDestination = (slug: string) => guides.filter((g) => g.destination === slug);
export const getArticles = () => [...articles].sort((a, b) => b.date.localeCompare(a.date));
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

function distanceKm(a: Place, b: Place) {
  const R = 6371;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.coordinates[1] - a.coordinates[1]);
  const dLng = rad(b.coordinates[0] - a.coordinates[0]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.coordinates[1])) * Math.cos(rad(b.coordinates[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function getNearby(place: Place, limit = 3) {
  return places
    .filter((p) => p.slug !== place.slug)
    .map((p) => ({ place: p, km: distanceKm(place, p) }))
    .filter((r) => r.km < 60)
    .sort((a, b) => a.km - b.km)
    .slice(0, limit);
}

export function formatPrice(minor?: number) {
  if (minor == null) return "Free";
  return `£${(minor / 100).toFixed(minor % 100 ? 2 : 0)}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
