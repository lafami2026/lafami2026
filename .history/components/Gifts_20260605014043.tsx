import React, { RefObject } from "react";
import Link from "next/link";
import QRCode from "@/utils/Icons/QRCode";
import Image from "next/image";
import OM from "../public/om.png"
import MOMO from "../public/momo.png"
import styles from "../styles/HomePage/ourstory.module.scss";

const Gifts = ({ gRef }: { gRef: RefObject<HTMLDivElement | null> }) => {
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
              <Link className={styles.click} href="/" target="_blank">
                clicking here.
              </Link>
            </p>
          </div>
          <div className={styles.qrcode}>
            <QRCode />
          </div>
        </div>
      </div>
      <div className={styles.form__modal}>
        <div className={styles.fm__wrap}>
          <div className={styles.fm__top}>
            <div className={styles.imager}>
              <Image fill src={MOMO} alt="La FaMi 2026" sizes="15vw"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
