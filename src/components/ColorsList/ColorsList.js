import React, { useContext } from 'react'
import ColorsContext from '../../providers/colors/ColorsContext'
import Color from '../Color/Color'
import styles from './ColorsList.module.scss'

const ColorsList = () => {
    const { colors } = useContext(ColorsContext)

    return (
        <div className={styles.Colors}>
            {colors.map(color => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    )
}

export default ColorsList
