import React from 'react'
import Shade from '../Shade/Shade'
import styles from './ShadesList.module.scss'

const ShadesList = ({ shades, setShades }) => (
    <div className={styles.ShadesList}>
        {shades.map(shade => (
            <Shade shade={shade} setShades={setShades} />
        ))}
    </div>
)

export default ShadesList
