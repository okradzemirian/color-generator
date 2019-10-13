import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
    <header className={styles.Header}>
        <p className={styles.Text}>
            Press the spacebar to generate the new scheme!
        </p>
    </header>
)

export default Header
