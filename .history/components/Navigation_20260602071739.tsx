// "use client";

// import React, { RefObject, useRef } from "react";
// import Menu from "@/utils/Icons/Menu";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";
// import DoubleLove from "@/utils/Icons/DoubleLove";
// import styles from "../styles/HomePage/navigation.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const Navigation = ({
//   ref,
//   lenis,
// }: {
//   ref: RefObject<HTMLDivElement | null>;
//   lenis: Lenis | null;
// }) => {
//   const navRef = useRef<HTMLDivElement | null>(null);

//   const handleLenisScroll = () => {
//     if (lenis && ref?.current) {
//       const referenceTop =
//         window.scrollY + ref?.current.getBoundingClientRect().top;
//       lenis.scrollTo(referenceTop, { duration: 2 });
//     }
//   };

//   return (
//     <div className={styles.navigation} ref={navRef}>
//       <div className={`container ${styles.nav__container}`}>
//         <div className={styles.nav__wrapper}>
//           <div className={styles.menu}>
//             <span>Menu</span>
//             <Menu />
//           </div>
//           <div className={styles.rsvper}>
//             <span>27th June 2026</span>
//             <div className={styles.button} onClick={handleLenisScroll}>
//               <span className={styles.rsvp}>RSVP</span>
//               <span className={styles.svg}>
//                 <DoubleLove />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navigation;
"use client";

import React, { RefObject, useRef, useEffect, useState, act } from "react";
import Menu from "@/utils/Icons/Menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import DoubleLove from "@/utils/Icons/DoubleLove";
import { AnimatePresence } from "framer-motion";
import SideBar from "./SideBar";
import styles from "../styles/HomePage/navigation.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface NavigationProps {
  ref: RefObject<HTMLDivElement | null>; // rsvpRef — scroll target for the button
  heroRef: RefObject<HTMLDivElement | null>; // used to know when hero is past
  lenis: Lenis | null;
}

const Navigation = ({ ref, heroRef, lenis }: NavigationProps) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef?.current || !navRef.current) return;

    // Start fully hidden (GSAP autoAlpha handles both opacity + visibility)
    gsap.set(navRef.current, { autoAlpha: 0 });

    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "bottom top", // fires when the bottom of HeroSection hits the top of the viewport
      onEnter: () => {
        gsap.to(navRef.current, {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        // Hides again if the user scrolls back up into the hero
        gsap.to(navRef.current, {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      },
    });

    return () => trigger.kill();
  }, [heroRef]);

  const handleLenisScroll = () => {
    if (lenis && ref?.current) {
      const referenceTop =
        window.scrollY + ref.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop, { duration: 2 });
    }
  };

  //SideBar
  const [activeSide, setActiveSide] = useState(false);

  return (
    <div className={styles.navigation} ref={navRef}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.nav__wrapper}>
          <div
            className={styles.menu}
            onClick={() => setActiveSide(!activeSide)}
          >
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
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar activeSide={activeSide} setActiveSide={setActiveSide} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
