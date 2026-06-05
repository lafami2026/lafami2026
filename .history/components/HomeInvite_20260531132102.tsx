import React from 'react'
import styles from "../styles/HomePage/homeinvite.module.scss"

const HomeInvite = () => {
  return (
    <div className={`section ${styles.invite__section}`}>
      <div className={`container ${styles.invite__container}`}>
        <div className={styles.invite__wrapper}>
          <div className={styles.iw__top}>
            <span className={styles.iw__span}>DEAR FAMILY & FRIENDS</span>
            <h3 className={styles.iw__h3}>You are Invited</h3>
          </div>
          <div className={styles.iw__mid}>
            <p></p>
          </div>
          <div className={styles.iw__mid}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeInvite