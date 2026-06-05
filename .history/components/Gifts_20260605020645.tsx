import React, { RefObject, useState } from "react";
import Link from "next/link";
import QRCode from "@/utils/Icons/QRCode";
import Image from "next/image";
import OM from "../public/om.png";
import MOMO from "../public/momo.png";
import Cancel from "@/utils/Icons/Cancel";
import { AnimatePresence } from "framer-motion";
import { rsvpAnim } from "@/animations";
import { motion } from "framer-motion";
import styles from "../styles/HomePage/ourstory.module.scss";

const Gifts = ({ gRef }: { gRef: RefObject<HTMLDivElement | null> }) => {
  //Modal Show
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={styles.gifts__section} ref={gRef}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.os__wrapper}>
          <div className={styles.osw__top}>
            <h3 className={styles.osw__h3}>Gifts</h3>
            <p className={styles.osw__p}>
              Your presence is truly the greatest gift we could ask for. Any
              additional gesture is entirely optional. For those who would still
              like to bless us with a cash gift, digital giving is available via
              the QR code or by{" "}
              <span
                className={styles.click}
                onClick={() => setActiveModal(true)}
              >
                clicking here.
              </span>
            </p>
          </div>
          <div className={styles.qrcode}>
            <QRCode />
          </div>
        </div>
      </div>
      {activeModal && (
        <div className={styles.form__modal}>
          <div className={styles.fm__wrap}>
            <div className={styles.fm__top}>
              <div className={styles.imagerm}>
                <Image fill src={MOMO} alt="La FaMi 2026" sizes="10vw" />
              </div>
              <span className={styles.mo__span}>MTN Mobile Money</span>
              <span className={styles.mo__span2}>
                683631226 (Michael Ngenge Budzi)
              </span>
            </div>
            <div className={styles.fm__top}>
              <div className={styles.imagerm}>
                <Image fill src={OM} alt="La FaMi 2026" sizes="10vw" />
              </div>
              <span className={styles.mo__span}>Orange Money</span>
              <span className={styles.mo__span2}>
                641914338 (Ndi Fanny Yenyu)
              </span>
            </div>
            <div
              className={styles.cancel}
              onClick={() => setActiveModal(false)}
            >
              <Cancel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gifts;
