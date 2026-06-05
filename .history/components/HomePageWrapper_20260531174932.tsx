"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "./HeroSection";
import HomeInvite from "./HomeInvite";
import HomeBlue from "./HomeBlue";
import StoryImage from "./StoryImage";
import OurStory from "./OurStory";

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
      <HomeInvite />
      <HomeBlue />
      <StoryImage image="DSC09793_jb6afq.jpg"/>
      <OurStory/>
    </>
  );
};

export default HomePageWrapper;
