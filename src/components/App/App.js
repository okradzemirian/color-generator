import React, { useEffect, useContext } from 'react'

import ColorsContext from '../../providers/colors/ColorsContext'
import Header from '../Header/Header'
import ColorsList from '../ColorsList/ColorsList'
import styles from './App.module.scss'

const App = () => {
    const { generateNewColors } = useContext(ColorsContext)

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.which === 32) {
                generateNewColors()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [generateNewColors])

    return (
        <div className={styles.App}>
            <Header />
            <ColorsList />
        </div>
    )
}

export default App
