import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface DirectionAwareHoverDemoProps {
  imageUrl: string; // Define the type of imageUrl prop as string
  desc: string; // Define the type of desc prop as string
}

export function DirectionAwareHoverDemo({ imageUrl, desc }: DirectionAwareHoverDemoProps) {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-lg">{desc}</p>
      </DirectionAwareHover>
    </div>
  );
}
