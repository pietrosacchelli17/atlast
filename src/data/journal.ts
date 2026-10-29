import type { Article } from "./types";

/** DEMONSTRATION articles: placeholder text written to show layout. No real interviewees or sources. */
export const articles: Article[] = [
  {
    slug: "the-case-for-slow-travel", title: "The case for travelling by building", type: "Story",
    excerpt: "Choosing a destination by one good room, then letting the city unfold around it.",
    author: "ATLAST Editorial (demo)", date: "2026-09-12", readMinutes: 5,
    body: [
      "Some trips begin with a building. A staircase photographed once, a library glimpsed in a film, a chapel on a hill. You book the ticket for the room and discover the city around it.",
      "It is a good way to travel because it gives the day a centre of gravity. Everything else becomes a route between points that matter, and the in-between becomes a pleasure rather than a gap.",
      "This is the idea behind ATLAST. Not a list of everything, but a few places worth the journey, and enough context to see them well.",
    ],
    image: "/images/journal/the-case-for-slow-travel.jpg", demo: true,
  },
  {
    slug: "in-conversation-a-restoration-architect", title: "In conversation: restoring a modern landmark", type: "Interview",
    excerpt: "Placeholder for a long-form interview on the care of twentieth-century buildings.",
    author: "ATLAST Editorial (demo)", date: "2026-08-30", readMinutes: 9,
    body: [
      "This is a layout placeholder for an interview. A real feature would introduce the subject, set the scene, and give space to their answers.",
      "Interviews on ATLAST will focus on practice: how buildings are repaired, how rooms are lit, how cities are kept legible.",
    ],
    image: "/images/journal/in-conversation-a-restoration-architect.jpg", demo: true,
  },
  {
    slug: "concrete-in-good-light", title: "Concrete in good light", type: "Photography",
    excerpt: "A photo essay on how raw concrete changes through a single day.",
    author: "ATLAST Editorial (demo)", date: "2026-08-14", readMinutes: 4,
    body: [
      "Placeholder text for a photographic essay. The final feature will pair full-bleed images with brief captions.",
      "Concrete is rarely grey for long. At dawn it is cool and blue; at noon it flattens; in the late afternoon its texture finally comes forward.",
    ],
    image: "/images/journal/concrete-in-good-light.jpg", demo: true,
  },
  {
    slug: "the-aperitivo-as-urban-design", title: "The aperitivo as urban design", type: "City Culture",
    excerpt: "How an evening ritual shapes the way a city uses its streets and arcades.",
    author: "ATLAST Editorial (demo)", date: "2026-07-28", readMinutes: 6,
    body: [
      "A city's rituals leave marks on its buildings. Wide thresholds, standing counters, arcades that shelter a crowd: all of these are designed for one hour of the day.",
      "Placeholder essay: the full article would examine two or three examples and what they reveal about public life.",
    ],
    image: "/images/journal/the-aperitivo-as-urban-design.jpg", demo: true,
  },
  {
    slug: "brick-tile-and-the-hand", title: "Brick, tile and the hand", type: "Materiality & Craft",
    excerpt: "On the workshops behind a building's surface.",
    author: "ATLAST Editorial (demo)", date: "2026-07-05", readMinutes: 7,
    body: [
      "Look closely at any admired façade and you will find a trade: stonemasons, ceramicists, ironworkers. Their names rarely appear on the plaque.",
      "Placeholder text. The finished feature will visit workshops and trace a material from source to wall.",
    ],
    image: "/images/journal/brick-tile-and-the-hand.jpg", demo: true,
  },
  {
    slug: "what-to-see-this-autumn", title: "What to see this autumn", type: "Exhibitions",
    excerpt: "Placeholder listing of architecture and design exhibitions, edited each season.",
    author: "ATLAST Editorial (demo)", date: "2026-06-20", readMinutes: 3,
    body: [
      "This is a placeholder for a seasonal exhibitions roundup. Each entry would be checked against the venue's own listing before publication.",
      "Dates and details are intentionally absent from demo content.",
    ],
    image: "/images/journal/what-to-see-this-autumn.jpg", demo: true,
  },
];
