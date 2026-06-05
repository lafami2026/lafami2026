import React from "react";
import Image from "next/image";
import styles from "../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  const imagesData = [
    {
      id: 1,
      link: "https://81813.pixieset.com/preweddingshootfannyandmichael/?pid=18584729597&id=10&h=NDEwOTk0ODk0Ng",
    },
    {
      id: 2,
      link: "https://81813.pixieset.com/preweddingshootfannyandmichael/?pid=18584729597&id=10&h=NDEwOTk0ODk0Ng",
    },
    {
      id: 3,
      link: "hhttps://81813.pixieset.com/preweddingshootfannyandmichael/?pid=18584729597&id=10&h=NDEwOTk0ODk0Ng",
    },
  ];

  return (
    <div className={styles.hero__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__images}>
          {imagesData.map((data) => (
            <div className={styles.image} key={data.id}>
              <Image fill quality={100} src={data.link} alt="La FaMi" />
            </div>
          ))}
        </div>
        <div className={styles.control}></div>
      </div>
    </div>
  );
};

export default HeroSection;
