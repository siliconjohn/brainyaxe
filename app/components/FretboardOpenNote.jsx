var React = require('react')

var FretboardOpenNote = (props) => {
  var { x, y, width, height, midiNote, key, note, scaleNote, isOpenString} = props

  // adjustments used to center text
  var textYOffset = 6
  var textXOffset = -6

  var getCircle = () =>  {
    if(scaleNote) {
      return (
        <circle cx={ x + width /2 } cy={ y + height / 2} r="18" className="note-circle"/>
      )
    }
  }

  var getNoteName = () =>  {
    if(!isOpenString && scaleNote) {

      // short notename so it fits in the circle
      var noteName = note.substring(0,2)

      // setup offsetX for 2 char noteName so it's still centered
      var offsetX = 0
      if(noteName.length > 1) offsetX = -4

      return (
        <text x={ x + textXOffset + offsetX + width /2 } y={ textYOffset + y + height / 2} className="fret-note-name">{noteName}</text>
      )
    }
  }

  return (
    <g key={key}>
      {getCircle()}
      {getNoteName()}
    </g>
  )
}

module.exports = FretboardOpenNote
