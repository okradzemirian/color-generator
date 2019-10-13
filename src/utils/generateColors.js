const generateColor = () => {
    let color = '#'
    const letters = '0123456789ABCDEF'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

const generateColors = colorsCount => {
    const colors = []

    for (let i = 0; i < colorsCount; i++) {
        colors.push(generateColor())
    }

    return colors
}

export default generateColors
