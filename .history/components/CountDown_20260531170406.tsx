"use client";

import { useEffect, useState } from "react";
import styles from "../styles/HomePage/homeblue.module.scss";

const WEDDING_DATE = new Date("2026-05-27T00:00:00");

type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountDown() {
  const [time, setTime] = useState<TimeData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [status, setStatus] = useState<"countdown" | "today" | "passed">(
    "countdown"
  );

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      const weddingDayStart = new Date(
        WEDDING_DATE.getFullYear(),
        WEDDING_DATE.getMonth(),
        WEDDING_DATE.getDate()
      );

      const weddingDayEnd = new Date(
        WEDDING_DATE.getFullYear(),
        WEDDING_DATE.getMonth(),
        WEDDING_DATE.getDate() + 1
      );

      // Wedding day itself
      if (now >= weddingDayStart && now < weddingDayEnd) {
        setStatus("today");
        return;
      }

      let difference: number;

      if (now < weddingDayStart) {
        setStatus("countdown");
        difference = weddingDayStart.getTime() - now.getTime();
      } else {
        setStatus("passed");
        difference = now.getTime() - weddingDayEnd.getTime();
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      const seconds = Math.floor((difference / 1000) % 60);

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (status === "today") {
    return (
      <div className="event-day">
        <h2>Today is the day.</h2>
        <p>We can't wait to celebrate this special moment with you.</p>
      </div>
    );
  }

  if (status === "passed") {
    return (
      <div className="passed">
        <h2>
          {time.days} Days, {time.hours} Hours Ago
        </h2>
      </div>
    );
  }

  const formatNumber = (value: number) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <span className={styles.uhead}>{formatNumber(time.days)}</span>
        <span className={styles.caption}>Days</span>
      </div>
      <span className={styles.colon}>:</span>
      <div className={styles.unit}>
        <span className={styles.uhead}>{formatNumber(time.hours)}</span>
        <span className={styles.caption}>Hours</span>
      </div>
      <span className={styles.colon}>:</span>
      <div className={styles.unit}>
        <span className={styles.uhead}>{formatNumber(time.minutes)}</span>
        <span className={styles.caption}>Minutes</span>
      </div>
      <span className={styles.colon}>:</span>
      <div className={styles.unit}>
        <span className={styles.uhead}>{formatNumber(time.seconds)}</span>
        <span className={styles.caption}>Seconds</span>
      </div>
    </div>
  );
}
