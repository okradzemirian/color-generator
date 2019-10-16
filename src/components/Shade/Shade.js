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
        {`rgb(${shade})`}
    </div>
)

export default Shade
