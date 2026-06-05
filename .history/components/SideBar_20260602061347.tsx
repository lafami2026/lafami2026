import React from 'react'
import Cancel from '@/utils/Icons/Cancel'
import styles from "../styles/HomePage/navigation.module.scss"

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.side__wrap}>
        <div className={styles.side__inner}>
          <div className={styles.top}>
            <Cancel/>
            <span>La FaMi</span>
          </div>
          <div className={styles.mid}>
            span
          </div>
          <div className={styles.bottom}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar