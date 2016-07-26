var React = require('react')

var FretboardOpenNote = (props) => {
  var { x, y, width, height, midiNote, key, note, scaleNote,
        chordNote, isOpenString, degree} = props

  // adjustments used to center text
  var textYOffset = 6
  var textXOffset = -6

  var getCircle = () =>  {

    if(scaleNote || chordNote) {
      // get the className to use for the circle
      var circleClass = ""
      if(!scaleNote && chordNote) {
         circleClass = "note-circle-chord"
      } else if(scaleNote && !chordNote) {
         circleClass = "note-circle-scale"
      } else if(scaleNote && chordNote) {
         circleClass = "note-circle-scale-chord"
      }

      return (
        <circle cx={ x + width /2 } cy={ y + height / 2} r="18" className={circleClass}/>
       )
    }
  }

  var getNoteName = () =>  {
    if(!isOpenString && (scaleNote || chordNote)) {

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

  var getNoteDegree = () =>  {
    if(degree && !isOpenString && (scaleNote || chordNote)) {

      var globalXOffset = 4
      var textXOffset = 21
      if(degree.length > 1) textXOffset = 24

      var addOnClass = "degree-circle"

      if( degree.indexOf("1") > -1 ) {
        addOnClass += " degree-circle-1"
      } else if( degree.indexOf("3") > -1 ) {
        addOnClass += " degree-circle-3"
      } else if( degree.indexOf("5") > -1 ) {
        addOnClass += " degree-circle-5"
      }

      return (
        <g>
          <circle cx={ globalXOffset + x + width - 18 } cy={ y + height - 8} r="9" className={addOnClass}/>
          <text x={ globalXOffset + x + width - textXOffset } y={ y + height - 4  } className="fret-note-degree">{degree}</text>
        </g>
      )
    }
  }

  return (
    <g key={key}>
      {getNoteDegree()}
      {getCircle()}
      {getNoteName()}
    </g>
  )
}

module.exports = FretboardOpenNote
