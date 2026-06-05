import React from "react";
import Cancel from "@/utils/Icons/Cancel";
import DoubleLove from "@/utils/Icons/DoubleLove";
import { SideBarAnim } from "@/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/HomePage/navigation.module.scss";

const SideBar = ({
  activeSide,
  setActiveSide,
  lenis: Lenis | null;
  mRef: RefObject<HTMLDivElement | null>;
  dRef: RefObject<HTMLDivElement | null>;
  sRef: RefObject<HTMLDivElement | null>;
  gRef: RefObject<HTMLDivElement | null>;
  scRef: RefObject<HTMLDivElement | null>;
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
          <span className={styles.links} onClick={() => setActiveSide(false)}>
            Message
          </span>
          <span className={styles.links} onClick={() => setActiveSide(false)}>
            Details
          </span>
          <span className={styles.links} onClick={() => setActiveSide(false)}>
            Our Story
          </span>
          <span className={styles.links} onClick={() => setActiveSide(false)}>
            Gifts
          </span>
          <span className={styles.links} onClick={() => setActiveSide(false)}>
            Schedule
          </span>
          <Link
            className={styles.links}
            href="/gallery"
            onClick={() => setActiveSide(false)}
          >
            Gallery
          </Link>
        </div>
        <div className={styles.bottomer}>
          <div className={styles.rsvpi}>
            <span>RSVP</span>
            <DoubleLove />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
