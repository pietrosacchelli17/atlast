"use client";
import { useEffect, useRef, useState } from "react";
import { ExploreClient } from "../map/ExploreClient";

/** Mounts the map only when it nears the viewport, to keep the first load light. */
export function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="min-h-[640px]">
      {on ? <ExploreClient variant="embed" /> : <div className="grid h-[520px] place-items-center bg-paper text-sm text-mute">Loading map…</div>}
    </div>
  );
}
