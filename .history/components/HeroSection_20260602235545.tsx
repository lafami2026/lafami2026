"use client";

import React, { useEffect, useState, RefObject } from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/herosection.module.scss";

const SLIDE_DURATION = 4000; // change this anytime

const HeroSection = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  const imagesData = [
    {
      id: 1,
      link: "DSC09619_qhn9mm.jpg",
      op: "60% 30%",
    },
    {
      id: 2,
      link: "DSC09678_j1rubx.jpg",
      op: "60% 30%",
    },
    {
      id: 3,
      link: "DSC09525_kn0roq.jpg",
      op: "60% 30%",
    },
    {
      id: 4,
      link: "DSC09573_ftb7io.jpg",
      op: "60% 30%",
    },
    {
      id: 5,
      link: "DSC09548_saucsk.jpg",
      op: "60% 30%",
    },
  ];

  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveImage((prev) => (prev === imagesData.length ? 1 : prev + 1));
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeImage, imagesData.length]);

  return (
    <div className={styles.hero__section} ref={ref}>
      <div className={styles.hero__content}>
        <div className={styles.lafami}>
          <span>La FaMi</span>
        </div>

        <div className={styles.bottom}>
          <div className={styles.fandm}>
            <p>Fanny & Michael</p>
            <p className={styles.date}>27.06.2026</p>
          </div>

          <div className={styles.controls}>
            {imagesData.map((data) => (
              <span
                key={data.id}
                className={`${styles.control} ${
                  activeImage === data.id ? styles.active : ""
                }`}
                onClick={() => setActiveImage(data.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.hero__image}>
        <div className={styles.h__images}>
          {imagesData.map((data) => {
            
            return (
              <div
                className={`${styles.image} ${
                  activeImage === data.id ? styles.active : ""
                }`}
                key={data.id}
                style={{ zIndex: 5 - data.id }}
              >
                <CldImage
                  fill
                  quality={100}
                  src={data.link}
                  alt="La FaMi"
                  sizes="100vw"
                  loading="eager"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
