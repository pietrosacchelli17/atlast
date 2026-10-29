"use client";
import { useEffect, useRef, useState } from "react";
import { getDestinations } from "@/lib/content";

/** Label placement per city so the European cluster stays legible: [dx, dy, anchor]. */
const LABEL: Record<string, [number, number, "start" | "end"]> = {
  london: [-16, -8, "end"],
  copenhagen: [16, -10, "start"],
  milan: [16, 2, "start"],
  tuscany: [16, 18, "start"],
  barcelona: [-16, 14, "end"],
  tokyo: [16, 4, "start"],
};
const R = 300;
const C = 320;
const rad = (d: number) => (d * Math.PI) / 180;

/** Orthographic projection. Returns null for the hidden hemisphere. */
function project(lng: number, lat: number, lng0: number, lat0: number) {
  const l = rad(lng - lng0), p = rad(lat), p0 = rad(lat0);
  const cosc = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l);
  if (cosc < 0) return null;
  return {
    x: C + R * Math.cos(p) * Math.sin(l),
    y: C - R * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l)),
    z: cosc,
  };
}

function line(pts: ([number, number] | null)[]) {
  let d = "", pen = false;
  for (const p of pts) {
    if (!p) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
    pen = true;
  }
  return d;
}

export function HeroGlobe({ className = "" }: { className?: string }) {
  const [lng0, setLng0] = useState(8);
  const raf = useRef(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setLng0((v) => (v + dt * 2.2) % 360);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const lat0 = 28;
  const meridians = Array.from({ length: 24 }, (_, i) => {
    const lng = i * 15 - 180;
    const pts = Array.from({ length: 61 }, (_, k) => {
      const q = project(lng, -90 + k * 3, lng0, lat0);
      return q ? ([q.x, q.y] as [number, number]) : null;
    });
    return <path key={`m${i}`} d={line(pts)} fill="none" stroke="currentColor" strokeWidth={i % 6 === 0 ? 0.9 : 0.4} opacity={i % 6 === 0 ? 0.5 : 0.28} />;
  });
  const parallels = Array.from({ length: 11 }, (_, i) => {
    const lat = -75 + i * 15;
    const pts = Array.from({ length: 121 }, (_, k) => {
      const q = project(-180 + k * 3, lat, lng0, lat0);
      return q ? ([q.x, q.y] as [number, number]) : null;
    });
    return <path key={`p${i}`} d={line(pts)} fill="none" stroke="currentColor" strokeWidth={lat === 0 ? 0.9 : 0.4} opacity={lat === 0 ? 0.5 : 0.28} />;
  });

  const cities = getDestinations().map((d) => {
    const q = project(d.center[0], d.center[1], lng0, lat0);
    return { d, q };
  });

  return (
    <svg viewBox="0 0 640 640" className={className} role="img" aria-label="Rotating globe with graticule, marking Europe and Tokyo">
      <circle cx={C} cy={C} r={R} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <g>{parallels}{meridians}</g>
      {cities.map(({ d, q }) =>
        q && q.z > 0.15 ? (
          <g key={d.slug} opacity={Math.min(1, (q.z - 0.15) * 3)}>
            <circle cx={q.x} cy={q.y} r="5" fill="var(--color-stone-deep)" />
            <circle cx={q.x} cy={q.y} r="11" fill="none" stroke="var(--color-stone-deep)" strokeWidth="0.8" />
            <text x={q.x + (LABEL[d.slug]?.[0] ?? 16)} y={q.y + (LABEL[d.slug]?.[1] ?? 4)} textAnchor={LABEL[d.slug]?.[2] ?? "start"} fontSize="11" letterSpacing="1.6" fill="currentColor" style={{ textTransform: "uppercase", fontFamily: "var(--font-inter)" }}>
              {d.name}
            </text>
          </g>
        ) : null,
      )}
    </svg>
  );
}
