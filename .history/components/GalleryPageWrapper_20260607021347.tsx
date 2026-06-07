"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import GalleryGrid from "./GalleryGrid";
import type { GalleryImage } from "@/lib/cloudinary";
import GalleryHero from "./GalleryHero";
import Navigation2 from "./Navigation2";

interface Props {
  images: GalleryImage[];
}

export default function GalleryPageWrapper({ images }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

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
      <Navigation2 heroRef={heroRef} />
      <GalleryHero ref={heroRef} />
      <GalleryGrid images={images} />
    </>
  );
}
