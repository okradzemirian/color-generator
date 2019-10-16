import Values from 'values.js'

const generateShadesAndTints = color =>
    new Values(`rgb(${color})`)
        .all(5)
        .slice(10, 30)
        .map(({ rgb: { r, g, b } }) => `${r}, ${g}, ${b}`)

export default generateShadesAndTints
