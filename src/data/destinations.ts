import type { Destination } from "./types";

export const destinations: Destination[] = [
  {
    slug: "london", name: "London", country: "United Kingdom", region: "Europe", kind: "city",
    center: [-0.115, 51.52], zoom: 11.2,
    tagline: "Layers of brick, concrete and glass, rarely in the same street.",
    intro: [
      "London builds on itself. A Georgian house museum sits a short walk from a brutalist estate, and a former power station now holds one of the world's busiest galleries.",
      "This is a city best read slowly, one district at a time, with a bias for the twentieth century.",
    ],
    character: ["Modernism", "Housing", "Adaptive reuse"],
    image: "/images/destinations/london.jpg", demo: true,
  },
  {
    slug: "copenhagen", name: "Copenhagen", country: "Denmark", region: "Europe", kind: "city",
    center: [12.565, 55.69], zoom: 11.6,
    tagline: "Design as an everyday habit, by water and by bicycle.",
    intro: [
      "Copenhagen treats good design as ordinary. Chairs, libraries and harbour baths are held to the same standard of proportion and material.",
      "Compact and flat, it is easily covered in two days.",
    ],
    character: ["Furniture design", "Waterfront", "Public space"],
    image: "/images/destinations/copenhagen.jpg", demo: true,
  },
  {
    slug: "milan", name: "Milan", country: "Italy", region: "Europe", kind: "city",
    center: [9.19, 45.47], zoom: 11.8,
    tagline: "Courtyards, towers and a long tradition of making things well.",
    intro: [
      "Milan keeps its best rooms behind heavy doors. The reward for opening them is a courtyard, a staircase, or a villa preserved as it was lived in.",
      "It is the capital of Italian design, and the city shows it in objects as much as buildings.",
    ],
    character: ["Italian design", "Postwar towers", "Private villas"],
    image: "/images/destinations/milan.jpg", demo: true,
  },
  {
    slug: "tokyo", name: "Tokyo", country: "Japan", region: "Asia", kind: "city",
    center: [139.72, 35.68], zoom: 11.2,
    tagline: "Precision, scale and small rooms of real intensity.",
    intro: [
      "Tokyo is a city of districts rather than a centre. Concrete cathedrals, art deco villas and six-seat coffee rooms all belong to the same walk.",
      "Plan by neighbourhood, and leave time for the unplanned.",
    ],
    character: ["Contemporary Japanese architecture", "Coffee culture", "Small rooms"],
    image: "/images/destinations/tokyo.jpg", demo: true,
  },
  {
    slug: "barcelona", name: "Barcelona", country: "Spain", region: "Europe", kind: "city",
    center: [2.165, 41.395], zoom: 11.8,
    tagline: "Modernisme, Modernism and a city planned on a grid.",
    intro: [
      "Beyond the famous facades, Barcelona is a city of craft: tile, iron, brick vaults and stained glass, built by workshops as much as by architects.",
      "The Eixample grid and the hills behind it make for good, varied walking.",
    ],
    character: ["Modernisme", "Craft", "Twentieth-century Modernism"],
    image: "/images/destinations/barcelona.jpg", demo: true,
  },
  {
    slug: "tuscany", name: "Tuscany", country: "Italy", region: "Europe", kind: "region",
    center: [11.4, 43.2], zoom: 8.6,
    tagline: "Hill towns, abbeys and gardens, best reached slowly.",
    intro: [
      "Southern Tuscany rewards a car and a loose plan. Romanesque abbeys, a Renaissance ideal town and landscaped gardens are spread across a few valleys.",
      "Travel outside the high season if you can.",
    ],
    character: ["Romanesque", "Renaissance", "Landscape"],
    image: "/images/destinations/tuscany.jpg", demo: true,
  },
];
