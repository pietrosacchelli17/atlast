/**
 * Content model. Every entity has a `slug` (stable id) and a `demo` flag.
 * `demo: true` = demonstration content, NOT verified by ATLAST editors.
 * Shapes are deliberately flat so they map 1:1 to database tables / CMS types.
 */

export type CategoryId =
  | "architecture"
  | "art"
  | "design"
  | "cafes"
  | "bars"
  | "hotels"
  | "landmarks"
  | "hidden";

/** "A" pins = architecture & culture, "T" pins = travel & lifestyle. */
export type PinKind = "A" | "T";

export interface Category {
  id: CategoryId;
  label: string;
  blurb: string;
  pin: PinKind;
}

export type LngLat = [lng: number, lat: number];

export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: string;
  kind: "city" | "region";
  center: LngLat;
  zoom: number;
  tagline: string;
  intro: string[];
  character: string[];
  image: string;
  demo: boolean;
}

export interface Place {
  slug: string;
  name: string;
  category: CategoryId;
  destination: string;
  coordinates: LngLat;
  address: string;
  summary: string;
  description: string[];
  architect?: string;
  year?: string;
  /** Free-text, deliberately no invented opening hours or prices. */
  visit: { access: "open" | "ticketed" | "exterior" | "private" | "varies"; note: string };
  tags: string[];
  image: string;
  demo: boolean;
}

export interface GuideStop {
  place: string;
  when: string;
  note: string;
}

export interface Guide {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  summary: string;
  intro: string[];
  premium: boolean;
  /** Minor units (pence). Mock pricing only. */
  priceMinor?: number;
  currency?: "GBP";
  includes: string[];
  stops: GuideStop[];
  image: string;
  demo: boolean;
}

export type ArticleType =
  | "Story"
  | "Interview"
  | "Photography"
  | "City Culture"
  | "Materiality & Craft"
  | "Exhibitions";

export interface Article {
  slug: string;
  title: string;
  type: ArticleType;
  excerpt: string;
  body: string[];
  author: string;
  date: string; // ISO
  readMinutes: number;
  image: string;
  demo: boolean;
}
