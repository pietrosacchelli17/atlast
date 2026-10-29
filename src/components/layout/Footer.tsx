import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Newsletter } from "./Newsletter";
import { Container } from "../ui/bits";

/** Base URL of the Petrus Atelier static site. Locally served on :8000; set NEXT_PUBLIC_STUDIO_URL once hosted. */
const STUDIO = process.env.NEXT_PUBLIC_STUDIO_URL ?? "http://localhost:8000";

export function Footer() {
  return (
    <footer className="on-ink mt-24 bg-ink text-cream">
      <Container className="grid gap-14 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark className="text-5xl" light />
          <p className="font-display mt-4 max-w-[26ch] text-2xl font-light italic leading-snug text-cream/80">
            The Architecture Travelbook, always updated.
          </p>
          <Newsletter />
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4 text-cream/60">Atlas</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-u" href="/explore">Explore the map</Link></li>
              <li><Link className="link-u" href="/destinations">Destinations</Link></li>
              <li><Link className="link-u" href="/guides">Guides</Link></li>
              <li><Link className="link-u" href="/profile">Saved places</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-cream/60">ATLAST</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-u" href="/about">About</Link></li>
              <li><Link className="link-u" href="/journal">Journal</Link></li>
              <li><a className="link-u" href="mailto:hello@atlast.example">Contact</a></li>
              <li><a className="link-u" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow mb-4 text-cream/60">Studio</p>
            <p className="text-sm leading-relaxed text-cream/75">
              A <a className="link-u text-cream" href={`${STUDIO}/index.html`}>Petrus Atelier</a> project, alongside{" "}
              <a className="link-u text-cream" href={`${STUDIO}/keystone.html`}>Keystone</a> and{" "}
              <a className="link-u text-cream" href={`${STUDIO}/psgallery.html`}>PS Gallery</a>.
            </p>
          </div>
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-cream/15 py-6 text-xs text-cream/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ATLAST. Prototype.</p>
        <p>Places, guides and articles are demonstration content until verified by editors. Images are placeholders.</p>
      </Container>
    </footer>
  );
}
