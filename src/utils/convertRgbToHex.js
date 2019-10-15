const convertRgbToHex = rgb => {
    const rgbList = rgb.split(', ')

    return (
        '#' +
        rgbList
            .map(color => {
                const hex = parseInt(color, 10).toString(16)
                return hex.length === 1 ? '0' + hex : hex
            })
            .join('')
    )
}

export default convertRgbToHex
