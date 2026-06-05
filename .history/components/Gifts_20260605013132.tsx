import React, { RefObject } from "react";
import Link from "next/link";
import QRCode from "@/utils/Icons/QRCode";
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
          <div className={styles.fm__svg}>
            <Success />
          </div>
          <h3 className={styles.fms__h3}>Success</h3>
          <p className={styles.fms__p}>
            All set — your RSVP is saved. Your invite will download shortly.
          </p>
          <span className={styles.cancel} onClick={() => setActiveModal(false)}>
            Okay
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
