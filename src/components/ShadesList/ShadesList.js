import React from 'react'
import styles from './ShadesList.module.scss'

const ShadesList = ({ shades }) => (
    <div className={styles.ShadesList}>
        {shades.map(shade => (
            <div
                className={styles.Shade}
                style={{
                    background: `rgb(${shade})`,
                }}
            >
                {`rgb(${shade})`}
            </div>
        ))}
    </div>
)

export default ShadesList
