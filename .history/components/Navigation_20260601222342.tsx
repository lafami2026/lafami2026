"use client";

import React, { RefObject, useRef, useEffect } from "react";
import Menu from "@/utils/Icons/Menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import DoubleLove from "@/utils/Icons/DoubleLove";
import styles from "../styles/HomePage/navigation.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Navigation = ({
  ref,

  lenis,
}: {
  ref: RefObject<HTMLDivElement | null>;
  lenis: Lenis | null;
}) => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleLenisScroll = () => {
    if (lenis && ref?.current) {
      const referenceTop =
        window.scrollY + ref?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop, { duration: 2 });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = navRef.current;
    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, {
        opacity: 1,
        background: "transparent",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+= top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 700, force nav to be visible and transparent.
          if (self.scroll() < 600) {
            gsap.to(navigation, {
              opacity: 1,
              background: "transparent",
              duration: 0.5,
            });
          } else {
            // Then animate the translateY based on scroll direction.
            if (self.direction === 1 && self.scroll() > lastScroll) {
              // Scrolling down: hide nav.
              gsap.to(navigation, {
                // opacity: 0,
                duration: 0.5,
              });
            } else if (self.direction === -1 && self.scroll() < lastScroll) {
              // Scrolling up: show nav.
              gsap.to(navigation, {
                // opacity: 1,
                duration: 0.5,
              });
            }
            // Once past 700, always force the gradient background immediately.
            gsap.set(navigation, {
              background:
                "linear-gradient(180deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0) 100%)",
              duration: 0.5,
            });
          }
          lastScroll = self.scroll();
        },
      });
    }
  }, []);

  return (
    <div className={styles.navigation} ref={navRef}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.nav__wrapper}>
          <div className={styles.menu}>
            <span>Menu</span>
            <Menu />
          </div>
          <div className={styles.rsvper}>
            <span>27th June 2026</span>
            <div className={styles.button} onClick={handleLenisScroll}>
              <span className={styles.rsvp}>RSVP</span>
              <span className={styles.svg}>
                <DoubleLove />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
