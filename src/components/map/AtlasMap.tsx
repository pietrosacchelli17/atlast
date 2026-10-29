"use client";
import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import type { Map as MLMap, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Destination, LngLat, Place } from "@/data/types";
import { getCategory } from "@/lib/content";

const STYLE = "https://tiles.openfreemap.org/styles/positron";
const CITY_ZOOM_THRESHOLD = 6.2;

export interface MapTarget {
  center: LngLat;
  zoom: number;
  /** Changes to trigger a fly even if center/zoom are equal. */
  key: string;
}

interface Props {
  places: Place[];
  destinations?: Destination[];
  selected?: string | null;
  onSelect?: (slug: string) => void;
  onSelectDestination?: (slug: string) => void;
  target?: MapTarget;
  route?: LngLat[];
  interactive?: boolean;
  className?: string;
  label: string;
}

export function AtlasMap({ places, destinations = [], selected, onSelect, onSelectDestination, target, route, interactive = true, className = "", label }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<MLMap | null>(null);
  const markers = useRef<Marker[]>([]);
  const cb = useRef({ onSelect, onSelectDestination });
  const first = useRef(target);
  const ready = useRef(false);
  const routeRef = useRef(route);
  const applyRoute = () => {
    const m = map.current;
    const src = m?.getSource("route") as maplibregl.GeoJSONSource | undefined;
    src?.setData({ type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: routeRef.current ?? [] } });
  };

  useEffect(() => {
    cb.current = { onSelect, onSelectDestination };
    routeRef.current = route;
  });

  // init
  useEffect(() => {
    if (!el.current) return;
    const t = first.current ?? { center: [10, 30] as LngLat, zoom: 1.4, key: "init" };
    const m = new maplibregl.Map({
      container: el.current,
      style: STYLE,
      center: t.center,
      zoom: t.zoom,
      attributionControl: { compact: true },
      interactive,
      cooperativeGestures: interactive,
      minZoom: 1,
    });
    map.current = m;
    if (interactive) m.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    const sync = () => {
      const z = m.getZoom();
      const c = m.getContainer();
      c.classList.toggle("map-zoomed", z >= CITY_ZOOM_THRESHOLD);
      c.classList.toggle("map-world", z < CITY_ZOOM_THRESHOLD);
      c.classList.toggle("map-far", z < 3.6);
    };
    m.on("zoom", sync);
    m.on("load", () => {
      sync();
      m.addSource("route", { type: "geojson", data: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: [] } } });
      m.addLayer({ id: "route", type: "line", source: "route", paint: { "line-color": "#555555", "line-width": 2, "line-dasharray": [2, 2] } });
      ready.current = true;
      applyRoute();
    });
    sync();
    return () => {
      m.remove();
      map.current = null;
    };
  }, [interactive]);

  // markers
  useEffect(() => {
    const m = map.current;
    if (!m) return;
    markers.current.forEach((x) => x.remove());
    markers.current = [];
    for (const p of places) {
      const cat = getCategory(p.category);
      const b = document.createElement("button");
      b.type = "button";
      b.className = `pin pin-${cat.pin.toLowerCase()}`;
      b.textContent = cat.pin;
      b.setAttribute("aria-label", `${p.name}, ${cat.label}`);
      b.dataset.slug = p.slug;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        cb.current.onSelect?.(p.slug);
      });
      markers.current.push(new maplibregl.Marker({ element: b }).setLngLat(p.coordinates).addTo(m));
    }
    for (const d of destinations) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "city-pin";
      const n = places.filter((p) => p.destination === d.slug).length;
      b.innerHTML = `<span class="name">${d.name}</span><b>${n}</b>`;
      b.setAttribute("aria-label", `${d.name}: ${n} places. Zoom in`);
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        cb.current.onSelectDestination?.(d.slug);
      });
      markers.current.push(new maplibregl.Marker({ element: b }).setLngLat(d.center).addTo(m));
    }
  }, [places, destinations]);

  // selection highlight
  useEffect(() => {
    markers.current.forEach((mk) => {
      const e = mk.getElement();
      e.classList.toggle("active", !!selected && e.dataset.slug === selected);
    });
  }, [selected, places]);

  // fly
  useEffect(() => {
    const m = map.current;
    if (!m || !target || target.key === "init") return;
    if (target === first.current) return;
    m.flyTo({ center: target.center, zoom: target.zoom, speed: 0.9, essential: false });
  }, [target]);

  // route
  useEffect(() => {
    if (ready.current) applyRoute();
  }, [route]);

  return (
    <div className={`map-frame relative bg-paper ${className}`}>
      <div className="absolute inset-0">
        <div ref={el} role="region" aria-label={label} className="h-full w-full" />
      </div>
    </div>
  );
}
