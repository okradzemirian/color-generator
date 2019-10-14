import uuid from 'uuid/v4'

const generateColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return {
        id: uuid(),
        color: `${r}, ${g}, ${b}`,
        locked: false,
    }
}

const generateColors = (colorsCount = 5) => {
    const colors = []

    for (let i = 0; i < colorsCount; i++) {
        colors.push(generateColor())
    }

    return colors
}

export default generateColors
