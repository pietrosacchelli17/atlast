import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui/bits";
import { Picture } from "@/components/ui/Picture";

export const metadata: Metadata = { title: "About", description: "What ATLAST is, and how it chooses places." };

export default function AboutPage() {
  return (
    <>
      <Container className="py-14 sm:py-24">
        <p className="eyebrow mb-4">About ATLAST</p>
        <h1 className="display h1 max-w-[18ch]">Explore the world through architecture, design and culture.</h1>
      </Container>
      <Container className="grid gap-12 pb-20 lg:grid-cols-12">
        <div className="lg:col-span-5"><Picture src="/images/about.jpg" alt="Architectural study" seed="about" className="aspect-[4/5]" /></div>
        <div className="space-y-6 text-lg leading-relaxed lg:col-span-6 lg:col-start-7">
          <p className="display text-3xl italic leading-tight">Not a travel blog, and not a booking site.</p>
          <p>ATLAST is a curated atlas of places worth the journey: buildings, galleries, interiors, cafés, bars, hotels and quieter corners. It is made for architects, designers, students and curious travellers.</p>
          <p>We select fewer places and say more about each. Every entry is read through its architecture and context, and links to the guides and stories around it.</p>
          <p>ATLAST grew out of the studio work of Petrus Atelier, and shares its interest in craft, materials and how people use buildings.</p>
        </div>
      </Container>
      <section className="bg-paper py-20">
        <Container>
          <h2 className="display h2 mb-12">How we work</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              ["Selection over volume", "An entry has to earn its place. There is no ranking by popularity and no sponsored listing."],
              ["Context first", "We name the architect or designer when relevant, and explain why a place matters before how to get there."],
              ["Verification", "Content is marked as demo until an editor has checked it on the ground. Hours and prices are always the venue's to confirm."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-ink pt-5">
                <h3 className="display h3 mb-3">{t}</h3>
                <p className="text-mute">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container className="py-20">
        <h2 className="display h2 mb-4">About this prototype</h2>
        <p className="max-w-[60ch] text-mute">All places, guides and articles are demonstration content, and all images are generated placeholders. Saved places and guide purchases are stored only in your browser. Accounts and payments are not connected.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/explore">Explore the Map →</ButtonLink>
          <ButtonLink href="mailto:hello@atlast.example" variant="outline">Contact</ButtonLink>
        </div>
      </Container>
    </>
  );
}
