"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "./HeroSection";
import HomeInvite from "./HomeInvite";

const HomePageWrapper = () => {
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
  }, []);

  return (
    <>
      <HeroSection />
      <Home
    </>
  );
};

export default HomePageWrapper;
