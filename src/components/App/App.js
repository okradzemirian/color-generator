import React, { useEffect, useReducer } from 'react'
import ColorsContext from '../../context/ColorsContext'
import Header from '../Header/Header'
import ColorsList from '../ColorsList/ColorsList'
import generateColors from '../../utils/generateColors'
import styles from './App.module.scss'

const App = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'GENERATE':
                return generateColors()
            case 'LOCK':
                return state.map(color => {
                    if (color.id === action.id) {
                        return {
                            ...color,
                            locked: !color.locked,
                        }
                    }
                    return color
                })
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
        <ColorsContext.Provider value={{ state, dispatch }}>
            <div className={styles.App}>
                <Header />
                <ColorsList />
            </div>
        </ColorsContext.Provider>
    )
}

export default App
