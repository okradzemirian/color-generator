const generateColor = idx => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return {
        id: idx,
        color: `${r}, ${g}, ${b}`,
        locked: false,
    }
}

const generateColors = (colorsCount = 5) => {
    const colors = []

    for (let i = 0; i < colorsCount; i++) {
        colors.push(generateColor(i))
    }

    return colors
}

export default generateColors
