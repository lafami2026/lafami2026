"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

const GalleryPageWrapper = () => {
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

  return <div>GalleryPageWrapper</div>;
};

export default GalleryPageWrapper;
