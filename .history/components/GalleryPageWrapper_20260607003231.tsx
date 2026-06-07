"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import GalleryGrid from "./GalleryGrid";
import type { GalleryImage } from "@/lib/cloudinary";
import GalleryHero from "./GalleryHero";

interface Props {
  images: GalleryImage[];
}

export default function GalleryPageWrapper({ images }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  return (
    <>
      <GalleryHero />
      {/* <GalleryGrid images={images} /> */}
    </>
  );
}
