"use client";
import { TextGenerateEffect } from "./ui/text-generator-effect";

const words = `Twin Strings began as a melody humming between two brothers, Sagar and Sahil. Growing up surrounded by music, their bond blossomed over shared instruments and a love for creating. Soon, Manav's soulful vocals and Mohit's dynamic drumming wove themselves into the tapestry, birthing the electrifying sound of Twin Strings. Their music draws inspiration from a diverse range of genres, but their core lies in crafting soulful melodies that intertwine with contemporary beats, creating a sound that's uniquely their own.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
