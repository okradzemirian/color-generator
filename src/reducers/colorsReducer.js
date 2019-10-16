import { generateColor } from '../utils/generateColors'

const colorsReducer = (state, action) => {
    switch (action.type) {
        case 'GENERATE':
            return state.map(color => {
                // if color is locked return or if not generate new one

                if (color.locked) {
                    return color
                } else {
                    return generateColor()
                }
            })
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
        case 'UNLOCK_ALL':
            return state.map(color => ({
                ...color,
                locked: false,
            }))
        default:
            return state
    }
}

export default colorsReducer
