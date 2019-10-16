import React, { useState, useEffect } from 'react'
import ShadesList from '../ShadesList/ShadesList'
import convertRgbToHex from '../../utils/convertRgbToHex'
import generateShadesAndTints from '../../utils/generateShadesAndTints'
import styles from './Color.module.scss'
import LockedSvg from '../../svg/Locked'
import UnlockedSvg from '../../svg/Unlocked'
import ShadesButtonSvg from '../../svg/ShadesButton'

const Color = ({ id, color, locked, dispatch }) => {
    const [shades, setShades] = useState({
        visible: false,
        selected: null,
    })

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
                background: `rgb(${shades.selected || color})`,
                boxShadow: `0px 0px 0px 1px rgba(${color}, .5)`,
            }}
        >
            {shades.visible && (
                <ShadesList
                    setShades={setShades}
                    shades={generateShadesAndTints(color)}
                />
            )}

            <ShadesButtonSvg
                onClick={() => setShades({ ...shades, visible: true })}
                className={styles.ShadesButton}
            />

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
                value={convertRgbToHex(shades.selected || color)}
                onClick={e => copyToClipboard(e)}
            />

            <p className={styles.RgbValue}>RGB: {shades.selected || color}</p>
        </div>
    )
}

export default Color
