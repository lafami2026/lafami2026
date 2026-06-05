"use clei"

import React, {useState, useEffect} from "react";
import { CldImage } from "next-cloudinary";
import styles from "../styles/HomePage/homeinvite.module.scss";

const StoryImage = ({ image }: { image: string }) => {
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
    <div className={styles.image__wrapper}>
      <div className={styles.imager}>
        <CldImage fill quality={100} src={image} alt="La FaMi" sizes="100vw" />
      </div>
    </div>
  );
};

export default StoryImage;
