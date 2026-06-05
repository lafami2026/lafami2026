"use client";

import React, { useEffect, useState, useRef } from "react";
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
import RSVP from "./RSVP";


const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);

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
      <HeroSection />
      <HomeInvite lenis={lenis} ref={rsvpRef}/>
      <HomeBlue />
      <StoryImage image="DSC09793_jb6afq.jpg" objectPosition="50% 38%" />
      <OurStory />
      <Marquee />
      <RoundImage image="DSC09890_m4kh1w.jpg" />
      <Gifts />
      <StoryImage image="DSC09671_cdeuiy.jpg" objectPosition="50% 25%" />
      <Schedule />
      <RSVP ref={}/>
      <Footer />
    </>
  );
};

export default HomePageWrapper;
