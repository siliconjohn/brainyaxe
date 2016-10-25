var React = require('react')

var FretboardInlayMarker = ( props ) => {

  var { x, y, fretWidth, stringHeight, double } = props

  var radius = 12                  // size of circle
  var tempX = x + fretWidth / 2    // center circle in fret

  if( !double )
  {
    // single dot
    return (
      <circle cx={ tempX } cy={ y } r={ radius } className="inlay-marker"/>
    )
  } else {
    // double dot for 12th and 24th frets
    return (
      <g>
        <circle cx={ tempX } cy={ y - stringHeight } r={ radius } className="inlay-marker"/>
        <circle cx={ tempX } cy={ y + stringHeight} r={ radius } className="inlay-marker"/>
      </g>
    )
  }
}

module.exports = FretboardInlayMarker
