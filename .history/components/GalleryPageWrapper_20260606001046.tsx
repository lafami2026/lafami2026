"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { getGalleryImages } from "@/lib/cloudinary";
import GalleryGrid from "./GalleryGrid";
import GalleryHero from "./GalleryHero";

export default async function GalleryPageWrapper() {
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

  // Change "wedding" to your actual Cloudinary folder name
  const images = await getGalleryImages("wedding-gallery");

  return (
    <>
      <GalleryHero />
      <GalleryGrid ima/>
    </>
  );
}
