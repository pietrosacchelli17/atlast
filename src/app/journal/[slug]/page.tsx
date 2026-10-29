import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, DemoBadge } from "@/components/ui/bits";
import { Picture } from "@/components/ui/Picture";
import { ArticleCard } from "@/components/cards/cards";
import { formatDate, getArticle, getArticles } from "@/lib/content";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = getArticles().filter((x) => x.slug !== a.slug).slice(0, 2);
  return (
    <article>
      <Container className="max-w-[1100px] pt-12 text-center">
        <p className="eyebrow mb-5">{a.type} · {a.readMinutes} min read</p>
        <h1 className="display h1 mx-auto max-w-[18ch]">{a.title}</h1>
        <p className="mt-6 text-sm text-mute">{a.author} · {formatDate(a.date)}</p>
        {a.demo && <DemoBadge className="mt-4 inline-block text-mute" />}
        <Picture src={a.image} alt={a.title} seed={a.slug} priority className="mt-10 aspect-[16/9] w-full" />
      </Container>
      <Container className="max-w-[720px] py-14">
        <p className="display mb-10 text-3xl italic leading-tight">{a.excerpt}</p>
        <div className="prose-ed text-lg leading-relaxed">{a.body.map((t, i) => <p key={i}>{t}</p>)}</div>
        <p className="mt-10 border-l-2 border-stone pl-4 text-sm text-mute">Placeholder article. Text is illustrative and not a report of fact.</p>
      </Container>
      <section className="bg-paper py-16">
        <Container>
          <p className="eyebrow mb-8">Keep reading</p>
          <div className="grid gap-10 sm:grid-cols-2">{more.map((m) => <ArticleCard key={m.slug} a={m} />)}</div>
          <Link href="/journal" className="link-u mt-10 inline-block text-sm">← All articles</Link>
        </Container>
      </section>
    </article>
  );
}
