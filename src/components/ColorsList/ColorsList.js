import React from 'react'
import Color from '../Color/Color'
import styles from './ColorsList.module.scss'

const ColorsList = ({ colors }) => (
    <div className={styles.ColorsList}>
        {colors.map((color, idx) => (
            <Color key={idx} color={color} />
        ))}
    </div>
)

export default ColorsList
