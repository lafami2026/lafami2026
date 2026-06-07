"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

const GalleryPageWrapper = () => {
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

  return <>
  <
  </>;
};

export default GalleryPageWrapper;
