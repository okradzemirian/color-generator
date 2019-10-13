import React from 'react'
import Color from '../Color/Color'

const ColorsList = ({ colors }) => colors.map(color => <Color color={color} />)

export default ColorsList
