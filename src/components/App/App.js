import React, { useEffect, useReducer } from 'react'
import Header from '../Header/Header'
import ColorsList from '../ColorsList/ColorsList'
import generateColors from '../../utils/generateColors'
import styles from './App.module.scss'

const App = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'GENERATE':
                return generateColors()
            default:
                return state
        }
    }, generateColors())

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.which === 32) {
                dispatch({
                    type: 'GENERATE',
                })
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div className={styles.App}>
            <Header />
            <ColorsList colors={state} />
        </div>
    )
}

export default App
