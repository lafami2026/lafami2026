"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/homeinvite.module.scss";

const StoryImage = ({
  image,
  objectPosition,
  objectPosition2,
}: {
  image: string;
  objectPosition: string;
  objectPosition2: string;
}) => {
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

  const barStyle = {
    "--objectPosition": objectPosition,
    "--objectPosition2":
  } as React.CSSProperties;

  return (
    <div className={styles.image__wrapper} ref={container} style={barStyle}>
      <motion.div className={styles.imager} style={{ y }}>
        <div className={styles.imagemain}>
          <CldImage
            fill
            quality={100}
            src={image}
            alt="La FaMi"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default StoryImage;
