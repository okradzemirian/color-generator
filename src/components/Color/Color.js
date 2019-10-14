import React from 'react'
import styles from './Color.module.scss'
import LockedSvg from '../../svg/Locked'
import UnlockedSvg from '../../svg/Unlocked'

const Color = ({ color: { value, locked } }) => {
    const copyToClipboard = e => {
        e.target.select()
        document.execCommand('copy')
    }

    return (
        <div
            className={styles.Color}
            style={{
                background: `rgb(${value})`,
                boxShadow: `0px 0px 0px 1px rgba(${value}, .5)`,
            }}
        >
            {locked ? (
                <LockedSvg className={styles.Locked} />
            ) : (
                <UnlockedSvg
                    onClick={() => console.log('hey')}
                    className={styles.Unlocked}
                />
            )}

            <input
                className={styles.ColorValue}
                type="text"
                value={`rgb(${value})`}
                onClick={e => copyToClipboard(e)}
            />
        </div>
    )
}

export default Color
