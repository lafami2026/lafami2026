"use client";

import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
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
  ];

  return (
    <div className={styles.hero__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__images}>
          {imagesData.map((data) => (
            <div className={styles.image} key={data.id}>
              <CldImage fill quality={100} src={data.link} alt="La FaMi" sizes="100vw" />
            </div>
          ))}
        </div>
        <div className={styles.control}></div>
      </div>
    </div>
  );
};

export default HeroSection;
