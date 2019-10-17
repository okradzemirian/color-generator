import React from 'react'
import { motion } from 'framer-motion'
import Shade from '../Shade/Shade'
import styles from './ShadesList.module.scss'

const ShadesList = ({ shades, setShades }) => (
    <motion.div
        className={styles.ShadesList}
        initial={{ transform: 'scale(0)' }}
        animate={{
            transform: [
                'scale(1)',
                'scale(0.96)',
                'scale(1)',
                'scale(0.98)',
                'scale(1)',
            ],
        }}
        exit={{ transform: 'scale(0)' }}
        transition={{ duration: 0.4 }}
    >
        {shades.map(shade => (
            <Shade shade={shade} setShades={setShades} />
        ))}
    </motion.div>
)

export default ShadesList
