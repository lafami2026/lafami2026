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
      link: "https://pixies.et/7NFBghbX",
    },
    {
      id: 3,
      link: "https://pixies.et/z0DihA26",
    },
  ];

  return (
    <div className={styles.hero__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__images}>
          {imagesData.map((data) => (
            <div className={styles.image} key={data.id}>
              <Image fill quality={100} src={data.link} alt="La FaMi"/>
            </div>
          ))}
        </div>
        <div className={styles.control}></div>
      </div>
    </div>
  );
};

export default HeroSection;
