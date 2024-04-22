"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full pb-24">
      <p className="text-4xl font-bold text-center py-6">Meet the Masters of Melody</p>
      <p className="text-sm font-bold text-center">Click on the tiles to see the magic</p>

      <LayoutGrid cards={cards} />

    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Sagar (Lead Guitar)</p>
      <p className="font-normal text-base text-white">Melody Weaver</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Sagar's fingers dance across the fretboard, weaving intricate melodies
        that form the backbone of Twin Strings' sound. Deeply influenced by
        classic rock legends, he injects a timeless quality into their music.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Manav (Vocals)</p>
      <p className="font-normal text-base text-white">The Voice that Captivates</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Manav's voice is the captivating force that draws listeners in. His soulful
        vocals possess a raw honesty that resonates with the heart. Inspired by
        legendary singers across genres, he infuses each song with a depth of
        emotion that connects with audiences on a personal level.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Sahil (Bass Guitar & Keyboards)</p>
      <p className="font-normal text-base text-white">The Rhythmic Alchemist</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The rhythmic foundation of Twin Strings rests on Sahil's masterful bass
        playing. His background in electronic music adds a contemporary edge to
        their sound. But don't be fooled - he's equally at home with the warm
        textures of keyboards, adding depth and atmosphere to their compositions.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Mohit (Drums)</p>
      <p className="font-normal text-base text-white">The Pulse of the Performance</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The driving force behind Twin Strings' energetic live shows is Mohit's
        dynamic drumming. His precise yet powerful beats keep the groove flowing
        and get audiences moving. When not behind the kit, you might find him
        experimenting with different percussion instruments, always seeking new
        ways to add rhythmic flair to their music.
      </p>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://utfs.io/f/6339932c-22e8-4b2d-adc6-b7964a33735c-1gmq0.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://utfs.io/f/31b15954-4c08-4485-b3fa-1a1523af0edc-so5unu.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://utfs.io/f/beef5e78-60eb-42bf-a348-ca9e7e14953c-ygknuh.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://utfs.io/f/bdbba06c-14c7-4a4c-99f3-3f8718985787-ygknvc.jpg",
  },
];
