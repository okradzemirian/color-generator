import React, { useState, useCallback } from 'react'
import ColorsContext from './ColorsContext'
import generateColors, { generateColor } from '../../utils/generateColors'

const ColorsProvider = ({ children }) => {
    const [colors, setColors] = useState([generateColors()])
    const [currentColorsIndex, setCurrentColorsIndex] = useState(0)

    const generateNewColors = useCallback(() => {
        const currentColorsState = colors[currentColorsIndex]

        setColors([
            ...colors,
            currentColorsState.map(color =>
                color.locked ? color : generateColor(),
            ),
        ])
        setCurrentColorsIndex(colors.length)
    }, [colors, currentColorsIndex])

    const unlockAllColors = () => {
        setColors(
            colors.map((colors, idx) => {
                if (idx === currentColorsIndex) {
                    return colors.map(color => ({ ...color, locked: false }))
                }
                return colors
            }),
        )
    }

    const toggleLockColor = id => {
        setColors(
            colors.map((colors, idx) => {
                if (idx === currentColorsIndex) {
                    return colors.map(color => {
                        if (color.id === id) {
                            return { ...color, locked: !color.locked }
                        }
                        return color
                    })
                }
                return colors
            }),
        )
    }

    const canUndo = useCallback(() => {
        return currentColorsIndex > 0
    }, [currentColorsIndex])

    const canRedo = () => {
        return currentColorsIndex < colors.length - 1
    }

    const undo = () => {
        if (canUndo()) {
            setCurrentColorsIndex(currentColorsIndex - 1)
        }
    }

    const redo = () => {
        if (canRedo()) {
            setCurrentColorsIndex(currentColorsIndex + 1)
        }
    }

    return (
        <ColorsContext.Provider
            value={{
                colors: colors[currentColorsIndex],
                undo,
                redo,
                canUndo: canUndo(),
                canRedo: canRedo(),
                unlockAllColors,
                toggleLockColor,
                generateNewColors,
            }}
        >
            {children}
        </ColorsContext.Provider>
    )
}

export default ColorsProvider
