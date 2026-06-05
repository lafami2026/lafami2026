"use client";

import React, { useState, RefObject } from "react";
import DoubleLove from "@/utils/Icons/DoubleLove";
import Hangar from "@/utils/Icons/Hangar";
import Location from "@/utils/Icons/Location";
import Directions from "@/utils/Icons/Directions";
import CirclePlus from "@/utils/Icons/CirclePlus";
import styles from "../styles/HomePage/schedule.module.scss";
import Link from "next/link";
import AddToCalendarButtons from "./AddToCalendarButtons";
import AddToCalendarButtons2 from "./AddToCalendarButtons2";

const Schedule = ({ scRef }: { scRef: RefObject<HTMLDivElement | null> }) => {
  const [activeButton, setActiveButton] = useState(false);
  const [activeButton2, setActiveButton2] = useState(false);

  const leadColors = [
    {
      name: "Purple",
      color: "#9B59D6",
    },
    {
      name: "Lilac",
      color: "#C78FE0",
    },
    {
      name: "Lavender",
      color: "#B8A9D9",
    }
  ];

  const leadColors = [
    {
      name: "Purple",
      color: "#9B59D6",
    },
    {
      name: "Lilac",
      color: "#C78FE0",
    },
    {
      name: "Lavender",
      color: "#B8A9D9",
    }
  ];

  return (
    <div className={styles.schedule} ref={scRef}>
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
                  <span className={styles.timer}>1:00 PM</span>
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
                  <div className={styles.main__wrap}>
                    <div
                      className={styles.button__one}
                      onClick={() => setActiveButton(!activeButton)}
                    >
                      <span>Add to calendar</span>
                      <span>
                        <CirclePlus />
                      </span>
                    </div>
                    <AddToCalendarButtons
                      setActive={setActiveButton}
                      activeButton={activeButton}
                    />
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/iSC2C62xwQuhSZtU9"
                    target="_blank"
                    className={styles.button__two}
                  >
                    <span>Get direction</span>
                    <span>
                      <Directions />
                    </span>
                  </Link>
                </div>
              </div>
              <div className={styles.swb__one}>
                <div className={styles.timeline}>
                  <span className={styles.timer}>6:30 PM</span>
                  <div className={styles.line}></div>
                </div>
                <p className={styles.pbot}>Reception</p>
                <p className={styles.pbot2}>
                  We want to share a few words with everyone. Dinner, drinks,
                  and dancing to follow!
                </p>
                <div className={styles.special}>
                  <div className={styles.spec__one}>
                    <span>
                      <Hangar />
                    </span>
                    <div className={styles.specleft}>
                      <p>Dress Code</p>
                      <div className={styles.spl__bottom}>
                        <div className={styles.accent}>
                          <span>Lead</span>
                          <div className={styles.colorss}>
                            <div className={styles.cwrapp}>
                              <div className={styles.colorr}></div>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.spec__one}>
                    <span>
                      <Location />
                    </span>
                    <p>Blessings Hall — EEC Montée Jouvence, Yaoundé</p>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.main__wrap}>
                    <div
                      className={styles.button__one}
                      onClick={() => setActiveButton2(!activeButton2)}
                    >
                      <span>Add to calendar</span>
                      <span>
                        <CirclePlus />
                      </span>
                    </div>
                    <AddToCalendarButtons2
                      setActive={setActiveButton2}
                      activeButton={activeButton2}
                    />
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/B7LkZkcZ1qtPeb1V6?g_st=ac"
                    target="_blank"
                    className={styles.button__two}
                  >
                    <span>Get direction</span>
                    <span>
                      <Directions />
                    </span>
                  </Link>
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
