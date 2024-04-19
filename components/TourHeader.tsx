"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";

export function TourHeader() {
  const images = [
    "https://utfs.io/f/5f233ec4-f4ff-40f3-816b-e06e82648012-c5e95k.jpg",
    "https://utfs.io/f/6d4ac819-f3aa-40f4-801f-683a9c06b40d-4xxbew.jpg",
    "https://utfs.io/f/96ce0214-64ca-41a0-872d-ceeefdbf2ad4-4xxbe1.jpg",
  ];
  return (
    <ImagesSlider className="h-[100vh] bg-cover  " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Catch Twin Strings Live: <br /> Tours & Events
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
