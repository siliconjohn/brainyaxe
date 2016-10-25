var React = require('react')

var FretboardOpenString = ( props ) => {

  var { y, width, key, note } = props

  var textYOffset = 6
  var textXOffset = 6

  // short notename so it fits in the circle
  var noteName = note.substring( 0, 2 )

  // setup offsetX for 2 char noteName so it's still centered
  var offsetX = 0
  if( noteName.length > 1 ) offsetX = -4

  return (
    <text x={ width / 2 - textXOffset } y={ y + textYOffset }
      className="open-string-text">{ noteName }
    </text>
  )
}

module.exports = FretboardOpenString
