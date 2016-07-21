var React = require('react')

var FretboardOpenNote = (props) => {
  var { x, y, width, height, midiNote, key, note, scaleNote} = props
  var fontHeight = 5
  var fontXoffset = -6

  var getCircle = () =>  {
    if(scaleNote) {
      return (
        <circle cx={ x + width /2 } cy={ y + height / 2} r="12" className="note-circle"/>
      )
    } else {
      return
    }
  }

  var getNoteName = () =>  {
    if(scaleNote) {
      return (
        <text x={ x + fontXoffset + width /2 } y={ fontHeight + y + height / 2} className="fret-note-name">{note}</text>
      )
    } else {
      return
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
