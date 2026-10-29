import type { Metadata } from "next";
import { Container } from "@/components/ui/bits";
import { JournalList } from "@/components/cards/JournalList";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = { title: "Journal", description: "Stories, interviews, photography and city culture." };

export default function JournalPage() {
  return (
    <Container className="py-14 sm:py-20">
      <p className="eyebrow mb-4">The Journal</p>
      <h1 className="display h1 max-w-[16ch]">Notes from the atlas.</h1>
      <p className="mt-6 max-w-[56ch] text-mute">Articles here are placeholders that show the layout. Real stories, interviews and photography will replace them.</p>
      <JournalList articles={getArticles()} />
    </Container>
  );
}
