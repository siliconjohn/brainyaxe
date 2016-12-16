import React from 'react'

var FretboardInlayMarker = ( props ) => {
  let { x, y, fretWidth, stringHeight, double } = props

  const radius = 8                   // size of circle
  let tempX = x + fretWidth / 2    // center circle in fret

  if( !double )
  {
    // single dot
    return (
      <circle cx={ tempX } cy={ y } r={ radius } className="inlay"/>
    )
  } else {
    // double dot for 12th and 24th frets
    return (
      <g>
        <circle cx={ tempX } cy={ y - stringHeight } r={ radius } className="inlay"/>
        <circle cx={ tempX } cy={ y + stringHeight} r={ radius } className="inlay"/>
      </g>
    )
  }
}

module.exports = FretboardInlayMarker
