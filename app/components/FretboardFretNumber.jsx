var React = require('react')

const markers = [3,5,7,9,12,15,17,19,21,24]

var FretboardFretNumber = (props) => {
  var { x, y, number, fretWidth, key} = props

  var markerClass = markers.indexOf(number) > -1 ? "marker-bold-text " : "marker-normal-text"

  var tempX = fretWidth / 2 - 8
  return (
    <text x={ x + tempX  } y={ y } className={markerClass}>{number}</text>
  )
}

module.exports = FretboardFretNumber
