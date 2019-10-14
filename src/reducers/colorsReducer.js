import generateColors from '../utils/generateColors'

const colorsReducer = (state, action) => {
    switch (action.type) {
        case 'GENERATE':
            const lockedColors = state.filter(({ locked }) => locked)
            return [...lockedColors, ...generateColors(5 - lockedColors.length)]
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
}

export default colorsReducer
