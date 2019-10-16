import React, { useContext } from 'react'
import UnlockedSvg from '../../svg/Unlocked'
import ColorsContext from '../../context/ColorsContext'
import styles from './Header.module.scss'

const Header = () => {
    const { dispatch } = useContext(ColorsContext)

    const unlockAll = () => {
        dispatch({
            type: 'UNLOCK_ALL',
        })
    }

    return (
        <header className={styles.Header}>
            <p className={styles.Text}>
                Press the spacebar to generate the new scheme!
            </p>
            <UnlockedSvg onClick={unlockAll} className={styles.UnlockAll} />
        </header>
    )
}

export default Header
