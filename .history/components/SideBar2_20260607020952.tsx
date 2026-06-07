import React, { RefObject } from "react";
import Cancel from "@/utils/Icons/Cancel";
import DoubleLove from "@/utils/Icons/DoubleLove";
import { SideBarAnim } from "@/animations";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import styles from "../styles/HomePage/navigation.module.scss";

const SideBar2 = ({
  activeSide,
  setActiveSide,

}: {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className={styles.sidebar}
      variants={SideBarAnim}
      animate={activeSide ? "entry" : "initial"}
      exit="exit"
    >
      <div className={styles.side__wrap}>
        <div className={styles.top}>
          <span
            className={styles.cancel}
            onClick={() => setActiveSide(!activeSide)}
          >
            <Cancel />
          </span>
          <span className={styles.fami}>La FaMi</span>
        </div>
        <div className={styles.mid}>
          <Link className={styles.links} href="/#message">
            Message
          </Link>
          <Link className={styles.links} href="/#details">
            Details
          </Link>
          <Link className={styles.links} href="/#story">
            Our Story
          </Link>
          <Link className={styles.links} href="/#gifts">
            Gifts
          </Link>
          <Link className={styles.links} onClick={scheduleScroll}>
            Schedule
          </Link>
          <Link
            className={styles.links}
            href="/gallery"
            onClick={() => setActiveSide(false)}
          >
            Gallery
          </Link>
        </div>
        <div className={styles.bottomer} onClick={rsvpScroll}>
          <div className={styles.rsvpi}>
            <span>RSVP</span>
            <DoubleLove />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar2;