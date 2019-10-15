import Values from 'values.js'

const generateShadesAndTints = color => {
    return new Values(`rgb(${color})`).all(10).map(({ rgb: { r, g, b } }) => {
        return `${r}, ${g}, ${b}`
    })
}

export default generateShadesAndTints
