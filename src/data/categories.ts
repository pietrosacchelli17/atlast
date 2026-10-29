import type { Category } from "./types";

export const categories: Category[] = [
  { id: "architecture", label: "Architecture & Buildings", pin: "A", blurb: "Buildings that reward a closer look." },
  { id: "art", label: "Art & Exhibitions", pin: "A", blurb: "Museums, galleries and the rooms around them." },
  { id: "design", label: "Design & Interiors", pin: "A", blurb: "Furniture, interiors and objects in context." },
  { id: "cafes", label: "Cafés & Restaurants", pin: "T", blurb: "Good rooms to sit down in." },
  { id: "bars", label: "Bars & Nightlife", pin: "T", blurb: "Evening places with a sense of space." },
  { id: "hotels", label: "Hotels & Stays", pin: "T", blurb: "Places to sleep that are worth the visit." },
  { id: "landmarks", label: "Cultural Landmarks", pin: "A", blurb: "The sites that shaped a city or a region." },
  { id: "hidden", label: "Hidden Gems", pin: "A", blurb: "Quieter places, away from the main route." },
];
