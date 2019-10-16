import React from 'react'
import styles from './Svg.module.scss'

const Locked = ({ className, ...otherProps }) => (
    <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 54 54"
        xmlSpace="preserve"
        className={`${styles.Unlocked} ${className || ''}`}
        {...otherProps}
    >
        <path
            d="M43,20.113V14.5C43,6.505,35.822,0,27,0S11,6.505,11,14.5v5.613c-3.401,0.586-6,3.55-6,7.117v19.542
	C5,50.757,8.243,54,12.229,54h29.542C45.757,54,49,50.757,49,46.771V27.229C49,23.663,46.401,20.699,43,20.113z M13,14.5
	C13,7.607,19.28,2,27,2s14,5.607,14,12.5V20H13V14.5z M31,38c0,2.206-1.794,4-4,4s-4-1.794-4-4v-6c0-2.206,1.794-4,4-4s4,1.794,4,4
	V38z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
    </svg>
)

export default Locked
