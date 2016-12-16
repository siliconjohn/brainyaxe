import React from 'react'

const markers = [ 3, 5, 7, 9, 12, 15, 17, 19, 21, 24 ]

var FretboardFretNumber = ( props ) => {
  let { x, y, parentWidth, number } = props

  let className = markers.indexOf( number ) > -1 ? "fret-number-highlight " : "fret-number"

  // find center
  let centerX = x + parentWidth / 2

  return (
    <text x={ centerX } y={ y } textAnchor="middle" className={ className }>{ number }</text>
  )
}

module.exports = FretboardFretNumber
