"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";
import styles from "../styles/GalleryPage/galleryhero.module.scss";

const GalleryHero = () => {
  const barStyle = {
    "--objectPosition": "40% 30%",
  } as React.CSSProperties;

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-150);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-70);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-100);
      } else {
        setTransform(-150);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.gallery__hero}>
      <div className={styles.gallery__content}>
        <div className={styles.lafami}>
          <span>La FaMi</span>
        </div>
        <div className={styles.fandm}>
          <p className={styles.ourgallery}>Our Gallery</p>
          <p className={styles.date}>27.06.2026</p>
        </div>
      </div>
      <div className={styles.gallery__image}>
        <div className={styles.gi__wrap} style={barStyle}>
          <CldImage
            fill
            quality={100}
            src="DSC09678_j1rubx.jpg"
            alt="La FaMi"
            sizes="100vw"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
