"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "./HeroSection";
import HomeInvite from "./HomeInvite";
import HomeBlue from "./HomeBlue";
import StoryImage from "./StoryImage";
import OurStory from "./OurStory";
import Marquee from "./Marquee";
import RoundImage from "./RoundImage";
import Gifts from "./Gifts";
import Schedule from "./Schedule";
import Footer from "./Footer";

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
      {/* <HeroSection />
      <HomeInvite />
      <HomeBlue />
      <StoryImage image="DSC09793_jb6afq.jpg" objectPosition="50% 38%"/>
      <OurStory/>
      <Marquee/>
      <RoundImage image="DSC09890_m4kh1w.jpg"/>
      <Gifts/>
      <StoryImage image="DSC09671_cdeuiy.jpg" objectPosition="50% 25%"/>
      <Schedule/>
      <Footer/> */}
    </>
  );
};

export default HomePageWrapper;
