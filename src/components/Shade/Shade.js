import React from 'react'
import styles from './Shade.module.scss'

const Shade = ({ shade, setShades }) => (
    <div
        onClick={() => setShades({ visible: false, selected: shade })}
        className={styles.Shade}
        style={{
            background: `rgb(${shade})`,
        }}
    >
        <p className={styles.Text}>{`rgb(${shade})`}</p>
    </div>
)

export default Shade
