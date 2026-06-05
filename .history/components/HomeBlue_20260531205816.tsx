import React from "react";
import Love from "@/utils/Icons/Love";
import styles from "../styles/HomePage/homeblue.module.scss";
import CountDown from "./CountDown";

const HomeBlue = () => {
  const dayDate = [
    {
      day: "SUN",
      date: "21",
    },
    {
      day: "MON",
      date: "22",
    },
    {
      day: "TUE",
      date: "23",
    },
    {
      day: "WED",
      date: "24",
    },
    {
      day: "THU",
      date: "25",
    },
    {
      day: "FRI",
      date: "26",
    },
  ];

  return (
    <div className={styles.homeblue}>
      <div className={`container ${styles.hb__container}`}>
        <div className={styles.hb__wrapper}>
          <div className={styles.hb__calendar}>
            <div className={styles.iw__top}>
              <span className={styles.iw__span}>DATE</span>
              <h3 className={styles.iw__h3}>June 2026</h3>
            </div>
            <div className={styles.calendar}>
              {/* {dayDate.map((data, i) => (
                <div className={styles.date__day} key={i}>
                  <span className={styles.day}>{data.day}</span>
                  <span className={styles.date}>{data.date}</span>
                </div>
              ))} */}
              <div className={styles.date__day}>
                  <span className={styles.day}>{data.day}</span>
                  <span className={styles.date}>{data.date}</span>
                </div>
              <div className={styles.date__day}>
                <span className={styles.day}>SAT</span>
                <span className={styles.date}>
                  <span className={styles.twenty}>27</span>
                  <span className={styles.love}>
                    <Love />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.iw__top}>
            <span className={styles.iw__span}>Location</span>
            <h3 className={styles.iw__h3}>Yaounde, Cameroon</h3>
          </div>
          <div className={styles.iw__top2}>
            <span className={styles.iw__span}>Countdown</span>
            <CountDown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlue;
