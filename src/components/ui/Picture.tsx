"use client";
import { useState } from "react";
import { ArchPlaceholder } from "./ArchPlaceholder";

interface Props {
  src: string;
  alt: string;
  seed: string;
  className?: string;
  priority?: boolean;
  /** Hide the "placeholder" tag, e.g. in small thumbnails. */
  quiet?: boolean;
}

export function Picture({ src, alt, seed, className = "", priority, quiet }: Props) {
  const [ok, setOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`img-zoom relative overflow-hidden bg-paper ${className}`}>
      {!(ok && loaded) && <ArchPlaceholder seed={seed} label={`${alt} (placeholder image)`} />}
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setOk(false)}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {!(ok && loaded) && !quiet && (
        <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-[0.14em] text-ink/55">
          Placeholder · {src.replace("/images/", "")}
        </span>
      )}
    </div>
  );
}
