import React from 'react'
import Color from '../Color/Color'

const ColorsList = ({ colors }) =>
    colors.map((color, idx) => <Color key={idx} color={color} />)

export default ColorsList
