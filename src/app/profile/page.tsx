import type { Metadata } from "next";
import { Container } from "@/components/ui/bits";
import { ProfileClient } from "@/components/cards/ProfileClient";

export const metadata: Metadata = { title: "Saved places", description: "Your personal collection." };

export default function ProfilePage() {
  return (
    <Container className="py-14 sm:py-20">
      <p className="eyebrow mb-4">Your collection</p>
      <h1 className="display h1 mb-12">Saved & owned.</h1>
      <ProfileClient />
    </Container>
  );
}
