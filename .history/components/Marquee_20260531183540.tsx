"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import DoubleLove from "@/utils/Icons/DoubleLove";
import styles from "../../styles/ReUsables/venuebanner.module.scss";

const Marquee = () => {
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstSlide.current, { xPercent });
    gsap.set(secondSlide.current, { xPercent });
    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 20000,
        scrub: 1,
        onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
      },
      // x: "-150px",
    });
    requestAnimationFrame(animation);
  });

  return (
    <section className={`${styles.vb__section}`}>
      <div className={styles.vbslider__container}>
        <div className={styles.vb__slider} ref={sliderRef}>
          <div className={styles.vslider__main} ref={firstSlide}>
            <div className={styles.vslider__content}>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <DoubleLove/>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <span className={styles.vspan__button}></span>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <DoubleLove/>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <DoubleLove/>
              </div>
            </div>
            <span className={styles.vslider__space}></span>
          </div>
          <div className={styles.vslider__main} ref={secondSlide}>
            <div className={styles.vslider__content}>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <span className={styles.vspan__button}></span>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <span className={styles.vspan__button}></span>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <span className={styles.vspan__button}></span>
              </div>
              <div className={styles.vfirst__slide}>
                <p>FM 07.07</p>
                <span className={styles.vspan__button}></span>
              </div>
            </div>
            <span className={styles.vslider__space}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
