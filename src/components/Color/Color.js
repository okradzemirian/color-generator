import React from 'react'
import convertRgbToHex from '../../utils/convertRgbToHex'
import styles from './Color.module.scss'
import LockedSvg from '../../svg/Locked'
import UnlockedSvg from '../../svg/Unlocked'

const Color = ({ id, color, locked, dispatch }) => {
    const copyToClipboard = e => {
        e.target.select()
        document.execCommand('copy')
    }

    const lockOrUnlock = () => {
        dispatch({
            type: 'LOCK',
            id,
        })
    }

    return (
        <div
            className={styles.Color}
            style={{
                background: `rgb(${color})`,
                boxShadow: `0px 0px 0px 1px rgba(${color}, .5)`,
            }}
        >
            {locked ? (
                <LockedSvg onClick={lockOrUnlock} className={styles.Locked} />
            ) : (
                <UnlockedSvg
                    onClick={lockOrUnlock}
                    className={styles.Unlocked}
                />
            )}

            <input
                className={styles.ColorValue}
                type="text"
                value={convertRgbToHex(color)}
                onClick={e => copyToClipboard(e)}
            />

            <p className={styles.RgbValue}>RGB: {color}</p>
        </div>
    )
}

export default Color
