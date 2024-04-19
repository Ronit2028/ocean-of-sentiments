"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://utfs.io/f/7d7462b6-fb5f-404b-a2e8-eb7f17029816-x1zqp5.gif",
    "https://utfs.io/f/a6fffda6-6aa4-4ab4-b002-3283a4a6f917-x1zqq0.gif",
    "https://utfs.io/f/556b312a-6812-4327-a45c-20957d11b01d-x1zqqv.gif",
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
        Strings That Speak Volumes <br /> Rhythms That Resonate
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
