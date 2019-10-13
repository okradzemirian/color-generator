import React from 'react'
import styles from './Color.module.scss'

const Color = ({ color }) => {
    const copyToClipboard = e => {
        e.target.select()
        document.execCommand('copy')
    }

    return (
        <div className={styles.Color} style={{ background: color }}>
            <input
                className={styles.ColorValue}
                type="text"
                value={color}
                onClick={e => copyToClipboard(e)}
            />
        </div>
    )
}

export default Color
