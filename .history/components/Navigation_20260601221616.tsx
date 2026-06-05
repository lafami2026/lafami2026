

import React, { RefObject, useRef, useLayoutEffect } from "react";
import Menu from "@/utils/Icons/Menu";
import Lenis from "lenis";
import DoubleLove from "@/utils/Icons/DoubleLove";
import styles from "../styles/HomePage/navigation.module.scss";

const Navigation = ({
  ref,
  heroRef,
  lenis,
}: {
  ref: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
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

  useLayoutEffect(() => {
    if (!heroRef.current || !navRef.current) return;

    gsap.set(navRef.current, {
      autoAlpha: 0,
      y: -20,
      pointerEvents: "none",
    });

    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,

      // show nav when hero finishes
      start: "bottom top",

      onEnter: () => {
        gsap.to(navRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      },

      onLeaveBack: () => {
        gsap.to(navRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.out",
          pointerEvents: "none",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [heroRef]);

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
