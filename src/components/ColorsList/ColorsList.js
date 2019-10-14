import React, { useContext } from 'react'
import ColorsContext from '../../context/ColorsContext'
import Color from '../Color/Color'
import styles from './ColorsList.module.scss'

const ColorsList = () => {
    const { state } = useContext(ColorsContext)

    return (
        <div className={styles.ColorsList}>
            {state.map(({ locked, color }, idx) => (
                <Color key={idx} locked={locked} color={color} />
            ))}
        </div>
    )
}

export default ColorsList
