import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroParallaxDemo />
      <MacbookScrollDemo />
      <LayoutGridDemo />
      <InfiniteMovingCardsDemo />
    </main>
  );
}
