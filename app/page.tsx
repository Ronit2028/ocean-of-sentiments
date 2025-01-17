import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { ImagesSliderDemo } from "@/components/ImageSliderDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import TheBand from "@/components/TheBand";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroParallaxDemo />
      <TheBand/>
    </main>
  );
}
