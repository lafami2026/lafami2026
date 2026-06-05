import React from "react";
import DoubleLove from "@/utils/Icons/DoubleLove";
import Hangar from "@/utils/Icons/Hangar";
import Location from "@/utils/Icons/Location";
import 
import styles from "../styles/HomePage/schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.ss__wrapper}>
          <h3 className={styles.osw__h3}>Schedule</h3>
          <div className={styles.ssw__content}>
            <div className={styles.ssw__top}>
              <div className={styles.stop__one}>
                <div className={styles.love__circle}>
                  <span className={styles.svgone}>
                    <DoubleLove />
                  </span>
                </div>
                <p className={styles.pdate}>June, 2026</p>
                <div className={styles.love__circle}>
                  <span className={styles.svgone}>
                    <DoubleLove />
                  </span>
                </div>
              </div>
              <div className={styles.stop__two}>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Wed</span>
                    <span className={styles.date}>24</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Thu</span>
                    <span className={styles.date}>25</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Fri</span>
                    <span className={styles.date}>26</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Sat</span>
                    <span className={styles.date}>27</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Sun</span>
                    <span className={styles.date}>28</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Mon</span>
                    <span className={styles.date}>29</span>
                  </div>
                </div>
                <div className={styles.dateday}>
                  <div className={styles.dd}>
                    <span className={styles.day}>Tue</span>
                    <span className={styles.date}>30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ssw__bottom}>
              <div className={styles.swb__one}>
                <div className={styles.timeline}>
                  <span className={styles.timer}>1:00PM</span>
                  <div className={styles.line}></div>
                </div>
                <p className={styles.pbot}>Church Ceremony</p>
                <p className={styles.pbot2}>
                  As Christians, we want our wedding to be blessed before God
                  and His Church.
                </p>
                <div className={styles.special}>
                  <div className={styles.spec__one}>
                    <span>
                      <Hangar />
                    </span>
                    <p>Dress code on the invites</p>
                  </div>
                  <div className={styles.spec__one}>
                    <span>
                      <Location />
                    </span>
                    <p>Etougébé Baptist Church, Yaoundé</p>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.button__one}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
