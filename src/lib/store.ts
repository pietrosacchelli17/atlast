"use client";
/**
 * Local persistence for saved places and (mock) guide purchases.
 * Swap the `read`/`write` functions for API calls when accounts exist;
 * the hooks' public shape can stay the same.
 */
import { useCallback, useSyncExternalStore } from "react";

type Key = "atlast:saved" | "atlast:purchases";
const listeners = new Set<() => void>();
const cache = new Map<Key, { raw: string | null; value: string[] }>();
const EMPTY: string[] = [];

function read(key: Key): string[] {
  if (typeof window === "undefined") return EMPTY;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    return EMPTY;
  }
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value;
  let value: string[] = EMPTY;
  try {
    value = raw ? (JSON.parse(raw) as string[]) : EMPTY;
  } catch {
    value = EMPTY;
  }
  cache.set(key, { raw, value });
  return value;
}

function write(key: Key, value: string[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: ignore */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function useList(key: Key) {
  return useSyncExternalStore(subscribe, () => read(key), () => EMPTY);
}

export function useSaved() {
  const saved = useList("atlast:saved");
  const toggle = useCallback((slug: string) => {
    const cur = read("atlast:saved");
    write("atlast:saved", cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]);
  }, []);
  const clear = useCallback(() => write("atlast:saved", []), []);
  return { saved, isSaved: (slug: string) => saved.includes(slug), toggle, clear };
}

export function usePurchases() {
  const purchases = useList("atlast:purchases");
  const buy = useCallback((slug: string) => {
    const cur = read("atlast:purchases");
    if (!cur.includes(slug)) write("atlast:purchases", [...cur, slug]);
  }, []);
  const reset = useCallback(() => write("atlast:purchases", []), []);
  return { purchases, owns: (slug: string) => purchases.includes(slug), buy, reset };
}
