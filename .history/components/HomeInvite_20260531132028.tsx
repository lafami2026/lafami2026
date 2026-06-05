import React from 'react'
import styles from "../styles/HomePage/homeinvite.module.scss"

const HomeInvite = () => {
  return (
    <div className={`section ${styles.invite__section}`}>
      <div className={`container ${styles.invite__container}`}>
        <div className={styles.invite__wrapper}>
          <div className={styles.iw__top}>
            <span>DEAR FAMILY & FRIENDS</span>
            <h3>You are Invited</h3>
          </div>
          <div className={styles.iw__mid}>

          </div>
          <div className={styles.iw__mid}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeInvite