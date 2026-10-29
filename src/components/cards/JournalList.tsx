"use client";
import { useState } from "react";
import type { Article, ArticleType } from "@/data/types";
import { ArticleCard } from "./cards";

export function JournalList({ articles }: { articles: Article[] }) {
  const types = Array.from(new Set(articles.map((a) => a.type))) as ArticleType[];
  const [type, setType] = useState<ArticleType | null>(null);
  const list = articles.filter((a) => !type || a.type === type);
  const chip = (on: boolean) => `border px-3.5 py-2 text-[0.72rem] font-normal uppercase tracking-[0.12em] transition-colors ${on ? "border-ink bg-ink text-cream" : "border-line hover:border-ink"}`;
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
        <button type="button" aria-pressed={!type} className={chip(!type)} onClick={() => setType(null)}>All</button>
        {types.map((t) => <button key={t} type="button" aria-pressed={type === t} className={chip(type === t)} onClick={() => setType(t)}>{t}</button>)}
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a, i) => (
          <div key={a.slug} className={!type && i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}><ArticleCard a={a} large={!type && i === 0} /></div>
        ))}
      </div>
    </>
  );
}
