import React from "react";
import Image from "next/image";
import styles from "../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  const imagesData = [
    {
      id: 1,
      link: "https://pixies.et/qCjOljBH",
    },
    {
      id: 2,
      link: "https://pixies.et/qCjOljBH",
    },
    {
      id: 3,
      link: "https://pixies.et/qCjOljBH",
    },
    {
      id: 4,
      link: "https://pixies.et/qCjOljBH",
    },
    {
      id: 5,
      link: "https://pixies.et/qCjOljBH",
    },
  ];
  return (
    <div className={styles.hero__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__images}></div>
        <div className={styles.control}></div>
      </div>
    </div>
  );
};

export default HeroSection;
