"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://utfs.io/f/6e80f992-7502-4583-b49f-3116fd4ad486-8sfhbl.jpg",
    "https://utfs.io/f/4e29749d-d528-4cd7-a609-01f382947b29-d1yw5y.jpg",
    "https://utfs.io/f/45f0e89e-0ec5-4347-be73-b8176d9dee9b-2s2fli.jpg",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
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
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
