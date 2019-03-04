import React from 'react'
import styles from '../../styles/app.module.scss'

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <h1 className={styles.appTitle}>
                <span className={styles.appTitle__lethbridge}>
                Lethbridge
                </span>
                <br />
                <span className={styles.appTitle__food}>
                Food 
                </span>
                <span className={styles.appTitle__guide}>
                guide
                </span>
            </h1>
        </div>
    )
}

export default Header;