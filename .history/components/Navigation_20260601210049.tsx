import React from 'react'
import Menu from '@/utils/Icons/Menu'
import styles from "../styles/HomePage/navigation.module.scss"

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.menu}>
          <Menu
        </div>
        <div className={styles.rsvper}>

        </div>
      </div>
    </div>
  )
}

export default Navigation