import React, { useContext } from 'react'
import ColorsContext from '../../context/ColorsContext'
import Color from '../Color/Color'
import styles from './ColorsList.module.scss'

const ColorsList = () => {
    const { state, dispatch } = useContext(ColorsContext)

    return (
        <div className={styles.Colors}>
            {state.map((color, idx) => (
                <Color key={color.id} dispatch={dispatch} {...color} />
            ))}
        </div>
    )
}

export default ColorsList
