import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ColorsContext from '../../providers/colors/ColorsContext'
import ShadesList from '../ShadesList/ShadesList'
import convertRgbToHex from '../../utils/convertRgbToHex'
import generateShadesAndTints from '../../utils/generateShadesAndTints'
import { ReactComponent as UnlockedIcon } from '../../assets/unlocked.svg'
import { ReactComponent as LockedIcon } from '../../assets/locked.svg'
import { ReactComponent as ShadesButton } from '../../assets/shades-button.svg'
import styles from './Color.module.scss'

const Color = ({ id, color, locked }) => {
    const [shades, setShades] = useState({
        visible: false,
        selected: null,
    })

    const { toggleLockColor } = useContext(ColorsContext)

    const copyToClipboard = e => {
        e.target.select()
        document.execCommand('copy')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div
                className={styles.Color}
                style={{
                    background: `rgb(${shades.selected || color})`,
                    boxShadow: `0px 0px 0px 1px rgba(${color}, .5)`,
                }}
            >
                <AnimatePresence>
                    {shades.visible && (
                        <ShadesList
                            setShades={setShades}
                            shades={generateShadesAndTints(color)}
                        />
                    )}
                </AnimatePresence>

                <ShadesButton
                    onClick={() => setShades({ ...shades, visible: true })}
                    className={styles.ShadesButton}
                />

                {locked ? (
                    <LockedIcon
                        onClick={() => toggleLockColor(id)}
                        className={styles.Svg}
                    />
                ) : (
                    <UnlockedIcon
                        onClick={() => toggleLockColor(id)}
                        className={styles.Svg}
                    />
                )}

                <input
                    className={styles.ColorValue}
                    type='text'
                    value={convertRgbToHex(shades.selected || color)}
                    onClick={e => copyToClipboard(e)}
                />

                <p className={styles.RgbValue}>
                    RGB: {shades.selected || color}
                </p>
            </div>
        </motion.div>
    )
}

export default Color
