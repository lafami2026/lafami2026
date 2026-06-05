import React from 'react'
import styles from "../styles/HomePage/ourstory.module.scss"

const OurStory = () => {
  return (
    <div className={styles.ourstory}>
      <div className={`container ${styles.os__container}`}>
        <div className={styles.os__wrapper}>
          <h3>Our Story</h3>
        </div>
      </div>
    </div>
  )
}

export default OurStory