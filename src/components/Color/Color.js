import React from 'react'
import styles from './Color.module.scss'

const Color = ({ color }) => (
    <div className={styles.Color} style={{ background: color }}>
        {color}
    </div>
)

export default Color
