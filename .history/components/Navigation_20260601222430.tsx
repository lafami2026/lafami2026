"use client";

import React, { RefObject, useRef } from "react";
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
