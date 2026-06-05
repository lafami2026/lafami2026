"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(1);

  const imagesData = [
    {
      id: 1,
      link: "DSC09619_qhn9mm.jpg",
    },
    {
      id: 2,
      link: "DSC09678_j1rubx.jpg",
    },
    {
      id: 3,
      link: "DSC09525_kn0roq.jpg",
    },
    {
      id: 4,
      link: "DSC09619_qhn9mm.jpg",
    },
    {
      id: 5,
      link: "DSC09678_j1rubx.jpg",
    },
  ];

  return (
    <div className={styles.hero__section}>
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
            <span
              className={`styles.control {}`}
              onClick={() => setActiveImage(1)}
            ></span>
            <span
              className={styles.control}
              onClick={() => setActiveImage(2)}
            ></span>
            <span
              className={styles.control}
              onClick={() => setActiveImage(3)}
            ></span>
            <span
              className={styles.control}
              onClick={() => setActiveImage(4)}
            ></span>
            <span
              className={styles.control}
              onClick={() => setActiveImage(5)}
            ></span>
          </div>
        </div>
      </div>
      <div className={styles.hero__image}>
        <div className={styles.h__images}>
          {imagesData.map((data) => (
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
